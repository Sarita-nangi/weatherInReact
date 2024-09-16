import {React,useState} from 'react'

const Weather = () => {
    const [city,setCity]=useState("")
    const [weatherData,setWeather]=useState(null)
    const getWeather= async()=>{
        const apiKey="d467896b42adb684d0dfb1d86f3c84b3"
        try{
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            const data= await response.json()
           console.log(data)
           if(data.cod===200){
            console.log(data)
      setWeather(data)

          }
           else{
            setWeather("city not found")
           }
         }
        catch(error){
            console.log(error)
        }
       
        

    }

    const onSubmit=(event)=>{
        event.preventDefault()
        console.log(city) 
       getWeather()

    }
    const getInput=(event)=>{
        setCity(event.target.value)
        
      
    }

  return (
    <div>
          <form onSubmit={onSubmit}>
          <input type="search" onChange={getInput} value={city}/><br/><br/>
          <button type="submit" >Get Weather</button>
          </form>
       {weatherData && (
    
        <div>
          <h1>Weather in {weatherData.name}</h1>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
       )}


</div>
  )}
export default Weather