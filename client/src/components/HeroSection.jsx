import styles from '../cssModules/HeroSection.module.css';
import Divider from './UI/Divider.jsx';

function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          Generate <span className={styles.span1}>your</span> <br/> Ideas.
        </h1>
        <p className={styles.p}>
          Submit your Technologies & Generate your next project Idea instantly.
        </p>
      </div>
      <Divider />
    </section>

  )
}

export default HeroSection;