
export default function Intro() {
  return (
    <section className="h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="text-white min-h-screen flex flex-col justify-center">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="text-lime-400 text-7xl">Coding </span>
               the future
               <span className="text-lime-400">,</span>
                <br /> <span className="text-3xl italic text-gray-300 px-28">one project at a time</span>
            </h1>
            <div className="flex justify-between items-center w-full max-w-lg mt-20">
              <div className="flex space-x-4">
                <a href="#contact" className="px-6 py-3 bg-blue-600 rounded-full text-white font-medium hover:bg-blue-700 transition">
                  Get in Touch
                </a>
                <div className="flex items-center">
                  <span className="mx-2 text-amber-500 text-2xl">•</span> {/* Dot Separator */}
                  <span className="text-gray-400">Available for Hire</span>
                </div>
              </div>
            </div>
          </div>




          {/* Right Column */}
          <div className="flex flex-col justify-center">
            <p className="text-lg">
              This is the content for the right column. Feel free to customize the layout and content to suit your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}