const key = 'a49f54f4';
let theTitle;
let theYear;
let theId;
    
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

   // console.log(theTitle )
 //Create the XHR Object

 //fetch(`https://www.omdbapi.com/?apikey=${key}&s=${theTitle}&y=${theYear}`, options)
 fetch(`https://www.omdbapi.com/?apikey=${key}&s=${theTitle}`)
 .then(res => res.json())//response type
 .catch(function (err) {
    console.log("Something went wrong!", err);
    alert("OR there is no result,<br> OR there are too many results. Try again ")
})
.then(jsonData => createResultList(jsonData));
 
    const createResultList = (results) => {
    console.log("result", results.Search);
    const $results = document.querySelector(`.results`);
    /* Avec For
    
    for (let index = 0; index < results.Search.length; index++) {
        
        console.log("restFor", results.Search[index])
        
    }*/
    /* Avec Map*/

    $results.innerHTML = results.Search.map((resultMap) => {
        console.log("map", resultMap)
       return `<li class="liste" id="${resultMap.imdbID}" >Title: ${resultMap.Title}, Year: ${resultMap.Year}</li>`;
     
    });
     
    $results.addEventListener("click",function(e) {
        // e.target is our targetted element.
                    // try doing it will result LI
                    
                    /*let liste = document.querySelectorAll(".liste");
                    console.log(liste)
                    for (let i = 0; i < liste.length; i++) {
                        const element = liste[i];
                        element.remove()
                        
                    }*/
             
                    
        if(e.target && e.target.nodeName == "LI") {
            console.log(e.target.id +e.target+ " was clicked");
           theId = e.target.id;

            window.open ('Page.html?id='+theId,'_self',false)       

           }console.log(theId)
            
      
        
       /*fetch(`https://www.omdbapi.com/?apikey=${key}&i=${theId}`)
        .then(res => res.json())//response type
        .then((film)=>{
            console.log(`Title:<br> ${film.Title},${film.Plot}, ${film.Year} `)
        })
       .then( (film) => {   
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
        });*/
        .catch(function (err) {
            console.log("Something went wrong!", err);
        });
});
    }

}
    








