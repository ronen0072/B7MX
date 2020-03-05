//import firebase from "../../config/fbConfig";


export const createProject = (project) => {
    return (dispatch, getState,{ getFirebace, getFirestore }) => {
      const firestore = getFirestore();
      const isAdmin = getState().firebase.profile.admin;
      console.log("is he admin",isAdmin);
      if(isAdmin){
        firestore.collection('projects').add({
            title: project.title,
            sub_title: project.sub_title,
            content: project.content,
            date: new Date(),
            imgFileName: project.title.replace(" ", "")+project.sub_title.replace(" ", ""),
            languages: project.languages,
            libraries: project.libraries,
            githubURL: project.githubURL,
            webURL: project.webURL
        }).then(()=>{
          dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err)=>{
          dispatch({ type: 'CREATE_PROJECT_ERROR)', err })
        });
      }
    }
};
export const updateProject = (project) => {
  return (dispatch, getState,{ getFirebace, getFirestore }) => {
    const firestore = getFirestore();

    console.log("firestore.collection('projects').doc(project.id)",firestore.collection('projects').doc(project.id));
    let  p = firestore.collection('projects').doc(project.id).update({
        title: project.title,
        sub_title: project.sub_title,
        content: project.content,
        date: new Date(),
        imgFileName: project.title.replace(" ", "")+project.sub_title.replace(" ", ""),
        languages: project.languages,
        libraries: project.libraries,
        githubURL: project.githubURL?  project.githubURL: "",
        webURL: project.webURL?  project.webURL: ""
    // }).then((updateProject)=>{
    //     console.log("updateProject");
    //     console.log(updateProject);
    //     dispatch({ type: 'UPDATE_PROJECT', project });
    // }).catch((err)=>{
    //     dispatch({ type: 'UPDATE_PROJECT_ERROR)', err })
    });
      return Promise.all([p]).then(res => {
          console.log('Update: ', res);
      });

  }
};

