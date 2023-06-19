<?= $this->extend('backend/main'); ?>
<?= $this->section('kontenutama'); ?>
<?= $this->include('backend/header') ?>
<!-- BEGIN Page Content -->
<div class="content">
    <div class="container-fluid">
        <div class="portlet">
            <div class="portlet-header portlet-header-bordered">
                <h3 class="portlet-title">INFORMASI PEGAWAI </h3>
            </div>
            <div class="portlet-body">
                <div class="col-md-12">
                    <!-- BEGIN Portlet -->
                    <div class="portlet mb-md-0">
                        <div class="portlet-body">
                            <div class="mb-3">
                                <!-- BEGIN Nav -->
                                <div class="nav nav-lines" id="nav1-tab">
                                    <a class="nav-item nav-link active" id="nav1-home-tab" data-toggle="tab" href="#nav1-home">Daftar Partner Kami</a>
                                    <?= session('jenismerchant') == "OW" ? '<a class="nav-item nav-link" id="nav1-profile-tab" data-toggle="tab" href="#nav1-profile">Tambah Informasi</a>' : "" ;?>
                                </div>
                                <!-- END Nav -->
                            </div>
                            <!-- BEGIN Tab -->
                            <div class="tab-content" id="nav1-tabContent">
                                <div class="tab-pane fade show active" id="nav1-home">
                                    <img class="img-fluid" src="<?= base_url(),'/images/comminsoon.png';?>" alt="Comming Soon Banner">
                                </div>
                                <?php if (session('jenismerchant') == "OW"){ ?>
                                <div class="tab-pane fade" id="nav1-profile">
                                <!-- BEGIN Form -->
                                    <h5 class="mb-4">INFOR PEGAWAI</h5>
                                    <!-- BEGIN Form Group -->
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">ID / Pengguna Pegawai </label>
                                        <div class="col-sm-10">
                                            <!-- BEGIN Input Group -->
                                            <div class="input-group">
                                                <input readonly id="idpegawai" type="text" class="form-control">
                                                <input id="urlfoto" type="text" class="form-control" placeholder="Masukkan url citra [Rekomendasi 128px x 128px]">
                                            </div>
                                            <!-- END Input Group -->
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Nama</label>
                                        <div class="col-sm-10">
                                            <!-- BEGIN Input Group -->
                                            <div class="input-group">
                                                <input id="namadepan" type="text" class="form-control" placeholder="Nama depan">
                                                <input id="namabelakang" type="text" class="form-control" placeholder="Nama belakang">
                                            </div>
                                            <!-- END Input Group -->
                                        </div>
                                    </div>
                                    <!-- END Form Group -->
                                    <!-- BEGIN Form Group -->
                                    <div class="form-group row">
                                        <label for="alamat" class="col-sm-2 col-form-label">Alamat</label>
                                        <div class="col-sm-10">
                                            <!-- BEGIN Input Group -->
                                            <div class="input-group-icon">
                                                <input type="text" class="form-control" id="alamat" placeholder="Isikan alamat real outlet anda">
                                                <div class="input-group-append">
                                                    <i class="fa fa-map-marker-alt"></i>
                                                </div>
                                            </div>
                                            <!-- END Input Group -->
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="rekening" class="col-sm-2 col-form-label">No Telepon Aktif</label>
                                        <div class="col-sm-10">
                                            <!-- BEGIN Input Group -->
                                            <div class="input-group-icon">
                                                <input type="text" class="form-control" id="notelp" placeholder="Ketikan nomor telpn aktif">
                                                <div class="input-group-append">
                                                    <i class="fa fa-phone-square"></i>
                                                </div>
                                            </div>
                                            <!-- END Input Group -->
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="rekening" class="col-sm-2 col-form-label">Kodeunikmember</label>
                                        <div class="col-sm-10">
                                            <!-- BEGIN Input Group -->
                                            <div class="input-group-icon">
                                                <input readonly type="text" value="<?= session('kodeunikmember') ;?>" class="form-control" id="kodeunikmember" placeholder="Buatkan kode unik member">
                                                <div class="input-group-append">
                                                    <i class="fa fa-id-card-alt"></i>
                                                </div>
                                            </div>
                                            <!-- END Input Group -->
                                        </div>
                                    </div>
                                    <!-- END Form Group -->
                                    <h5 class="my-4">AKUN PEGAWAI</h5>
                                    <!-- BEGIN Form Group -->
                                    <div class="form-group row">
                                        <label for="username" class="col-sm-2 col-form-label">Nama Pengguna</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="username" placeholder="Buatkan nama pengguna [username] yang kece">
                                        </div>
                                    </div>
                                    <!-- END Form Group -->
                                    <!-- BEGIN Form Group -->
                                    <div class="form-group row">
                                        <label for="password" class="col-sm-2 col-form-label">Sandi n PIN</label>
                                        <div class="col-sm-10 input-group">
                                            <input type="password" class="form-control" id="password" placeholder="Buatkan password yang unik dan keren">
                                            <input type="pintrx" class="form-control" id="pintrx" placeholder="Buat PIN TRX anda 4 - 12 Digits">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="emailaktif" class="col-sm-2 col-form-label">E-Mail Aktif</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="emailaktif" placeholder="EX: acipay@gmail.com">
                                            <small class="text-muted">Usahakan EMAIL yang anda daftarkan sudah <strong>terverifikasi 2 langkah dan nomor telepon</strong> karena digunakan untuk menerima OTP Login dan mereset password</small>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="latlong" class="col-sm-2 col-form-label">Lat Long</label>
                                        <div class="col-sm-10">
                                            <div class="input-group">
                                                <input readonly type="text" class="form-control" id="latlong" placeholder="Contoh : -7.983908 :: 112.621391">
                                                <button id="buttonlatlong" onclick="getLocation()" class="btn btn-outline-danger" type="button">Dapatkan Lat Long</button>
                                            </div>
                                            <small class="text-muted">Gunakan Aplikasi <strong>GPS Coordinates</strong> atau aplikasi lainnya agar akurat. Digunakan untuk pengumpulan informasi client <strong> ACIRABA </strong></small>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="statuspegawai" class="col-sm-2 col-form-label">Status Pegawai</label>
                                        <div class="col-sm-10">                                          
                                            <select class="form-control" name="statuspegawai" id="statuspegawai">
                                                <option value="ADM">Admin</option>
                                                <option value="KSR">Kasir</option>
                                                <option value="KDS">Kitchen Display</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label for="keterangan">Keterangan</label>
                                        <textarea class="form-control" id="keterangan" rows="3"></textarea>
                                    </div>
                                    <div style="display:none" id="bungkushakakses">
                                        <h5 class="my-4">HAK AKSES PEGAWAI</h5>
                                        <!-- END Form Group -->
                                        <table id="hakakses" class="table table-striped mb-1">
                                            <thead>
                                                <tr>
                                                    <th style="text-align: center; vertical-align: middle;">Fitur</th>
                                                    <th style="text-align: center; vertical-align: middle;">Keterangan</th>
                                                    <th style="text-align: center; vertical-align: middle;">Aksi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr><td style="text-align: center; vertical-align: middle;" colspan=4>Dashboard</td></tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Akses Dashboard</td>
                                                <td style="text-align: justify; ">Digunakan untuk mengakses dashboard dalam aplikasi ACIRABA - ACIPAY</td>
                                                <td style="text-align: center;"><input id="ha_aksesdasboard" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr><td style="text-align: center; vertical-align: middle;" colspan=4>Master Data</td></tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Daftar Item</td>
                                                <td style="text-align: justify; ">Berisikan informasi mengenai item yang dimiliki oleh Oulet</td>
                                                <td style="text-align: center;"><input id="ha_daftaritem" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: center; ">Tambah Item</td>
                                                <td style="text-align: justify; ">User diizinkan untuk menambah item baru pada outlet tersebut</td>
                                                <td style="text-align: center;"><input id="ha_tambahitem" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: center; ">Tambah Bulk Item</td>
                                                <td style="text-align: justify; ">User diizinkan untuk menambah item baru secara bersamaan pada outlet tersebut</td>
                                                <td style="text-align: center;"><input id="ha_bulkimtem" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: center; ">Ubah Informasi Item</td>
                                                <td style="text-align: justify; ">User dapat mengubah informasi item yang di pilih baik nama, harga, foto, dll</td>
                                                <td style="text-align: center;"><input id="ha_ubahinformasi_masteritem" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <button id="simpanpenggunamerchant" class="mt-2 btn btn-primary">Simpan Informasi</button>
                                        <button id="bersihkan" class="mt-2 btn btn-primary">Bersihkan Formulir</button>
                                    </div>
                                <!-- END Form -->
                                </div>
                                <?php } ;?>
                            </div>
                            <!-- END Tab -->
                        </div>
                    </div>
                    <!-- END Portlet -->
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END Page Content -->
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
<script src="<?= base_url();?>/scripts/masterdata/pengguna.js"></script>
<!-- hapus jika sudah -->
<script type="text/javascript" src="<?= base_url();?>/scripts/jquery.countdown.js"></script>
<?= $this->endSection(); ?>