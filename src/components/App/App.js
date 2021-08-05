import React, { Component } from 'react';
import './App.css';

import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default class App extends Component {

  constructor() {
    super();

    this.maxId = 0;

    this.createTask = (taskText) => {
      return   { key: `a${this.maxId++}`,
                 taskText: taskText,
                 taskDate: new Date(),
                 taskCompleted: false,
                 taskEditing: false,
               };
    }

    this.state = {
      dealsData: [ this.createTask('Some Epic deal!'),
                   this.createTask('Unlock Legendary'),
                   this.createTask('For only 9.99$!') ],
      mode: 'all'
    }

    this.deleteTask = (key) => {

      this.setState(({dealsData}) => {
        let keyIndex = dealsData.findIndex((elem)=> elem.key === key);
        return {
          dealsData: [ ...dealsData.slice(0, keyIndex), ...dealsData.slice(keyIndex+1)]
        }
      });
    }

    this.addTask = (newText) => {

      if (!newText) return;

      this.setState(({dealsData}) => {

        return {
          dealsData: [ ...dealsData, this.createTask(newText) ]
        }
      });

    }

    this.onDone = (key) => {
      this.setState(({dealsData}) => {
        let keyIndex = dealsData.findIndex((elem)=> elem.key === key);
        let elementDone = {...dealsData[keyIndex], taskCompleted: !dealsData[keyIndex].taskCompleted };
        return {
          dealsData: [ ...dealsData.slice(0, keyIndex), elementDone ,...dealsData.slice(keyIndex+1)]
        }
      });
    }

    this.onEdit = (key, newText) => {
      this.setState(({dealsData}) => {
        let keyIndex = dealsData.findIndex((elem)=> elem.key === key);
        let elementEditing = {...dealsData[keyIndex], taskEditing: !dealsData[keyIndex].taskEditing };
        if (newText) elementEditing.taskText = newText;
        return {
          dealsData: [ ...dealsData.slice(0, keyIndex), elementEditing ,...dealsData.slice(keyIndex+1)]
        }
      });
    }

    this.clearDone = () => {
      this.setState(({dealsData}) => {
        return {
            dealsData: dealsData.filter((item) => !item.taskCompleted )
        }
      });
    }

    this.setMode = (modeName) => {
      this.setState({ mode: modeName });
    }

  }

  render() {
    let {dealsData, mode} = this.state;
    let undoneCount = dealsData.length - dealsData.filter( (elem) => elem.taskCompleted ).length;
    return (
      <section className = 'todoapp'>
        <Header onItemAdded = {this.addTask} />
        <section className = 'main'>
          <TaskList dealsData = { dealsData }
                    onDeleted = {this.deleteTask}
                    onDone = { this.onDone }
                    onEdit = { this.onEdit }
                    mode = { mode } />
          <Footer count = {undoneCount}
                  clearDone = { this.clearDone }
                  setMode = { this.setMode }
                  mode = { mode } />
        </section>
      </section>
    );
  }
};
