"use client";

import { FaLocationArrow, FaGithub } from "react-icons/fa6";

import { projects } from "@/data";

const RecentProjects = () => {
	return (
		<div className="py-20">
			<h1 className="heading">
				A small selection of{" "}
				<span className="text-purple">recent projects</span>
			</h1>
			<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
				{projects.map((item) => (
					<div
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
						key={item.id}
					>
						<a
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
							className="group w-full h-full flex flex-col p-6 rounded-3xl border border-white/[0.1] hover:border-purple/30 shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 bg-[#04071D]"
							style={{
								background: "rgb(4,7,29)",
								backgroundColor:
									"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
							}}
						>
							<div className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-6 rounded-2xl">
								<div
									className="relative w-full h-full overflow-hidden"
									style={{ backgroundColor: "#13162D" }}
								>
									<img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
								</div>
								<img
									src={item.img}
									alt="cover"
									className="z-10 absolute bottom-0 max-h-full group-hover:scale-[1.05] transition-transform duration-500"
								/>
							</div>

							<h1 className="font-bold lg:text-2xl md:text-xl text-base text-white">
								{item.title}
							</h1>

							<p
								className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD]"
								style={{
									margin: "1.5vh 0",
								}}
							>
								{item.des}
							</p>

							<div className="flex items-center justify-center mt-auto pt-4 w-full">
								<div className="flex justify-center items-center gap-2.5 w-full bg-[#161a31] border border-white/[0.1] rounded-xl py-3.5 text-purple font-semibold text-sm group-hover:bg-purple group-hover:text-white transition duration-300">
									<FaGithub className="text-lg" />
									<span>View GitHub Repository</span>
								</div>
							</div>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecentProjects;