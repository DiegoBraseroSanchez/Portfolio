import React from 'react';

//Iconos
import {FaGithub} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
//motion
import {motion} from 'framer-motion'
//variantes
import {fadeIn} from '../variants'

const Contact = () => {
  return (
  <section className='py-16 lg:section' id='contact' >
   <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row'>
      {/* text */}
      <motion.div   
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}} 
            className='flex-1 flex justify-center items-center'
      >
        <div>
          <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide '>Ponte en contacto</h4>
          <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
            Trabajemos <br/>juntos
          </h2>
          <h3 className='text-[20px] lg:text-[50px] leading-none mb-12 text-gradient btn-link'>
            diegobraserosanchez@gmail.com
          </h3>
          <div className='flex text-[60px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
                {/* Github */}
              <a href='https://github.com/DiegoBraseroSanchez'>
                <FaGithub />
              </a>
                {/* Linkedin */}
              <a href='https://www.linkedin.com/in/diego-brasero-sanchez-700b23151/'>
                <AiOutlineLinkedin />
              </a>
                {/* Isntagram */}
              <a href='https://www.instagram.com/_diegobrasero/'>
                <BsInstagram/>
              </a> 
          </div>
        </div>
      </motion.div>
    </div>
   </div>
  </section>
  );
};

export default Contact;
