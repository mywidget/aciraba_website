<?= $this->extend('backend/main'); ?>
<?= $this->section('kontenutama'); ?>
<?= $this->include('backend/header') ?>
<!-- BEGIN Page Content -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap" rel="stylesheet">
<link href="<?= base_url() ;?>styles/cssseira/styleprofile.css" rel="stylesheet">
<style>
input[type=checkbox] {
    transform: scale(1.5);
    cursor:pointer;
}
</style>
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
                                        <input type="text" id="namahakakses" class="mb-2 form-control" placeholder="Masukkan Nama Hak Akses"> 
                                        <input type="hidden" id="aihakakses"> 
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
                                            <tr><td style="text-align: center; vertical-align: middle;" colspan=4>Kasir</td></tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Hanya Kasir</td>
                                                <td style="text-align: justify; ">Hak akses pengguna dikhususkan untuk kasir. Setelah login pengguna akan dihadapkan langsung dengan KASIR dan TAMPILAN PESANAN. Fitur lain terabaikan</td>
                                                <td style="text-align: center;"><input id="ha_hanyakasir" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr><td style="text-align: center; vertical-align: middle;" colspan=4>Dashboard</td></tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Akses Dashboard</td>
                                                <td style="text-align: justify; ">Digunakan untuk mengakses dashboard dalam aplikasi ACIRABA - ACIPAY</td>
                                                <td style="text-align: center;"><input id="ha_aksesdasboard" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Akses Kasir</td>
                                                <td style="text-align: justify; ">Digunakan pengguna untuk melakukan transaksi item keluar melalui FITUR KASIR</td>
                                                <td style="text-align: center;"><input id="ha_kasir" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Tampilan Pesanan</td>
                                                <td style="text-align: justify; ">Lebih di kenal dengan KDS (Kitchen Display System). Tampilan untuk menampilkan item pesanan yang hendak di kelola</td>
                                                <td style="text-align: center;"><input id="ha_kds" class="form-check-input" type="checkbox" /></td>
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
                                                <td style="text-align: center;"><input id="ha_ubah_masteritem" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Kartu Stok Item</td>
                                                <td style="text-align: justify; ">Berisikan informasi mengenai arus item yang dimiliki oleh tiap outlet</td>
                                                <td style="text-align: center;"><input id="ha_kartustok" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Kupon Belanja</td>
                                                <td style="text-align: justify; ">Buat kupon belanja kepada pelangganmu agar mereka betah belanja ditokomu</td>
                                                <td style="text-align: center;"><input id="ha_kuponbelanja" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Daftar Suplier</td>
                                                <td style="text-align: justify; ">Berisikan daftar suplier yang bekerjasama dengan anda dalam menerima item dari mereka</td>
                                                <td style="text-align: center;"><input id="ha_dafatarsuplier" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Daftar Member</td>
                                                <td style="text-align: justify; ">Berisikan daftar member yang bekerjasama dengan anda dalam membeli / mendistribusikan barang dagangan anda</td>
                                                <td style="text-align: center;"><input id="ha_daftarmember" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Daftar Sales</td>
                                                <td style="text-align: justify; ">Berisikna daftar sales yang membantu anda dalam memasarkan, mengantarkan produk item anda kepada pelangganmu</td>
                                                <td style="text-align: center;"><input id="ha_daftarsales" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Satuan Item</td>
                                                <td style="text-align: justify; ">Daftar satuan yang dapat digunakan dalam mengelompokkan item anda berdasarkan satuan</td>
                                                <td style="text-align: center;"><input id="ha_daftarsatuan" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Kategori Item</td>
                                                <td style="text-align: justify; ">Daftar kategori yang dapat digunakna dalam mengelompokkan item anda berdasarkan kategori</td>
                                                <td style="text-align: center;"><input id="ha_kategoriitem" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Kategori Anggota</td>
                                                <td style="text-align: justify; ">Daftar kategori yang dapat digunakan untuk mengelompokkan member yang loyal terhadap outlet anda</td>
                                                <td style="text-align: center;"><input id="ha_kategorianggota" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Metode Pembayaran</td>
                                                <td style="text-align: justify; ">Daftar mengelola metode pembayaran untuk mengindentifikasi jenis transaksi keluar, masuk anda </td>
                                                <td style="text-align: center;"><input id="ha_metodepembayaran" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Data Brand</td>
                                                <td style="text-align: justify; ">Informasi brand yang tersedia untuk produk anda dapat mengelompokkan item berdasarkan brand</td>
                                                <td style="text-align: center;"><input id="ha_databrand" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Data Principal</td>
                                                <td style="text-align: justify; "></td>
                                                <td style="text-align: center;"><input id="ha_dataprincipal" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr><td style="text-align: center; vertical-align: middle;" colspan=4>Penjualan</td></tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Retur Penjualan</td>
                                                <td style="text-align: justify; ">Prinsipal atau produsen adalah pemilik brand dari produk yang didistribusikan oleh distributor</td>
                                                <td style="text-align: center;"><input id="ha_returpenjualan" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Data Penjualan</td>
                                                <td style="text-align: justify; ">Informasi transaksi penjualan yang terjadi dalam usaha anda</td>
                                                <td style="text-align: center;"><input id="ha_datapenjualan" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">History Harga Jual</td>
                                                <td style="text-align: justify; ">Untuk melihat perubahan harga jual yang ditawarkan atau ditransaksikan kepada pelanggan</td>
                                                <td style="text-align: center;"><input id="ha_datahishargajual" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Daftar Piutang Anggota</td>
                                                <td style="text-align: justify; ">Daftar untuk melihat informasi dana anda yang dipegang pelanggan atau PIUTANG agar tidak lupa menagihnya</td>
                                                <td style="text-align: center;"><input id="ha_datapiutanganggota" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Daftar Pesanan</td>
                                                <td style="text-align: justify; ">Berisikan informasi pesanan yang akan disiapkan oleh petugas agar saat hari H barang sudah READY</td>
                                                <td style="text-align: center;"><input id="ha_daftarpesanan" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr><td style="text-align: center; vertical-align: middle;" colspan=4>Pembelian</td></tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Retur Pembelian</td>
                                                <td style="text-align: justify; ">Informasi transaksi retur pembelian guna melihat barang mana saja yang dikembalikan beserta alasan kerusakan </td>
                                                <td style="text-align: center;"><input id="ha_returpembelian" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Daftar Pembelian</td>
                                                <td style="text-align: justify; ">Untuk melihat daftar pembelian yang outlet anda lakukan terhadap suplier terkait</td>
                                                <td style="text-align: center;"><input id="ha_daftaritem" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">History Harga Beli</td>
                                                <td style="text-align: justify; ">Untuk melihat perubahan harga yang diberikan oleh suplier apakah naik atau turun sehingga item ini layak untuk dibeli dan dijual</td>
                                                <td style="text-align: center;"><input id="ha_daftarpembelian" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Daftar Hutang Suplier</td>
                                                <td style="text-align: justify; ">Informasi mengenai besaran hutang yang harus dibayar kepada suplier sehingga anda tidak lupa</td>
                                                <td style="text-align: center;"><input id="ha_daftarhutangsuplier" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr><td style="text-align: center; vertical-align: middle;" colspan=4>Penyesuaian</td></tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Penyesuaian Stok Item</td>
                                                <td style="text-align: justify; ">Berisikan informasi yang menampilkan perubahan stok secara paksa diakibatkan berberapa faktor kondisi</td>
                                                <td style="text-align: center;"><input id="ha_penyesuaianstok" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Mutasi Stok Barang</td>
                                                <td style="text-align: justify; ">Daftar perpindahan item ke lokasi berbeda ke outlet lain sehingga anda tidak lupa</td>
                                                <td style="text-align: center;"><input id="ha_mutasistok" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr><td style="text-align: center; vertical-align: middle;" colspan=4>Laporan</td></tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Laporan Master</td>
                                                <td style="text-align: justify; ">Menampilkan informasi mengenai DATABASE Master yang dimiliki oleh OUTLET anda</td>
                                                <td style="text-align: center;"><input id="ha_laporanmaster" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: center; ">Laporan Master Item</td>
                                                <td style="text-align: justify; ">Menampilkan informasi lengkap mengenai item yang anda miliki</td>
                                                <td style="text-align: center;"><input id="ha_laporanmasteritem" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: center; ">Laporan Master Suplier</td>
                                                <td style="text-align: justify; ">Menampilkan informasi lengkap mengenai suplier yang anda pilih guna menstok item anda</td>
                                                <td style="text-align: center;"><input id="ha_laporanmastersuplier" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: center; ">Laporan Master Member</td>
                                                <td style="text-align: justify; ">Menampilkan informasi lengkap mengenai pelanggan anda</td>
                                                <td style="text-align: center;"><input id="ha_laporanmastermember" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Laporan Penjualan</td>
                                                <td style="text-align: justify; ">Menampilkan informasi mengenai PENJUALAN pada usaha anda serta mengelola barang retur dari pelanggan</td>
                                                <td style="text-align: center;"><input id="ha_laporanpenjualan" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: center; ">Laporan Penjualan</td>
                                                <td style="text-align: justify; ">Menampilkan informasi mengenai PENJUALAN pada usaha anda agar dapat dianalisa untuk langkah kedepanz</td>
                                                <td style="text-align: center;"><input id="ha_laporanpenjualana" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: center; ">Laporan Retur Penjualan</td>
                                                <td style="text-align: justify; ">Menampilkan informasi mengenai barang mana saja yang dikembalikan oleh pelanggan kepada kita terhadap berberapa faktoe</td>
                                                <td style="text-align: center;"><input id="ha_laporanpenjualanretur" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Laporan Pembelian</td>
                                                <td style="text-align: justify; ">Menampilkan informasi barang masuk yang siap dikelola oleh OUTLET anda</td>
                                                <td style="text-align: center;"><input id="ha_laporanpembelian" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: center; ">Laporan Pembelian</td>
                                                <td style="text-align: justify; ">Menampilkan informasi laporan mengenai pembelian item yang dilakukan oleh petugas anda guna menambah persediaan stok item</td>
                                                <td style="text-align: center;"><input id="ha_laporanpembeliana" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: center; ">Laporan Retur Pembelian</td>
                                                <td style="text-align: justify; ">Menampilkan informasi mengenai barang apa saja yang dikembalikan kepada SUPLIER terhadap berberapa faktor</td>
                                                <td style="text-align: center;"><input id="ha_laporanpembelianretur" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Laporan Hutang</td>
                                                <td style="text-align: justify; ">Menampilkan informasi hutang anda terhada suplier yang harus dibayar</td>
                                                <td style="text-align: center;"><input id="ha_laporanhutang" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            <tr>
                                                <td class="cellhakseswhere" style="text-align: left; ">Laporan Piutang</td>
                                                <td style="text-align: justify; ">Menampilakn informasi piutang anda agar anda dapat menagih kepada pelanggan terkait</td>
                                                <td style="text-align: center;"><input id="ha_laporanpiutang" class="form-check-input" type="checkbox" /></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <button id="simpanpenggunamerchant" class="mt-2 btn btn-primary">Simpan Informasi</button>
                                        <button id="bersihkan" class="mt-2 btn btn-primary">Bersihkan Formulir</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav1-profile">
                                <table id="tabel_hakakses" class="table table-bordered table-striped table-hover nowrap">
                                    <thead>
                                        <tr>
                                            <th>Nama Hak Akses</th>
                                            <th>Fitur Diizinkan</th>
                                            <th>Fitur Ditolak</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
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
<script>
$(document).ready(function () {
    setTimeout(function() {
        loadtabelhakakses();
    }, 500);
})
function loadtabelhakakses(){
getCsrfTokenCallback(function() {
    var tabel = $("#tabel_hakakses").DataTable({
        language:{"url":"https://cdn.datatables.net/plug-ins/1.10.25/i18n/Indonesian.json"},
        pageLength: 10,
        lengthMenu: [[10, 50, 100 , 500, -1], [10, 50, 100, 500, "All"]],
        ajax: {
            "url": baseurljavascript + 'auth/daftarhakakses',
            "type": "POST",
            "data": function (d) {
                d.csrf_aciraba = csrfTokenGlobal;
            }
        },
    });
});
}
$("#hakakses").on('click', '.form-check-input', function() {
    let isChecked = $("#ha_hanyakasir").is(":checked");
    if (isChecked){
        $('#hakakses [type="checkbox"]').each(function(i, chk) { 
        if (chk.id === "ha_hanyakasir") {
            chk.checked = true;
        } else {
            chk.checked = false;
        }
    });
    }
    
});
$("#bersihkan").on("click", function(){
    $('#namahakakses').val("")
    $('#aihakakses').val("")
    $('#hakakses [type="checkbox"]').each(function(i, chk) {$(chk).prop('checked', false);});
});
$("#simpanpenggunamerchant").on("click", function(){
    if ($("#namahakakses").val() == ""){
        return toastr["error"]("Waduh cuy, inforamasi mengenai nama HAK AKSES harus diisi");
    }
    jsonStrMenuAkses = '{"menuakses":[]}';
    let obj = JSON.parse(jsonStrMenuAkses);
    $('#hakakses [type="checkbox"]').each(function(i, chk) { 
        if (chk.checked == true) {
            obj['menuakses'].push({"menuke":chk.id,"status":"1"});
        }else{
            obj['menuakses'].push({"menuke":chk.id,"status":"0"});
        }
    });
    jsonStrMenuAkses = JSON.stringify(obj);
    Swal.fire({
        title: "Simpam Informasi Hak Akses",
        text: "Apakah anda ingin menyimpan Hak Akses dengan NAMA : "+$("#namahakakses").val(),
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oke.. Simpan Hak Akses'
    }).then((result) => {
        if (result.isConfirmed) {
            $('#simpanpenggunamerchant').prop("disabled",true);
            $('#simpanpenggunamerchant').html('<i class="fa fa-spin fa-spinner"></i> Proses Simpan');
            getCsrfTokenCallback(function() { 
                $.ajax({
                    url: baseurljavascript + 'masterdata/simpanhakakses',
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        [csrfName]: csrfTokenGlobal,
                        NAMAHAKAKSES : $('#namahakakses').val(),
                        JSONMENU : jsonStrMenuAkses,
                        KONDISI : ($('#aihakakses').val() != "" ? true : false),
                        AI : $('#aihakakses').val(),
                    },
                    complete:function(){
                        $('#simpanpenggunamerchant').prop("disabled",false);
                        $('#simpanpenggunamerchant').html('Simpan Informasi');
                    },
                    success: function (response) {
                        if (response.success == "true"){
                            $('#namahakakses').val("")
                            $('#aihakakses').val("")
                            $('#hakakses [type="checkbox"]').each(function(i, chk) {$(chk).prop('checked', false);});
                            getCsrfTokenCallback(function() {$('#tabel_hakakses').DataTable().ajax.reload();});
                            Swal.fire({
                                title: "Berhasil Horeee!!!",
                                html: response.msg,
                                icon: 'success',
                            });
                        }else{
                            Swal.fire({
                                title: "Gagal... Uhhh",
                                html: response.msg,
                                icon: 'warning',
                            });
                        }
                    },
                    error: function(xhr, status, error) {
                        toastr["error"](xhr.responseJSON.message);
                    }
                });
            });
        }
    });
});
function ubahhakases(ai,namahakakses,base64jsonha){
    $('#namahakakses').val(namahakakses)
    $('#aihakakses').val(ai)
    var menuakses = JSON.parse(atob(base64jsonha));
    menuakses.menuakses.forEach(function(menu) {
        if (menu.status === "1") { document.getElementById(menu.menuke).checked = true;}
    });
    toastr["info"]("NAMA : "+namahakakses+" terpilih untuk diubah. Silahkan cek pada TAB Hak Akses untuk melakukan perubahan FITUR HAK AKSES");
}
</script>
<?= $this->endSection(); ?>