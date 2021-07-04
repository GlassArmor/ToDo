import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const dealsData = [ { key: 'a', state: 'completed', taskText: 'Completed task', taskDate: '2 hours ago'},
                    { key: 'b', state: 'editing', taskText: 'Editing task', taskDate: 'just now'},
                    { key: 'c', state: 'active', taskText: 'Active task', taskDate: 'about an hour ago'},
                    { key: 'd', state: 'active', taskText: 'Another active task', taskDate: '26 minutes ago'},
                    { key: 'e', state: 'active', taskText: 'Yet another active task', taskDate: '5 minutes ago'}
                  ];

ReactDOM.render(<App dealsData = {dealsData} />, document.getElementById('root'));
