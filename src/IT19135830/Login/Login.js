import React,{Component} from 'react'
import {Col, Row} from "reactstrap";
import LoginCss from '../Stylesheets/login.css'
// import {AiOutlineMail} from "react-icons/all";
import {Mail} from 'react-feather';

// import {Row} from "reactstrap";


class Login extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div>

                <Row>
                    <Col sm ='1'></Col>
                    <Col sm ='5'>
                        <h1 className='topic'>ICAF</h1>
                        <h3 className='subTopic'>International Conference on Application Frameworks</h3>
                    </Col>
                    <Col sm='4'>
                        <h3 className='login'>Login</h3>
                        <h3 className='instructions'>Please enter Email and Password to login</h3>
                        <form>
                            {/*<AiOutlineMail/>*/}
                            <Mail size={25}/>
                            <input className='inputfield'
                                placeholder='Enter Email here'
                            >
                            </input>


                            <Mail size={25}/>
                            <input className='inputfield'
                                   placeholder='Enter Email here'
                            >
                            </input>

                        </form>
                    </Col>
                    <Col sm ='2'></Col>
                </Row>
            </div>
        )
    }

}

export default Login