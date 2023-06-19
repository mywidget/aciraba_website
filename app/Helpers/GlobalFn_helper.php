<?php 
function thousandsCurrencyFormat($num) {
    if($num>1000 || $num<0) {
        $x = round($num);
        $x_number_format = number_format($x);
        $x_array = explode(',', $x_number_format);
        $x_parts = array(' Rb', ' Jt', ' Mil', ' Tril');
        $x_count_parts = count($x_array) - 1;
        $x_display = $x;
        $x_display = $x_array[0] . ((int) $x_array[1][0] !== 0 ? ',' . $x_array[1][0] : '');
        $x_display .= $x_parts[$x_count_parts - 1];
        return $x_display;
    }
    return $num;
}
function formatuang($jenis, $angka,$symbol){
    if ($jenis == "IDR"){
        $hasil = $symbol." ". number_format($angka,2,',','.');
    }
	return $hasil;
}
function slugify($text, string $divider = '-')
{
    $text = preg_replace('~[^\pL\d]+~u', $divider, $text);
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
    $text = preg_replace('~[^-\w]+~', '', $text);
    $text = trim($text, $divider);
    $text = preg_replace('~-+~', $divider, $text);
    $text = strtolower($text);
    if (empty($text)) {
        return 'Text tidak diketehui';
    }
    return $text;
}
function searchForMenu($id, $array) {
    foreach ($array as $key => $val) {
        if ($val->menuke === $id) {
            return $val->status;
        }
    }
    return false;
}
function leakLisensi($kondisi){
    $leakLisensi = \Config\Services::curlrequest();
    $request = service('request');
    $urlpost = "";
    if($kondisi == "aktivasi_lisensi"){
        $urlpost = "https://lisensi.seirasetyawan.com/api/activate_license";
        $datapost = [
            "verify_type" => "non_envato",
            "product_id" => PRODUK_ID,
            "license_code" => LISENSI,
            "client_name" => NAMA_PEMILIK,
        ];
    }else if($kondisi == "cek_lisensi"){
        $urlpost = "https://lisensi.seirasetyawan.com/api/verify_license";
        $datapost = [
            "product_id" => PRODUK_ID,
            "license_code" => LISENSI,
            "client_name" => NAMA_PEMILIK,
        ];
    }
    $rawData = json_encode($datapost);
    $response = $leakLisensi->request('POST',$urlpost, [
        'headers' => [
            'LB-API-KEY' => API_KEY_PANDAWA,
            'LB-URL' => DOMAIN_REGISTER,
            'LB-IP' => $_SERVER['REMOTE_ADDR'],
            'LB-LANG' => "INDONESIA",
            'Content-Type' => 'application/x-www-form-urlencoded'
        ],
        'form_params' => $datapost
    ]);
    $result = json_decode($response->getBody());
    return $result;
}
;?>