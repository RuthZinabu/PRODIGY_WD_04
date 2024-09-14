import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaJava, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
 

const skillIcons = [
    { icon: <FaHtml5 size ={140}/>, lable: "HTML"},
    { icon: <FaCss3Alt size ={140}/>, lable: "CSS"},
    { icon: <FaReact size ={110}/>, lable: "React"},
    { icon: <FaJsSquare size ={140}/>, lable: "JavaScript"},
    { icon: <FaJava size ={140}/>, lable: "Java"},
    { icon: <SiMysql size ={140}/>, lable: "MySql"},
    { icon: <FaNodeJs size ={140}/>, lable: "NodeJs"},
    { icon: <FaPhp size ={140}/>, lable: "PHP"},
   
]

const Skills = () => {
  return (
    <> 
        <div className='bg-[linear-gradient(to_top,#000,#1f2833_80%)] py-32'>
            <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {skillIcons.map((skill, index) => (
                        <div
                            key={index}
                            className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                            {skill.icon}
                            <p className='mt-2'>{skill.lable}</p>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills