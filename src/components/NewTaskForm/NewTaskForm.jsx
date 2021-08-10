import React, {Component} from 'react';
import './NewTaskForm.css';

import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {

  static defaultProps = {
    onItemAdded: ()=>{}
  }

  static propTypes = {
    onItemAdded: PropTypes.func
  }

  constructor() {
    super();

    this.state = {
      inputValue: ''
    }

    this.onSubmit = (event) => {
      event.preventDefault();
      const {onItemAdded} = this.props;
      const { inputValue } = this.state;
      onItemAdded(inputValue);
      this.setState({inputValue:''});
    }

    this.onChange = (event) => {
      this.setState({ inputValue: event.target.value });
    }

  }

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit = { this.onSubmit }>
        <input value = { inputValue } type='text' className='new-todo'
               placeholder='What needs to be done?'
               onChange = { this.onChange } />
      </form>
    );
  }
}
