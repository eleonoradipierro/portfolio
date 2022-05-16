import React from "react";
import styles from "./MyProjects.module.scss";

import appleClone from "../../../public/images/apple-clone.png";
import pokedex from "../../../public/images/pokedex.png";

import Image from "next/image";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

const Card = (props: {
  name: string;
  description: string;
  image: StaticImageData;
  src: string;
}) => {
  const { name, description, image, src } = props;

  return (
    <a href={src} className={styles.item}>
      <Image
        src={image.src}
        alt={name}
        className={styles.item__image}
        loading="lazy"
        layout="fill"
      />
      <div className={styles.item__container}>
        <h3 className={styles.item__container__title}>{name}</h3>
        <p className={styles.item__container__description}>{description}</p>
      </div>
    </a>
  );
};

const MyProjects = () => {
  const projects = [
    {
      name: "Apple UK Homepage Clone",

      description: "Made from scratch apple.com/uk.",
      src: "https://appleuk-clone-homepage.netlify.app/",
      image: appleClone,
    },
    {
      name: "Pokedex",
      description:
        "Website that allows the user to search data about a Pokemon. (Work in progress)",
      src: "",
      image: pokedex,
    },
  ];
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.projects__title}>
        <h1>Projects</h1>
      </div>

      <div className={styles.projects__cards}>
        {projects.map((project, i) => {
          return (
            <Card
              key={i}
              name={project.name}
              description={project.description}
              src={project.src}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
