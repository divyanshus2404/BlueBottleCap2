"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What AI models power Bluebottlecap?",
    answer:
      "We use a combination of leading AI models including GPT-4, Claude, Stable Diffusion, and our proprietary fine-tuned models. We continuously update our infrastructure to provide you with the best available technology.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period. There are no cancellation fees or long-term commitments.",
  },
  {
    question: "How does the free trial work?",
    answer:
      "Every plan includes a 14-day free trial with full access to all features. No credit card required to start. You can upgrade, downgrade, or cancel at any time during the trial.",
  },
  {
    question: "Is there an API available?",
    answer:
      "Yes, Pro and Enterprise plans include API access. You can integrate our AI tools directly into your applications, workflows, and products. Comprehensive documentation and SDKs are available.",
  },
  {
    question: "How do team features work?",
    answer:
      "Pro plans include 5 team members, and Enterprise plans offer unlimited seats. Team members share a unified workspace with collaboration features, shared templates, and centralized billing.",
  },
  {
    question: "What file formats are supported?",
    answer:
      "We support a wide range of formats including PNG, JPG, SVG, PDF, MP4, MP3, WAV, and many more. Export options vary by tool, with Pro plans offering higher resolution and quality options.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption for all data in transit and at rest. We do not use your content to train our models. Enterprise plans include additional security features like SSO and audit logs.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee for all new subscriptions. If you are not satisfied with our service, contact our support team for a full refund within the first 30 days.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Got questions? We have got answers.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-xl border border-border/50 bg-card"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 font-semibold text-foreground">
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "shrink-0 rounded-full p-1 transition-colors",
                    openIndex === index ? "bg-primary" : "bg-muted"
                  )}
                >
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <Plus className="h-4 w-4 text-foreground" />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
