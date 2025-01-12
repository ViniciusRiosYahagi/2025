import styles from "../styles/components-styles/EmailSection.module.scss"

function EmailSection() {
  return (
    <section className={`content ${styles.section}`}>
      <div className={styles.div01}>
        <h1 className={styles.title}>Exclusive Bonus: Sign up with your email now and get 10% off your first month of any chosen plan!</h1>
          <div className={styles.div02}>
            <input className={styles.input} type="email" placeholder="Email" />
            <a className={styles.button} href="#">Send</a>
          </div>
      </div>
    </section>
  )
}

export default EmailSection