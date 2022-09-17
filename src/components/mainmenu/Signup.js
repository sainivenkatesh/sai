import React, {Component} from 'react'
import axios from'axios'

const url=`http://localhost:3001/users`
export default class Signup extends Component{
        constructor(props){
            super(props);
            this.state={
              uname:'',
              email:'',
              phone:'',
              txtconfrmation:''
            }
        }

        // Name input textbox
        unameHandling=(e)=>
        {
          this.setState({uname:e.target.value})
        }
        // email input textbox
        emailHandling=(e)=>
        {
          this.setState({email:e.target.value})
        }
        // phone input textbox
        phoneHandling=(e)=>
        {
          this.setState({phone:e.target.value})
        }
        submitHandler=(e)=>{

          e.preventDefault();
          var formdata={
            'name': this.state.uname,
            'email': this.state.email,
            'phone': this.state.phone
          }
          alert(JSON.stringify(formdata));

          /*---axios.post(url,formdata)
          .then(()=> window.alert("....created...."))
          .catch(()=>window.alert("......failed....."))
          ---*/

          /*  axios.post(url,formdata)
          .then(()=>this.setState({txtconfrmation:'Accont created'}))
          .catch(()=>this.setState({txtconfrmation:'Account failed'}))
          */

          axios.post(url,formdata)
          .then(()=>
            this.props.history.push('/restapi')
          );
        }

       
        
        render(){
          console.log(this.props)
          // Destructuring...
          var{ uname, email, phone, txtconfrmation }=this.state
            return(
                    <div className='container p-3'>
                        <h3 className='py-3 text-center'>User Registration Form</h3>

                        <div className='container w-50'>
                            <form onSubmit={this.submitHandler.bind(this)}>
                                <div className='mb-3'>
                                  <label  className="form-label">Name</label>
                                  <input type="text" class="form-control" 
                                          value={uname}
                                          onChange={this.unameHandling.bind(this)}/>
                                          
                                </div>
                                <div className='mb-3'>
                                  <label  className="form-label">Email</label>
                                  <input type="email" class="form-control"
                                          value={email}
                                          onChange={this.emailHandling.bind(this)}/>
                                </div>
                                <div className='mb-3'>
                                  <label  className="form-label">Number</label>
                                  <input type="number" class="form-control"
                                          value={phone}
                                          onChange={this.phoneHandling.bind(this)}/>
                                </div>
                                <div className='mb-3'>
                            
                                  <button type="submit" className="btn btn-primary">Create Account</button>
                                </div>
                                <p className='text-primary'>{txtconfrmation}</p>
                            </form>
                        </div>
                    </div>
                   
                  )
        }
}