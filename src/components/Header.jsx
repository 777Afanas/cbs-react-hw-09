

export default function Header({data}) {


    return (
        <div className="container">
        <div className="header">
          <div className="city">
            <p>{data.name}</p>
          </div>
        </div>

        <div className="temp">
          {data.main ? (
            <h1>
              {data.main.temp.toFixed()}
              °C
            </h1>
          ) : null}
        </div>
        <div className="desc">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>

    )
}