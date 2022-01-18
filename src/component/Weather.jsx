import React, { useState } from "react";
import styled from "styled-components";

function Weather() {
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [dateToday, setDateToday] = useState(date);

  const api = {
    url: "http://api.openweathermap.org/data/2.5/",
    key: "06736dc6d5bad1f991b443cedc500e96",
  };

  const getInput = (e) => {
    setInput(e.target.value);
  };

  const iconURL = "http://openweathermap.org/img/w/";

  const getWeatherData = (e) => {
    if (e.key === "Enter" && input === "") {
      setErrorMsg("You haven't added any city name");
      setError(true);
    }
    if (e.key === "Enter" && input !== "") {
      setIsLoading(true);
      setError(true);
      fetch(`${api.url}weather?q=${input}&units=metric&APPID=${api.key}`)
        .then((res) => {
          if (!res.ok) {
            throw Error("Failed to Fetch Data or Invalid City Name");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setWeather(data);
          setInput("");
          setError(false);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setError(true);
          setErrorMsg(err.message);
          setIsLoading(false);
        });
    }
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="box">
          {/* TITLE AND DATE DIV */}
          <div className="header">
            <h1>Daily Forecast</h1>
            <p>{dateToday}</p>
          </div>

          {/* SEARCH BOX */}
          <div className="form__box">
            <input
              type="text"
              placeholder="Search city name"
              onChange={getInput}
              value={input}
              onKeyPress={getWeatherData}
            />
          </div>

          {error ? (
            <p className={errorMsg !== "" ? "error" : " "}>{errorMsg}</p>
          ) : (
            <div className="result__box">
              <h2>
                {weather.name}, {weather.sys.country}
              </h2>
              <div className="image__box">
                <img
                  src={iconURL + weather.weather[0].icon + ".png"}
                  alt={weather.weather[0].main}
                />
              </div>

              <div className="result__container">
                <p>Temp: {Math.round(weather.main.temp)}&#176; C</p>
                <p>Weather: {weather.weather[0].main}</p>
                <p>
                  Temp Range: {Math.round(weather.main.temp_min)}&#176;C /{" "}
                  {Math.round(weather.main.temp_max)}&#176;C
                </p>
              </div>
            </div>
          )}

          {isLoading && <h3 className="loader"></h3>}
        </div>
      </div>
    </Wrapper>
  );
}

export default Weather;

const Wrapper = styled.section`
  height: var(--100vh);
  align-items: center;
  display: flex;
  justify-content: center;

  .container {
    height: var(--100vh);
    width: var(--100vh);
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
      border-radius: 8px;
      background: white;
      width: 100%;
      height: 80vh;
      overflow: hidden;
      max-width: 350px;
      background: url("https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80");
      background-repeat: no-repeat;
      background-size: var(--100vh);
      background-position: bottom;

      @media only screen and (max-width: 2560px) {
        border: 2px solid rgb(37, 150, 190);
        width: 100%;
        max-width: 2560px;
        height: 100%;
      }

      .header {
        margin: 10px 0px 40px 0px;
        text-align: center;
        color: black;
        font-size: 30px;

        h1 {
          font-family: var(--font-header);
        }
        p {
          font-family: var(--font-body);
        }
      }

      .form__box {
        width: 100%;
        margin-left: 60px;
        @media only screen and (min-width: 768px) {
          margin-left: 110px;
        }

        input[type="text"] {
          border: 2px solid grey;
          padding: 5px 10px;
          width: 70%;
          border-radius: 8px;
          font-family: var(--font-body);
          font-size: 25px;
        }

        input[type="text"]:focus {
          border: 2px solid rgb(37, 150, 190);
        }
      }

      .result__box {
        margin: 20px 0px 0px 0px;
        text-align: center;
        font-size: 20px;
        transition: 1s;
        @media only screen and (min-width: 768px) {
          margin-top: 50px;
        }

        h2 {
          font-family: var(--font-header);
        }
        .image__box {
          img {
            width: 17%;
          }
        }

        .result__container {
          margin: 10px 0px;
          font-size: 30px;
          @media only screen and (min-width: 768px) {
            font-size: 40px;
          }
          p {
            font-family: var(--font-body);
          }
        }
      }
    }
  }
`;
