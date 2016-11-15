var React= require('react');
var LayoutDisplayNews=require("../components/LayoutDisplayNews.js");

var NewsDisplay= React.createClass({

  render: function(){
    //  console.log("State Value" + this.state.id);
    counter = 0;
    var specNewsObjArr=this.props.specNewsObject.map(function(news){
      //var count= this.state.id;
      //console.log("Count b4 "+count);

      //console.log("news object "+JSON.stringify(news));
      var child=news.publishedAt;
      child=child.replace(/[-:]/g, '');
      counter=counter+1;

      news.id= counter +child;
      console.log("counter value "+ news.id);
      //console.log("news object "+JSON.stringify(news));

      return(<LayoutDisplayNews specNewsObject={news}/>);


    });

    return(
      <div className="container">
      <h1>Current Top News</h1>
      {specNewsObjArr}
      <br></br> <br></br>  <br></br>

      </div>
    );
  }

});

module.exports=NewsDisplay;
