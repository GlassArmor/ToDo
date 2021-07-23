import React, { Component } from 'react';
import './App.css';

import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      dealsData: [ { key: 'a', taskText: 'Do some deals', taskDate: '2 hours ago'},
                   { key: 'b', taskText: 'Do other deals', taskDate: 'just now'},
                   { key: 'c', taskText: 'Drink coffee', taskDate: 'about an hour ago'},
                   { key: 'd', taskText: 'Play guitar', taskDate: '26 minutes ago'}
                  ]
    }

    this.deleteTask = (key) => {

      this.setState(({dealsData}) => {
        let keyIndex = dealsData.findIndex((elem)=> elem.key === key);
        return {
          dealsData: [ ...dealsData.slice(0, keyIndex), ...dealsData.slice(keyIndex+1)]
        }
      });
    }
  }

  render() {
    let {dealsData} = this.state;
    return (
      <section className = 'todoapp'>
        <Header />
        <section className = 'main'>
          <TaskList dealsData = { dealsData } onDeleted = {this.deleteTask}/>
          <Footer />
        </section>
      </section>
    );
  }
};
