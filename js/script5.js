const key = 'a49f54f4';
let theTitle;
let theYear;
document.getElementById('submit-form').addEventListener("click", formValidated);

function formValidated(e)  {
	e.preventDefault();

	var form = document.getElementById('main-form');
	var myData = new FormData(form);
	
	// Display the key/value pairs
	for(var entryForm of myData.entries()) {
       console.log(entryForm[0]+': '+  entryForm[1]); 
       if(entryForm[0] == "movie" ){
        theTitle = entryForm[1];
        //console.log(theTitle)
       };
       /*if(entryForm[0] == "annee"){
        theYear = entryForm[1];
       };
      */
    }
    //console.log(theTitle, theYear )
    const search = value => {
        //Call the open function, GET-type of request, url, true-asynchronous
 xhr.open('GET', `https://www.omdbapi.com/?apikey=${key}&s=${theTitle}`, true)
 //call the onload 
 xhr.onload = function() 
     {
         //check if the status is 200(means everything is okay)
         if (this.status === 200) 
             {
                 //return server response as an object with JSON.parse
                console.log(JSON.parse(this.responseText));
                fetch(`https://www.omdbapi.com/?apikey=${key}&s=${theTitle}`)
                .then(res => res.json())//response type
                .then(data => console.log(data));
                 //console.log( data.Year);
                 //.then(data => console.log(data.Year)) //log the data;
                 //.then(data => console.log(data.Title));
     }
             }
 //call send
     xhr.send();
            
/*    async function getData() 
    {
        //await the response of the fetch call
       let response = await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${theTitle}&y=${theYear}`);
        //proceed once the first promise is resolved.
       let data = await response.json()
        //proceed only when the second promise is resolved
        return data;
    }
//call getData function
getData()
.then(data => display(data));

const display = (film) => {   
        let monTi = document.querySelector(".title");
        monTi.innerHTML = `Title:<br> ${film.Title}`;
        let monPlot = document.querySelector(".plot");
        monPlot.innerHTML = `Plot:<br> ${film.Plot}`;
        var poster = document.querySelector('.poster');

        poster.innerHTML = `Poster:<br><img width="100" height="100" src=" ${film.Poster} " onclick="next ()">`
        //let monPoster = document.getElementById("myImg").src;
        //monPoster.innerHTML = film.Poster;
        let monYear = document.querySelector(".year");
        monYear.innerHTML = `Year:<br> ${film.Year}`;
       
}
*/
    }
}    