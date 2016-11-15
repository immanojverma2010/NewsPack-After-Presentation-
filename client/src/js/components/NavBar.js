var React = require('react');
var {Link} = require('react-router');
var NavUser=require('../components/NavUser.js');
var NavLogin=require('../components/NavLogin.js');



var NavBar = React.createClass({

  render:function()
  {
    return(
      <div style={{marginBottom:'70'}}>
      <nav className="navbar navbar-fixed-top navbar-inverse" >
      <div className="container">


      <button className="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse" type="button">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      </button>

      <a className="navbar-brand" href="#">NewsInShorts</a>

      <div className="nav-collapse collapse navbar-responsive-collapse">
      <ul className="nav navbar-nav navbar-left">
      <li>
      <Link to="/home">Home</Link>
      </li>
      <li>
      <Link to="/about">About Us</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>

      <li>
      <Link to="/search">Search</Link>
      </li>

      </ul>
      <div className="pull-right">
      {
        this.props.auth
        ? <NavUser />
        : <NavLogin />
      }
      </div>
      </div>
      </div>
      </nav>
      </div>

    );
  }
});

module.exports = NavBar;
