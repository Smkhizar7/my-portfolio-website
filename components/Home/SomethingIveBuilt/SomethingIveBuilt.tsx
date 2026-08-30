import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { createPortal } from "react-dom";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import { TextQuote } from "lucide-react";

type ProjectImageViewerProps = {
  images: string[];
  alt: string;
  className?: string;
};

function ProjectImageViewer({
  images,
  alt,
  className = "",
}: ProjectImageViewerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % images.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, images.length]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={"Open " + alt + " in image viewer"}
        className={"group relative z-20 block cursor-zoom-in " + className}
      >
        <Img
          src={images[0]}
          alt={alt}
          className="h-full w-full rounded object-contain"
        />
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-AAtertiary px-3 py-1 text-xs font-semibold text-white shadow-lg sm:text-sm">
          {images.length} screenshots · Click to view
        </span>
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={alt + " image viewer"}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black p-4 sm:p-8"
            >
              <button
                type="button"
                aria-label="Close image viewer"
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 z-10 rounded border border-AAsecondary px-3 py-2 text-xl text-AAsecondary"
              >
                X
              </button>
              <div
                onClick={(event) => event.stopPropagation()}
                className="relative flex h-full w-full items-center justify-center"
              >
                <Img
                  src={images[activeIndex]}
                  alt={alt + " " + (activeIndex + 1)}
                  className="max-h-full max-w-full object-contain"
                />

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={() =>
                        setActiveIndex(
                          (index) => (index - 1 + images.length) % images.length
                        )
                      }
                      className="absolute left-2 rounded-full bg-AAtertiary px-4 py-2 text-2xl text-AAsecondary sm:left-6"
                    >
                      &lt;
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={() =>
                        setActiveIndex((index) => (index + 1) % images.length)
                      }
                      className="absolute right-2 rounded-full bg-AAtertiary px-4 py-2 text-2xl text-AAsecondary sm:right-6"
                    >
                      &gt;
                    </button>
                    <span className="absolute bottom-2 rounded bg-AAtertiary px-3 py-1 text-sm text-white">
                      {activeIndex + 1} / {images.length}
                    </span>
                  </>
                )}
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
type ProjectSummaryCardProps = {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  technologies: string[];
  href?: string;
  images?: string[];
  imageAlt?: string;
};

