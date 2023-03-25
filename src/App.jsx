import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { socials, particlesSettings } from './constans/constants'

function App() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="min-h-screen">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesSettings}
      />

      <main className='main relative z-10 text-white'>
        <div className="myblur w-full h-full px-4 pt-16 pb-8">
          <div className="container mx-auto max-w-2xl">
            <div className="head w-full flex flex-col justify-center items-center">
              <div className="myimg w-24 h-24 rounded-full overflow-hidden mb-4">
                <img src="assets/dimianni.jpg" className="w-full h-auto" alt="Dmytro Anikin. Dimianni." />
              </div>
              <div className="name">
                <h1 className='text-xl font-bold'>Dmytro Anikin</h1>
              </div>
              <div className="description mt-1">
                <h2 className='text-base font-medium opacity-70'>Frontend Developer</h2>
              </div>
            </div>
            <div className="links mt-8">
              {
                socials.map((social, i) => {
                  return (
                    <div key={i} className="link mb-4">
                      <a href="#" target="_blank" rel="noopener" className='bg-light-grey flex justify-center items-center rounded px-5 py-4 relative'>
                        <div className="icon absolute top-1/2 -translate-y-2/4 left-2 w-8 h-8">
                          <img src={`assets/${social.icon}`} alt="" className='w-full h-auto object-contain' />
                        </div>
                        <p className='w-full font-medium text-base text-center'>{social.name}</p>
                      </a>
                    </div>
                  )
                })
              }
            </div>
            <div className="message w-9/12 flex justify-between items-center mx-auto my-8">
              <div className="w-8 h-8"><a href="https://wa.me/34669471043"><img src="assets/whatsapp.png" alt="whatsapp" /></a></div>
              <div className="w-8 h-8"><a href="https://t.me/dimianni"><img src="assets/telegram.png" alt="telegram" /></a></div>
              <div className="w-8 h-8"><a href="mailto:dmytro.anikin@gmail.com"><img src="assets/mail.png" alt="mail" /></a></div>
            </div>
          </div>
        </div>

      </main>
      <footer className="relative z-10 text-white flex flex-col justify-center items-center text-xs py-4 opacity-80">
        <div>Made with &#10084; &#65039;</div>
        <div>By <a href="https://dimianni.github.io/" className="underline">Dimianni</a> </div>
      </footer>
    </div>
  )
}

export default App
