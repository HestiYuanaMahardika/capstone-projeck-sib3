import { initializeApp } from 'firebase/app';
import {
  getFirestore, doc, setDoc, query, where, limit, collection, getDocs,
} from 'firebase/firestore';
import { customAlphabet } from 'nanoid';
import firebaseConfig from '../global/firebase-config';
import flassMessage from './flassMessage';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const registerUser = {
  async init() {
    await this._registerMethod();
  },

  async _registerMethod() {
    const userResgis = document.querySelector('#user');
    const email = document.querySelector('#emailRegister');
    const namaLengkap = document.querySelector('#nama_lengkap');
    const provinsi = document.querySelector('#provinsi');
    const kabupaten = document.querySelector('#kabupaten');
    const kecamatan = document.querySelector('#kecamatan');
    const nohpwa = document.querySelector('#no_hp_wa');
    const tgllahir = document.querySelector('#tgl_lahir');
    const password = document.querySelector('#password');
    const passwordconfirm = document.querySelector('#password_confirm');
    const register = document.getElementById('register');
    const btnsubmit = document.getElementById('btn-submit');

    register.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (password.value.length < 6) {
        flassMessage('info', 'Password terlalu pendek', 'Password harus lebih 6 karakter');
        return;
      }

      if (password.value !== passwordconfirm.value) {
        flassMessage('question', 'Password tidak sama', 'Silahkan ulangi password');
      } else {
        const data = {
          user: userResgis.value,
          email: email.value,
          namalengkap: namaLengkap.value,
          provinsi: provinsi.value,
          kabupaten: kabupaten.value,
          kecamatan: kecamatan.value,
          no_hp_wa: nohpwa.value,
          tgl_lahir: tgllahir.value,
          password: password.value,
        };
        btnsubmit.classList.add('disabled');
        btnsubmit.innerText = 'loading..';
        await this._insertData(data);
      }
    });
  },

  async _checkemail(email, id = null) {
    let q;
    if (id) {
      q = query(collection(db, 'users'), where('email', '==', email), where('id', '==', id), limit(1));
    } else {
      q = query(collection(db, 'users'), where('email', '==', email), limit(1));
    }

    const docSnap = await getDocs(q);
    if (docSnap.size > 0) {
      console.log(docSnap);
      return true;
    }
    return false;
  },

  async _insertData(user) {
    try {
      const checkEmail = await this._checkemail(user.email);
      console.log(checkEmail);
      if (checkEmail) {
        flassMessage('info', 'Email telah terdaftar', 'Silahkan Login!');
        setTimeout(() => {
          window.location.href = '../login.html';
        }, 2000);
      } else {
        const nanoid = customAlphabet('1234567890abcdef', 17);
        await setDoc(doc(db, 'users', `user_${nanoid()}`), user);
        flassMessage('success', 'Berhasil Daftar', 'Silahkan Login!');
        setTimeout(() => {
          window.location.href = '../login.html';
        }, 2000);
      }
    } catch (error) {
      flassMessage('error', 'Gagal Daftar', `Error: ${error}`);
    }
  },
};

export default registerUser;
