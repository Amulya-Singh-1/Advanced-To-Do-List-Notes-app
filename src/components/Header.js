import PropTypes from 'prop-types'
import React from 'react';
import Button from './Button'

const Header = ({ onAdd, showAdd }) => {

  return (
    <center>
    <header className='header'>
      <h1> Add A New Task  : </h1>
        <Button
          color={showAdd ? 'red' : 'orange'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
    </header>
    </center>
  )
}

Header.defaultProps = {
  title: 'To-Do-List',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header