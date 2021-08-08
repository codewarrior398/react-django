import axios from "axios";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { SIMILAR_BLOG_URL, TOP_BLOG_URL } from "../utils/urls";
import TopCard from "./TopCard";
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
import { Link } from "react-router-dom";
import moment from "moment";

const TopBlog = (props) => {
  const [topBlogs, setTopBlogs] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(props.similar ? SIMILAR_BLOG_URL + props.id: TOP_BLOG_URL)
      .then((res) => {
        setTopBlogs(res.data);
        setFetching(false);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeTag = (description) => {
    const regex = /(<([^>]+)>)/gi;
    const regex2 = /(&([a-z]+);)/gi;
    return description.replace(regex, "").replace(regex2, "");
  };

  if (fetching){
    return<>
    <>
                <div className="row">
                  <div className="col-lg-4">
                  <Skeleton height={211}/>
                  </div>
                  <div className="col-lg-8">
                  <Skeleton height={30}/><br/><br/>
                  <p>
                  <Skeleton height={20}/>
                  <Skeleton height={20}/>
                  </p>
                  <p>
                    <Skeleton height={30} width={300} />
                  </p>
                  <p>
                    <Skeleton height={40} width={200} />
                  </p>
                
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                  <Skeleton height={211}/>
                  </div>
                  <div className="col-lg-8">
                  <Skeleton height={30}/><br/><br/>
                  <p>
                  <Skeleton height={20}/>
                  <Skeleton height={20}/>
                  </p>
                  <p>
                    <Skeleton height={30} width={300} />
                  </p>
                  <p>
                    <Skeleton height={40} width={200} />
                  </p>
                
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                  <Skeleton height={211}/>
                  </div>
                  <div className="col-lg-8">
                  <Skeleton height={30}/><br/><br/>
                  <p>
                  <Skeleton height={20}/>
                  <Skeleton height={20}/>
                  </p>
                  <p>
                    <Skeleton height={30} width={300} />
                  </p>
                  <p>
                    <Skeleton height={40} width={200} />
                  </p>
                
                  </div>
                </div>
              </>
</>
  }
  else{
    {return topBlogs.length  < 1?(
      <h4>No {props.similar ? "related": "top"} post not found!</h4>
    ):(
      topBlogs.slice(0,3).map((item, id) => (
        <MDBCard className="my-4">
      <MDBCardBody>
        <MDBRow className="">
          <MDBCol lg="5" xl="4" className="d">
            <MDBView hover className=" z-depth-1-half mb-lg-0 mb-4">
              <div style={{height:"200px", position:"relative"}}>
              <img className="img-fluid" src={item.image} alt="" style={{overflow:"hidden",maxWidth:"350px"}} />
              </div>
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h5 className="fw-bold mb-3 p-0">{item.title}</h5>
            <p className="dark-grey-text">
              {removeTag(item.description).toString().substring(0, 100)}
              {removeTag(item.description).toString().length > 100 &&
                "..."}
            </p>
            <p>
              by{" "}
              <a href="#!" className="font-weight-bold">
                {item.author.username}
              </a>
              ,{" "}
              <span className="font-weight-bold dark-grey-text">
                <MDBIcon far icon="clock" className="pr-2" />
                {moment(item.created).format("MMMM Do YYYY")}
              </span>
            </p>
            <Link to={`/${item.slug}`}>
              <MDBBtn outline color="primary" className="mb-5">
                <MDBIcon icon="clone" className="mr-2"></MDBIcon> View More
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
      ))
    )}
  }
    
};

export default TopBlog;
