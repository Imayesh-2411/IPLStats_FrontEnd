import React,{Component} from 'react';
import './CRUD.css'
import { Link } from 'react-router-dom';
class ValidatingForm extends Component{

    render(){
        return ( 
            <body>
                <div class="image1">
            <br></br><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Indian_Premier_League_Official_Logo.svg/2560px-Indian_Premier_League_Official_Logo.svg.png" width="850px" height="700px" alt="jyo"/>
            </div>
            <div className='container1'>
                <br></br><br></br>
                <h1><b><u>IPL STATS</u></b></h1>
                <h3>CRUD Operations</h3><br></br>
                
                <div className='row1'>
                    <label>1. Post the Details:  </label>
                    <Link to='/CA1'>
                    <button className='primary1'>Post</button></Link>
                </div><br></br>
                <div className='row1'>
                    <label>2. Get the Details:  </label>
                    <Link to='/Showdata'>
                    <button className='primary1'>Get</button></Link>
                </div><br></br>
                <div className='row1'>
                    <label>3. Update the Details:  </label>
                    <Link to='/Update'>
                    <button className='primary1'>Update</button></Link>
                </div><br></br>
                <div className='row1'>
                    <label>4. Delete the Details:  </label>
                    <Link to='/Delete'>
                    <button className='primary1'>Delete</button></Link>
                </div><br></br>
            
            </div>
            </body>
         );
    }
}

export default ValidatingForm