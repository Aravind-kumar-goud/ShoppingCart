import React, { useState } from 'react'

function Weather() {

    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
        city: "",
        country: "",
    });

    const APIKEY = "9ad1336a393d8da13d@d5239ee1570";
    async function weatherData(e) {
        e.preventDefault();
        if (form.city ==="") {
            alert("Add values");
        } else {
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country},&APPID=${APIKEY}`
            )
                .then((res) => res.json())
                .then((data) => data);

            setWeather({ data: data });
        }
    }


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city") {
            setForm({ ...form, city: value });
        }
        if (name === "country") {
            setForm({ ...form, country: value });
        }
    };


    return (
        <div>
            <h2>Weather App</h2>
            <form>
                <input
                    type="text"
                    placeholder="city"
                    name="city"
                    onChange={(e) => handleChange(e)}
                />
                &nbsp; &nbsp; &nbsp;&nbsp;
                <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    onChange={(e) => handleChange(e)}
                />
                <button className="getweather" onClick={(e) => weatherData(e)}>
                    Submit
                </button>

            </form>
        </div>
    )
}

export default Weather