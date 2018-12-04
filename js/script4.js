const key = 'a49f54f4';



//	var theTitle = encodeURIComponent(document.getElementById("monTitle").value);
//	var theYear = encodeURIComponent(document.getElementById("monAnnee").value);
	
	

 
    async function getData() 
    {
        //await the response of the fetch call
       let response = await fetch(`https://www.omdbapi.com/?apikey=${key}&t=blade`);
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
