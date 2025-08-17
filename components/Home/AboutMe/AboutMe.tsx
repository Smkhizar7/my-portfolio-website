import React from "react";
import Img from "../../../components/smallComp/image/Img"; // Assuming this path is correct for your project
import ArrowIcon from "../../../components/Icons/ArrowIcon"; // Assuming this path is correct for your project
import { forwardRef } from "react";
interface AboutMeProps {
  // Define any props you might pass to AboutMe here
  // For example: profileImageUrl?: string;
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  const technologies = [
    ["Next.js/React", "Vite/React", "TypeScript/JavaScript", "Tailwind CSS"],
    ["Node.js", "Express.js", "MongoDB/SQL Server", "React Native"],
  ];

  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary"
    >
      {/* 0.1 About Me Title */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Paragraphs & Image */}
        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-gray-400 text-justify">
              I am Shaikh Muhammad Khizar, an application developer based in
              Karachi, Pakistan. I earned a{" "}
              <span className="text-AAsecondary">
                Bachelor of Science in Computer Science
              </span>{" "}
              from{" "}
              <span className="text-AAsecondary">
                Federal Urdu University Arts, Science and Technology
              </span>
              , attending from January 2020 to March 2024.
              {/* I am Shaikh Muhammad Khizar, a Pakistani application developer
              with a{" "}
              <span className="text-AAsecondary">
                Bachelor of Science in Computer Science
              </span>{" "}
              from{" "}
              <span className="text-AAsecondary">
                Federal Urdu University Arts, Science and Technology
              </span>{" "}
              in Karachi. */}
            </div>
            <div className="font-Header text-gray-400 text-justify">
              During my second year of university, I completed the{" "}
              <span className="text-AAsecondary">
                Web and Mobile Development
              </span>{" "}
              course at{" "}
              <span className="text-AAsecondary">
                Saylani Mass IT Training (SMIT)
              </span>
              . I then began my professional career in my third year, starting
              as an Application developer at{" "}
              <span className="text-AAsecondary">Xomacs</span> in January 2022.
              For nearly two years at Xomacs, I was responsible for developing
              and maintaining web and mobile applications,{" "}
              <span className="text-AAsecondary">
                creating responsive user interfaces
              </span>
              , and collaborating with teams to integrate APIs. My work also
              involved{" "}
              <span className="text-AAsecondary">
                optimizing application performance
              </span>
              , implementing best practices in front-end development , and
              troubleshooting issues across various devices and browsers.
              {/* Old */}
              {/* My professional journey began in{" "}
              <span className="text-AAsecondary">January 2022</span> at{" "}
              <span className="text-AAsecondary">Xomacs</span>, where I worked
              as an application developer until{" "}
              <span className="text-AAsecondary">November 2023</span>. During
              this time, I focused on developing and maintaining web and mobile
              applications, creating{" "}
              <span className="text-AAsecondary">
                responsive user interfaces
              </span>
              , and collaborating with cross-functional teams to integrate APIs.
              I also gained experience in{" "}
              <span className="text-AAsecondary">
                optimizing application performance
              </span>
              , debugging issues, and participating in{" "}
              <span className="text-AAsecondary">
                agile development processes
              </span>
              . */}
            </div>
            <div className="font-Header text-gray-400 text-justify">
              Since <span className="text-AAsecondary">January 2024</span>, I
              have been working as an Application developer at{" "}
              <span className="text-AAsecondary">016 Labs</span>. I continue to
              develop and maintain{" "}
              <span className="text-AAsecondary">
                web and mobile applications
              </span>
              , create intuitive user interfaces , and optimize application
              performance and scalability.
              {/* My digital skills include proficiency
              in <span className="text-AAsecondary">HTML</span>,{" "}
              <span className="text-AAsecondary">CSS</span>,{" "}
              <span className="text-AAsecondary">
                JavaScript (Node.js, Express.js)
              </span>
              , <span className="text-AAsecondary">React.js</span>,{" "}
              <span className="text-AAsecondary">React Native</span>,{" "}
              <span className="text-AAsecondary">Git</span>, and databases such
              as
              <span className="text-AAsecondary">MySQL and Firebase</span>. */}
              {/* Since <span className="text-AAsecondary">January 2024</span>, I
              have been an application developer at{" "}
              <span className="text-AAsecondary">016 Labs</span> in Karachi,
              where I continue to hone my skills. My responsibilities include
              developing and maintaining{" "}
              <span className="text-AAsecondary">
                web and mobile applications
              </span>
              , creating user-friendly interfaces, and optimizing application{" "}
              <span className="text-AAsecondary">
                scalability and performance
              </span>
              . */}
            </div>
            <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
              Here&apos;s what I&apos;m usually working with these days:
            </div>
            {/* Technologies List */}
            <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start">
              {technologies.map((techGroup, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col space-y-4 sm:text-base text-sm"
                >
                  {techGroup.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-row items-center space-x-2"
                    >
                      <ArrowIcon
                        className={"h-3 w-3 text-AAsecondary flex-none"}
                      />
                      <span className="text-gray-400 sm:text-sm text-xs">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* <div className="font-Header text-gray-400 pt-4 text-justify">
              Whether it&apos;s web3 projects, leading significant data
              initiatives, traditional web apps, or something completely
              different, I&apos;m always up for the next adventure in code.
            </div> */}
          </div>

          {/* Image Section (Desktop and Tablet) */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-black opacity-30 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>

          {/* Image Section (Mobile) */}
          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"/img/Portfolio-portrait-3.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full bg-black opacity-30 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
AboutMe.displayName = "AboutMe";
export default AboutMe; // Changed to a const for functional component definition with type
