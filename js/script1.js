   

    const createResultList = (results) => {
 
    }

    const search = value => {
       // const url = `https://musicdemons.com/api/v1/artist/autocomplete`;
        //const url =`https://musicdemons.com/api/v1/artist/256/songs`;
        let xhr = new XMLHttpRequest;
        let myObject = new Oject;
        //Call the open function, GET-type of request, url, true-asynchronous
        
        //call the onload 
        //xhr.onload = function() 
        xhr.onreadystatechange = function onChangeStatus(){
                //check if the status is 200(means everything is okay)
                if (this.readyState == 4 && this.status == 200)
                    {
                        //return server response as an object with JSON.parse
                        console.log(JSON.parse(this.responseText));
                        myObject = JSON.parse(this.responseText)
                        myFunc(myObject)
            }
                    }
        xhr.open('GET', `https://musicdemons.com/api/v1/artist` , true);
        //call send
        xhr.send();
        function myFunc(obj){
          console.log(obj[1].text);
        }
      } 

fetch(`https://musicdemons.com/api/v1/artist`)
.then(myReponse => console.log(myReponse.json()))
.then(theObject => {
  console.log(theObject.text);
  console.log(theObject);
});

/**//*function myPostRequest(e){


let myVariable ="Bea";
let init = new Object;
init = {
  method: 'POST',
  headers: {
    "Content-type": "application/json"
    //"Content-type": "application/x-www-form-urlencoded"
},
//body: JSON.stringlify({name:`${myVariable}`})
body: JSON.stringlify({name:`${e.target.value}`})
};

fetch(`https://musicdemons.com/api/v1/artist/autocomplete`, init)
.then(reponse => console.log(reponse.json()))
}
document.querySelector("#music-search").addEventListener("keydown", search)
*/




/*--------------------------------*/
   /* const handleKeyUpSearch = e => {
        const $input = e.currentTarget;
        search($input.value);
    };

    const init = () => {
        
        document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
    };

    init();

}*/
/*function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
  
  function parseJSON(response) {
    return response.json()
  }
  
  fetch('https://musicdemons.com/api/v1/artist/autocomplete')
    .then(checkStatus)
    .then(parseJSON)
    .then(function(data) {
      console.log('request succeeded with JSON response', data)
    }).catch(function(error) {
      console.log('request failed', error)
    })

    var input = document.querySelector('input[type="search"]')

    var data = new FormData()
    data.append('search', input.search)
    
    
    fetch('https://musicdemons.com/api/v1/artist/autocomplete', {
      method: 'POST',
      body: data
    })*/
/*fetch(``, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: searchParams
})


const app = document.querySelector(`.search`);

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('POST', 'https://musicdemons.com/api/v1/artist/autocomplete', true);
request.onload = function () {

 // Begin accessing JSON data here
 var data = JSON.parse(this.response);
 if (request.status >= 200 && request.status < 400) {
   data.forEach(artist => {
     const card = document.createElement('div');
     card.setAttribute('class', 'card');

     const h1 = document.createElement('h1');
     h1.textContent = artist.name;

     const p = document.createElement('p');
     movie.description = movie.description.substring(0, 300);
     p.textContent = `${movie.description}...`;

     container.appendChild(card);
     card.appendChild(h1);
     //card.appendChild(p);
   });
 } else {
   const errorMessage = document.createElement('marquee');
   errorMessage.textContent = `Gah, it's not working!`;
   app.appendChild(errorMessage);
 }
}

request.send();*/
/*var url = 'https://musicdemons.com/api/v1/artist/autocomplete';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
*/
/*document.getElementById('search');
 function postData(event){
            event.preventDefault();

            let name = document.querySelector("input[type='file'][multiple]");
            let body = document.getElementById('body').value;

            fetch('https://musicdemons.com/api/v1/artist/autocomplete', {
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify({name:name, body:body})
            }).then((res) => res.json())
            .then((data) =>  console.log(data.name))
            .catch((err)=>console.log(err))
        }*/

/*document.getElementById('postData').addEventListener('submit', postData);
var formData = new FormData();
var photos = document.querySelector("input[type='file'][multiple]");

formData.append('title', 'My Vegas Vacation');
formData.append('name', name.files);

fetch('https://musicdemons.com/api/v1/artist/autocomplete', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));*/
//Create the XHR Object


/*fetch("https://musicdemons.com/api/v1/artist/autocomplete").then(response => {
    if (response.ok) {
       return response.json();
    }
 }).then(articolo => console.log(articolo.titolo)).catch(error => console.log("Si è verificato un errore!"))

 var richiesta = new Request("https://musicdemons.com/api/v1/artist/autocomplete", {
    method: "post",
    headers: new Headers({
       "Content-Type": "application/json"
    }),
   
 });
 fetch(richiesta).then(articolo => console.log(articolo.name)).catch(error => console.log("Si è verificato un errore!"))
 */
// url (required), options (optional)
/*fetch('https://musicdemons.com/api/v1/artist/autocomplete', {
	method: 'post'
}).then(function(response) {
	
}).catch(function(err) {
	// Error :(
})
fetch('https://musicdemons.com/api/v1/artist/autocomplete').then(function(response) {
    response.text().then(function(text) {
      poemDisplay.textContent = text;
    });
  });
  function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const url = 'https://musicdemons.com/api/v1/artist/autocomplete';
// The data we are going to send in our request
let data = {
    name: 'Sara'
}
// The parameters we are gonna pass to the fetch function
let fetchData = { 
    method: 'POST', 
    body: data,
    headers: new Headers()
}
fetch(url, fetchData)
.then(function() {
    // Handle response you get from the server
}); */