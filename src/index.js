import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./styles.css";

let bg={
  backgroundColor: "#6c757d",
textAlign: "center"
}
let styles = {
backgroundColor: "#6ECB63"
}

function CQ() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/hireDevelopers">
           <HireDevelopers />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
        <Learners />
        </Route>
      </Switch>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <CQ />
  </BrowserRouter>,
   document.getElementById("root")
);

function Nav() {
  return (
    <>
    <div className="collegesPage container-fluid header-section" id="header">
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-brand logo__link" href="/">
          <span className="logo__text__part__one">code</span>
          <span className="logo__text__part__two">quotient</span>
      </div>
      <Link className="btn-tgl navbar-toggler bi bi-list" to="/">Learners</Link>
      <Link className="btn-tgl navbar-toggler bi bi-list" to="/hireDevelopers">Hire Developers</Link>
      <Link className="btn-tgl navbar-toggler bi bi-list" to="/login">Login</Link>
      </nav>
      </div>
    </>
  );
}
function Learners() {
  return (
  <>
<div class="text-center text-lg-left">
                            <p class="product__heading mb-1">Online Live Learning</p>
                            <p class="product__info__1">
                                Your students can learn online, with hands-on, real-time support from CodeQuotient 
                                mentors and virtual collaboration with classmates. Our Live classrooms are backed
                                 by mentoring sessions and collaborative project based learning.
                            </p>
                        </div>
  </>);
}

function HireDevelopers() {
  return (<>
  <h2>Developers Page</h2>
  </>);
}

function Login() {
  return (<>
 <div style={bg}>
<h1 >LOG-IN</h1>
<h2> UserName</h2>
<input type="text" placeholder="Enter Username" />
<h2>Email</h2>
<input type="email"  placeholder="Enter Email" />
<h2>Password</h2>
<input type="password"  placeholder="Enter Password" />
<br/><br/>
<button style={styles}>Log-In</button>
<br/><br/>

</div>
  </>);
}

