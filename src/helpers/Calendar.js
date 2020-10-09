export default class Calendar {
  constructor(year) {
    this.year = year;
  }

  get months () {
    const daysInFeb = this.isLeapYear ? 29 : 28;

    return ([
      { id: 1, days: 31, name: 'Jan' },
      { id: 2, days: daysInFeb, name: 'Feb' },
      { id: 3, days: 31, name: 'Mar' },
      { id: 4, days: 30, name: 'Apr' },
      { id: 5, days: 31, name: 'May' },
      { id: 6, days: 30, name: 'Jun' },
      { id: 7, days: 31, name: 'Jul' },
      { id: 8, days: 31, name: 'Aug' },
      { id: 9, days: 30, name: 'Sep' },
      { id: 10, days: 31, name: 'Oct' },
      { id: 11, days: 30, name: 'Nov' },
      { id: 12, days: 31, name: 'Dec' }
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
      weekList = [...weekList, { weekNo: week, days: days.slice(init, final)}];
      init += 7;
      final += 7;
      week += 1;
      weeks -= 1;
    }

    return weekList
  }

  get detailedMonths() {
    const months = this.months;
    const year = this.year;
    const firstDayOfTheYear = (new Date(`${year}-01-01.`)).getDay();

    let detailedMonths = this.months.map( (m, i) => {
      let firstDayOfMonth = (new Date(`${year}-${i+1}-1.`)).getDay();
      let lastDayOfMonth = (new Date(`${year}-${i+1}-${m.days}.`)).getDay();
      let numberOfWeeks = Math.ceil( ( firstDayOfMonth + m.days ) / 7 );
      let daysToBeginningOfMonth = (i === 0 ? [{days: 0}] : months.slice(0, i)).map((m) => m.days).reduce( (init, days) => init + days ) + 1;
      let weeksToBeginningOfMonth = Math.floor( ( firstDayOfTheYear + daysToBeginningOfMonth - 1 ) / 7);
      let weeksAtEndOfMonth = weeksToBeginningOfMonth + numberOfWeeks; // don't subtract 1 because slice needs one more to get the full set;
      
      return { weeksToBeginningOfMonth, weeksAtEndOfMonth, numberOfWeeks, firstDayOfMonth, lastDayOfMonth, daysToBeginningOfMonth, ...m }
      });

    return detailedMonths
  }

  get yearMonthWeekDay () {
    const weeks = this.weekList;
    const months = this.detailedMonths;
    const monthWeekDays = months.map( m => {
        return { weeks:  weeks.slice(m.weeksToBeginningOfMonth, m.weeksAtEndOfMonth), details: {...m} }
      })

    const yearMonthWeekDay = {
      [this.year]: {
        ...monthWeekDays
      }
    };
    return yearMonthWeekDay;
  }
}
