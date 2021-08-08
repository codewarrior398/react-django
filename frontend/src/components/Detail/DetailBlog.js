import React, { useState, useEffect, useContext } from "react";
import { MDBCol, MDBMask, MDBIcon, MDBView, MDBRow } from "mdbreact";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import axios from "axios";
import { BLOG_URL } from "../utils/urls";
import Skeleton from "react-loading-skeleton";
import moment from "moment";
import CommentForm from "../comment/CommentForm";
import Comment from "../comment/Comment";
import RecentCard from "../common/RecentCard";
import TopCard from "../common/TopCard";
import RelatedBlogs from "../common/RelatedBlog";
import TopBlog from "../common/TopBlog";

const DetailBlog = (props) => {
  const [fetching, setFetching] = useState(true);
  const [activeBlog, setActiveBlog] = useState(null);

  useEffect(() => {
    axios.get(BLOG_URL + props.match.params.slug).then(
      (res) => {
        setActiveBlog(res.data);
        setFetching(false);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);


  return (
    <div className="container-fluid">
      <Header />
      <br />
      {fetching ? (
        <MDBCol md="12" lg="8">
          <div className="mb-4">
            <Skeleton height={400} />
            <p>
              {" "}
              <br />
              <div className="float-left">
                <Skeleton height={40} width={250} />
              </div>
              <div className="float-right">
                <Skeleton height={40} width={250} />
              </div>
            </p>
            <br />
            <br />
            <p>
              <Skeleton height={50} width={800} />
            </p>
            <p>
              <Skeleton height={30} count={10} />
            </p>
          </div>
        </MDBCol>
      ) : (
        <MDBRow>
        <MDBCol md="12" lg="8">
          <div className="mb-4">
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <div
                className="bg-v"
                style={{
                  backgroundImage: `url("${!fetching && activeBlog.image}")`,
                }}
              />
              <a href="#!">
                <MDBMask overlay="white-slight" className="waves-light" />
              </a>
            </MDBView>
            <div className="d-flex justify-content-between">
              <a href="#!" className="deep-orange-text">
                <h6 className="font-weight-bold">
                  {activeBlog.category[0].name}
                </h6>
              </a>
              <p className="font-weight-bold dark-grey-text">
                <span className="font-weight-bold dark-whites-text">
                  <MDBIcon far icon="clock" className="pr-2" />
                  {moment(activeBlog.created).format("MMMM Do YYYY")}
                </span>
              </p>
            </div>

            <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
              {activeBlog.title}
            </h3>
            <div className="mb-3 dark-grey-text">
              Created by{" "}
              <span className="text-danger">{activeBlog.author.username}</span>{" "}
              <span className="font-weight-bold dark-whites-text">
                <MDBIcon far icon="clock" className="pr-2" />
                {moment(activeBlog.created).format("MMMM Do YYYY")}
              </span>
            </div>
            <p 
              dangerouslySetInnerHTML={{ __html: activeBlog.description }}
              className=" mb-lg-0 mb-md-5 mb-4"
            />
            <CommentForm id={activeBlog.id} />
            <div>
            <h1 class="comments-title">Comments ({activeBlog.comment_count})</h1>
            </div>
            <Comment id={activeBlog.id} />
          </div>
        </MDBCol>
        <MDBCol>
        <div>
        <div className="mt-4">
                  <h3 className="text-danger fw-bold">Related Posts</h3>
                  <hr className="text-danger w-25" />
                </div>
          <TopBlog similar id={activeBlog.id} />
        </div>
        </MDBCol>
        </MDBRow>
      )}

      <Footer />
    </div>
  );
};

export default DetailBlog;
