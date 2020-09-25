import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";
import es_img1 from "./assets/es_img1.png";
import edit from "./assets/edit.png";

export default class SettingEmail extends Component {
  render() {
    return (
      <div>
        <MDBContainer>
          <div className="setting-10">
            <h3>Email Setting</h3>
          </div>
          <MDBRow>
            <MDBCol
              className="profile_container"
              md="8"
              style={{ padding: "43px 25px" }}
            >
              <MDBRow>
                <MDBCol md="2">
                  <img
                    src={es_img1}
                    alt="es_img1"
                    className="responsive"
                    id="vl_img1"
                  />
                </MDBCol>
                <MDBCol md="6">
                  <div id="es_heading">Dolce Vita Hair Salon</div>
                  <div className="es_contant">Orlando best styles</div>
                  <div className="es_contant" style={{ marginTop: "2%" }}>
                    Agency Email: Example123@gmail.com
                  </div>
                  <div className="es_contant">Phone: +152 4541 545</div>
                  <div className="es_contant">
                    <img src={edit} alt="es_edit" className="es_icon" />
                    <img src={edit} alt="es_edit" className="es_icon" />
                  </div>
                </MDBCol>
                <MDBCol md="4">
                  <MDBBtn id="es_btn1">Email Authenticated</MDBBtn>
                  <MDBBtn id="es_btn2">Add Notification Recipients</MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol
              className="profile_container"
              style={{ textAlign: "center" }}
              md="4"
            >
              <div className="exclamation">!</div>
              <div className="profile2">Edit Email Informations</div>
              <div>
                <MDBBtn id="profile_here_btn">Here</MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="profile_container">
            <MDBCol className="es_table_font1" md="4">
              Notification Email
            </MDBCol>
            <MDBCol className="es_table_font1" md="4">
              Email Frequency
            </MDBCol>
            <MDBCol className="es_table_font1" md="4">
              Action
            </MDBCol>
          </MDBRow>
          <MDBRow className="profile_container">
            <MDBCol className="es_table_font1" md="4">
              Profile Complrtion Email
            </MDBCol>
            <MDBCol className="es_table_font1" md="4">
              Email Frequency
            </MDBCol>
            {/* <MDBCol className='es_table_font1' md='4'>Action</MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
