import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { socials, particlesSettings } from './constants/constants'

function App() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <main className="min-h-screen">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesSettings}
        />

        <section className='main relative z-10 text-white'>
          <div className="myblur w-full h-full px-4 pt-16 pb-8">
            <div className="container mx-auto max-w-2xl">
              <figure className="head w-full flex flex-col justify-center items-center">
                <div className="myimg w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img src="assets/dimianni.jpg" className="w-full h-auto object-cover" alt="Dmytro Anikin. Dimianni." />
                </div>
                <figcaption>
                  <h1 className='text-xl font-bold'>Dmytro Anikin</h1>
                  <h2 className='text-base font-medium opacity-70 mt-1'>Frontend Developer</h2>
                </figcaption>
              </figure>
              <ul className="links mt-8">
                {
                  socials.map((social, i) => {
                    return (
                      <li key={i} className="transition-transform duration-150 mb-4 xl:hover:scale-[1.02]">
                        <a href={social.link} target="_blank" rel="noopener noreferrer" className='bg-light-grey flex justify-center items-center rounded px-5 py-4 relative'>
                          <div className="icon absolute top-1/2 -translate-y-2/4 left-2 w-8 h-8">
                            <img src={`assets/${social.icon}`} alt="" className='w-full h-auto object-contain' />
                          </div>
                          <p className='w-full font-medium text-base text-center'>{social.name}</p>
                        </a>
                      </li>
                    )
                  })
                }
              </ul>
              <ul className="message w-9/12 flex justify-between items-center mx-auto my-8">
                <li className="w-8 h-8"><a href="https://wa.me/34669471043" target="_blank" rel="noopener noreferrer"><img src="assets/whatsapp.png" alt="whatsapp" /></a></li>
                <li className="w-8 h-8"><a href="https://t.me/dimianni" target="_blank" rel="noopener noreferrer"><img src="assets/telegram.png" alt="telegram" /></a></li>
                <li className="w-8 h-8"><a href="mailto:dmytro.anikin@gmail.com" target="_blank" rel="noopener noreferrer"><img src="assets/mail.png" alt="mail" /></a></li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative z-10 text-white flex flex-col justify-center items-center text-xs py-4 opacity-80">
        <p>Made with &#10084; &#65039;</p>
        <p>By <a href="https://dimianni.github.io/" target="_blank" rel="noopener noreferrer" className="underline">Dimianni</a> </p>
      </footer>
    </>
  )
}

export default App
