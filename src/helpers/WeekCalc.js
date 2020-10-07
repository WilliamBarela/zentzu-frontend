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

  seq(n) {
    return Array(n).fill().map( (_, i) => i + 1 )
  }

  get calendarArray () {
    const year = this.year;
    const expandDays = n => this.seq(n);

    const numericDayArr = this.months.map( (m) => expandDays(m.days) );
    const calendar = numericDayArr.map( (m, i) => m.map( (d) => new Date(`${year}-${i+1}-${d}`)) );
    return calendar //.flat()
  }
}
