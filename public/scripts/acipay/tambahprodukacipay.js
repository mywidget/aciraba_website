$("#simpanprodukacipay").click(function () {
    if ($("#kodeproduk").val() == "" || $("#kuncikategori").val() == "" || $("#namaproduk").val() == "" || $("#kuncioperator").val() == "" || $("#keterangan").val() == ""){
        return Swal.fire({
            position: 'bottom-end',
            icon: 'warning',
            title: 'Pastikan KODE DAN NAMAPRODUK, KATEGORI, OPERATOR, serta KETERANGAN<br>harus sudah diisi untuk disimpan, karena diwajibkan oleh sistem',
            showConfirmButton: false,
            toast:true,
            timer: 1500
        });
    }
    Swal.fire({
        title: 'Apakah anda yakin?',
        text: $('#isedit').is(":checked") == true ? 'Apakah anda ingin mengubah data '+$("#namaproduk").val()+". Pastikan anda merubah ketika DENOM "+$("#namaproduk").val()+" tidak padat transkasi" : 'Informasi barang '+$("#namaproduk").val()+' akan ditambahkan ? Pastikan kode produk produk anda sama dengan kode produk pada delear atau suplier anda, jika tidak maka transkasi tidak dapat diteruskan ke provider',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: $('#isedit').is(":checked") == true ? 'Oke, Ubah Data' : 'Oke, Tambah Produk!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'acipay/ajaxtambahacipayproduk',
                method: 'POST',
                dataType: 'json',
                data: {
                    'ISEDIT' : $('#isedit').is(":checked"),
                    'PRODUK_ID' : "ACIPAY"+$('#kodeproduk').val(),
                    'PRODUK_ID_SERVER' : $('#kodeproduk').val(),
                    'APISERVER_ID' : $('#pilihserver').val(),
                    'PRODUK_OPERATOR_ID' : $('#kuncioperator').val(),
                    'PRODUK_KATEGORI_ID' : $('#kuncikategori').val(),
                    'NAMA_PRODUK' : $('#namaproduk').val(),
                    'KETERANGAN' : $('#keterangan').val(),
                    'HARGA_SERVER' : $('#hss').val(),
                    'MARKUP' : $('#ho').val(),
                    'HARGA_UMUM' : $('#hu').val(),
                    'HARGA_AGEN' : $('#ha').val(),
                    'HARGA_MEGAAGEN' : $('#hs').val(),
                    'HARGA_LAINLAIN' : "0",
                    'STATUS' : $('#statusproduk').val(),
                    'POIN' : $('#poin').val(),
                    'IMGURL' : $('#imgurl').val(),
                    'JAM_MULAI' : "23:59",
                    'JAM_TUTUP' : "00:05",
                    'MULTI' : $('#multi').val(),
                    'STOK' : "0",
                    'URUTAN' : "0",
                    'JENISPRODUK' : $('#jenisproduk').val(),
                    'TAMPIL' : $('#tampil').val(),
                    'UNLIMITEDSTOK' : "1",
                },
                success: function (response) {
                    var obj = $.parseJSON(response);
                    if (obj.status == "true"){
                        Swal.fire(
                            'Berhasil.. Horee!',
                            obj.msg,
                            'success'
                        )
                        $('#kodeproduk').val("");
                        $('#pilihserver').val("1").change();
                        $('#kuncioperator').val(null).trigger("change");
                        $('#kuncikategori').val(null).trigger("change");
                        $('#namaproduk').val("");
                        $('#keterangan').val("");
                        $('#hss').val("0");
                        $('#ho').val("");
                        $('#hu').val("");
                        $('#ha').val("");
                        $('#hs').val("");
                        $('#statusproduk').val("1").change();
                        $('#poin').val("1");
                        $('#imgurl').val("");
                        $('#multi').val("1").change();
                        $('#jenisproduk').val("prepaid").change();
                        $('#tampil').val("1").change();
                        $("#kodeproduk").prop('readonly', false);
                        $('#simpanprodukacipay').html("<i class='fas fa-save'></i> Tambah Informasi");
                        $("#isedit").prop('checked', false);
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
    })
});