import Section from "../components/Section";
import Heading from "../components/Heading";
import { LayoutGrid } from "../ui/layout-grid";
import { responsive, frontendLibraries, backend, javascript } from "../assets";

const Certifcations = () => {
  return (
    <Section id="certifications">
      <div className="px-5 lg:px-64">
        <Heading
          title="Certifications "
          text="Click each image  to view its full details.          "
        />

        <div className="h-screen  w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </Section>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Responsive Web Design </p>
      <div className="font-normal text-base my-4 mt-1 max-w-lg text-neutral-200">
        <a
          href="https://www.freecodecamp.org/certification/meraeugene/responsive-web-design"
          target="_blank"
        >
          https://www.freecodecamp.org/certification/meraeugene/responsive-web-design
        </a>
      </div>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Front End Development Libraries{" "}
      </p>
      <div className="font-normal text-base my-4 mt-1 max-w-lg text-neutral-200">
        <a
          href="https://www.freecodecamp.org/certification/meraeugene/responsive-web-design"
          target="_blank"
        >
          https://www.freecodecamp.org/certification/meraeugene/front-end-development-libraries
        </a>
      </div>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Back End Development and APIs
      </p>
      <p className="font-normal text-base text-white"></p>
      <div className="font-normal text-base my-4 max-w-lg text-neutral-200">
        <a
          href="https://www.freecodecamp.org/certification/meraeugene/back-end-development-and-apis"
          target="_blank"
        >
          https://www.freecodecamp.org/certification/meraeugene/front-end-development-libraries
        </a>
      </div>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        Javascript Algorithms and Data Structures (Beta)
      </p>
      <p className="font-normal text-base text-white"></p>
      <div className="font-normal text-base my-4 max-w-lg text-neutral-200">
        <a
          href="https://freecodecamp.org/certification/fcc83c91504-4c4d-4ac2-a479-5658a1ad8e84/javascript-algorithms-and-data-structures-v8"
          target="_blank"
        >
          https://freecodecamp.org/certification/fcc83c91504-4c4d-4ac2-a479-5658a1ad8e84/javascript-algorithms-and-data-structures-v8
        </a>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-1",
    thumbnail: responsive,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: frontendLibraries,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: backend,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-1",
    thumbnail: javascript,
  },
];

export default Certifcations;
