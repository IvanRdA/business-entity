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
        direction: { ...state.direction, number: action.value },
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
    case "CHANGE_RENT": {
      return {
        ...state,
        fixCosts: { ...state.fixCosts, rent: parseInt(action.value) || 0 },
      };
    }
    case "CHANGE_EMPLOYEES": {
      return {
        ...state,
        fixCosts: { ...state.fixCosts, employees: parseInt(action.value) || 0 },
      };
    }
    case "CHANGE_SUPPLIES": {
      return {
        ...state,
        fixCosts: { ...state.fixCosts, supplies: parseInt(action.value) || 0 },
      };
    }
    case "CHANGE_OTHERS": {
      return {
        ...state,
        fixCosts: { ...state.fixCosts, others: parseInt(action.value) || 0 },
      };
    }
    case "RESET": {
      return {
        id: "",
        name: "",
        direction: {
          street: "",
          number: "",
          postalCode: "",
          city: "",
          community: "",
          country: "",
        },
        phone: "",
        openDay: Date.now(),
        fixCosts: {
          rent: "",
          employees: "",
          supplies: "",
          others: "",
        },
      };
    }
  }
  return state;
}
