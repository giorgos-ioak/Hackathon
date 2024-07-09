import styles from '../../cssModules/Step.module.css';
import LightningIcon from './LightningIcon.jsx';

function Step({ number, body, right }) {
  let classes = styles.container;

  if (right) {
    classes = styles.container_right;
  }

  return (
      <div className={classes}>
        <div className={styles.step_container}>
          <h2>Step {number}</h2>
          <LightningIcon />
        </div>
        <p className={styles.p}>{body}</p>
      </div>
  )
}

export default Step;