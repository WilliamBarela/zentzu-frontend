import React from 'react';
import logo from '../img/logo.svg';

function Logo() {
  return(
    <h1>logo</h1>
  )
}

function Weeks() {
  return(
    <h1>Weeks</h1>
  )
}

function Months() {
  return(
    <h1>Months</h1>
  )
}

function CurrentWeek() {
  return(
    <h1>Current Week</h1>
  )
}

function Year() {
  return(
    <h1>Year</h1>
  )
}

class Dashboard extends React.Component {
  render() {
    return(
      <>
        <nav>
          <Logo />
          <Weeks />
        </nav>
        <main>
          <Months />
          <CurrentWeek />
        </main>
        <footer>
          <Year />
        </footer>
      </>
    )
  }
}

export default Dashboard;
