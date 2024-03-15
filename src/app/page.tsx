import Image from "next/image";
import styles from "./page.module.scss";
import LinkImage from "@/components/LinkImage";
import Project from "@/types/Project";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {

    const projects: Project[] = [
        {
            title: "Projet 1",
            link: "https://www.google.com",
            image: "/default_project.png"
        },
        {
            title: "Projet 2",
            link: "https://www.google.com",
            image: "/default_project.png"
        },
        {
            title: "Projet 3",
            link: "https://www.google.com",
            image: "/default_project.png"
        },
        {
            title: "Projet 4",
            link: "https://www.google.com",
            image: "/default_project.png"
        },
    ];

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

          <section className="flex-column align-center justify-center">
              <div className={styles.quote}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lorem sodales mauris sagittis
                      condimentum. Duis quis euismod ipsum. Pellentesque tellus ipsum, auctor a euismod at, lobortis et
                      ex. Sed cursus fringilla est id molestie. Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. Suspendisse quis orci eget arcu finibus eleifend congue vitae eros. Nullam quis finibus
                      felis, eget congue augue.</p>
              </div>
          </section>

          <section className="flex-column align-center justify-center">
              <h2>Projets</h2>
              <div className="flex-row justify-between gap-5">
                  {projects.map((project, index) => <ProjectCard project={project} key={index}/>)}
              </div>
          </section>
    </main>
  );
}
