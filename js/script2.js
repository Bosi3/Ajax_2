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
                    let myArr =JSON.parse(this.responseText)
                    fetch(`https://www.omdbapi.com/?apikey=${key}&s=+The`)
                    .then(res => res.json())//response type
                    .then(jsonData => data(jsonData));
                    // myFunction(myArr);
                    console.log( data);
                    //.then(data => console.log(data.Year)) //log the data;
                    //.then(data => console.log(data.Poster));
        }
    }        
    //call send
    xhr.send();
}
/*    xhr.onreadystatechange=(e)=>{

       
console.log(xhr.responseText)
}*/
   /* async function getData() 
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
function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    document.querySelector(".title").innerHTML = out;
}*/
