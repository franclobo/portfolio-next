"use client";
import React from 'react'
import { PersonalInfoItems, FiguresItems, SkillsItems, ExperienceItems } from "@/constants";
import { Button } from '@/components/Button';
import { FaDownload } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { FiguresComponent } from "@/components/Figures";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";

const About = () => {
  const route = useRouter();
  const onhandleDownload = () => {
    route.push("Borja Francisco CV 2023.pdf");
  }

  return (
    <div className="flex flex-col text-center container px-20 mt-10">
      <h2 className="text-8xl text-gray-700 font-bold">
        About {""}
        <span className="text-8xl text-primary font-bold">Me</span>
      </h2>
      <div className="flex items-center justify-around mt-10">
        <div className="flex flex-col items-start">
          <h3 className="text-2xl text-gray-700 font-bold">Personal Info</h3>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {PersonalInfoItems.map((info) => (
              <div key={info.id} className="flex items-center gap-1">
                <h4 className="text-lg text-gray-700 font-bold">
                  {info.title}:
                </h4>
                <p className="text-lg text-gray-700">{info.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button
              text="Download CV"
              onClick={onhandleDownload}
              icon={<FaDownload />}
            />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            {FiguresItems.map((figure, index) => (
              <FiguresComponent
                key={index}
                title={figure.title}
                number={figure.number}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[200px] h-[1px] bg-gray-400 mt-10 self-center" />
      <section className="mt-10">
        <h3 className="text-2xl text-gray-700 font-bold">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
          {SkillsItems.map((skill, index) => (
            <Skills
              key={index}
              title={skill.title}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </section>
      <div className="w-[200px] h-[1px] bg-gray-400 mt-10 self-center" />
      <section>
        <h3 className="text-2xl text-gray-700 font-bold mt-4">Experience</h3>
        <div className="grid grid-cols-2 gap-10 mt-4 mb-4">
          {ExperienceItems.map((experience, index) => (
            <Experience key={index} {...experience} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default About
