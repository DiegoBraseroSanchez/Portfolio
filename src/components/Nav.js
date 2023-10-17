import React from 'react';

//Importamos los iconos
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare, BsShopWindow, BsChatRightText} from 'react-icons/bs';

// Links
import { Link } from 'react-scroll';


const Nav = () => {
  return (
   <nav className='fixed bottom-2 lg:bottom-9 w-full overflow-hidde z-50'>
    <div className='container mx-auto'>

        <div className='w-full bg-black/20 h-[6rem] backdrop-blur-2x1 rounded-full max-w-[28.75rem] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
            
            <Link to='home'
             activeClass='active' 
             smooth={true} 
             spy={true}
             offset={-200}
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BiHomeAlt/>
            </Link>

            <Link to='about'
             activeClass='active' 
             smooth={true} 
             spy={true}
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BiUser/>
            </Link>

            <Link to='services' 
             activeClass='active' 
             smooth={true} 
             spy={true}
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsClipboardData/>
            </Link>
            
            <Link to='work'
             activeClass='active' 
             smooth={true} 
             spy={true}
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsBriefcase/>
            </Link>

            <Link to='contact'
             activeClass='active' 
             smooth={true} 
             spy={true} 
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
              <BsChatRightText/>
            </Link>

        </div>


    </div>
   </nav>
   )



};

export default Nav;
