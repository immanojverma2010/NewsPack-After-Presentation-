var React= require('react');
var {Link}=require('react-router');
var Footer= React.createClass({
  render: function(){
    return(
      <div className="footer navbar-fixed-bottom">
      <footer id="pg-footer" style={{backgroundColor:"black"}}>
      <div className="container">
      <div className="row">
      <div className="col-sm-4">
      <h6>Copyright &copy; 2016 Travel Tours. All Rights Reserved</h6>
      </div>



      <div className="col-sm-4">
      <h6>Navigation</h6>
      <ul className="unstyled">

      <li>
      <Link to="/home">Home</Link>
      </li>
      <li>
      <Link to="/about">About Us</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>

      <li>
      <Link to="/search">Search</Link>
      </li>


      </ul>
      </div>

      <div className="col-sm-2">
      <h6>Follow Us</h6>
      <ul className="unstyled">
      <li className="logo"><a href="#pg-footer" className="fa fa-facebook-official" aria-hidden="true"></a></li>
      <li className="logo"><a href="#pg-footer" className="fa fa-twitter" aria-hidden="true"></a></li>
      <li className="logo"><a href="#pg-footer" className="fa fa-instagram" aria-hidden="true"></a></li>
      </ul>
      </div>

      <div className="col-sm-2">
      <h6>Coded with <span className="glyphicon glyphicon-heart"></span></h6>
      </div>
      </div>
      </div>
      </footer>
      </div>




    );
  }
})

module.exports=Footer
