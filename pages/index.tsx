import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dan&apos;s Xmas Gift</title>
        <meta name="description" content="Dan's xmas gift" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>To Mom, Dad, Ben, and Brooke</h1>
        <div style={{ marginBottom: 50 }}>(Sorry Tom and Cristal)</div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/vincent.jpeg" width={500} height={500} alt="" />
          </div>
          <div className={styles.card}>
            <Image src="/light.jpg" width={500} height={500} alt="" />
          </div>
        </div>
        <div style={{ marginTop: 30 }}>Scroll to find out more</div>
        <div style={{ height: "200vh" }} />
        <div style={{ marginTop: 30 }}>Keep going</div>
        <div style={{ height: "200vh" }} />
        <div className={styles.grid}>
          <a href="https://www.columbusvangogh.com/">
            <video
              className="elementor-background-video-hosted elementor-html5-video lazyloaded"
              autoPlay
              muted
              playsInline
              loop
              src="https://vangogh.b-cdn.net/VgIntro.mp4"
              style={{ maxWidth: 600, marginBottom: "30vh" }}
            />
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Powered by{" "}
          <strong style={{ marginLeft: 3 }}> Dan's Last Minute Gifts</strong> */}
        </a>
      </footer>
    </div>
  );
};

export default Home;
