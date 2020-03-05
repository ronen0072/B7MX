const initState = {
    messages:[],
};
const messagesReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_MESSAGE':
            console.log('create message', action.project);
            return state;
        case 'CREATE_MESSAGE_ERROR':
            console.log('create message error', action.err);
            return state;
        default:
            return state;
    }
};
export default messagesReducer;