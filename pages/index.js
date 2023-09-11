import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchWeatherData } from "./features/weatherSlice";

export default function Home() {
  useEffect(() => {}, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main>
      <h1>Weather App</h1>
      <p>Find out the current weather situation around the world</p>
      <h3>Loading please wait...</h3>
      <section id="app">
        <form id="search-form">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search city..."
            autoComplete="off"
          />
          <button type="button">Search</button>
        </form>

        <article id="current-forecast">
          <h1 className="city">city-name, country</h1>
          <p className="temp">℃</p>
          <p className="description"></p>
          <p className="min-max-temp">℃ ℃</p>
        </article>

        <article id="feels-like">
          <h1>Feels Like</h1>
          <p className="feels-like-temp">℃</p>
        </article>

        <article id="humidity">
          <h1>Humidity</h1>
          <p className="humidity-value">%</p>
        </article>
      </section>
    </main>
  );
}
