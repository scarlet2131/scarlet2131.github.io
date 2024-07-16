(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6578)}])},7688:function(e,s,i){"use strict";var n=i(5893),a=i(1664),l=i.n(a);i(7294);var t=i(106),r=i.n(t);s.Z=()=>(0,n.jsx)("nav",{className:r().navBar,children:(0,n.jsxs)("ul",{className:r().navList,children:[(0,n.jsx)("li",{className:r().navItem,children:(0,n.jsx)(l(),{href:"#home",children:"Home"})}),(0,n.jsx)("li",{className:r().navItem,children:(0,n.jsx)(l(),{href:"#home",children:"About"})}),(0,n.jsx)("li",{className:r().navItem,children:(0,n.jsx)(l(),{href:"#education",children:"Education"})}),(0,n.jsx)("li",{className:r().navItem,children:(0,n.jsx)(l(),{href:"#experience",children:"Experience"})}),(0,n.jsx)("li",{className:r().navItem,children:(0,n.jsx)(l(),{href:"#coding-profiles",children:"Coding Profiles"})}),(0,n.jsx)("li",{className:r().navItem,children:(0,n.jsx)(l(),{href:"#projects",children:"Projects"})}),(0,n.jsx)("li",{className:r().navItem,children:(0,n.jsx)(l(),{href:"#skills",children:"Skills"})}),(0,n.jsx)("li",{className:r().navItem,children:(0,n.jsx)(l(),{href:"#contact",children:"Contact"})})]})})},6578:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return g}});var n=i(5893);let a={_origin:"https://api.emailjs.com"},l=(e,s,i)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!i)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class t{constructor(e){this.status=e.status,this.text=e.responseText}}let r=(e,s,i={})=>new Promise((n,l)=>{let r=new XMLHttpRequest;r.addEventListener("load",({target:e})=>{let s=new t(e);200===s.status||"OK"===s.text?n(s):l(s)}),r.addEventListener("error",({target:e})=>{l(new t(e))}),r.open("POST",a._origin+e,!0),Object.keys(i).forEach(e=>{r.setRequestHeader(e,i[e])}),r.send(s)}),c=e=>{let s;if(!(s="string"==typeof e?document.querySelector(e):e)||"FORM"!==s.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return s};var o=(e,s,i,n)=>{let t=n||a._userID,o=c(i);l(t,e,s);let d=new FormData(o);return d.append("lib_version","3.2.0"),d.append("service_id",e),d.append("template_id",s),d.append("user_id",t),r("/api/v1.0/email/send-form",d)},d=i(9008),m=i.n(d),h=i(7294),j=i(7688),p=i(3367),x=i.n(p),g=()=>{let e=(0,h.useRef)();return(0,n.jsxs)("div",{className:x().container,children:[(0,n.jsxs)(m(),{children:[(0,n.jsx)("title",{children:"Monisha Ranjan's Portfolio"}),(0,n.jsx)("meta",{name:"description",content:"Welcome to my portfolio"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap",rel:"stylesheet"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/devicon/2.14.0/devicon.min.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"})]}),(0,n.jsx)(j.Z,{}),(0,n.jsxs)("main",{className:x().main,children:[(0,n.jsx)("section",{id:"home",className:x().homeSection,children:(0,n.jsxs)("div",{className:x().profileContainer,children:[(0,n.jsxs)("div",{className:x().imageContainer,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/profile.png",alt:"Monisha Ranjan",className:x().image}),(0,n.jsxs)("div",{className:x().contactInfo,children:[(0,n.jsxs)("p",{children:["Email: ",(0,n.jsx)("a",{href:"mailto:ranjan.monisha233@gmail.com",children:"ranjan.monisha233@gmail.com"})]}),(0,n.jsxs)("p",{children:["LinkedIn: ",(0,n.jsx)("a",{href:"https://linkedin.com/in/monisharanjan",target:"_blank",children:(0,n.jsx)("i",{className:"devicon-linkedin-plain"})})]}),(0,n.jsxs)("p",{children:["GitHub: ",(0,n.jsx)("a",{href:"https://github.com/scarlet2131",target:"_blank",children:(0,n.jsx)("i",{className:"devicon-github-plain"})})]})]})]}),(0,n.jsxs)("div",{className:x().intro,children:[(0,n.jsx)("h1",{className:x().title,children:"I'm Monisha Ranjan"}),(0,n.jsx)("p",{className:x().description,children:"Software Engineer specializing in full-stack development and scalable digital solutions. With a strong foundation in backend technologies such as Spring Boot, FastAPI, and MongoDB, combined with front-end expertise in React and Bootstrap, I create impactful and user-centric applications. Passionate about creating efficient and scalable websites, focusing on leveraging modern web technologies to enhance performance and user experience."}),(0,n.jsx)("a",{href:"https://drive.google.com/file/d/1H5Cue3FkD0P0su9xKhucd5z6auYedR7E/view?usp=sharing",target:"_blank",className:x().resumeButton,children:"Resume"})]})]})}),(0,n.jsxs)("section",{id:"education",className:x().educationSection,children:[(0,n.jsx)("h2",{className:x().sectionTitle,children:"Education"}),(0,n.jsxs)("div",{className:x().educationGrid,children:[(0,n.jsxs)("div",{className:x().educationCard,children:[(0,n.jsx)("img",{src:"/images/iiitg.jpg",alt:"IIIT Guwahati",className:x().educationIcon}),(0,n.jsxs)("div",{className:x().educationInfo,children:[(0,n.jsx)("h3",{children:"Indian Institute Of Information Technology, Guwahati, India"}),(0,n.jsx)("h5",{children:"B.Tech in Computer Science - 7.75 CGPA"}),(0,n.jsx)("p",{children:"Jul. 2017 - May 2021"})]})]}),(0,n.jsxs)("div",{className:x().educationCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/lambton_college.jpg",alt:"Lambton College",className:x().educationIcon}),(0,n.jsxs)("div",{className:x().educationInfo,children:[(0,n.jsx)("h3",{children:"Lambton College, Toronto, Canada"}),(0,n.jsx)("h5",{children:"Post Grad. Certificate in Full Stack Software Development - 3.608 GPA"}),(0,n.jsx)("p",{children:"Sept. 2023 - Apr. 2025"})]})]})]})]}),(0,n.jsxs)("section",{id:"experience",className:x().experienceSection,children:[(0,n.jsx)("h2",{className:x().sectionTitle,children:"Experience"}),(0,n.jsxs)("div",{className:x().timeline,children:[(0,n.jsx)("div",{className:x().timelineItem,children:(0,n.jsxs)("div",{className:x().timelineContent,children:[(0,n.jsx)("h3",{className:x().position,children:"Software Engineer"}),(0,n.jsx)("h4",{className:x().company,children:"Tekion Corp., Bengaluru, India"}),(0,n.jsx)("p",{children:"Oct. 2022 - Jul. 2023"}),(0,n.jsx)("p",{children:"Spearheaded the development of core product features, managing the process from initial design to final delivery. Streamlined product requirements into engineering tasks, facilitating project scoping and task delegation."})]})}),(0,n.jsx)("div",{className:x().timelineItem,children:(0,n.jsxs)("div",{className:x().timelineContent,children:[(0,n.jsx)("h3",{className:x().position,children:"Associate Software Engineer"}),(0,n.jsx)("h4",{className:x().company,children:"Tekion Corp., Bengaluru, India"}),(0,n.jsx)("p",{children:"Jul. 2021 - Sept. 2022"}),(0,n.jsx)("p",{children:"Collaborated closely with the Core Accounting Team for the dealership management system, developing numerous backend features currently utilized by live dealers. Developed and sustained advanced accounting reports, enabling near real-time data analysis while ensuring scalability and consistency in reporting mechanisms. Played a pivotal role in the Central Accounting Team by implementing features using Kafka for asynchronous event handling with a focus on data reliability. Successfully optimized complex database queries, achieving a 30% reduction in query execution time, thereby significantly lowering data retrieval overheads for large datasets."})]})}),(0,n.jsx)("div",{className:x().timelineItem,children:(0,n.jsxs)("div",{className:x().timelineContent,children:[(0,n.jsx)("h3",{className:x().position,children:"Software Engineer Intern"}),(0,n.jsx)("h4",{className:x().company,children:"Tekion Corp., Bengaluru, India"}),(0,n.jsx)("p",{children:"Jan. 2021 - Jun. 2021"}),(0,n.jsx)("p",{children:"As a part of the Backend team, developed an employee management system enhancing leave application processes and providing role-specific management features."})]})}),(0,n.jsx)("div",{className:x().timelineItem,children:(0,n.jsxs)("div",{className:x().timelineContent,children:[(0,n.jsx)("h3",{className:x().position,children:"Software Development Intern"}),(0,n.jsx)("h4",{className:x().company,children:"Smart Doctors, Remote"}),(0,n.jsx)("p",{children:"May 2020 - Jul. 2020"}),(0,n.jsx)("p",{children:"Developed a video conferencing feature utilizing the Twilio API. Transitioned the website from PHP to the Laravel MVC framework, enhancing functionality and user experience."})]})}),(0,n.jsx)("div",{className:x().timelineItem,children:(0,n.jsxs)("div",{className:x().timelineContent,children:[(0,n.jsx)("h3",{className:x().position,children:"Web Development Intern"}),(0,n.jsx)("h4",{className:x().company,children:"CertCube, New Delhi, India"}),(0,n.jsx)("p",{children:"Jun. 2019 - Jul. 2019"}),(0,n.jsx)("p",{children:"Designed and developed an interactive training portal, improving learning and engagement. Led the design and development of the company’s official website, enhancing online presence and accessibility."})]})})]})]}),(0,n.jsxs)("section",{id:"coding-profiles",className:x().section,children:[(0,n.jsx)("h2",{className:x().sectionTitle,children:"Coding Profiles"}),(0,n.jsxs)("div",{className:x().codingGrid,children:[(0,n.jsxs)("div",{className:x().codingProfileCard,children:[(0,n.jsxs)("a",{href:"https://leetcode.com/mr_233/",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/leetcode.jpg",alt:"LeetCode",className:x().codingProfileImage}),(0,n.jsx)("p",{children:"LeetCode"})]}),(0,n.jsx)("p",{children:"Max. Rating: 1609"})]}),(0,n.jsxs)("div",{className:x().codingProfileCard,children:[(0,n.jsxs)("a",{href:"https://www.codechef.com/users/mr_2131",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/codechef.jpg",alt:"CodeChef",className:x().codingProfileImage}),(0,n.jsx)("p",{children:"CodeChef"})]}),(0,n.jsx)("p",{children:"Max. Rating: 1833"})]}),(0,n.jsxs)("div",{className:x().codingProfileCard,children:[(0,n.jsxs)("a",{href:"https://codeforces.com/profile/mr_2131",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/codeforces.jpg",alt:"CodeForces",className:x().codingProfileImage}),(0,n.jsx)("p",{children:"CodeForces"})]}),(0,n.jsx)("p",{children:"Max. Rating: 1495"})]}),(0,n.jsxs)("div",{className:x().codingProfileCard,children:[(0,n.jsxs)("a",{href:"https://www.hackerearth.com/@monisha161",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/hackerearth.jpg",alt:"HackerEarth",className:x().codingProfileImage}),(0,n.jsx)("p",{children:"HackerEarth"})]}),(0,n.jsx)("p",{children:"Max. Rating: 1514"})]}),(0,n.jsxs)("div",{className:x().codingProfileCard,children:[(0,n.jsxs)("a",{href:"https://www.hackerrank.com/ranjan_monisha21",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/hackerrank.jpg",alt:"HackerRank",className:x().codingProfileImage}),(0,n.jsx)("p",{children:"HackerRank"})]}),(0,n.jsx)("p",{children:"Max. Rating: 1729"})]})]})]}),(0,n.jsxs)("section",{id:"projects",className:x().projectsSection,children:[(0,n.jsx)("h2",{className:x().sectionTitle,children:"Projects"}),(0,n.jsxs)("div",{className:x().projectsGrid,children:[(0,n.jsxs)("div",{className:x().projectCard,children:[(0,n.jsx)("h3",{children:"RAG Chatbot Application"}),(0,n.jsx)("p",{children:" May. 2024 - May. 2024"}),(0,n.jsxs)("p",{children:["GitHub Repository: ",(0,n.jsx)("a",{href:"https://github.com/scarlet2131/RAG-ChatBot",children:"RAG-ChatBot"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Built a chatbot using the FARM stack and RAG model for enhanced responses."}),(0,n.jsx)("li",{children:"Integrated MongoDB Atlas for document storage and retrieval."}),(0,n.jsx)("li",{children:"Implemented FastAPI for the backend API."}),(0,n.jsx)("li",{children:"Developed a responsive UI with React."}),(0,n.jsx)("li",{children:"Configured RAG for accurate, context-aware responses."}),(0,n.jsx)("li",{children:"Deployed on a cloud platform for scalability."})]})]}),(0,n.jsxs)("div",{className:x().projectCard,children:[(0,n.jsx)("h3",{children:"Moodify - Music Recommendation System"}),(0,n.jsx)("p",{children:" Feb. 2024 - Feb. 2024"}),(0,n.jsxs)("p",{children:["GitHub Repository: ",(0,n.jsx)("a",{href:"https://github.com/scarlet2131/Moodify-SoulSonic",children:"Moodify-SoulSonic"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Developed a dynamic music recommendation system, leveraging Spotify API and OpenAI’s ChatGPT to suggest music based on user mood."}),(0,n.jsx)("li",{children:"Implemented user authentication, mood analysis from textual input, and secure password management using advanced cryptographic methods."}),(0,n.jsx)("li",{children:"Technologies used: Python, MongoDB, Spotify API, OpenAI ChatGPT, and FastApi for backend development."})]})]}),(0,n.jsxs)("div",{className:x().projectCard,children:[(0,n.jsx)("h3",{children:"Integrated Dealership Database Upgrade"}),(0,n.jsx)("p",{children:" Mar. 2023 - Apr. 2023"}),(0,n.jsx)("p",{children:"Tekion Corp."}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Orchestrated the integration of multiple dealership databases into a single, efficient system, catering to both MySQL and MongoDB."}),(0,n.jsx)("li",{children:"Created and managed an asynchronous update framework for effective data synchronization across database types."}),(0,n.jsx)("li",{children:"Devised and implemented specialized APIs for data migration, ensuring seamless transition and system integrity."}),(0,n.jsx)("li",{children:"Developed a robust error-handling mechanism for complex operational flows, with features for automatic data rollback and event reversion."}),(0,n.jsx)("li",{children:"Achieved streamlined data processing, enhanced scalability, and reduced database management complexities."})]})]}),(0,n.jsxs)("div",{className:x().projectCard,children:[(0,n.jsx)("h3",{children:"Centralized Dealership Payment System"}),(0,n.jsx)("p",{children:" Sept. 2021 - Jan. 2022"}),(0,n.jsx)("p",{children:"Tekion Corp."}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Spearheaded the development of a centralized payment system for efficient management across parent and subsidiary dealerships."}),(0,n.jsx)("li",{children:"Implemented Kafka for asynchronous payment processing, enhancing transaction efficiency."}),(0,n.jsx)("li",{children:"Developed a tracking system for payment requests and integrated fail-safe mechanisms for event reliability."}),(0,n.jsx)("li",{children:"Designed validation logic for user access rights, extending functionalities to vendors, customers, and OEMs."}),(0,n.jsx)("li",{children:"Achieved significant reduction in manual payment processing and improved operational efficiency."})]})]}),(0,n.jsxs)("div",{className:x().projectCard,children:[(0,n.jsx)("h3",{children:"PBFT Consensus Algorithm Simulation"}),(0,n.jsx)("p",{children:" May. 2020 - May. 2020"}),(0,n.jsxs)("p",{children:["GitHub Repository: ",(0,n.jsx)("a",{href:"https://github.com/scarlet2131/PBFT",children:"PBFT"})]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Simulated the PBFT Consensus Algorithm over a road network with RSUs (Road Side Units) and OBUs (OnBoard Units)."}),(0,n.jsx)("li",{children:"Ensured the algorithm is \uD835\uDC5B/3 fault-tolerant."}),(0,n.jsx)("li",{children:"Implemented query handling in the form of [source, destination]."}),(0,n.jsx)("li",{children:"Executed multiple phases: leader selection, prepare message, validation, and final commit."}),(0,n.jsx)("li",{children:"Achieved consensus and provided the most occurred correct message as output."})]})]}),(0,n.jsxs)("div",{className:x().projectCard,children:[(0,n.jsx)("h3",{children:"Meditrack"}),(0,n.jsx)("p",{children:" Nov. 2021 - Feb. 2022"}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"Created an app for real-time disease tracking and medicine sales analysis, aiding in health management and epidemic prevention."})})]})]})]}),(0,n.jsxs)("section",{id:"skills",className:x().skillsSection,children:[(0,n.jsx)("h2",{className:x().skillsTitle,children:"Skills"}),(0,n.jsxs)("div",{className:x().skillsGrid,children:[(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/java.png",alt:"Java",className:x().skillIcon}),(0,n.jsx)("h3",{children:"Java"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/cplus.jpg",alt:"C++",className:x().skillIcon}),(0,n.jsx)("h3",{children:"C++"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/python.jpg",alt:"Python",className:x().skillIcon}),(0,n.jsx)("h3",{children:"Python"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/js.jpg",alt:"JavaScript",className:x().skillIcon}),(0,n.jsx)("h3",{children:"JavaScript"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/matlab.jpg",alt:"Matlab",className:x().skillIcon}),(0,n.jsx)("h3",{children:"Matlab"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/php.jpg",alt:"PHP",className:x().skillIcon}),(0,n.jsx)("h3",{children:"PHP"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/net.jpg",alt:".NET",className:x().skillIcon}),(0,n.jsx)("h3",{children:".NET"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/django.jpg",alt:"Django",className:x().skillIcon}),(0,n.jsx)("h3",{children:"Django"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/laravel.jpg",alt:"Laravel",className:x().skillIcon}),(0,n.jsx)("h3",{children:"Laravel"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/mysql.jpg",alt:"MySQL",className:x().skillIcon}),(0,n.jsx)("h3",{children:"MySQL"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/mongo.jpg",alt:"MongoDB",className:x().skillIcon}),(0,n.jsx)("h3",{children:"MongoDB"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/elastic.jpg",alt:"ElasticSearch",className:x().skillIcon}),(0,n.jsx)("h3",{children:"ElasticSearch"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/spring.jpg",alt:"Spring Boot",className:x().skillIcon}),(0,n.jsx)("h3",{children:"Spring Boot"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/fastapi.jpg",alt:"FastAPI",className:x().skillIcon}),(0,n.jsx)("h3",{children:"FastAPI"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/html.jpg",alt:"HTML/CSS",className:x().skillIcon}),(0,n.jsx)("h3",{children:"HTML/CSS"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/boot.jpg",alt:"Bootstrap",className:x().skillIcon}),(0,n.jsx)("h3",{children:"Bootstrap"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/react.jpg",alt:"React",className:x().skillIcon}),(0,n.jsx)("h3",{children:"React"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/google.jpg",alt:"Google APIs",className:x().skillIcon}),(0,n.jsx)("h3",{children:"Google APIs"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/android.jpg",alt:"Android",className:x().skillIcon}),(0,n.jsx)("h3",{children:"Android"})]}),(0,n.jsxs)("div",{className:x().skillCard,children:[(0,n.jsx)("img",{src:"/scarlet2131.github.io/images/git.jpg",alt:"Git",className:x().skillIcon}),(0,n.jsx)("h3",{children:"Git"})]})]})]}),(0,n.jsxs)("section",{id:"accomplishments",className:x().accomplishmentsSection,children:[(0,n.jsx)("h2",{className:x().sectionTitle,children:"Accomplishments and Achievements"}),(0,n.jsxs)("div",{className:x().timeline,children:[(0,n.jsx)("div",{className:x().timelineItem,children:(0,n.jsxs)("div",{className:x().timelineContent,children:[(0,n.jsx)("h3",{className:x().position,children:"Extracurricular Activities"}),(0,n.jsx)("h4",{className:x().company,children:"President, GDSC Club (Lambton College, Toronto, Canada)"}),(0,n.jsx)("p",{children:"May. 2024 - Present"}),(0,n.jsx)("p",{children:"Organized and led events to promote technical skills and community engagement among students. Planned workshops and seminars on cutting-edge technologies and industry trends. Collaborated with industry professionals and alumni for networking opportunities and mentorship."})]})}),(0,n.jsx)("div",{className:x().timelineItem,children:(0,n.jsxs)("div",{className:x().timelineContent,children:[(0,n.jsx)("h3",{className:x().position,children:"Extracurricular Activities"}),(0,n.jsx)("h4",{className:x().company,children:"Programming Club Coordinator (Indian Institute of Information Technology, Guwahati, India)"}),(0,n.jsx)("p",{children:"Sept. 2019 - Mar. 2020"}),(0,n.jsx)("p",{children:"Conducted technical sessions and coding contests to enhance programming skills. Guided students in software development and professional networking."})]})}),(0,n.jsx)("div",{className:x().timelineItem,children:(0,n.jsxs)("div",{className:x().timelineContent,children:[(0,n.jsx)("h3",{className:x().position,children:"Extracurricular Activities"}),(0,n.jsx)("h4",{className:x().company,children:"Head Graphic Designer (Indian Institute of Information Technology, Guwahati, India)"}),(0,n.jsx)("p",{children:"Jan. 2018 - Apr. 2019"}),(0,n.jsx)("p",{children:"Managed and executed graphic design for the college newspaper, ensuring visual appeal and content layout consistency."})]})}),(0,n.jsx)("div",{className:x().timelineItem,children:(0,n.jsxs)("div",{className:x().timelineContent,children:[(0,n.jsx)("h3",{className:x().position,children:"Honors & Awards"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"2021:"})," 20th Place, She Codes Indeed - All India Rank (Online)"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"2020:"})," 2nd Place Among 150 Teams, Techno Flux Hackathon (Guwahati, India)"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"2020:"})," Global Rank 1225, Google Kick Start, Round F (Online)"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"2020:"})," Global Rank 1993, Google Kick Start, Round C (Online)"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"2020:"})," Qualification Round, Google Code Jam (Online)"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"2018:"})," Bronze Medal, HackerRank World Code Sprint (Online)"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"2018:"})," Pre-Elimination, CodeChef SnackDown (Online)"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"2018, 2019:"})," Qualified Round 1, Facebook Hackercup (Online)"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"2013:"})," National Finalist, Iken Scientifica (New Delhi, India)"]})]})})]})]}),(0,n.jsxs)("section",{id:"contact",className:x().contactSection,children:[(0,n.jsx)("h2",{className:x().skillsTitle,children:"Contact Us"}),(0,n.jsx)("div",{className:x().contactFormContainer,children:(0,n.jsxs)("form",{ref:e,onSubmit:s=>{s.preventDefault(),o("service_4eb2uqh","template_nymmlf9",e.current,"r1qt7qsx8zuQFrJev").then(e=>{console.log(e.text),alert("Message sent successfully!")},e=>{console.log(e.text),alert("An error occurred, please try again.")})},className:x().contactForm,children:[(0,n.jsxs)("div",{className:x().formGroup,children:[(0,n.jsx)("label",{htmlFor:"name",children:"Name"}),(0,n.jsx)("input",{type:"text",id:"name",name:"name",required:!0})]}),(0,n.jsxs)("div",{className:x().formGroup,children:[(0,n.jsx)("label",{htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{type:"email",id:"email",name:"email",required:!0})]}),(0,n.jsxs)("div",{className:x().formGroup,children:[(0,n.jsx)("label",{htmlFor:"message",children:"Message"}),(0,n.jsx)("textarea",{id:"message",name:"message",required:!0})]}),(0,n.jsx)("button",{type:"submit",className:x().submitButton,children:"Send Message"})]})})]}),(0,n.jsxs)("footer",{className:x().footer,children:[(0,n.jsx)("p",{children:"\xa9 2024 Monisha Ranjan. All rights reserved."}),(0,n.jsxs)("div",{className:x().socialIcons,children:[(0,n.jsx)("a",{href:"https://linkedin.com/in/monisharanjan",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("i",{className:"devicon-github-plain"})}),(0,n.jsx)("a",{href:"https://github.com/scarlet2131",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)("i",{className:"devicon-linkedin-plain"})})]})]})]})]})}},3367:function(e){e.exports={container:"Home_container__9OuOz",section:"Home_section__8mMQM",sectionTitle:"Home_sectionTitle__kIhux",main:"Home_main__2uIek",homeSection:"Home_homeSection__taeJZ",profileContainer:"Home_profileContainer__M1KOx",sectionContent:"Home_sectionContent__vX5Tl",intro:"Home_intro__YsXuU",title:"Home_title__YEn0u",description:"Home_description__zHUB6",button:"Home_button__Mzpzz",imageContainer:"Home_imageContainer__PFGaB",image:"Home_image__AAS4_",resumeButton:"Home_resumeButton__ZST1J",contactInfo:"Home_contactInfo__0aRrQ",skillsSection:"Home_skillsSection__UotGt",skillsTitle:"Home_skillsTitle__3eT2i",skillsGrid:"Home_skillsGrid__4CNTz",skillCard:"Home_skillCard__BPE_w",codingGrid:"Home_codingGrid__a5nib",codingProfileCard:"Home_codingProfileCard__PErtF",codingProfileImage:"Home_codingProfileImage__bBXMN",educationSection:"Home_educationSection__hyIxn",educationGrid:"Home_educationGrid__5az7f",educationCard:"Home_educationCard__B91Sd",educationInfo:"Home_educationInfo__LKz7d",educationIcon:"Home_educationIcon__yc1pq",experienceSection:"Home_experienceSection__aeAiY",timeline:"Home_timeline__QeuvF",timelineItem:"Home_timelineItem__BC0S3",timelineContent:"Home_timelineContent__41krK",projectsSection:"Home_projectsSection__4HQzp",projectsGrid:"Home_projectsGrid__pR3kF",projectCard:"Home_projectCard__FZTOe",achievementsSection:"Home_achievementsSection__bw4e_",contactSection:"Home_contactSection__HSPeJ",contactFormContainer:"Home_contactFormContainer__nB29E",contactForm:"Home_contactForm__G76mI",formGroup:"Home_formGroup__4d6Bt",submitButton:"Home_submitButton__dje68",footer:"Home_footer__wJNRn",socialLinks:"Home_socialLinks__gym1b"}},106:function(e){e.exports={navBar:"NavBar_navBar__kpa4N",navList:"NavBar_navList___VrXq",navItem:"NavBar_navItem__lhBa6"}}},function(e){e.O(0,[996,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);