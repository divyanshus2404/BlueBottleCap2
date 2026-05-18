"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow",
    content:
      "Bluebottlecap has transformed how our team creates content. The image generation and copywriting tools save us hours every week.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Freelance Designer",
    company: "Self-employed",
    content:
      "As a solo designer, having access to all these AI tools for one price is incredible. The quality of outputs rivals much more expensive solutions.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "Innovate Labs",
    content:
      "We use the code assistant and automation tools daily. The time savings alone justify the subscription many times over.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Content Creator",
    company: "YouTube",
    content:
      "The video and audio tools have completely changed my workflow. I can produce more content in less time with better quality.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Startup Founder",
    company: "GrowthPulse",
    content:
      "For an early-stage startup, Bluebottlecap is a game-changer. It gives us enterprise-level AI capabilities at a fraction of the cost.",
    rating: 5,
  },
  {
    name: "James Wright",
    role: "Agency Owner",
    company: "Digital Craft",
    content:
      "My entire agency switched to Bluebottlecap. The unified platform and team features make collaboration seamless.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-y border-border/50 bg-muted/30 py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Loved by Thousands of Creators
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            See what our users have to say about their experience with
            Bluebottlecap.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-xl border border-border/50 bg-card p-6"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-400 text-sm font-semibold text-primary-foreground">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
