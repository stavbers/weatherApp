let temp = document.querySelector('.button-dial-label span');
let select = document.querySelector('.inp');
let selectOpt;
let city = town["Kharkivs’ka Oblast’"];



// getWeather(706483)
select.addEventListener('change', () => {

    selectOpt = select.options[select.selectedIndex].value;
    ba(selectOpt)
    

});
function ba(b){
    Object.keys(town).forEach(function(key) {
        // console.log(key, ':', this[key]);
        
        if(b == key) {
            // ab(selectOpt);
            // ab(town[key]);
            getWeather(town[key]);
        }
      });
}

function ab(a){
    console.log(a);
}
function y(y, z) {
    if(y > 0){
    z.style.color = 'red';
}
}
function getWeather(city) {
let url = `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=7501295286a1dda1338ea7f343999a0c`;
// console.log(url)
fetch(url)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
       
        let nowTemp = (data.main.temp - 273).toFixed(1);
        y(nowTemp, temp);
        temp.innerHTML = nowTemp + '&deg;';
        
        // document.querySelector('.package-name').textContent = data.name;
        // document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        // document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        // //https://openweathermap.org/img/wn/02d@2x.png
        // document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   
    })
    .catch(function () {
        // catch any errors
        console.log('error')
    });
}


let weatherNow = document.querySelector('.weathe-btn__info');
let weatherPrev = document.querySelector('.weathe-btn__prev');
let weatherNext = document.querySelector('.weathe-btn__next');
let clear = document.querySelector('.clear');
let topBar = document.querySelector('.app-top-bar');
let content = document.querySelector('.app-content');
let couner = 0;


clear.addEventListener('click', ()=> {
topBar.innerHTML = '';
content.innerHTML = '';
})



fetch('http://api.openweathermap.org/data/2.5/forecast?id=706483&appid=7501295286a1dda1338ea7f343999a0c')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
     
        console.log(data);

        weatherNext.addEventListener('click', next) 
        function next(){
        if(couner !== 39){
        couner++;
       console.log(data.list[couner].dt_txt) 
       weatherNow.innerHTML = data.list[couner].dt_txt
        } else {
        return false;
        }
        console.log(couner)
        }
        weatherNow.innerHTML = data.list[0].dt_txt
    })
    .catch(function () {
        console.log('error')
    });

    // weatherNow.innerHTML = data.list[0].dt_txt