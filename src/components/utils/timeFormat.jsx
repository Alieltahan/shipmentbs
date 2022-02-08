export function timeFormat(lastUpdate) {
  const date = new Date(lastUpdate);
  // Option 1
  // Returns Format: 'الاثنين، ٢٠ يوليو ٢٠٢٠, ٦:٣٤ م'
  //
  // const option = {hour: 'numeric', minute: 'numeric' ,day: 'long',  month: 'numeric',year: 'numeric' , weekday: 'long' };
  // const result = new Intl.DateTimeFormat('ar-EG', option).format(new Date(date));
  // console.log(result)
  //   return result;
  // =====End=====

  // Option 2 as per provided the Image/Design
  // Returns at 02:25pm السبت 25/07/2020
  const days = [
    'اﻷحد',
    'اﻷثنين',
    'الثلاثاء',
    'اﻷربعاء',
    'الخميس',
    'الجمعة',
    'السبت',
  ];
  const weekDay = days[date.getDay()];
  const Day = ('0' + date.getDate()).slice(-2);
  let Month = ('0' + (date.getMonth() + 1)).slice(-2);
  const Year = date.getFullYear();
  let Hours = date.getHours();
  let Minutes = date.getMinutes();
  const ampm = Hours >= 12 ? 'pm' : 'am';
  Hours = Hours % 12;
  Hours = Hours ? Hours : 12; // if hours == '0' then should be '12'
  Hours = ('0' + Hours).slice(-2);
  Minutes = Minutes < 10 ? '0' + Minutes : Minutes;

  const time = `${Hours}:${Minutes}${ampm}`;
  const dateOnly = `${Day}/${Month}/${Year}`;
  const completeDateTime = `
      ${weekDay} ${Day}/${Month}/${Year} at ${Hours}:${Minutes}${ampm}`;
  return { completeDateTime, dateOnly, time };
}
