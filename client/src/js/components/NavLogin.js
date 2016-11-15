var React= require('react');
var {Link}=require('react-router');

var NavLogin= React.createClass({


  render: function(){
    return(
      <div>

      <ul className="nav navbar-nav navbar-right">

      <li>
      <Link to="/login">Login</Link>
      </li>
      </ul>
      </div>
    )
  }
})


module.exports=NavLogin
