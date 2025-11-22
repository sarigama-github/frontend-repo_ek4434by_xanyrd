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
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
          {logos.map((l) => (
            <img key={l.name} src={l.src} alt={l.name} className="h-8 w-auto opacity-90" />
          ))}
        </div>
      </div>
    </section>
  )
}
