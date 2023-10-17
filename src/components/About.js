import React from 'react';

import Certificado from './DiegoBraseroSánchez.pdf'
//Contador
import CountUp from 'react-countup';
//intersection-observer hook
import {useInView} from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
// variantes
import {fadeIn} from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.3}}
        className='flex-1 bg-about bg-cotain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
        ></motion.div>
        {/* text */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className='flex-1'
        >
          <h2 className='h2 text-accent'>Sobre mi.</h2>
          <h3 className='h3 mb-4'>¡Hey!
            Soy Diego, soy titulado en el MÁSTER EN PROGRAMACIÓN WEB (FULL STACK)
          </h3>
          <p className='mb-6'>
          Tengo conocimientos tanto en la parte de Front como en la parte de Backend.
          En ellas he podido conocer diversos lenguajes como: HTML, CSS , JavaScript , PHP, React , Express, Node.JS y gestión de base de datos como MySQL (phpMyAdmi) y MongoDB.
          </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                   inView ? <CountUp start={0} end={1} duration={8}/> 
                   :null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Años de <br/>
                Experiencia
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                   inView ? <CountUp start={0} end={11} duration={8}/> 
                   :null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Proyectos <br/>
                Realizados
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                   inView ? <CountUp start={0} end={7} duration={8}/> 
                   :null
                }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Lenguajes<br/>
                Utilizados
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>
            <a href={Certificado} download>Mi Certificado</a>
            </button>
            <a href='#' className='text-gradient btn-link'>
              Mi porfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );

      }


export default About;
