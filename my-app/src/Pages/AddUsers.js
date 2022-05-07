import React, { useState } from "react";
import { motion } from "framer-motion";
import Https from "../Https";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddUsers = () => {
  // تعريف متغير اعادة التوجيه بعد الاضافة
  const Navigate = useNavigate();

  // تعريف المدخلات
  const [inputs, setInputs] = useState({});

  // تغيرات المدخلات
  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // فانكشن الرفع
  const submitForm = () => {
    Https.post("/users", inputs).then((res) => {
      //اعادة التوجيه الى صفحة المستخدمين
      Navigate("/Users/Users-Data");

      // عرض اشعار الاضافة
      toast.success("تم الاضافة بنجاح", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    });
  };

  return (
    <motion.div
      style={{ posation: "fixed" }}
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0, x: 0 }}
    >
      <div>
        <div className="mb-3">
          <label className="form-label">Enter Your Name :</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={inputs.name || ""}
            onChange={handelChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Your Email :</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={inputs.email || ""}
            onChange={handelChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Enter Your Password :</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={inputs.password || ""}
            onChange={handelChange}
          />
        </div>

        <div className="mb-3">
          <button onClick={submitForm} className="btn btn-primary px-4 ">
            Create
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AddUsers;
