const apiKey = "21522a63341b1abf945c099bedac9a5d"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
	const response = await fetch(apiurl + city + `&appid=${apiKey}`);
	var data = await response.json();


	console.log(data);

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


	if(data.weather[0].main == "Clouds"){
		weatherIcon.src = "images/clouds.png";
	}
	if(data.weather[0].main == "clear"){
		weatherIcon.src = "images/clear.png";
	}
	if(data.weather[0].main == "Rain"){
		weatherIcon.src = "images/rain.png";
	}
	if(data.weather[0].main == "Drizzel"){
		weatherIcon.src = "images/drizzel.png";
	}
	if(data.weather[0].main == "Mist"){
		weatherIcon.src = "images/mist.png";
	}
}


searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value);
})






