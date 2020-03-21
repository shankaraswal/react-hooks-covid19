import React, { useState, useEffect } from "react";
import axios from "axios";

export const AutoCompleteHooks = () => {
  const [data, setData] = useState([]);
  const [filtered, setFilterd] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.covid19api.com/summary"
        );
        setData(res.data.Countries);
        setFilterd(res.data.Countries);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const results = filtered.filter(res =>
      res.Country.toLowerCase().includes(result)
    );
    setData(results);
  }, [result]);
  //console.log(data);
  const onChange = e => {
    setResult(e.target.value);
  };

  return (
    <>
      <h4 className='mt-3 mb-3'>Auto Compelete Using Hooks </h4>

      <div className='row mt-3 mb-3 bg-info'>
        <div className='col-sm-12 p-2 row'>
          <label className='text-light text-right col-sm-6'>
            Enter Country Name{" :  "}
          </label>
          <input
            type='text'
            className='col-sm-6 form-control'
            defaultValue=''
            onChange={onChange}
          />
        </div>
      </div>
      <div className='row'>
        <table
          width='100%'
          className='table table-striped border border-warning'>
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
            {data.map((country, ind) => (
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
