import Image from "next/image";
import styles from "./page.module.css";
import LinkImage from "@/components/LinkImage";

export default function Home() {
  return (
      <main>
          <section className={styles.presentation}>
              <div className="presentation-content flex-row flex-wrap align-center justify-between gap-5">
                  <Image
                      className={styles.logo}
                      src="/profile_picture.png"
                      alt="Photo de profil"
                      width={250}
                      height={250}
                      priority
                  />
                  <div className="flex-column justify-start">
                      <div>
                          <h1 className={styles.title}>Antonin DAVID</h1>
                          <h2 className={styles.subtitle}>Concepteur Développeur Fullstack</h2>
                      </div>
                      <div className="flex-row">
                          <LinkImage href={process.env.LINK_LINKEDIN as string} src="/linkedin.svg" alt="LinkedIn"/>
                          <LinkImage href={process.env.LINK_GITHUB as string} src="/github.svg" alt="GitHub"/>
                      </div>
                  </div>
              </div>
          </section>
    </main>
  );
}
