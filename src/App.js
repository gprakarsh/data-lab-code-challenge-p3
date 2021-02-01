import './App.css';
import {useState, useEffect} from 'react';
import InputBox from './Components/InputBox';


function App() {
  const [title, setTitle] = useState('Login');
  const [button1, setButton1] = useState('Login');
  const [button2, setButton2] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  useEffect(()=>{
    document.title=title;
  },[title]);

  const forgotPassword = () => {
    setTitle('Forgot Password');
    setButton1('Confirm');
    setButton2('Back to Login')
  };

  const signUp = () => {
    setTitle('Sign Up');
    setButton1('Create Account');
    setButton2('Back to Login');
  };

  const login = () => {
    setTitle('Login');
    setButton1('Login');
    setButton2('Sign Up');
  }

  const switchPages = () => {
    if(button2 === 'Sign Up'){
      signUp();
    } else if (button2 === 'Back to Login'){
      login();
    }
  };

  const formHit = () => {
    if(button1 === 'Login'){
      if(email && password){
        alert("OK");
      } else {
        alert("Please fill all details!");
      }
    } else if (button1 === 'Create Account'){
      if(!email || !password || !confirmPass){
        alert('Please fill all details!');
      } else if (password !== confirmPass){
        alert(`Passwords don't match`);
      } else {
        alert("OK")
      }
    }
  };

  return (
    <div className="App">
      <div className="LoginBox">
        <div className="titleBox">
          <h1 id="title">{title}</h1>
          <h3 id="sub-title">{title}</h3>
        </div>
        <InputBox heading="University" placeholder="" value="UIUC" disabled="disabled"/>
        <InputBox heading="Email" placeholder="Your Email" onChangeFn={(e)=>setEmail(e)} type="email" />
        {
          (title==='Forgot Password')
          ? <></>
          : <InputBox heading="Password" placeholder="Your Password" onChangeFn={(e)=>setPassword(e)} type="password"/>
        }
        {
          title==='Sign Up'
          ? <InputBox heading="Confirm Password" placeholder="Confirm Password" onChangeFn={(e)=>setConfirmPass(e)} type="password"/>
          : <></> 
        }
        {
          (title==='Login')
          ?<div id="forgotPassword">
            <p onClick={forgotPassword}>Forgot password?</p>
          </div>
          : <></>
        }
        <div className="buttonBox">
          <button id="button1" onClick={formHit}>{button1}</button>
          <button id="button2" onClick={switchPages}>{button2}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
