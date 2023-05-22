import React, { useContext, useState } from 'react';

import { SlBag } from 'react-icons/sl'
import { FiMenu } from 'react-icons/fi'
import logo from '../img/logo.png'
import CategoryNavMobile from '../components/CategoryNavMobile'
import SearchForm from '../components/SearchForm'
import Cart from '../components/Cart'
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

const Header = () => {
  const { isOpen, setIsOpen, cart } = useContext(CartContext)
  // console.log(isOpen)

  const [catNavMobile, setCatNavMobile] = useState(false)

  function ExpandToggle(catNavMobileProps) {
    setCatNavMobile(true)
  };

  const toggle = () => {
    setCatNavMobile(false);
  };

  return <header className='bg-primary py-6 fixed w-full top-0 z-40 flex p-5'>

    <div className='container mx-auto'>
      <div className='flex flex-1 flex-row justify-between gap-4'>
        <div className='flex gap-4' >
          <div onClick={() => ExpandToggle()} className='lg:hidden align-center justify-center'>
            <FiMenu className='mt-3' />
          </div>

          <Link to="/">
            <img className='w-[240px] mt-1' src={logo} alt='logo' />
          </Link>

        </div>
        <div className={`${catNavMobile ? 'left-0' : '-left-full'} fixed top-0 bottom-0 z-30 w-full`}>
          <CategoryNavMobile toggle={toggle} />
        </div>

        <div className='w-full hidden lg:flex xl:max-w-[734px]'>
          <SearchForm />
        </div>

        <div className='flex gap-2 relative cursor-pointer items-center'>
          <div className='hidden lg:block'>Need Help? 123 456 6775</div>
          <div className="flex gap-2" onClick={() => setIsOpen(!isOpen)}>
            <div><SlBag className='text-2xl' /> </div>
            <div className='absolute rounded-full z-10 text-[12px] px-2 right-[-10px] bottom-0 h-5 bg-accent text-black'>2</div>
          </div>
        </div>

        <div className={`
            ${isOpen ? 'right-0' : '-right-full'} bg-[#0e0f10]
            shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[400px]
         `
        }>
          <Cart cart={cart} setIsOpen={setIsOpen} />
        </div>

      </div>
      <div className='flex my-2 lg:hidden'>
        <SearchForm />
      </div>
    </div>
  </header>;
};

export default Header;
