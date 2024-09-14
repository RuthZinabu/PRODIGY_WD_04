 "use client"
 import Image from "next/image";
 import { motion } from "framer-motion";
 import project1 from "../assets/project3.png";
 import project2 from "../assets/project2.png";
 import project3 from "../assets/project1.png";

 const projects  = [
    {
        title:"Movie Recommendation Website",
        desc:"The movie recommendation website delivers personalized film suggestions based on your preferences and viewing history. Discover new movies and build custom watchlists for a tailored viewing experience.",
        devstack:"React.js, Tailwind CSS",
        link:"https://movie-rec-deploy.vercel.app/",
        git:"https://github.com/RuthZinabu/movie-rec-deploy",
        src: project1
    },
    {
        title:"Tutoring Platform",
        desc:"The tutoring platform connects students with expert tutors, offering personalized learning through easy-to-book sessions and a user-friendly interface. It provides flexible scheduling, and progress tracking to enhance the educational experience.",
        devstack:"React.js, Tailwind CSS, Django",
        link:"https://abogida.vercel.app/",
        git:"https://github.com/RuthZinabu/Tutoring-Webiste",
        src: project2
    },
    {
        title:"Ecommerce Website",
        desc:"The eCommerce website's frontend features a clean, responsive design with intuitive navigation, allowing users to effortlessly browse products, view detailed descriptions, and enjoy a seamless shopping experience.",
        devstack:"React.js, Tailwind CSS",
        link:"https://gdsc-ecomerce-website-paet.vercel.app/",
        git:" https://github.com/RuthZinabu/gdsc-Ecomerce-Website",
        src: project3
    },
 ]

const Portfolio = () => {
  return (
    <div> 
        <div className="text-white bg-gradient-to-b from-black to-[#1f2833] py-18 mt-52" id="portfolio">
            
        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 my-12">
           Recent <span className="text-[#66FCF1]">Projects</span>
        </h1>
             <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                      key= {index}
                      initial= {{opacity: 0, y: 75}}
                      whileInView= {{ opacity: 1, y: 0}}
                      viewport= {{ once: true }}
                      transition= {{ duration: 0.5, delay:0.25}}
                      className={` mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12 " : " md:flex-row "}`}
                    >
                        <div className="space-y-2 max-w-[550px]" >
                             <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2> 
                             <h2 className="text-4xl">{project.title}</h2>
                             <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                             <p className="text-xl text-[#66FCF1] font-semibold">{project.devstack}</p>
                             <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.link} className="mr-6">Link</a>
                                <a href={project.git} >Git</a>
                             </div>
                        </div>

                        <div className="flex justify-center items-center">
                        <a href={project.link} className="mr-6"> 
                            <Image src={project.src} alt={project.title} className=" h-[350px] w-auto object-cover border
                                                        rounded border-gray-700 hover:opacity-60 "/>
                                                        </a>
                        </div>

                    </motion.div>
                )
                
                )}
             </div>
        </div>
    </div>
  )
}

export default Portfolio