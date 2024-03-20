import Image from "next/image";
import styles from "./page.module.scss";
import DownloadCVButton from "@/components/DownloadCVButton";
import LinkImage from "@/components/LinkImage";

export default function Home() {

    return (
        <main>
            <section className={styles.presentationSection}>
                <div className={styles.presentation}>
                    <Image
                        className={styles.logo}
                        src="/profile_picture.png"
                        alt="Photo de profil"
                        width={150}
                        height={150}
                        priority
                    />
                    <div className="flex-column align-center gap-1">
                        <h1 className={styles.title}>Antonin DAVID</h1>
                        <h2 className={styles.subtitle}>Concepteur Développeur Fullstack</h2>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex-column align-center gap-2">
                    <div className="flex-row justify-between gap-3">
                        <LinkImage href={process.env.LINK_LINKEDIN as string} src="/linkedin.svg" alt="LinkedIn"/>
                        <LinkImage href={process.env.LINK_GITHUB as string} src="/github.svg" alt="GitHub"/>
                    </div>
                    <DownloadCVButton/>
                </div>
            </section>
        </main>
    );
}
