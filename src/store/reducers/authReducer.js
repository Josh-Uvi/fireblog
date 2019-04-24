const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'LOGOUT_SUCCESS':
      console.log('logout success');
      return state;
    case 'USER_REGISTER_SUCCESS':
      console.log('registration successful');
      return {
        ...state,
        authError: null
      }
    case 'USER_REGISTRATION_FAILED': 
      console.log('registration failed');
      return {
        ...state,
        authError: action.err.message
      }
    default: 
      return state;
  }
}

export default authReducer;