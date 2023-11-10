import {useNavigate, useParams} from "react-router-dom";
import icecreamdata from "./icecreamdata";
import axios from 'axios'
import { useState } from "react";
function Success()
{
    const {id}=useParams();
    const icedata=icecreamdata.find((ele)=>ele.id==id);
    const [customerData,setCustomerData]=useState({
        name:"",
        email:"",
        phoneNo:"",
        date:"",
        time:"",
        item:icedata,
    })
      const msg="hi";
  
    const a=useNavigate()
    function get(e)
    { 
        e.preventDefault();
        axios.post("http://localhost:5000/orderDetails",customerData).then((res)=> console.log(res.data))
       alert("successfully submited")
       a("/success")
       console.log(customerData);
    }
    const handleChange=(e)=>{
             setCustomerData({...customerData,
                [e.target.name]:e.target.value})
    }
    return(
        < div id="detail2">
        <div>
<h1 id="detail">Please enter your details to make your order fix</h1>
        </div>
        <form id="detail1" onSubmit={get}>
          <b id="detail4">Name :</b><input type="text" name="name"id="detail3" value={customerData.name} onChange={handleChange} required/><br></br>
         <b id="detail4"> email:</b><input type="email"id="detail3" value={customerData.email} name="email" onChange={handleChange} required/><br></br>
         <b id="detail4"> Phoneno:</b><input type="tel"id="detail3" value={customerData.phoneNo} name="phoneNo" onChange={handleChange} required/><br></br>
         <b id="detail4"> Day:</b><input type="date"id="detail3" value={customerData.date} name="date" onChange={handleChange} required/><br></br>
         <b id="detail4">time:</b><input type="time"id="detail3" value={customerData.time} name="time" onChange={handleChange} required/><br></br>
         <b id="detail5"></b><input type="submit"id="detail5"/><br></br>
        </form>
        {/* <button onClick={get}>go back</button> */}
        </div>
    )
}
export default Success;