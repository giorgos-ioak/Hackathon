import FormComponent from "./UI/FormComponent.jsx";
import styles from '../cssModules/Form.module.css';

function FormSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FormComponent />
      </div>
    </section>

  )
}

export default FormSection;