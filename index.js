const input = document.querySelector(".search-input");

input.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        var value = input.value;
        if(value){
            window.location.href = 'reader.html?' + value;
        }
    }
})
