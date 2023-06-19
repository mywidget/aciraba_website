$(function () {
    loaddaftaritem();
});
function loaddaftaritem() {
$("#masteritem_daftaritem").DataTable({
    language:{"url":"https://cdn.datatables.net/plug-ins/1.10.25/i18n/Indonesian.json"},
    columnDefs: [{
            className: "text-right",
            targets: [8, 9, 10, 11]
        },
        {
            className: "text-center",
            targets: [0, 1, 2, 3, 4, 5]
        },
    ],
    ajax: {
        "url": baseurljavascript + 'masterdata/jsontabeldaftaritem',
        "type": "POST",
        "data": function (d) {
            d.DIMANA2 = $("#daftaritem_katakunci").val();
            d.DIMANA3 = $("#daftaritem_parameterpencarian").val();
            d.DIMANA6 = session_outlet;
            d.DIMANA8 = statusbarang;
            d.DIMANA10 = session_kodeunikmember;
            d.DATAKE = 0;
            d.LIMIT = 500;
        }
    },
    scrollCollapse: true,
    scrollY: "50vh",
    scrollX: true,
    bFilter: false
});
}
/* algoritma dashboard master item */
function onclickrebuildstok(kodeitem,namaitem, kondisirebuild){
    Swal.fire({
        title: "Re-build stok",
        text: "Cek stok "+kodeitem+" ["+ namaitem +"] pada aplikasi",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oke, Cek Sekarang!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'masterdata/rebuildstok',
                method: 'POST',
                dataType: 'json',
                data: {
                    KONDISI : kondisirebuild,
                    KODEITEM: kodeitem,
                    OUTLET: session_outlet,
                    KODEUNIKMEMBER: session_kodeunikmember,
                    NAMAITEM: namaitem,
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        $('#masteritem_daftaritem').DataTable().ajax.reload();
                        Swal.fire(
                            'Berhasil.. Horee!',
                            'Informasi re-build stok '+kodeitem+' ['+namaitem+'] berhasil diperbarui.',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Gagal.. Uhhhhh!',
                            'Informasi gagal di re-build.',
                            'success'
                        )
                    }
                }
            });
        }
    });
}
function onclickdisableitem(kodeitem,namaitem,kondisiitem){
    Swal.fire({
        title: kondisiitem == "0" ? "Aktifkan Item" : "Tidak Aktif Item",
        text: kondisiitem == "0" ? "Apakah anda ingin mengaktifkan "+kodeitem+" ["+namaitem+"] ini kembali" : "Apakah anda ingin mengubah "+kodeitem+" ["+namaitem+"] ini menjadi tidak aktif, hal ini menjadikan item ini tidak dapat dicari tetapi dapat muncul di laporan",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: kondisiitem == "0" ? "Aktifkan item sekarang" : "Oke, Jadikan tidak aktif"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'masterdata/rebuildstok',
                method: 'POST',
                dataType: 'json',
                data: {
                    KONDISI : kondisiitem,
                    KODEITEM: kodeitem,
                    OUTLET: session_outlet,
                    KODEUNIKMEMBER: session_kodeunikmember,
                    NAMAITEM: namaitem,
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        $('#masteritem_daftaritem').DataTable().ajax.reload();
                        Swal.fire(
                            'Berhasil.. Horee!',
                            'Informasi re-build stok '+kodeitem+' ['+namaitem+'] berhasil diperbarui.',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Gagal.. Uhhhhh!',
                            'Informasi gagal di re-build.',
                            'success'
                        )
                    }
                }
            });
        }
    });
}
/* pecah satuan simpan */
$("#simpanpecahsatuan").on("click", function () {
    if ($('#kodebarangpecahsatuan').val() == "" || $('#potongstokpecahsatuan').val() == "" || $('#konversistokpecahsatuan').val() == "" || $('#hargajualbaru').val() == "" || $('#hppprodukbaru').val() == ""){
        return Swal.fire({
            position: 'bottom-end',
            target: '#modalPecahsatuan',
            icon: 'warning',
            title: 'Pastikan KODEITEM, POTONG & KONVERSI STOK, HARGA JUAL dan HPP sudah diisi',
            showConfirmButton: false,
            toast:true,
            timer: 1500
        })
    }
    Swal.fire({
        title: "Pecaha Satuan Barang "+$('#namabarang').val(),
        target: '#modalPecahsatuan',
        text: "Stok akan ditambahkan ke barang "+$('#namabarangpecahsatuan').val()+" dengan stok sebanyak "+$('#konversistokpecahsatuan').val()+"["+$('#pilihsatuansatuannya').val()+"]",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oke, Konversi Sekarang!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'masterdata/tambahpecahstokjax',
                method: 'POST',
                dataType: 'json',
                data: {
                    AI : '',
                    IDBARANGASAL: $('#kodebarang').val(),
                    IDBARANGBARU: $('#kodebarangpecahsatuan').val(),
                    ASALPECAH: $('#potongstokpecahsatuan').val(),
                    MENJADI: $('#konversistokpecahsatuan').val(),
                    HARGAJUAL: $('#hargajualbaru').val(),
                    HARGABELI: $('#hppprodukbaru').val(),
                    OUTLET: session_outlet,
                    KODEUNIKMEMBER: session_kodeunikmember,
                    KASIR: session_namapengguna,
                    NAMABARANGSEBELUM: $('#namabarang').val(),
                    NAMABARANGSESUDAH: $('#namabarangpecahsatuan').val(),
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
                        $('#kodebarangpecahsatuan').val("");
                        $('#namabarangpecahsatuan').val("");
                        $('#potongstokpecahsatuan').val("");
                        $('#konversistokpecahsatuan').val("");
                        $('#hargajualbaru').val("");
                        $('#hppprodukbaru').val("");
                    }else{
                        Swal.fire({
                            title: "Gagal... Uhhh",
                            target: '#modalPecahsatuan',
                            text: obj.msg,
                            icon: 'warning',
                        });
                    }
                }
            });
        }
    });        
});
$("#statusbarang").click(function () {
    if ($('input[name="rb_statusbarang"]:checked').val() == 1) {
        statusbarang = 0;
    } else {
        statusbarang = 1;
    }
    $('#masteritem_daftaritem').DataTable().ajax.reload();
});
$('#daftaritem_katakunci').on('input', debounce(function (e) {
    $('#masteritem_daftaritem').DataTable().ajax.reload();
}, 500));
$("#daftaritem_parameterpencarian").change(function () {
    $('#masteritem_daftaritem').DataTable().ajax.reload();
});
/* algoritma tambah item atau barang */ 
$("#btn_simpan_tambahitem").click(function () {
    if ($("#namabarang").val() == "" || $("#kodebarang").val() == "" || $("#pilihsuplier").val() == null || $("#pilihkategori").val() == null || $("#pilihsatuan").val() == null || $("#pilihprincipal").val() == null  || $("#pilihbrand").val() == null){
        return Swal.fire({
            position: 'bottom-end',
            icon: 'warning',
            title: 'Pastikan NAMA BARANG, KODEBARANG, SUPLIER, KATEGORI, SATUAN, PRINCIPAL DAN BRANG harus sudah diisi untuk disimpan, karena diwajibkan oleh sistem',
            showConfirmButton: false,
            toast:true,
            timer: 1500
        });
    }
    Swal.fire({
        title: 'Apakah anda yakin?',
        text: $('#isinsert').is(":checked") == false ? 'Apakah anda ingin mengubah data '+$("#namabarang").val() : 'Informasi barang '+$("#namabarang").val()+' akan ditambahkan ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: $('#isinsert').is(":checked") == false ? 'Oke, Ubah Data' : 'Oke, Tambah Item!'
    }).then((result) => {
        $("#btn_simpan_tambahitem").html("<i class=\"fas fa-save\"></i> Sedang Proses");
        $("#btn_simpan_tambahitem").prop('disabled', true);
        if (result.isConfirmed) {
            if ($('input[name="rb_statusbarangtambahitem"]:checked').val() == 1) {
                statusbarang = 1;
            } else {
                statusbarang = 0;
            }
            let arrayqueryhargagrosir = [];
            let datahargagrosir = $('#tabelhargagrosir').DataTable().rows().data();
            datahargagrosir.each(function (isidatatable, index) {
                var temp = new Array();
                temp = isidatatable.toString().split(",");
                arrayqueryhargagrosir.push($("#kodebarang").val()+","+datahargagrosir.cell(index,1).nodes().to$().find('input').val()+","+datahargagrosir.cell(index,2).nodes().to$().find('input').val()+","+$("#hargapokokpembelian").val()+",PCS");
            });
            let arrayquerybarangtambahan = [];
            let databarangtambahan = $('#tabelbarangtambahan').DataTable().rows().data();
            databarangtambahan.each(function (isidatatable, index) {
                var temp = new Array();
                temp = isidatatable.toString().split(",");
                arrayquerybarangtambahan.push(databarangtambahan.cell(index,0).nodes().to$().find('input').val()+","+databarangtambahan.cell(index,1).nodes().to$().find('input').val());
            });
            $.ajax({
                url: baseurljavascript + 'masterdata/tambahitemajax',
                method: 'POST',
                dataType: 'json',
                data: {
                    ISINSERT : $('#isinsert').is(":checked"),
                    BARANG_ID : $("#kodebarang").val(),
                    QRCODE_ID : $("#kodebarangqrcode").val(),
                    NAMABARANG : $("#namabarang").val(),
                    BERAT_BARANG : $("#beratbarang").val(),
                    PARETO_ID : $("#pilihprincipal").val(),
                    SUPPLER_ID : $("#pilihsuplier").val(),
                    KATEGORI_ID : $("#pilihkategori").val(),
                    BRAND_ID : $("#pilihbrand").val(),
                    KETERANGANBARANG : quillHtml.root.innerHTML,
                    HARGABELI : $("#hargapokokpembelian").val(),
                    HARGAJUAL : $("#hargajualumum").val(),
                    SATUAN : $("#pilihsatuan").val(),
                    AKTIF: statusbarang,
                    KODEUNIKMEMBER: session_kodeunikmember,
                    APAKAHGROSIR : $('#aktifbaranggrosir').is(":checked"),
                    STOKDAPATMINUS : $('#stokdapatminus').is(":checked"),
                    JENISBARANG : $('#barangbukanstok').is(":checked") == true ? 1 : 0 ,
                    PEMILIK : $("#pilihperusahaan").val(),
                    /*untuk bestbuy harga gorsir*/
                    ISHARGAGROSIRAKTIF: $('#aktifbaranggrosir').is(":checked"),
                    JSONHARGAGROSIR: arrayqueryhargagrosir,
                    /*untuk bestbuy harga gorsir*/
                    ISBARANGTAMBAHAN: $('#aktifkanbarangtambahan').is(":checked"),
                    JSONBARANGTAMBAHAN: arrayquerybarangtambahan,
                },
                success: function (response) {
                    $("#btn_simpan_tambahitem").html("<i class=\"fas fa-save\"></i> Simpan");
                    $("#btn_simpan_tambahitem").prop('disabled', false);
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        swal.fire({
                            title: "Berhasil.. Horee!",
                            text: "Informasi berhasil disimpan di database. Apakah anda ingin mengubah data lagi",
                            icon:"success",
                            showCancelButton:true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: "Oke, Lanjut!",
                            cancelButtonText: "Kembali Ke Daftar!",
                        }).then(function(result){
                            if(result.isConfirmed){}else{
                                location.href = baseurljavascript+"/masterdata/daftaritem";
                            }
                        })
                    }else{
                        Swal.fire(
                            'Gagal Pembaruan Informasi!',
                            obj.msg,
                            'error'
                        )
                    }
                }
            });

        }
    })
});
$("#bulkinsert").click(function () {
    $('#modalbulkinsert').modal('show');
});
$("#simpanbulk").click(function () {
    let table = $('#bulkinsert_tabel').DataTable();let numRows = table.rows().count();
    if (numRows == 0 ){
        return Swal.fire({
            icon: 'error',
            html: 'Anda belum memilih apa apa loo untuk ditambahkan.<br>Yuk isikan formulir bulk dengan benar.',
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            position: 'top-right'
        })
     }
    Swal.fire({
        title: 'Konfirmasi Tambah Item Bersamaan',
        text: 'Apakah anda yakin dengan semua barang yang berada di keranjang bulk insert ini ? Jika terdapat kesalahan maka anda tinggal menonaktifkan pada daftar item yang tersedia',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Okey docky, Tambahkan',
        cancelButtonText: 'Hmmm.. Gak jadi!',
    }).then((result) => {
        if (result.isConfirmed) {
            let arraymasteritembulk = [];
            let datamasteritembulk = $('#bulkinsert_tabel').DataTable().rows().data();
            datamasteritembulk.each(function (isidatatable, index) {
                var temp = new Array();
                temp.push(
                    datamasteritembulk.cell(index,1).nodes().to$().find('input').val(),
                    datamasteritembulk.cell(index,2).nodes().to$().find('input').val(),
                    datamasteritembulk.cell(index,3).nodes().to$().find('input').val(),
                    datamasteritembulk.cell(index,4).nodes().to$().find('input').val(),
                    datamasteritembulk.cell(index,5).nodes().to$().find('input').val(),
                    datamasteritembulk.cell(index,7).nodes().to$().find('input').val(),
                    datamasteritembulk.cell(index,11).nodes().to$().find('input').val(),
                    datamasteritembulk.cell(index,9).nodes().to$().find('input').val(),
                    " ",
                    "0",
                    "0",
                    datamasteritembulk.cell(index,13).nodes().to$().find('input').val(),
                    "1",
                    session_kodeunikmember,
                    datamasteritembulk.cell(index,16).nodes().to$().find('input').val() == "true" ? "AKTIF" : "TIDAK AKTIF" ,
                    datamasteritembulk.cell(index,18).nodes().to$().find('input').val() == "true" ? "DAPAT MINUS" : "TIDAK DAPAT MINUS" ,
                    datamasteritembulk.cell(index,17).nodes().to$().find('input').val() == "true" ? "JASA" : "BUKAN JASA",
                    datamasteritembulk.cell(index,14).nodes().to$().find('input').val()
                );
                arraymasteritembulk.push(temp)
            });
            $.ajax({
                url: baseurljavascript + 'masterdata/tambahitemajaxbulk',
                method: 'POST',
                dataType: 'json',
                data: {
                    INFORMASIBARANG: arraymasteritembulk,
                    JUMLAHDATA:numRows,
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        $('#bulkinsert_tabel').dataTable().fnClearTable();
                        Swal.fire(
                            'Berhasil.. Horee!',
                            'Seluruh informasi item pada keranjang sudah ditambahkan pada database. Silahkan cek pada daftar item.',
                            'success'
                        )
                    }else{
                        Swal.fire(
                            'Gagal.. Uhhhhh!',
                            'Informasi berhasil disimpan di database.',
                            'success'
                        )
                    }
                }
            });
        }
    })
});