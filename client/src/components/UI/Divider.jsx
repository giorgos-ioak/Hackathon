import styles from '../../cssModules/Divider.module.css';

function Divider({ black }) {
  let classes = styles.divider;

  if(black) {
    classes = styles.divider_black;
  }

  return (
    <div className={classes}></div>
  )
}

export default Divider