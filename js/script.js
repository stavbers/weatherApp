let temp = document.querySelector('.button-dial-label__temp');
let select = document.querySelector('.inp');
let selectOpt;
let city = town["Kharkivs’ka Oblast’"];



getWeather(706483)
select.addEventListener('change', () => {

    selectOpt = select.options[select.selectedIndex].value;
    ba(selectOpt)
    

});
function ba(b){
    Object.keys(town).forEach(function(key) {
        if(b == key) {
            getWeather(town[key]);
        }
      });
}

function setColor(temp, item) {
    if(temp > 0){
        item.style.color = 'red';
}
}


let weatherNow = document.querySelector('.weathe-btn__info');
let weatherPrev = document.querySelector('.weathe-btn__prev');
let weatherNext = document.querySelector('.weathe-btn__next');
let clear = document.querySelector('.clear');
let appContainer = document.querySelector('.app-container');

let itm = document.querySelectorAll('.itm > *');
let weatherData =[];
let couner = 0;

function getWeather(city) {
let url = `http://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=7501295286a1dda1338ea7f343999a0c`;

fetch(url)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        let nowTemp = (data.list[0].main.temp - 273.15).toFixed(1);
        setColor(nowTemp, temp);
        // temp.innerHTML = "Сейчас " + nowTemp + '&deg;';`Сейчас ${nowTemp}&deg;`
        temp.innerHTML = `Сейчас ${nowTemp}&deg;`;
        weatherNext.addEventListener('click', next);
        function next(){
        if(couner !== 39){
            let abc = (data.list[couner].dt_txt).split(""),
                month, 
                day,
                time;
                month = abc.slice(5, 7).join(''); // получение месяца
                day = abc.slice(8, 10).join('');
                time = abc.slice(11, 16).join('');
                console.log( month, day, time)
                weatherNow.innerHTML = data.list[couner].dt_txt;
                couner++;
        } else {
        return false;
        }}

    })
 
    .catch(function () {
        console.log('error')
    });
    
}

clear.addEventListener('click', ()=> {
    itm.forEach((item) => {
        item.classList.add('hide');
    });
    appContainer.classList.add('scroll')
    for(let index = 0; index < 40; index++) {
        createBlock();
    }
    hideWeatherContent();
    // createBlock();
    // openWeatherContent(0);
});



// data[index].weather[0].icon
    function createBlock(){
        let infoDiv = document.createElement('div');
        infoDiv.classList.add('button');
        infoDiv.innerHTML =  
        '<button class="button button-block button-mod">\n' +
               '<div class="weather">\n' +
                 '<div class="weather-up">\n' +
                  '<div class="weather-up__date">24 ноябр \n' +
                    '<span>12.00</span>\n' +
                  '</div>\n' +
                  '<div class="weather-up__icon"><img src="" alt=""></div>\n' +
                  '<div class="weather-up__temp">-3&deg;</div>\n' +
                  '<div class="weather-up__precip">0%</div>\n' +
                  '<div class="button button-small button-btn">\n' +
                  '<i class="fas fa-chevron-right"></i>\n' +
                  '</div>\n' +
                  '</div>\n' +
                  '<div class="weather-down">\n' +
                  '<div class="weather-down__l">\n' +
                   '<div class="weather-dop">\n' +
                    '<p class="weather-dop__text">Ветер</p>\n' +
                    '<p class="weather-dop__value weather-dop__wind">22</p>\n' +
                   '</div>\n' +
                   '<div class="weather-dop">\n' +
                    '<p class="weather-dop__text">Порывы</p>\n' +
                    '<p class="weather-dop__value weather-dop__gusts">22</p>\n' +
                   '</div>\n' +
                   '<div class="weather-dop">\n' +
                    '<p class="weather-dop__text">Влажность</p>\n' +
                    '<p class="weather-dop__value weather-dop__wet">22</p>\n' +
                   '</div>\n' +
                  '</div>\n' +
                  '<div class="weather-down__r">\n' +
                   '<div class="weather-dop">\n' +
                    '<p class="weather-dop__text">Облачность</p>\n' +
                    '<p class="weather-dop__value weather-dop__cloud">11</p>\n' +
                   '</div>\n' +
                   '<div class="weather-dop">\n' +
                    '<p class="weather-dop__text">Давление</p>\n' +
                    '<p class="weather-dop__value weather-dop__pressure">11</p>\n' +
                   '</div>\n' +
                   '<div class="weather-dop">\n' +
                   '<p class="weather-dop__text">Осадки</p>\n' +
                   '<p class="weather-dop__value weather-dop__drop">11</p>\n' +
                   '</div>\n' +
                   '</div>\n' +
                   '</div>\n' +
                   '</div>\n' +
                   '</button>\n'
                   appContainer.append(infoDiv);
    };

    function hideWeatherContent() {
        document.querySelectorAll('.weather-down').forEach(function(item) {
            item.classList.add('hide');
        });
    }
    function openWeatherContent(i) {
        document.querySelectorAll('.weather-down')[i].classList.toggle('open');
    } 

    appContainer.addEventListener('click', (e)=> {
        const t = e.target;
        if (t && t.classList.contains('button-btn')) {
            // console.log(document.querySelectorAll('.button-btn'))
            document.querySelectorAll('.button-btn').forEach(function(item, i) {
                if(t == item) {
                    hideWeatherContent();
                    openWeatherContent(i);
                    console.log(item, i)
                }
            });
        }
    });
    

 






    // fetch(url)
//     .then(function (resp) { return resp.json() })
//     .then(function (data) {
//         console.log(data);
       
//         let nowTemp = (data.main.temp - 273.15).toFixed(1);
//         y(nowTemp, temp);
//         temp.innerHTML = "Сейчас " + nowTemp + '&deg;';
        
//         // document.querySelector('.package-name').textContent = data.name;
//         // document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
//         // document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
//         // //https://openweathermap.org/img/wn/02d@2x.png
//         // document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   
//     })
//     .catch(function () {
//         // catch any errors
//         console.log('error')
//     });