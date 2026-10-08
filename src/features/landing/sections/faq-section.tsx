import { faqs } from "@/features/landing/data/content";
import { FaqAccordionItem } from "@/features/landing/faq-accordion-item";

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
          <FaqAccordionItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            initiallyExpanded={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
