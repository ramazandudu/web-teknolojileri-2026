document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("query-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun normal gönderimini engeller
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        var data = null;

        queryWord = document.getElementById("query").value;
        url = "https://api.collectapi.com/imdb/imdbSearchByName?query=" + queryWord

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                getFilms(this.responseText);
            }
        });
        
        xhr.open("GET", url);
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("authorization", "apikey 7EgXHsWMJn2XuNr9qc2WsZ:5jtpj4VOOBfZYSe58YcNnr");
        
        xhr.send(data); 
    })
})

function getFilms(data){
    var jsonData = JSON.parse(data);
    var films = jsonData.result;
    var cardHTML = "";
    var movieRow = document.getElementById("movie-container");
    movieRow.innerHTML = "";
    var i = 0;
    films.forEach(function(film, index) {
        if(index % 5 === 0){
            cardHTML += `</div><div class="card-group" id="movie-group ${i}">`
            i++
        }
        cardHTML +=
                    `
                        <div class="card shadow" onclick="openIMDB(this)" data-imdb-id="${film.imdbID}">
                            <img src="${film.Poster}" class="card-img-top-movie" alt="${film.Title}">
                                <div class="card-body">
                                    <h5 class="card-title">${film.Title}</h5>
                                    <p class="card-text">Year: ${film.Year}</p>
                                    <p class="card-text">Type: ${film.Type}</p>
                                    <p class="card-text">IMDb ID: ${film.imdbID}</p>
                                </div>
                        </div>
                    `;
    });
    movieRow.innerHTML += cardHTML;
}

function openIMDB(element){
    var IMDBID = element.getAttribute('data-imdb-id')
    window.open('https://www.imdb.com/title/' + IMDBID, '_blank');
}

