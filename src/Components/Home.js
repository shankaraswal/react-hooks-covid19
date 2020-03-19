import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [hasError, setErrors] = useState(false);
  const [home, setHome] = useState([]);

  async function fetchData() {
    const data = await fetch("https://api.covid19api.com/");
    data
      .json()
      .then(res => setHome(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <p className='mt-3 mb-3'>Home </p>

      <div className='Home row'>
        {home.map((item, ind) => (
          <div className='col-sm-4' key={"cat" + (1 + ind)}>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>{item.Name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>
                  {item.Description}
                </h6>
                <Link to={item.Path} className='link'>
                  Click for more detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
