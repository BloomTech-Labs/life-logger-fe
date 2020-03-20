import React from 'react'; 
import EditTask from './dashboard/components/EditTask';
import NewTaskForm from './dashboard/components/NewTaskForm';
import Task from './dashboard/components/Task';
import TaskList from './dashboard/components/TaskList'; 
import Dashboard from './dashboard/index';
import { BrowserRouter} from 'react-router-dom';

// EditTask render test
it('renders without crashing', ()=> {
    <BrowserRouter>
    const div = document.createElement('div');
    ReactDom.render(<EditTask />, div);
    </BrowserRouter>
})

// NewTaskForm render test
it('renders without crashing', ()=> {
    <BrowserRouter>
    const div = document.createElement('div');
    ReactDom.render(<NewTaskForm />, div);
    </BrowserRouter>
})

// Task render test
it('renders without crashing', ()=> {
    <BrowserRouter>
    const div = document.createElement('div');
    ReactDom.render(<Task />, div);
    </BrowserRouter>
})

// TaskList render test
it('renders without crashing', ()=> {
    <BrowserRouter>
    const div = document.createElement('div');
    ReactDom.render(<TaskList />, div);
    </BrowserRouter>
})

// Dashboard render test
it('renders without crashing', ()=> {
    <BrowserRouter>
    const div = document.createElement('div');
    ReactDom.render(<Dashboard />, div);
    </BrowserRouter>
})