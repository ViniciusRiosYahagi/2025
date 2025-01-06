function Card() {
  const date = [
    {
      title: "Starter Plan",
      description: "Ideal for those starting to explore sustainable energy.",
      package: [
        "Basic lightning capture and conversion.",
        "Storage for up to 5 day of extra energy.",
        "Real-time monitoring via app.",
        "Technical support during business hours.",
      ],
      price: "$60/month",
    },
    {
      title: "Advanced Plan",
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
    <section style={{ height: "600px" }}>
      <h1 className="text-center text-white">Subscriptions</h1>
      <div className="d-flex justify-content-center align-items-center gap-1 m-5">
        {date.map((item, index) => (
          <>
            <div key={index} className="card w-50">
              <div className="card-body d-flex flex-column justify-content-center">
                <h1 className="card-title text-center m-2">{item.title}</h1>
                <p className="card-text text-center">
                  <i>{item.description}</i>
                </p>
                <ul className="list-group list-group-numbered list-group-flush text-center fw-medium">
                  <li className="list-group-item">{item.package[0]}</li>
                  <li className="list-group-item">{item.package[1]}</li>
                  <li className="list-group-item">{item.package[2]}</li>
                  <li className="list-group-item">{item.package[3]}</li>
                </ul>
                <a href="#" className="cbtn btn btn-warning fw-medium mb-2">
                  {item.price}
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Card;
