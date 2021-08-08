import React from "react";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBAnimation,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBIcon,
} from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";
import RecentCard from "./RecentCard";

// removeTag

const removeTag = (description) => {
  const regex = /(<([^>]+)>)/gi;
  const regex2 = /(&([a-z]+);)/gi;
  return description.replace(regex, "").replace(regex2, "");
};

const BlogCard = (props) => {
  return (
    <div style={{ margin: "30px 0 30px 0" }}>
      <MDBJumbotron style={{ padding: 0 }} key={props.id}>
        <MDBCard
          className="text-white fw-bold bg-cover text-center "
          style={{ backgroundImage: `url("${props.data.image}")` }}
        >
          <MDBCol className="py-5 rgba-black-strong ">
            <MDBAnimation type="bounce" infinite>
              <h1 className="fw-bold">{props.data.category[0].name}</h1>
            </MDBAnimation>
            <MDBCardTitle className="h1-responsive fw-bold pt-3 m-5 font-bold">
              {props.data.title}
            </MDBCardTitle>
            <p className="mx-5 mb-5">
              {removeTag(props.data.description).toString().substring(0, 400)}
              {removeTag(props.data.description).toString().length > 400 &&
                "..."}
            </p>
            <p className="text-uppercase">
              Created By 
              <span className="ml-2 text-white">
                {props.data.author.username}
              </span>,{" "}
              <span className="font-weight-bold dark-whites-text">
                <MDBIcon far icon="clock" className="pr-2" />
                {moment(props.data.created).format("MMMM Do YYYY")}
              </span>
            </p>
            <Link to={`${props.data.slug}`}>
              <MDBBtn outline color="white" className="mb-5">
                <MDBIcon icon="clone" className="mr-2"></MDBIcon> View More
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBCard>
      </MDBJumbotron>
    </div>
  );
};

export default BlogCard;
