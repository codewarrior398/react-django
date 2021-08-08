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
} from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";

// removeTag

const removeTag = (description) => {
  const regex = /(<([^>]+)>)/gi;
  const regex2 = /(&([a-z]+);)/gi;
  return description.replace(regex, "").replace(regex2, "");
};

const TopCard = (props) => {
  return (
    <MDBCard className="my-4">
      <MDBCardBody>
        <MDBRow className="">
          <MDBCol lg="5" xl="4" className="d">
            <MDBView hover className=" z-depth-1-half mb-lg-0 mb-4">
              <div style={{height:"200px", position:"relative"}}>
              <img className="img-fluid" src={props.data.image} alt="" style={{overflow:"hidden",maxWidth:"350px"}} />
              </div>
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h5 className="fw-bold mb-3 p-0">{props.data.title}</h5>
            <p className="dark-grey-text">
              {removeTag(props.data.description).toString().substring(0, 100)}
              {removeTag(props.data.description).toString().length > 100 &&
                "..."}
            </p>
            <p>
              by{" "}
              <a href="#!" className="font-weight-bold">
                {props.data.author.username}
              </a>
              ,{" "}
              <span className="font-weight-bold dark-grey-text">
                <MDBIcon far icon="clock" className="pr-2" />
                {moment(props.data.created).format("MMMM Do YYYY")}
              </span>
            </p>
            <Link to={`${props.data.slug}`}>
              <MDBBtn outline color="primary" className="mb-5">
                <MDBIcon icon="clone" className="mr-2"></MDBIcon> View More
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};
export default TopCard;
