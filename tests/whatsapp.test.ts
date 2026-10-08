import assert from "node:assert/strict";
import { test } from "node:test";
import { buildWhatsAppUrl } from "../src/features/consultation/whatsapp-url.ts";
test("encodes message, including punctuation, Unicode and line breaks", () => {
  const text = "Halo & layout 3D?\nUkuran 6 × 12 m";
  const url = new URL(buildWhatsAppUrl("6281234567890", text));
  assert.equal(url.origin, "https://wa.me");
  assert.equal(url.pathname, "/6281234567890");
  assert.equal(url.searchParams.get("text"), text);
  assert.equal(url.searchParams.size, 1);
});
test("rejects malformed numbers and empty messages", () => {
  for (const number of [
    "",
    "+6281234567890",
    "628 123456789",
    "628-123456789",
    "081234567890",
    "123456",
    "1234567890123456",
    "6281234?text=x",
  ]) {
    assert.throws(() => buildWhatsAppUrl(number, "Halo"));
  }
  assert.throws(() => buildWhatsAppUrl("6281234567890", "  "));
});
