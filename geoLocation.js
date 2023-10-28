const getLocation = document.getElementById('Location');

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        getLocation.innerText = "Location Not Found";
    }
    // console.log('Hello')
}

function showPosition(data){
    console.log(data);
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${data.coords.latitude}&lon=${data.coords.longitude}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    fetch(url, {method:'GET'})
    .then((res) =>  res.json())
    .then((data)=>{
        getLocation.innerText = `${data.city.name}`;
    })
}
