import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmsDetail = () => {
  const { filmsid } = useParams();
  const [films, setFilms] = useState();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmsid}`)
      .then((res) => res.json())
      .then((Films) => setFilms(Films));
  }, []);

  return (
    <main className="container">
      <section className="row mt-3">
        <div className="col-12">
          <h1 className="text-center"> {films?.filmsid}</h1>
        </div>
      </section>
    </main>
  );
};

export default FilmsDetail;
