import { InitialAuthState } from "../../typescript/redux/reducers/reducer_types";
import { actionType } from "../../typescript/redux/actions/action_types";
import {
  AUTH_ERROR,
  EDIT_USER,
  GET_TOKEN,
  SIGN_IN_USER,
  SIGN_OUT_USER,
  TOGGLE_LOGGED_IN,
  TOGGLE_SIGN_IN,
} from "../../typescript/redux/actions/action_const";

const initialState: InitialAuthState = {
  loggedUser: {
    _id: "",
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    image: "",
    __v: 0,
    orders: [],
    favourites: [],
    isAdmin: false,
    hasWriteAccess: false,
  },
  authToken: "",
  isLoggedIn: false,
  isInSignIn: false,
  authError: "",
};

const navReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    case TOGGLE_SIGN_IN:
      return {
        ...state,
        authError:"",
        isInSignIn: !state.isInSignIn,
      };
    case TOGGLE_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case SIGN_IN_USER:
      return {
        ...state,
        loggedUser: action.payload,
        isLoggedIn: true,
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        loggedUser: Object.assign(state.loggedUser, {
          _id: "",
          email: "",
          username: "",
          password: "",
          firstName: "",
          lastName: "",
          image: "",
          __v: 0,
          orders: [],
          favourites: [],
          isAdmin: false,
          hasWriteAccess: false,
        }),
        isLoggedIn: false,
      };

    case AUTH_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    case EDIT_USER:
      return {
        ...state,
        loggedUser: Object.assign(state.loggedUser, action.payload),
      };
    default:
      return state;
  }
};

export default navReducer;
