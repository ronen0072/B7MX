//import { firestore } from "firebase";

export const loginFacebook = () => {
  return (dispatch, getState, {getFirebase,getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()
    ).then((resp) => {
      console.log(resp.user);
      const usersRef = firestore.collection('users').doc(resp.user.uid);
      usersRef.get()
          .then((docSnapshot) => {
            !docSnapshot.exists?
                usersRef.set({
                  email: resp.user.email,
                  displayName: resp.user.displayName,
                  orders: {}
                })
                : console.log(docSnapshot.exists);
          });
      dispatch({ type: 'LOGIN_SUCCESS'  });
    }).catch((err) => {
      console.log(err);
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
};
export const loginGoogle = () => {
  return (dispatch, getState, {getFirebase,getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()
    ).then((resp) => {
      console.log(resp.user);
      const usersRef = firestore.collection('users').doc(resp.user.uid);
      usersRef.get()
          .then((docSnapshot) => {
            !docSnapshot.exists?
                usersRef.set({
                  email: resp.user.email,
                  displayName: resp.user.displayName,
                  orders: {}
                })
                : console.log(docSnapshot.exists);
          });
      dispatch({ type: 'LOGIN_SUCCESS'  });
    }).catch((err) => {
      console.log(err);
      dispatch({ type: 'LOGIN_ERROR', err });
    });

  }
};

export const logout = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'LOGOUT_SUCCESS' })
    });
  }
};