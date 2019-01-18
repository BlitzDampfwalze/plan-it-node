import {addEventToState, deleteEventInState} from '../actions/dashboard';

describe('addList', () => {
  it('Should return the action', () => {
      const title = 'List title';
      const action = addList(title);
      expect(action.type).toEqual(ADD_LIST);
      expect(action.title).toEqual(title);
  });
});