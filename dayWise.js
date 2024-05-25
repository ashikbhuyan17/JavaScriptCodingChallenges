const dayWise = [
  {
    isHasBreak: true,
    weekDay: 'Sunday',
    openingTime: '09:00 AM',
    closingTime: '05:00 PM',
    breakStartTime: '01:00 PM',
    breakEndTime: '02:00 PM',
  },
  {
    isHasBreak: true,
    weekDay: 'Wednesday',
    openingTime: '09:00 AM',
    closingTime: '05:00 PM',
    breakStartTime: '01:00 PM',
    breakEndTime: '02:00 PM',
  },
];

const dayWiseMyData = [
  {
    isHasBreak: true,
    weekDay: 'Sunday',
    openingTime: '00:00',
    closingTime: '00:00',
    breakStartTime: '00:00',
    breakEndTime: '00:00',
  },
  {
    isHasBreak: true,
    weekDay: 'Monday',
    openingTime: '00:00',
    closingTime: '00:00',
    breakStartTime: '00:00',
    breakEndTime: '00:00',
  },
  {
    isHasBreak: true,
    weekDay: 'Tuesday',
    openingTime: '00:00',
    closingTime: '00:00',
    breakStartTime: '00:00',
    breakEndTime: '00:00',
  },
  {
    isHasBreak: true,
    weekDay: 'Wednesday',
    openingTime: '00:00',
    closingTime: '00:00',
    breakStartTime: '00:00',
    breakEndTime: '00:00',
  },
  {
    isHasBreak: true,
    weekDay: 'Thursday',
    openingTime: '00:00',
    closingTime: '00:00',
    breakStartTime: '00:00',
    breakEndTime: '00:00',
  },
  {
    isHasBreak: true,
    weekDay: 'Friday',
    openingTime: '00:00',
    closingTime: '00:00',
    breakStartTime: '00:00',
    breakEndTime: '00:00',
  },
  {
    isHasBreak: true,
    weekDay: 'Saturday',
    openingTime: '00:00',
    closingTime: '00:00',
    breakStartTime: '00:00',
    breakEndTime: '00:00',
  },
];

function compareDayWise(dayWise, dayWiseMyData) {
  let matches = [];
  let mismatches = [];
  dayWiseMyData.map((myDate) => {
    const datMatches = dayWise.find(
      (element) => element.weekDay === myDate.weekDay
    );
    if (datMatches) {
      matches.push(myDate);
    } else {
      mismatches.push(myDate);
    }
  });
  return { matches, mismatches };
}
const result = compareDayWise(dayWise, dayWiseMyData);
console.log('Matching days:', result);
