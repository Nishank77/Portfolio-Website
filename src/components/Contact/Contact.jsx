import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"/assets/contact/emailIcon.png"} alt="Email Icon" />
          <a href="mailto:nishank.kose77@gmail.com">nishank.kose77@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={"/assets/contact/linkedinIcon.png"} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/nishank-kose/">
            linkedin.com/Nishank-Kose
          </a>
        </li>
        <li className={styles.link}>
          <img src={"/assets/contact/githubIcon.png"} alt="GitHub Icon" />
          <a href="https://github.com/Nishank77">github.com/Nishank77</a>
        </li>
      </ul>
    </footer>
  );
};
