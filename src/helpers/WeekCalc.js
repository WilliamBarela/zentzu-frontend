export default class WeekCalc {
  constructor(year) {
    this.year = year;
  }

  get months () {
    const daysInFeb = this.isLeapYear ? 29 : 28;

    return ([
      { days: 31, name: 'Jan' },
      { days: daysInFeb, name: 'Feb' },
      { days: 31, name: 'Mar' },
      { days: 30, name: 'Apr' },
      { days: 31, name: 'May' },
      { days: 30, name: 'Jun' },
      { days: 31, name: 'Jul' },
      { days: 31, name: 'Aug' },
      { days: 30, name: 'Sep' },
      { days: 31, name: 'Oct' },
      { days: 30, name: 'Nov' },
      { days: 31, name: 'Dec' }
      ])
  }

  get isLeapYear() {
    return ( this.year % 100 === 0 ) ? 
           ( this.year % 400 === 0 ) :
           ( this.year % 4 === 0 )
  }

  seq(n, init) {
    return Array(n).fill().map( (_, i) => i + init )
  }

  get fullYearInDays () {
    const year = this.year;
    const expandDays = (n, init) => this.seq(n, init);

    const numericDayArr = this.months.map( (m) => expandDays(m.days, 1) );
    const calendar = numericDayArr.map( (m, i) => m.map( d => new Date(`${year}-${i+1}-${d}.`)) );
    return calendar.flat()
  }

  get weekList () {
    const currentYearInDays = this.fullYearInDays;
    const firstDayOfYear = currentYearInDays[0].getDay();
    const lastDayOfYear = 6 - currentYearInDays.slice(-1)[0].getDay();

    const previousYear = this.year - 1;
    const nextYear = this.year + 1;

    const daysOfLastYear = this.seq(firstDayOfYear, 31 - (firstDayOfYear - 1) ).map( d => new Date(`${previousYear}-12-${d}.`) );
    const daysOfNextYear = this.seq(lastDayOfYear, 1).map( d => new Date(`${nextYear}-1-${d}.`) );

    const days = [...daysOfLastYear, ...currentYearInDays, ...daysOfNextYear];
    
    let weekList = [];

    let week = 1;
    let init = 0;
    let final = 7;
    let weeks = days.length / 7;

    while (weeks > 0) {
      weekList = [...weekList, { [week]: days.slice(init, final)}];
      init += 7;
      final += 7;
      week += 1;
      weeks -= 1;
    }

    return weekList
  }

  get weeksPerMonth() {
    const year = this.year;
    const weeksOfMonth = this.months.map( (m, i) => {
      let firstDayOfMonth = (new Date(`${year}-${i+1}-1.`)).getDay();
      let lastDayOfMonth = (new Date(`${year}-${i+1}-${m.days}.`)).getDay();
      let numberOfWeeks = Math.ceil( ( firstDayOfMonth + m.days ) / 7 );
      
      return { numberOfWeeks, firstDayOfMonth, lastDayOfMonth, ...m }
      });
    return weeksOfMonth
  }
}
