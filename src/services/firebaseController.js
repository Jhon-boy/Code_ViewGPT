import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getAuth, getRedirectResult, GoogleAuthProvider, sendPasswordResetEmail, updatePassword  } from "firebase/auth";
import { db, auth } from "./firebase"

// save in database
export const GuardarRegistro = async (registro) => {
  const docRef = await addDoc(collection(db, 'registros'), registro)
  return docRef;
}


export const updatePass = async (user, newPass) => {
  try {
    await updatePassword(user, newPass);
    return true;
  } catch (error) {
    return false; 
  }
}
// get our historial data
export const obtenerRegistros = async (usuario) => {
  
  const q = query(collection(db, "registros"), where("usuario", "==", usuario));
  const querySnapshot = await getDocs(q);
  const registros = [];

  querySnapshot.forEach((doc) => {
    registros.push({ id: doc.id, data: doc.data() });
  });

  return registros;
};

// Delete a specific collection
  export const deleteCollections = async (collectionName, id) => {
    console.log(`deleting ${collectionName} +++ ` + id);
      try {
        const documentoReferencia = doc(db, collectionName, id);
        await deleteDoc(documentoReferencia);
        return true
      } catch (error) {
        return false;
      }
  }
// Sign In with Google Auth, is an option about login  
export const iniciarConGoogle = () => {
  const auth = getAuth();
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

    });
}

export const resetPassword = async (correo) => {
  console.log("EMAIL :" + correo);
  try {
    await sendPasswordResetEmail(auth, correo);
    return { success: true };
  } catch (error) {
    console.log("ERROR: " + error.message)
    return { success: false, errorMessage: error.message };
  }
} 