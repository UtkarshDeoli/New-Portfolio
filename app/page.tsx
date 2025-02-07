import ArticleComponent from "@/components/ArticleComponent";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between bg-slate-950'>
			<Hero />
			
			<Skills />

			<Projects />
			<ArticleComponent />

			<Footer />
		</main>
	);
}
