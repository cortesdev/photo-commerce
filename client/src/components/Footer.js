
import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return <footer className='pt-16 Obg-primary'>
    <div className="container mx-auto">
      <div className='text-center'>
        <h2 className='uppercase mb-6 font-semibold'>Subscribe to</h2>
        <p>Be the first to get news about actions and promotional events.</p>
      </div>

      <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14'>
        <input
          type='text'
          placeholder='Your email address'
          className='input' />
        <button className='btn btn-accent min-w-[150px]'>Join</button>
      </form>

      <div className='text-base text-white/60 flex gap-x-6 capitalize mx-auto mb-9 max-w-max'>
        <a href="/#" className='hover:text-white transition-all'>
          Returns policy
        </a>
        <a href="/#" className='hover:text-white transition-all'>
          Track your order
        </a>
        <a href="/#" className='hover:text-white transition-all'>
          Shipping & delivery
        </a>
      </div>

      <div className='flex gap-x-6  mx-auto mb-9 max-w-max'>
        <a href='#' className="">
          <FaYoutube />
        </a>
        <a href='#' className="">
          <FaInstagram />
        </a>
        <a href="#" className="" >
          <FaTwitter />
        </a>
        <a href='#' classNome="">
          <FaFacebook />
        </a>
      </div>
    </div>

    <div className="py-10 border-t border-t-white/10">
      <div className="container mx-auto">
        <div className="text-center text-sm text-white/60">
          Copyright &copy; ShutterPro. All rights reserved
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;