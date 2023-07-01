var csrfTokenGlobal;
function formatuang(nominaluang,kodeuang,kodeinternasional){
    let formatter = new Intl.NumberFormat(kodeuang, {style: 'currency',currency: kodeinternasional,});
    return formatter.format(nominaluang);
}
function time_convert(num){ 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + " Jam : " + minutes+" Menit";         
}
function selectAllText(textbox) { textbox.focus(); textbox.select(); }
function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);
    if (ribuan) {
      separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    } 
    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? prefix + rupiah : "";
  }
function gantikata(str, find, replace){
    for (var i = 0; i < find.length; i++) {
        str = str.replace(new RegExp(find[i], 'gi'), replace[i]);
    }
    return str;
}
function gantikatamapobj(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()];
    });
}
function parseLocaleNumber(stringNumber, locale) {
    var thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(/\p{Number}/gu, '');
    var decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(/\p{Number}/gu, '');

    return parseFloat(stringNumber
        .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
        .replace(new RegExp('\\' + decimalSeparator), '.')
    );
}
function decodeEntities(encodedString) {
    var textArea = document.createElement('p');
    textArea.innerHTML = encodedString;
    return textArea.value;
}
function cekjsonduplicate(kotakbelanja, key, value) {
    return kotakbelanja.filter(function (object) {
        return object[key] === value;
    });
};
const debounce = (func, delay) => {
    let debounceTimer
    return function() {
        const context = this
        const args = arguments
            clearTimeout(debounceTimer)
                debounceTimer
            = setTimeout(() => func.apply(context, args), delay)
    }
}
function randomstringdigit(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}
function getCsrfTokenCallback(callback) {
    $.ajax({
        url: baseurljavascript + 'auth/getCsrfToken',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            csrfTokenGlobal = response.csrf_token;
            callback();
        },
        error: function(xhr, status, error) {
            toastr["error"]("Ada kesalahan dalam CALLBACK TOKEN");
        }
    });
}
async function getCsrfTokens(count) {
    try {
        const response = await $.ajax({
        url: baseurljavascript + 'auth/getCsrfTokens/' + count,
        method: 'GET',
        dataType: 'json'
    });
        const csrfTokens = response.csrf_tokens;
        return csrfTokens;
    } catch (error) {
        throw new Error("Gagal mendapatkan token CSRF.");
    }
}
function loadingAnimation() {
    let stringHTMLloading =
        "<div class=\"containerloading\">" +
        "<div class=\"contact-card\">" +
        "<div class=\"avatar\"></div>" +
        "<div class=\"text\"></div>" +
        "</div>" +
        "<div class=\"contact-card\">" +
        "<div class=\"avatar\"></div>" +
        "<div class=\"text\"></div>" +
        "</div>" +
        "<div id=\"magnifying-glass\">" +
        "<div id=\"glass\"></div>" +
        "<div id=\"handle\">" +
        "<div id=\"handle-inner\"></div>" +
        "</div>" +
        "</div>" +
        "</div>";

    return stringHTMLloading;
}
