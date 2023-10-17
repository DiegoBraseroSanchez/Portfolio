import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs'
//motion
import {motion} from 'framer-motion'
//variantes
import {fadeIn} from '../variants'

//services data
const services = [
  {
    name: 'Front-End',
    description: 'Trabajo la interfaz de usuario desde el punto de vista del código, para que la interacción con el sistema sea posible. Por lo tanto, me encargo de la parte visual de la web (de todo aquello que puedes ver en tu explorador) haciendo que tu diseño sea intuitivo y atractivo.',
    link:'Ver mas',
  },
  {
    name: 'Back-End',
    description: 'Cuando se desarrollan webs o programas a medida, siempre es necesario un programador especializado en el backend. Dado que es de suma importancia para que todo el motor funcione, me ocupo de que la web funcione en todo momento o de cualquier imprevisto que le ocurra a la web.',
    link:'Ver mas',
  },
  {
    name: 'Tecnico-Daw',
    description: 'El tecnico Daw se especializa en datos en la nube, almacenamiento,mantenimiento e implantación de aplicaciones informáticas en diferentes entornos web y aplicaciones directamente ejecutables en web',
    link:'Ver mas',
  }
];
const Services = () => {
  return(
   <section className='section' id='services' >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & imagenes */}
          <motion.div 
           variants={fadeIn('right', 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount: 0.3}}
           className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>Lo Que Hago.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Titulado en el MÁSTER EN PROGRAMACIÓN WEB (FULL STACK). <br/>Tengo conocimientos tanto en la parte de Front como en la parte de Backend. </h3>
            <button className='btn btn-sm'><a href='https://github.com/DiegoBraseroSanchez'>Mira mis trabajos</a></button>
          </motion.div>
          {/* servicios */}
          <motion.div 
           variants={fadeIn('left', 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false, amount: 0.3}}className='flex-1'
          >
            {/* lista de servicios */}
            <div>
              {services.map((service, index)=>{
                const {name, description, link} = service;
                return (
                <div className='border-b border-white/20 h-[200px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href='https://github.com/DiegoBraseroSanchez?tab=repositories' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight/>
                    </a>
                    <a href='https://github.com/DiegoBraseroSanchez?tab=repositories' className='text-gradient text-sm'>{link}</a>
                  </div>
                </div>
                );
                
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

};

export default Services;
