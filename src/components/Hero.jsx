import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-black"
            >
              Great marketing, Great Sales, But No Conversion
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-black/70"
            >
              We bridge the disconnection between sales and marketing
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base md:text-lg text-black/80"
            >
              We create seemless lead routing, lead qualification from facebook ads to your sales team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#work-with-us"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Work with us
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-6 py-3 text-blue-600 font-semibold hover:bg-blue-50"
              >
                Explore services
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-square w-full rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-[0_15px_40px_rgba(30,64,175,0.1)]">
              <div className="h-full w-full rounded-xl border border-dashed border-blue-300/60 grid place-items-center text-center p-6">
                <p className="text-blue-800 font-medium">
                  Funnels that connect your marketing to your sales engine
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
