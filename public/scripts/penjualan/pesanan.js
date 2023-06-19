const socket = io(baseurlsocket);
$("#katakuncipencarian").on('input', debounce(function (e) {
    $('#tabelpesanan').DataTable().ajax.reload();
}, 500));
$("#pencarian").on("click", function(){
    $('#tabelpesanan').DataTable().ajax.reload();
});
$("#jenistransaksi").change(function(){
    $('#tabelpesanan').DataTable().ajax.reload();
});