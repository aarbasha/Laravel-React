import React, { useState } from "react";
import { BsKeyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
const Login = () => {

    const [ email , setEmail] = useState();
    const [password , SetPassword] = useState();

    const submitForm =() => {
      // e.preventdefault();
      console.log(email + '' + password)

    }


  
  return (

    <motion.div 
      style={{ posation:"fixed"}}
      initial={{opacity:0 , y:0}}
      animate={{opacity:1 , y:60 ,transition:{duration:1}}}
      exit={{opacity:0 , y:0}}
    >
    <div className="row mt-5">
      <div className="card  col-md-4 offset-md-4 ">
        <div>
          <h2 className="text-center mt-3">
            LogIn
            <span>
              <BsKeyFill />
            </span>
          </h2>
        </div>
        <div className="card-body">

            <div className="form-group my-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group my-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={e => SetPassword(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" onClick={submitForm} className="btn btn-primary btn-lg btn-block mx-3 my-3">
                login
              </button>
            </div>

            <Link to="/Register" type="submit" className="mx-3 my-3" >
                  create new account
            </Link>
     
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Login;
