import assert from "node:assert/strict";
import { test } from "node:test";

test("site config indexes Vercel production while keeping local and preview noindex", async () => {
 const previous = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  indexable: process.env.SITE_INDEXABLE,
  vercelEnv: process.env.VERCEL_ENV,
  vercelProductionUrl: process.env.VERCEL_PROJECT_PRODUCTION_URL,
 };
 try {
  delete process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.SITE_INDEXABLE;
  delete process.env.VERCEL_ENV;
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const local = await import("../src/shared/config/site.ts?test=local");
  assert.equal(local.site.indexable, false);
  assert.equal(local.site.url, undefined);

  process.env.VERCEL_ENV = "preview";
  process.env.VERCEL_PROJECT_PRODUCTION_URL = "ritelindo-landing-peach.vercel.app";
  const preview = await import("../src/shared/config/site.ts?test=preview");
  assert.equal(preview.site.indexable, false);
  assert.equal(preview.site.url, "https://ritelindo-landing-peach.vercel.app");

  process.env.VERCEL_ENV = "production";
  const production = await import("../src/shared/config/site.ts?test=production");
  assert.equal(production.site.indexable, true);
  assert.equal(production.site.url, "https://ritelindo-landing-peach.vercel.app");

  process.env.SITE_INDEXABLE = "false";
  const explicitlyHidden = await import("../src/shared/config/site.ts?test=explicit-false");
  assert.equal(explicitlyHidden.site.indexable, false);

  process.env.SITE_INDEXABLE = "true";
  process.env.VERCEL_ENV = "development";
  delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
  await assert.rejects(import("../src/shared/config/site.ts?test=missing-origin"));
  process.env.SITE_INDEXABLE = "true";
  process.env.NEXT_PUBLIC_SITE_URL = "https://example.test/";
  const configured = await import("../src/shared/config/site.ts?test=valid-origin");
  assert.equal(configured.site.url, "https://example.test");
  assert.equal(configured.site.indexable, true);
  for (const [index, value] of ["javascript:alert(1)", "https://example.test/path", "https://user:password@example.test", "https://example.test/?query=1"].entries()) {
   process.env.NEXT_PUBLIC_SITE_URL = value;
   await assert.rejects(import(`../src/shared/config/site.ts?test=invalid-${index}`));
  }
 } finally {
  if (previous.url === undefined) delete process.env.NEXT_PUBLIC_SITE_URL; else process.env.NEXT_PUBLIC_SITE_URL = previous.url;
  if (previous.indexable === undefined) delete process.env.SITE_INDEXABLE; else process.env.SITE_INDEXABLE = previous.indexable;
  if (previous.vercelEnv === undefined) delete process.env.VERCEL_ENV; else process.env.VERCEL_ENV = previous.vercelEnv;
  if (previous.vercelProductionUrl === undefined) delete process.env.VERCEL_PROJECT_PRODUCTION_URL; else process.env.VERCEL_PROJECT_PRODUCTION_URL = previous.vercelProductionUrl;
 }
});
