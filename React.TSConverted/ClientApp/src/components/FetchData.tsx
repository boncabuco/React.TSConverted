import React, { useEffect, useState } from 'react';

interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

const FetchData = () => {
    const [forecasts, setForecasts] = useState<WeatherForecast[]>([]);
    const [loading, setLoading] = useState(true);

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json() as WeatherForecast[];
        setForecasts(data);
        setLoading(false);
    }

    useEffect(() => {
        populateWeatherData();
    }, []);

    const renderForecastsTable = (forecasts: WeatherForecast[]) => {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderForecastsTable(forecasts);

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
}

export default FetchData