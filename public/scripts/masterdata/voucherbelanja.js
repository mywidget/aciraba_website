$(function () {
    loadvouchertabel();
});
function loadvouchertabel() {
    $(".tabelvoucherbelanja").DataTable({
        language:{"url":"https://cdn.datatables.net/plug-ins/1.10.25/i18n/Indonesian.json"},
        columnDefs: [{ className: "text-right",targets: [3, 4, 5, 6, 7, 8]},],
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
            "url": baseurljavascript + 'masterdata/jsontampilvoucherbelanja',
            "method": 'POST',
            "data": function (d) {
                d.KODEVOUCHER = $('#kodevoucherbelanja').val() == null ? "" : $('#kodevoucherbelanja').val();
                d.OUTLET = session_outlet;
                d.KODEUNIKMEMBER = session_kodeunikmember;
                d.DATAKE = 0;
                d.LIMIT = 500;
            },
        }
    });
}
$('#kodevoucherbelanja').on('input', debounce(function (e) {
    $('.tabelvoucherbelanja').DataTable().ajax.reload();
}, 500));
/* proses simpan diskon barang bertingkat */
$("#simpanvoucherbelanja").click(function() {
    if ($("#masukkankodekupon").val() == "" || $("#awalaktifvoucher").val() == "" || $("#akhiraktifvoucher").val() == "" || $("#nominalpotongan").val() == "" || $("#bataspakaikupon").val() == "" || $("#minimalpembelianvoucher").val() == ""){
        return Swal.fire({
            icon: 'warning',
            html: 'Silahkan lengkapi informasi KODE VOUCHER, RANGE AKTIF <br> MINIMAL BELI, BATAS PAKAI serta MINIMAL BELANJA pelanggan',
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            position: 'bottom-end',
        })
    }
    Swal.fire({
        title: "Tambah Voucher Belanja",
        text: "Apakah anda ingin menambahkan voucher belanja untuk pelanggan anda. Pelanggan anda pasti bahagia ?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oke, Tambahkan!'
    }).then((result) => {
        let nominaldiskon, nominalrupiah,jenisvoucher;
        if (result.isConfirmed) {
            if ($('input[name="jenisvoucherdiskon"]:checked').val() == 1) {
                nominaldiskon = 0;
                nominalrupiah = $("#nominalpotongan").autoNumeric('get').replaceAll('.', '').replaceAll(',', '.');
                jenisvoucher = 'NOMINAL';
            } else {
                nominaldiskon = $("#nominalpotongan").autoNumeric('get').replaceAll('.', '').replaceAll(',', '.');
                nominalrupiah = 0;
                jenisvoucher = 'PERSEN';
            }
            $.ajax({
                url: baseurljavascript + 'masterdata/jsontambahkuponbelanja',
                method: 'POST',
                dataType: 'json',
                data: {
                    VOUCHER_ID : '',
                    NAMAVOUCHER : $("#masukkankodekupon").val(),
                    AWALAKTIF: $("#awalaktifvoucher").val().split("-").reverse().join("-"),
                    AKHIRAKTIF: $("#akhiraktifvoucher").val().split("-").reverse().join("-"),
                    TIPEVOUCHER : jenisvoucher,
                    NOMINALRUPIAH: nominalrupiah,
                    NOMINALDISKON: nominaldiskon,
                    BATASTRANSAKSI: $("#bataspakaikupon").autoNumeric('get').replaceAll('.', '').replaceAll(',', '.'),
                    MINIMALPEMBELIAN: $("#minimalpembelianvoucher").autoNumeric('get').replaceAll('.', '').replaceAll(',', '.'),
                    KODEUNIKMEMBER: session_kodeunikmember,
                    OUTLET: session_outlet,
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        $('.tabelvoucherbelanja').DataTable().ajax.reload();
                        Swal.fire(
                            'Berhasil.. Horee!',
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
});
function onclickhapus(namavoucher,kodeunikmember){
    Swal.fire({
        title: "Hapus Voucher Belanja",
        text: "Anda akan menghapus kode voucher belanja : "+namavoucher+" pada aplikasi",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oke, Hapus Sekarang!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'masterdata/jsonhapuskuponbelanja',
                method: 'POST',
                dataType: 'json',
                data: {
                    NAMAVOUCHER : namavoucher,
                    OUTLET: session_outlet,
                    KODEUNIKMEMBER: session_kodeunikmember,
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        $('.tabelvoucherbelanja').DataTable().ajax.reload();
                        Swal.fire(
                            'Berhasil.. Horee!',
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