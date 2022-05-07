import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from 'framer-motion'
const NavUsers = () => {
  return (
    <motion.div 
    style={{ posation:"fixed"}}
    initial={{opacity:0 , x:0}}
    animate={{opacity:1 , x:30 ,transition:{duration:1}}}
    exit={{opacity:0 , x:0}}
  >
    <div>
      <div className="card mt-5">
        <div className="card-header d-flex justify-content-between">
          <div>
            <h3> Applcation laravel and React </h3>
          </div>
          
          <div>
            <Link className="btn mx-2 btn-primary" to={"Users-Data"}>
              Users
            </Link>

            <Link className="btn mx-2 btn-primary" to={"Add-user"}>
              Add Users
            </Link>
          </div>
        </div>
        <div className="card-body">
          <Outlet />
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default NavUsers;
