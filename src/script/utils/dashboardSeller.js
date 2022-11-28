import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, getDoc, updateDoc,
} from 'firebase/firestore';
import firebaseConfig from '../global/firebase-config';
import { getUserInfo } from './functions';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DataDashboardSeller = {
  async init() {
    const data = await this._fetchDataSeller();
    return data;
  },

  async _fetchDataSeller() {
    const idSeller = getUserInfo().id;
    const q = doc(db, 'dashboardSellers', idSeller);
    const docSnap = await getDoc(q);
    return docSnap.data();
  },

  async tambahTotalProduk() {
    const idSeller = getUserInfo().id;
    const q = doc(db, 'dashboardSellers', idSeller);
    const docSnap = await getDoc(q);
    const jumlProduk = docSnap.data().jumlah_barang;
    await updateDoc(q, { jumlah_barang: jumlProduk + 1 });
  },

  async kurangTotalProduk() {
    const idSeller = getUserInfo().id;
    const q = doc(db, 'dashboardSellers', idSeller);
    const docSnap = await getDoc(q);
    const jumlProduk = docSnap.data().jumlah_barang;
    await updateDoc(q, { jumlah_barang: jumlProduk - 1 });
  },
};

export default DataDashboardSeller;
