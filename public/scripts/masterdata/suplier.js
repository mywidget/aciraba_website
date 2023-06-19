$(function () {
    loadtabelutama();
});
function loadtabelutama() {
    $("#tabelmastersuplier").DataTable({
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
        scrollY: "50vh",
        scrollX: true,
        bFilter: false,
        ajax: {
            "url": baseurljavascript + 'masterdata/ajaxdaftarsuplier',
            "method": 'POST',
            "data": function (d) {
                d.KATAKUNCIPENCARIAN = $('#kodesuplier').val() == null ? "" : $('#kodesuplier').val();
                d.KODEUNIKMEMBER = session_kodeunikmember;
                d.DATAKE = 0;
                d.LIMIT = 500;
            },
        }
    });
}
$('#kodesuplier').on('input', debounce(function (e) {
    $('#tabelmastersuplier').DataTable().ajax.reload();
}, 500));
$("#simpansuplier").click(function() {
    if ($("#kodesuplier").val() == "" || $("#namasuplier").val() == "" || $("#provinsi").val() == "" || $("#kotasuplier").val() == "" || $("#alamatsuplier").val() == "" || $("#notelpsuplier").val() == ""){
        return Swal.fire({
            icon: 'warning',
            html: 'Silahkan lengkapi informasi KODE SUPLIER, NAMA, <br>LOKASI, serta NO TELP dari suplier anda',
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            position: 'bottom-end',
        })
    }
    Swal.fire({
        title: "Apakah anda yakin?",
        text: $('#isinsert').is(":checked") == false ? 'Apakah anda ingin mengubah data SUPLIER : '+$("#namasuplier").val() : "Apakah anda ingin menambahkan SUPLIER : "+$("#namasuplier").val()+" dengan KODE "+$("#kodesuplier").val(),
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: $('#isinsert').is(":checked") == false ? 'Oke, Ubah Data' : 'Oke, Tambahkan!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'masterdata/jsontambahsuplier',
                method: 'POST',
                dataType: 'json',
                data: {
                    SUPPLIER_AI : '',
                    KODESUPPLIER : $("#kodesuplier").val(),
                    NAMASUPPLIER: $("#namasuplier").val(),
                    NEGARA: $("#negerasuplier").val(),
                    PROVINSI: $("#provinsisuplier").val(),
                    KOTAKAB : $("#kotasuplier").val(),
                    KECAMATAN : $("#kecamatansuplier").val(),
                    ALAMAT: $("#alamatsuplier").val(),
                    NOTELP: $("#notelpsuplier").val(),
                    NAMABANK: $("#namabanksuplier").val(),
                    NOREK: $("#nomorrekening").val(),
                    ATASNAMA: $("#atasnamarek").val(),
                    EMAIL: $("#emailsuplier").val(),
                    KODEUNIKMEMBER: session_kodeunikmember,
                    ISINSERT : $('#isinsert').is(":checked"),
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        Swal.fire('Berhasil.. Horee!',obj.msg,'success')
                        if ($('#isinsert').is(":checked") == true){
                            $("#kodesuplier").val("");
                            $("#namasuplier").val("");
                            $("#provinsi").val("");
                            $("#kotasuplier").val("");
                            $("#kecamatansuplier").val("");
                            $("#alamatsuplier").val("");
                            $("#notelpsuplier").val("");
                            $("#namabanksuplier").val("");
                            $("#nomorrekening").val("");
                            $("#atasnamarek").val(""),
                            $("#emailsuplier").val("");
                        }
                    }else{
                        Swal.fire('Gagal.. Uhhhhh!',obj.msg,'warning')
                    }
                }
            });
        }
    });
});
function onclickhapussuplier(kodesuplier,namasuplier,){
    if (kodesuplier == "UNKWNSUP"){
        return Swal.fire({
            position: 'bottom-end',
            icon: 'warning',
            title: 'Suplier '+namasuplier+" ["+kodesuplier+"] tidak dapat dihapus.",
            showConfirmButton: false,
            toast:true,
            timer: 1500
        })
    }
    Swal.fire({
        title: 'Hapus Suplier Kode : '+kodesuplier,
        text: "Akan yakin menghapus suplier "+namasuplier+" ini, Hal ini mengakibatkan hilangnya informasi laporan usaha anda yang berkaitan dengan suplier ini.",
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oke, Saya Yakin Kok!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'masterdata/jsonhapusdaftarsuplier',
                method: 'POST',
                dataType: 'json',
                data: {
                    KODESUPLIER: kodesuplier,
                    NAMASUPLIER: namasuplier,
                    KODEUNIKMEMBER: session_kodeunikmember,
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        $('#tabelmastersuplier').DataTable().ajax.reload();
                        Swal.fire(
                            'Yess.. Suplier '+namasuplier+' telah berhasil terhapus',
                            obj.msg,
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Gagal.. Uhhhhh!',
                            obj.msg,
                            'warning'
                        )
                    }
                }
            });
        }
    });
}