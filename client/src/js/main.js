var React= require('react');
var ReactDOM= require('react-dom');


var NavBar=require("./components/NavBar.js");
var Login=require("./components/Login.js");
var Logout=require("./components/Logout.js");
var About=require("./components/About.js");
var Home=require("./components/Home.js");
var Contact=require("./components/Contact.js");
var Footer=require("./components/Footer.js");
var ShowNews=require("./components/ShowNews.js");
var Search=require("./components/Search.js");
var FindNewsProvider=require("./components/FindNewsProvider.js");

var {browserHistory, Route, Router, IndexRoute} = require('react-router');

var MainComponent = React.createClass({

  getInitialState: function() {
    return({
      auth:false
    })
  },
  updateNavbar(status){
    this.setState({
      auth:status
    });
  },
  render: function(){
    return(
      <div>
      <NavBar auth={this.state.auth} />
      {React.cloneElement(this.props.children, {update: this.updateNavbar})}

      <br></br> <br></br> <br></br> <br></br> <br></br>
      <Footer />
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path = "/" component = {MainComponent} >
  <IndexRoute component = {Home} />
  <Route path = "/home" component = {FindNewsProvider} />
  <Route path = "/login" component = {Login} />
  <Route path = "/logout" component = {Logout} />
  <Route path = "/about" component = {About} />
  <Route path = "/search" component = {Search} />
  <Route path = "/contact" component = {Contact} />
  </Route>
  </Router>,
  document.getElementById('app'));
