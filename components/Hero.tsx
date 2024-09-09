"use client";

import GLOBE from "vanta/src/vanta.globe";
import Link from "next/link";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

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
			className='bg-slate-950 min-h-screen w-full flex flex-col justify-center items-start text-gray-200'
			ref={vantaRef}>
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
					href='https://firebasestorage.googleapis.com/v0/b/utkarshdeolidev.appspot.com/o/UtkarshDeoli.pdf?alt=media'
					target='_blank' //
					download='UtkarshDeoli.pdf'>
					<button className='tracking-wider border-purple-800 border-2 rounded-lg font-medium text-white px-4 py-2 mt-4 text-sm md:text-lg lg:text-xl transition-all duration-300 ease-in-out hover:bg-purple-800 focus:outline-none focus:ring focus:border-purple-900'>
						Download Resume
					</button>
				</a>
			</div>
		</div>
	);
}
