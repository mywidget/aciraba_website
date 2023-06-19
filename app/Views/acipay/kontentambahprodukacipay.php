<?= $this->extend('backend/main'); ?>
<?= $this->section('kontenutama'); ?>
<?= $this->include('backend/header') ?>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="portlet">
                    <div class="portlet-header portlet-header-bordered">
                        <h5>Informasi Detail Produk</h5>
                    </div>
                    <div class="portlet-body">
                    <div class="form-row">
                            <div class="col-md-12 mb-1 col-sm-12">
                            <p align="justify">Berikut adalah informasi untuk mengelola produk acipay secara individu atau 1 produk. Jika ingin menambahkan produk secara cepat melalui jalur API yang tersedia, silahkan sinkronkan melalui kategori produk <a style="pointer:cursor" href="<?= base_url();?>/acipay/produknonppobkategori">disini</a>. Silahkan kelola produk ini secara hati hati dan jangan lupa selalu bersyukur</p>
                            </div>
                        </div>
                        <!-- BEGIN Form Row -->
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <label for="kodeproduk">Buat Kode Produk [Prefix : ACIPAY]</label>
                                <input id="kodeproduk" type="text" class="form-control" placeholder="Contoh : TSELP100" value="<?= isset($PRODUK_ID_SERVER) ? $PRODUK_ID_SERVER : "" ;?>">
                                <label for="kuncikategori">Pilih ID Kategori</label>
                                <select class="form-control" id="kuncikategori">
                                <?php if (isset($PRODUK_KATEGORI_ID)){ echo "<option value=\"".$PRODUK_KATEGORI_ID."\">[".$PRODUK_KATEGORI_ID."] ".$KATEGORI_NAMA."</option>"; }?>
                                </select>
                                <label for="namaproduk">Nama Produk</label>
                                <input id="namaproduk" type="text" class="form-control" placeholder="Contoh : TELKOMSEL 100K" value="<?= isset($NAMAPRODUK) ? $NAMAPRODUK : "" ;?>">
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <label for="pilihserver">Pilih Server Dealer</label>
                                <select id="pilihserver" class="selectpicker" data-live-search="true">
                                    <option value="1">Digiflazz</option>
                                </select>
                                <label for="kuncioperator">Pilih ID Operator</label>
                                <select class="form-control" id="kuncioperator">
                                    <?php if (isset($PRODUK_OPERATOR_ID)){ echo "<option value=\"".$PRODUK_OPERATOR_ID."\">[".$PRODUK_OPERATOR_ID."] ".$OPERATOR_NAMA."</option>"; }?>
                                </select>
                                <label for="keterangan">Keterangan</label>
                                <input id="keterangan" type="text" class="form-control" placeholder="Isikan keterangan dari produk ini" value="<?= isset($KETERANGAN) ? $KETERANGAN : "" ;?>">
                            </div>
                        </div>
                        <div class="form-row">
                        <div class="col-md-4 col-sm-12">
                            <label for="statusproduk">Status Produk</label>
                            <select id="statusproduk" class="selectpicker" data-live-search="true">
                                <option value="1">Normal</option>
                                <option value="0">Produk Gangguan</option>
                            </select>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <label for="poin">Point / Trx</label>
                            <input id="poin" type="text" class="form-control" value="<?= isset($POIN) ? $POIN : "" ;?>">
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <label for="imgurl">IMG URL [Rekomendasi 128px x 128px]</label>
                            <input id="imgurl" type="text" class="form-control" placeholder="Masukan URL citra untuk icon" value="<?= isset($IMGURL) ? $IMGURL : "" ;?>">
                        </div>
                        </div>
                        <div class="form-row">
                        <div class="col-md-4 col-sm-12">
                            <label for="jenisproduk">Jenis Produk</label>
                            <select id="jenisproduk" class="selectpicker" data-live-search="true">
                                <option value="prepaid">Prabayar</option>
                                <option value="pasca">Pascabayar</option>
                            </select>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <label for="multi">Jenis Transkasi</label>
                            <select id="multi" class="selectpicker" data-live-search="true">
                                <option value="1">Transkasi Ganda</option>
                                <option value="0">Transaksi 1x 1hari</option>
                            </select>
                        </div>
                        <div class="col-md-4 col-sm-12">
                            <label for="tampil">Tampilkan Produk</label>
                            <select id="tampil" class="selectpicker" data-live-search="true">
                                <option value="1">Tampilkan</option>
                                <option value="0">Sembunyikan</option>
                            </select>
                        </div>
                        </div>
                        <div class="form-row">
                            <div class="col-md-4 col-sm-12">
                                <label for="hss">Harga Server</label>
                                <input id="hss" type="text" class="form-control" readonly value="0">
                                <strong   strong>NB : </strong>Harga server akan berubah secara otomatis jika transaksi sukses.
                            </div>
                            <div class="col-md-2 col-sm-12">
                                <label for="ho">Mark Up</label>
                                <input id="ho" type="text" class="form-control" placeholder="0" value="<?= isset($MARKUP) ? $MARKUP : "" ;?>">
                            </div>
                            <div class="col-md-2 col-sm-12">
                                <label for="hu">Harga Umum</label>
                                <input id="hu" type="text" class="form-control" placeholder="0" value="<?= isset($HARGA_UMUM) ? $HARGA_UMUM : "" ;?>">
                            </div>
                            <div class="col-md-2 col-sm-12">
                                <label for="ha">Harga Agen</label>
                                <input id="ha" type="text" class="form-control" placeholder="0" value="<?= isset($HARGA_AGEN) ? $HARGA_AGEN : "" ;?>">
                            </div>
                            <div class="col-md-2 col-sm-12">
                                <label for="hs">Harga Spesial</label>
                                <input id="hs" type="text" class="form-control" placeholder="0" value="<?= isset($HARGA_MEGAAGEN) ? $HARGA_MEGAAGEN : "" ;?>">
                            </div>
                        </div>
                        <hr>
                        <button id="simpanprodukacipay" class="btn btn-primary"><i class="fas fa-save"></i> Simpan Informasi</button>
                        <input style="visibility: hidden;" type="checkbox" id="isedit">
                    </div>
                </div>
                <!-- END Portlet -->
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"></script>
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script type="text/javascript" src="<?= base_url();?>/scripts/acipay/tambahprodukacipay.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        if ("<?= $SEGMENT3 ;?>" != ""){
            $("#kodeproduk").prop('readonly', true);
            $('#simpanprodukacipay').html("<i class='fas fa-save'></i> Ubah Informasi");
            $("#isedit").prop('checked', true);
            $('#pilihserver').val("<?= isset($APISERVER_ID) ? $APISERVER_ID : "1" ;?>").change();
            $('#tampil').val("<?= isset($TAMPIL) ? $TAMPIL : "1" ;?>").change();
            $('#multi').val("<?= isset($MULTI) ? $MULTI : "1" ;?>").change();
            $('#jenisproduk').val("<?= isset($JENISPRODUK) ? $JENISPRODUK : "1" ;?>").change();
            $('#statusproduk').val("<?= isset($STATUS) ? $STATUS : "1" ;?>").change();
        }
        $('#kuncikategori').select2({
            minimumInputLength: 2,
            allowClear: true,
            placeholder: 'Tentukan kategori produk',
            ajax: {
                url: baseurljavascript + 'acipay/ajaxdaftarkategoriacipayselect2',
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
<?= $this->endSection(); ?>