
const title = document.getElementById("title");
const content = document.getElementById("content");

var search = window.location.search.substr(1);

if(search){
    var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=revisions&rvslots=*&rvprop=content&formatversion=2&titles=" + search;

    fetch(api)
    .then(response => response.json());
    .then(response => {
        response = response.query.pages;
        var pageid = Object.keys(response)[0];
        var extract = response[pageid].extract;
        
        title.innerHTML = search[0].toUpperCase() + search.substring(1).toLowerCase();
        content.innerHTML = extract;
    })
}
