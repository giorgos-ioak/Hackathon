import styles from '../cssModules/AboutUs.module.css';

import Navbar from './Navbar.jsx';

function AboutUs() {
  return (
    <>
    <Navbar />
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.h1}>About Us</h1>
        <p className={styles.p}>
          Our app leverages the powerful Llama 3 8b model through Replicate's API to generate innovative project ideas for developers. Simply input your preferred frontend and backend technologies, and our app will provide you with creative and tailored suggestions to kickstart your next development project. Let us help you transform your tech stack into brilliant ideas!
        </p>
      </div>
    </section>
    </>
    
  )
}

export default AboutUs