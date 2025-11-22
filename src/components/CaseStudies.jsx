import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const cases = [
  {
    title: 'Dental clinic',
    problem: 'Marketing runs Facebook ads, generates inquiries, but front desk manually checks leads → slow follow-up, lost appointments.',
    fix: 'Funnel + lead routing: Leads captured on landing page → auto-assigned to receptionist or dentist → instant confirmation + reminder SMS/email.',
  },
  {
    title: 'Fitness Studio / Gym',
    problem: 'Social media promotions drive interest, but sales team doesn’t know which leads attended free trials → no conversion tracking.',
    fix: 'CRM + funnel tracking: Track trial attendance → automated follow-up to convert to membership.',
  },
  {
    title: 'Private Tutoring / Education',
    problem: 'Marketing collects inquiries via forms, sales team unaware of prior interactions → repetitive calls → frustrated parents/students.',
    fix: 'CRM + lead history: Each inquiry stored → sales sees previous interactions → personalized follow-up.',
  },
]

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.65, delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default function CaseStudies() {
  return (
    <section className="bg-white relative">
      {/* subtle top gradient divider */}
      <div className="pointer-events-none absolute inset-x-0 -top-8 h-8 bg-gradient-to-b from-blue-100/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-black">Case studies</h2>
        <p className="mt-2 text-black/70">Real workflows that turned interest into booked revenue.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-2xl border border-blue-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-100/60 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-blue-200/40 blur-2xl" />
                <h3 className="text-xl font-semibold text-black">{c.title}</h3>
                <div className="mt-4 space-y-3 relative">
                  <div>
                    <p className="text-sm font-semibold text-blue-700">Problem</p>
                    <p className="text-black/80 mt-1">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-700">How we fix it</p>
                    <p className="text-black/80 mt-1">{c.fix}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
