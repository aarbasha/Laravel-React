import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Https from "../Https";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditUsers = (props) => {
  // تعرف ثابت لاعادة التوجيه بعد التعديل
  const Navigate = useNavigate();

  // تعريف المدخلات
  const [inputs, setInputs] = useState({});

  //فانكشن تمرير المعرف الخاص بلمستخدم
  const { id } = useParams();

  // تحميل صفحة وتشغيل فانكشن داخلها
  useEffect(() => {
    getUser();
  }, []);

  // تشغيل الفانكشن السابقة
  let getUser = () => {
    Https.get("/users/" + id + "/edit").then((res) => {
      setInputs({
        name: res.data.name,
        email: res.data.email,
      });
    });
  };
  // فانكشن الخاصة بلادخلات
  const handelChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  // فانكشن الخاصة بلرفع
  const submitForm = () => {
    Https.post("/users/" + id, inputs).then((res) => {
      Navigate("/Users/Users-Data");

      //فانكشن تشغيل تعديل
      toast.info("تم التعديل  بنجاح", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
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
          {/* زر التعديل */}
          <button onClick={submitForm} className="btn btn-outline-info px-4 ">
            Update
          </button>

          {/* زر العودة */}
          <Link
            to={"/Users/Users-Data"}
            className="btn btn-outline-dark mx-4 px-4 "
          >
            Back
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default EditUsers;
