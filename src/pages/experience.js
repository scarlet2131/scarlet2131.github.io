import Head from 'next/head';
import React from 'react';
import NavBar from '../components/NavBar';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Experience - My Portfolio</title>
        <meta name="description" content="My professional experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        <h1 className={styles.title}>Experience</h1>
        <div className={styles.experienceList}>
          <div className={styles.experienceItem}>
            <h2>Job Title</h2>
            <p>Company Name</p>
            <p>Duration</p>
            <p>Description of your role and responsibilities.</p>
          </div>
          {/* Add more experience items here */}
        </div>
      </main>
    </div>
  );
};

export default Experience;
