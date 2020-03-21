import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  const [hasError, setErrors] = useState(false);
  const [summary, setSummary] = useState([]);

  async function fetchData() {
    const data = await fetch("https://api.covid19api.com/summary");
    data
      .json()
      .then(res => {
        const maxCases = res.Countries.sort((a, b) => {
          return b.TotalConfirmed - a.TotalConfirmed;
        });
        setSummary(maxCases);
      })
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h4 className='mt-3 mb-3'>Summary: using react hooks </h4>
      <div className='summary'>
        <table className='table table-striped border border-warning'>
          <thead>
            <tr className='bg-warning text-light'>
              <th>Country</th>
              <th>New Confirmed</th>
              <th>Total Confirmed</th>
              <th>New Deaths</th>
              <th>TotalDeaths</th>
              <th>NewRecovered</th>
              <th>TotalRecovered</th>
            </tr>
          </thead>
          <tbody>
            {summary.map(country => (
              <tr key={country.Country} className='text-center'>
                <td className='text-left'>{country.Country}</td>
                <td>{country.NewConfirmed}</td>
                <td>{country.TotalConfirmed}</td>
                <th className='text-danger'>{country.NewDeaths}</th>
                <td>{country.TotalDeaths}</td>
                <td>{country.NewRecovered}</td>
                <td>{country.TotalRecovered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Summary;
