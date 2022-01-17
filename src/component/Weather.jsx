import React from "react";
import styled from "styled-components";

function Weather() {
  return (
    <Wrapper>
      <div className="container">
        <div className="box">
          {/* TITLE AND DATE DIV */}
          <div className="header">
            <h1>Daily Forecast</h1>
            <p>2021-12-24</p>
          </div>

          {/* SEARCH BOX */}
          <div className="form__box">
            <input type="text" placeholder="Search city name" />
          </div>

          {/* Result Container */}
          <div className="result__box">
            <h2>Abuja</h2>
            <div className="image__box">
              <img src="#" alt="..." />
            </div>

            <div className="result__container">
              <p>Temp: 23&#176; C</p>
              <p>Weather: Clouds</p>
              <p>Temp Range: 23&#176;C / 23&#176;C</p>
            </div>
          </div>
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

      .header {
        margin: 50px 0px 40px 0px;
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

        input[type="text"] {
          border: 2px solid grey;
          padding: 5px 10px;
          width: 70%;
          border-radius: 8px;
          font-family: var(--font-body);
          font-size: 25px;
        }
      }

      .result__box {
        margin: 60px 0px 0px 0px;
        text-align: center;
        font-size: 20px;
        transition: 1s;
        h2 {
          font-family: var(--font-header);
        }
        .image__box {
          border: 2px solid red;
        }

        .result__container {
          margin: 10px 0px;
          font-size: 30px;
          p {
            font-family: var(--font-body);
          }
        }
      }
    }
  }
`;
