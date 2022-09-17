import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

var idno;

export default class Edit extends Component {
    constructor(props){
        super(props)
            this.state={}
        }

     render(){
        idno= this.props.match.params.idno
        console.log(idno)
        var {id,name,email,phone}= this.state
        return(
            <div>
            <h1>EDIT COMPONENT</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input type="email" className="form-control" value={id}/>
                </div>
            </form>
           
           <Link className="btn btn-success" to='/restapi'>Go Back</Link>
        </div>
            )
        
     }
     componentDidMount(){
        const url=`http://localhost:3001/users/${idno}` 
        axios.put(url).then((result)=>this.setState(result.data))
     }
    }
    
