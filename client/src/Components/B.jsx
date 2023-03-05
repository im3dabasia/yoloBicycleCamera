import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nameAction } from '../redux/nameReducer';

const B = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const onNameClick = () => {
    dispatch(nameAction.changeName(name));
  }

  const onNameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={onNameChange} />
      <button onClick={onNameClick}>
        Submit
      </button>
    </div>
  );
}

export default B;