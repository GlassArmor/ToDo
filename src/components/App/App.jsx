import React, { Component } from 'react';
import './App.css';

import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

/* eslint-disable */
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}
/* eslint-enable */



export default class App extends Component {

  constructor() {
    super();

    this.maxId = 0;

    this.loadData = () => {

      let loadState = getCookie('savedState');
      if (loadState) {
          const savedOne = JSON.parse(loadState);
          this.maxId = savedOne.maxId;
          return savedOne;
      }
      if (!loadState) {
        loadState = {
          dealsData: [ this.createTask('Some Epic deal!'),
                       this.createTask('Unlock Legendary'),
                       this.createTask('For only 9.99$!') ],
          mode: 'all',
          maxId: 3
        };
      };
      return loadState;
    };

    this.createTask = (taskText) => {
        this.maxId += 1;
        return ({ key: `a${this.maxId}`,
                   taskText,
                   taskDate: Date.parse(new Date()),
                   taskCompleted: false,
                   taskEditing: false,
                 })
    }

    this.state = this.loadData();

    this.saveData = () => {
      setCookie('savedState', JSON.stringify(this.state));
    }

    this.deleteTask = (key) => {

      this.setState(({dealsData}) => {
        const keyIndex = dealsData.findIndex((elem)=> elem.key === key);
        return {
          dealsData: [ ...dealsData.slice(0, keyIndex), ...dealsData.slice(keyIndex+1)],
          maxId: this.maxId
        }
      });
    }

    this.addTask = (newText) => {

      if (!newText) return;

      this.setState(({dealsData}) => ({
          dealsData: [ ...dealsData, this.createTask(newText) ],
          maxId: this.maxId
        }));

    }

    this.onDone = (key) => {
      this.setState(({dealsData}) => {
        const keyIndex = dealsData.findIndex((elem)=> elem.key === key);
        const elementDone = {...dealsData[keyIndex], taskCompleted: !dealsData[keyIndex].taskCompleted };
        return {
          dealsData: [ ...dealsData.slice(0, keyIndex), elementDone ,...dealsData.slice(keyIndex+1)]
        }
      });
    }

    this.onEdit = (key, newText) => {
      this.setState(({dealsData}) => {
        const keyIndex = dealsData.findIndex((elem)=> elem.key === key);
        const elementEditing = {...dealsData[keyIndex], taskEditing: !dealsData[keyIndex].taskEditing };
        if (newText) elementEditing.taskText = newText;
        return {
          dealsData: [ ...dealsData.slice(0, keyIndex), elementEditing ,...dealsData.slice(keyIndex+1)]
        }
      });
    }

    this.clearDone = () => {
      this.setState(({dealsData}) => ({
            dealsData: dealsData.filter((item) => !item.taskCompleted ),
            maxId: this.maxId
        }));
    }

    this.setMode = (modeName) => {
      this.setState({ mode: modeName });
    }

  }

  render() {
    this.saveData(this.state);
    const {dealsData, mode} = this.state;
    const undoneCount = dealsData.length - dealsData.filter( (elem) => elem.taskCompleted ).length;
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
