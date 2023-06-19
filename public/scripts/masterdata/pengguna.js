let statusmember = 1,jsonStrMenuAkses, ha = [];
$(function () {
    loadidmember();
    $("#hakakses").on('click', '.form-check-input', function() {
        let currentRow = $(this).closest("tr");
        if (ha.includes(currentRow.find(".cellhakseswhere").html()) === false) ha.push(currentRow.find(".cellhakseswhere").html());
    });
});
function getLocation(){
    $("#latlong").val("Mohon tunggu, sedang mencoba mendapatkan lokasi")
    navigator.geolocation.getCurrentPosition(function(data){
        $("#latlong").val(data.coords.latitude+","+data.coords.longitude)
        $("#buttonlatlong").hide();
    })
}
function loadidmember(){
    $.ajax({
        url: baseurljavascript + 'penjualan/notamenupenjualan',
        method: 'POST',
        dataType: 'json',
        data: {
            AWALANOTA : "MBM",
            OUTLET: session_outlet,
            KODEKUMPUTERLOKAL: localStorage.getItem("KODEKASA"),
            TANGGALSEKARANG: moment().format('YYYYMMDD'),
            KODEUNIKMEMBER: session_kodeunikmember,
        },
        success: function (response) {
            let obj = $.parseJSON(response);
            if (obj.status == "false"){
                Swal.fire(
                    'Pembuatan Nota Error!',
                    obj.msg,
                    'warning'
                ) 
            }
            $('#idpegawai').val(obj.nomornota);
        }
    });
}
$("#bersihkan").on("click", function(){
    $("#kodeunikmember").val("")  ; $("#urlfoto").val("")  ; $("#namadepan").val("")  ; $("#namabelakang").val("")  ; $("#alamat").val("")  ; $("#notelp").val("")  ; $("#username").val("")  ; $("#password").val("")  ; $("#pintrx").val("")  ; $("#latlong").val("")  ; $("#keterangan").val("")  ; $("#emailaktif").val("");
    loadidmember();
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
    return true;5
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
                    SESSIONKODEUNIKMEMBER: session_kodeunikmember,
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