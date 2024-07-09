import styles from '../cssModules/Step.module.css';
import Step from './UI/Step.jsx';

function StepSection() {
  return (
    <section className={styles.section}>
      <div className={styles.main_container}>
        <Step 
          number = '1' 
          body = 'Fill in the Technologies you want to use.'
        />
        <Step 
          number = '2' 
          body = 'Submit the Form.'
          right
        />
        <Step 
          number = '3' 
          body = 'Your project is Ready to view.'
        />
      </div>
    </section>
  )
}

export default StepSection