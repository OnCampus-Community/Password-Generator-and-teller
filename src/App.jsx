import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css'

import * as React from 'react';
export default function App() {
  const [meter, setMeter] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
  const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
  const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
  const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
  const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
  const eightCharsOrMore = /.{8,}/g; // eight characters or more

  const passwordTracker = {
    uppercase: password.match(atLeastOneUppercase),
    lowercase: password.match(atLeastOneLowercase),
    number: password.match(atLeastOneNumeric),
    specialChar: password.match(atLeastOneSpecialChar),
    eightCharsOrGreater: password.match(eightCharsOrMore),
  };

  const passwordStrength = Object.values(passwordTracker).filter(
    (value) => value
  ).length;
  let is_perfect = false;
  if (passwordTracker.lowercase && passwordTracker.uppercase && passwordTracker.number && passwordTracker.eightCharsOrGreater) {
    is_perfect = (passwordTracker.uppercase.length > 0 && 
      passwordTracker.lowercase.length > 0 && 
      passwordTracker.specialChar.length > 0 &&
      passwordTracker.number.length > 0 &&
      passwordTracker.eightCharsOrGreater.length > 0
      )
    }
  if (is_perfect) {
    document.getElementById("perfect").textContent="Perfect"
  } else if (!document.getElementById("perfect")) {
      // document.getElementById("perfect").textContent="."
    console.log("")
  } else {
      document.getElementById("perfect").textContent=""
  }
  
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="form-jumbo">
        <div className="form-wrapper">
        <div className='input'><form className='form-ele'>
        <input
          onFocus={() => setMeter(true)}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          value={password}
          name="password"
          id="meter"
          autoComplete=''
        />
      
        {meter && (
          <div className=''>
            <div className="password-strength-meter" id="password-meter"></div>
            <div className='error'>
              {passwordStrength < 5 && 'Your Password missing '}
              {!passwordTracker.uppercase && 'uppercase, '}
              {!passwordTracker.lowercase && 'lowercase, '}
              {!passwordTracker.specialChar && 'special character, '}
              {!passwordTracker.number && 'number, '}
              {!passwordTracker.eightCharsOrGreater &&
                'eight characters or more'}
            </div>
          </div>
        )}

      </form>
      </div>
        </div>
      
      </div>
      <center><span id="perfect"></span></center>
      <style jsx>
        {`

          .password-strength-meter::before {
            content: "";
            background-color: ${
              ['red', 'orange', '#03a2cc', '#03a2cc', '#0ce052'][
                passwordStrength - 1
              ] || ''
            };
            height: 100%;
            width: ${(passwordStrength / 5) * 100}%;
            display: block;
            border-radius: 10px;
            transition: width 0.2s;
          }
        `}
      </style>
    </div>
  );
}
