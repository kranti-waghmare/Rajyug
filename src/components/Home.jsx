import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Sidebar from "./Sidebar";
import ring from "../assets/ring.png";
import emp from '../assets/emp.png';


const Home = () => {
  return (
    <>
    <Sidebar/>
      <Navbar className="bg-body-primary" style={{height : '10vh'}}>
        <Container>
          <Navbar.Brand href="#home"><img src={ring}  height={70} width={70} alt="" /></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <img src={emp} height={30} width={30} style={{marginLeft : '10%'}} alt="" />
              <h3 style={{color : '#721217' }}>Mr.Sanjay</h3>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar
        style={{
          backgroundColor: "#FFCFF1",
          height: "5vh",
          boxShadow: "3px 3px 3px 3px grey",
          marginLeft : '5%'

        }}
      >

        <div style={{marginLeft : '-15px'}}>
        <div
          style={{
            display: "flex",
            marginLeft: "9%",
            backgroundColor: "FF007F",
            borderTopRightRadius: "50px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              color: "#721217",
              borderTopRightRadius: "50px",
              marginTop: "7px",
              height: "4.3vh",
              width: "110px",
              paddingLeft: "20px",
              
              
            }}
          >
            <p style={{  }}>customer</p>
          </div>
          <div
            style={{
              backgroundColor: "rgb(249, 167, 249); !important",
              color: "#721217",
              height: "5vh",
              width: "150px",
              paddingLeft: "20px",
            }}
          >
            <p style={{ marginTop: "5px" }}>company</p>
        </div>
        
          </div>
        </div>
      </Navbar>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "start",
          width: "57vw",
        }}
      >
        <div>
          <input type="radio" style={{ marginRight: "10px" }} />
          <label
            htmlFor="text"
            style={{ color: "#721217", fontWeight: "bold" }}
          >
            Individual
          </label>
        </div>
        <div>
          <input type="radio" style={{ marginRight: "10px" }} />
          <label
            htmlFor="text"
            style={{ color: "#721217", fontWeight: "bold" }}
          >
            Reseller
          </label>
        </div>
        <div>
          <input type="radio" style={{ marginRight: "10px" }} />
          <label
            htmlFor="text"
            style={{ color: "#721217", fontWeight: "bold" }}
          >
            Sales representative
          </label>
        </div>
      </div><br /> <br />
    
    
      {/* <div style={{ position: "absolute" }}>
        <label for="name">Name*:</label>
        <select
          style={{
            width: "7vw",
           
            marginLeft: "50px",
          }}
        >
          <input type="text" />
          <option value="kranti" style={{ color: "brown" }}>
            Title
          </option>
          <option value="pooja" style={{ color: "brown" }}>Name</option>
        </select>
        <div style={{height : '40px'}}>
         
          <img
            src="https://www.svgrepo.com/show/6500/down-arrow.svg"
            height={"10px"}
            width={"20px"}
            style={{ position: "absolute", height : '20px',right: "0",top:'1px', backgroundColor: "white" , color : 'white'}}
            alt=""
          />
          </div>
        
        </div><br /> */}
             <div style={{marginLeft : '10%'}}>
    <form action="form">
    <h3
            style={{ color: "#721217", fontSize: "20px", fontWeight: "bolder" }}
          >
            Personal details
          </h3>
          <hr /><br />
          <label htmlFor="Name" style={{ marginLeft: "30px" ,fontWeight :'bold' }}>
            Name*
          </label>
          <select   style={{ marginLeft: "10%" ,border : '2px solid #721217' , width : '7vw'}}
            placeholder="Title" >
            <option value="title">Title</option>
            <option value="title">Name</option>
          </select>
         
          <input
            type="text"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' ,width :'19vw' , }}
            placeholder="First Name "
          />{" "}
          <input
            type="text"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' ,width : '29vw',  }}
            placeholder="Last Name "
          />
          <br /> <br />
          <label htmlFor="Join Date" style={{ marginLeft: "30px" , fontWeight : 'bold'}}>
            Join date*
          </label>
          <input
            type="date"
            style={{marginLeft: "8%" ,border : '2px solid #721217' ,width :'10vw' ,  }}
            placeholder="Enter join date"
          />
          <br /> <br />
          <label htmlFor="number" style={{ marginLeft: "30px" , fontWeight : 'bold' }}>
            Contact no*
          </label>
          <select   style={{ marginLeft: "6.7%" ,border : '2px solid #721217' , width : '19vw'}}
            placeholder="Contact no" >
            <option value="title">Contact no</option>
            <option value="title">Number</option>
          </select>
          <label htmlFor="number" style={{ marginLeft: "30px", fontWeight : 'bold' }}>
            Alternate no*
          </label>
          <select   style={{ marginLeft: "30px" ,border : '2px solid #721217' ,  width : '19vw'}}
            placeholder="Alternate no" >
            <option value="title">Alternate no</option>
            <option value="title">Number</option>
          </select>
          <br /> <br />
          <label htmlFor="email" style={{ marginLeft: "30px" ,fontWeight : 'bold'}}>
            Email*
          </label>
          <input
            type="email"
            style={{ marginLeft: "10%" ,border : '2px solid #721217' ,width :'19vw' , }}
            placeholder="Enter email"
          />{" "}
          <br /> <br /> 

          <h3
            style={{ color: "#721217", fontSize: "20px", fontWeight: "bolder" }}
          >
            Address details
          </h3>
          <hr />
          <br />
          <label htmlFor="Name" style={{ marginLeft: "30px" ,fontWeight :'bold' }}>
            Address*
          </label>
          <input
            type="text"
            style={{ marginLeft: "8%" ,border : '2px solid #721217' ,  width : '67vw'}}
            placeholder="Address line no.1"
          /> <br /> <br />
          <input
            type="text"
            style={{ marginLeft: "16%" ,border : '2px solid #721217' ,  width : '67vw'}}
            placeholder="Address line no.2"
          />{" "}
          
          
         
          <br /> <br />
          <label htmlFor="number" style={{ marginLeft: "30px" , fontWeight : 'bold' }}>
            Country*
          </label>
          <select   style={{ marginLeft: "8%" ,border : '2px solid #721217' ,  width : '17vw'}}
            placeholder="Select Country" >
            <option value="title">Select Country</option>
            <option value="title">Name</option>
          </select>
          <label htmlFor="number" style={{ marginLeft: "30px", fontWeight : 'bold' }}>
            Pin/Post code*
          </label>
          <input
            type="number"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' ,width :'19vw' }}
            placeholder="Enter code"
          />
          <br /> <br />
          <label htmlFor="email" style={{ marginLeft: "35px" ,fontWeight : 'bold'}}>
            State*
          </label>
          <select   style={{ marginLeft: "9.5%" ,border : '2px solid #721217' ,  width : '17vw'}}
            placeholder="Title" >
            <option value="title">Select state</option>
            <option value="title">Name</option>
          </select>
          <label htmlFor="number" style={{ marginLeft: "30px", fontWeight : 'bold' }}>
            Landmark*
          </label>
          <input
            type="number"
            style={{ marginLeft: "60px" ,border : '2px solid #721217' ,width :'29vw' }}
            placeholder="Landmark"
          />
          <br /> <br />

          <label htmlFor="email" style={{ marginLeft: "30px" ,fontWeight : 'bold'}}>
            Region/Area*
          </label>
          <select   style={{ marginLeft: "5.2%" ,border : '2px solid #721217' , width : '17vw'}}
            placeholder="Title" >
            <option value="title">select Region/area</option>
            <option value="title">Name</option>
          </select> <br /> <br /> 

        <button style={{border : '1px solid #721217' , background : '#721217' , color : 'white' , padding : '5px' , width :'10vw' ,borderRadius : '7px' , marginLeft : '2.5%'}}>Add Address</button>
         
        <button style={{border : '1px solid #721217' , color : '#721217' , padding : '5px' , width :'7vw' ,borderRadius : '7px', marginLeft : '50%'}}>Cancel</button>

        <button style={{border : '1px solid #721217' , background : '#721217' , color : 'white' , padding : '5px' , width :'7vw',marginLeft : '20px' ,borderRadius : '7px'}}>Save</button>

        <br /> <br />
        <hr />
        


    </form>

</div>
       
    </>
  );
};

export default Home;
