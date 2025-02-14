export default function usereducer(state, action) {
  switch (action.type) {
    case "INIT_USERS":
      return action.payload;
    case "ADD_USER":
      return [...state, action.payload];
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "EDIT_USER":
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    default:
      break;
  }
}
