import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "./firebase"


export const AñadirUsuario = user => {
  return addDoc(collection(db, 'usuarios'), user);

}
