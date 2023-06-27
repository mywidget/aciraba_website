<?= $this->extend('backend/main'); ?>
<?= $this->section('kontenutama'); ?>
<?= $this->include('backend/header') ?>
<!-- BEGIN Page Content -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap" rel="stylesheet">
<link href="<?= base_url() ;?>styles/cssseira/styleprofile.css" rel="stylesheet">
<div class="content">
    <div class="container-fluid">
        <div class="portlet">
            <div class="portlet-header portlet-header-bordered">
                <h3 class="portlet-title">INFORMASI HAK AKSES 
                    <a href="<?= base_url().'masterdata/informasimerchant';?>"><button id="hakakseskontrol" class="btn btn-success float-right"> <i class="fas fa-users"></i> Daftar Pegawai / Rekan</button></a>
                </h3>
            </div>
            <div class="portlet-body">
                <div class="col-md-12">
                    <!-- BEGIN Portlet -->
                    <div class="portlet mb-md-0">
                        <div class="portlet-body">
                            <div class="mb-3">
                                <!-- BEGIN Nav -->
                                <div class="nav nav-lines" id="nav1-tab">
                                    <a class="nav-item nav-link active" id="nav1-home-tab" data-toggle="tab" href="#nav1-home">Hak Akses</a>
                                    <a class="nav-item nav-link" id="nav1-profile-tab" data-toggle="tab" href="#nav1-profile">Daftar Hak Akses</a>
                                </div>
                                <!-- END Nav -->
                            </div>
                            <!-- BEGIN Tab -->
                            <div class="tab-content" id="nav1-tabContent">
                                <div class="tab-pane fade show active" id="nav1-home"> 
                                    <div>
                                        <h5 class="my-4">HAK AKSES PENGGUNA</h5>
                                        <input type="text" class="mb-2 form-control" placeholder="Masukkan Nama Hak Akses"> 
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
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Kartu Stok Item</td>
                                                <td style="text-align: justify; ">Berisikan informasi mengenai arus item yang dimiliki oleh tiap outlet</td>
                                                <td style="text-align: center;"><input id="ha_daftaritem" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Kupon Belanja</td>
                                                <td style="text-align: justify; ">Buat kupon belanja kepada pelangganmu agar mereka betah belanja ditokomu</td>
                                                <td style="text-align: center;"><input id="ha_daftaritem" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <button id="simpanpenggunamerchant" class="mt-2 btn btn-primary">Simpan Informasi</button>
                                        <button id="bersihkan" class="mt-2 btn btn-primary">Bersihkan Formulir</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav1-profile">
                                </div>
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
<script src="<?= base_url();?>scripts/masterdata/pengguna.js"></script>
<script src="<?= base_url();?>scripts/profilejs.js"></script>
<script>
let colorCSS;
$(document).ready(function () {
    getCsrfTokenCallback(function() {
        loaddaftarpewagawai()
    }); 
    getCsrfTokenCallback(function() {
        loadidmember();
    }); 
    $("#hakakses").on('click', '.form-check-input', function() {
        let currentRow = $(this).closest("tr");
        if (ha.includes(currentRow.find(".cellhakseswhere").html()) === false) ha.push(currentRow.find(".cellhakseswhere").html());
    });
});
$(document).on('click', '.toggle-passworda', function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#sandikamu");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});
$(document).on('click', '.toggle-passwordb', function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#sandipegawai");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});
</script>
<?= $this->endSection(); ?>