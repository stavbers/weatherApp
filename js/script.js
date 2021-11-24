let temp = document.querySelector('.button-dial-label__temp');
let select = document.querySelector('.inp');
let selectOpt;
// let city = town["Kharkivs’ka Oblast’"];



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
}else {
    item.style.color = '#067cf8'; 
}
}


let weatherTimeNow = document.querySelector('.subtle');
let weatherNext = document.querySelector('.button-next');
let weatherPrev = document.querySelector('.button-prev');
let anyWeather = document.querySelector('.button-link');
let appContainer = document.querySelector('.app-container');

let itm = document.querySelectorAll('.itm > *');
let couner = 0;
let WindDeg = '';
function getWeather(city) {
let url = `http://api.openweathermap.org/data/2.5/forecast?id=${city}&appid=7501295286a1dda1338ea7f343999a0c`;

fetch(url)
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        let weatherArr = data.list;
        let nowTemp = (data.list[0].main.temp - 273.15).toFixed(1);
        temp.innerHTML = `Сейчас ${nowTemp}&deg;`;
        console.log(data);
        // console.log(weatherArr);
        function getWeatherDate(couner) {
            if(couner >= 0){ 
                let abc = (data.list[couner].dt_txt).split(""),
                    month, 
                    day,
                    time;
                    month = abc.slice(5, 7).join(''); // получение месяца
                    day = abc.slice(8, 10).join('');
                    time = abc.slice(11, 16).join('');
                    console.log( month, day, time);
                    weatherTimeNow.innerHTML = `${month} ${day} ${time}`;
        };
    }
        function next(){
            if(couner !== 39){
                getWeatherDate(couner);
                couner++;
            };
        };
            function prev() {
            if(couner > 0){
                couner--;
                getWeatherDate(couner-1);
            };
            }
            function displayFullWeather(arr) {
                // console.log(arr.length);
                for(let i = 0; i < arr.length; i++){
                    createBlock(i);
                    changeWindDeg(weatherArr[i].wind.deg);
                    // console.log(weatherArr[i].wind.deg)
                }
            }
            // changeWindDeg(weatherArr[i].wind.deg);
            // changeWindDeg(24);
            // changeWindDeg(257);
            function changeWindDeg(i){
                
                // if(11.25<= i <= 348.75){
                if(i > 348.75){
                    WindDeg = 'N';
                }else if(i >= 11.25 && i <= 33.75) {
                    WindDeg = 'NNE';
                }else if(i >= 33.75 && i <= 56.25) {
                    WindDeg = 'NE';
                }else if(i >= 56.25 && i <= 78.75) {
                    WindDeg = 'ENE';
                }else if(i >= 78.75 && i <= 101.25) {
                    WindDeg = 'ESE';
                }else if(i >= 123.75 && i <= 146.25) {
                    WindDeg = 'SE';
                }else if(i >= 146.25 && i <= 168.75) {
                    WindDeg = 'SSE';
                }else if(i >= 168.75 && i <= 191.25) {
                    WindDeg = 'S';
                }else if(i >= 191.25 && i <= 213.75) {
                    WindDeg = 'SSW';
                }else if(i >= 213.75 && i <= 236.25) {
                    WindDeg = 'SW';
                }else if(i >= 236.25 && i <= 258.75) {
                    WindDeg = 'WSW';
                }else if(i >= 258.75 && i <= 281.25) {
                    WindDeg = 'W';
                }else if(i >= 281.25 && i <= 303.75) {
                    WindDeg = 'WNW';
                }else if(i >= 303.75 && i <= 326.25) {
                    WindDeg = 'NNW';
                }else if(i >= 326.25 && i <= 348.74) {
                    WindDeg = 'NNW';
                }else {
                    WindDeg = 'NNW';
                }
                console.log(i)
            }
            // ${weatherArr[0].weather[0].icon}
            // ${weatherArr[0].wind.speed}
            // ${weatherArr[0].wind.deg}
            function createBlock(i){
                let infoDiv = document.createElement('div');
                infoDiv.classList.add('button');
                infoDiv.innerHTML =  
                `<button class="button button-block button-mod">\n
                       <div class="weather">\n
                         <div class="weather-up">\n
                          <div class="weather-up__date">24 ноябр \n
                            <span>12.00</span>\n
                          </div>\n
                          <div class="weather-up__icon"><img src="https://openweathermap.org/img/wn/${weatherArr[i].weather[0].icon}@2x.png" alt=""></div>\n
                          <div class="weather-up__temp">-3&deg;</div>\n
                          <div class="weather-up__precip">${weatherArr[0].weather[0].id}0%</div>\n
                          <div class="button button-small button-btn">\n
                          <i class="fas fa-chevron-right"></i>\n
                          </div>\n
                          </div>\n
                          <div class="weather-down">\n
                          <div class="weather-down__l">\n
                           <div class="weather-dop">\n
                            <p class="weather-dop__text">Ветер</p>\n
                            <p class="weather-dop__value weather-dop__wind">${weatherArr[i].wind.speed}${WindDeg}</p>\n
                           </div>\n
                           <div class="weather-dop">\n
                            <p class="weather-dop__text">Порывы</p>\n
                            <p class="weather-dop__value weather-dop__gusts">${weatherArr[i].wind.gust}</p>\n
                           </div>\n
                           <div class="weather-dop">\n
                            <p class="weather-dop__text">Влажность</p>\n
                            <p class="weather-dop__value weather-dop__wet">22</p>\n
                           </div>\n
                          </div>\n
                          <div class="weather-down__r">\n
                           <div class="weather-dop">\n
                            <p class="weather-dop__text">Облачность</p>\n
                            <p class="weather-dop__value weather-dop__cloud">11</p>\n
                           </div>\n
                           <div class="weather-dop">\n
                            <p class="weather-dop__text">Давление</p>\n
                            <p class="weather-dop__value weather-dop__pressure">11</p>\n
                           </div>\n
                           <div class="weather-dop">\n
                           <p class="weather-dop__text">Осадки</p>\n
                           <p class="weather-dop__value weather-dop__drop">11</p>\n
                           </div>\n
                           </div>\n
                           </div>\n
                           </div>\n
                           </button>\n`
                           appContainer.append(infoDiv);
            };

            function clearContainer(){
                anyWeather.addEventListener('click', ()=> {
                    itm.forEach((item) => {
                        item.classList.add('hide');
                    });
                    appContainer.classList.add('scroll')
                    // for(let index = 0; index < 40; index++) {
                    //     createBlock();
                    // }
                    displayFullWeather(weatherArr)
                    hideWeatherContent();
                });
            }

            weatherNext.onclick = next;
            weatherPrev.onclick = prev;
            setColor(nowTemp, temp);
            clearContainer()
    })
 
    .catch(function () {
        console.log('error')
    }); 
}





   

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
    

 



    // https://openweathermap.org/img/wn/02d@2x.png


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