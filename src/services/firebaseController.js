import { collection, addDoc , query, where, getDocs} from "firebase/firestore"; 
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { db } from "./firebase"

// Guardamos en la base de datos 
export const GuardarRegistro = async (registro) => {
  const docRef = await addDoc(collection(db, 'registros'), registro)
  return docRef;
}


// Obtenemos los registros 
export const obtenerRegistros = async (usuario) => {
  const q = query(collection(db, "registros"), where("usuario", "==", usuario));
  const querySnapshot = await getDocs(q);
  const registros = [];

  querySnapshot.forEach((doc) => {
    registros.push({ id: doc.id, data: doc.data() });
  });

  return registros;
};

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
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}