// eslint-disable-next-line security/detect-unsafe-regex
// const dateSplit = /^([0-1]?(?:(?<=1)[0-2]|(?<!1)[1-9]))([0-3]?(?:(?<=[1-2])[0-9]|(?<=[3])[0-1]|(?<!1)[1-9]))?([1-2](?:(?<=1)9[0-9][0-9]|(?<=2)0[0-2][0-9]))?$/;
const monthAbbreviations = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
]

const daysInMonth = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}

const findMonth = (string) => {
    const month = parseInt(string.substring(0, 2));
    if (month === 0) return ["0"];
    if (month > 0 && month < 13) {
      const dayAndYear =
        string.length > 1
          ? findDayAndYear(string.substring(2), month)
          : findDayAndYear(string.substring(1), month);
      return [string.substring(0, 2), ...dayAndYear];
    } else {
      const month = string.charAt(0);
      const dayAndYear = findDayAndYear(string.substring(1), month);
      return [month, ...dayAndYear];
    }
  };
  
  const findDayAndYear = (string, month) => {
    if (string.length === 0) return [];
  
    const dayString = string.substring(0, 2);
    const day = parseInt(dayString);
    if (day === 0) return ["0"];
  
    if (day > 0 && day <= daysInMonth[parseInt(month)]) {
      const result =
        string.substring(2) !== ""
          ? [dayString, string.substring(2, 6)]
          : [dayString];
      return result;
    } else {
      const dayChar = string.charAt(0);
      const day = parseInt(dayChar);
      const result =
        string.substring(1) !== "" && day > 0
          ? [dayChar, string.substring(1, 5)]
          : [dayChar];
      return result;
    }
  };
  
  export const formatDateString = (dateIn, previousDate) => {
    let value = dateIn;
    if (previousDate.length > dateIn.length && previousDate.endsWith("/")) {
      value = dateIn.substring(0, dateIn.length - 1);
    }
    const dated = value.replace(/\D/g, "");
    if (dated.length === 0) return "";
  
    const dateArray = findMonth(dated);
    if (dateIn.endsWith("/")) dateArray.push("");
    let formattedDateArray = dateArray.map((item, index) => {
      if (item.length < 2 && index < dateArray.length - 1) {
        if (item === "0") {
          return 0;
        }
        return `0${item}/`;
      } else if (item.length === 2 && index < 2) {
        return `${item}/`;
      } else {
        return item;
      }
    });
    return formattedDateArray.join("");
  };


export const validDate = (date) => {
    return date.match(
        /^(0[1-9]|1[0-2]|[1-9])\/(0[1-9]|[12][0-9]|3[01]|[1-9])\/[0-9]{4}$/
    )
}

export const formatTimestamp = (stamp) => {
    const date = new Date(stamp)

    const MM = date.getMonth()
    const DD = date.getDate()
    const YY = date.getFullYear()
    const HH = date.getHours()
    let mm = date.getMinutes()
    let result

    if (mm < 10) {
        mm = '0' + mm
    }

    if (HH === 0) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ 12:${mm} AM`
    } else if (HH === 12) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ 12:${mm} PM`
    } else if (HH < 12) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ ${HH}:${mm} AM`
    } else {
        result = `${monthAbbreviations[parseInt(MM)]} ${DD}, ${YY} @ ${
            HH - 12
        }:${mm} PM`
    }

    return result
}

export const formatDateAndTime = (date) => {
    const MM = date.getMonth()
    const DD = date.getDate()
    const YY = date.getFullYear()
    const HH = date.getHours()
    let mm = date.getMinutes()

    if (mm < 10) {
        mm = '0' + mm
    }

    let result

    if (HH === 0) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ 12:${mm} AM`
    } else if (HH === 12) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ 12:${mm} PM`
    } else if (HH < 12) {
        result = `${
            monthAbbreviations[parseInt(MM)]
        } ${DD}, ${YY} @ ${HH}:${mm} AM`
    } else {
        result = `${monthAbbreviations[parseInt(MM)]} ${DD}, ${YY} @ ${
            HH - 12
        }:${mm} PM`
    }

    return result
}

export const formatDate = (stamp) => {
    const dated = new Date(stamp)
    return `${dated.getMonth() + 1}/${dated.getDate()}/${dated.getFullYear()}`
}
