import { test, expect } from "@playwright/test";

test("hero-entry: el H1 usa la variante solo-transform (LCP-safe) y queda visible", async ({ page }) => {
  await page.goto("/");
  // El H1 (LCP) usa reveal SOLO-TRANSFORM. Aseverar el atributo discrimina la regresión real: leer la
  // opacity sería tautológico (ya es 1 tras is-visible, con tf o con reveal normal). Si alguien revierte
  // el H1 a un data-reveal estándar (opacity:0), este assert falla.
  await expect(page.locator("#hero-title")).toHaveAttribute("data-reveal", "tf");
  await expect(page.locator("#hero-title")).toBeVisible();
  // todos los nodos del copy above-the-fold quedan visibles tras la entrada (ninguno atascado en opacity:0)
  // .trust queda below-the-fold en el viewport 720px de Playwright: su reveal es lazy (dispara al scroll), correcto.
  await page.waitForFunction(() => {
    const els = [...document.querySelectorAll('.hero__copy [data-reveal]')];
    return els.length > 0 && els.every((e) => e.classList.contains("is-visible"));
  }, null, { timeout: 4000 });
});

test("FAQ: respuestas en el DOM sin JS (SSR-safe)", async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto("/");
  await expect(page.locator("#faq")).toBeVisible();
  // El requisito §0 es PRESENCIA EN EL DOM, no renderizado: el contenido de un <details> cerrado queda bajo
  // content-visibility:hidden, así que getByText (texto renderizado) daría falso-negativo sin JS. textContent
  // lo verifica independientemente del CSS.
  const txt = await page.locator("#faq").textContent();
  expect(txt).toContain("en proceso de grado");
  await ctx.close();
});

test("FAQ: acordeón exclusivo (name) — abrir uno cierra el otro", async ({ page }) => {
  await page.goto("/#faq");
  const items = page.locator("#faq details");
  await items.nth(0).locator("summary").click();
  await expect(items.nth(0)).toHaveAttribute("open", "");
  await items.nth(1).locator("summary").click();
  await expect(items.nth(1)).toHaveAttribute("open", "");
  await expect(items.nth(0)).not.toHaveAttribute("open", ""); // el name="faq" cerró el primero
});

test("Stats: números reales en el DOM sin JS", async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto("/");
  await expect(page.locator("#stats")).toBeVisible();
  // presencia en el DOM (§0), robusto al CSS
  const txt = await page.locator("#stats").textContent();
  expect(txt).toContain("546");
  await ctx.close();
});

test("Stats: con JS el count-up llega al valor real", async ({ page }) => {
  await page.goto("/");
  // Esperar hidratación React antes de interactuar con el DOM: sin esto, scrollIntoViewIfNeeded
  // actúa mientras React rehidrata y el nodo se detacha ("not attached to the DOM"). Mismo patrón
  // que el test count-up de m1a-parity.spec.ts.
  await page.waitForLoadState("networkidle");
  await page.locator("#stats").scrollIntoViewIfNeeded();
  await expect(page.locator('#stats [data-count]').first()).toHaveText(/546/, { timeout: 4000 });
});

test("Stats: el 7 de Carrillo NO anima (anti-7=7: cluster narrativo sin data-count)", async ({ page }) => {
  await page.goto("/");
  // el cluster narrativo (Carrillo) no tiene [data-count]; su "7 microservicios" es estático
  const narrativeCounts = await page.locator('#stats .sb__cluster--narrative [data-count]').count();
  expect(narrativeCounts).toBe(0);
});
