import './Info.css'
import styles from './Info.module.css'

const Info = () => {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <button className={styles.myOtherButton}>Click me</button>
    </div>
  )
}

export default Info