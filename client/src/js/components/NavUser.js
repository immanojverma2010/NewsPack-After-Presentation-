var React= require('react');
var {Link}=require('react-router');

var NavUser= React.createClass({


  render: function(){
    return(
      <div>

      <ul className="nav navbar-nav navbar-right">
      <li className="dropdown">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user"></span>MyAccount<strong className="caret"></strong></a>
      <ul className="dropdown-menu">
      <li>
      <a href="#"><span className="glyphicon glyphicon-wrench"></span> Settings</a>
      </li>
      <li>
      <a href="#"><span className="glyphicon glyphicon-refresh"></span> Update Profile</a>
      </li>
      <li>
      <a href="#"><span className="glyphicon glyphicon-briefcase"></span> Billing</a>
      </li>
      <li className="divider">
      </li>
      <li>
      <Link to="/logout"><span className="glyphicon glyphicon-off"></span> LogOut</Link>
      </li>
      </ul>
      </li>
      </ul>


      </div>
    )
  }
})


module.exports=NavUser
