import React from 'react';

import Documento from './CV.pdf'
//imagenes
import Image from '../assets/50520798_350578825792478_1893153626729392180_n.jpg';

//Iconos
import {FaGithub} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

//Animaciones
import {TypeAnimation} from 'react-type-animation'

//Movimiento
import {motion} from 'framer-motion'

//variantes
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return(
   <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home' >
    
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7 }}
            className='text-[50px] font-bold leading-[0.8] lg:text-[90px]'
            >
            DIEGO <span>BRASERO</span>
          </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'FullStack',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              ¡Bienvenido a mi porfolio!<br/> Aqui podras saber mas sobre mi y sobre mis ultimas trabajos <br/>Espero que te gusten 
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>
              <Link to='contact'>Contactarme</Link>
              </button>
              <a href={Documento} download className='text-gradient btn-link'>Mi CURRÍCULUM</a>
            </motion.div>
            <motion.div 
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7 }} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://github.com/DiegoBraseroSanchez'>
                <FaGithub />
              </a>

              <a href='https://www.linkedin.com/in/diego-brasero-sanchez-700b23151/'>
                <AiOutlineLinkedin />
              </a>

              <a href='https://www.instagram.com/_diegobrasero/'>
                <BsInstagram/>
              </a>
            </motion.div>
        </div>
        <motion.div 
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
        >
          <img className='rounded-full w-[30rem] h-[30rem]' src={Image} alt=''></img>
        </motion.div>
      </div>
    </div>

    </section>
  );
};
export default Banner;
