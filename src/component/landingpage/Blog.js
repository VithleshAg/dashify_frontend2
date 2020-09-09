import React, { Component } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-blog">
          <div className="container">
            <div className="blog-title">
              <h2 className="heading">Our Blogs</h2>
              <p>
                Find solutions to customer service, general inquiry, product
                problem, business <br />
                partnership, software upgrade, refund policy and any other
                issues related to Dashify
              </p>

              <ul>
                <li>September 2020</li>
                <li>
                  August 2020{" "}
                  <img src={require("../assets/arrow.png")} alt="" />
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-md-8 padding-right">
                <div className="blog-shadow">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={require("../assets/blog1.png")} alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="blog-descrition height-one">
                        <div className="latext">
                          <h5>
                            Google’s Latest API Update: Specify Service Items
                            for Your Business
                          </h5>
                          <p>
                            On April 27th 2020, Google launched version 4.6 of
                            its Google My Business (GMB) API for...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="blog-shadow">
                  <img src={require("../assets/blog-2.png")} alt="" />

                  <div className="blog-descrition height-two">
                    <div className="latext">
                      <h5>
                        Google’s Latest API Update: Specify Service Items for
                        Your Business
                      </h5>
                      <p>
                        On April 27th 2020, Google launched version 4.6 of its
                        Google My Business (GMB) API for...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="blog-shadow">
                  <img src={require("../assets/blog-3.png")} alt="" />
                </div>
              </div>

              <div className="col-md-4">
                <div className="blog-shadow">
                  <img src={require("../assets/blog-4.png")} alt="" />

                  <div className="blog-descrition height-two">
                    <div className="latext">
                      <h5>Specify Service Items for You </h5>
                      <p>
                        On April 27th 2020, Google launched version 4.6 of its
                        Google My Business (GMB) API for...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog-shadow">
                  <img src={require("../assets/blog-5.png")} alt="" />

                  <div className="blog-descrition height-two">
                    <div className="latext">
                      <h5>
                        4 Reasons Search Is the Most Critical Issue for Your
                        Brand This Year
                      </h5>
                      <p>
                        With 90% of consumers reporting that they use search at
                        every...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="blog-shadow">
                  <img src={require("../assets/blog-6.png")} alt="" />

                  <div className="blog-descrition height-two">
                    <div className="latext">
                      <h5>
                        4 Reasons Search Is the Most Critical Issue for Your
                        Brand This Year{" "}
                      </h5>
                      <p>
                        With 90% of consumers reporting that they use search at
                        every stage of the customer lifecycle...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="blog-shadow">
                  <img src={require("../assets/blog-7.png")} alt="" />

                  <div className="blog-descrition height-two">
                    <div className="latext">
                      <h5>
                        4 Reasons Search Is the Most Critical Issue for Your
                        Brand This Year
                      </h5>
                      <p>
                        With 90% of consumers reporting that they use search at
                        every stage of the customer lifecycle...{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="blog-shadow">
                  <img src={require("../assets/blog-8.png")} alt="" />
                </div>
              </div>

              <div className="col-md-4">
                <div className="blog-shadow">
                  <img src={require("../assets/blog-9.png")} alt="" />

                  <div className="blog-descrition height-two">
                    <div className="latext">
                      <h5>Specify Service Items for You </h5>
                      <p>
                        On April 27th 2020, Google launched version 4.6 of its
                        Google My Business (GMB) API for...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="blog-shadow">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={require("../assets/blog-10.png")}
                        className="img12"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="blog-descrition height-one2">
                        <div className="latext">
                          <h5>
                            Google’s Latest API Update: Specify Service Items
                            for Your Business{" "}
                          </h5>
                          <p>
                            {" "}
                            On April 27th 2020, Google launched version 4.6 of
                            its Google My Business (GMB) API for...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-pagination">
              <ul>
                <li>
                  <img src={require("../assets/arrow-left.png")} />
                </li>
                <li>
                  <span>1</span>
                </li>
                <li>
                  <span>2</span>
                </li>
                <li>
                  <span>3</span>
                </li>
                <li>
                  <img src={require("../assets/arrow-right.png")} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="seeshow">
          <div className="container">
            <h2>
              See how your business can deliver verified
              <br />
              answers to searching consumers, helping <br />
              drive discovery and revenue
            </h2>

            <div className="banner-btn">
              <a href="#" className="book_btn">
                Book A Demo{" "}
              </a>
              <a href="#" className="learn_btn">
                Learn more{" "}
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
