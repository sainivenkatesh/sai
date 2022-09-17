import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

// Global variable for Restapi url
 const url=`http://localhost:3001/users` //array type of data


class Restapi extends Component {
    // constructor is mounting method
    constructor(props){
        super(props);
        this.state = {
            userdata: [] //mpty array
        }
       
    }

 // Render is alsp mounting method
    render(){
        return(<>
          <div className="p-5 ">
            <h2 className="text-center"> FETCH RESTAPI DATA USING LOCAL URL/CLIENT </h2>

            <table className='table table-dark table-bordered p-5'>
                <thead className='table table-light'>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th colSpan='3' className='text-center'>ACTION</th>
                        </tr>
                </thead>
                <tbody>
                     {
                this.state.userdata.map((res,i)=> {
                    return(<tr key={i}> 
                        <td>{res.id}</td>
                        <td>{res.name}</td>
                        <td>{res.email}</td>
                        <td>{res.phone}</td>
                        
                        <td>
                            <Link to={`/restapi/view/${res.id}`} className='btn btn-primary'>view</Link>
                        </td>
                       <td>
                        <Link to={`/restapi/edit/${res.id}`} className='btn btn-secondary'>edit</Link>
                        </td>
                        <td>
                            <button className='btn btn-danger'>delete</button>
                        </td> 
                    </tr>

                    )
                })
    }
     </tbody>
     </table>
          </div>
        </>)
    }
    
    componentDidMount(){
        axios.get(url).then((result)=>this.setState({userdata:result.data}));
    }
}
export default Restapi