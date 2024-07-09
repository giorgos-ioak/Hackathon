import styles from '../../cssModules/Button.module.css';

function Button({children}) {
  return (
    <button className={styles.btn}>
      {children}
    </button>
  )
}

export default Button