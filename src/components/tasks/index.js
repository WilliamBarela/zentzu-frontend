import React from 'react'

function TaskList(props){
  return(
    <h1>list of selected day's tasks</h1>
  )
}

function TaskAdd(props) {
  return(
    <h4>Add Task to the List Here</h4>
  )
}

class Tasks extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <>
        <TaskList />
        <TaskAdd />
      </>
    )
  }
}

export default Tasks;
