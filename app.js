let input = document.querySelector(".searchbox > input")
let btn = document.querySelector(".searchbox > button")
let climate = document.querySelector(".weather-box")
let weatherIcon = document.querySelector(".weather-icon")

const apikey = "aa78508951fd0e6fb7b803622cc75ff9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
async function weather(city){
    const response = await fetch(apiurl+`&q=${city}&appid=${apikey}`);
    let data = await response.json();

    console.log(data);
    document.querySelector(".temp").innerHTML=`${data.main.temp}ºc`
    document.querySelector(".city").innerHTML=`${data.name}`
    document.querySelector(".humidityper").innerHTML=`${data.main.humidity}%`
    document.querySelector(".windkm").innerHTML=`${data.wind.speed} km/h`
    document.querySelector(".cloud").innerHTML=`${data.weather[0].main}`
    
    
    
    if(data.weather[0].main === 'Clouds'){
        document.querySelector(".weather-box").style.background = "linear-gradient(#EF5734,#FFCC2F)";
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == 'Clear') {
        document.querySelector(".weather-box").style.background = "linear-gradient(#7EE8FA,#EEC0C6)";
        weatherIcon.src = "images/clear.png";
    } 
    else if(data.weather[0].main == 'Snow'){
        document.querySelector(".weather-box").style.background = "linear-gradient(#1e3c72 , #2a5298)";
        weatherIcon.src = "images/snow.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        document.querySelector(".weather-box").style.background = "linear-gradient(rgb(17, 151, 147) ,rgb(154, 214, 212),rgb(255, 233, 171))";
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == 'Rain'){
        document.querySelector(".weather-box").style.background = "linear-gradient(#80d0c7,#13547a)";
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == 'Mist'){
        document.querySelector(".weather-box").style.background = "linear-gradient(#FFA69E, #861657)";
        weatherIcon.src = "images/mist.png";
    }

    
    
}

btn.addEventListener("click",()=>{
    weather(input.value);
})



















let date = new Date()
let thirtymonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
let sevendays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let today = date.getDay();
let days = sevendays[today];

let thismonth = date.getMonth();
let month = thirtymonths[thismonth];

let dates = date.getDate();

let year = date.getFullYear()

document.querySelector(".day").innerHTML=`${days}`
document.querySelector(".date").innerHTML= `${month}-${dates}-${year}`