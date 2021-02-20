//key: cf01003f0befec9da6daa3fc1d540d35
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// const searchBoxKey=eventValue=>{
//     console.log(eventValue.keyCode);
    // if (eventValue.keyCode==='Enter') {
    // getWeatherInput();
            
    // }
// }
document.getElementById("weatherLocation").addEventListener("keydown",function(event){
    
    //let eventCode=event.key;
console.log(event.key)
if (event.key==='Enter') {
    event.preventDefault();
    getWeatherInput();
            
    }
})

const getWeatherInput = () => {
    const apiKey = `cf01003f0befec9da6daa3fc1d540d35`
    const countryName = document.getElementById("weatherLocation").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`;
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => weatherDetails(data))
}

const weatherDetails = getDetails => {
    console.log(getDetails)
    const degkelvin=getDetails.main.temp;
    const degCelcius=Math.round(degkelvin-273.15);
    //console.log(degCelcius);
   // const roundcelc
    //const tempValue = document.getElementById("tempValue");
    //const looksLike = document.getElementById("looksLike");
    const weatherDiv = document.getElementById("weatherDiv");
    const weatherContainer = `<img src="https://openweathermap.org/img/wn/${getDetails.weather[0].icon}@2x.png" alt="">
    <h1>${getDetails.name}</h1>
    <h3><span id="tempValue">${degCelcius}</span>&deg;C</h3>
    <h1 class="looksLike">${getDetails.weather[0].description}</h1>`;

    weatherDiv.innerHTML = weatherContainer;
}