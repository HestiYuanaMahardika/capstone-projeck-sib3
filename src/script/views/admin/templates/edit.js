const formEditAkun = (data) => `
<div class="row">
<div class="col-md-6">
    <img src="${data.fotoprofile}" alt="${data.namalengkap}" title="foto data ${data.namalengkap}" class="rounded" style="object-fit: cover;width: 80%;">
</div>
<div class="col-md-6">
    <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Nama Lengkap</label>
    <div class="mb-3">
        <input name="fullName" type="text" class="form-control" autocomplete="off" id="fullName" value="${data.namalengkap}" required>
    </div>
    <label for="edit_provinsi" class="col-md-4 col-lg-3 col-form-label">Provinsi</label>
    <div class="input-group mb-3">
        <input class="form-control" required name="provinsi" list="datalistOptions" autocomplete="off" required
                                        id="edit_provinsi" placeholder="Provinsi" value="${data.provinsi}">
                                    <datalist id="datalistOptions">
                                    </datalist>
    </div>
    <label for="kabupaten" class="col-md-4 col-lg-3 col-form-label">Kabupaten</label>
    <div class="input-group mb-3">
        <input name="kabupaten" type="text" class="form-control" autocomplete="off" id="edit_kabupaten" value="${data.kabupaten}" required>
    </div>
    <label for="kecamatan" class="col-md-4 col-lg-3 col-form-label">Kecamatan</label>
    <div class="input-group mb-3">
        <input name="kecamatan" type="text" class="form-control" autocomplete="off" id="edit_kecamatan" value="${data.kecamatan}" required>
    </div>
    <div class="mb-3">
        <label for="nomorhp" class="col-md-4 col-lg-3 col-form-label">Nomor Hp/WhatsApp</label>
        <input name="nomorhp" type="text" class="form-control" autocomplete="off" id="nomorhp" value="${data.no_hp_wa}">
    </div>
    <div class="my-3">
        <label for="editFoto" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editFoto" name="editFoto" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
</div>

<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditAkun">Update data</button>
</div>
</div>
`;

const formEditProduk = (produk) => `

<div class="row">
<div class="col-md-6">
    <img src="${produk.foto}" alt="${produk.nama_product}" title="foto produk ${produk.nama_product}" class="rounded" style="object-fit: cover;width: 100%;">
    <div class="my-3">
        <label for="editFotoProduk" class="form-label">Ganti foto</label>
        <input class="form-control" type="file" id="editFotoProduk" name="editFotoProduk" accept=".jpg,.jpeg,.png">
        <small><span class="text-danger fst-italic">Pastikan file tidak lebih 3mb dan format jpg/jpeg/png</span></small>
    </div>
    
</div>
<div class="col-md-6">
    <div class="mb-3">
        <label for="namaBarang" class="form-label">Nama</label>
        <input type="text" class="form-control" name="namaBarang" id="namaBarang" aria-label="Nama barang" placeholder="Sampah Plastik" value="${produk.nama_product}" required>
    </div>
    <label for="beratBarang" class="form-label">Berat Sampah</label>
    <div class="input-group mb-3">
        <input type="number" class="form-control" name="beratBarang" value="${produk.berat_product}" id="beratBarang" placeholder="3" aria-label="Berat barang" aria-describedby="basic-addon2" required>
        <span class="input-group-text" id="basic-addon2">Kg</span>
    </div>
    <div class="mb-3">
        <label for="jeniBarang" class="form-label">Jenis Sampah</label>
        <select class="form-select" id="jenisBarang" name="jenisBarang" aria-label="Jenis sampah" required>
            <option selected value="${produk.jenis_barang}">${produk.jenis_barang}</option>
            <option value="Sampah Organik">Sampah Organik</option>
            <option value="Sampah Anorganik">Sampah Anorganik</option>
            <option value="Sampah B3">Sampah B3</option>
        </select>
    </div>
    <label for="stokBarang" class="form-label">Stok</label>
    <div class="input-group mb-3">
        <input type="number" class="form-control" value="${produk.stok}" name="stokBarang" id="stokBarang" placeholder="2" aria-label="Stok barang" required>
        <span class="input-group-text" id="basic-addon2">pack</span>
    </div>
    <label for="hargaBarang" class="form-label">Harga</label>
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">Rp</span>
        <input type="number" class="form-control" value="${produk.harga}" name="hargaBarang" id="hargaBarang" placeholder="13000" aria-label="Berat barang" aria-describedby="basic-addon2" required>
    </div>
</div>
<div class="mb-3">
  <label for="deskripsi" class="form-label">Deskripsi Produk</label>
  <textarea class="form-control" id="deskripsi" placeholder="Deskripsi Produk" rows="4">${produk.deskripsi}</textarea>
</div>
<div class="d-grid gap-2 mt-3">
    <button class="btn btn-primary" type="submit" id="btnEditProduk">Update produk</button>
</div>
</div>
`;

export { formEditAkun, formEditProduk };