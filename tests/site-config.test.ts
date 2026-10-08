import assert from "node:assert/strict";
import { test } from "node:test";

test("site configuration is noindex by default and requires a real origin for indexing", async () => {
 const previous = { url: process.env.NEXT_PUBLIC_SITE_URL, indexable: process.env.SITE_INDEXABLE };
 try {
  delete process.env.NEXT_PUBLIC_SITE_URL;
  delete process.env.SITE_INDEXABLE;
  const preview = await import("../src/shared/config/site.ts?test=default");
  assert.equal(preview.site.indexable, false);
  assert.equal(preview.site.url, undefined);
  process.env.SITE_INDEXABLE = "true";
  await assert.rejects(import("../src/shared/config/site.ts?test=missing-origin"));
  process.env.NEXT_PUBLIC_SITE_URL = "https://example.test/";
  const production = await import("../src/shared/config/site.ts?test=valid-origin");
  assert.equal(production.site.url, "https://example.test");
  assert.equal(production.site.indexable, true);
  for (const [index, value] of ["javascript:alert(1)", "https://example.test/path", "https://user:password@example.test", "https://example.test/?query=1"].entries()) {
   process.env.NEXT_PUBLIC_SITE_URL = value;
   await assert.rejects(import(`../src/shared/config/site.ts?test=invalid-${index}`));
  }
 } finally {
  if (previous.url === undefined) delete process.env.NEXT_PUBLIC_SITE_URL; else process.env.NEXT_PUBLIC_SITE_URL = previous.url;
  if (previous.indexable === undefined) delete process.env.SITE_INDEXABLE; else process.env.SITE_INDEXABLE = previous.indexable;
 }
});
