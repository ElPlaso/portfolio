import { useDetailsContext } from "@/contexts/details-context";
import Image from "next/image";

export default function Details() {
  const { detailsOpen } = useDetailsContext();

  return detailsOpen ? (
    <div className="flex flex-col space-y-4 w-full max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:z-10 max-md:p-4 max-md:transition-transform max-md:bg-white max-md:dark:bg-gray-800 max-md:transform-none max-md:h-screen max-sm:pb-56 max-md:pb-16 max-sm:pt-24 max-md:overflow-y-scroll">
      <div className="space-y-4">
        <h3 className="font-bold">Allow me to introduce myself.</h3>
        <Image
          src="/images/profile.jpg"
          alt="Plaso Kusay"
          width={200}
          height={200}
          className="rounded-lg shadow-xl object-cover h-[200px] w-[200px]"
        />
        <p className="dark:text-grayDarkSecondary">
          My name is Moo Plah Soe (Plaso) Kusay, and I am an aspiring software
          engineer with a growing interest in web development. I am currently
          studying for a major in Software Engineering at Victoria University of
          Wellington, specialising in Networked Applications, and I am in my
          final year. I enjoy skateboarding, playing bass, and playing chess,
          among other things. Feel free to navigate the rest of my site to learn
          more about my projects and experiences.
        </p>
      </div>
      <div>
        <h3 className="font-bold">Check out my portfolio</h3>
        <p className="dark:text-grayDarkSecondary">
          I have worked on a small number of React projects, including this one.
          These projects were mainly for learning purposes, but I hope they can
          be of use or entertainment to others.
        </p>
      </div>
      <div>
        <h3 className="font-bold">If you want to find out more...</h3>
        <p className="dark:text-grayDarkSecondary">
          Check out my GitHub page for other projects I have worked on,
          including non-React projects, or contact me via Email or LinkedIn.
        </p>
      </div>
      <ul className="list-disc ml-10 break-all">
        <li>
          <span className="hover:underline">
            <a href="https://github.com/ElPlaso" target="_blank">
              https://github.com/ElPlaso
            </a>
          </span>
        </li>
        <li>
          <span className="hover:underline">
            <a href="https://www.linkedin.com/in/plaso-kusay/" target="_blank">
              https://www.linkedin.com/in/plaso-kusay/
            </a>
          </span>
        </li>
        <li>
          <span className="hover:underline">
            <a href="mailto: plahsoekusay@gmail.com">plahsoekusay@gmail.com</a>
          </span>
        </li>
      </ul>
    </div>
  ) : (
    <></>
  );
}
