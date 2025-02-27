import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Nishank</h1>
        <p className={styles.description}>
          I&apos;m a Full Stack Developer with 5 experience with React, Java and
          SpringBoot. Reach Out if you&apos;d like to learn more
        </p>
        <a className={styles.contactBtn} href="mailto:nishank.kose77@gmail.com">
          Contact Me
        </a>
      </div>

      <img
        className={styles.heroImg}
        src="/assets/hero/final.png"
        alt="Hero Image of Me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
