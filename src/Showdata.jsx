import axios from "axios";
import './Showdata.css'
import React, { Component } from "react";

class Showdata extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <div className="pro4"><center><br></br>
        <h1>GET - ShowDetails</h1>
      <table border={2}>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Player Name</th>
          <th>Age</th>
          <th>Player Type</th>
          <th>Price In Crs</th>
          <th>Team</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.sno}>
            <td>{user.sno}</td>
            <td>{user.playerName}</td>
            <td>{user.age}</td>
            <td>{user.playerType}</td>
            <td>{user.priceInCrs}</td>
            <td>{user.team}</td>
          </tr>
        ))}
      </tbody>
    </table></center><br></br></div>
    );
  }}
  
export default Showdata;