import { faqs } from "@/features/landing/data/content";

export function FaqSection() {
  return (
    <section className="faq content-shell" id="faq">
      <div className="faq-heading">
        <div className="section-label">
          <span>06</span>
          <p>Pertanyaan umum</p>
        </div>
        <h2>Sebelum Anda mulai.</h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details className="faq-item" key={faq.id} open={index === 0}>
            <summary>
              <span>{faq.question}</span>
              <span className="faq-symbol" aria-hidden="true" />
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
