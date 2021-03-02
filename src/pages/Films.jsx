import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loadFilms, setLoadFilms] = useState();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((allFilms) => setFilms(allFilms));
  }, []);

  return (
    <main className="container">
      <section className="row mt-3">
        <div className="col-12">
          <button onClick={() => setLoadFilms()}>Load Films</button>
          {loadFilms &&
            films.map((films) => (
              <div className="col-md-6" key={`films-card-${films.id}`}>
                <div className="card shadow my-2">
                  <div className="card-body">
                    <h4 className="card-title">{films.setFilms}</h4>
                    <p className="card-subtitle text-muted">
                      {" "}
                      Title: {films.title}
                    </p>
                    <p className="card-text">
                      Description: {films.description}
                    </p>
                    <p className="card-subtitle text-muted">
                      {" "}
                      Directors: {films.director}
                    </p>
                    <p className="card-text"> Producer: {films.producer}</p>
                    <p className="card-text">
                      Release-date: {films.release_date}
                    </p>
                    <p className="card-text"> Score: {films.rt_score}</p>
                    <Link to={`/films/${films.id}`}> people Detail </Link>
                  </div>
                </div>
              </div>
            ))}
          ;
        </div>
      </section>
    </main>
  );
};

export default Films;
