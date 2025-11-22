import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative radial and grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs font-medium text-blue-700 shadow-sm backdrop-blur"
            >
              Conversion-first Funnels
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-black"
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
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-sm shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5 transition will-change-transform"
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
            {/* Floating cards */}
            <div className="relative aspect-square w-full rounded-2xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-[0_15px_40px_rgba(30,64,175,0.1)] overflow-hidden">
              <motion.div
                initial={{ y: 10 }}
                animate={{ y: -10 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                className="absolute left-6 top-6 rounded-xl border border-blue-200 bg-white p-4 shadow-md"
              >
                <p className="text-sm font-semibold text-blue-700">Lead Routing</p>
                <p className="text-xs text-black/70">Auto-assign by region/team</p>
              </motion.div>
              <motion.div
                initial={{ y: -8 }}
                animate={{ y: 8 }}
                transition={{ duration: 3.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                className="absolute right-8 top-20 rounded-xl border border-blue-200 bg-white p-4 shadow-md"
              >
                <p className="text-sm font-semibold text-blue-700">Qualification</p>
                <p className="text-xs text-black/70">Scoring + enrichment</p>
              </motion.div>
              <motion.div
                initial={{ y: 6 }}
                animate={{ y: -6 }}
                transition={{ duration: 4.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-xl border border-blue-200 bg-white p-4 shadow-md"
              >
                <p className="text-sm font-semibold text-blue-700">Follow-ups</p>
                <p className="text-xs text-black/70">Email + SMS + Tasks</p>
              </motion.div>

              <div className="h-full w-full rounded-xl border border-dashed border-blue-300/60 grid place-items-center text-center p-6">
                <p className="text-blue-800 font-medium">
                  Funnels that connect your marketing to your sales engine
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-100 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
