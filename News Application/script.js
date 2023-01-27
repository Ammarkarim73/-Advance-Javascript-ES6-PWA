if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker.register("./serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }





var apiKey = "Your API KEY";

var image;
var title;
var description;
var time;
var webName;
var author;

var inputValue;


function getNewsInfo() {
    inputValue = document.getElementById('searchBox').value;
      fetch(
        "https://newsapi.org/v2/everything?q=" +
        inputValue +
          "&apiKey=" +
          apiKey
      )
        .then((response) => response.json())
        .then((data) => {
            var realData = data.articles;


            for (var x = 0; x <= realData.length; x++){

            var code = '<div id="info" class="infoContainer">' +

            '<div>' +
            '<img src="' + `${realData[x].urlToImage}` + '" id="newsImage" />' +
        '</div>' +
        '<div>' +
        '<h1 id="title">' + `${realData[x].title}` + '</h1>' +
        '<br />' +
        '<p id="description">' + `${realData[x].description}` + '</p>'+
        '<br />' +
            '<div id="flex">' +
            '<p id="time">' + `${realData[x].publishedAt}` + '</p>' + '&nbsp' +
            '<p id="webName">' + `${realData[x].source.name}` + '</p>' + '&nbsp' +
            '<a href="' + `${realData[x].author}` + '" id="author">' + `${realData[x].author}` + '</a>' +
            '</div>' +
        '</div>' +
        '</div>' +
        '<br />' +
        '<br />';

        document.getElementById("box").innerHTML += code;

            }

            document.getElementById("head").innerHTML = 'NEWS ABOUT ' + inputValue;

        })
        .catch(err => console.log(err));

}
