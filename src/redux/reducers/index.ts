import { Response } from "../../types/Response";
import { Action } from "../../types/Action";

interface State {
  response: Response[] | [],
}

const initialState: State = {
  response: [],
};

const mainReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {

    case 'GET_SONGS':
      return {
        ...state,
        response: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
