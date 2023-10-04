import React, { useState } from "react";
import Footer from "../components/Shared/Footer";
import HomeHeader from "./Home/Home/HomeHeader/HomeHeader";
import axios from "axios";

const Remedy = () => {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState();
  const [toggle, setToggle] = useState(true);
  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/generation",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2E0ODk0MjktZGIwMS00YzMyLTgwNmYtZmI3YzgyMzkzMWYzIiwidHlwZSI6ImFwaV90b2tlbiJ9.zb2xQc9BJybAGp0EX3fDuDjtvTB-_Uqe5NZ16wDW9Hg",
    },
    data: {
      providers: "openai",
      text: toggle
        ? `i am a 4 month women having ${prompt} give me some home remedies in desi indian solutions, only state the solution in less than 2 lines`
        : `i am a women having a 2 month baby suffering from ${prompt} give me some home remedies in desi indian solutions, only state the solution in less than 2 lines`,
      temperature: 0.3,
      max_tokens: 250,
    },
  };

  const handleClick = () => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <HomeHeader />
      <div style={{ textAlign: "center", fontSize: "35px" }}>
        We can solve all of your problem just type the query and make it go away
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {toggle ? (
          <div style={{ flex: 1 }}>
            If you are pregnant and have any problem then type it and we will
            help
            <div style={{ width: "300px", height: "400px" }}>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button onClick={handleClick}>submit</button>
            </div>
          </div>
        ) : (
          <div style={{ flex: 1 }}>
            If your child is having any problem then type it and we will help
            <div style={{ width: "300px", height: "400px" }}>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button onClick={handleClick}>submit</button>
            </div>
          </div>
        )}
      </div>
      {data?.openai.generated_text}
      <Footer />
    </>
  );
};

export default Remedy;
