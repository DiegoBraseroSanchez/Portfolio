import React from 'react';
import { Link } from 'react-scroll';
//imagenes
import Logo from '../assets/db-2.svg'

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <img className='btn btn-sm' src={Logo} alt=''></img>
        </a>
        <button className='btn btn-sm'>
        <Link to='contact'>Trabaja Conmigo</Link>
        </button>
      </div>
    </div>
  </header>;

};

export default Header;
