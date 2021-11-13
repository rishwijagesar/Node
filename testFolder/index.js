function consultarStatusLed(){
    let url = 'http://localhost:3000/';

    axios.get(url, conf)
        .then(function (response) {
            changeButtons(response.data.status);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

const $ = document.querySelector.bind(document);

function changeButtons(valor){
    if(valor == false){
        $(".div-buttons").innerHTML = `<input type="image" src="img/on.png" class="buttons" onclick="mudarStatusLed()">`;        
        $(".title").innerHTML = `
            <img src="img/led-off.svg" class="img-led">
            <h3 id="text-led" style='color:green'>Led Controller</h3>
            <img src="img/led-off.svg" class="img-led">
        `;
    }else {
        $(".div-buttons").innerHTML = `<input type="image" src="img/off.png" class="buttons" onclick="mudarStatusLed()">`;        
        $(".title").innerHTML = `
            <img src="img/led-on.svg" class="img-led">
            <h3 id="text-led" style='color:red'>Led Controller</h3>
            <img src="img/led-on.svg" class="img-led">
        `;
    }
}

function mudarStatusLed(){
    consultarStatusLed();
}

consultarStatusLed();
