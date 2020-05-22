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
    location: {latitude: 35.69, longitude: 139.692}
    date: "2020-05-22"
    sunrise: "04:31"
    sunset: "18:45"
    solar_noon: "11:38"
    day_length: "14:14"
    sun_altitude: 23.920933645061766
    sun_distance: 151397480.19797817
    sun_azimuth: 81.30170918585384
    moonrise: "04:49"
    moonset: "18:14"
    moon_altitude: 28.364507253385916
    moon_distance: 400497.4047371233
    moon_azimuth: 91.22365079853114
    moon_parallactic_angle: -58.90762546964588
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