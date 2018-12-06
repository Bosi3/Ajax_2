let url = new URLSearchParams(window.location.search);
console.log(window.location.search);
theId = url.get('id');
const key = 'a49f54f4';
let theTitle;
let theYear;


            
      
        
       fetch(`https://www.omdbapi.com/?apikey=${key}&i=${theId}`)
        .then(res => res.json())//response type
        .then( (film) => {   
            let monTi = document.querySelector(".title");
            monTi.innerHTML = `Title:<br> ${film.Title}`;
            let monPlot = document.querySelector(".plot");
            monPlot.innerHTML = `Plot:<br> ${film.Plot}`;
            var poster = document.querySelector('.poster');
    
            poster.innerHTML = `Poster:<br><img width="100" height="100" src="${film.Poster}">`;
            //let monPoster = document.getElementById("myImg").src;
            //monPoster.innerHTML = film.Poster;
            let monYear = document.querySelector(".year");
            monYear.innerHTML = `Year:<br> ${film.Year}`;
            //https://www.omdbapi.com/?apikey=a49f54f4&t=blade
        })
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });
        function goBack() {
            window.history.back();
        }
    








