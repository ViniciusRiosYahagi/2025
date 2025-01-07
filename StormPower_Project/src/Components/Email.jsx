function Email() {
  return (
    <section id="promotion" className="d-flex flex-column justify-content-center align-items-center bg-warning vh-100">
    <div className="w-50">
      <h1 className="display-3">
        Exclusive Bonus: Enter with your email now and get 10% off the
        first month of any chosen plan!
      </h1>
      <p className="fs-5">
        Receive exclusive tips, insights on sustainable energy, and a
        personalized StormPower demonstration directly in your email.
      </p>
      <div>
        <input
          type="email"
          placeholder="email"
          className="einput fw-bold rounded p-3 me-1"
          style={{ width: "300px"}}
        />
        <button  className="ebtn btn btn-dark fw-bold p-3" style={{ width: "150px"}}>about</button>
      </div>
    </div>
  </section>
  )
}

export default Email