function Card() {
  const date = [
    {
      title: "Standard Plan",
      description:
        "For those seeking efficiency and greater energy independence.",
      package: [
        "Advanced lightning capture with higher efficiency in storms.",
        "Storage for up to 10 days of extra energy.",
        "Integration with solar energy systems (if applicable).",
        "Detailed monthly reports on consumption and savings.",
      ],
      price: "$130/month",
    },
    {
      title: "Premium Plan",
      description: "The complete solution for independence and sustainability.",
      package: [
        "Optimized capture for maximum energy generation.",
        "Storage for up to 16 days of extra energy.",
        "Artificial intelligence to manage consumption and optimize savings.",
        "Extended warranty on the system.",
      ],
      price: "$180/month",
    },
  ];

  return (
    <section id="plans" className="d-flex flex-column justify-content-evenly align-items-center text-white vh-100" >
            <div className="text-center w-75" >
              <h1>Why subscribe to a StormPower Plan?</h1>
                <p className="fs-5">
                  With Storm Power, you turn storms into clean energy and guaranteed
                  savings! Our innovative system safely harnesses the power of
                  lightning, reduces your electricity bill, and decreases dependence
                  on the grid. Benefit from extra energy during critical moments, with
                  24/7 dedicated support and the peace of mind of a sustainable and
                  efficient solution. Choose the ideal plan and start revolutionizing
                  your energy today!
                </p>
            </div>
              <h1>Subscriptions</h1>
              <div className="d-flex justify-content-center align-items-center gap-5" >
                {date.map((item, index) => (
                    <div key={index} className="card bg-warning"style={{height: "400px", width: "450px"}}>
                      <div className="card-body d-flex flex-column justify-content-evenly align-items-center">
                        <h1 className="card-title m-2">{item.title}</h1>
                        <ul className="list-group-numbered fw-medium">
                          <li className="list-group-item mb-2">{item.package[0]}</li>
                          <li className="list-group-item mb-2">{item.package[1]}</li>
                          <li className="list-group-item mb-2">{item.package[2]}</li>
                          <li className="list-group-item mb-2">{item.package[3]}</li>
                        </ul>
                        <a href="#" className="ebtn btn btn-dark fw-medium mb-2">
                          {item.price}
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
              <p className="fw-bold">Subscribe to any annual plan and get 1 month free!</p>
    </section>
  );
}

export default Card;
