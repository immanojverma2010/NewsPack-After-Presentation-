var React= require('react');
var NewsProvidersLayout=require("../components/NewsProvidersLayout.js");


var DisplayBox= React.createClass({
  render: function(){
    var newsObjArr=this.props.newsObj.map(function(news){
      return(<NewsProvidersLayout newsObject={news} />);

    });

    return(
      <div className="container">
      <h1>News Providers</h1>
      <br></br>
      {newsObjArr}
      </div>
    );
  }

});

module.exports=DisplayBox;
