const title = document.getElementById("title");
const content = document.getElementById("content");

var search = window.location.search.substr(1);

if(search){
    var api = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&rvslots=*&rvprop=content&formatversion=2&titles=" + search;
    
    fetch(api).then(response => response.json()).then(response => {
        
        var heading = response.query.pages[0].title;
        var api = "https://en.wikipedia.org/w/api.php?action=parse&origin=https://notapedia.github.io/reader.html&format=json&page="+encodeURIComponent(heading);
        title.innerHTML = heading;
        fetch(api).then(response => response.json()).then(response => {
            content.innerHTML = response.parse.text['*'];
        })
    })
}
