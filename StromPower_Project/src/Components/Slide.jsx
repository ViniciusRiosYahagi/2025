import { useEffect } from "react";
import { useState } from "react";

function Slide() {
  const [index, setIndex] = useState(0);

  const date = [
    {
      title: "Tecnologia de Captação",
      text: "Um sistema avançado de captação de raios, seguro e eficiente, é instalado em sua residência. Ele absorve a energia dos raios e converte-a em eletricidade utilizável.",
    },
    {
      title: "Conversão Inteligente",
      text: "A energia captada é regulada e transformada em eletricidade estável, pronta para ser usada em aparelhos e sistemas domésticos.",
    },
    {
      title: "Armazenamento Sustentável",
      text: "Qualquer energia excedente é armazenada em baterias de alta capacidade, garantindo energia extra mesmo quando não houver tempestades.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % date.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [date.length]);

  return (
    <>
      <div className="div02" style={{ maxWidth: "60vw" }}>
        <h1 className="m-5 text-center" style={{ fontSize: "5em" }}>
          {date[index].title}
        </h1>
        <p className="fs-4 text-center" style={{ paddingBottom: "50px" }}>
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
              }}
              onClick={() => setIndex(i)}
            ></button>
          </>
        ))}
      </div>
    </>
  );
}

export default Slide;
