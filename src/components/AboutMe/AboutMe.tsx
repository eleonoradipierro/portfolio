import React from "react";
import styles from "./AboutMe.module.scss";
import Image from "next/image";

import linkedin from "../../../public/images/linkedin.svg";
import mail from "../../../public/images/mail.svg";
import phone from "../../../public/images/phone.svg";
import github from "../../../public/images/github.svg";

const NavBar = () => {
  return (
    <div>
      <div className={styles.navBar}>
        <div>About Me</div>
        <div>Projects</div>
      </div>
    </div>
  );
};

const ContactImage = (props: { name: string; src: string }) => {
  const { name, src } = props;
  return (
    <div className={styles.contacts__image}>
      <Image src={src} alt={name} loading="lazy" layout="fill" />
    </div>
  );
};

const AboutMe = () => {
  const contactImages = [
    { name: "linkedin", src: linkedin },
    { name: "mail", src: mail },
    { name: "phone", src: phone },
    { name: "github", src: github },
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
                Hello! I'm Eleonora.
              </h3>
              <p className={styles.descriptionContainer__description}>
                I love programming and currently I'm passionate about web
                development. In my free time I like to learn about new
                technologies, workout, read and play videogames.
              </p>
            </div>
          </div>

          <div className={styles.contacts}>
            {contactImages.map((contact) => {
              return <ContactImage name={contact.name} src={contact.src} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
