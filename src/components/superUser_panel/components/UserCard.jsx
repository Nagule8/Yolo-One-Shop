import React from 'react';
import PropTypes from 'prop-types';

const UserCard = (props) => {
    return (
        <div className='user-card'>
            <div className="user-card__title">
                {props.user.userName}
            </div>
            <div className="user-card__body">
                    <p>Email: {props.user.email}</p>
                    <p>Role : {props.user.role}</p>
            </div>
        </div>
    );
        
    
};

UserCard.propTypes = {
    users:PropTypes.object
};

export default UserCard;
