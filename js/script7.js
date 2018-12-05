const key = 'a49f54f4';
let theTitle;
let theYear;
{   

    const createResultList = (results) => {
        console.log(results);
        const $results = document.querySelector(`.results`);
        $results.innerHTML = results.map(createResultListItem);
        console.log($results);

        document.querySelector(`.results`).addEventListener(`mouseup`, handleClick);
    }

    const createResultListItem = result => `<li class="result" id="${result.Title}">${result.Title}</li>`;
    
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
      /* if(entryForm[0] == "annee"){
        theYear = entryForm[1];
       };*/
      
    }
    console.log(theTitle )
 //Create the XHR Object
 fetch(`https://www.omdbapi.com/?apikey=${key}&s=${theTitle}&y=${theYear}`)
 .then(res => res.json())//response type
 .then(jsonData => console.log( createResultList(jsonData)));
   /* async function getData() 
    {
        //await the response of the fetch call
       let response = await fetch(`https://www.omdbapi.com/?apikey=${key}&s=${theTitle}&y=${theYear}`);
        //proceed once the first promise is resolved.
       let data = await response.json()
        //proceed only when the second promise is resolved
        return data;
    }
//call getData function
getData()*/



const display = (film) => {   
        let monTi = document.querySelector(".title");
        monTi.innerHTML = `Title:<br> ${film.Title}`;
        let monPlot = document.querySelector(".plot");
        monPlot.innerHTML = `Plot:<br> ${film.Plot}`;
        var poster = document.querySelector('.poster');

        poster.innerHTML = `Poster:<br><img width="100" height="100" src="${film.Poster}">`
        //let monPoster = document.getElementById("myImg").src;
        //monPoster.innerHTML = film.Poster;
        let monYear = document.querySelector(".year");
        monYear.innerHTML = `Year:<br> ${film.Year}`;
        //https://www.omdbapi.com/?apikey=a49f54f4&t=blade
}

}
}
