import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Https from "../Https";
import { ToastContainer, toast } from "react-toastify";

const Users = () => {
  // تعريف المستخدمين
  const [Users, setUser] = useState([]);

  // الانتظار لتحميل الصفحة
  useEffect(() => {
    //تاخير تحميل الصفحة
    setTimeout(() => {
      getAllUsers();
    }, 1000);
  }, []);

  // تشغيل الفانكشن بعد تحميل الصفحة
  let getAllUsers = async () => {
    await Https.get("/users").then((res) => {
      setUser(res.data);
    });
  };

  //فانكشن الحذف
  let deleteUser = async (id) => {
    await Https.delete("/users/" + id).then((res) => {
      //ثم نقوم بعرض كافة المستخدمين
      getAllUsers();

      // عرض اشعار الحذف
      toast.error("تم الحذف  بنجاح", {
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
        <table className="table text-center">
          <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Opration</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/*  بداية تمرير البيانات ضمن الجدول  */}
            {Users.map((x, index) => (
              <tr key={x.id}>
                <td>{index}</td>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>
                  <Link
                    className={"btn btn-cm px-2 mx-2 btn-outline-warning"}
                    to={"/Users/Edit-User/" + x.id}
                  >
                    Edit
                  </Link>
                  <button
                    className={"btn btn-cm px-2 mx-2 btn-outline-danger"}
                    onClick={() => {
                      deleteUser(x.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {/*  نهاية تمرير البيانات ضمن الجدول  */}
          </tbody>
        </table>
      </div>

      {/*  بداية عرض لوحة الاشعارات */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/*  نهاية عرض لوحة الاشعارات */}
    </motion.div>
  );
};

export default Users;
