import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => {

    return (
        <label className='custom-checkbox'>
            <input type="checkbox" name={props.name} onClick={props.filter} checked={props.checked} />
            <span className='custom-checkbox__checkmark'>
                <i className='bx bx-check'></i>
            </span>
            {props.label}
        </label>
    );
};

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    filter: PropTypes.func,
    name: PropTypes.string
};

export default CheckBox;
