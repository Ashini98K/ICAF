import React, { Component } from 'react';
import axios from 'axios';
import Card from "reactstrap/lib/Card";
import {Button, Col, Input, Row} from "reactstrap";
import userCss from '../../../Stylesheets/viewUsers.css';

class Researchers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            researchers: [],
            userType:"RESEARCHER"
        }

    }

    componentDidMount() {
        const userType = 'RESEARCHER';
        axios.get(`http://localhost:5000/users/user-type/${userType}`)
        .then(response => {
            console.log(response.data.data);
            this.setState({researchers: response.data.data});
            console.log(this.state.researchers);
        }
        )
            .catch(error => {
                    alert(error.message)
                }
            )
    }

    render() {
        return(
            <div>
                <Row className='userRow'>
                    <Col sm ='2'></Col>
                    <Col sm ='8'>
                        <h1 className='userTopic'>Researchers</h1>
                        {this.state.researchers.length > 0 && this.state.researchers.map((item, index) => (
                            <div key={index}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{item.fullName}</li>
                                    <li className="list-group-item"></li>

                                </ul>
                            </div>
                        ))}




                    </Col>
                    <Col sm ='2'></Col>
                </Row>
            </div>
        )
    }

}

export default Researchers
