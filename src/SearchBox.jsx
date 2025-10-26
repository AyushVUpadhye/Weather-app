import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, seterror] = useState(false);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7b24b5c122969c66758e2abe2dbe49a6";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jasonResponse = await response.json();
            let result = {
                city: city,
                temp : jasonResponse.main.temp,
                tempMin : jasonResponse.main.temp_min,
                tempMax : jasonResponse.main.temp_max,
                humidity : jasonResponse.main.humidity,
                fellsLike : jasonResponse.main.feels_like,
                weather : jasonResponse.weather[0].description
            }
            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }   
    }

    let handleChange = (event) => {
        setCity(event.target.value)
    };

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo();   
            updateInfo(newinfo);
        } catch(err){
            seterror(true);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{color: "red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}