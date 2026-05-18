"use client";

import { motion } from "framer-motion";
import {
  Image,
  FileText,
  Code2,
  Video,
  Music,
  MessageSquare,
  Wand2,
  BarChart3,
  Globe,
  Palette,
  Bot,
  Layers,
} from "lucide-react";

const tools = [
  {
    icon: Image,
    name: "Image Generation",
    description:
      "Create stunning visuals from text prompts using state-of-the-art AI models.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FileText,
    name: "Content Writer",
    description:
      "Generate blog posts, marketing copy, and social media content instantly.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    name: "Code Assistant",
    description:
      "Write, debug, and optimize code in any programming language with AI help.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Video,
    name: "Video Creator",
    description:
      "Transform scripts into engaging videos with AI-powered editing tools.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Music,
    name: "Audio Studio",
    description:
      "Generate music, voiceovers, and sound effects for any project.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: MessageSquare,
    name: "Chat Bots",
    description:
      "Build intelligent chatbots for customer support and engagement.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Wand2,
    name: "Photo Editor",
    description:
      "Enhance, restore, and transform images with powerful AI editing.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: BarChart3,
    name: "Data Analysis",
    description:
      "Extract insights from data and generate visualizations automatically.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Globe,
    name: "Translation",
    description:
      "Translate content into 100+ languages with context-aware accuracy.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Palette,
    name: "Design Tools",
    description:
      "Create logos, UI designs, and brand assets with AI assistance.",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    icon: Bot,
    name: "Automation",
    description:
      "Automate repetitive tasks and workflows with intelligent agents.",
    color: "from-lime-500 to-green-500",
  },
  {
    icon: Layers,
    name: "3D Models",
    description: "Generate and edit 3D models for games, AR, and visualization.",
    color: "from-amber-500 to-yellow-500",
  },
];

export function Tools() {
  return (
    <section id="tools" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Powerful Tools
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything You Need in One Platform
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Access our complete suite of AI-powered tools designed to boost your
            creativity and productivity.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${tool.color} p-3`}
              >
                <tool.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {tool.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
              <div className="mt-4">
                <span className="text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                  Learn more &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
