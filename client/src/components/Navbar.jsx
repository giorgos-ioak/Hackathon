import Button from './UI/Button.jsx';
import styles from '../cssModules/Navbar.module.css';
import Logo from './UI/Logo.jsx';

function Navbar() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.navigation_container}>
          <Button>Instructions</Button>
          <Button>About Us</Button>
        </div>
      </div>
    </section>
  )
}

export default Navbar