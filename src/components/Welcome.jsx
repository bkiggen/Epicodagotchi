import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props){
  let _name = null;

  function handleNewNameEntry(event) {
    event.preventDefault();
    props.onNameEntry({name: _name.value});
  }

  return (
    <div>
      <h3>Your objective is to work, sleep, and drink coffee. Don't drink too much, or you may die. Don't sleep too much, or you may die. Don't work too much, you'll die. But too little of each? You'll die.</h3>
      <form onSubmit={handleNewNameEntry}>
        <input
          type='text'
          placeholder='Please enter your name'
          ref={(input) => {_name = input;}}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Welcome;

//onClick={props.onNameEntry}
