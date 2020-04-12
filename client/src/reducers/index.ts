export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export interface State {
  username: string;
  user_id: number | null;
  loading: boolean;
  error: boolean | string;
}

export interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  username: "",
  user_id: null,
  loading: false,
  error: false,
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        username: action.payload.username,
        user_id: action.payload.user_id,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return { ...state };
  }
}
