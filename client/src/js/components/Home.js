var React= require('react');

var Home= React.createClass({
  render: function(){

    return(
      <div className="jumbotron" >
      <center>
      <img src={'https://www.maharashtratourism.gov.in/images/default-source/news-and-notifications/latest-news-banner.jpg?sfvrsn=2'} alt="news" />
      </center><br/>
      <p> Hello User...</p>
      <p>Newsinshort is an online news reader application and it contains more than 70 various news providers</p>
      <p>Please login to display your favourie news</p>
      </div>
    );
  }
});
module.exports=Home;
