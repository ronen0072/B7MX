const initState = {
    projects:[],
    projectToDisplay: null,
    projectToEdit: null
};
const productsReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PRODUCTS':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PRODUCTS_ERROR':
            console.log('create project error', action.err);
            return state;
        case 'UPDATE_PRODUCTS':
            console.log('edit project', action.project);
            return state;
        case 'UPDATE_PRODUCTS_ERROR':
            console.log('update project error', action.err);
            return state;
        default:
            return state;
    }
};
export default productsReducer;