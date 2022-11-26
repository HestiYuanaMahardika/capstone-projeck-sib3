import dataAccount from '../../../utils/dataAccounts';
import registerUser from '../../../utils/registerPage';

/* eslint-disable no-undef */
const AccountsAdmin = {

  async render() {
    return `
    <div class="mb-3" >
    <button type="button" class="btn btn-primary btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Tambah Akun</button>
    </div>
    
      <section class="section accounts">
      <div class="card">
      <div class="card-body">
      <h5 class="card-title">Akun Penjual</h5>
      <div class="col align-middle">
      <div class="table-responsive">
      <table class="table table-hover" id="buyerSeller">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col" class="no-sort">Avatar</th>
      <th scope="col">Nama Lengkap</th>
      <th scope="col">Nomor HP</th>
      <th scope="col">Username</th>
      <th scope="col" class="no-sort">Action</th>
    </tr>
  </thead>
  <tbody class="align-middle" id="body-seller">
  </tbody>
</table>
</div>
</div>
</div>
</section>

<section class="section accounts">
      <div class="card">
      <div class="card-body">
      <h5 class="card-title">Akun Pembeli</h5>
      <div class="table-responsive">
      <table class="table table-hover" id="buyerTable">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col" class="no-sort">Avatar</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Username</th>
      <th scope="col" class="no-sort">Action</th>
    </tr>
  </thead>
  <tbody class="align-middle" id="body-buyer">
  </tbody>
</table>
</div>
</div>
</div>
</section>

<!-- Modal Register akun -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content" id="form-register">
                <form action="#" id="register" method="post">
                    <div class="modal-header border-0 border-top border-4 border-primary">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Daftar sebagai</h1>
                        <div class="col-4 ms-3">
                            <select class="form-select" name="user" id="user" required aria-label="seller or buyer">
                                <option value="seller">Penjual</option>
                                <option value="buyer">Pembeli</option>
                            </select>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body border-top border-1">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="emailRegister" class="form-label">Email <span
                                            class="text-danger">*</span></label>
                                    <input type="email" required name="emailRegister" class="form-control" id="emailRegister"
                                        placeholder="rtproject@gmail.com">
                                </div>
                                <div class="mb-3">
                                    <label for="nama_lengkap" class="form-label">Nama Lengkap <span
                                            class="text-danger">*</span></label>
                                    <input type="text" required name="nama_lengkap" class="form-control"
                                        id="nama_lengkap" placeholder="Masukkan Nama Lengkap">
                                </div>
                                <div class="mb-3">
                                    <label for="provinsi" class="form-label">Provinsi <span
                                            class="text-danger">*</span></label>
                                    <input class="form-control" required name="provinsi" list="datalistOptions"
                                        id="provinsi" placeholder="Provinsi">
                                    <!-- https://www.emsifa.com/api-wilayah-indonesia/ -->
                                    <datalist id="datalistOptions">
                                    </datalist>
                                </div>
                                <div class="mb-3">
                                    <label for="kabupaten" class="form-label">Kabupaten/Kota <span
                                            class="text-danger">*</span></label>
                                    <input type="text" required name="kabupaten" class="form-control" id="kabupaten"
                                        placeholder="Kabupaten/Kota">
                                </div>
                                <div class="mb-3">
                                    <label for="kecamatan" class="form-label">Kecamatan <span
                                            class="text-danger">*</span></label>
                                    <textarea name="kecamatan" class="form-control" id="kecamatan" rows="1"
                                        placeholder="Kecamatan" required></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="no_hp_wa" class="form-label">Nomor HP/WA <span
                                            class="text-danger">*</span></label>
                                    <input type="number" required name="no_hp_wa" class="form-control" id="no_hp_wa"
                                        placeholder="Nomor Hp/WhatsApp">
                                </div>
                                <div class="mb-3">
                                    <label for="tgl_lahir" class="form-label">Tanggal Lahir <span
                                            class="text-danger">*</span></label>
                                    <input type="date" required name="tgl_lahir" class="form-control" id="tgl_lahir">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password <span
                                            class="text-danger">*</span></label>
                                    <input type="password" required name="password" class="form-control" id="password">
                                </div>
                                <div class="mb-3">
                                    <label for="password_confirm" class="form-label">Password confirm <span
                                            class="text-danger">*</span></label>
                                    <input type="password" required name="password_confirm" class="form-control"
                                        id="password_confirm">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" id="btn-submit" class="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <form action="#" id="login" method="post" style="display: hidden;">
    </form>

          `;
  },

  async afterRender() {
    console.log('afterrender accounts');

    const bodyBuyer = document.querySelector('#body-buyer');
    const bodySeller = document.querySelector('#body-seller');

    const fetchedDataAccount = await dataAccount._fetchAllDataAccount();
    console.log(fetchedDataAccount);
    let numberCountSeller = 1;
    let numberCountBuyer = 1;

    fetchedDataAccount.forEach((data) => {
      if (data.user.toLowerCase() === 'seller') {
        bodySeller.innerHTML += `<tr>
        <th scope="row">${numberCountSeller}</th>
        <td><img src="${data.fotoprofile}" class="rounded-circle img-fluid" alt="profilepic" style="max-width: 40px;"></td>
        <td>${data.namalengkap}</td>
        <td>${data.no_hp_wa}</td>
        <td>${data.email}</td>
        <td><button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Edit</button> <button type="button" class="btn btn-outline-danger">Del</button></td>
      </tr>`;
        numberCountSeller += 1;
      } if (data.user.toLowerCase() === 'buyer') {
        bodyBuyer.innerHTML += `<tr>
        <th scope="row">${numberCountBuyer}</th>
        <td><img src="${data.fotoprofile}" class="rounded-circle img-fluid" alt="profilepic" style="max-width: 40px;"></td>
        <td>${data.namalengkap}</td>
        <td>${data.no_hp_wa}</td>
        <td>${data.email}</td>
        <td><button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">Edit</button> <button type="button" class="btn btn-outline-danger">Del</button></td>
      </tr>`;
        numberCountBuyer += 1;
      }
    });

    // register
    await registerUser.init();
    const datalist = document.querySelector('#datalistOptions');
    fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then((response) => response.json())
      .then((provinces) => provinces.forEach((provinsi) => {
        datalist.innerHTML += `<option value="${provinsi.name}">`;
      }));

    $('#buyerTable').DataTable({
      // eslint-disable-next-line quotes
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });

    $('#buyerSeller').DataTable({
      // eslint-disable-next-line quotes
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
      columnDefs: [{
        targets: 'no-sort',
        orderable: false,
      }],
    });
  },
};

export default AccountsAdmin;
