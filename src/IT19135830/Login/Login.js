import React,{Component} from 'react'
import {Button,Col, Row} from "reactstrap";
import LoginCss from '../Stylesheets/login.css'
// import {AiOutlineMail} from "react-icons/all";
import {Mail} from 'react-feather';
// import {login} from '../actions/auth';
import {useDispatch} from "react-redux";
import { Player, Controls } from '@lottiefiles/react-lottie-player';


// import {Row} from "reactstrap";


class Login extends Component {
    constructor(props) {
        super(props);
        this.onSubmit= this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state={
            email:"",
            password:""
        }

        // const dispatch = useDispatch();


    }




    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        //dispatch(login(this.state, history));
    }


    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }


    render(){
        return(
            <div>

                <Row>
                    <Col sm ='1'></Col>
                    <Col sm ='5'>
                        <h1 className='topic'>ICAF</h1>
                        <h3 className='subTopic'>International Conference on Application Frameworks</h3>

                        <div>
                            <Player
                                autoplay
                                loop
                                src="https://assets4.lottiefiles.com/packages/lf20_jcikwtux.json"
                                style={{ height: '40rem', width: '40rem', paddingTop:'2rem', paddingLeft:'2rem' }}
                            >
                                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>

                        </div>
                    </Col>
                    <Col sm='4'>
                        <h3 className='login'>Login</h3>
                        <h3 className='instructions'>Please enter Email and Password to login</h3>
                        <form onSubmit={this.onSubmit}>
                            {/*<AiOutlineMail/>*/}
                            {/*<Mail size={25} className='mailIcon'/>*/}
                            <input className='inputfield'
                                   placeholder='Enter Email here'
                                   name='email'
                                   id='email'
                                   value={this.state.email}
                                   onChange={this.onChange}
                            >
                            </input>
                            {/*<Mail size={25}/>*/}
                            <input className='inputfield'
                                   placeholder='Enter Password here'
                                   name = 'password'
                                   id='password'
                                   value={this.state.password}
                                   onChange={this.onChange}
                            >
                            </input>

                            <row className='d-flex justify-content-between'>

                                <Col sm='4'></Col>

                                <button className ='loginbtn' type='submit'>
                                    <span className='btnTxt'>REGISTER</span>
                                </button>
                                <button className ='loginbtn'>
                                    <span className='btnTxt'>LOGIN</span>
                                </button>


                            </row>

                        </form>
                    </Col>
                    <Col sm ='2'></Col>
                </Row>
            </div>
        )
    }

}

export default Login