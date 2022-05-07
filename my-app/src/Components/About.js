import React from "react";
//alert notfcation
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

// toast.configure();

const About = () => {
  const notify = () =>
    toast.success("تمت الاضافة بنجاح", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:2000,
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 50, transition: { duration: 1 } }}
      exit={{ opacity: 0, y: 0 }}
    >
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>
    </motion.div>
  );
};

export default About;
