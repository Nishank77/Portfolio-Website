import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutImage.png"
          alt="Me Sitting with a Laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cursorIcon.png" alt="Curson Icon" />
            <div className={styles.aboutItemsText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I&apos;m a Full-Stack Developer with experience in building and
                optimizing Websites
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="/assets/about/serverIcon.png" alt="Server Icon" />
            <div className={styles.aboutItemsText}>
              <h3>MicroServices Architect</h3>
              <p>
                I&apos;m a Java Microservices Develoepr with experience in
                planning and building scalable Backend Technologies
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src="/assets/about/uiIcon.png" alt="UI Icon" />
            <div className={styles.aboutItemsText}>
              <h3>Framework Developer</h3>
              <p>
                I have worked on various Frameworks including React, Angular as
                well as Vanilla Javascript for buidling Applications
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
