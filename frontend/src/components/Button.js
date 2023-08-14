import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";

const Button = ({ setUpdateUI }) => {
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    formData.append("title", title)
    
    axios
      .post("http://localhost:5000/api/save", formData)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <label className="button" htmlFor="file_picker">
      <AiFillPlusCircle />
      <input
        hidden
        type="file"
        name="file_picker"
        id="file_picker"
       
        onChange={(e) => handleChange(e)}
      />
    
    
    </label>
  
  </>
  );
};

export default Button;