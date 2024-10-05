import { useDetailsContext } from "@/contexts/details-context";
import Image from "next/image";

export default function Details() {
  const { detailsOpen } = useDetailsContext();

  return detailsOpen ? (
    <div
      className={`flex flex-col space-y-4 w-full 
      max-md:fixed max-md:bottom-0 max-md:left-0 
      max-md:right-0 max-md:z-10 max-md:p-4 
      max-md:transition-transform max-md:bg-white 
      max-md:dark:bg-darkBackground max-md:transform-none 
      max-md:h-screen max-sm:pb-56 max-md:pb-16 max-sm:pt-24
      max-md:overflow-y-scroll`}
    >
      <div>
        <h3 className="font-bold">Allow me to introduce myself.</h3>
        <p className="dark:text-grayDarkSecondary">
          My name is Plaso Kusay, and I am a software engineer with an interest
          in full-stack web development and user interface programming. I am
          passionate about creating applications and software solutions that are
          both meaningful and easy to use. I am an alumnus of Victoria
          University of Wellington, where I graduated with an Honours degree in
          Software Engineering. I enjoy skateboarding, bouldering, making music,
          and playing chess, among other things. Feel free to navigate the rest
          of my site to learn more about my projects and experiences.
        </p>
      </div>
      <div>
        <h3 className="font-bold">Check out my portfolio</h3>
        <p className="dark:text-grayDarkSecondary">
          I have worked on a small number of mainly web-based projects. These
          projects were mainly for learning purposes, but I hope they can be of
          use or entertainment to others.
        </p>
      </div>
      <div>
        <h3 className="font-bold">If you want to find out more...</h3>
        <p className="dark:text-grayDarkSecondary">
          Check out my GitHub page for other projects I have worked on, or
          contact me via Email or LinkedIn. I am also happy to collaborate on
          some side projects, so feel free to reach out to me.
        </p>
      </div>
      <ul className="ml-10 break-all list-disc">
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
