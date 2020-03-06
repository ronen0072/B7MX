//import firebase from "../../config/fbConfig";


export const createProducts = (product) => {
    return (dispatch, getState,{ getFirebace, getFirestore }) => {
      const firestore = getFirestore();
      //const isAdmin = getState().firebase.profile.admin;
      //console.log("is he admin",isAdmin);
      //if(isAdmin){
        firestore.collection('products').add({
            title: product.title,
            sub_title: product.sub_title,
            content: product.content,
            date: new Date(),
            imgFileName: product.title.replace(" ", "")+product.sub_title.replace(" ", ""),
            languages: product.languages,
            libraries: product.libraries,
            githubURL: product.githubURL,
            webURL: product.webURL
        }).then(()=>{
          dispatch({ type: 'CREATE_PROJECT', product });
        }).catch((err)=>{
          dispatch({ type: 'CREATE_PROJECT_ERROR)', err })
        });
      }
    //}
};
export const updateProducts = (product) => {
  return (dispatch, getState,{ getFirebace, getFirestore }) => {
    const firestore = getFirestore();

    console.log("firestore.collection('products').doc(product.id)",firestore.collection('products').doc(product.id));
    let  p = firestore.collection('products').doc(product.id).update({
        title: product.title,
        sub_title: product.sub_title,
        content: product.content,
        date: new Date(),
        imgFileName: product.title.replace(" ", "")+product.sub_title.replace(" ", ""),
        languages: product.languages,
        libraries: product.libraries,
        githubURL: product.githubURL?  product.githubURL: "",
        webURL: product.webURL?  product.webURL: ""
    // }).then((updateProducts)=>{
    //     console.log("updateProducts");
    //     console.log(updateProducts);
    //     dispatch({ type: 'UPDATE_PROJECT', product });
    // }).catch((err)=>{
    //     dispatch({ type: 'UPDATE_PROJECT_ERROR)', err })
    });
      return Promise.all([p]).then(res => {
          console.log('Update: ', res);
      });

  }
};

