/*var News=function(headline, description, url, image) {
    this.headline=headline;
    this.description=description;
    this.url=url;
    this.image=image;
}*/


//function ajaxRequest() {



  $.ajax({
    method: 'GET',
    url: 'https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=496a18cbd2374010a934cbff8db14473',
    success: function(ballnews){
      $("#one img").append(ballnews.articles[0].urlToImage)
      //var head = new News(ballnews.articles[0].author, ballnews.articles[0].title, ballnews.articles[0].description, ballnews.articles[0].url, ballnews.articles[0].urlToImage)


    }

  })
