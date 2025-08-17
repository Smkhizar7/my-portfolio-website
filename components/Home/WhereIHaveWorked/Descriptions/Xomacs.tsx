import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Xomacs() {
  const tasks = [
    {
      text: "Implemented cost optimization strategies by analyzing resource allocation, collaborating with cross-functional teams, streamlining processes, eliminating redundancies, and implementing automation solutions. Achieved significant cost savings for the project and maintained ongoing efforts to monitor and evaluate resource consumption for continuous improvement and identify further cost reduction opportunities.",
      keywords: [
        "cost optimization",
        "eliminating redundancies",
        "continuous improvement",
      ],
    },
    {
      text: "Well-versed in developing intuitive user interfaces and optimizing user experiences for web and mobile applications.",
      keywords: ["intuitive user interfaces", "web and mobile"],
    },
    // {
    //   text: "Creating responsive and intuitive user interfaces.",
    //   keywords: ["responsive", "intuitive"],
    // },
    // {
    //   text: "Collaborating with cross-functional teams to integrate APIs.",
    //   keywords: ["cross-functional teams", "APIs"],
    // },
    // {
    //   text: "Optimizing application performance and scalability.",
    //   keywords: ["performance", "scalability"],
    // },
    {
      text: "Implementing best practices in frontend development",
      keywords: ["best practices"],
    },
    {
      text: "Experienced in developing applications using Ionic framework, enabling cross-platform compatibility for mobile devices.",
      keywords: ["Ionic", "cross-platform compatibility"],
    },
    {
      text: "Skilled in Node.js, allowing for server-side development and handling of data and business logic. Familiar with SQL databases such as PostgreSql and MySql, adept at designing and managing efficient database structures.",
      keywords: [
        "Node.js",
        "server-side",
        "business logic",
        "PostgreSql",
        "MySql",
      ],
    },
    {
      text: "Staying updated with the latest industry trends and technologies.",
      keywords: ["latest", "trends", "technologies"],
    },
    {
      text: "Debugging and troubleshooting issues across various devices and browsers.",
      keywords: ["Debugging", "troubleshooting", "devices", "browsers"],
    },
    {
      text: "Participating in agile development processes and sprint planning.",
      keywords: ["agile development processes", "sprint planning"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            MERN Stack Developer{" "}
            {/* <span className="text-AAsecondary">@ web3</span> */}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2022 - Nov 2023
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() =>
              window.open("https://pk.linkedin.com/company/xomacs", "_blank")
            }
          >
            https://pk.linkedin.com/company/xomacs
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
