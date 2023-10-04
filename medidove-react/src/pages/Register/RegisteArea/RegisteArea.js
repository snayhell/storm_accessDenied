import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const RegisteArea = () => {
  const { registerUser, googleSignIn } = useAuth();
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
  const [bp, setBp] = useState("");
  const [bt, setBt] = useState("");
  const [dateOfConception,setDateOfConception] = useState("");
  const [dateOfLastCheckup,setDateOfLastCheckup] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [prevPregnancy, setPrevPregnancy] = useState("");
  const [age, setAge] = useState("");
  const [prevMed, setPrevMed] = useState("");
  const { register, handleSubmit, reset } = useForm();
  
  const onSubmit = (data) => {
   
   console.log(name,email,password,bp,bt,dateOfConception,dateOfLastCheckup,dueDate,emergencyPhone,prevPregnancy,age,prevMed);
  };
  return (
    <>
      <section className="login-area pt-10 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Signup From Here</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="name" className="mb-2">
                    Username <span>**</span>
                  </label>
                  <input
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                    id="name"
                    type="text"
                    placeholder="Enter Username..."
                  />

                  <label htmlFor="email-id" className="mb-2">
                    Email Address <span>**</span>
                  </label>
                  <input
                  value={email}
                  onChange={ e => setEmail(e.target.value)}
                    required
                    id="email-id"
                    name="email"
                    type="text"
                    placeholder="Enter Username or Email address..."
                  />

                  <label htmlFor="pass" className="mb-2">
                    Password <span>**</span>
                  </label>
                  <input
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    required
                    id="pass"
                    name="password"
                    type="password"
                    placeholder="Enter password..."
                  />
                  <div style={{ display: "flex", gap: 10,width:"100%" }}>
                    <div style={{flex:1}}>
                      <label htmlFor="pass" className="mb-2">
                        Blood Pressure <span>**</span>
                      </label>
                      <input
                        value={bp}
                        onChange={(e)=>setBp(e.target.value)}
                        required
                        id="bp"
                        name="bp"
                        type="text"
                        placeholder="Enter blood pressure..."
                      />
                    </div>
                    <div style={{flex:1}}>
                      <label htmlFor="pass" className="mb-2">
                        Password <span>**</span>
                      </label>
                      <input
                        value={bt}
                        onChange={(e)=>setBt(e.target.value)}
                        required
                        id="bt"
                        name="bt"
                        type="text"
                        placeholder="Enter password..."
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10, width: "100%" }}>
  <div style={{ flex: 1 }}>
    <label htmlFor="dateOfConception" className="mb-2">
      Date of Conception
    </label>
    <input
      value={dateOfConception}
      onChange={(e) => setDateOfConception(e.target.value)}
      id="dateOfConception"
      name="dateOfConception"
      type="text"
      placeholder="Enter date of conception..."
    />
  </div>
  <div style={{ flex: 1 }}>
    <label htmlFor="dateOfLastCheckup" className="mb-2">
      Date of Last Checkup
    </label>
    <input
      value={dateOfLastCheckup}
      onChange={(e) => setDateOfLastCheckup(e.target.value)}
      id="dateOfLastCheckup"
      name="dateOfLastCheckup"
      type="text"
      placeholder="Enter date of last checkup..."
    />
  </div>
</div>

<div style={{ display: "flex", gap: 10, width: "100%" }}>
  <div style={{ flex: 1 }}>
    <label htmlFor="dueDate" className="mb-2">
      Due Date
    </label>
    <input
      value={dueDate}
      onChange={(e) => setDueDate(e.target.value)}
      id="dueDate"
      name="dueDate"
      type="text"
      placeholder="Enter due date..."
    />
  </div>
  <div style={{ flex: 1 }}>
    <label htmlFor="emergencyPhone" className="mb-2">
      Emergency Phone
    </label>
    <input
      value={emergencyPhone}
      onChange={(e) => setEmergencyPhone(e.target.value)}
      id="emergencyPhone"
      name="emergencyPhone"
      type="text"
      placeholder="Enter emergency phone..."
    />
  </div>
</div>

<div style={{ display: "flex", gap: 10, width: "100%" }}>
  <div style={{ flex: 1 }}>
    <label htmlFor="prevPregnancy" className="mb-2">
      Previous Pregnancy
    </label>
    <input
      value={prevPregnancy}
      onChange={(e) => setPrevPregnancy(e.target.value)}
      id="prevPregnancy"
      name="prevPregnancy"
      type="text"
      placeholder="Enter previous pregnancy..."
    />
  </div>
  <div style={{ flex: 1 }}>
    <label htmlFor="age" className="mb-2">
      Age
    </label>
    <input
      value={age}
      onChange={(e) => setAge(e.target.value)}
      id="age"
      name="age"
      type="text"
      placeholder="Enter age..."
    />
  </div>
</div>

<div style={{ display: "flex", gap: 10, width: "100%" }}>
  <div style={{ flex: 1 }}>
    <label htmlFor="prevMed" className="mb-2">
      Previous Medication
    </label>
    <input
      value={prevMed}
      onChange={(e) => setPrevMed(e.target.value)}
      id="prevMed"
      name="prevMed"
      type="text"
      placeholder="Enter previous medication..."
    />
  </div>
</div>
                  <div className="mt-10"></div>
                  <button
                    type="submit"
                    className="primary_btn theme-btn-2 w-100"
                  >
                    Register Now
                  </button>
                  <div className="or-divide">
                    <span>or</span>
                  </div>
                  <Link to="/login">
                    <button className="primary_btn btn-icon-green w-100">
                      login Now
                    </button>
                  </Link>
                </form>
                <div className="or-divide or-login">
                  <span>or login with </span>
                </div>
                <button onClick={() => googleSignIn()} className="login_btn">
                  <img src="img/icon/google_icon.svg" alt="google" />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisteArea;
