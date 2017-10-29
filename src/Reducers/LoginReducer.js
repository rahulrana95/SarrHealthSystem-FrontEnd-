
export default function LoginReducer(state={login:0,typeOfUser:0, payload:[]}, action) {

  switch (action.type) {
    case 'loginInfo' :

      return Object.assign({},{typeOfUser:action.typeOfUser,login:action.login, payload:action.payload});
    case 'loginOut' :
    return {login:0};  
    default:
        return state;
  }


}
