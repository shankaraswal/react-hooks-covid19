import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visCountries: [],
      allData: [],
      record: 0
    };
  }
  async componentDidMount() {
    const data = await axios
      .get("https://api.covid19api.com/summary")
      .then(res => {
        this.setState({
          allData: res.data.Countries,
          visCountries: res.data.Countries,
          record: res.data.Countries.length
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  filterCountries = e => {
    let keyw = e.target.value.toLowerCase();
    const filterCountryList = this.state.allData.filter(country => {
      let cArr = country.Country.toLowerCase();
      return cArr.indexOf(keyw) !== -1;
    });

    this.setState({
      visCountries: filterCountryList,
      record: filterCountryList.length
    });
  };

  render() {
    console.log(this.state.visCountries);
    return (
      <>
        <h4 className='mt-3 mb-3'>Auto Compelete Using Class </h4>

        <div className='row mt-3 mb-3 bg-info'>
          <div className='col-sm-12 p-2 row'>
            <label className='text-light text-right col-sm-6'>
              Enter Country Name{" :  "}
            </label>
            <input
              type='text'
              className='col-sm-6 form-control'
              defaultValue=''
              onChange={this.filterCountries}
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
              {this.state.visCountries.map((country, ind) => (
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
  }
}

export default AutoComplete;
