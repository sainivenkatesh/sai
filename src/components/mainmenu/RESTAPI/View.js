import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

var idno
// Global variable for Restapi url
 //array type of data
 export default class View extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        idno= this.state
        console.log(idno)
        var {id,name,email,phone}= this.state
        return(<><div>
            <h1>VIEW COMPONENT</h1>
            <p>{idno} th record data</p>
           <ul>
            <li>{id}</li>
            <li>{name}</li>
            <li>{email}</li>
            <li>{phone}</li>
           </ul>
           <Link className="btn btn-success" to='/Restapi'>Go Back</Link>
        </div>
        </>
            )
    }
    componentDidMount(){
        const url=`http://localhost:3001/users/${idno}`;
        axios.get(url).then((result)=> this.setState(result.data));
    }
}
