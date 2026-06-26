// landing/e2e/m1a-parity.spec.ts
import { test, expect } from "@playwright/test";
import { NAV_H } from "../lib/motion/constants";

test("JS-off: todo el contenido es visible y los números reales están presentes", async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto("/");
  await expect(page.locator("#hero-title")).toBeVisible();
  // factrow del hero con números reales sin JS (scoped al hero para evitar strict-mode con múltiples "546" en la página)
  await expect(page.locator("#inicio").getByText("546", { exact: false }).first()).toBeVisible();
  // ningún [data-reveal] debe quedar oculto sin JS (sin clase `js` no aplica opacity:0)
  const hidden = await page.locator('[data-reveal]').evaluateAll(
    (els) => els.filter((e) => getComputedStyle(e).opacity === "0").length
  );
  expect(hidden).toBe(0);
  await ctx.close();
});

test("skip-link y ancla mueven el scroll con offset de la nav", async ({ page }) => {
  await page.goto("/");
  await page.locator('a.skip').focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#inicio")).toBeInViewport();
  await page.goto("/#trabajo");
  await page.waitForTimeout(900); // dar tiempo a Lenis
  const top = await page.locator("#trabajo").evaluate((e) => e.getBoundingClientRect().top);
  expect(top).toBeGreaterThanOrEqual(NAV_H - 2); // el ancla queda en/bajo la nav fija (offset de Lenis aplicado), no tapada
});

test("reduced-motion: sin SMIL corriendo y reveals visibles", async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto("/");
  await page.waitForTimeout(300);
  const smil = await page.locator("animateMotion").count();
  expect(smil).toBe(0); // RevealProvider los elimina bajo reduced-motion
  const hidden = await page.locator('[data-reveal]').evaluateAll(
    (els) => els.filter((e) => getComputedStyle(e).opacity === "0").length
  );
  expect(hidden).toBe(0);
  await ctx.close();
});

// añadir a e2e/m1a-parity.spec.ts
test("about__side sticky sigue funcionando con Lenis", async ({ page }) => {
  await page.goto("/#sobre-mi");
  await page.waitForTimeout(600);
  const pos = await page.locator(".about__side").evaluate((e) => getComputedStyle(e).position);
  expect(pos).toBe("sticky");
  // y no se solapa con el footer al hacer scroll largo (humo): la página no crashea
  await page.mouse.wheel(0, 2000);
  await page.waitForTimeout(400);
  await expect(page.locator(".about__side")).toBeVisible();
});
