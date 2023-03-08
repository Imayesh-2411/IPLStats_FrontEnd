import React,{Component} from 'react';
import './CA1.css'
import axios from 'axios'

class ValidatingForm extends Component{

    constructor(props){
        super(props);
        this.state={
            sno:'',
            playerName:'',
            age:'',
            playerType:'',
            priceInCrs:'',
            team:''
        };
    }
    
    handleSnoChange=(event)=>{
        this.setState({sno:event.target.value})
    };
    handlePlayerNameChange=(event)=>{
        this.setState({playerName:event.target.value})
    };
    handleAgeChange=(event)=>{
        this.setState({age:event.target.value})
    };
    handlePlayerTypeChange=(event)=>{
        this.setState({playerType:event.target.value})
    };
    handlePriceChange=(event)=>{
        this.setState({priceInCrs:event.target.value})
    };
    handleTeamChange=(event)=>{
        this.setState({team:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            sno: this.state.sno,
            playerName: this.state.playerName,
            age: this.state.age,
            playerType: this.state.playerType,
            priceInCrs: this.state.priceInCrs,
            team: this.state.team
        };
        
        axios.post('http://127.0.0.1:8080/post', data)
    }

    render(){
    return ( 
        <div className='pro2'><center><br></br>
        <div className='container2'>
            
        <form onSubmit={this.handleSubmit}>
            <h1>POST - AddDetails</h1>
            
            <div className='row2'>
                <label>S.No : </label><br></br>
                <input className='in2' type="number" id='sno' placeholder='  Enter the S.No...' value={this.state.sno}
                    onChange={this.handleSnoChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.id}</p> */}<br></br>

            <div className='row2'>
                <label>Player Name : </label><br></br>
                <input className='in2' type="text" id='playerName' placeholder='  Enter the Player Name...' value={this.state.playerName}
                    onChange={this.handlePlayerNameChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.username}</p> */}<br></br>

            <div className='row2'>
                <label>Age : </label><br></br>
                <input className='in2' type="number" id='age' placeholder='  Enter the Age of the Player...' value={this.state.age}
                    onChange={this.handleAgeChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.email}</p> */}<br></br>

            <div className='row2'>
                <label>Player Type : </label><br></br>
                <input className='in2' type="text" id='playerType' placeholder='  Enter the type of the Player...' value={this.state.playerType}
                    onChange={this.handlePlayerTypeChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.password}</p> */}<br></br>

            <div className='row2'>
                <label>Price In Crores : </label><br></br>
                <input className='in2' type="number" id='priceInCrs' placeholder='  Enter the Price of the Player...' value={this.state.priceInCrs}
                    onChange={this.handlePriceChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.password}</p> */}<br></br>

            <div className='row2'>
                <label>Team : </label><br></br>
                <input className='in2' type="text" id='Team' placeholder='  Enter the Team of the Player...' value={this.state.team}
                    onChange={this.handleTeamChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.password}</p> */}<br></br>
            <br></br>

            <div className='row2'>
                <button className='primary2'>Create</button>
            </div>

            {/* <div>
                <Link to="/Showdata">
                <button className='btn btn-primary'>Show Details</button>
                </Link>
            </div> */}
        </form>
        </div></center><br></br><br></br>
        </div>
     );
    }
}

export default ValidatingForm