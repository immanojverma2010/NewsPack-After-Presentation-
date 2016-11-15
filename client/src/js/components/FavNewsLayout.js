var React= require('react');

var FavNewsLayout= React.createClass({
  handleSubmitModal: function(e)
  {
    e.preventDefault();
    console.log("News update clicked 1");


    var addedComments= this.refs.comments.value;
    var updateObj={newid: this.props.newsObject.newid,
      comments: addedComments};

      $.ajax({
        url:"http://localhost:8080/news/update",
        type:'PUT',
        data: updateObj,
        success: function(msg)
        {

          alert(msg);
        }.bind(this),
        error: function(err)
        {
          console.log('error occurred on AJAX');
          console.log(err);
        }.bind(this)
      });
      this.props.updateGParent(updateObj.newid, updateObj.comments);

    },
    handleDeleteNews: function()
    {
      console.log("News delete clicked");
      $.ajax({
        url:"http://localhost:8080/news/remove/"+this.props.newsObject.newid,
        type:'DELETE',
        //dataType:'JSON',
        success: function(msg)
        {
          this.props.updateGParent(this.props.newsObject.newid);
          alert(msg);
          console.log("News deleted from mongodb");
        }.bind(this),
        error: function(err)
        {
          console.log('error occurred on AJAX');
          console.log(err);
        }.bind(this)
      });

    },
    render: function(){
      console.log("inside favnewsboxcoponent render");
      var child=this.props.newsObject.newid;
      child=child.replace(/[-:]/g, '');
      var id="#"+child;
      console.log("New id is "+ id);

      return(
        <div>
        <div className="row">
        <br></br>    <br></br>
        <h1>{this.props.newsObject.title}</h1>
        <div className="col-lg-4">


        <img src={this.props.newsObject.urlToImage} alt="Poster Image" height="300" width="250" style={{marginTop:'20'}}></img>
        </div>

        <div className="col-lg-5" >
        <div className="well">
        <br></br>

        <h3>Description: </h3>{this.props.newsObject.description}<hr></hr>
        <h3>Comments:</h3>{this.props.newsObject.comments}<hr></hr>
        <h3>Category:</h3>{this.props.newsObject.category}

        </div>
        <a href={this.props.newsObject.url} className="btn btn-primary" target="_blank"><span className="glyphicon glyphicon-share-alt"></span> See on</a>&nbsp;
        <a className='btn btn-success' onClick={this.handleDeleteNews}>Delete</a>&nbsp;
        <a className='btn btn-success' data-target={id} data-toggle="modal">Update</a>
        <div className="modal fade" ref="newsid" id={child}>
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header" id="modalheader">

        <button className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Update Comments</h4>

        </div>
        <div className="modal-body">

        <form className="form-horizontal">
        <div className="form-group">


        <label className="col-lg-2 control-label" for="comments">Comments:</label>
        <div className="col-lg-10">

        <textarea className="form-control" rows="5" id="comments" ref="comments"></textarea>
        </div>
        </div>

        <div className="form-group">
        <div className="col-lg-10">
        <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
        <button className="btn btn-primary" type="button" onClick={this.handleSubmitModal}>Submit</button>
        </div>
        </div>
        </form>
        </div>

        </div>
        </div>
        </div>

        </div>
        </div><br></br><hr></hr>
        </div>
      );
    }
  });

  module.exports=FavNewsLayout;
