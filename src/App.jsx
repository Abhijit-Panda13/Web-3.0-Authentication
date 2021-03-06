import React from "react";
import { useState, useEffect } from "react";
import OpenLogin from "@toruslabs/openlogin";
import Button from 'react-bootstrap/Button';
import "./app.css"; 
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import validator from 'validator';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBInput } from 'mdb-react-ui-kit';

const VERIFIER = [
  {
    loginProvider: "google",
    id : "0"
  },
  {
    loginProvider: "facebook",
    id : "1"
  }
]


function App() {
  const [isLoading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [openlogin, setOpenLogin] = useState();
  const [privKey, setPrivKey] = useState();
  const [OpenloginUserInfo, setOpenloginUserInfo] = useState();

  var loginObject ={
    loginProvider: "google",
    clientId: "BDEZMlXEtCPU0_sfOO22To8ZnFS8ppSJs_yBNBxiMWhdAmPJSUk4jlCI3ykKBHO2cl1iDEu_M6UDVFAqALmZPto",
    redirectUrl: "http://localhost:3000/"
  }

  useEffect(() => {
    setFormIsValid(validator.isEmail(email))
  }, [email]);


  const onMount = async () => {
    setLoading(true);

    try {
      const openlogin = new OpenLogin({
        clientId: loginObject.clientId,
        network: "mainnet", // valid values (testnet or mainnet)
      });
      setOpenLogin(openlogin);

      await openlogin.init();
      setPrivKey(openlogin.privKey);
    } finally {
      setLoading(false);
    }
  };

  const onLoginBrand = async (event) => {
    
    VERIFIER.filter(login => login.id === event.target.id).map(filtered => (
      loginObject.loginProvider = filtered.loginProvider
    ));
    console.log(loginObject);
    if (isLoading || privKey || !openlogin) return;

    setLoading(true);
    try {
      await openlogin.login(loginObject);
      setPrivKey(openlogin.privKey);
    } finally {
      setLoading(false);
    }
  };

  const onLoginEmail = async (event) => {

    
    if (isLoading || privKey || !openlogin) return;

    setLoading(true);
    try {
      await openlogin.login({
        extraLoginOptions: {
          login_hint: email,
        },
        loginProvider: "email_passwordless",
        redirectUrl: "http://localhost:3000/",
    });
    
    setPrivKey(openlogin.privKey);
    
    } finally {
      setLoading(false);
    }
  };
  const onLogout = async () =>{
    if (isLoading || !openlogin) return;

    setLoading(true);
      try {
        await openlogin.logout();
        setPrivKey(openlogin.privKey);
      } finally {
        setLoading(false);
      }
    };
    // {
    //   loginProvider: VERIFIER.loginProvider,
    //   redirectUrl: "http://localhost:3000/redirect",
    // }
  
  
  useEffect(() => {
    onMount();
    
  }, []);

  if(isLoading) return <div className="central">Loading...</div>;
  return privKey ? 
  (
    <div className="central">
      <h1>Welcome {OpenloginUserInfo}</h1>
      <p>Logged in with private key: {privKey}</p>
      <p>Store the private key generated in localStorage</p>
      <p>Then you can now use the private key for authentication across different pages</p>
      <Button  variant="outline-dark" onClick={onLogout}>Logout</Button>
    </div>
  ) : (
    <div className="central">
      <Container fluid >
        <Row className="head">
          <h1 className="neon">Passwordless Login</h1>
        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm = {4}>
          <form noValidate>
          <MDBInput 
              label='Email Address'
              id='typeEmail'
              type='email'
              size='lg'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
          />
          <Button className="loginbutton"
              disabled={!formIsValid}
              variant="dark"
              onClick={onLoginEmail}
          >
              Login
          </Button>
          </form>
        </Col>
      </Row>
      
        <Button className="fg .hover-zoom" variant="outline-dark" id="0" onClick={onLoginBrand}>Google <FaGoogle /></Button>
        <Button className="fg .hover-zoom" variant="outline-dark" id="1" onClick={onLoginBrand}>Facebook <FaFacebook /></Button>
    </Container>
    </div> );
}

export default App;