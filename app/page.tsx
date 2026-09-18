const videos = [
  { url: "https://www.youtube.com/watch?v=8fLuO2xw-es", title: "Exacq Software" },
  { url: "https://www.youtube.com/watch?v=FGOKMAjFI-M", title: "Exacq Hardware" },
  { url: "https://www.youtube.com/watch?v=QVBh5bG4-AI", title: "Illustra Cameras" },
  { url: "https://www.youtube.com/watch?v=S1xZoTt94Ro", title: "Illustra Standard" },
  { url: "https://www.youtube.com/watch?v=88JvhJVklX4", title: "Holis NVR" },
  { url: "https://www.youtube.com/watch?v=Ut4sEDLgnlc", title: "Access Control" },
  { url: "https://www.youtube.com/watch?v=36Oc-v3ZEDU", title: "Access Control Software" },
  { url: "https://www.youtube.com/watch?v=yIlEQkDewE0", title: "Maglocks" },
  { url: "https://www.youtube.com/watch?v=BOyCGcTGaVQ", title: "Controllers" },
  { url: "https://www.youtube.com/watch?v=8CFmAHK-hRk", title: "Card Readers" },
  { url: "https://www.youtube.com/watch?v=0qDc7zO7lLo", title: "Biometric Access" },
  { url: "https://www.youtube.com/watch?v=uN9ir5An00g", title: "Exacq main features" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#162033]">
      <header className="border-b border-[#dfe4eb] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1769aa]">Tyco Presales</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">Video library</h1>
          </div>
          <div className="rounded-full border border-[#dfe4eb] bg-[#f6f7f9] px-4 py-2 text-sm text-[#5d6a7d]">
            {videos.length} videos
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1549px] py-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Explore the collection</h2>
          <p className="mt-4 text-base leading-7 text-[#5d6a7d]">
            Watch the latest Tyco product and solution videos in one place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, index) => {
            const frameId = video.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

            return (
              <article id={frameId} key={video.url} className="scroll-mt-6 overflow-hidden rounded-2xl border border-[#dfe4eb] bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="aspect-video bg-[#101827]">
                  <iframe
                    id={`${frameId}-video`}
                    name={frameId}
                    className="h-full w-full"
                    src={video.url.replace("watch?v=", "embed/")}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center gap-3 px-5 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f2f9] text-xs font-semibold text-[#1769aa]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold">{video.title}</h3>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}
