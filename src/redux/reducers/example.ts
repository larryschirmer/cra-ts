import { SIMPLE_ACTION } from '../constants/example';

const initialState = {};

export default (state = initialState, { type, payload }: { type: string; payload: string }) => {
  switch (type) {
    case SIMPLE_ACTION:
      return {
        result: payload,
      };
    default:
      return state;
  }
};
