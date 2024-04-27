import propTypes from "prop-types";
import History from "./History";

const WeatherHistory = ({ theme,tempType, weatherHistory }) => {
  return (
    <div className="weather-history-box">
      <h2>Weather History</h2>
      <div className="history-box">
        {weatherHistory.length >= 1 ? (
          weatherHistory.map((data, index) => {
            return (
              <History
                key={index}
                theme={theme}
                tempType={tempType}
                searchDate={data.searchDate}
                icon={data.icon}
                cTemp={data.cTemp}
                fTemp={data.fTemp}
                city={data.city}
              />
            );
          })
        ) : (
          <h1>You do not searched any weather yet.</h1>
        )}
      </div>
    </div>
  );
};

WeatherHistory.propTypes = {
  theme: propTypes.string.isRequired,
  tempType: propTypes.string.isRequired,
  weatherHistory: propTypes.array.isRequired,
};

export default WeatherHistory;
