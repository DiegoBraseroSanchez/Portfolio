import React from 'react';
//motion
import {motion} from 'framer-motion'
//variantes
import {fadeIn} from '../variants'
//imagenes
import Img1 from '../assets/Diseño sin título (2).png'
import Img2 from '../assets/Diseño sin título (3).png'
import Img3 from '../assets/Diseño sin título (5).png'

const Work = () => {
  return(
     <section className='section' id='work' >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0'
           >
            {/* text */}
            <div>
              <h2 className='h2 leadging-tight text-accent'>
                Mis ultimos <br/>
                Trabajos
              </h2>
              <p className='max-w-sm mb-16'>
                Aqui puedes ver los ultimos trabajos que he ido realizando,donde estoy usando nuevos lenguajes y frameworks para mejorar mis habilidades como programador
              </p>
              <button className='btn btn-sm'>
                <a href='https://github.com/DiegoBraseroSanchez?tab=repositories'>Ver todos los trabajos</a>
              </button>
            </div>
            {/* imagenes */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              {/* pretitulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Front-End Desing</span>
                </div>
               {/* titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Monster-Hunter-Travel</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}

              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
              {/* pretitulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Front-End/Back-End Desing</span>
                </div>

               {/* titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Aplicación-Movies-API</span>
              </div>
            </div>

            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
              
              {/* pretitulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Front-End Desing</span>
                </div>
                
               {/* titulo */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Counteractt Web Site</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default Work;
