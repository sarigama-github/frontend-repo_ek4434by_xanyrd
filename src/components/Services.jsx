import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  'Content creation',
  'Funnel Designs',
  'Marketing automation',
  'Meta ads',
]

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Services</h2>
        <p className="mt-2 text-black/70">Everything you need to turn attention into revenue.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -4, boxShadow: '0px 12px 30px rgba(30,64,175,0.15)' }}
              className="rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition-all"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-black">{s}</h3>
                  <p className="mt-1 text-sm text-black/70">Implementation, testing, and optimization handled end-to-end.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
