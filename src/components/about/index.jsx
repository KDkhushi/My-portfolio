import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am an Information Technology engineering student at Netaji Subhas University of Technology, 
          specializing in Network and Information Security. My journey has been a mix of deep exploration, 
          hands-on learning, and a passion for solving complex problems. From tackling 300+ DSA questions to working 
          as a Research Trainee at DRDO, every experience has sharpened my skills in ML, deep learning, and web development.
          Beyond academics, I have gained practical experience through diverse projects. 
          Open to internships at startups and companies, I am always eager to collaborate, build, and innovate. 
          Lets connect and create something impactful!
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            300+ <sub className="font-semibold text-base">questions solved</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years of coding</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 lg:col-span-6"}>
        <div className="w-full h-auto p-4 rounded-lg border border-gray-300 bg-opacity-10">
          <h3 className="text-lg font-semibold text-white">Education</h3>
          <div className="mt-2">
            <p className="font-medium">B.Tech in Information Technology and Network Security</p>
            <p className="text-sm text-gray-300">2022 - Present</p>
          </div>
        </div>
      </ItemLayout>

      <ItemLayout className={"col-span-full md:col-span-6 lg:col-span-6"}>
        <div className="w-full h-auto p-4 rounded-lg border border-gray-300 bg-opacity-10">
          <h3 className="text-lg font-semibold text-white">Schooling</h3>
          <p className="text-sm">
            <strong>DAV Centenary Public School</strong> [XII CBSE] — 
            <span className="text-gray-300"> Percentage: 91.2</span>
          </p>
          <p className="text-sm">
            <strong>Maharaja Aggarsain Public School</strong> [X CBSE] — 
            <span className="text-gray-300"> Percentage: 95.2</span>
          </p>
        </div>
      </ItemLayout>




        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=html,bootstrap,css,express,nodejs,js,docker,firebase,git,github,postgres,linux,mongodb,mysql,nextjs,npm,react,replit,supabase,tailwind,threejs,vite,vscode,yarn,python,cpp,api`}
            alt="Khushi"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <div>
        <h3 className="text-lg font-semibold text-white">My spellbook</h3>
        <div className="mt-2">
            <p className="font-medium">I see every problem as a challenge to innovate. Whether it is building CNN models 
          for stress detection or exploring network security, I break complex tasks into simple, 
          solvable steps. My time at DRDO deepened my passion for machine learning and signal processing, 
          reinforcing my belief in questioning the norm and experimenting fearlessly. The constant pursuit 
          of knowledge and the thrill of solving real-world problems keep me motivated.</p>
          </div>
          </div>
        </ItemLayout>


        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <div>
        <h3 className="text-lg font-semibold text-white">Magic Ledger</h3>
        <div className="mt-2">
            <p className="font-medium">Balancing academics and research has taught me discipline and efficiency. 
            I focus on problem-solving, structured learning, and hands-on experimentation. Moving forward, I aim to dive deeper into AI, cybersecurity, and signal processing, working on impactful projects that blend research with real-world applications. Every challenge is a step toward innovation, and I am excited to keep pushing boundaries.</p>
          </div>
          </div>    
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
