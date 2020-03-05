const initState = {
    projects:[],
    projectToDisplay: null,
    projectToEdit: null
};
const projectReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        case 'UPDATE_PROJECT':
            console.log('edit project', action.project);
            return state;
        case 'UPDATE_PROJECT_ERROR':
            console.log('update project error', action.err);
            return state;
        case 'PROJECT_TO_DISPLAY':
            console.log('project to display', action.project.id);
            return{
                ...state,
                projectToDisplay: action.project
            };
        case 'PROJECT_TO_EDIT':
            //console.log('project to edit', action.project.id);
            return{
                ...state,
                projectToDisplay: action.project
            };
        default:
            return state;
    }
};
export default projectReducer;