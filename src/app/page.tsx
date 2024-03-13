import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/profile_picture.png"
          alt="Photo de profil"
          width={180}
          height={180}
          priority
        />
    </main>
  );
}
