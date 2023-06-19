$(function () {
    loadtabelutama();
});
function loadtabelutama() {
    $("#tabeldaftarsales").DataTable({
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
            "url": baseurljavascript + 'masterdata/ajaxdaftarales',
            "method": 'POST',
            "data": function (d) {
                d.KATAKUNCIPENCARIAN = $('#kodesales').val() == null ? "" : $('#kodesales').val();
                d.KODEUNIKMEMBER = session_kodeunikmember;
                d.DATAKE = 0;
                d.LIMIT = 500;
            },
        }
    });
}
$("#simpansales").click(function() {
    if ($("#kodesales").val() == "" || $("#namasales").val() == "" || $("#provinsi").val() == "" || $("#kotasales").val() == "" || $("#alamatsales").val() == "" || $("#notelpsales").val() == ""){
        return Swal.fire({
            icon: 'warning',
            html: 'Silahkan lengkapi informasi KODE SALES, NAMA, <br>LOKASI, serta NO TELP dari sales anda',
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            position: 'bottom-end',
        })
    }
    Swal.fire({
        title: "Apakah anda yakin?",
        text: $('#isinsert').is(":checked") == false ? 'Apakah anda ingin mengubah data SALES : '+$("#namasales").val() : "Apakah anda ingin menambahkan SALES : "+$("#namasales").val()+" dengan KODE "+$("#kodesales").val(),
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: $('#isinsert').is(":checked") == false ? 'Oke, Ubah Data' : 'Oke, Tambahkan!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'masterdata/jsontambahsales',
                method: 'POST',
                dataType: 'json',
                data: {
                    KODESALES : $("#kodesales").val(),
                    NAMA : $("#namasales").val(),
                    ALAMAT: $("#alamatsales").val(),
                    KOTA: $("#kotasales").val(),
                    PROVINSI : $("#provinsi").val(),
                    TELEPON: $("#notelpsales").val(),
                    EMAIL: $("#emailsales").val(),
                    BANK: $("#banksales").val(),
                    NOREK: $("#norekening").val(),
                    KODEUNIKMEMBER: session_kodeunikmember,
                    ISINSERT : $('#isinsert').is(":checked"),
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        Swal.fire(
                            'Berhasil.. Horee!',
                            obj.msg,
                            'success'
                        )
                        if ($('#isinsert').is(":checked") == true){
                            $("#kodesales").val("");
                            $("#namasales").val("");
                            $("#alamatsales").val("");
                            $("#kotasales").val("");
                            $("#provinsi").val("");
                            $("#notelpsales").val("");
                            $("#emailsales").val("");
                            $("#banksales").val("");
                            $("#norekening").val("");
                        }
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
});
function onclickhapussales(kodesales,namasales,){
    Swal.fire({
        title: 'Hapus Sales Kode : '+kodesales,
        text: "Akan yakin menghapus Sales "+namasales+" ini, Hal ini mengakibatkan hilangnya informasi laporan usaha anda yang berkaitan dengan sales ini.",
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oke, Saya Yakin Kok!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'masterdata/jsonhapusdaftarssales',
                method: 'POST',
                dataType: 'json',
                data: {
                    KODESALES: kodesales,
                    NAMASALES: namasales,
                    KODEUNIKMEMBER: session_kodeunikmember,
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        $('#tabeldaftarsales').DataTable().ajax.reload();
                        Swal.fire(
                            'Yess.. Nama Sales : '+namasales+' telah berhasil terhapus',
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