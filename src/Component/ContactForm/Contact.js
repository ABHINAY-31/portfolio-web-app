import React from "react";
import "./Contact.css";
import { useState } from "react";

export default function Contact() {
    const addData = (e) => {
        e.preventDefault();
        let formdata = new FormData();
        console.log("data gathered")
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Information</h1>
        <form onClick={addData} >
            <div className="name-field">
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="First Name" />
            </div>
            <input type="text" placeholder="Email"  width="90%"/>
            <textarea name="" id="" cols="100" rows="10" placeholder="Enter the Info"></textarea>
            <button>Submit</button>
        </form>
    </div>
  );
}
