import React,{useState} from 'react'
import "../index.css"

import axios from "axios";
const Addemployee = () => {

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        address: "",
        position: "",
        image:"",
        phone: "",
        
      });
      
      const submitHandler = async (e) => {
        e.preventDefault();
    
        const { name, email, address, position, image,phone } = credentials;
    
        const formData = new FormData();
    
        formData.append("image", image);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("position", position);
        formData.append("phone", phone);
        
        console.log(formData);
    
        await axios
          .post("http://localhost:4000/dashboard/addemployee", {name,email,position,phone,image,address})
          .then((res) => {
            console.log(res);
            alert("employee added");
          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
          });
      };
    
      const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
    
    return (<>
    
        <div className='d-flex flex-column align-items-center shadow course-container'>
        <h2 className="head-medicineTaken" style={{marginTop:"-23px",marginBottom:"10px",borderRadius:"10px"}}>Add New Employee Details</h2>
            
            <div className="container">
  <form>
    <div className="row">
      <div className="col-25">
        <label for="fname"> Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="fname" name="name"  value={credentials.name}
                onChange={onChange} placeholder="Your name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="fname">Position</label>
      </div>
      <div className="col-75">
        <input type="text" id="pname" name="position"
         value={credentials.position}
         onChange={onChange} placeholder="Your position.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">email</label>
      </div>
      <div className="col-75">
        <input type="email" id="ename" name="email" 
         value={credentials.email}
         onChange={onChange} placeholder="Your email.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">Phone</label>
      </div>
      <div className="col-75">
        <input type="number" id="nname" name="phone"
         value={credentials.phone}
         onChange={onChange} placeholder="Your phone number.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="lname">Image</label>
      </div>
      <div className="col-75">
        <input type="file" id="iname" name="image"
         value={credentials.image}
         onChange={onChange}  placeholder="Your Image.."/>
      </div>
    </div>
    
    <div className="row">
      <div className="col-25">
        <label for="lname">Address</label>
      </div>
      <div className="col-75">
        <input type="text" id="aname" name="address" 
         value={credentials.address}
         onChange={onChange} placeholder="Your Address.."/>
      </div>
    </div>
   
    <div className="row">
      <input type="submit" onClick={submitHandler} value="Submit"/>
    </div>
  </form>
</div>

        </div></>
    )
}

export default Addemployee