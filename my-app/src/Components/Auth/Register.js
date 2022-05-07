import React from "react";
import { BsKeyFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'
const Register = () => {


  
  return (
    <motion.div 
    style={{ posation:"fixed"}}
    initial={{opacity:0 , y:0}}
    animate={{opacity:1 , y:60 ,transition:{duration:1}}}
    exit={{opacity:0 , y:0}}
  >
    <div>
      <div className="row mt-5">
        <div className="card  col-md-4 offset-md-4 ">
          <div>
            <h2 className="text-center mt-3">
            Register New Username <span><BsKeyFill /></span>
            </h2>
          </div>
          <div className="card-body">

            <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </div> 

              <div className="form-group my-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Username "
                />
              </div>
              <div className="form-group my-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group my-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-block btn-warning mx-3 my-3">
                Register
                </button> 
              </div>

              <Link to="/Login" type="submit" className="mx-3 my-3" >
                  I can alredy account .. login 
              </Link>
         
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Register;
