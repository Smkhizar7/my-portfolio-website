import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";
import O16Labs from "./Descriptions/O16Labs";
import Xomacs from "./Descriptions/Xomacs";

export default function WhereIHaveWorked() {
  const barRef = React.useRef<HTMLDivElement>(null);
  // ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "O16Labs":
        return <O16Labs />;
      case "Xomacs":
        return <Xomacs />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("O16Labs");
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-16 sm:py-24 px-4 space-y-10 sm:space-y-12 bg-AAprimary"
    >
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center w-full max-w-5xl">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 xl:h-6 w-4 xl:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg xl:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 xl:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0 justify-start items-start w-full max-w-5xl"
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props) => {
  const [barPosition, setBarPosition] = React.useState<Number>(-8); // Green bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = React.useState<Number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState<boolean[]>([true, false]);
  const CompanyButton = (props) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen
          );
        }}
        className={`flex-none sm:text-sm text-xs text-center xl:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono
             py-3 xl:pl-6 xl:px-4 xl:w-44 w-32 duration-500
             ${
               companyNameBackgroundColorGreen[
                 props.ButtonOrderOfcompanyNameBackgroundColorGreen
               ]
                 ? "bg-ResumeButtonHover text-AAsecondary"
                 : "text-gray-500"
             }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col xl:flex-row  w-full xl:w-auto
      overflow-x-auto scrollbar-hide xl:overflow-hidden pb-4 xl:pb-0 justify-start
       items-start"
    >
      {/* // ? left bar Holder */}
      <div
        className=" hidden xl:block bg-gray-500 relative h-[88px] w-0.5 translate-y-1
        rounded xl:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          // ref={barRef}
          className={`absolute w-10 h-0.5 xl:w-0.5 xl:h-12 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col xl:order-2 order-1 space-y-1 pl-0 ">
        <div className="flex flex-row xl:flex-col">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="O16Labs"
            BarPosition={-10}
            BarAvobePosition={1}
            DescriptionJob="O16Labs"
            CompanyNameBackgroundColorGreen={[true, false]}
            setDescriptionJob={props.setDescriptionJob}
          />
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            BarPosition={36}
            CompanyName="Xomacs"
            DescriptionJob="Xomacs"
            BarAvobePosition={128}
            CompanyNameBackgroundColorGreen={[false, true]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
        <div className="block xl:hidden h-0.5 rounded bg-gray-500 w-full">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="w-[128px] h-0.5 rounded bg-AAsecondary"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
