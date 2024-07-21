import styles from '../../cssModules/Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loading;