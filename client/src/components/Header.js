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
  const { isOpen, setIsOpen } = useContext(CartContext)
  const [catNavMobile, setCatNavMobile] = useState(false)
  console.log(isOpen)
  return <header className='bg-primary py-6 fixed w-full top-0 z-40 flex p-5'>

    <div className='container mx-auto'>
      <div className='flex flex-row gap-4'>
        <div className='justify-center'><FiMenu className='mt-2' /> </div>
        <Link to="/">
          <img className='w-[200px]' src={logo} alt='logo' />
        </Link>

        <div onClikc={() => setCatNavMobile(!catNavMobile)} className={`${catNavMobile ? 'left-0' : '-left-full'} fixed top-0 bottom-0 z-30 w-full`}>
          <CategoryNavMobile />
        </div>

        <div className='w-full hidden xl:flex xl:max-w-[734px]'>
          <SearchForm />
        </div>

        <div className='flex gap-2 relative cursor-pointer'>
          <div>Need Help? 123 456 6775</div>
          <div className="flex gap-2" onClick={() => setIsOpen(!isOpen)}>
            <div><SlBag className='text-2xl' /> </div>
            <div>2</div>
          </div>
        </div>

        <div className={`
    ${isOpen ? 'right-0' : '-right-full'} bg-[#0e0f10]
    shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[400px]
    `
        }>
          <Cart setIsOpen={setIsOpen} />
        </div>
        <div className='hidden'>
          <SearchForm />
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
