import Card from "components/Card";
import Page from "components/layouts/Page";
import Section from "components/layouts/Section";
import PopOutLink from "components/PopOutLink";
import ShapeBottom from "components/shapes/ShapeBottom";
import ShapeTop from "components/shapes/ShapeTop";
import type { NextPage } from "next";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import elementImage from "../../public/images/element.png";
import image1 from "../../public/images/image1.jpg";
import image2 from "../../public/images/image2.png";
import image3 from "../../public/images/image3.png";

const Home: NextPage = () => {
  return (
    <Page title="Fredericia Maskinmesterskole">
      <Section sectionId="home" className="relative">
        <h1 className="title ">Værkstedsforløbet</h1>
        <p className="max-w-lg mb-3">
          Hos FMS kan du læse til maskinmester i Fredericia, Esbjerg og Sønderborg.
          Hvis du kommer hertil med en gymnasiel baggrund skal du gennem vores værkstedsforløb, for at du er klar til at læse til maskinmester.
        </p>
        <p>Dette kan du læse mere om på denne side.</p>

        <iframe
          src="https://www.youtube.com/embed/RhrDqU3R5_I"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-10 mb-20 aspect-video w-full shadow-md md:mb-14"
        />

        <PopOutLink text="Læs mere" path="#værkstedsforløb" />

        <div className="absolute left-0 -top-20 z-[-20] w-[75%] min-w-[400px] max-w-xl">
          <Image src={elementImage} alt="" className="z-[-1]" />
        </div>
      </Section>
      <Section sectionId="værkstedsforløb">
        <h1 className="title ">Om forløbet</h1>
        <p>
          Gennem værkstedsforløbet vil du lærer at arbejde selvstændigt i et værksted, hvor du vil fremstille forskellige produkter. I forløbet læreres teorien og den afprøves undervejs nede i vores værksted.
        </p>

        <div id="sub-todo" className="mt-10">
          <h2 className="subtitle">Hvad du lærer gennem forløbet</h2>
          <div className="mb-10 grid max-w-xl grid-cols-2">
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

        <PopOutLink
          text="Læs mere på FMS.dk"
          path="https://fms.dk"
          linkType="link"
        />
      </Section>

      <ShapeTop />

      <Section className="bg-secondary pb-60">
        <h1 id="industri-og-ledelse" className="title pt-10">
          Industri og ledelse
        </h1>
        <p>
          For dig, der har et ønske om et lederjob i større virksomheder inden for energi, forsyning, produktion eller service. Linjen er udarbejdet i samarbejde med industrien i Trekantområdet.
        </p>

        <iframe
          src="https://www.youtube.com/embed/xg_s8F52b7g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mt-10 mb-20 aspect-video w-full shadow-md md:mb-14"
        />

        <p className="subtitle">Hvad du vil opnå</p>
        <p>
          Kombinationen af teknisk kompetence og en bred viden om sikkerhed, kvalitet, arbejdsmiljø, naturmiljø, økonomi og ledelse, giver mulighed for lederstillinger og job, hvor du bliver bindeleddet mellem leverandører, myndigheder, produktion og kunder.
        </p>
      </Section>

      <ShapeBottom />

      <Section sectionId="besøg-os" className="relative">
        <h1 className="title ">Kom og besøg os</h1>
        <p className="max-w-lg">Du er meget velkommen til at besøge skolen, så vi kan vise dig rundt og fortælle endnu mere om studiet og om studielivet på FMS. <a href="https://fms.dk/p/bliv-studerende/maskinmester/studievejledning" target="_blank" rel="noreferrer" className="link">Kontakt en studievejleder</a> på den afdeling, du gerne vil besøge, og aftal en tid.</p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:grid-rows-1 mb-10">
          <Card title="Studerende på FMS" description="Studerende er i gang med planlægning." image={image1} />
          <Card title="Værkstedet er klar!" description="Nye maskiner er opstillet i værkstedet." image={image2} />
          <Card title="Værkstedet i brug" description="Værkstedet er i fuld brug af nye elever." image={image3} />
        </div>
      </Section>
    </Page>
  );
};

export default Home;