function ProjectSummaryCard({
  title,
  subtitle,
  description,
  technologies,
  href,
  images,
  imageAlt,
}: ProjectSummaryCardProps) {
  const content = (
    <>
      <div className="flex flex-col gap-1">
        <span className="text-AAsecondary font-bold text-xl">
          {subtitle}
        </span>
        <h3 className="text-gray-200 font-bold text-2xl">{title}</h3>
      </div>
      <div className="w-full bg-AAtertiary rounded-md p-4 sm:p-6">
        <div className="text-gray-300 leading-relaxed space-y-4">{description}</div>
      </div>
      {images?.length ? (
        <ProjectImageViewer
          images={images}
          alt={imageAlt || `${title} project screenshot`}
          className="h-64 w-full rounded-md bg-AAprimary p-2 sm:h-80 lg:h-96"
        />
      ) : null}
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-gray-300 text-sm font-Text2">
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      {href && (
        images?.length ? (
          <a href={href} target="_blank" rel="noreferrer" className="text-AAsecondary text-sm hover:underline">
            Visit project
          </a>
        ) : (
          <span className="text-AAsecondary text-sm hover:underline">
            Visit project
          </span>
        )
      )}
    </>
  );

  return href && !images?.length ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-4 w-full max-w-4xl"
    >
      {content}
    </a>
  ) : (
    <article className="flex flex-col gap-4 w-full max-w-4xl">
      {content}
    </article>
  );
}
export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full
     2xl:px-72 md:px-10 xl:px-24 sm:px-8 py-20 sm:py-28 xl:py-32 px-4"
    >
      {/* // ? Title   */}
      <div data-aos="fade-up" className=" flex flex-row  items-center xl:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 xl:h-6 w-5 xl:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg xl:text-2xl w-44 xl:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 xl:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 xl:space-y-28">
        <div className="flex flex-col gap-16" data-aos="fade-up">
          <ProjectSummaryCard
            title="MyPlainTiff.ai"
            subtitle="Healthcare & case management"
            description={<>
              <p>
                MyPlainTiff.ai is a cross-platform healthcare and
                case-information management application that gives users one
                structured workspace for health data, insurance benefits,
                medical records, case documents, providers, action items, and
                case timelines. The product is designed to reduce the
                fragmentation caused by insurer portals, provider systems,
                paper cards, email attachments, and conversations across
                different organisations.
              </p>
              <p>
                I worked on the core mobile experience across authentication,
                onboarding, guided case authorisation, identity and OTP
                verification, HIPAA and medical-record permissions, case
                dashboards, document uploads, provider records, dependents,
                sharing controls, audit history, and case-specific messaging.
                The app uses Firebase Realtime Database for synchronised chat
                and supports push notifications and reminders for important
                case activity.
              </p>
              <p>
                A major engineering area was healthcare connectivity. OAuth and
                FHIR-based integrations connect supported health portals, while
                provider-specific parsing normalises coverage and
                ExplanationOfBenefit data into understandable benefit,
                deductible, copay, claim, and payment views. I also implemented
                the review-first insurance-card scanning flow, combining camera
                or photo selection, AI-assisted OCR, insurer validation, image
                processing, and user confirmation before sensitive data is
                saved.
              </p>
              <p>
                The shared React Native architecture combines TypeScript and
                JavaScript, React Navigation, Redux Toolkit with persisted
                state, an Axios repository layer, Firebase services, biometric
                authentication, file selection, WebView/OAuth flows, and
                native iOS and Android capabilities.
              </p>
            </>}
            technologies={[
              "React Native",
              "TypeScript",
              "Redux Toolkit",
              "FHIR",
              "Firebase",
              "OpenAI",
            ]}
            images={[
              "/projects/myplaintiff/Image1.jpeg",
              "/projects/myplaintiff/Image3.jpeg",
              "/projects/myplaintiff/Image5.jpeg",
              "/projects/myplaintiff/Image11.jpeg",
              "/projects/myplaintiff/Image12.jpeg",
              "/projects/myplaintiff/Image16.jpeg",
              "/projects/myplaintiff/Image18.jpeg",
              "/projects/myplaintiff/Image22.jpeg",
              "/projects/myplaintiff/Image24.jpeg",
            ]}
            imageAlt="MyPlainTiff healthcare case management app screenshots"
            href="https://myplaintiff.ai/"
          />
          <ProjectSummaryCard
            title="Property Swap"
            subtitle="mijnwoningruilen.nl"
            description={<>
              <p>
                Mijn Woningruilen, also known as Property Swap, is a Dutch
                property-exchange marketplace built to help tenants move from
                their current home to a better-fit home through a guided and
                trusted exchange journey.
              </p>
              <p>
                Users can create and manage a property advertisement with
                photos, descriptions, housing details, current-home
                information, and desired areas. They can pause or edit
                listings, manage visitors, define alternative wishes, and
                control the information shown to potential exchange partners.
              </p>
              <p>
                The discovery experience combines place and location search,
                Mapbox-powered maps with clustered listings, nearby facilities,
                featured offers, favourites, saved searches, and compatible
                matches. Users can open SEO-friendly property pages, compare
                possible exchanges, express interest, and follow exchange
                proposals.
              </p>
              <p>
                I also worked across the supporting marketplace flows:
                authenticated profiles, direct messaging, notifications,
                reporting and safety guidance, multi-step listing forms,
                subscription plans, paid advertisement boosts, payment
                routes, and content-led SEO pages. The result is a responsive
                web experience that connects search, matching, communication,
                and listing administration in one product.
              </p>
            </>}
            technologies={[
              "Next.js",
              "React",
              "TypeScript",
              "Redux Toolkit",
              "Mapbox",
              "Mollie",
            ]}
            images={[
              "/projects/mijnwoningruilen/mijnwoningruilen-1.png",
              "/projects/mijnwoningruilen/mijnwoningruilen-2.png",
              "/projects/mijnwoningruilen/mijnwoningruilen-3.png",
              "/projects/mijnwoningruilen/mijnwoningruilen-4.png",
            ]}
            imageAlt="MijnWoningruilen Property Swap project screenshots"
            href="https://mijnwoningruilen.nl"
          />
          <ProjectSummaryCard
            title="MySelfSquared"
            subtitle="Web & mobile wellbeing platform"
            description={<>
              <p>
                MySelfSquared is a wellbeing and personal-growth product
                delivered across responsive web and mobile experiences. It
                helps members discover educational content, build healthier
                routines, complete daily check-ins, join structured
                challenges, and understand progress through activity,
                streak, neuron, and happiness insights.
              </p>
              <p>
                The web platform brings together a personalised dashboard,
                Growth Hub video and blog libraries, category and search
                flows, challenge discovery, challenge participation, progress
                history, tutorials, profile settings, notifications, and
                subscription management. It also supports corporate
                programmes with employee invitations, invitee management,
                organisation profiles, and role-aware access.
              </p>
              <p>
                The mobile application extends the same product journey with
                React Native navigation, native video playback, captions,
                transcripts, landscape viewing, image and document handling,
                push notifications, deep links, and persistent local state.
                Members can track watched videos and read articles, complete
                check-ins, review challenge participation, and manage
                subscriptions from a focused mobile experience.
              </p>
              <p>
                Across both products, the implementation uses Redux Toolkit,
                Redux Persist, RTK Query and domain-based service modules,
                resilient token refresh handling, REST APIs, Stripe payment
                flows, Firebase Cloud Messaging, reusable responsive
                components, validated forms, charts, and role-specific
                navigation.
              </p>
            </>}
            technologies={[
              "Next.js",
              "React",
              "React Native",
              "Redux Toolkit",
              "RTK Query",
              "Stripe",
              "Firebase",
            ]}
            images={[
              "/projects/myselfsquared/myselfsquared-1.png",
              "/projects/myselfsquared/myselfsquared-2.png",
              "/projects/myselfsquared/myselfsquared-3.png",
              "/projects/myselfsquared/myselfsquared-4.png",
              "/projects/myselfsquared/myselfsquared-5.png",
              "/projects/myselfsquared/myselfsquared-6.png",
              "/projects/myselfsquared/myselfsquared-7.png",
              "/projects/myselfsquared/myselfsquared-8.png",
              "/projects/myselfsquared/myselfsquared-9.png",
              "/projects/myselfsquared/myselfsquared-10.png",
              "/projects/myselfsquared/myselfsquared-11.png",
              "/projects/myselfsquared/myselfsquared-12.png",
              "/projects/myselfsquared/myselfsquared-13.png",
            ]}
            imageAlt="MySelfSquared app screenshots"
            href="https://myselfsquared.com/"
          />
        </div>
        {/* // TODO : to here  */}
        {/* // ?  Project  1 Beym */}
        <div
          data-aos="fade-up"
          className="relative flex flex-col w-full"
        >
          {/* Left image */}
          <div
            className="hidden xl:flex order-2 relative w-full h-[520px] justify-center items-center bg-AAprimary z-10 py-4"
          >
            <div className="relative rounded w-full h-full col-span-12 xl:col-start-9 xl:col-span-4">
              <a
                href={"https://www.o16labs.com"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <ProjectImageViewer
                images={["/BeymApp.png"]}
                alt="Beym project screenshot"
                className="h-full w-full max-w-[240px] xl:max-h-[420px] mx-auto"
              />
            </div>
          </div>

          {/* right Content */}
          <div className="relative order-1 py-4 w-full">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 xl:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-60 z-10"></div>
                <ProjectImageViewer
                images={["/BeymApp.png"]}
                alt="Beym project screenshot"
                className="h-full w-full max-w-[240px] xl:max-h-[420px] mx-auto"
              />
              </div>
            </div>

            <div
              className="relative px-4 sm:px-8 pt-8 sm:pt-12 xl:py-0 xl:col-span-8
            col-span-12 xl:col-span-8 2xl:col-span-7 flex flex-col items-start  space-y-3 xl:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                {/* <span className="text-AAsecondary text-base">o16labs.com</span> */}
                <a
                  href="https://www.o16labs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" xl:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Beym
                  </span>
                </a>
              </div>
              <div className="w-full bg-transparent xl:bg-AAtertiary rounded-md py-5 px-4 sm:p-6  z-10">
                <p className="text-gray-300 xl:text-gray-400 text-left xl:text-left ">
                  This project involved the development of a social discovery
                  and communication mobile application, with a focus on
                  connecting users from diverse global locations. My primary
                  responsibility was to build the core functionality and
                  integrate complex features using{" "}
                  <span className="text-AAsecondary">React Native</span>,
                  ensuring a seamless and engaging user experience.
                </p>
                <br />
                <p className="text-gray-300 xl:text-gray-400 text-left xl:text-left ">
                  I was responsible for developing the application&apos;s main
                  features, including the <q>Explore</q> section which showcases
                  a list of users from various countries, regions, and
                  continents. The app&apos;s chat functionality was a major
                  component of my work; I built a robust messaging system that
                  allows users to send not only text but also images and voice
                  recordings. This was achieved by integrating{" "}
                  <span className="text-AAsecondary">Firebase</span> for
                  real-time chat capabilities and ensuring reliable backend
                  communication. For media management, I developed a feature
                  that organizes all shared images and audios in a dedicated{" "}
                  <q>Media and Files</q> screen, accessible through chat
                  settings. To enhance user interaction, I implemented a
                  gift-giving system where users can exchange virtual gifts
                  using in-app coins, with a secure in-app purchase mechanism
                  for buying coins.
                </p>
                <br />
                <p className="text-gray-300 xl:text-gray-400 text-left xl:text-left ">
                  A key aspect of this project was the integration of real-time
                  communication features. I utilized Agora to enable
                  high-quality one-on-one audio and video calls, providing a
                  stable and clear connection between users. I also built a
                  unique <q>Random Call</q> feature that connects online users
                  with a single tap. To add advanced functionality to this
                  feature, I implemented a paid filter system that allows users
                  to select preferences for gender or country by spending a
                  specific amount of coins. Throughout the development process,
                  I managed the application&apos;s state with{" "}
                  <span className="text-AAsecondary">Redux Toolkit</span> and
                  utilized{" "}
                  <span className="text-AAsecondary">MMKV storage</span> for
                  high-performance data persistence, ensuring the app is both
                  fast and responsive. This project demonstrates my ability to
                  build a feature-rich social application with complex
                  integrations, including real-time communication and robust
                  state and storage management.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 xl:text-gray-400
               text-sm font-Text2 xl:justify-start"
              >
                <span className="pr-4 z-10">Next Js</span>
                <span className="pr-4 z-10">GraphQl</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a
                  href="https://www.o16labs.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  1 O16 Labs */}
        <div
          data-aos="fade-up"
          className="relative flex flex-col w-full"
        >
          {/* Left image */}
          <div
            className="hidden xl:flex order-2 relative w-full h-[520px] justify-center items-center bg-AAprimary z-10 py-4"
          >
            <div className="relative rounded w-full h-full col-span-12 xl:col-start-6 xl:col-span-7 xl:col-start-7 xl:col-span-6 2xl:col-start-8 2xl:col-span-5">
              <a
                href={"https://www.o16labs.com"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <ProjectImageViewer
                images={["/O16Labs.png"]}
                alt="O16 Labs project screenshot"
                className="h-full w-full"
              />
            </div>
          </div>

          {/* right Content */}
          <div className="relative order-1 py-4 w-full">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 xl:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-60 z-10"></div>
                <ProjectImageViewer
                images={["/O16Labs.png"]}
                alt="O16 Labs project screenshot"
                className="h-full w-full"
              />
              </div>
            </div>

            <div
              className="relative px-4 sm:px-8 pt-8 sm:pt-12 xl:py-0 xl:col-span-6
            col-span-12 xl:col-span-6 2xl:col-span-7 flex flex-col items-start  space-y-3 xl:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">o16labs.com</span>
                <a
                  href="https://www.o16labs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" xl:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    O16 Labs
                  </span>
                </a>
              </div>
              <div className="w-full bg-transparent xl:bg-AAtertiary rounded-md py-5 px-4 sm:p-6  z-10">
                <p className="text-gray-300 xl:text-gray-400 text-left xl:text-left ">
                  I developed a dynamic, Next.js web application for{" "}
                  <span className="text-AAsecondary">O16 Labs</span>, a software
                  house. This application serves as a comprehensive digital
                  portfolio, showcasing the company&apos;s services, expertise,
                  and project successes to potential clients.
                </p>
                <p className="text-gray-300 xl:text-gray-400 text-left xl:text-left ">
                  A key aspect of this project was the integration of a{" "}
                  <span className="text-AAsecondary">WordPress backend</span>{" "}
                  with the help of{" "}
                  <span className="text-AAsecondary">GraphQl</span>. To achieve
                  a highly dynamic and content-driven user experience, I
                  leveraged the WordPress REST API to fetch data. This approach
                  allows O16 Labs to manage their portfolio, service details,
                  and client testimonials through a familiar and user-friendly
                  CMS.
                </p>
                <p className="text-gray-300 xl:text-gray-400 text-left xl:text-left ">
                  The application dynamically renders pages based on the fetched
                  data, ensuring that content is always up-to-date without
                  requiring manual code changes. I implemented a variety of{" "}
                  <span className="text-AAsecondary">
                    animations and transitions
                  </span>{" "}
                  to bring the data to life, creating an engaging and modern
                  user interface that highlights the company&apos;s s innovative
                  spirit and technical skill.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 xl:text-gray-400
               text-sm font-Text2 xl:justify-start"
              >
                <span className="pr-4 z-10">Next Js</span>
                <span className="pr-4 z-10">GraphQl</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                <a
                  href="https://www.o16labs.com"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 - ChefZone App */}

        <div
          data-aos="fade-up"
          className="relative flex flex-col w-full"
        >
          {/* Left image */}
          <div className="hidden xl:flex order-2 relative w-full h-[520px] justify-center items-center bg-AAprimary z-10 py-4">
            <div className="relative rounded w-full h-full col-span-12 xl:col-span-4 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://chefzone.co.uk/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <ProjectImageViewer
                images={["/ChefzoneApp-transparent.png", "/ChefzoneApp.png"]}
                alt="ChefZone project screenshot"
                className="h-[400px] w-full xl:h-[520px] 2xl:h-[400px]"
              />
            </div>
          </div>

          {/* right Content */}
          <div className="relative order-1 py-4 w-full">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 xl:hidden">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-60 z-10"></div>
                <ProjectImageViewer
                images={["/ChefzoneApp-transparent.png", "/ChefzoneApp.png"]}
                alt="ChefZone project screenshot"
                className="h-[400px] w-full xl:h-[520px] 2xl:h-[400px]"
              />
              </div>
            </div>

            <div
              className="relative px-4 sm:px-8 pt-8 sm:pt-12 xl:py-0 xl:col-span-8 xl:col-start-5 xl:col-start-5
            xl:col-span-8 col-span-12 flex flex-col items-start xl:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 xl:items-end z-10">
                <span className="text-AAsecondary text-base">
                  chefzone.co.uk
                </span>
                <a
                  href="https://ubiquitous-bublanina-da84ec.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" xl:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    ChefZone App
                  </span>
                </a>
              </div>
              <div className="w-full bg-transparent xl:bg-AAtertiary rounded-md py-5 px-4 sm:p-6  z-10">
                <p className="text-gray-300 xl:text-gray-400 text-left ">
                  This project involved the development of a comprehensive
                  platform for the hospitality industry, comprising a mobile
                  application for job seekers and a web admin panel for
                  administrators. My primary contribution was focused on
                  building the core functionality and integrating key features
                  of the <span className="text-AAsecondary">React Native</span>{" "}
                  mobile application.
                </p>
                <p className="text-gray-300 xl:text-gray-400 text-left ">
                  I was responsible for developing the complete user-facing
                  mobile experience, from the sign-up and application processes
                  to managing personal job records. Using{" "}
                  <span className="text-AAsecondary">Redux</span> for state
                  management, I architected a robust data flow that allowed job
                  seekers to seamlessly view available positions, apply for jobs
                  with specific shifts, and track their application status in
                  real-time. I also integrated{" "}
                  <span className="text-AAsecondary">Async Storage</span> to
                  persist user data and application state locally, ensuring a
                  smooth and responsive experience even with intermittent
                  network connectivity.
                </p>
                <p className="text-gray-300 xl:text-gray-400 text-left ">
                  A significant part of my work involved building out the core
                  features that directly benefit the user, such as a dedicated
                  section for viewing and managing applied jobs, a timesheet
                  tracking system to monitor hours worked, and a pay record
                  management system to keep track of earnings. This required
                  extensive{" "}
                  <span className="text-AAsecondary">API integration</span> to
                  communicate with the back-end, fetching job postings, sending
                  application data, and receiving timesheet and pay information.
                  This project highlights my expertise in building and
                  integrating complex mobile applications with React Native, my
                  proficiency in state management with Redux, and my ability to
                  create a user-friendly and functional experience for
                  end-users, with a specific focus on real-time data flow
                  through <span className="text-AAsecondary">Socket.IO</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 xl:text-gray-400
               text-sm font-Text2 xl:justify-end"
              >
                <span className="pr-4 z-10">React Native</span>
                <span className="pr-4 z-10">Redux</span>
                <span className="pr-4 z-10">Async Storage</span>
                <span className="pr-4 z-10">API integration</span>
                <span className="pr-4 z-10">Socket.IO</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <div className="z-10 flex fle-row space-x-5 ">
                  {/* <GithubIcon link="https://github.com/hktitof/Ypredict" /> */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.Chefzonechefslimited&hl=en"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <ExternalLink url={""} router={router} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}