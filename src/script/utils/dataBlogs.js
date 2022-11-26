import {
  query, where, collection, getFirestore, getDocs, doc, getDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../global/firebase-config';
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const dataPosts = {

  async _fetchDataPost() {
    const idUser = getUserInfo().id;
    const q = query(collection(db, 'products'), where('id_user', '==', idUser));
    const docSnap = await getDocs(q);
    return docSnap;
  },

  async _fetchAllDataPosts() { // digunakan untuk get all product
    const querySnapshot = await getDocs(collection(db, 'posts'));
    return querySnapshot;
  },

  async _fetchUserNameById(idUser) { // digunakan untuk convert user id ke nama
    const q = doc(db, 'users', idUser);
    const docSnap = await getDoc(q);
    return docSnap.data();
  },
};

export default dataPosts;
