import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from "mdbreact";

export default class ProfileSettingSidebar extends Component {
  // render() {
  //   let SplitUrl = window.location.href.split("/");
  //   let lastNameOfUrl = SplitUrl[SplitUrl.length - 1];
  //   return (
  //     <div className="col-md-3 setting-11 ">
  //       <div className="col-md-12 account-10">
  //         {lastNameOfUrl == "setting-accounts" ? (
  //           <NavLink to="/setting-main/setting-accounts" className="active">
  //             <h3>Account</h3>
  //           </NavLink>
  //         ) : (
  //           <NavLink to="/setting-main/setting-accounts">
  //             <h3>Account</h3>
  //           </NavLink>
  //         )}
  //       </div>
  //       <div className="col-md-12 account-11">
  //         {lastNameOfUrl == "b" ? (
  //           <NavLink to="/b" className="active">
  //             <h3>Notification Setting</h3>
  //           </NavLink>
  //         ) : (
  //           <NavLink to="/b">
  //             <h3>Notification Setting</h3>
  //           </NavLink>
  //         )}
  //       </div>
  //       <div className="col-md-12 account-11">
  //         {lastNameOfUrl == "setting-billing" ? (
  //           <NavLink
  //             exact
  //             to="/setting-main/setting-billing"
  //             className="active"
  //           >
  //             <h3> Biling</h3>
  //           </NavLink>
  //         ) : (
  //           <NavLink exact to="/setting-main/setting-billing">
  //             <h3> Biling</h3>
  //           </NavLink>
  //         )}
  //       </div>
  //       <div className="col-md-12 account-11">
  //         {lastNameOfUrl == "c" ? (
  //           <NavLink to="/c" className="active">
  //             <h3> Integrations</h3>
  //           </NavLink>
  //         ) : (
  //           <NavLink to="/c">
  //             <h3> Integrations</h3>
  //           </NavLink>
  //         )}
  //       </div>
  //       <div className="col-md-12 account-11">
  //         {lastNameOfUrl == "d" ? (
  //           <NavLink to="/d" className="active">
  //             <h3>Agency Setting</h3>
  //           </NavLink>
  //         ) : (
  //           <NavLink to="/d">
  //             <h3>Agency Setting</h3>
  //           </NavLink>
  //         )}
  //       </div>
  //     </div>
  //   );
  // }
  render() {
    let SplitUrl = window.location.href.split("/");
    let lastNameOfUrl = SplitUrl[SplitUrl.length - 1];
    return (
      <MDBCol className="profile_container">
        <div className="profile1">
          {lastNameOfUrl == "setting-accounts" ? (
            <NavLink to="/setting-main/setting-accounts" className="active">
              <h3>Account</h3>
            </NavLink>
          ) : (
            <NavLink to="/setting-main/setting-accounts">
              <h3>Account</h3>
            </NavLink>
          )}
        </div>
        <div className="profile1">
          {lastNameOfUrl == "b" ? (
            <NavLink to="/b" className="active">
              <h3>Notification Setting</h3>
            </NavLink>
          ) : (
            <NavLink to="/b">
              <h3>Notification Setting</h3>
            </NavLink>
          )}
        </div>
        <div className="profile1">
          {lastNameOfUrl == "setting-email" ? (
            <NavLink to="/setting-main/setting-email" className="active">
              <h3>Email Setting</h3>
            </NavLink>
          ) : (
            <NavLink to="/setting-main/setting-email">
              <h3>Email Setting</h3>
            </NavLink>
          )}
        </div>
        <div className="profile1">
          {lastNameOfUrl == "setting-people" ? (
            <NavLink to="/setting-main/setting-people" className="active">
              <h3>People</h3>
            </NavLink>
          ) : (
            <NavLink to="/setting-main/setting-people">
              <h3>People</h3>
            </NavLink>
          )}
        </div>
        <div className="profile1">
          {lastNameOfUrl == "setting-billing" ? (
            <NavLink
              exact
              to="/setting-main/setting-billing"
              className="active"
            >
              <h3> Biling</h3>
            </NavLink>
          ) : (
            <NavLink exact to="/setting-main/setting-billing">
              <h3> Biling</h3>
            </NavLink>
          )}
        </div>
        <div className="profile1">
          {lastNameOfUrl == "c" ? (
            <NavLink to="/c" className="active">
              <h3> Integrations</h3>
            </NavLink>
          ) : (
            <NavLink to="/c">
              <h3> Integrations</h3>
            </NavLink>
          )}
        </div>
        <div className="profile1">
          {lastNameOfUrl == "d" ? (
            <NavLink to="/d" className="active">
              <h3>Agency Setting</h3>
            </NavLink>
          ) : (
            <NavLink to="/d">
              <h3>Agency Setting</h3>
            </NavLink>
          )}
        </div>
      </MDBCol>
    );
  }
}
