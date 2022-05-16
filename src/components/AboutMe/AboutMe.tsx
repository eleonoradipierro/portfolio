import React, { useState } from "react";
import styles from "./AboutMe.module.scss";
import Image from "next/image";

import linkedin from "../../../public/images/linkedin.svg";
import mail from "../../../public/images/mail.svg";
import phone from "../../../public/images/phone.svg";
import github from "../../../public/images/github.svg";

const NavBar = () => {
  return (
    <div id="aboutMe">
      <div className={styles.navBar}>
        <a href="#aboutMe">About Me</a>
        <a href="#projects">Projects</a>
      </div>
    </div>
  );
};

const ContactImage = (props: {
  name: string;
  src: string;
  href: string;
  other: string;
}) => {
  const { name, src, href, other } = props;

  const [hover, setHover] = useState(false);

  return (
    <a
      className={styles.contacts__image}
      href={href ? href : "#top"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={src} alt={name} loading="lazy" layout="fill" />
      {hover && <div className={styles.contacts__image__tooltip}>{other}</div>}
    </a>
  );
};

const AboutMe = () => {
  const contactImages = [
    {
      name: "linkedin",
      src: linkedin,
      href: "https://www.linkedin.com/in/eleonoradipierro/",
      other: "Linkedin",
    },
    {
      name: "mail",
      src: mail,
      href: "",
      other: "eleonora.dipierro@gmail.com",
    },
    { name: "phone", src: phone, href: "", other: "+39 334 345 1004" },
    {
      name: "github",
      src: github,
      href: "https://github.com/eleonoradipierro/",
      other: "GitHub",
    },
  ];

  return (
    <>
      <NavBar />

      <section>
        <div className={styles.wrapper}>
          <div>
            <h1 className={styles.title}>Eleonora Di Pierro</h1>
            <div className={styles.descriptionContainer}>
              <h3 className={styles.descriptionContainer__subtitle}>
                Hello! I&apos;m Eleonora.
              </h3>
              <p className={styles.descriptionContainer__description}>
                I love programming and currently I&apos;m passionate about web
                development. In my free time I like to learn about new
                technologies, workout, read and play videogames.
              </p>
            </div>
          </div>

          <div className={styles.contacts}>
            {contactImages.map((contact, i) => {
              return (
                <ContactImage
                  key={i}
                  name={contact.name}
                  src={contact.src}
                  href={contact.href}
                  other={contact.other}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
