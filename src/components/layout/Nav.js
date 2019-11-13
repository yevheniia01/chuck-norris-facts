import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({title, icon}) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

Nav.defaultProps ={
    title: 'Chuck Norris Facts',
    icon: ''
}

export default Nav