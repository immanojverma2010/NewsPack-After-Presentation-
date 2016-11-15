var React= require('react');
var DisplayBox=require("../components/DisplayBox.js");
var FindNewsProvider= React.createClass({
  getInitialState: function() {
    return {
      newsDesc: []
    };
  },
  componentDidMount: function(){

    var url="https://newsapi.org/v1/sources?language=en";

    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'JSON',

      success: function(data)
      {
        //alert(data.status);
        this.setState({newsDesc:data.sources});
      }.bind(this),

      error: function(err)
      {
        console.log(err);
      }.bind(this)

    });
  },
  render: function(){
    return(

      <div>

      <br></br> <br></br> <br></br>
      <DisplayBox newsObj={this.state.newsDesc} />
      </div>
    )
  }
})

module.exports=FindNewsProvider
