import Slide from "./Slide";

function Container() {
  return (
    <>
      <section className="container01 text-white d-flex justify-content-center align-items-center">
        <div
          className="d-flex flex-column align-items-start gap-5"
          style={{ maxWidth: "50vw" }}
        >
          <h1 style={{ fontSize: "5em" }}>
            A energia da tempestade ao seu alcance.
          </h1>
          <p style={{ fontSize: "1.3em" }}>
            A StormPower é uma empresa inovadora que aproveita a força dos raios
            em dias chuvosos para gerar energia extra, limpa e sustentável.
            Nosso objetivo é transformar eventos climáticos intensos em uma
            fonte confiável de energia para residências, reduzindo custos e
            impacto ambiental.
          </p>
          <a
            href="#"
            className="text-decoration-none fs-4 text-black p-3"
            style={{ borderRadius: "11px" }}
          >
            Saiba Mais
          </a>
        </div>

        <img
          className="img-fluid"
          style={{ height: "650px" }}
          src="./img/rain.png"
          alt="cloud with rain"
        />
      </section>

      <section
        className="container02 d-flex flex-column justify-content-center align-items-center p-5 gap-5"
        style={{ backgroundColor: "#ffcc00", height: "650px" }}
      >
        <h1>Como Funciona?</h1>
        <Slide />
      </section>
    </>
  );
}

export default Container;
