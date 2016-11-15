var React = require('react');
var {browserHistory}= require ('react-router');
var Login = React.createClass({


  checkUser(e){
    e.preventDefault();

    var username = this.refs.userName.value;
    // alert("Hello"+username);
    var password = this.refs.passWord.value;
    //alert(password);
    self=this;
    var userObj={"username":username,"password":password};
    $.ajax({
      url:'http://localhost:8080/login',
      type: 'POST',
      data:userObj,

      success: function(data)
      {
        //alert(data);
        console.log("Ajax login success");
        self.props.update(true);
        browserHistory.push('/home');
      }.bind(this),
      error: function(err)
      {
        console.log(err);
      }.bind(this)
    });
  },
  render : function () {
    return(
      <div className="container">
      <form id="NPMSearchForm" action="#">
      <h1 className="form-signin-heading">Please LOGIN</h1>
      <div className="input-group input-group-lg">
      <span className="input-group-addon">Username</span>
      <input type="text" ref='userName' className="form-control"></input>
      </div>
      <br></br>
      <div className="input-group input-group-lg">
      <span className="input-group-addon">Password</span>
      <input type="password" ref='passWord' className="form-control"></input>
      </div>
      <br></br>

      <button onClick={this.checkUser} type="submit" className="btn btn-lg btn-primary btn-block">LOGIN</button>
      <br></br>
      </form>
      </div>
    )
  }
});

module.exports = Login;
