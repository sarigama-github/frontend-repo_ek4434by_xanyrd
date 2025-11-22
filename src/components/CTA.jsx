export default function CTA() {
  return (
    <section id="work-with-us" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-white to-blue-50 p-10 shadow-[0_15px_40px_rgba(30,64,175,0.08)]">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-black">Work with us</h3>
              <p className="mt-2 text-black/70">Let’s align your marketing and sales so every lead gets the right follow-up at the right time.</p>
            </div>
            <form className="grid gap-3 md:grid-cols-2">
              <input className="rounded-lg border border-blue-300/60 px-4 py-3 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Full name" />
              <input className="rounded-lg border border-blue-300/60 px-4 py-3 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
              <input className="md:col-span-2 rounded-lg border border-blue-300/60 px-4 py-3 text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company / Brand" />
              <button type="submit" className="md:col-span-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Get proposal</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
