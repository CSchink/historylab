import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBSmoothScroll,
  MDBContainer 
} from "mdbreact";
import ScrollSpyPage from "./carousel";
import YouTubeTutorial from "./youtube";
import "../index.css";

const BlogPage = () => {
  return (
    
    <div>
      <MDBCard className="my-5 px-5">
        <MDBCardBody color="blue">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Welcome to the SOTT Lab Tutorial
          </h2>
        </MDBCardBody>
        
      </MDBCard>
      <MDBCard className="my-5 px-5">
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4">
        <img
          className="img-fluid"
          src={require("../assets/lighthouse.jpg")}
          alt=""
        />
        <a href="#!">
          <MDBMask overlay="white-slight" />
        </a>
      </MDBView>
        <MDBCardBody>
          {/* <MDBRow>
            <MDBCol fluid>
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src={require("../assets/lighthouse.jpg")}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
      
      </MDBRow> */}
      <div style={{textAlign: 'center'}}>
      <MDBSmoothScroll to="section1">Watch the Tutorial</MDBSmoothScroll>
      <MDBSmoothScroll to="section2">Data Entry and Structure</MDBSmoothScroll>
      </div>
      </MDBCardBody>
      
      <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">

            <div style={{ fontWeight: "italic" }}>
              {/* <h2 className="font-weight-bold mb-3 p-0">
                <strong>Welcome to SOTT Lab</strong>
              </h2> */}
              <h2 className='text-center'>About</h2>
              <br></br>
              <p>
                This page is meant to provide both a practical and a theoretical
                overview of the state of this project, its intentions, as well
                as how best to use it.
              </p>
              <p>
                Of course the project is in <strong>Beta</strong> mode so it
                follows that there's lots of room for growth.
              </p>
              <p>The purpose of this research project has been as follows:</p>
              <ul>
                <li>Investigate Ponerology</li>
                <li>Build a tool useful for editors seeking to:</li>
                <ul>
                  <li>Prepare for radio shows</li>
                  <li>Keep track of recent developments</li>
                  <li>Write comments and articles</li>
                </ul>
                <li>
                  Incorporate data science, especially machine learning, into
                  our analysis
                </li>
                <li>
                  Organize the deluge of data available on SOTT for SOTT editors
                  and, potentially, for posterity.
                </li>
                <li>
                  Integrate information from books, research articles, and news
                  articles into one area for a 'really big book'
                </li>
              </ul>
            </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
            <br></br>
            {/* <MDBCol lg="5" className="float-right">
              <YouTubeTutorial />
            </MDBCol> */}
          
        

        {/* <p>
        I hope you find it useful as well. Please read on for more info, or
        enjoy the tutorial below
      </p>
      <br></br>
      <h1 style={{textAlign:'center', fontWeight:'bold'}}>Tags</h1>
      <br></br>
      <p>
        As you peruse the database you'll notice a tagging system has been
        implemented. There are three categories of tags, each with their own
        specific usefulness.
      </p>
      <br></br>
      <h3>Cultural Tags</h3>
      <br></br>
      <p>
        The cultural tags are meant to help dissect the various cultural
        instincts across history. They are for the purpose of testing and
        refining a general theory on the various "centers of gravity" each given
        culture may have, as well as ascertaining multi-level distinctions
        between said centers across various culture. As such they may or may not
        prove generally useful for the general user.
      </p>
      <br></br>
      <h3>Ponerology Tags</h3>
      <br></br>
      <p>
        These tags are meant to assign the Theory of Political Ponerology to the
        observations of the historian. As Lobaczewski worked with the Communist
        and Nazi forces during the early-to-mid 20th century it falls to us to
        continue to test his theory both today and to apply it to history, using
        the present to repair the past and prepare the future..{" "}
      </p> */}
        {/* <br></br>
      <h3></h3>
      <br></br> */}

        {/* <h1 style={{textAlign:'center', fontWeight:}}>Tutorial</h1>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "white",
          paddingTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <YouTubeTutorial />
      </div> */}
      
      <h3 className="h3-responsive font-weight-bold text-center my-5">
            Watch the Tutorial
          </h3>
        
        <MDBCardBody className='text-center'>
          <YouTubeTutorial />
          </MDBCardBody>
        
          <h3 className="h3-responsive font-weight-bold text-center my-5">
            Introduction to the Tagging System
          </h3>
        
      
          <ScrollSpyPage />
   
        
          

      </MDBCard>
    </div>
   
  );
};

export default BlogPage;
