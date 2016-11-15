var React= require('react');
var NewsDisplay=require("../components/NewsDisplay.js");

var NewsProvidersLayout= React.createClass({


  getInitialState: function() {
    return {
      showCorNews: false,
      specificNews:[]
    };
  },

  showThisNews: function() {

    if(!this.state.showCorNews){
      this.setState({showCorNews:true})
      var url="https://newsapi.org/v1/articles?source="+this.props.newsObject.id+"&sortBy=top&apiKey=7e78852c9d854937a85f2d2fdbe097dc";
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'JSON',

        success: function(data)
        {
          //alert(data.status);
          this.setState({specificNews:data.articles});
        }.bind(this),

        error: function(err)
        {
          console.log(err);
        }.bind(this)

      });
    }
    else{
      this.setState({showCorNews:false})
    }


  },

  render: function(){

    return(
      <div>
      <div className="row">
      <div className="col-lg-3">

      <img src={this.props.newsObject.urlsToLogos.small} alt="Poster Image" height="100" width="100" style={{marginTop:'20'}}></img>
      <h3>{this.props.newsObject.name}</h3>
      </div>

      <div className="col-lg-9" >
      <div className="well">
      <h3>Description:</h3>  {this.props.newsObject.description}
      </div>
      <a href={this.props.newsObject.url} className="btn btn-primary" target="_blank"><span className="glyphicon glyphicon-share-alt"></span> Visit {this.props.newsObject.name}</a>&nbsp;&emsp;
      <button onClick={this.showThisNews} className="btn btn-warning"><span className="glyphicon glyphicon-star"></span> Open</button>
      {
        this.state.showCorNews
        ? <NewsDisplay specNewsObject={this.state.specificNews} newsID={this.props.newsObject.name}  />
        : null
      }

      <br></br><br></br>
      </div>
      </div><br></br><hr></hr>
      </div>
    );
  }
});

module.exports=NewsProvidersLayout;
