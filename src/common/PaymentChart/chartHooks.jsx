import React, { useState, useEffect } from "react";

const MILLION = 1000000000;
const HUNTHOU = 1000000;
const TENTHOU = 10000;
const THOUSAND = 1000;
const HUNDRED = 100;
const TEN = 10;
const ONE = 10;

const maxOut = (todayMax, yesterdayMax) => {
  const greatestMax = yesterdayMax > todayMax ? yesterdayMax : todayMax;
  const scaleMax =
    greatestMax < TEN
      ? ONE
      : greatestMax < HUNDRED
        ? TEN
        : greatestMax < THOUSAND
          ? HUNDRED
          : greatestMax < TENTHOU
            ? THOUSAND
            : greatestMax < HUNTHOU
              ? TENTHOU
              : greatestMax < MILLION
                ? HUNTHOU
                : MILLION;

  const roundedMax = Math.ceil(greatestMax / scaleMax) * scaleMax;
  return [greatestMax, roundedMax];
};

//

const buildOptions = (todayMax, yesterdayMax, unitType) => {
  const [greatestMax, roundedMax] = maxOut(todayMax, yesterdayMax);

  return {
    responsive: true,
    scales: {
      x: {
        grid: {
          drawTicks: true
        },
        gridLines: {
          display: true
        },
        ticks: {
          callback: function (val, index) {
            const current =
              unitType === HOURS ? new Date().getHours() : new Date().getDay();
            const max = unitType === HOURS ? 24 : 6;
            if (index === current || index === 0 || index === max) {
              return this.getLabelForValue(val);
            }
            return "";
          },
          color: "rgb(0,0,0)"
        }
      },
      y: {
        display: true,
        grid: {
          drawTicks: true
        },
        gridLines: {
          lineWidth: 0,
          borderWidth: 0,
          borderColor: "rgba(0,0,0,0)"
        },
        min: 0,
        max: roundedMax,
        ticks: {
          // forces step size to be 50 units
          stepSize: roundedMax / 2,
          color: "rgb(0,0,0)",
          callback: function (value, index, ticks) {
            if (greatestMax >= 2000) {
              const abbrev = greatestMax < 2 * MILLION ? "k" : "m";
              const divisor = greatestMax < 2 * MILLION ? THOUSAND : MILLION;
              return `$${value / divisor}${abbrev}`;
            }
            return value;
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: "index"
    }
  };
};

const empty = {
  hours: [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  days: [0, 0, 0, 0, 0, 0, 0]
};

export const HOURS = "hours";
export const DAYS = "days";

const isCurrentDay = (dateIn) => {
  const today = new Date();
  const result =
    dateIn.getDate() === today.getDate() &&
    dateIn.getMonth() === today.getMonth() &&
    dateIn.getFullYear() === today.getFullYear();
  return result;
};

const isPriorDay = (dateIn) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const result =
    dateIn.getDate() === yesterday.getDate() &&
    dateIn.getMonth() === yesterday.getMonth() &&
    dateIn.getFullYear() === yesterday.getFullYear();
  return result;
};

const isCurrentWeek = (dateIn) => {
  const today = new Date();
  // Take the day of week and get date back to Sunday of the week
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  // Strip hours, minutes, and seconds off the date
  const formattedStartOfWeek = new Date(
    startOfWeek.getFullYear(),
    startOfWeek.getMonth(),
    startOfWeek.getDate()
  );
  // Compare to date string that was passed in
  return new Date(dateIn) >= formattedStartOfWeek;
};

const isPriorWeek = (dateIn) => {
  const today = new Date();
  // Take the day of week and get date back to Sunday of the current week
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
  // Strip hours, minutes, and seconds off the date
  const formattedStartOfWeek = new Date(
    startOfWeek.getFullYear(),
    startOfWeek.getMonth(),
    startOfWeek.getDate()
  );
  // Take the day of week and get date back to Sunday of the previous week
  const startOfPreviousWeek = new Date(
    today.setDate(today.getDate() - today.getDay() - 7)
  );
  // Strip hours, minutes, and seconds off the date
  const formattedStartOfPreviousWeek = new Date(
    startOfPreviousWeek.getFullYear(),
    startOfPreviousWeek.getMonth(),
    startOfPreviousWeek.getDate()
  );
  // Compare to date string that was passed in and ensure it is before current week and not before the previous week
  return (
    new Date(dateIn) >= formattedStartOfPreviousWeek &&
    new Date(dateIn) <= formattedStartOfWeek
  );
};

const isCurrent = (dateIn, unitType) => {
  if (unitType === HOURS) {
    return isCurrentDay(dateIn);
  }
  return isCurrentWeek(dateIn);
};

const isPrior = (dateIn, unitType) => {
  if (unitType === HOURS) {
    return isPriorDay(dateIn);
  }
  return isPriorWeek(dateIn);
};

const sumOverTime = (toSum) => {
  const summed = [];
  // Adding 1 to the slice because otherwise you lose an array index
  // ex. slice(0,0) returns an empty array not just the 0 index
  for (let i = 0; i < toSum.length; i++) {
    summed[i] = toSum
      .slice(0, i + 1)
      .reduce((partialSum, a) => partialSum + a, 0);
  }
  return summed;
};

const weekLables = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const hourLabels = [
  "12:00 AM",
  "1:00 AM",
  "2:00 AM",
  "3:00 AM",
  "4:00 AM",
  "5:00 AM",
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 AM"
];

const black = "rgb(0,0,0)";
const transparentBlack = "rgba(0,0,0,0.5)";

const purple = "rgb(197,82,255)";
const transparentPurple = "rgba(197,82,255,0.5)";

const buildData = (labels, current, prior, unitType) => {
  const currentLabel = unitType === HOURS ? "Today" : "This Week";
  const priorLabel = unitType === HOURS ? "Yesterday" : "Last Week";
  const now = unitType === HOURS ? new Date().getHours() : new Date().getDay();
  // Show leading up to next hour since this is changing real time for hourly but just show today for weekly
  current =
    unitType === HOURS ? current.slice(0, now + 2) : current.slice(0, now + 1);
  return {
    labels,
    datasets: [
      {
        label: currentLabel,
        data: labels.map((label, index) => current[index]),
        borderColor: purple,
        backgroundColor: transparentPurple,
        pointHoverBorderColor: purple,
        pointHoverBackgroundColor: transparentPurple,
        borderWidth: 1,
        pointRadius: 0
      },
      {
        label: priorLabel,
        data: labels.map((label, index) => prior[index]),
        borderColor: black,
        backgroundColor: transparentBlack,
        pointHoverBorderColor: black,
        pointHoverBackgroundColor: transparentBlack,
        borderWidth: 1,
        pointRadius: 0
      }
    ]
  };
};

export const useChartData = (payments, unitType) => {
  const labels = unitType === HOURS ? hourLabels : weekLables;
  const [options, setOptions] = useState();
  const [chartData, setChartData] = useState();
  const [charted, setCharted] = useState(false);

  useEffect(() => {
    if (payments.length > 0 && (labels.length > 0) & !charted) {
      const grossCurrent = [...empty[unitType]];
      const grossPrior = [...empty[unitType]];

      payments.forEach((payment) => {
        const dated = new Date(payment.transferDate);
        // Adding one to hours becasue we want to capture the total at the start of the hour
        // so all payments from 12AM (0 index) should show up at 1AM (1 index)
        const indexed =
          unitType === HOURS ? dated.getHours() + 1 : dated.getDay();
        if (isCurrent(dated, unitType)) {
          grossCurrent[indexed] =
            grossCurrent[indexed] + payment.grossAmount / 100;
        } else if (isPrior(dated, unitType)) {
          grossPrior[indexed] = grossPrior[indexed] + payment.grossAmount / 100;
        }
      });

      const _grossByUnitCurrent = sumOverTime(grossCurrent);

      const _grossByUnitPrior = sumOverTime(grossPrior);

      const _chartData = buildData(
        labels,
        _grossByUnitCurrent,
        _grossByUnitPrior,
        unitType
      );

      const _currentMax = _grossByUnitCurrent[_grossByUnitCurrent.length - 1];
      const _priorMax = _grossByUnitPrior[_grossByUnitCurrent.length - 1];

      const _options = buildOptions(_currentMax, _priorMax, unitType);
      setChartData(_chartData);
      setOptions(_options);
      setCharted(true);
    }
  }, [payments, labels, unitType]);

  return [options, chartData];
};
