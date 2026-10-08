import { steps } from "@/features/landing/data/content";

export function ProcessSection() {
  return (
    <section className="process content-shell">
      <div className="section-heading">
        <div className="section-label">
          <span>05</span>
          <p>Alur konsultasi</p>
        </div>
        <h2>Tiga langkah untuk memulai.</h2>
      </div>
      <div className="process-list">
        {steps.map((step, index) => (
          <article key={step.id}>
            <span>0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
