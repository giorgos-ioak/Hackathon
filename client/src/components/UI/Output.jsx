import styles from '../../cssModules/Output.module.css';

import { useSelector } from 'react-redux';

function Output() {
  const output = useSelector((state) => state.output.value);
  const finalOutput  = output.join('');

  return (
    <div className={styles.container}>
      <textarea className={styles.textarea} value={finalOutput} id='outputText' readOnly/>
    </div>
  )
}

export default Output