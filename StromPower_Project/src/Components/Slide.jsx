import { useEffect } from "react";
import { useState } from "react";

function Slide() {
  const [index, setIndex] = useState(0);

  const date = [
    {
      title: "Lightning Capture Technology",
      text: "An advanced, safe, and efficient lightning capture system is installed in your home. It absorbs the energy from lightning and converts it into usable electricity.",
    },
    {
      title: "Smart Conversion",
      text: "The captured energy is regulated and transformed into stable electricity, ready to be used in household appliances and systems.",
    },
    {
      title: "Sustainable Storage",
      text: "Any excess energy is stored in high-capacity batteries, ensuring extra power even when there are no storms.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % date.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [date.length]);

  return (
    <section
      className="container02 d-flex flex-column justify-content-center align-items-center p-5 gap-5 bg-warning"
      style={{ height: "650px" }}
    >
      <div style={{ textAlign: "start", width: "100%" }}>
        <h1>How It Works?</h1>
      </div>

      <div className="div02" style={{ maxWidth: "60vw" }}>
        <h1 className="m-5 text-center" style={{ fontSize: "4.5em" }}>
          {date[index].title}
        </h1>
        <p className="fs-4 text-center" style={{}}>
          {date[index].text}
        </p>
      </div>

      <div className="text-center d-flex justify-content-center align-item-center gap-3">
        {date.map((_, i) => (
          <>
            <button
              key={i}
              style={{
                height: "5px",
                width: "30px",
                border: "none",
                backgroundColor: index === i ? "#fff" : "#000",
                borderRadius: "11px"
              }}
              onClick={() => setIndex(i)}
            ></button>
          </>
        ))}
      </div>
    </section>
  );
}

export default Slide;
