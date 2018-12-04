const key = 'a49f54f4';
//const title = document.getElementById("monTite");

let xhr = new XMLHttpRequest;
{   

    const createResultList = (results) => {
        const $results = document.getElementById(`monTitle`);
       // $results.innerHTML = results.map(createResultListItem).join(``);

       // document.querySelector(`.title`).addEventListener(`mouseup`, handleClick);
    }
    const createResultListItem = result => `<li class="title" id="${result.Title}">
   
    </li>`;

    
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('GET', `https://www.omdbapi.com/?apikey=${key}&t=+The+Godfather`, true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    console.log(JSON.parse(this.responseText));
                    fetch(`https://www.omdbapi.com/?apikey=${key}&t=+The+Godfather`)
                    .then(res => res.json())//response type
                    .then(jsonData => createResultList(jsonData));
                    //console.log( jsonData);
                    //.then(data => console.log(data.Year)) //log the data;
                    //.then(data => console.log(data.Poster));
        }
                }
    //call send
    xhr.send();
    async function getData() 
    {
        //await the response of the fetch call
       let response = await fetch(`https://www.omdbapi.com/?apikey=${key}&t=+The+Godfather`);
        //proceed once the first promise is resolved.
       let data = await response.json()
        //proceed only when the second promise is resolved
        return data;
    }
//call getData function
getData()
.then(data => console.log(data.Title))//log the data
//.then(data =>console.log(data.Year));

}
/*
     function findMovie(title) {
      this.error = false;
      this.loading = true;
      
      fetch(url + title).then(res => res.json()).then(data => {
          this.movie = data;
          console.log(data)
          if (this.movie.Actors) this.movie.Actors = data.Actors.split(', ');
          if (this.movie.Error) this.error = true;
          this.loading = false;
      }).catch(err => {
        this.error = true;
        this.loading = false;
      });
    }
    
     function searchHandler(e) {
      if (e.target.value) {
        this.findMovie(e.target.value);
        e.target.blur();
      }
    }
  */
  
 

 /*let xhr = new XMLHttpRequest;
 //Call the open function, GET-type of request, url, true-asynchronous

 //Common Types of HTTP Statuses
 // 200: OK
 // 404: ERROR
 // 403: FORBIDDEN
 var myForm = document.querySelector('form')
var myContainer = document.getElementById('#container');
Container.hide();
myForm.on('submit', function(p_oEvent){
    var sUrl, sMovie, oData;
    p_oEvent.preventDefault();
sMovie = myForm.find('input').val();
    sUrl = 'https://www.omdbapi.com/?t=' + sMovie + '&type=movie&tomatoes=true'
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'http://www.omdbapi.com/?apikey=a49f54f4', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    oData = (JSON.parse(this.responseText));
                    console.log(oData);
        
            if (oData.Response === "False") {
                myContainer.hide();
            } else {
                myContainer.find('.title').text(oData.Title);
                myContainer.find('.plot').text(oData.Plot);
                myContainer.find('.poster').html('<img src="' + oData.Poster + '"/>');
                myContainer.find('.year').text(oData.Year);
                myContainer.show();
            }
        }
    };    
}); //call send
    xhr.send();*/