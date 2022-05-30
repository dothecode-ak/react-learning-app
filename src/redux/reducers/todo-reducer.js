const initialState = {
  list: [],
};
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_THE_USER":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [...state.list, { id: id, data: data }],
      };
      break;
    case "DELETE_THE_USER":
      console.log(action);
      const newList = state.list.filter((elem) => elem.id !== action.id);
      console.log(newList);
      return {
        ...state,
        list: newList,
      };
      break;
    case "CLEAR_THE_USER":
      return { ...state, list: [] };
      break;
    default:
      return state;
  }
};

export default todoReducers;
