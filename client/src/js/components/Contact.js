var React= require('react');

var Contact= React.createClass({
  render: function(){
    return(
      <div className="container" >
      <div className="jumbotron" >
      <div className="container">
      <div className="row">
      <div className="col-sm-4">
      <h2>Newsinshort</h2>
      <address>
      <p>77 Mass. Ave., E14/E15<br/>
      Seattle, MA 02139-4307 USA <br/>
      9876543210<br/>
      <a href="#">mailtonewsinshort@gmail.com</a>
      </p>
      </address>
      </div>
      <div className="col-sm-8">
      <h2>Follow us, we are social</h2>
      <ul className="socialNetwork">
      <li><a href="#"><span className="glyphicon glyphicon-thumbs-up"></span>Like us on facebook</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-retweet"></span> Retweet on Twitter</a></li>
      <li><a href="#"><span className="glyphicon glyphicon-comment"></span> Follow us on Google plus</a></li>
      </ul>

      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
});

module.exports=Contact;
