import assert from "node:assert/strict";
import { test } from "node:test";
import { getConsultationContent } from "../src/features/consultation/data/consultation-content.ts";
import { buildWhatsAppUrl } from "../src/features/consultation/utils/whatsapp-url.ts";

test("each consultation entry point carries a distinct relevant message", () => {
  const sources = ["hero", "layout", "closing", "header", "floating"] as const;
  const messages = sources.map((source) => {
    const { label, message } = getConsultationContent({ source });
    assert.ok(label.length > 0);
    const url = new URL(buildWhatsAppUrl("12025550123", message));
    assert.equal(url.searchParams.get("text"), message);
    return message;
  });
  assert.equal(new Set(messages).size, sources.length);
  assert.match(messages[0], /merancang toko/);
  assert.match(messages[1], /layout 3D/);
  assert.match(messages[2], /spesialis rak/);
});

test("product enquiry retains the exact product name and special characters", () => {
  const productName = "Rak Toko & Display 2 × 3";
  const { label, message } = getConsultationContent({
    source: "product",
    productName,
  });
  assert.equal(label, "Tanya Harga Satuan/Paket");
  const url = new URL(buildWhatsAppUrl("12025550123", message));
  assert.ok(url.searchParams.get("text")?.includes(productName));
  assert.equal(url.searchParams.size, 1);
});
