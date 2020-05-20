# Burning Suns Stargazing

Version ??

## Data models

State object reference for `DetailPage.js`:

currentData

```json
{
    observation_time: "07:47 PM"
    temperature: 13
    weather_code: 122
    weather_icons: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"]
    weather_descriptions: ["Overcast"]
    wind_speed: 19
    wind_degree: 210
    wind_dir: "SSW"
    pressure: 1021
    precip: 0.1
    humidity: 72
    cloudcover: 100
    feelslike: 12
    uv_index: 2
    visibility: 16
    is_day: "yes"
}
```

forecastData

```json
{
    date: "2020-05-19"
    date_epoch: 1589846400
    astro: {sunrise: "05:35 AM", sunset: "08:40 PM", moonrise: "04:34 AM", moonset: "05:42 PM", moon_phase: "Waning Crescent", …}
    mintemp: 11
    maxtemp: 19
    avgtemp: 15
    totalsnow: 0
    sunhour: 9.4
    uv_index: 4
}
```

astroData

```json
{
    sunrise: "05:35 AM"
    sunset: "08:40 PM"
    moonrise: "04:34 AM"
    moonset: "05:42 PM"
    moon_phase: "Waning Crescent"
    moon_illumination: 11
}
```

locData

```json
{
    name: "Portland"
    country: "United States of America"
    region: "Oregon"
    lat: "45.524"
    lon: "-122.675"
    timezone_id: "America/Los_Angeles"
    localtime: "2020-05-20 12:47"
    localtime_epoch: 1589978820
    utc_offset: "-7.0"
}
```