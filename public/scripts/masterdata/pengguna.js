let statusmember = 1,jsonStrMenuAkses, ha = [];
function getLocation(){
    $("#latlong").val("Mohon tunggu, sedang mencoba mendapatkan lokasi")
    navigator.geolocation.getCurrentPosition(function(data){
        $("#latlong").val(data.coords.latitude+","+data.coords.longitude)
        $("#buttonlatlong").hide();
    })
}
function loadidmember(){
getCsrfTokenCallback(function() {
    $.ajax({
        url: baseurljavascript + 'penjualan/notamenupenjualan',
        method: 'POST',
        dataType: 'json',
        data: {
            [csrfName]:csrfTokenGlobal,
            AWALANOTA : "MBM",
            OUTLET: session_outlet,
            KODEKUMPUTERLOKAL: localStorage.getItem("KODEKASA"),
            TANGGALSEKARANG: moment().format('YYYYMMDD'),
            KODEUNIKMEMBER: session_kodeunikmember,
        },
        success: function (response) {
            if (response.success == 'false') {
                $('#idpegawai').val("MBM"+session_outlet+session_kodeunikmember+moment().format('YYYYMMDD')+"#1");
            }else{
                $('#idpegawai').val(response.nomornota)
            }
            
        },
        error: function(xhr, status, error) {
            toastr["error"](xhr.responseJSON.message);
        }
    });
});
}
$("#bersihkan").on("click", function(){
    $("#kodeunikmember").val("")  ; $("#urlfoto").val("")  ; $("#namadepan").val("")  ; $("#namabelakang").val("")  ; $("#alamat").val("")  ; $("#notelp").val("")  ; $("#username").val("")  ; $("#password").val("")  ; $("#pintrx").val("")  ; $("#latlong").val("")  ; $("#keterangan").val("")  ; $("#emailaktif").val("");
    getCsrfTokenCallback(function() {
        loadidmember();
    }); 
});
$('#statuspegawai').on('change', function() {
    if ($(this).val() == "ADM"){
        $("#bungkushakakses").show();
    }else{
        $("#bungkushakakses").hide();
    }
    
}).change();
$("#simpanpenggunamerchant").on("click", function(){
    /*if ($("#idpegawai").val() == "" || $("#urlfoto").val() == "" || $("#namadepan").val() == "" || $("#namabelakang").val() == "" || $("#alamat").val() == "" || $("#notelp").val() == "" || $("#username").val() == "" || $("#password").val() == "" || $("#pintrx").val() == "" || $("#latlong").val() == "" || $("#keterangan").val() == "" || $("#emailaktif").val() == "" || $("#kodeunikmember").val() == "" || $("#statuspegawai").val() == ""){
        return Swal.fire({
            icon: 'error',
            html: 'Silahkan lengkapi semua formulir <br>yang disajikan secara <strong>AKURAT dan TEPAT</strong><br>karena dibutuhkan untuk verifikasi MERCHANT',
            toast: true,
            showConfirmButton: false,
            timer: 1500,
            position: 'top-end',
        });
    }*/
    jsonStrMenuAkses = '{"menuakses":[]}';
    let obj = JSON.parse(jsonStrMenuAkses);
    $('#hakakses [type="checkbox"]').each(function(i, chk) { 
        if (chk.checked == true) {
            obj['menuakses'].push({"menuke":chk.id,"status":"1"});
        }else{
            obj['menuakses'].push({"menuke":chk.id,"status":"0"});
        }
    });
    jsonStrMenuAkses = JSON.stringify(obj);
    console.log(jsonStrMenuAkses)
    return true;
    Swal.fire({
        title: "Simpam Informasi",
        text: "Apakah anda ingin menyimpan INFORMASI "+$("#namadepan").val()+" "+$("#namabelakang").val()+" dengan ID "+$("#idpegawai").val(),
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oke.. Kirim Informasi'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: baseurljavascript + 'masterdata/tambahmerchant',
                method: 'POST',
                dataType: 'json',
                data: {
                    PENGGUNA_ID : $('#idpegawai').val(),
                    NAMAPENGGUNA: $('#username').val(),
                    PASSWORD: $('#password').val(),
                    URLFOTO : $('#urlfoto').val(),
                    HAKAKSESID: "NEWBIE",
                    NAMA: $('#namadepan').val()+"::"+$('#namabelakang').val(),
                    ALAMAT : $('#alamat').val(),
                    NOTELP: $('#notelp').val(),
                    KODEUNIKMEMBER: $('#kodeunikmember').val(),
                    STATUSMEMBER : "PGW",
                    KETERANGAN: $('#keterangan').val(),
                    NAMAOUTLET: $('#namaoutlet').val(),
                    PASSWORDWEB: $('#password').val(),
                    TOTALDEPOSIT: "0",
                    JSONMENU : jsonStrMenuAkses,
                    OUTLET: "GDPST",
                    PIN: $('#pintrx').val(),
                    LATLONG: $('#latlong').val(),
                    NOMOR: $('#idpegawai').val().split('#')[1],
                    EMAILAKIIF: $('#emailaktif').val(),
                },
                success: function (response) {
                    if (response.status == "true"){
                        Swal.fire({
                            title: "Berhasil Horeee!!!",
                            html: response.msg,
                            icon: 'success',
                        });
                        loadidmember();
                    }else{
                        Swal.fire({
                            title: "Gagal... Uhhh",
                            html: response.msg,
                            icon: 'warning',
                        });
                    }
                }
            });
        }
    });
});
function loaddaftarpewagawai(){
    $("#daftarpegawai").html(loadingAnimation());
    let daftarpegawai = "";
    $.ajax({
        url:baseurljavascript+'auth/daftarpegawai',
        type:'POST',
        dataType:'json',
        data: {
            [csrfName]:csrfTokenGlobal,
        },
        success:function(response){
            if (response.jumlahdata > 0){
                daftarpegawai = "<section class=\"container\"><div class=\"row active-with-click\">";
                for (let i = 0; i < response.jumlahdata; i++) {
                if (response.data[i].STATUSAKTIF == 1) colorCSS = "Blue"
                if (response.data[i].STATUSAKTIF == 0) colorCSS = "Red"
                daftarpegawai +=
                    "<div class=\"col-md-4 col-sm-6 col-xs-12\">" +
                    "<article id=\"artikelid"+response.data[i].PENGGUNA_ID+"\" class=\"material-card "+colorCSS+"\">" +
                    "<h2><span>NAMA PENGGUNA : " + response.data[i].NAMA + "</span><strong><i class=\"fa fa-fw fa-star\"></i> STATUS JABATAN : " + response.data[i].HAKAKSESID + "</strong></h2>" +
                    "<div class=\"mc-content\">" +
                    "<div class=\"img-container\">" +
                    (response.data[i].URLFOTO == "" ? "<img class=\"img-responsive img-thumbnail\" src=\"https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg\">" : "<img class=\"img-responsive img-thumbnail\" src=\"" + response.data[i].URLFOTO + "\">") +
                    "</div>" +
                    "<div style=\"font-family: 'Irish Grover', cursive;\" class=\"mc-description\">" +
                    "<h4>NAMA : "+response.data[i].NAMA+"</h4>" +
                    "<h4>DARI TOKO : "+response.data[i].NAMAOUTLET+"</h4>" +
                    "<h4>NAMA PENGGUNA : "+response.data[i].NAMAPENGGUNA+"</h4>" +
                    "<h4>TENANT ID : "+response.data[i].KODEUNIKMEMBER+"</h4>" +
                    "<h4>KONTAK PERSON : "+response.data[i].ALAMAT+" ["+response.data[i].NOTELP+"]</h4>" +
                    "<h4>E-MAIL : "+response.data[i].EMAIL+"</h4>" +
                    "<h4>NO REKEING : "+response.data[i].NOREKENING+"</h4>" +
                    "<h4>KETERANGAN : "+response.data[i].KETERANGAN+"</h4>" +
                    "</div>" +
                    "</div>" +
                    "<a class=\"mc-btn-action\"><i class=\"fa fa-bars\" style=\"color:white\"></i></a>" +
                    "<div class=\"mc-footer\">" +
                    "<div class=\"btn-group btn-group-lg mb-2\">" +
                    "<button onclick=\"statuspengguna('0','"+response.data[i].PENGGUNA_ID+"','"+response.data[i].NAMA+"','"+response.data[i].NAMAOUTLET+"')\" class=\"btn btn-danger\"> Block </button>" +
                    "<button onclick=\"statuspengguna('1','"+response.data[i].PENGGUNA_ID+"','"+response.data[i].NAMA+"','"+response.data[i].NAMAOUTLET+"')\" class=\"btn btn-success\"> Aktifkan </button>" +
                    "<button class=\"btn btn-primary\"> Cek Hak Akses </button>" +
                    "<button onclick=\"ubahpassword('"+response.data[i].PENGGUNA_ID+"','"+response.data[i].NAMA+"','"+response.data[i].NAMAOUTLET+"')\" class=\"btn btn-secondary\"> Ubah Kata Sandi </button>" +
                    "</div>" +
                    "</div>" +
                    "</article>" +
                    "</div>";
                }
                daftarpegawai += "</div></div></section>";
            }
            $("#daftarpegawai").html(daftarpegawai)
        },
        error: function(xhr, status, error) {
            toastr["error"](xhr.responseJSON.message);
        }
    });
}
function statuspengguna(kondisiaksi, penggunaid, namapengguna, namaoutlet){
    let title,text,icon,txtbuttonconfirm,txtbuttoncancel;
    if (kondisiaksi == 0){
        title = "Non Aktif Pengguna"
        text = "Apakah anda yakin ingin menonaktifkan pengguna  "+namapengguna+" dengan ID Pengguna "+penggunaid+". Informasi mengenai TRANSAKSI ID ini masih ada dan tidak dihapus."
        icon="warning"
        txtbuttonconfirm = "Oke. Nontaktifkan"
        txtbuttoncancel = "Tidak Jadi"
    }else if (kondisiaksi == 1){
        title = "Aktifkan Pengguna"
        text = "Apakah anda yakin ingin mengaktifkan pengguna "+namapengguna+" dengan ID Pengguna "+penggunaid+". Jika sudah aktif jangan lupa tentukan HAK AKSES mengenai pengguna ini ya?"
        icon="question"
        txtbuttonconfirm = "Yosh.. Aktifkan"
        txtbuttoncancel = "Tidak Jadi"
    }
    Swal.fire({
        title:title,
        text:text,
        icon:icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText:txtbuttonconfirm,
        cancelButtonText:txtbuttoncancel
    }).then((result) => {
        if (result.isConfirmed) {
            getCsrfTokenCallback(function() {
                $.ajax({
                    url:baseurljavascript+'auth/statuspegawai',
                    type:'POST',
                    dataType:'json',
                    data: {
                        [csrfName]:csrfTokenGlobal,
                        IDPENGGUNA:penggunaid,
                        NAMAPENGGUNA:namapengguna,
                        NAMAOUTLET:namaoutlet,
                        STATUSPENGGUNA:kondisiaksi,
                    },
                    success:function(response){
                        if (kondisiaksi == 1) colorCSS = "Blue"
                        if (kondisiaksi == 0) colorCSS = "Red"
                        $("#artikelid"+penggunaid).removeClass()
                        $("#artikelid"+penggunaid).addClass("material-card "+colorCSS)
                        toastr[kondisiaksi == 1 ? "info" : "error"](response.msg);
                    },
                    error: function(xhr, status, error) {
                        toastr["error"](xhr.responseJSON.message);
                    }
                });
            });  
        }
    });
}
function ubahpassword(penggunaid, namapengguna, namaoutlet){
    $("#idpengguna").html(penggunaid)
    $("#spannamapengguna").html(namapengguna)
    $('#sandikamu').attr("placeholder", "Ketikan sandi kamu terlebih dahulu");
    $('#sandipegawai').attr("placeholder", "Ubah katasandi dari pegawai "+namapengguna);
    $('#ubahpassword').modal('show');
}
function ubahpasswordproses(){
    $('#prosessimpaninformasi').prop("disabled",true);
    $('#prosessimpaninformasi').html('<i class="fa fa-spin fa-spinner"></i> Proses Simpan');
    getCsrfTokenCallback(function() {
        $.ajax({
            url:baseurljavascript+'auth/ubahpasswordproses',
            type:'POST',
            dataType:'json',
            data: {
                [csrfName]:csrfTokenGlobal,
                IDPENGGUNABARU:$("#idpengguna").html(),
                PASSWORDKAMU:$('#sandikamu').val(),
                PASSWORDBARU:$('#sandipegawai').val(),
            },
            complete:function(){
                $('#prosessimpaninformasi').prop("disabled",false);
                $('#prosessimpaninformasi').html('Simpan Informasi');
            },
            success:function(response){
                if (response.success == 'false'){
                    return toastr["error"](response.msg);
                }
                $('#sandikamu').val(""),
                $('#sandipegawai').val(""),
                $('#ubahpassword').modal('hide');
                Swal.fire(
                    'Perubahan Katasandi!',
                    response.msg,
                    'success'
                )
            },
            error: function(xhr, status, error) {
                toastr["error"](xhr.responseJSON.message);
            }
        });
    });  
}