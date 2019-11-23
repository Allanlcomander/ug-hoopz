/*var News=function(headline, description, url, image) {
    this.headline=headline;
    this.description=description;
    this.url=url;
    this.image=image;
}*/


//function ajaxRequest() {



$.ajax({
  method: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=496a18cbd2374010a934cbff8db14473',
  success: function(ballnews) {
    $("#test").attr("src", ballnews.articles[1].urlToImage)
    $("#title").append(ballnews.articles[1].title)
    $("#tit").attr("href", ballnews.articles[1].url)
    $("#des").append(ballnews.articles[1].description)
    $("#test1").attr("src", ballnews.articles[2].urlToImage)
    $("#title1").append(ballnews.articles[2].title)
    $("#tit1").attr("href", ballnews.articles[2].url)
    $("#des1").append(ballnews.articles[2].description)

    $("#test2").attr("src", ballnews.articles[3].urlToImage)
    $("#title2").append(ballnews.articles[3].title)
    $("#tit2").attr("href", ballnews.articles[3].url)
    $("#des2").append(ballnews.articles[3].description)




    //var head = new News(ballnews.articles[0].author, ballnews.articles[0].title, ballnews.articles[0].description, ballnews.articles[0].url, ballnews.articles[0].urlToImage)
    console.log(ballnews.articles[1].urlToImage);
    console.log(ballnews.articles[2].urlToImage);


  }

})


$.ajax({
  method: 'GET',
  url: 'https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=496a18cbd2374010a934cbff8db14473',
  success: function(ballnews) {

    $("#test3").attr("src", ballnews.articles[0].urlToImage)
    $("#title3").append(ballnews.articles[0].title)
    $("#tit3").attr("href", ballnews.articles[0].url)
    $("#des3").append(ballnews.articles[0].description)
    $("#test4").attr("src", ballnews.articles[3].urlToImage)
    $("#title4").append(ballnews.articles[3].title)
    $("#tit4").attr("href", ballnews.articles[3].url)
    $("#des4").append(ballnews.articles[3].description)
    $("#test5").attr("src", ballnews.articles[5].urlToImage)
    $("#title5").append(ballnews.articles[5].title)
    $("#tit5").attr("href", ballnews.articles[5].url)
    $("#des5").append(ballnews.articles[5].description)


  }

})
