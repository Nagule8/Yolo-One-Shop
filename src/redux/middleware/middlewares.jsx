import React from 'react';

/*const myLogger = (store) => {
  return next => {
    return action => {
        return next(action);
    }
  }
};*/

export const firstMiddleware = store => next => action => {
  return next(action);
} 

export const secondMiddleware = store => next => action => {
  return next(action);
} 

export const thirdMiddleware = store => next => action => {
  return next(action);
}

