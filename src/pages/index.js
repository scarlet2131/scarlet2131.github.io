import emailjs from 'emailjs-com';
import Head from 'next/head';
import { default as React, useRef } from 'react';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';


const Home = () => {

  // const [showProgrammingLanguages, setShowProgrammingLanguages] = useState(false);
  // const [showBackendDevelopment, setShowBackendDevelopment] = useState(false);
  // const [showFrontendDevelopment, setShowFrontendDevelopment] = useState(false);
  // const [showToolsFrameworks, setShowToolsFrameworks] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4eb2uqh', 'template_nymmlf9', form.current, 'r1qt7qsx8zuQFrJev')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Monisha Ranjan&apos;s Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.14.0/devicon.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Head>
      <NavBar />


      <main className={styles.main}>
      <section id="home" className={styles.homeSection}>
          <div className={styles.profileContainer}>
            <div className={styles.imageContainer}>
              <img src="/public/images/profile.png" alt="Monisha Ranjan" className={styles.image} />
              <div className={styles.contactInfo}>
                {/* <p>Phone: +123-456-7890</p> */}
                <p>Email: <a href="mailto:ranjan.monisha233@gmail.com">ranjan.monisha233@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/monisharanjan" target="_blank"><i className="devicon-linkedin-plain"></i></a></p>
                <p>GitHub: <a href="https://github.com/scarlet2131" target="_blank"><i className="devicon-github-plain"></i></a></p>
              </div>
            </div>
            <div className={styles.intro}>
            <h1 className={styles.title}>I&apos;m Monisha Ranjan</h1>
            <p className={styles.description}>
                Software Engineer specializing in full-stack development and scalable digital solutions. With a strong foundation in backend technologies such as Spring Boot, FastAPI, and MongoDB, combined with front-end expertise in React and Bootstrap, I create impactful and user-centric applications. Passionate about creating efficient and scalable websites, focusing on leveraging modern web technologies to enhance performance and user experience.
              </p>
              <a href="https://drive.google.com/file/d/1H5Cue3FkD0P0su9xKhucd5z6auYedR7E/view?usp=sharing" target="_blank" className={styles.resumeButton}>Resume</a>

            </div>
          </div>
        </section>

        <section id="education" className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.educationGrid}>
            <div className={styles.educationCard}>
              <img src="/images/iiitg.jpg" alt="IIIT Guwahati" className={styles.educationIcon} />
              <div className={styles.educationInfo}>
                <h3>Indian Institute Of Information Technology, Guwahati, India</h3>
                <h5>B.Tech in Computer Science - 7.75 CGPA</h5>
                <p>Jul. 2017 - May 2021</p>
              </div>
            </div>
            <div className={styles.educationCard}>
              <img src="/images/lambton_college.jpg" alt="Lambton College" className={styles.educationIcon} />
              <div className={styles.educationInfo}>
                <h3>Lambton College, Toronto, Canada</h3>
                <h5>Post Grad. Certificate in Full Stack Software Development - 3.608 GPA</h5>
                <p>Sept. 2023 - Apr. 2025</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className={styles.experienceSection}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.timeline}>

            {/* <!-- Tekion Corp. - Software Engineer --> */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                {/* <span className={styles.timelineDate}>2022 - 2023</span> */}
                <h3 className={styles.position}>Software Engineer</h3>
                <h4 className={styles.company}>Tekion Corp., Bengaluru, India</h4>
                <p>Oct. 2022 - Jul. 2023</p>
                <p>Spearheaded the development of core product features, managing the process from initial design to final delivery. Streamlined product requirements into engineering tasks, facilitating project scoping and task delegation.</p>
              </div>
            </div>

            {/* <!-- Tekion Corp. - Associate Software Engineer --> */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                {/* <span className={styles.timelineDate}>2021 - 2022</span> */}
                <h3 className={styles.position}>Associate Software Engineer</h3>
                <h4 className={styles.company}>Tekion Corp., Bengaluru, India</h4>
                <p>Jul. 2021 - Sept. 2022</p>
                <p>Collaborated closely with the Core Accounting Team for the dealership management system, developing numerous backend features currently utilized by live dealers. Developed and sustained advanced accounting reports, enabling near real-time data analysis while ensuring scalability and consistency in reporting mechanisms. Played a pivotal role in the Central Accounting Team by implementing features using Kafka for asynchronous event handling with a focus on data reliability. Successfully optimized complex database queries, achieving a 30% reduction in query execution time, thereby significantly lowering data retrieval overheads for large datasets.</p>
              </div>
            </div>

            {/* <!-- Tekion Corp. - Software Engineer Intern --> */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                {/* <span className={styles.timelineDate}>2021</span> */}
                <h3 className={styles.position}>Software Engineer Intern</h3>
                <h4 className={styles.company}>Tekion Corp., Bengaluru, India</h4>
                <p>Jan. 2021 - Jun. 2021</p>
                <p>As a part of the Backend team, developed an employee management system enhancing leave application processes and providing role-specific management features.</p>
              </div>
            </div>

            {/* <!-- Smart Doctors - Software Development Intern --> */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                {/* <span className={styles.timelineDate}>2020</span> */}
                <h3 className={styles.position}>Software Development Intern</h3>
                <h4 className={styles.company}>Smart Doctors, Remote</h4>
                <p>May 2020 - Jul. 2020</p>
                <p>Developed a video conferencing feature utilizing the Twilio API. Transitioned the website from PHP to the Laravel MVC framework, enhancing functionality and user experience.</p>
              </div>
            </div>

            {/* <!-- CertCube - Web Development Intern --> */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                {/* <span className={styles.timelineDate}>2019</span> */}
                <h3 className={styles.position}>Web Development Intern</h3>
                <h4 className={styles.company}>CertCube, New Delhi, India</h4>
                <p>Jun. 2019 - Jul. 2019</p>
                <p>Designed and developed an interactive training portal, improving learning and engagement. Led the design and development of the company’s official website, enhancing online presence and accessibility.</p>
              </div>
            </div>

          </div>
        </section>

        <section id="coding-profiles" className={styles.section}>
          <h2 className={styles.sectionTitle}>Coding Profiles</h2>
          <div className={styles.codingGrid}>
            <div className={styles.codingProfileCard}>
              <a href="https://leetcode.com/mr_233/" target="_blank" rel="noopener noreferrer">
                <img src="/images/leetcode.jpg" alt="LeetCode" className={styles.codingProfileImage} />
                <p>LeetCode</p>
              </a>
              <p>Max. Rating: 1609</p>
            </div>
            <div className={styles.codingProfileCard}>
              <a href="https://www.codechef.com/users/mr_2131" target="_blank" rel="noopener noreferrer">
                <img src="/images/codechef.jpg" alt="CodeChef" className={styles.codingProfileImage} />
                <p>CodeChef</p>
              </a>
              <p>Max. Rating: 1833</p>
            </div>
            <div className={styles.codingProfileCard}>
              <a href="https://codeforces.com/profile/mr_2131" target="_blank" rel="noopener noreferrer">
                <img src="/images/codeforces.jpg" alt="CodeForces" className={styles.codingProfileImage} />
                <p>CodeForces</p>
              </a>
              <p>Max. Rating: 1495</p>
            </div>
            <div className={styles.codingProfileCard}>
              <a href="https://www.hackerearth.com/@monisha161" target="_blank" rel="noopener noreferrer">
                <img src="/images/hackerearth.jpg" alt="HackerEarth" className={styles.codingProfileImage} />
                <p>HackerEarth</p>
              </a>
              <p>Max. Rating: 1514</p>
            </div>
            <div className={styles.codingProfileCard}>
              <a href="https://www.hackerrank.com/ranjan_monisha21" target="_blank" rel="noopener noreferrer">
                <img src="/images/hackerrank.jpg" alt="HackerRank" className={styles.codingProfileImage} />
                <p>HackerRank</p>
              </a>
              <p>Max. Rating: 1729</p>
            </div>
          </div>
        </section>

        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.projectsGrid}>
              <div className={styles.projectCard}>
                <h3>RAG Chatbot Application</h3>
                <p> May. 2024 - May. 2024</p>
                <p>GitHub Repository: <a href="https://github.com/scarlet2131/RAG-ChatBot">RAG-ChatBot</a></p>
                <ul>
                  <li>Built a chatbot using the FARM stack and RAG model for enhanced responses.</li>
                  <li>Integrated MongoDB Atlas for document storage and retrieval.</li>
                  <li>Implemented FastAPI for the backend API.</li>
                  <li>Developed a responsive UI with React.</li>
                  <li>Configured RAG for accurate, context-aware responses.</li>
                  <li>Deployed on a cloud platform for scalability.</li>
                </ul>
              </div>
              <div className={styles.projectCard}>
                <h3>Moodify - Music Recommendation System</h3>
                <p> Feb. 2024 - Feb. 2024</p>
                <p>GitHub Repository: <a href="https://github.com/scarlet2131/Moodify-SoulSonic">Moodify-SoulSonic</a></p>
                <ul>
                  <li>Developed a dynamic music recommendation system, leveraging Spotify API and OpenAI’s ChatGPT to suggest music based on user mood.</li>
                  <li>Implemented user authentication, mood analysis from textual input, and secure password management using advanced cryptographic methods.</li>
                  <li>Technologies used: Python, MongoDB, Spotify API, OpenAI ChatGPT, and FastApi for backend development.</li>
                </ul>
              </div>
              <div className={styles.projectCard}>
                <h3>Integrated Dealership Database Upgrade</h3>
                <p> Mar. 2023 - Apr. 2023</p>
                <p>Tekion Corp.</p>
                <ul>
                  <li>Orchestrated the integration of multiple dealership databases into a single, efficient system, catering to both MySQL and MongoDB.</li>
                  <li>Created and managed an asynchronous update framework for effective data synchronization across database types.</li>
                  <li>Devised and implemented specialized APIs for data migration, ensuring seamless transition and system integrity.</li>
                  <li>Developed a robust error-handling mechanism for complex operational flows, with features for automatic data rollback and event reversion.</li>
                  <li>Achieved streamlined data processing, enhanced scalability, and reduced database management complexities.</li>
                </ul>
              </div>
              <div className={styles.projectCard}>
                <h3>Centralized Dealership Payment System</h3>
                <p> Sept. 2021 - Jan. 2022</p>
                <p>Tekion Corp.</p>
                <ul>
                  <li>Spearheaded the development of a centralized payment system for efficient management across parent and subsidiary dealerships.</li>
                  <li>Implemented Kafka for asynchronous payment processing, enhancing transaction efficiency.</li>
                  <li>Developed a tracking system for payment requests and integrated fail-safe mechanisms for event reliability.</li>
                  <li>Designed validation logic for user access rights, extending functionalities to vendors, customers, and OEMs.</li>
                  <li>Achieved significant reduction in manual payment processing and improved operational efficiency.</li>
                </ul>
              </div>
              <div className={styles.projectCard}>
                <h3>PBFT Consensus Algorithm Simulation</h3>
                <p> May. 2020 - May. 2020</p>
                <p>GitHub Repository: <a href="https://github.com/scarlet2131/PBFT">PBFT</a></p>
                <ul>
                  <li>Simulated the PBFT Consensus Algorithm over a road network with RSUs (Road Side Units) and OBUs (OnBoard Units).</li>
                  <li>Ensured the algorithm is 𝑛/3 fault-tolerant.</li>
                  <li>Implemented query handling in the form of [source, destination].</li>
                  <li>Executed multiple phases: leader selection, prepare message, validation, and final commit.</li>
                  <li>Achieved consensus and provided the most occurred correct message as output.</li>
                </ul>
              </div>
              <div className={styles.projectCard}>
                <h3>Meditrack</h3>
                <p> Nov. 2021 - Feb. 2022</p>
                <ul>
                  <li>Created an app for real-time disease tracking and medicine sales analysis, aiding in health management and epidemic prevention.</li>
                </ul>
              </div>
            
            </div>
          </section>

        <section id="skills" className={styles.skillsSection}>
          <h2 className={styles.skillsTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            {/* <!-- Programming Languages --> */}
            <div className={styles.skillCard}>
              <img src="/images/java.png" alt="Java" className={styles.skillIcon} />
              <h3>Java</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/cplus.jpg" alt="C++" className={styles.skillIcon} />
              <h3>C++</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/python.jpg" alt="Python" className={styles.skillIcon} />
              <h3>Python</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/js.jpg" alt="JavaScript" className={styles.skillIcon} />
              <h3>JavaScript</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/matlab.jpg" alt="Matlab" className={styles.skillIcon} />
              <h3>Matlab</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/php.jpg" alt="PHP" className={styles.skillIcon} />
              <h3>PHP</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/net.jpg" alt=".NET" className={styles.skillIcon} />
              <h3>.NET</h3>
            </div>

            {/* <!-- Back-end Development --> */}
            <div className={styles.skillCard}>
              <img src="/images/django.jpg" alt="Django" className={styles.skillIcon} />
              <h3>Django</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/laravel.jpg" alt="Laravel" className={styles.skillIcon} />
              <h3>Laravel</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/mysql.jpg" alt="MySQL" className={styles.skillIcon} />
              <h3>MySQL</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/mongo.jpg" alt="MongoDB" className={styles.skillIcon} />
              <h3>MongoDB</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/elastic.jpg" alt="ElasticSearch" className={styles.skillIcon} />
              <h3>ElasticSearch</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/spring.jpg" alt="Spring Boot" className={styles.skillIcon} />
              <h3>Spring Boot</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/fastapi.jpg" alt="FastAPI" className={styles.skillIcon} />
              <h3>FastAPI</h3>
            </div>

            {/* <!-- Front-end Development --> */}
            <div className={styles.skillCard}>
              <img src="/images/html.jpg" alt="HTML/CSS" className={styles.skillIcon} />
              <h3>HTML/CSS</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/boot.jpg" alt="Bootstrap" className={styles.skillIcon} />
              <h3>Bootstrap</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/react.jpg" alt="React" className={styles.skillIcon} />
              <h3>React</h3>
            </div>

            {/* <!-- Tools & Frameworks --> */}
            <div className={styles.skillCard}>
              <img src="/images/google.jpg" alt="Google APIs" className={styles.skillIcon} />
              <h3>Google APIs</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/android.jpg" alt="Android" className={styles.skillIcon} />
              <h3>Android</h3>
            </div>
            <div className={styles.skillCard}>
              <img src="/images/git.jpg" alt="Git" className={styles.skillIcon} />
              <h3>Git</h3>
            </div>
          </div>
        </section>

        <section id="accomplishments" className={styles.accomplishmentsSection}>
          <h2 className={styles.sectionTitle}>Accomplishments and Achievements</h2>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.position}>Extracurricular Activities</h3>
                <h4 className={styles.company}>President, GDSC Club (Lambton College, Toronto, Canada)</h4>
                <p>May. 2024 - Present</p>
                <p>
                  Organized and led events to promote technical skills and community engagement among students. Planned workshops and seminars on cutting-edge technologies and industry trends. Collaborated with industry professionals and alumni for networking opportunities and mentorship.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.position}>Extracurricular Activities</h3>
                <h4 className={styles.company}>Programming Club Coordinator (Indian Institute of Information Technology, Guwahati, India)</h4>
                <p>Sept. 2019 - Mar. 2020</p>
                <p>
                  Conducted technical sessions and coding contests to enhance programming skills. Guided students in software development and professional networking.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.position}>Extracurricular Activities</h3>
                <h4 className={styles.company}>Head Graphic Designer (Indian Institute of Information Technology, Guwahati, India)</h4>
                <p>Jan. 2018 - Apr. 2019</p>
                <p>
                  Managed and executed graphic design for the college newspaper, ensuring visual appeal and content layout consistency.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3 className={styles.position}>Honors & Awards</h3>
                <p><strong>2021:</strong> 20th Place, She Codes Indeed - All India Rank (Online)</p>
                <p><strong>2020:</strong> 2nd Place Among 150 Teams, Techno Flux Hackathon (Guwahati, India)</p>
                <p><strong>2020:</strong> Global Rank 1225, Google Kick Start, Round F (Online)</p>
                <p><strong>2020:</strong> Global Rank 1993, Google Kick Start, Round C (Online)</p>
                <p><strong>2020:</strong> Qualification Round, Google Code Jam (Online)</p>
                <p><strong>2018:</strong> Bronze Medal, HackerRank World Code Sprint (Online)</p>
                <p><strong>2018:</strong> Pre-Elimination, CodeChef SnackDown (Online)</p>
                <p><strong>2018, 2019:</strong> Qualified Round 1, Facebook Hackercup (Online)</p>
                <p><strong>2013:</strong> National Finalist, Iken Scientifica (New Delhi, India)</p>
              </div>
            </div>
          </div>
        </section>


        {/* <section id="skills" className={styles.skillsSection}>
          <h2 className={styles.skillsTitle}>Skills</h2>

          <button onClick={() => setShowProgrammingLanguages(!showProgrammingLanguages)} className={styles.skillButton}>
            Programming Languages
          </button>
          {showProgrammingLanguages && ( <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <i className="devicon-java-plain"></i>
              <div className={styles.skillInfo}>
                <h3>Java</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-cplusplus-plain"></i>
              <div className={styles.skillInfo}>
                <h3>C++</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-python-plain"></i>
              <div className={styles.skillInfo}>
                <h3>Python</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-javascript-plain"></i>
              <div className={styles.skillInfo}>
                <h3>JavaScript</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-matlab-plain"></i>
              <div className={styles.skillInfo}>
                <h3>Matlab</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '65%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-latex-original"></i>
              <div className={styles.skillInfo}>
                <h3>LaTeX</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-php-plain"></i>
              <div className={styles.skillInfo}>
                <h3>PHP</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-dotnetcore-plain"></i>
              <div className={styles.skillInfo}>
                <h3>.NET</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
          )}


          <button onClick={() => setShowBackendDevelopment(!showBackendDevelopment)} className={styles.skillButton}>
          Back-end Development
          </button>
          {showBackendDevelopment && ( <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <i className="devicon-django-plain"></i>
              <div className={styles.skillInfo}>
                <h3>Django</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-php-plain"></i>
              <div className={styles.skillInfo}>
                <h3>PHP</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-laravel-plain"></i>
              <div className={styles.skillInfo}>
                <h3>Laravel</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-mysql-plain"></i>
              <div className={styles.skillInfo}>
                <h3>MySQL</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-mongodb-plain"></i>
              <div className={styles.skillInfo}>
                <h3>MongoDB</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-elasticsearch-plain"></i>
              <div className={styles.skillInfo}>
                <h3>ElasticSearch</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-spring-plain"></i>
              <div className={styles.skillInfo}>
                <h3>Spring Boot</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-fastapi-plain"></i>
              <div className={styles.skillInfo}>
                <h3>FastAPI</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          )}


          <button onClick={() => setShowFrontendDevelopment(!showFrontendDevelopment)} className={styles.skillButton}>
            Front-end Development
          </button>
          {showFrontendDevelopment && ( <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <i className="devicon-html5-plain"></i>
              <div className={styles.skillInfo}>
                <h3>HTML/CSS</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-javascript-plain"></i>
              <div className={styles.skillInfo}>
                <h3>JavaScript</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-bootstrap-plain"></i>
              <div className={styles.skillInfo}>
                <h3>Bootstrap</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-react-plain"></i>
              <div className={styles.skillInfo}>
                <h3>React</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
          )}

          <button onClick={() => setShowToolsFrameworks(!showToolsFrameworks)} className={styles.skillButton}>
            Tools and Frameworks
          </button>
          {showToolsFrameworks && ( <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <i className="devicon-google-plain"></i>
              <div className={styles.skillInfo}>
                <h3>Google APIs</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-android-plain"></i>
              <div className={styles.skillInfo}>
                <h3>Android</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
            <div className={styles.skillCard}>
              <i className="devicon-git-plain"></i>
              <div className={styles.skillInfo}>
                <h3>Git</h3>
                <div className={styles.skillBarContainer}>
                  <div className={styles.skillBar} style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          )}
        </section> */}

        <section id="contact" className={styles.contactSection}>
          <h2 className={styles.skillsTitle} >Contact Us</h2>
          <div className={styles.contactFormContainer}>
            <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </section>


        <footer className={styles.footer}>
          <p>&copy; 2024 Monisha Ranjan. All rights reserved.</p>
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com/in/monisharanjan" target="_blank" rel="noopener noreferrer">
              <i className="devicon-github-plain"></i>
            </a>
            <a href="https://github.com/scarlet2131" target="_blank" rel="noopener noreferrer">
              <i className="devicon-linkedin-plain"></i>
            </a>
          </div>
        </footer>


      </main>
    </div>
  );
};

export default Home;
