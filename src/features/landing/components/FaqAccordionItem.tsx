"use client";

import { useState } from "react";

interface FaqAccordionItemProps {
  id: string;
  question: string;
  answer: string;
  initiallyExpanded: boolean;
}

export function FaqAccordionItem({
  id,
  question,
  answer,
  initiallyExpanded,
}: FaqAccordionItemProps) {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const questionId = `${id}-question`;
  const answerId = `${id}-answer`;

  return (
    <article className="faq-item" data-expanded={expanded}>
      <h3>
        <button
          id={questionId}
          className="faq-question"
          type="button"
          aria-expanded={expanded}
          aria-controls={answerId}
          onClick={() => setExpanded((current) => !current)}
        >
          <span>{question}</span>
          <span className="faq-symbol" aria-hidden="true" />
        </button>
      </h3>
      <div
        id={answerId}
        className="faq-answer"
        role="region"
        aria-labelledby={questionId}
        aria-hidden={!expanded}
        inert={!expanded}
        data-expanded={expanded}
      >
        <div className="faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </article>
  );
}
