import { Dispatch } from 'redux';
import { SIMPLE_ACTION } from '../constants/example';

export const simpleAction = () => (dispatch: Dispatch) => {
  dispatch({
    type: SIMPLE_ACTION,
    payload: 'example',
  });
};
