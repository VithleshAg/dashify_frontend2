import React, { Component } from "react";
import { HashRouter, NavLink } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div className="left-side-menu">
            <div className="sidebar-scrollbar">
              <ul>
                <li>
                  <NavLink to="/" className="active">
                    <i className="flaticon-dashboard"></i>{" "}
                    <span className="nonebox">dashboard</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/user-profile">
                    <i className="flaticon-user"></i>{" "}
                    <span className="nonebox">User Profile</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/activity">
                    <i className="flaticon-agenda"></i>{" "}
                    <span className="nonebox">Activity</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/report">
                    <i className="flaticon-signal"></i>{" "}
                    <span className="nonebox">Report</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/support">
                    <i className="flaticon-support"></i>{" "}
                    <span className="nonebox">Support</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/notification">
                    <i className="flaticon-support"></i>{" "}
                    <span className="nonebox">Notification</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/setting-main">
                    <i className="flaticon-gear"></i>{" "}
                    <span className="nonebox">Settings</span>
                  </NavLink>
                </li>
              </ul>
              <div className="sidebar-img">
                <div className="invite">
                  <img src={require("../images/sidebarimg.png")} />
                  <p>Invite your team and start collaborating!</p>
                  <a href="invite">Invite to Dashify</a>
                </div>
              </div>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}
