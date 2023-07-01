<?= $this->extend('backend/main'); ?>
<?= $this->section('kontenutama'); ?>
<?= $this->include('backend/header') ?>
<link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">
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
                        <a class="mr-2" href="<?= base_url() ;?>acipay/produknonppoboperator"><button id="" class="btn btn-primary"> <i class="fas fa-truck-loading"></i> Kelola Operator</button></a>
                    </div>
                    <div class="portlet-body">
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="acipay_idkategori">ID Kategori</label>
                                <input type="text" class="form-control" id="acipay_idkategori" placeholder="TSEL">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="acipay_namakategori">Nama Kategori</label>
                                <input type="text" class="form-control" id="acipay_namakategori" placeholder="TELKOMSEL">
                            </div>
                        </div>
                        <!-- END Form Row -->
                        <!-- BEGIN Form Row -->
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="imgruel">Citra URL [rekomendasi : 128px x 128px] </label>
                                <input type="text" class="form-control" id="imgruel" placeholder="Masukan URL gambar untuk icon kategori ini">
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="statuskategori">Status Kategori</label>
                                <select id="statuskategori" class="selectpicker" data-live-search="true">
                                    <option value="1">Aktif</option>
                                    <option value="0">Tidak Akif</option>
                                </select>
                            </div>
                            <div class="col-md-3 mb-3">
                                <label for="formattrx">Format Transaksi</label>
                                <select id="formattrx" class="selectpicker" data-live-search="true">
                                    <option>REGULER</option>
                                    <option>GAME/VOUCHER GAME</option>
                                    <option>TOKEN</option>
                                    <option>PPOB</option>
                                </select>
                            </div>
                        </div>
                        <!-- END Form Row -->
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label for="placeholderketerangan">Keterangan Placeholder</label>
                                <input type="text" class="form-control" id="placeholderketerangan" placeholder="Pesan untuk pelanggan anda">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="kuncioperator">Pilih ID Operator</label>
                                <select class="form-control" id="kuncioperator">
                                    <?php if (isset($PRODUK_OPERATOR_ID)){ echo "<option value=\"".$PRODUK_OPERATOR_ID."\">[".$PRODUK_OPERATOR_ID."] ".$OPERATOR_NAMA."</option>"; }?>
                                </select>
                            </div>
                        </div>
                        <label for="keterangan">Deskripsikan Kategori Ini</label>
                        <div id="textareaeditor">
                            <div id="keterangan" class="mb-3"></div>
                        </div>
                        <!-- BEGIN Form Group -->
                        <!-- END Form Group -->
                        <button id="tambahkategori" class="btn btn-primary">Tambah Informasi</button>
                        <input hidden type="checkbox" id="isedit">
                        <hr>
                        <!-- BEGIN Datatable -->
                        <table id="acipaydatakategorinonppob" class="table table-bordered table-striped table-hover nowrap">
                            <thead>
                                <tr>
                                    <th>Aksi</th>
                                    <th>ID Kategori</th>
                                    <th>Nama Kategori</th>
                                    <th>Format Transaksi</th>
                                    <th>Status Kategori</th>
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
<!-- BEGIN Modal -->
<div class="modal fade" id="modalsinkronproduk">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Sinkronasi <span id="kategorinama"></span> [<span id="kategoriidsinkron"></span>]</h5>
                <button type="button" class="btn btn-label-danger btn-icon" data-dismiss="modal">
                    <i class="fa fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="mb-1">Tentukan kode produk di pada server tujuan dan ambil kata mulai dari 0 - n. CONTOH : KODEPRODUK SERVER <strong>TSELD100</strong>, <strong>TSELD200</strong>, dsb maka masukkan 0 - 5, Maka sistem akan mengambil PRODUK yang mengandung kata <strong>TSELD</strong></p>
                <input id="pemisakproduk" placeholder="Kunci awalan produk [TSELD]" type="text" class="form-control" value="">
                <label for="jenisproduk">Jenis Produk Yang Diambil</label>
                <select id="jenisproduk" class="selectpicker" data-live-search="true">
                    <option value="prepaid">Prepaid</option>
                    <option value="pasca">Pascabayar</option>
                </select>
                <label for="formattrx">Pilih Server Dealer</label>
                <select id="formattrx" class="selectpicker" data-live-search="true">
                    <option value="1">Digiflazz</option>
                </select>
                <label for="formattrx">Tentukan Operator</label>
                <div class="input-group">
                    <input type="text" id="operatorproduk" class="form-control"
                        placeholder="Operator belum ditentukan">
                    <div class="input-group-prepend">
                        <span id="operatorproduk" data-toggle="modal" data-target="#modal6" class="input-group-text btn-warning btn">Pilih Operator</span>
                    </div>
                </div>
                <label for="iconproduk">Tentukan Citra Ikon</label>
                <div class="input-group">
                    <input type="text" id="iconproduk" class="form-control"
                        placeholder="Masukan url untuk ikon produk [rekomendasi 128px x 128px]">
                </div>
            </div>
            <div class="modal-footer">
                <button id="sinkron" onclick='sinkronbarang("KONFIRMASI","","")' class="btn btn-primary mr-2">Oke, Sinkronkan Sekarang</button>
            </div>
        </div>
    </div>
</div>
<!-- END Modal -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.quilljs.com/1.0.0/quill.js"></script>
<script type="text/javascript" src="<?= base_url();?>scripts/acipay/kategorinonppob.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $('#kuncioperator').select2({
            minimumInputLength: 2,
            allowClear: true,
            placeholder: 'Tentukan operator produk',
            ajax: {
                url: baseurljavascript + 'acipay/ajaxdaftaroperatoracipayselect2',
                method: 'POST',
                dataType: 'json',
                delay: 500,
                data: function (params) {
                    return {
                        KATAKUNCI: (typeof params.term === "undefined" ? "" : params.term),
                    }
                },
                processResults: function (data) {
                    parseJSON = JSON.parse(data);
                    return {
                        results: $.map(parseJSON, function (item) {
                            return {
                                text: "[" + item.idkategori + "] " + item.namakategori,
                                id: item.idkategori,
                            }
                        })
                    }
                }
            },
        });
    });
</script>
<?= $this->include('backend/panggiloperatoracipay') ?>
<?= $this->endSection(); ?>