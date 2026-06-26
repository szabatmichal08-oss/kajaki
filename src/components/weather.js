// api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}

import { useEffect, useState } from "react";

const Weather = () => {
    const [dailyData, setDailyData] = useState([]);

    const APIKey = "7e0ebe73694a3dc34d6b0b2bad8ac6f1";
    const lat = 50.474561145972025;
    const lon = 22.472851132598038;

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}&lang=pl`;

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error("Błąd API");
                }
                return res.json();
            })
            .then(data => {
                // wybieramy prognozę raz dziennie około 12:00
                const days = data.list.filter(item =>
                    item.dt_txt.includes("12:00:00")
                );

                setDailyData(days);
            })
            .catch(err => {
                console.log(err);
            });
    }, [url]);

    return (
        <div className="weather">
            <p>Pogoda</p>

            <div className="weather__header">
                <p>Data:</p>
                <p>Temperatura:</p>
                <p>Wilgotność:</p>
            </div>

            {dailyData.map(day => {
                const date = new Date(day.dt * 1000);

                return (
                    <div className="weather__item" key={day.dt}>
                        <p>
                            {date.toLocaleDateString("pl-PL")}
                        </p>

                        <p>
                            {Math.round(day.main.temp)}°C
                        </p>

                        <p>
                            {day.main.humidity}%
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Weather;