import { motion } from 'motion/react';
import { LucideIcon, Lock } from 'lucide-react';
import { Link } from 'react-router';

interface ToolCategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  toolCount: number;
  isPremium?: boolean;
  link: string;
  color: string;
  delay?: number;
}

export function ToolCategoryCard({
  icon: Icon,
  title,
  description,
  toolCount,
  isPremium = false,
  link,
  color,
  delay = 0,
}: ToolCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        to={link}
        className="group block p-8 bg-white rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden"
      >
        {isPremium && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full flex items-center gap-1 shadow-lg">
            <Lock className="w-3 h-3" />
            Premium
          </div>
        )}

        <div
          className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        <h3 className="text-2xl mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{toolCount} tools</span>
          <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </Link>
    </motion.div>
  );
}
