import React from "react";
import styles from "./MyProjects.module.scss";
import Image from "next/image";

const Card = (props: { name: string; image: string; description: string }) => {
  const { name, image, description } = props;
  return (
    <div className={styles.projects__cards__item}>
      <div className={styles.projects__cards__item__title}>{name}</div>
      <div>
        {/* <Image src={image} alt={"project" + name} loading="lazy" layout="fill" className={styles.cards__item__image} /> */}
      </div>
      <div className={styles.projects__cards__item__description}>
        {description}
      </div>
    </div>
  );
};

const MyProjects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.projects__title}>
        <h1>Projects</h1>
      </div>

      <div className={styles.projects__cards}>
        <Card name="Apple" image="" description="" />
        <Card name="Pokemon" image="" description="" />
      </div>
    </div>
  );
};

export default MyProjects;
