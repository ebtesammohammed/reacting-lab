import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PeopleDetail = () => {
  const { peopleid } = useParams();
  const [people, setPeople] = useState();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
      .then((res) => res.json())
      .then((People) => setPeople(People));
  }, []);

  return (
    <main className="container">
      <section className="row mt-3">
        <div className="col-12">
          <h1 className="text-center">{people?.peopleid}</h1>
        </div>
      </section>
    </main>
  );
};

export default PeopleDetail;
