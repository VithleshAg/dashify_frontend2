import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { Link, Redirect } from "react-router-dom";
import { add_query } from "./apis/outside_pages";
import Axios from "axios";

class ContactUs extends Component {
  state = {
    full_name: "",
    email: "",
    message: "",
    full_name_error: "",
    email_error: "",
    message_error: "",
    loading: false
  };

  onSubmit = e => {
    e.preventDefault();

    let { full_name, email, message } = this.state;
    let isError = false;

    // for checking email
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    this.setState({
      full_name_error: "",
      email_error: "",
      message_error: ""
    });

    if (full_name == "") {
      this.setState({
        full_name_error: "Enter your full name"
      });
      isError = true;
    }
    if (email == "") {
      this.setState({ email_error: "Enter your email" });
      isError = true;
    } else if (reg.test(email) == false) {
      this.setState({ email_error: "Invalid email" });
      isError = true;
    }
    if (message == "") {
      this.setState({ message_error: "Enter your message" });
      isError = true;
    }

    if (!isError) {
      this.setState({ loading: true });

      const data = {
        Name: full_name,
        Your_Email: email,
        Message: message,
        Other_Data: ""
      };

      add_query(data)
        .then(res => {
          this.setState({ loading: false });
          alert("Submitted succesfully");
          console.log("contact us response", res.data);
        })
        .catch(res => {
          alert("Something went wrong");
          this.setState({ loading: false });
          console.log("contact us error", res);
        });
    }
  };

  render() {
    return (
      <div>
        <div className="foursquer-logo">
          <img src={require("./landingpage/img/Logo2.png")} alt="Contact us" />
        </div>
        <div className="login_form">
          <form onSubmit={this.onSubmit}>
            <fieldset className="login_fieldset">
              <legend>Contact us</legend>
              {this.state.loading ? (
                <Loader type="Oval" color="#00BFFF" height={25} width={25} />
              ) : (
                ""
              )}
              <p>
                <label htmlFor="full_name">Full Name</label>
                <input
                  type="text"
                  id="full_name"
                  value={this.state.full_name}
                  onChange={e => this.setState({ full_name: e.target.value })}
                />
                <div style={{ color: "red" }}>{this.state.full_name_error}</div>
              </p>

              <p>
                <label htmlFor="email">Your Email</label>
                <input
                  type="text"
                  id="email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <div style={{ color: "red" }}>{this.state.email_error}</div>
              </p>
              <p>
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  id="message"
                  onChange={e => this.setState({ message: e.target.value })}
                />
                <div style={{ color: "red" }}>{this.state.message_error}</div>
              </p>
              <p>
                <button type="submit">Submit</button>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
