var React= require('react');
var DisplayFav=require("../components/DisplayFav.js");
var Search= React.createClass({

getInitialState: function(){
  return({
    newsFav:[]
  });
},

onFormSubmit: function (e) {
  e.preventDefault();

  var searchNews=this.refs.newsSearch.value;

  if(searchNews=""){searchNews="blank"}
  var  category=this.refs.category.value;
//  alert(searchNews);
  this.refs.newsSearch.value='';

var url="http://localhost:8080/news/savednews"
var obj={category:category,searchNews:searchNews}
$.ajax({
url: url,
type: 'POST',
dataType: 'JSON',
data: obj,
success: function(data)
{
  //alert(data);
  if(data.Response=="No News"){
    alert("Sorry!!!..No News by this name.");
  }
  else{
    //alert("News Found");
    this.setState({newsFav:data});
  }
}.bind(this),

error: function(err)
{
  console.log(err);
}.bind(this)
});

},
updateParentState: function(id,comments){


//console.log("inside updateParentState");
var removeByAttr = function(arr, attr, value){
  var i = arr.length;
  while(i--){
    if( arr[i]
      && arr[i].hasOwnProperty(attr)
      && (arguments.length > 2 && arr[i][attr] === value ) ){

        arr.splice(i,1);

      }
    }
    return arr;
  }

  if(comments===undefined)
  {
    console.log("inside updateParentState delete");
    var updatednewsFav=removeByAttr(this.state.newsFav,'newid',id);
    this.setState({newsFav:updatednewsFav});
  }
  else
  {
    var index;
    var arr=this.state.newsFav;
    arr.some(function(ele)
    {
      if(ele.newid === id)
      ele.comments=comments;
    }
  );
  this.setState({newsFav:arr});
}
},

render: function(){
return(
  <div>
  <div className="well">
  <form onSubmit={this.onFormSubmit} className="form-inline">
  <div className="form-group" >
  <label className="col-lg-2 control-label" for="category">Category:</label>
  <select className="" id="category" ref="category">
  <option>All</option>
  <option>sports</option>
  <option>politics</option>
  <option>economical</option>
  <option>entertainment</option>
  <option>others</option>
  </select>

  <div className="container text-center">
  <h1>Search Movie</h1>
  <br></br>
  <input type="text" ref="newsSearch" className="" /> &emsp;&emsp;

  <button  className="btn btn-primary" >
  <span className="glyphicon glyphicon-search"></span>  Search
  </button>
  </div>
  </div>
  </form>
  </div>
  <DisplayFav favNews={this.state.newsFav} updateParent={this.updateParentState}/>

  </div>

);
}
});

module.exports=Search;
