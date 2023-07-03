import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
//import { MdModeNight } from 'react-icons/md'
import './App.css'
import { Card } from './components/Card'

function App() {

  return (
    <>
      <div className='flex flex-col items-center container mx-auto'>
        <div className='flex justify-center mt-5 mb-8'>
          {/*           <div className='rounded-full w-12 h-12 bg-[#2b2a2a] flex items-center justify-center'>
            <MdLightMode size={32} color='#A3ABB2' />
          </div> */}
        </div>
        <div className='flex flex-col md:flex-row md:gap-7 items-center md:items-start'>
          <img className='rounded-full w-28 md:w-36 border-4 border-[#FFE071] p-1' src="/profile-pic.png" alt="Avatar Linkedin" />
          <div className='flex flex-col items-center md:items-start mt-8 md:mt-0'>
            <h1 className='text-gray-100 text-[32px] font-medium'>Lucas David</h1>
            <div className='flex  gap-2 items-center'>
              <p className='text-gray-400 text-[14px] font-medium'>Sistemas de Informação</p>
              <div className='flex justify-center items-center rounded-full w-8 h-8 bg-[#2b2a2a] '>
                <img className='w-7 object-contain' src="/uff.png" alt="" />
              </div>
            </div>
            <p className='text-gray-400 text-[14px] font-medium'>Desenvolvedor Web</p>
            <div className='flex gap-4 mt-5 md:mt-3'>
              <AiFillGithub size={24} color='#A3ABB2' />
              <AiFillLinkedin size={24} color='#A3ABB2' />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-gray-100 text-[22px] font-medium mt-12 mb-1'>Stack</h2>
          <h3><div className="text-neutral-400 text-sm font-normal leading-relaxed mb-6"> Tecnologias que eu tenho usado recentemente</div></h3>
          <div className='grid grid-cols-4 md:grid-cols-8 gap-2'>
            <img className='w-12' src="/CSS.svg" alt="" />
            <img className='w-12' src="/HTML.svg" alt="" />
            <img className='w-12' src="/JavaScript.svg" alt="" />
            <img className='w-12' src="/React-Dark.svg" alt="" />
            <img className='w-12' src="/Java-Dark.svg" alt="" />
            <img className='w-12' src="/Spring-Dark.svg" alt="" />
            <img className='w-12' src="/PostgreSQL-Dark.svg" alt="" />
            <img className='w-12' src="/Git.svg" alt="" />
          </div>
          <h2 className='text-gray-100 text-[22px] font-medium mt-12 mb-6'>Projetos</h2>

          <div className='grid md:grid-cols-2 gap-4'>
            <Card
              image="/shoppingify.jpg"
              title="Shoppingify"
              subtitle="Este é o projeto Shoppingify, um desafio proposto no site devchallenges.io. Ele consiste em desenvolver uma aplicação de lista de compras."
              stack=" Java, Spring, React, PostgreSQL"
              preview="https://shoppingify-frontend-dun.vercel.app/"
              github="https://github.com/lucas-canellas/shoppingify-api" />
            <Card
              image="/promobit.jpg"
              title="Promobit"
              subtitle='Este desafio foi retirado do repositório no GitHub "front-end-challenge". Trata-se de um catálogo de filmes desenvolvido utilizando a API do themoviedb.'
              stack=" HTML, CSS, JavaScript, React"
              preview="https://promobit-teste.vercel.app/"
              github="https://github.com/lucas-canellas/promobit-teste" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
