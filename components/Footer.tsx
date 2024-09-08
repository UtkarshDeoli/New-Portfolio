// Footer.tsx
'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <footer className="bg-slate-950 text-white p-4 w-full ">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-2xl mx-auto">
        <div className="flex items-center">
          <span 
          onClick={()=>{router.push('/')}}
          className="font-bold text-lg tracking-wider text-purple-500 cursor-pointer hover:underline">Utkarsh Deoli</span>
        </div>
        <div className="flex items-center">
        <FaEnvelope className="ml-2 md:ml-4" /> &nbsp;
          <a 
          href="mailto:utkarsh.deoli@gmail.com?subject=contacting%20form%20utkarshdeoli.in"
          className="inline-block tracking-wider cursor-pointer hover:underline"> utkarsh.deoli@gmail.com</a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
