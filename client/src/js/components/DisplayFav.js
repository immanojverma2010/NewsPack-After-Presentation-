var React= require('react');
var FavNewsLayout=require("../components/FavNewsLayout.js");


var DisplayFav= React.createClass({
  render: function(){
    var updateParentFuntion=this.props.updateParent;
    var favNewsArr=this.props.favNews.map(function(news){
      return(<FavNewsLayout newsObject={news} updateGParent={updateParentFuntion}/>);

    });

    return(
      <div className="container">
      <h1>News Providers</h1>
      {favNewsArr}
      </div>
    );
  }

});

module.exports=DisplayFav;
