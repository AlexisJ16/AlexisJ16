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
