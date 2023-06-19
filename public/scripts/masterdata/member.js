let statusmember = 1;
$(function () {
    loadtabelutama();
    $('#filterawalkartustok').val(moment().format('DD-MM-YYYY'));
    $("#filterawalkartustok").datepicker({todayHighlight: true,format:'dd-mm-yyyy',});
    $('#filteraakhirkartustok').val(moment().format('DD-MM-YYYY'));
    $("#filteraakhirkartustok").datepicker({todayHighlight: true,format:'dd-mm-yyyy',});
});
function loadtabelutama() {
    $("#tabelmember").DataTable({
        fixedColumns:{leftColumns: 2},
        columnDefs: [
            { className: "text-right",targets: [6, 7]},
        ],
        language:{"url":"https://cdn.datatables.net/plug-ins/1.10.25/i18n/Indonesian.json"},
        dom: 'Bfrtip',
        buttons: [
            {
                extend:    'copyHtml5',
                text:      '<i class="far fa-copy"></i> Copy',
                titleAttr: 'Copy'
            },
            {
                extend:    'excelHtml5',
                text:      '<i class="far fa-file-excel"></i> Excel',
                titleAttr: 'Excel'
            },
            {
                extend:    'csvHtml5',
                text:      '<i class="fas fa-file-csv"></i> CSV',
                titleAttr: 'CSV'
            },
            {
                extend:    'pdfHtml5',
                text:      '<i class="far fa-file-pdf"></i> PDF',
                titleAttr: 'PDF'
            }
        ],
        scrollCollapse: true,
        scrollY: "80vh",
        scrollX: true,
        bFilter: false,
        ajax: {
            "url": baseurljavascript + 'masterdata/ajaxdaftarmember',
            "method": 'POST',
            "data": function (d) {
                d.KATAKUNCIPENCARIAN = $('#kodemember').val() == null ? "" : $('#kodemember').val();
                d.KONDISIQUERY = '1';
                d.DIMANA1 = "ASCKODEMEMBER";
                d.MEMBERGROUP = $('#membergroup').val();
                d.RANGEAWAL = $('#filterawalkartustok').val();
                d.RANGEAKHIR = $('#filteraakhirkartustok').val();
                d.STATUSMEMBER = statusmember;
                d.ISFILTERDATE = $('#filterberdasarkantanggal').is(":checked");
                d.KODEUNIKMEMBER = session_kodeunikmember;
                d.DATAKE = 0;
                d.LIMIT = 500;
            },
        }
    });
}
function onclickdisablemember(kodemember, namamember,kondisiitem){
    Swal.fire({
        title: kondisiitem == "0" ? "Aktifkan Member" : "Tidak Aktif Member",
        text: kondisiitem == "0" ? "Apakah anda ingin mengaktifkan "+namamember+" ["+kodemember+"] ini kembali" : "Apakah anda ingin mengubah "+namamember+" ["+kodemember+"] ini menjadi tidak aktif, hal ini menjadikan member ini tidak dapat dicari tetapi dapat muncul di laporan",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: kondisiitem == "0" ? "Aktifkan member sekarang" : "Oke, Jadikan tidak aktif"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'masterdata/statusmember',
                method: 'POST',
                dataType: 'json',
                data: {
                    KONDISI : kondisiitem,
                    KODEMEMBER: kodemember,
                    KODEUNIKMEMBER: session_kodeunikmember,
                    NAMAMEMBER: namamember,
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        $('#tabelmember').DataTable().ajax.reload();
                        Swal.fire(
                            'Berhasil.. Horee!',
                            obj.msg,
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Gagal.. Uhhhhh!',
                            obj.msg,
                            'success'
                        )
                    }
                }
            });
        }
    });
}
$("#simpanmember").on("click", function(){
    if ($("#namadepan").val() == "" || $("#namabelkang").val() == "" || $("#alamatmember").val() == "" || $("#kotamember").val() == "" || $("#alamatsales").val() == "" || $("#kodemember").val() == "" || $("#membergroup").val() == null){
        return Swal.fire({
            icon: 'warning',
            html: 'Silahkan lengkapi informasi NAMA DEPAN BELAKANG, ALAMAT, KOTA ,<br> ALAMAT , KODE MEMBER serta MEMBER GROUP dari member anda',
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            position: 'bottom-end',
        })
    }
    Swal.fire({
        title: "Simpam Informasi Member",
        text: $('#isinsert').is(":checked") == false ? 'Apakah anda ingin mengubah data NAMA '+$("#namadepan").val() : "Apakah anda ingin menambahkan NAMA : "+$("#namadepan").val() +" "+ $("#namabelkang").val() +" dengan KODE ["+$("#kodemember").val()+"] ?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: $('#isinsert').is(":checked") == false ? 'Oke, Ubah Data' : 'Oke, Tambah Info Member!'
    }).then((result) => {
        if (result.isConfirmed) {
            if ($('input[name="rb_statusmember"]:checked').val() == 1) {
                statusmember = 1;
            } else {
                statusmember = 0;
            }
            $.ajax({
                url: baseurljavascript + 'masterdata/jsontambahmember',
                method: 'POST',
                dataType: 'json',
                data: {
                    MEMBER_ID : $('#kodemember').val(),
                    NAMA: $('#namadepan').val()+"::"+$('#namabelkang').val(),
                    ALAMAT: $('#alamatmember').val(),
                    KECAMATAN: $('#kecamatan').val(),
                    KOTA: $('#kotamember').val(),
                    PROVINSI: $('#provinsi').val(),
                    NEGARA: $('#negaramember').val(),
                    KODEPOS: $('#kodepos').val(),
                    JK:  $('#jeniskelamin').val(),
                    EMAIL:  $('#emailmember').val(),
                    TELEPON:  $('#notelpmember').val(),
                    FAX: "",
                    AKHIRAKTIF: statusmember == 1 ? "00-00-0000" :  $('#akhiraktifmember').val(),
                    STATUSAKTIF : statusmember,
                    POINT: "0",
                    NOREK: "",
                    PEMILIKREK: "",
                    BANK: "",
                    NPWP: "",
                    KETERANGAN: $('#keteranganmember').val(),
                    LIMITJUMLAHPIUTANG: $('#limitmember').val().replace(".", ""),
                    JENIS: $('#jenismember').val(),
                    GRUP: $('#membergroup').val(),
                    MINIMALPOIN: $('#minbelanjaperpoint').val().replace(".", ""),
                    BATASTAMBAHKREDIT: $('#jatuhtempomember').val(),
                    KEJARTARGET : "0",
                    NAMAFILE : "",
                    USERNAME: $('#usernameid').val(),
                    PASSWORD: $('#passwordakses').val(),
                    CATATAN: "",
                    LIMITBARANGONLINE: "",
                    LOGO: "",
                    LIMIT_BRG: $('#limitbarangmember').val(),
                    NISBACKUP: "",
                    KODEUNIKMEMBER: session_kodeunikmember,
                    OUTLET: session_outlet,
                    NOMOR: statusmember == 1 ? "1" : "0",
                    TOTALDEPOSIT: "0",
                    ISRESELLER: "0",
                    ANGKAKESUKAAN: Math.floor((Math.random() * 10) + 1),
                    ISINSERT : $('#isinsert').is(":checked"),
                    PINTRX : $('#pintrx').val(),
                    APIKEY : $('#apikey').val(),
                    MARKUP : $('#markuphargaagen').val(),
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        Swal.fire({
                            title: "Berhasil Horeee!!!",
                            target: '#modalPecahsatuan',
                            text: obj.msg,
                            icon: 'success',
                        });
                        /*$('#kodemember').val("");
                        $('#namadepan').val("");
                        $('#namabelkang').val("");
                        $('#alamatmember').val("");
                        $('#kotamember').val("");
                        $('#kodepos').val("");
                        $('#notelpmember').val("");
                        $('#emailmember').val("");
                        $('#keteranganmember').val("");*/
                    }else{
                        Swal.fire({
                            title: "Gagal... Uhhh",
                            text: obj.msg,
                            icon: 'warning',
                        });
                    }
                }
            });
        }
    });
});
$("#prosesmember").on("click", function(){
    if ($('input[name="rb_statusmember"]:checked').val() == 1) {
        statusmember = 1;
    } else {
        statusmember = 0;
    }
    $('#tabelmember').DataTable().ajax.reload();
});
