import { useDetailsContext } from "@/contexts/details-context";

export default function Details() {
  const { detailsOpen } = useDetailsContext();

  return detailsOpen ? (
    <div className="text-gray-600 flex flex-col space-y-4 w-full">
      <div>
        <h3 className="font-bold">Allow me to introduce myself.</h3>
        <p>
          My name is Plaso, and I am an aspiring software engineer with a
          growing interest in web development. I am currently studying a major
          in Software Engineering at Victoria University of Wellington,
          specialising in Network Engineering. I enjoy skateboarding, playing
          bass, and playing chess amongst other things.
        </p>
      </div>
      <div>
        <h3 className="font-bold">Check out my portfolio</h3>
        <p>
          I have worked on a small number of React projects, including this one.
          These projects were mainly for learning purposes, but I hope they can
          be of use or entertainment to others.
        </p>
      </div>
      <div>
        <h3 className="font-bold">If you want to find out more...</h3>
        <p>
          Check out my GitHub page for other projects I have worked on,
          including non-React projects, or contact me via Email or LinkedIn.
        </p>
      </div>
      <ul className="list-disc ml-10">
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
