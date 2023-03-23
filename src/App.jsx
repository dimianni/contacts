import { useState } from 'react'
// import dimianni from './assets/dimianni.jpg'
// import instagram from './assets/instagram.svg'
// import linkedin from './assets/linkedin.svg'
// import github from './assets/github.svg'
// import portfolio from './assets/portfolio.svg'
import './App.css'
import { socials } from './constans/constants'

// const icons = [instagram, linkedin, github, portfolio]
// console.log(icons[0]);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className='px-4 pt-16 pb-8'>
      <div className="container mx-auto max-w-2xl">
        <div className="head w-full flex flex-col justify-center items-center">
          <div className="myimg w-24 h-24 rounded-full overflow-hidden mb-4">
            <img src="/assets/dimianni.jpg" className="w-full h-auto" alt="Dmytro Anikin. Dimianni." />
          </div>
          <div className="name">
            <h1 className='text-xl font-bold'>Dmytro Anikin</h1>
          </div>
          <div className="description mt-1">
            <h2 className='text-base font-medium text-dark-grey'>Frontend Developer</h2>
          </div>
        </div>
        <div className="links mt-8">
          {
            socials.map((social, i) => {
              return (
                <div key={i} className="link mb-4">
                  <a href="#" target="_blank" rel="noopener" className='flex justify-center items-center bg-light-grey rounded px-5 py-4 relative'>
                    <div className="icon absolute top-1/2 -translate-y-2/4 left-2 w-12 h-12">
                      <img src={`/assets/${social.icon}`} alt="" className='w-full h-auto object-contain' />
                    </div>
                    <p className='w-full font-medium text-base text-center'>{social.name}</p>
                  </a>
                </div>
              )
            })
          }
         
        </div>
      </div>
    </main>
  )
}

export default App
