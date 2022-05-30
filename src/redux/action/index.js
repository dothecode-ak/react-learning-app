const addTheUser = (data) => {
  return {
    type: "ADD_THE_USER",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};
const deleteTheUser = (data) => {
  return {
    type: "DELETE_THE_USER",
    id: data,
  };
};
const clearTheUser = (data) => {
  return {
    type: "CLEAR_THE_USER",
  };
};
export { addTheUser, deleteTheUser, clearTheUser };
