import React, { useState, useEffect } from "react";
import "./Home.scss";
import axios from "axios";
import { BLOG_URL } from "../../utils/urls";
import Skeleton from "react-loading-skeleton";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import BlogCard from "../../common/BlogCard";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import TopCard from "../../common/TopCard";
import moment from "moment";
import { Link } from "react-router-dom";
import TopBlog from "../../common/TopBlog";

const Home = () => {
  const [fetching, setFetching] = useState(true);
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    getBlogContent();
  }, []);

  const getBlogContent = () => {
    axios
      .get(BLOG_URL)
      .then((res) => {
        setBlogList(res.data);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeTag = (description) => {
    const regex = /(<([^>]+)>)/gi;
    const regex2 = /(&([a-z]+);)/gi;
    return description.replace(regex, "").replace(regex2, "");
  };
  return (
    <div>
      <Header />
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="8">
            {fetching ? (
              <>
               <div className="mt-4">
               <Skeleton height={500} />
               </div>
              </>
            ) : (
              <div>
                {blogList.results.slice(0, 1).map((item, id) => (
                  <BlogCard id={id} data={item} />
                ))}
                
              </div>
            )}
            <div>
            <div className="row equal">
                  <div className="my-5">
                    <h3 className="text-danger fw-bold">Recent Posts</h3>{" "}
                    <hr className="text-danger w-25" />
                  </div>
                  {fetching ? (
                    <>
                   <div className="col-lg-4">
                      <div>
                      <Skeleton height={250}/>
                      </div>
                      <p>
                      <Skeleton width={100} height={25}/>
                      </p>
                      <p>
                        <Skeleton width={200} height={25}/>
                      </p>
                      <p>
                        <Skeleton width={300} height={20}/>
                      </p>
                      <p>
                        <Skeleton count={2} height={20}/>
                      </p>
                      <p>
                        <Skeleton width={150} height={40} />
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <div>
                      <Skeleton height={250}/>
                      </div>
                      <p>
                      <Skeleton width={100} height={25}/>
                      </p>
                      <p>
                        <Skeleton width={200} height={25}/>
                      </p>
                      <p>
                        <Skeleton width={300} height={20}/>
                      </p>
                      <p>
                        <Skeleton count={2} height={20}/>
                      </p>
                      <p>
                        <Skeleton width={150} height={40} />
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <div>
                      <Skeleton height={250}/>
                      </div>
                      <p>
                      <Skeleton width={100} height={25}/>
                      </p>
                      <p>
                        <Skeleton width={200} height={25}/>
                      </p>
                      <p>
                        <Skeleton width={300} height={20}/>
                      </p>
                      <p>
                        <Skeleton count={2} height={20}/>
                      </p>
                      <p>
                        <Skeleton width={150} height={40} />
                      </p>
                    </div>
                    
                    </>
                  ):(
                    <>
                      {blogList.results.slice(1, 4).map((item, id) => (
                    <div className="col-lg-4 col-md-12 mb-lg-0 mb-4">
                      <div class="view overlay rounded z-depth-2 mb-4">
                        <div style={{ height: "250px" }}>
                          <img
                            class="img-fluid"
                            src={item.image}
                            alt="Sample image"
                            style={{ overflow: "hidden", maxWidth: "450px" }}
                          />
                        </div>
                        <a>
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </div>

                      <a href="#!" class="pink-text">
                        <h6 class="font-weight-bold mb-3">
                          <i class="fas fa-map pr-2"></i>
                          {item.category[0].name}
                        </h6>
                      </a>

                      <h4 class="font-weight-bold mb-3">
                        <strong>{item.title}</strong>
                      </h4>

                      <p>
                        by{" "}
                        <a class="font-weight-bold text-uppercase">
                          {item.author.username}
                        </a>
                        ,{" "}
                        <span className="font-weight-bold dark-grey-text">
                          <MDBIcon far icon="clock" className="pr-2" />
                          {moment(item.created).format("MMMM Do YYYY")}
                        </span>
                      </p>

                      <p class="dark-grey-text">
                        {removeTag(item.description)
                          .toString()
                          .substring(0, 100)}
                        {removeTag(item.description).toString().length > 100 &&
                          "..."}
                      </p>

                      <Link to={`${item.slug}`}>
                        <a class="btn btn-pink btn-rounded btn-md">Read more</a>
                      </Link>
                    </div>
                    
                  ))}
                      </>
                  )}
                </div>
            </div>
          </MDBCol>
          <MDBCol md="4">
          <div className="mt-4">
                  <h3 className="text-danger fw-bold">Top Posts</h3>
                  <hr className="text-danger w-25" />
                </div>
            {fetching ? (
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
            ) : (
              <div>
                

                <TopBlog />
              </div>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Footer />
    </div>
  );
};

export default Home;
