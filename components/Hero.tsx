"use client";

import GLOBE from "vanta/src/vanta.globe";
import Link from "next/link";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { Navbar } from "./navbar";

export default function Hero() {
	const [vantaEffect, setVantaEffect] = useState(0);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				GLOBE({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: 0x6224d7,
					backgroundColor: 0x020617,
					color2: 0x00ffff,
				})
			);
		}
	}, [vantaEffect]);
	return (
		
		<div
			id='home'
				
			className='bg-slate-950 min-h-screen w-full flex flex-col justify-center items-start text-gray-200'
			ref={vantaRef}>
				<div className="hidden md:block">
				<Navbar navItems={[
					{ name: "Home", link: "#" },
					{ name: "Projects", link: "#projects" },
					{ name: "Blog", link: "#blog" },
					{ name: "Contact", link: "mailto:utkarsh.deoli@gmail.com" },
				]}/>
				</div>
			<div className=' mx-12 sm:mx-16 md:mx-20 lg:mx-24 xl:mx-32'>
				<h1 className='tracking-wider font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>
					Utkarsh Deoli
				</h1>
				<h2 className='tracking-wider font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl mt-4 font-semilight'>
					Developer
				</h2>
				<h2 className='tracking-wider text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl mt-1 font-semilight'>
					App | Web | Embedded 
				</h2>
				<div className='flex space-x-6 my-4'>
					<Link
						href='https://github.com/utkarshdeoli'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<FaGithub size={25} />
						</p>
					</Link>
					<Link
						href='https://twitter.com/utkarshdeoli'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<BsTwitterX size={25} />
						</p>
					</Link>
					<Link
						href='https://www.linkedin.com/in/utkarshdeoli/'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<FaLinkedinIn size={25} />
						</p>
					</Link>
					<Link
						href='https://www.youtube.com/@UtkarshDeoli'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<SiYoutube size={25} />
						</p>
					</Link>
					<Link
						href='https://leetcode.com/sagemodeutkarsh/'
						target='_blank'
						passHref>
						<p rel='noopener noreferrer'>
							<SiLeetcode size={25} />
						</p>
					</Link>
				</div>
				<a
					className=""
					href='https://drive.google.com/file/d/1lV4OU1-wZ83kmngzoVsP1--EPq4CBU62/view?usp=sharing'
					target='_blank' //
					download='UtkarshDeoli.pdf'>
					<button className='self-start relative z-10 inline-flex gap-2.5 h-12 animate-shimmer items-center justify-center rounded-md border border-dark-700 bg-[linear-gradient(110deg,#1A1A1A99,45%,#26262699,55%,#1A1A1A99)] hover:bg-[linear-gradient(110deg,#262626aa,45%,#404040aa,55%,#262626aa)] bg-[length:200%_100%] px-6 font-medium text-sm sm:text-base text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 bg-opacity-75'>
						Download Resume
					</button>
				</a>
			</div>
		</div>
	);
}
