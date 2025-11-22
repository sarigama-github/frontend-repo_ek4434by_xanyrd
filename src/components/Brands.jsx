import { motion } from 'framer-motion'

const logos = [
  { name: 'Brand 1', src: 'https://dummyimage.com/120x40/1d4ed8/ffffff&text=Brand+1' },
  { name: 'Brand 2', src: 'https://dummyimage.com/120x40/1d4ed8/ffffff&text=Brand+2' },
  { name: 'Brand 3', src: 'https://dummyimage.com/120x40/1d4ed8/ffffff&text=Brand+3' },
  { name: 'Brand 4', src: 'https://dummyimage.com/120x40/1d4ed8/ffffff&text=Brand+4' },
  { name: 'Brand 5', src: 'https://dummyimage.com/120x40/1d4ed8/ffffff&text=Brand+5' },
]

export default function Brands() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-center text-sm font-medium text-black/60">Brands we work with</p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center"
        >
          {logos.map((l, i) => (
            <motion.img
              key={l.name}
              src={l.src}
              alt={l.name}
              className="h-8 w-auto opacity-90"
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
