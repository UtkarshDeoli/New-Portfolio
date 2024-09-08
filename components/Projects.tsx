import React from "react";

const projects = [
	{
		title: "Tomato Timer",
		stack: "Flutter | Firebase", 
		description:
			"A simple easy to use Pomodoro timer app built using Flutter.",
		githubLink: "https://github.com/UtkarshDeoli/Tomato-Timer",
		vercelLink:
			"https://tomato.utkarshdeoli.in",
	},
	{
		title: "Language Sikho",
		stack: "Next JS | Tailwind CSS | Oauth | MongoDB | Express",
		description:
			"Website for Teachers and Students to learn and teach languages.",
		githubLink: "https://github.com/utkarshdeoli/LanguageSikho-backend",
		vercelLink: "https://www.languagesikho.com/",
	},
	{
		title: "SafeBet",
		stack: "Solidity | Chainlink | Next JS | Tailwind CSS",
		description:
			"Your Decentralized Betting Buddy! If you want to bet in the world of Web3, SafeBet is the best choice.",
		githubLink: "https://github.com/Vanshika-Rana/safebet",
		vercelLink: "https://safebet.vercel.app/",
	},
	{
		title: "Rcmnd",
		stack: "Python | Streamlit",
		description:
			"Machine Learning model built to recommend K-Dramas that users will like to watch next.",
		githubLink: "https://github.com/Vanshika-Rana/RCMND",
		vercelLink: "https://4x5neh5jzujhjfauls77vq.streamlit.app/",
	},
	{
		title: "Story Sphere",
		stack: "Next JS | Tailwind CSS | Supabase | Typescript",
		description:
			"Craft a unique narrative by collaborating with individuals from diverse backgrounds.",
		githubLink: "https://github.com/Vanshika-Rana/storycreator-app",
		vercelLink: "https://storycreator-app.vercel.app/",
	},
	{
		title: "Social Circle",
		stack: "Solidity | Next JS | Tailwind CSS | Ethers",
		description:
			"A dApp built on Ethereum blockchain that allows you to connect your wallet and drop messages.",
		githubLink: "https://github.com/Vanshika-Rana/Social-Circle",
		vercelLink: "https://social-circle.vercel.app/",
	},
];

const Project: React.FC = () => {
	return (
		<div className="min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center">
			<h1 className="text-white text-4xl lg:text-5xl font-bold mt-12">
				Projects
			</h1>
			<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 w-full">
				{projects.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						stack={project.stack}
						description={project.description}
						githubLink={project.githubLink}
						vercelLink={project.vercelLink}
					/>
				))}
			</div>
		</div>
	);
};

const ProjectCard: React.FC<{
	title: string;
	stack: string;
	description: string;
	githubLink: string;
	vercelLink: string;
}> = ({ title, stack, description, githubLink, vercelLink }) => {
	return (
		<div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between space-y-4 transform hover:scale-105">
			<div>
				<div className="relative w-full h-80 mb-4">
					<iframe
						src={vercelLink}
						title={title}
						className="w-full h-full rounded-md border-none"
					></iframe>
				</div>
				<h3 className="tracking-wider text-white text-2xl font-bold mb-2">
					{title}
				</h3>
				<p className="tracking-wider text-purple-300 text-sm font-medium mb-4 uppercase">
					{stack}
				</p>
				<p className="tracking-wider text-gray-400 mb-4 text-sm font-light">
					{description}
				</p>
				
			</div>
			<div className="flex space-x-4">
				<a
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="tracking-wider bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600"
				>
					GitHub
				</a>
				<a
					href={vercelLink}
					target="_blank"
					rel="noopener noreferrer"
					className="tracking-wider border-purple-800 border-2 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600 hover:border-purple-800"
				>
					Website
				</a>
			</div>
		</div>
	);
};

export default Project;
