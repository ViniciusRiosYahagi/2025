import styles from "../styles/PlanSection.module.scss"

function PlanSection() {

  const date = [
    {
      title: "Starter",
      description: "Perfect for those just starting to explore sustainable energy.",
      plan: ["Basic lightning capture and conversion.", "Storage for up to 10 day of extra energy.", "Real-time monitoring via app."],
      price: "$80"
    }, 

    {
      title: "Advanced",
      description: "For those seeking efficiency and greater energy independence.",
      plan: ["Advanced lightning capture with higher efficiency in storms.", "Storage for up to 15 days of extra energy.", "Real-time monitoring via app."],
      price: "$120"
    }, 
    
    {
      title: "Premium",
      description: "The complete solution for independence and sustainability.",
      plan: ["Optimized capture for maximum energy generation.", "Storage for up to 30 days of extra energy.", "Artificial intelligence to manage consumption and optimize savings."],
      price: "$240"
    }
  ]

  return (
    <section className={`content ${styles.section}`}>
      <div className={styles.div01}>
        <h1 className={styles.title}>Why Choose a StormPower Plan?</h1>
        <p className={styles.description}>
          With StormPower, you turn storms into clean energy and guaranteed savings!
          Our innovative system safely harnesses the power of lightning, reduces your electricity bill, and decreases dependence on the power grid. Benefit from extra energy during critical moments, with 24/7 dedicated support and the peace of mind of a sustainable and efficient solution. Choose the ideal plan and start revolutionizing your energy today!
        </p>
      </div>
      
      <div className={styles.div02}>
        <h1 className={styles.subtitle}>Subscriptions</h1>
        <div className={styles["div-card"]}>
          {date.map((item, index) => (
            <div className={styles.card} key={index}>
              <h1 className={styles["card-title"]}>{item.title}</h1>
              <p><i className={styles["card-description"]}>{item.description}</i></p>
              <div>
                <ul>
                  <li className={styles["card-item"]}>{item.plan[0]}</li>
                  <li className={styles["card-item"]}>{item.plan[1]}</li>
                  <li className={styles["card-item"]}>{item.plan[2]}</li>
                </ul>
              </div>
          
            </div>
          ))}
        </div>
        <p className={styles.description}>
          Subscribe to any plan and get 1 month free!
        </p>
      </div>
    </section>
  )
}

export default PlanSection