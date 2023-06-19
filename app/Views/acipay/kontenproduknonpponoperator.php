<?= $this->extend('backend/main'); ?>
<?= $this->section('kontenutama'); ?>
<?= $this->include('backend/header') ?>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="portlet">
                    <div class="portlet-header portlet-header-bordered">
                        <div class="form-row col">
                            <input type="text" class="form-control" id="katakunci" placeholder="Masukan kata kunci yang anda inginkan">
                        </div>
                        <a class="ml-2 mr-2" href="<?= base_url() ;?>acipay/produknonppob"><button id="" class="btn btn-primary"> <i class="fas fa-truck-loading"></i> Kelola Produk</button></a>
                        <a class="mr-2" href="<?= base_url() ;?>acipay/produknonppobkategori"><button id="" class="btn btn-primary"> <i class="fas fa-truck-loading"></i> Kelola Kategori</button></a>
                    </div>
                    <div class="portlet-body">
                        <div class="form-row">
                            <div class="col-md-4 mb-2">
                                <label for="acipay_idkategori">ID Operator</label>
                                <input type="text" class="form-control" id="acipay_idkategori" placeholder="TSEL">
                            </div>
                            <div class="col-md-4 mb-2">
                                <label for="acipay_namakategori">Nama Operator</label>
                                <input type="text" class="form-control" id="acipay_namakategori" placeholder="TELKOMSEL">
                            </div>
                            <div class="col-md-4 mb-2">
                                <label for="statusoperator">Status Operator</label>
                                <select id="statusoperator" class="selectpicker" data-live-search="true">
                                    <option value="1">Aktif</option>
                                    <option value="0">Tidak Akif</option>
                                </select>
                            </div>
                        </div>
                        <!-- END Form Row -->
                        <!-- BEGIN Form Row -->
                        <div class="form-row">
                            <div class="col-md-12 mb-2">
                                <label for="urlgamabar">Citra URL [rekomendasi : 128px x 128px] </label>
                                <input type="text" class="form-control" id="urlgamabar" placeholder="Masukan URL gambar untuk icon kategori ini">
                            </div>
                            <div class="col-md-12 mb-2">
                                <label for="prefixoperator">Prefix Operator</label>
                                <select class="form-control" id="prefixoperator" multiple="multiple"></select>
                                <small class="form-text text-muted">Anda dapat melakukan copy + paste untuk mempercepat pemasukan data prefix dengan format [0825,0821,0823,0875]</small>
                            </div>
                        </div>
                        <!-- END Form Row -->
                        <!-- BEGIN Form Group -->
                        <!-- END Form Group -->
                        <button id="tambahoperator" class="btn btn-primary">Tambah Informasi</button>
                        <input style="visibility:hidden" type="checkbox" id="isedit">
                        <hr>
                        <!-- BEGIN Datatable -->
                        <table id="daftaroperator" class="table table-bordered table-striped table-hover nowrap">
                            <thead>
                                <tr>
                                    <th>Aksi</th>
                                    <th>ID Operator</th>
                                    <th>Nama Operator</th>
                                    <th>Prefix</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                        <!-- END Datatable -->
                    </div>
                </div>
                <!-- END Portlet -->
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="<?= base_url();?>/scripts/acipay/kategorinonppoboperator.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $("#prefixoperator").select2({tokenSeparators: [',', ', ', ' '],dropdownAutoWidth:true,placeholder:"Pisahkan dengan SPACE atau KOMA, ENTER jika selesai",tags:true});
    });
</script>
<?= $this->endSection(); ?>