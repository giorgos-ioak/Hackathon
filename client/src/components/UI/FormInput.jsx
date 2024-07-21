import styles from '../../cssModules/Form.module.css';


function FormInput({ id, label, name }) {
  return (
    <div className={styles.select_container}>
      {label && <label className={styles.label}>{label}</label>}
      <input type='text'  id={id} name={name} required />
    </div>
  )
}

export default FormInput
































// data = {
//   frontendFramwork :  'xxx',
//   frontendFramwork : 'sad',
// }