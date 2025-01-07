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
    }, 3000);

    return () => clearInterval(interval);
  }, [date.length]);

  return (
    <section id="about" className="d-flex flex-column justify-content-center align-items-center bg-warning p-5 gap-5 vh-100" 
    style={{ height: "600px" }}
    >
      <div className="text-start w-auto">
        <h1>How It Works?</h1>
      </div>
      <div className="w-50">
        <h1 className="text-center display-3 m-4">
          {date[index].title}
        </h1>
        <p className="text-center fs-4">
          {date[index].text}
        </p>
      </div>

      <div className="d-flex justify-content-center align-item-center gap-4">
        {date.map((_, i) => (
          <>
            <button
              key={i}
              className="rounded border-0 px-3 py-1"
              style={{
                backgroundColor: index === i ? "#fff" : "#212529",
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
