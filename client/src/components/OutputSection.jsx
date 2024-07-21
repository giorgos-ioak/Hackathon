import Output from "./UI/Output.jsx";
import MetaLogo from './UI/MetaLogo.jsx';

import styles from '../cssModules/Output.module.css';

function OutputSection() {
  return (
    <section className={styles.section}>
      <h3 className={styles.h3}>Your Output</h3>
      <Output />
      <div className={styles.metaContainer}>
        <p className={styles.p}>Powered By:</p>
        <MetaLogo />
      </div>
    </section>
    
  )
}

export default OutputSection