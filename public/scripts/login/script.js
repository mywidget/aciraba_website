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
    $.ajax({
        url:baseurljavascript+'auth/ajax_login',
        type:'POST',
        dataType:'json',
        data: {
            login_username:login_username,
            login_password:login_password,
            kodekomputer:$("#kodekasa").val(),
        },
        beforeSend: function(){
            $('#login_prosesmasuk').prop("disabled",true);
            $('#login_prosesmasuk').html('<i class="fa fa-spin fa-spinner"></i> Proses Masuk');
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
        
    });
}
$('#login_username').keypress(function (e) {let key = e.which; if(key == 13){ $('#login_password').focus() }});
$('#login_password').keypress(function (e) {let key = e.which; if(key == 13){ proseslogin() }});
$("#login_prosesmasuk").on("click", function(){
    proseslogin();
});