import React, { Component } from "react";
import rec from "./assets/rectangle320.png";

export default class AdditionalPromotional extends Component {
  render() {
    return (
      <>
        {/* <div className="left-side-menu"></div> */}

        {/* <div className="content-page" id="overviewadditionalpromo"> */}
        <div id="overviewadditionalpromo">
          <div className=" child_div">
            <div className="col-md-11 add_post">
              <h5>Additional Promotional Posts</h5>
              <div className="row">
                <div className="col-md-6">
                  <p>Write your post</p>
                  <div className="col-md-11">
                    <div className="row rec_img">
                      <img src={rec} alt="rec" />
                      <img src={rec} alt="rec" />
                      <img src={rec} alt="rec" />
                      <img src={rec} alt="rec" />
                    </div>
                  </div>
                </div>

                <div className="col-md-6 ">
                  <p>100-150 Characters</p>
                  <div className="row attach_doc">
                    <div className="col-md-2">
                      <img src={require("./assets/image29.png")} alt="" />
                    </div>
                    <div className="col-md-10 ">
                      <p>Attach a document</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content_here">
                Enter your post content here...
              </div>
              <div className="row check_box">
                <div className="col-md-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      <p>Add a CTA</p>
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      <p>Post an event</p>
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      <p>Make this post a promoyional post</p>
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      <p>Report this post after expairy</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="row aja_tu">
                <div className="col-md-6">
                  <a class="custom_btn1 ">Save as Draft</a>
                </div>
                <div className="col-md-6 ">
                  <a class="custom_btn2 ">Confirm Post</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
