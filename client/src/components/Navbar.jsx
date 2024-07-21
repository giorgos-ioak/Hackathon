import Button from './UI/Button.jsx';
import styles from '../cssModules/Navbar.module.css';
import Logo from './UI/Logo.jsx';

import { Link } from 'react-router-dom';

function Navbar({ aboutUs }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Link to="/">
          <Logo />
        </Link>
        <div className={styles.navigation_container}>
          {aboutUs && 
            <Link to='/about'>
              <Button>About Us</Button>
            </Link>
          }
        </div>
      </div>
    </section>
  )
}

export default Navbar