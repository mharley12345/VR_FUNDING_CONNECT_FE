  
import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProject } from '../actions/userActions';

const AddProject = ({ addProject, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    completed: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { name, description, url, completed } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className='large text-primary'>Add A Project</h1>
    
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addProject(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Project Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='url'
            placeholder='Website'
            name='url'
            value={url}
            onChange={e => onChange(e)}
          />
        </div>
       
        
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='completed'
              checked={completed}
              value={completed}
              onChange={() => {
                setFormData({ ...formData, completed: !completed });
                toggleDisabled(!toDateDisabled);
              }}
            />{' '}
            Is projected finished?
          </p>
        </div>
       
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddProject.propTypes = {
  addProject: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProject }
)(withRouter(AddProject));