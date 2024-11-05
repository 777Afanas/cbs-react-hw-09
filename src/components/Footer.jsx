

export default function Footer({data}) {


    return (
        <div className="footer">
          <div className="feels">
            {data.main ? (
              <p className="bold">
                {data.main.feels_like.toFixed()}
                °C
              </p>
            ) : null}
            <p>Відчувається як</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Вологість</p>
          </div>
          <div className="wind">
            {data.wind ? (
              <p className="bold">
                {`${data.wind.speed} `}
                М/С
              </p>
            ) : null}
            <p>Вітер</p>
          </div>
        </div>
    )
}