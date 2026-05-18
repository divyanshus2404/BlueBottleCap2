import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'College Student',
      content: 'This tool saved me so much time on my essays. The formal mode is perfect for academic writing!',
      avatar: '👩‍🎓',
    },
    {
      name: 'Marcus Johnson',
      role: 'High School Senior',
      content: 'I use it for everything - emails to professors, college essays, even text messages. Game changer.',
      avatar: '🎓',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Graduate Student',
      content: 'The expand feature helps me meet word counts without fluff. It actually adds meaningful content.',
      avatar: '📚',
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Loved by students
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of students writing better every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
