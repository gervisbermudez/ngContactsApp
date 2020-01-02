import { Action } from "@ngrx/store";
import { Contact } from "../models/contact.model";
import * as ContactActions from "../actions/contact.actions";

// Section 1
const initialState: Contact = {
  name: "Initial Tutorial",
  lastName: "http://google.com",
  number: 1157614613
};

// Section 2
export function reducer(
  state: Contact[] = [initialState],
  action: ContactActions.Actions
) {
  // Section 3
  switch (action.type) {
    case ContactActions.ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
}
