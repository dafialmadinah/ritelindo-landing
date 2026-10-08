/** International digits only (E.164 shape); does not establish account ownership. */
export function buildWhatsAppUrl(number: string, message: string): string {
  if (!/^[1-9]\d{6,14}$/.test(number))
    throw new Error(
      "Nomor WhatsApp harus 7-15 digit internasional tanpa +, spasi, atau tanda hubung.",
    );
  if (!message.trim()) throw new Error("Pesan WhatsApp tidak boleh kosong.");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
