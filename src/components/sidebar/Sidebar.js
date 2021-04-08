import { useEffect, useState } from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
const Sidebar = () => {

    const [p, setP] = useState()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setP(position)
                console.log(position);
            },
            (error) => {
                console.error('Error Code = ' + error.code + ' - ' + error.message);
            }
        );
    }, [])
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '2990c3e2c8639b72fb985d6cf8fb1840',
        lat: '28.2',
        lon: '28.2',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });





    return (

        <div style={{ position: "sticky", height: "100vh" }} className='ui segment '>

            {p && <ReactWeather

                locationLabel="Munich"
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="Israel"
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
            />}
        </div>
    )
}

export default Sidebar;