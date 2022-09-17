import React, {Component} from 'react'
import axios from 'axios'
import {Container,Row,Col,Card} from 'react-bootstrap'

// Global variable for Restapi url
const url=`https://jsonplaceholder.typicode.com/photos?_start=0 &_end=10` 

class Reactbootstrap extends Component{
    constructor(props){
        super(props);
        this.state= {
            photos:[]
        }
    }
    render(){
        return(<div className="container text-center">
            <h2>REACTBOOTSTRAP PACKAGE</h2>
            <Container>
                <Row>
                  {this.state.photos.map((res,i)=>{
                    return(<Col lg={4} md={4} sm={6} xs={12} key={i}>
                         <Card className='my-2'>
                             <Card.Img variant="top" className='w-50mx-automy-2' src={res.thumbnailUrl} />
                                <Card.Body>
                                 <Card.Title className='h6'>{res.title}</Card.Title>
                              
                                <a className=" btn btn-primary" href={res.url} target="_blank">Go somewhere</a>
                           </Card.Body>
                         </Card>
                    </Col>

                    )
                  }
                  
                  )} 
                </Row>
            </Container>
        </div>
        )
    }
    componentDidMount(){
        axios.get(url).then((result)=> this.setState({photos:result.data}) )
    }
}
export default Reactbootstrap