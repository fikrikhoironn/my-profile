
export default async function Index() {
  const profilePicUrl = 'https://storage.googleapis.com/profile-bucket-dicoding/fikron2.png';

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          Hello
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-100 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="font-bold text-5xl mb-4">Fikri Khoiron Fadhila</h1>
            <img
              src={profilePicUrl}
              alt="Fikri Khoiron Fadhila"
              className="rounded-full w-32 h-32 mb-4" // Adjust size and styling as needed
            />
          </div>

          {/* About Section */}
          <section id="about">
            <h2 className="font-bold text-3xl mb-3">About Me</h2>
            <p>
              An undergraduate student at the Computer Science/Informatics Institut Teknologi Bandung, who develops frontend and backend, sometimes does UI/UX design. A hard worker who likes to learn new things and take on challenges that require creativity, teamwork, and problem-solving skills.
            </p>
          </section>
          {/* Experience Section */}
          <section id="experience">
            <h2 className="font-bold text-3xl mb-3">Experience</h2>

            {/* Experience Item */}
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-1">Product Engineer Intern - PT AFG VENTURA (Payable YC S22)</h3>
              <p className="italic mb-2">July 2023 – Present</p>
              <ul className="list-disc pl-5">
                <li>Contributed to the development of the "Shopverse" e-commerce platform for Korean merchandise.</li>
                <li>Developed and deployed features rapidly in a fast-paced environment.</li>
                <li>Designed and created a comprehensive dashboard for operators, improving issue resolution time.</li>
                <li>Ensured applications met user needs, enhancing platform usage.</li>
              </ul>
            </div>

            {/* Experience Item */}
            <div className="mb-6">
              <h3 className="font-semibold text-xl mb-1">Software Engineer - caridosen.</h3>
              <p className="italic mb-2">February 2023 – May 2023</p>
              <ul className="list-disc pl-5">
                <li>Developed a review platform web application as part of the product team.</li>
                <li>Participated in agile development practices and bug fixes.</li>
                <li>Worked with UX/UI designers to create interactive web interfaces.</li>
                <li>Implemented automated end-to-end testing to ensure a consistent user experience.</li>
              </ul>
            </div>

            {/* ... more experience items ... */}

          </section>


          {/* Contact Section */}
          <section id="contact">
            <h2 className="font-bold text-3xl mb-3">Contact</h2>
            <div className="flex flex-col items-center">
              <a href="mailto:fikrikhoironn@gmail.com" className="text-blue-500 hover:underline flex items-center">
                fikrikhoironn@gmail.com
              </a>
              <a href="https://github.com/fikrikhoironn" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 flex items-center">
                GitHub: fikrikhoironn
              </a>
            </div>
          </section>

        </main>
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Copyright © {new Date().getFullYear()} {' '}
          Fikri Khoiron Fadhila
        </p>
      </footer>
    </div>
  )
}
