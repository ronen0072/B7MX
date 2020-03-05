//import firebase from "../../config/fbConfig";


export const createMessage = (message) => {
    return (dispatch, getState,{ getFirebace, getFirestore }) => {
         const firestore = getFirestore();
        firestore.collection('messages').add({
            name: message.name,
            email: message.email,
            messageData: message.data
        }).then(()=>{
          dispatch({ type: 'CREATE_MESSAGE', message });
        }).catch((err)=>{
          dispatch({ type: 'CREATE_MESSAGE_ERROR)', err })
        });
    }
};

