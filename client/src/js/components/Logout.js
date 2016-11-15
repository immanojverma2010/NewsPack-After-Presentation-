var React= require('react');

var Logout= React.createClass({


  componentDidMount: function(){
    self.props.update(false);
    $.ajax({
      url:'http://localhost:8080/logout',
      type: 'GET',


      success: function(data)
      {
        //  alert(data);
        console.log("Ajax logout success");

        // browserHistory.push('/logout');
      }.bind(this),
      error: function(err)
      {
        console.log(err);
      }.bind(this)
    });
  },


  render: function(){
    return(
      <div className="jumbotron">

      <p>You are successfully logout, Thanks For using!!!</p>
      </div>
    )
  }
})

module.exports=Logout
