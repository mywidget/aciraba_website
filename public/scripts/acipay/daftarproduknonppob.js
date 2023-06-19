$(function () {
    statusbarang = 1;
    loaddatakategori();
});
function loaddatakategori(){
    acipaydatakategorinonppob =  $("#daftarprodukacipay").DataTable({
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
        columnDefs: [
            {className: "text-right",targets: [4,5,6,7]},
            {width: 45, targets: 0 },
            {"targets": [1,2,3,4,5,6,7], "createdCell": function (td, cellData, rowData, row, col) { $(td).css('padding-top', '15px') }}
        ],
        scrollCollapse: true,
        scrollY: "50vh",
        scrollX: true,
        bFilter: false,
        ajax: {
            "url": baseurljavascript + 'acipay/ajaxdaftarnonppobproduk',
            "method": 'POST',
            "data": function (d) {
                d.KATAKUNCI = $('#katakunciproduk').val();
                d.STOK = $('#stokproduk').val();
                d.JENIS = $('#jenisproduk').val();
                d.STATUS = statusbarang;
                d.KUNCIKATEGORI = $('#kuncikategori').val();
                d.KUNCIOPERATOR = $('#kuncioperator').val();
                d.DATAKE = 0;
                d.LIMIT = 500;
            },
        }
    });
}
$("#statusbarang").click(function () {
    if ($('input[name="rb_statusbarang"]:checked').val() == 1) {
        statusbarang = 0;
    } else {
        statusbarang = 1;
    }
    $('#daftarprodukacipay').DataTable().ajax.reload();
});
$("#prosescaricmb").click(function () {
    $('#daftarprodukacipay').DataTable().ajax.reload();
});
$('#katakunciproduk').on('input', debounce(function (e) {
    $('#daftarprodukacipay').DataTable().ajax.reload();
}, 500));
$("#jenisproduk").change(function () {
    $('#daftarprodukacipay').DataTable().ajax.reload();
});
$("#kuncikategori, #kuncioperator").on("input", function () { $('#daftarprodukacipay').DataTable().ajax.reload(); });

function sinkronperbarang(kodeprodukserver, command, namaproduk, operator, kategori){
    Swal.fire({
        title: "Ingin melakukan SINKRONISASI produk",
        text: "Apakah anda ingin melakukan sinkronisasi terhadap barang "+namaproduk+" dengan kode server "+kodeprodukserver+" ?",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oke.. Sinkron Sekarang!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'acipay/sinkronproduk',
                method: 'POST',
                dataType: 'json',
                data: {
                    JENISPRODUK: command,
                    KATPRODUK: kodeprodukserver,
                    PEMISAH: kodeprodukserver,
                    BATASJUMLAH: kodeprodukserver.length,
                    PRODUK_OPERATOR_ID: operator,
                    PRODUK_KATEGORI_ID: kategori,
                    JENISPRODUK: command,

                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        Swal.fire(
                            'Sinkronisasi '+namaproduk+" berhasil",
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
                    $('#daftarprodukacipay').DataTable().ajax.reload();
                }
            });

        }
    })
}