const pageDefault ={
    inSession: false,
    userInfo: {
        name:'',
        title: ''
    }
}

export function Store(state = pageDefault, action){
    let obj = Object.assign({}, state)

    switch(action.type) {
            case "CREATE_SESSION":
            obj.inSession =action.current_session;
            return obj;

            case "CREATE_PROFILE":
            obj.userInfo.name=action.data.name;
            obj.userInfo.title=action.data.title;
            return obj;

        default:
            return state;
            
    }
}