//import { firestore } from "firebase";

export const signIn = () => {
  return (dispatch, getState, {getFirebase,getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()
    ).then((resp) => {
      console.log(resp.user);
      const usersRef = firestore.collection('users').doc(resp.user.uid);
      usersRef.get()
      .then((docSnapshot) => {
        !docSnapshot.exists? 
        usersRef.set({
          email: resp.user.email,
          displayName: resp.user.displayName
        })
        : console.log(docSnapshot.exists);
      });
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      console.log(err);
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
};

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
};