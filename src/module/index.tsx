import React, { useEffect, useState } from "react";
import "./style.css";

interface ContributionData {
  [date: string]: number;
}

const ContributionGraph = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetch("https://dpg.gg/test/calendar.json") // Замените на URL, откуда вы получаете данные
      .then((response) => response.json())
      .then((data: ContributionData[]) => {
        setData(data);
      });
  }, []);

  const getColor = (count: number) => {
    if (count === 0) return "color0";
    if (count <= 9) return "color1";
    if (count <= 19) return "color2";
    if (count <= 29) return "color3";
    return "color4";
  };

  const getDates = (startDate: Date, endDate: Date) => {
    let dates: string[] = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const groupByWeeks = (dates: string[]) => {
    let weeks: string[][] = [];
    for (let i = 0; i < dates.length; i += 7) {
      weeks.push(dates.slice(i, i + 7));
    }
    return weeks;
  };

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 357);
  const endDate = new Date();

  const dates = getDates(startDate, endDate);
  const weeks = groupByWeeks(dates);

  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];

  return (
    <div className="graph">
      <div className="labels">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="label">
            {day}
          </div>
        ))}
      </div>
      {weeks.map((week, index) => (
        <div key={index} className="week">
          {index % 4 === 0 && (
            <div className="month-label">
              {months[new Date(week[0]).getMonth()]}
            </div>
          )}
          {week.map((date) => (
            <div
              key={date}
              className={`day ${getColor(data[date] || 0)}`}
              title={`${date}: ${data[date] || 0} contributions`}
              style={{ width: "20px", height: "20px", borderRadius: "2px" }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContributionGraph;
