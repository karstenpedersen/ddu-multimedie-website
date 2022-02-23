import Footer from "components/Footer";
import IconLink from "components/IconLink";
import Page from "components/layouts/Page";
import Section from "components/layouts/Section";
import ProjectCard from "components/ProjectCard";
import { ProjectData } from "data/Project.data";
import type { NextPage } from "next";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import elementImage from "../../public/images/element.png";

const Home: NextPage = () => {
  return (
    <Page title="Karsten Pedersen">
      <Section sectionId="home" className="relative">
        <h1 className="title ">Værkstedsforløb</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel
          nesciunt totam ex accusantium sapiente dolores deleniti suscipit
          doloribus quos.
        </p>

        <iframe
          src="https://www.youtube.com/embed/sFZjqVnWBhc?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-10 mb-20 aspect-video w-full shadow-md md:mb-14"
        ></iframe>

        <a
          href="#værkstedsforløb"
          className="group hover:text-dark flex w-fit items-center gap-2 rounded bg-transparent py-4 font-bold text-primary shadow-none transition-all hover:bg-secondary hover:px-10 hover:shadow-lg"
        >
          <p className="text-inherit">Læs mere</p>
          <FaIcons.FaArrowRight className="" />
        </a>

        <div className="absolute left-0 -top-20 z-[-20] w-[75%] min-w-[400px] max-w-xl">
          <Image src={elementImage} alt="" className="z-[-1]" />
        </div>
      </Section>
      <Section sectionId="værkstedsforløb">
        <h1 className="title ">Om forløbet</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel
          nesciunt totam ex accusantium sapiente dolores deleniti suscipit
          doloribus quos.
        </p>

        <div id="sub-todo" className="mt-10">
          <h2 className="subtitle">Hvad du lærer gennem forløbet</h2>
          <div className="grid max-w-xl grid-cols-2">
            <ul className="flex flex-col gap-4 ">
              <li className="flex items-center gap-2">
                <FaIcons.FaCheck className="text-primary" />
                <p>Håndtere maskiner</p>
              </li>
              <li className="flex items-center gap-2">
                <FaIcons.FaCheck className="text-primary" />
                <p>Arbejde i grupper</p>
              </li>
              <li className="flex items-center gap-2">
                <FaIcons.FaCheck className="text-primary" />
                <p>Være i et fællesskab</p>
              </li>
              <li className="flex items-center gap-2">
                <FaIcons.FaCheck className="text-primary" />
                <p>Relevant faglig viden</p>
              </li>
              <li className="flex items-center gap-2">
                <FaIcons.FaCheck className="text-primary" />
                <p>Udøve teori</p>
              </li>
            </ul>
            <ul className="flex flex-col gap-4 ">
              <li className="flex items-center gap-2">
                <FaIcons.FaCheck className="text-primary" />
                <p>Fremstille produkter</p>
              </li>
              <li className="flex items-center gap-2">
                <FaIcons.FaCheck className="text-primary" />
                <p>Værksteds sikkerhed</p>
              </li>
              <li className="flex items-center gap-2">
                <FaIcons.FaCheck className="text-primary" />
                <p>Vedligeholdelse</p>
              </li>
              <li className="flex items-center gap-2">
                <FaIcons.FaCheck className="text-primary" />
                <p>Arbejde selvstændigt</p>
              </li>
              <li className="flex items-center gap-2">
                <FaIcons.FaCheck className="text-primary" />
                <p>Gode praksisser</p>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Section sectionId="test" className="bg-secondary">
        <h1 className="title ">Video</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel
          nesciunt totam ex accusantium sapiente dolores deleniti suscipit
          doloribus quos.
        </p>

        <iframe
          src="https://www.youtube.com/embed/QwRlt1XyOg0?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-10 mb-20 aspect-video w-full shadow-md md:mb-14"
        ></iframe>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          repellendus non nostrum aliquid excepturi maiores asperiores quod
          debitis eum vel.
        </p>
      </Section>
      <Section sectionId="" className="relative">
        <h1 className="title ">Samarbejde mellem HTX og FMS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel
          nesciunt totam ex accusantium sapiente dolores deleniti suscipit
          doloribus quos.
        </p>
      </Section>
    </Page>
  );
};

export default Home;
