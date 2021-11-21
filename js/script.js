let temp = document.querySelector('.button-dial-label__temp');
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
       
        let nowTemp = (data.main.temp - 273.15).toFixed(1);
        y(nowTemp, temp);
        temp.innerHTML = "Сейчас " + nowTemp + '&deg;';
        
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
let appContainer = document.querySelector('.app-container');
let itm = document.querySelectorAll('.itm > *');
let couner = 0;

console.log(appContainer)

clear.addEventListener('click', ()=> {
    itm.forEach((item) => {
        item.classList.add('hide');
    });
    createBlock('div', appContainer)
});



fetch('http://api.openweathermap.org/data/2.5/forecast?id=706483&appid=7501295286a1dda1338ea7f343999a0c')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
     
        console.log(data);

        weatherNext.addEventListener('click', next) 
        function next(){
        if(couner !== 39){
        couner++;
    //    console.log(data.list[couner].dt_txt);
       let abc = (data.list[couner].dt_txt).split("");
       let month; // получение месяца
       let day;
       let time;

    // abc = abc.split(""); // получение массива чисел даты
    month = abc.slice(5, 7).join(''); 
    day = abc.slice(8, 10).join('');
    time = abc.slice(11, 16).join('');
    
console.log( month, day, time)
   

       weatherNow.innerHTML = data.list[couner].dt_txt;
       

        } else {
        return false;
        }

        }
        weatherNow.innerHTML = data.list[0].dt_txt
        
    })
    .catch(function () {
        console.log('error')
    });

    // weatherNow.innerHTML = data.list[0].dt_txt
    function createBlock(elem, container){
        let infoDiv = document.createElement(elem);
        infoDiv.classList.add('button');
        infoDiv.innerHTML =  
        ' <div class="button button-small">\n' +
        '<i class="fas fa-chevron-right"></i>\n' + 
        '</div>'
        container.append(infoDiv);
    };


    let openWeather = document.querySelector('.button-btn');
    let weatherDop = document.querySelector('.weather-down');
    openWeather.addEventListener('click', ()=> {
        if(weatherDop.classList.contains('open')){
            weatherDop.classList.add('hide');
            weatherDop.classList.remove('open');
           } else {
            weatherDop.classList.add('open');
           }
    });
  