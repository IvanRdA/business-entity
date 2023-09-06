export default function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_ID": {
      return {
        ...state,
        id: action.value,
      };
    }
    case "CHANGE_NAME": {
      return {
        ...state,
        name: action.value,
      };
    }
    case "CHANGE_STREET": {
      return {
        ...state,
        direction: { ...state.direction, street: action.value },
      };
    }
    case "CHANGE_NUMBER": {
      return {
        ...state,
        direction: { ...state.direction, number: parseInt(action.value) },
      };
    }
    case "CHANGE_POSTALCODE": {
      return {
        ...state,
        direction: { ...state.direction, postalCode: action.value },
      };
    }
    case "CHANGE_CITY": {
      return {
        ...state,
        direction: { ...state.direction, city: action.value },
      };
    }
    case "CHANGE_COMMUNITY": {
      return {
        ...state,
        direction: { ...state.direction, community: action.value },
      };
    }
    case "CHANGE_COUNTRY": {
      return {
        ...state,
        direction: { ...state.direction, country: action.value },
      };
    }
    case "CHANGE_PHONE": {
      return {
        ...state,
        phone: action.value,
      };
    }
    case "CHANGE_OPENDAY": {
      return {
        ...state,
        openDay: action.value,
      };
    }
  }
  return state;
}
