import registerUser from '../../../utils/registerPage';

const mainLogin = {
  async render() {
    return `
    <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 d-flex flex-column align-items-center justify-content-center">

                        <div class="d-flex justify-content-center py-4">
                            <a href="/" class="logo d-flex align-items-center w-auto">
                                <img src="./assets/img/logo.png" alt="">
                                <span>Login Page | RT Project</span>
                            </a>
                        </div><!-- End Logo -->
                        <div class="card">
                            <div class="card-body p-0 p-3">
                                <div class="row">
                                    <div
                                        class="col-md-4 pe-4 d-flex flex-column align-items-center justify-content-center">
                                        <img src="./assets/img/login.gif" class="rounded" alt="login gif" width="100%">
                                    </div>
                                    <div class="col-md-8 px-4">
                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Masuk akun Anda</h5>
                                            <p class="text-center small">Masukkan email dan password akun Anda</p>
                                        </div>

                                        <form class="row g-3 needs-validation" method="post">
                                            <div class="col-12">
                                                <label for="email" class="form-label">Email</label>
                                                <div class="input-group has-validation">
                                                    <input type="email" name="email" class="form-control" id="email"
                                                        required>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Password</label>
                                                <input type="password" name="password" class="form-control"
                                                    id="yourPassword" required>
                                            </div>

                                            <div class="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" name="showPassword"
                                                        value="true" id="showPassword">
                                                    <label class="form-check-label" for="showPassword">Show
                                                        password</label>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <button class="btn btn-primary w-100" type="submit">Login</button>
                                            </div>
                                            <div class="col-12">
                                                <p class="small mb-0">Belum punya akun <a href="#"
                                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop">Daftar
                                                        akun!</a></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="credits">
                            <small><span>Copyright &copy; | SIB Batch 3 2022 - Dicoding Academy </span></small>
                        </div>

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
    `;
  },

  async afterRender() {
    console.log('for login register method');
    await registerUser.init();
    const datalist = document.querySelector('#datalistOptions');
    fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then((response) => response.json())
      .then((provinces) => provinces.forEach((provinsi) => {
        datalist.innerHTML += `<option value="${provinsi.name}">`;
      }));
  },
};

export default mainLogin;
