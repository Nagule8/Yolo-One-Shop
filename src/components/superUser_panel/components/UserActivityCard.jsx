import React from 'react';
import PropTypes from 'prop-types';

const UserActivityCard = (props) => {
    return (
        <div className='-card'>
            <br />
            <hr />
            <div className="user-card__id">
                User Id: {props.userActivity.userId}
            </div>
            <div className="user-card__title">
                {props.userActivity.username}
            </div>
            <div className="user-card__body">
                    <p>Method: {props.userActivity.method}</p>
                    <p>Description : {props.userActivity.description}</p>
            </div>
        </div>
    );
};

UserActivityCard.propTypes = {
    userActivity: PropTypes.object
};

export default UserActivityCard;
