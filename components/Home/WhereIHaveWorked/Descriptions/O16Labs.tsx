import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function O16Labs() {
  const tasks = [
    {
      text: "Developing and maintaining web and mobile applications",
      keywords: ["web", "mobile"],
    },
    {
      text: "Creating responsive and intuitive user interfaces.",
      keywords: ["responsive", "intuitive"],
    },
    {
      text: "Collaborating with cross-functional teams to integrate APIs.",
      keywords: ["cross-functional teams", "APIs"],
    },
    {
      text: "Optimizing application performance and scalability.",
      keywords: ["performance", "scalability"],
    },
    {
      text: "Implementing best practices in frontend development",
      keywords: ["best practices", "frontend"],
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
            Application developer{" "}
            {/* <span className="text-AAsecondary">@ web3</span> */}
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jan 2024 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.o16labs.com", "_blank")}
          >
            https://www.o16labs.com
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
