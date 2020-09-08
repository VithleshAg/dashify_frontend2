import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";
import { add_social_account } from "./apis/social_platforms";

const Yelpconfig = {
  headers: {
    Authorization:
      "bearer XkjWF9GSy19xRS_yytCtISMaViqsPuXGmQiTzzAdcRHHNJmISD9bnHisRb8tgF5H7xVuMnbcybxOvEHHM7o91yTFKcGO7KrERhOSMS9NtRiPQNq9tCxMl61oD10pXnYx",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost"
  }
};

class YelpLogin extends Component {
  state = {
    url: "",
    username: "",
    password: "",
    log: false,
    isUrl: false,
    username_error: "",
    password_error: "",
    url_error: "",
    wrong: "",
    loading: false
  };

  onSubmit = e => {
    e.preventDefault();
    //  this.setState({log:false})
    // this.props.login(this.state.username, this.state.password);
    // return <Redirect to="/locationdetails" />

    this.setState({
      username_error: "",
      password_error: "",
      url_error: "",
      wrong: ""
    });

    if (this.state.username == "") {
      this.setState({
        username_error: "Enter your Email"
      });
    }
    if (this.state.password == "") {
      this.setState({ password_error: "Enter your password" });
    }
    if (this.state.url == "") {
      this.setState({ url_error: "Enter Url" });
      console.log("i am in console");
    }
    this.setState({ loading: true });

    const DjangoConfig = {
      headers: { Authorization: "Token " + localStorage.getItem("UserToken") }
    };

    Axios.get(
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/" +
        this.state.url.slice(25),
      Yelpconfig
    )
      .then(resp => {
        if (resp.data.name) {
          const data = {
            location_id: localStorage.getItem("locationId"),
            Platform: "Yelp",
            Token: "",
            Username: resp.data.name,
            Email: "",
            Password: this.state.password,
            Connect_status: "Connect",
            Other_info: "{'URL':" + this.state.url + ",'data':''}"
          };
          // Axios.post(
          //   "https://cors-anywhere.herokuapp.com/https://dashify.biz/social-platforms/add-account",
          //   data,
          //   DjangoConfig
          // )
          add_social_account(data, DjangoConfig)
            .then(resp => {
              console.log(resp);
              this.setState({ isUrl: true, loading: false });
            })
            .catch(resp => {
              alert("Invalid username or password");
              console.log(resp);
              this.setState({
                wrong: "Invalid or Not authorised",
                loading: false
              });
            });
        } else {
          alert("Invalid Username or password");
          this.setState({ loading: false });
        }
      })
      .catch(resp => {
        alert("Invalid Username or password");
        this.setState({ loading: false });
      });
  };

  render() {
    if (this.state.isUrl) {
      return (
        <Redirect
          to={
            "/dashboard#/locations/" +
            localStorage.getItem("locationId") +
            "/view-listing"
          }
        />
      );
    }

    return (
      <div>
        <div className="foursquer-logo">
          <img src={require("../images/yelp-logo.png")} alt="" />
        </div>

        <div className="login_form">
          <form onSubmit={this.onSubmit}>
            <fieldset className="login_fieldset">
              <legend>Login</legend>

              {this.state.loading ? (
                <Loader
                  type="Oval"
                  color="#00BFFF"
                  height={25}
                  width={25}
                  // timeout={3000} //3 secs
                />
              ) : (
                <div style={{ color: "red" }}>{this.state.wrong}</div>
              )}
              <p>
                <label htmlFor="url">Yelp Listing Url</label>
                <input
                  type="text"
                  id="url"
                  value={this.state.url}
                  placeholder="https://www.yelp.com/biz/uncle-boys-san-francisco"
                  onChange={e => this.setState({ url: e.target.value })}
                />
                <div style={{ color: "red" }}>{this.state.url_error}</div>
              </p>

              <p>
                <label htmlFor="username">Yelp Email</label>
                <input
                  type="text"
                  id="username"
                  onChange={e => this.setState({ username: e.target.value })}
                />
                <div style={{ color: "red" }}>{this.state.username_error}</div>
              </p>
              <p>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <div style={{ color: "red" }}>{this.state.password_error}</div>
              </p>
              <p>
                {/* <button type="submit" ><Link to="/yelp">Login</Link></button> */}
                <button type="submit">Login</button>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default YelpLogin;
