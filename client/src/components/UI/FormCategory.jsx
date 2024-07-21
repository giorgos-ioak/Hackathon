import styles from '../../cssModules/Form.module.css';

function FormCategory({ title }) {
  return (
    <div className={styles.formCategory_container}>
      <h4 className={styles.h4}>{title}</h4>
    </div>
  )
}

export default FormCategory