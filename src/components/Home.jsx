import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


const Home = () => {
  return (
    <>
      <Navbar className="bg-body-primary">
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar
        style={{
          backgroundColor: "pink",
          height: "5vh",
          boxShadow: "3px 3px 3px 3px grey",
        }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: "9%",
            backgroundColor: "purple",
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
            <p style={{ margin: "auto" }}>customer</p>
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

    <form action="form">
    <h3
            style={{ color: "#721217", fontSize: "20px", fontWeight: "bolder" }}
          >
            Personal details
          </h3>{" "}
          <hr />
          <label htmlFor="Name" style={{ marginLeft: "30px" ,fontWeight :'bold' }}>
            Name*
          </label>
          <input
            type="text"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' , boxShadow : '1px 1px 1px 1px grey', width : '7vw'}}
            placeholder="Title"
          />{" "}
          <input
            type="text"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' ,width :'19vw' , boxShadow : '1px 1px 1px 1px grey'}}
            placeholder="First Name "
          />{" "}
          <input
            type="text"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' ,width : '29vw', boxShadow : '1px 1px 1px 1px grey' }}
            placeholder="Last Name "
          />
          <br /> <br />
          <label htmlFor="Join Date" style={{ marginLeft: "30px" , fontWeight : 'bold'}}>
            Join date*
          </label>
          <input
            type="date"
            style={{marginLeft: "30px" ,border : '2px solid #721217' ,width :'10vw' , boxShadow : '1px 1px 1px 1px grey' }}
            placeholder="Enter join date"
          />
          <br /> <br />
          <label htmlFor="number" style={{ marginLeft: "30px" , fontWeight : 'bold' }}>
            Contact no*
          </label>
          <input
            type="number"
            style={{ marginLeft: "22px" ,border : '2px solid #721217' ,width :'19vw' , boxShadow : '1px 1px 1px 1px grey' }}
            placeholder="contact number"
          />
          <label htmlFor="number" style={{ marginLeft: "30px", fontWeight : 'bold' }}>
            Alternate no*
          </label>
          <input
            type="number"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' ,width :'19vw' , boxShadow : '1px 1px 1px 1px grey'}}
            placeholder="alternate number"
          />
          <br /> <br />
          <label htmlFor="email" style={{ marginLeft: "30px" ,fontWeight : 'bold'}}>
            Email*
          </label>
          <input
            type="email"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' ,width :'19vw' , boxShadow : '1px 1px 1px 1px grey'}}
            placeholder="Enter email"
          />{" "}
          <br /> <br /> 

          <h3
            style={{ color: "#721217", fontSize: "20px", fontWeight: "bolder" }}
          >
            Address details
          </h3>
          <hr />
          <label htmlFor="Name" style={{ marginLeft: "30px" ,fontWeight :'bold' }}>
            Address*
          </label>
          <input
            type="text"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' , boxShadow : '1px 1px 1px 1px grey', width : '67vw'}}
            placeholder="Address line no.1"
          /> <br /> <br />
          <input
            type="text"
            style={{ marginLeft: "130px" ,border : '2px solid #721217' , boxShadow : '1px 1px 1px 1px grey', width : '67vw'}}
            placeholder="Address line no.2"
          />{" "}
          
          
         
          <br /> <br />
          <label htmlFor="number" style={{ marginLeft: "30px" , fontWeight : 'bold' }}>
            Contact no*
          </label>
          <input
            type="number"
            style={{ marginLeft: "22px" ,border : '2px solid #721217' ,width :'19vw' , boxShadow : '1px 1px 1px 1px grey' }}
            placeholder="contact number"
          />
          <label htmlFor="number" style={{ marginLeft: "30px", fontWeight : 'bold' }}>
            Alternate no*
          </label>
          <input
            type="number"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' ,width :'19vw' , boxShadow : '1px 1px 1px 1px grey'}}
            placeholder="alternate number"
          />
          <br /> <br />
          <label htmlFor="email" style={{ marginLeft: "30px" ,fontWeight : 'bold'}}>
            Email*
          </label>
          <input
            type="email"
            style={{ marginLeft: "30px" ,border : '2px solid #721217' ,width :'19vw' , boxShadow : '1px 1px 1px 1px grey'}}
            placeholder="Enter email"
          />{" "}
          <br /> <br /> 
    </form>
       
    </>
  );
};

export default Home;
