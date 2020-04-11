export interface State {
  username: string;
  deck_name: string;
  user_id: number | null;
}

export interface Action {
  type: string;
  payload: any;
}

const initialState: State = {
  username: "",
  deck_name: "",
  user_id: null,
};

export function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
