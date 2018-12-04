const key = 'a49f54f4';
let theTitle="";
let theYear ="";
//const theTitle = entryForm[0];
var form = document.forms.namedItem("fileinfo");
document.getElementById('submit-form').addEventListener("click", formValidated);

function formValidated(e)  {
	e.preventDefault();

	var form = document.getElementById('main-form');
	var myData = new FormData(form);
	
	// Display the key/value pairs
	for(var entryForm of myData.entries()) {
       console.log(entryForm[1]); 
       console.log(entryForm[0]+ ', '+ entryForm[1]); 
       if(entryForm[0] = "movie"){
        let theTitle = entryForm[1];
       };
       if(entryForm[0] = "annee"){
        let theYear = entryForm[1];
       }
    }
    
   // const theTitle = entryForm[1];
    async function getData() 
    {
        //await the response of the fetch call
       let response = await fetch(`https://www.omdbapi.com/?apikey=${key}&t=${theTitle}`);
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
        var div1 = document.querySelector('.poster');

        div1.innerHTML=`Poster:<br><img width="100" height="100" src=" ${film.Poster} " onclick="next ()">`
        //let monPoster = document.getElementById("myImg").src;
        //monPoster.innerHTML = film.Poster;
        let monYear = document.querySelector(".year");
        monYear.innerHTML = `Year:<br> ${film.Year}`;
       
}
}/*async function getYdata() 
{
    //await the response of the fetch call
   let response = await fetch(`https://www.omdbapi.com/?apikey=${key}&y=${theYear}`);
    //proceed once the first promise is resolved.
   let data = await response.json()
    //proceed only when the second promise is resolved
    return data;
}
//call getData function
getYdata()
.then(data => display(data));*/


const key = 'a49f54f4';
//const title = document.getElementById("monTite");
let xhr = new XMLHttpRequest;
{   

    const createResultList = (results) => {
        const $results = document.querySelector(`.results`);
        $results.innerHTML = results.map(createResultListItem).join(``);

        document.querySelector(`.results`).addEventListener(`mouseup`, handleClick);
        
    }

    const createResultListItem = result => `<li class="result" id="${result.id}">${result.Title}</li>`;
//console.log(result);
    const createYearList = years => {
        const $years = document.querySelector(`.year`);
        years.forEach(year => {
            $years.appendChild(createYearListItem(year));
        });

    }

    const createYearListItem = result => {
        const $title = document.createElement('h3');
        //const $video = document.createElement('iframe');

        $title.innerText = result.title;

       /* $video.setAttribute('min-width', '420');
        $video.setAttribute('min-height', '315');
        $video.setAttribute('src', `https://www.youtube.com/embed/${result.youtube_id}`)*/

        const $yearListItem = document.createElement('li');

        $yearListItem.appendChild($title);
        //$yearListItem.appendChild($video);

        return $yearListItem;
    };

    /*const createPosterInfo = poster => {
        const $title = document.querySelector('.poster');
        $title.innerText = artist.name;
    };*/

    const search = value => {
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
.then(data => console.log(data.Title))
        
    };
///////////////////////Method1
    getData()
.then(data = (data) =>{
        let monTi = document.querySelector(".title");
        monTi.innerHTML = data.Title;
        //let 

    //(data.Title)//log the data
})
///////////////////////Method2
getData()
.then(data => display(data));

const display = (film) => {   
        let monTi = document.querySelector(".title");
        monTi.innerHTML = film.Title;
       
}

    /*const findArtistById = id => {
        const url = `https://www.omdbapi.com/?apikey=${key}&t=+The+Godfather`;

        fetch(url)
        .then(response => response.json())
        .then(jsonData => createArtistInfo(jsonData));
    };

    const findyearsById = id => {
        const url = `https://www.omdbapi.com/?apikey=${key}&t=+The+Godfather`;

        fetch(url)
        .then(response => response.json())
        .then(jsonData => createYearList(jsonData));
    }*/

    const handleKeyUpSearch = e => {
        const $year = document.querySelector(`.year`);
        $year.innerHTML = "";
        const $input = e.currentTarget;
        if($input.value == ""){
            const $results = document.querySelector(`.results`);
            $results.innerHTML = "";
        }else {
            search($input.value);
        }
    };

    const handleClick = e => {
        const $results = document.querySelector(`.results`);
        const $search = document.getElementById('monTitle');
        $results.innerHTML = "";
        $search.innerText = "";

        const $input = e.target;
        console.log(e.target)
        findArtistById($input.id);
        findYearById($input.id);
    }

    const init = () => {
        document.getElementById('monTitle').addEventListener(`keyup`, handleKeyUpSearch);
    };

    init();

}