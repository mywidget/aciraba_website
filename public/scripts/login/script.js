$(document).ready(function () {
    if (localStorage.getItem("KODEKASA") == "" || localStorage.getItem("KODEKASA") == null){
        $('#kodekasa').val(randomstringdigit(4).toUpperCase());
    }else{
        $("#kodekasa").val(localStorage.getItem("KODEKASA"));
    }
});
$("#simpanpengaturan").click(function() {
    localStorage.setItem("KODEKASA", $("#kodekasa").val());
    return toastr["success"]("ID KASA sudah tersimpan di peranda [Browser] ini. Silahkan masuk sesuai namapengguna serta katasandi yang sudah tersedia");
});
function proseslogin(){
    if (localStorage.getItem("KODEKASA") == "" || localStorage.getItem("KODEKASA") == null){
        return toastr["info"]("ID komputer KASA tidak terdeteksi. Silahkan klik pengaturan tekan tombol GENERATE ID / tentukan kode KASA kemudian SIMPAN");
    }
    let login_username = $("#login_username").val().trim();
    let login_password = $("#login_password").val().trim();
    if (login_username == "" || login_password == ""){
        return toastr["info"]("Maaf, NAMA PENGGUNA dan KATASANDI tidak boleh kosong dong ? coba deh isi dengan benar");
    }
    $('#login_prosesmasuk').prop("disabled",true);
    $('#login_prosesmasuk').html('<i class="fa fa-spin fa-spinner"></i> Proses Masuk');
    getCsrfTokenCallback(function() { 
        $.ajax({
            url:baseurljavascript+'auth/ajax_login',
            type:'POST',
            dataType:'json',
            data: {
                [csrfName]: csrfTokenGlobal,
                login_username:login_username,
                login_password:login_password,
                kodekomputer:$("#kodekasa").val(),
            },
            complete:function(){
                $('#login_prosesmasuk').prop("disabled",false);
                $('#login_prosesmasuk').html('Masuk');
            },
            success:function(response){
                if (response.status == "false"){
                    window.location = baseurljavascript+"auth/area404_lisensi";
                }else if (response[0].success === "false"){
                    toastr["error"](response[0].msg);
                }else if (response[0].data[0].STATUSMEMBER == 'KSR'){
                    window.location = baseurljavascript+"penjualan/kasir/";
                }else if (response[0].data[0].STATUSMEMBER == 'KDS'){
                    window.location = baseurljavascript+"kds/";
                }else{
                    window.location = baseurljavascript;
                }
            },
            error: function(xhr, status, error) {
                toastr["error"](xhr.responseJSON.message);
            }
        });
    });
}
function prosesdaftar(){
    if ($("#namaoutlet").val() == "" || $("#namapemilik").val() == "" || $("#username_daftar").val() == "" || $("#password_daftar").val() == "" || $("#kodetenant").val() == ""){
        return toastr["info"]("Semua formulir pada pendaftaran OUTLET harus diisi semua secara benar dan akurat");
    }
    $('#daftarkanoutlet').prop("disabled",true);
    $('#daftarkanoutlet').html('<i class="fa fa-spin fa-spinner"></i> Proses Daftar');
    getCsrfTokenCallback(function() {  
        $.ajax({
            url:baseurljavascript+'auth/pendaftaranmember',
            type:'POST',
            dataType:'json',
            data: {
                [csrfName]: csrfTokenGlobal,
                NAMAOUTLET: $("#namaoutlet").val(),
                NAMA: $("#namapemilik").val(),
                NAMAPENGGUNA: $("#username_daftar").val(),
                PASSWORD: $("#password_daftar").val(),
                KODEUNIKMEMBER: $("#kodetenant").val(),
            },
            complete:function(){
                $('#daftarkanoutlet').prop("disabled",false);
                $('#daftarkanoutlet').html('Oke, Aku Join Nih');
            },
            success:function(response){
                if (response[0].success == 'false'){
                    return toastr["info"](response[0].msg);
                }else{
                    toastr["info"](response[0].msg);
                    $('#pendaftaranownernya').modal('toggle');
                }
                
            },
            error: function(xhr, status, error) {
                toastr["error"](xhr.responseJSON.message);
            }
        });
    });
}
$('#login_username').keypress(function (e) {let key = e.which; if(key == 13){ $('#login_password').focus() }});
$('#login_password').keypress(function (e) {let key = e.which; if(key == 13){ proseslogin(); }});
$("#login_prosesmasuk").on("click", function(){
    proseslogin();
});
$("#daftarkanoutlet").on("click", function () {
    prosesdaftar(); 
});