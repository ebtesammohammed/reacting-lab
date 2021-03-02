import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);
  const [loadPeople, setLoadPeople] = useState();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people`)
      .then((res) => res.json())
      .then((allPeople) => setPeople(allPeople));
  }, []);

  return (
    <main className="container">
      <section className="row mt-3">
        <div className="col-md-6">
          <button onClick={() => setLoadPeople()}>Load Peoples</button>
          {loadPeople &&
            people.map((people) => (
              <div className="col-md-6" key={`people-card-${people.id}`}>
                <div className="card shadow my-2">
                  <div className="card-body">
                    <h4 className="card-title"> {people.setPeople}</h4>
                    <p className="card-subtitle text-muted">
                      {" "}
                      Names:{people.name}
                    </p>
                    <p className="card-text"> Gender: {people.gender}</p>
                    <p className="card-subtitle text-muted">
                      {" "}
                      Age: {people.age}
                    </p>
                    <p className="card-text"> eye-color: {people.eye_color}</p>
                    <Link to={`/people/${people.id}`}> people Detail </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default People;
