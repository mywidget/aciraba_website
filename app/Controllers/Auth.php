<?php
namespace App\Controllers;

class Auth extends BaseController{
	protected $session;
	public function index()	{
		return view('login_form');
	}
	public function ajax_login(){
		$result = leakLisensi("cek_lisensi");
		if (isset($result->code) == "200_LC"){
			$datapost = [];
			$client = \Config\Services::curlrequest();
			$arrcsrf = [['csrfName' => csrf_token()],['csrfHash' => csrf_hash()]];
			$datapost = [
				'NAMAPENGGUNA' => service('request')->getPost('login_username', FILTER_SANITIZE_STRING),
				'PASSWORDWEB' => service('request')->getPost('login_password', FILTER_SANITIZE_STRING),
				'KODEKOMPUTER' => service('request')->getPost('kodekomputer', FILTER_SANITIZE_STRING),
			];
			$posts_data = $client->request("POST", BASEURLAPI."auth/loginapps", [
				"headers" => [
					"Accept" => "application/json",
					"Authorization" => "Bearer ".TOKENAPI,
				],
				"form_params" => $datapost
			]);
			$datajson = json_decode($posts_data->getBody());
			if ($datajson->loginapps[0]->success == "true"){
				$arraysession = [
					'kodeunikmember'=> $datajson->loginapps[0]->data[0]->KODEUNIKMEMBER,
					'pengguna_id'	=> $datajson->loginapps[0]->data[0]->PENGGUNA_ID,
					'namapengguna'	=> $datajson->loginapps[0]->data[0]->NAMAPENGGUNA,
					'totaldeposit'	=> $datajson->loginapps[0]->data[0]->TOTALDEPOSIT,
					'namaasli'		=> explode("::", $datajson->loginapps[0]->decryptdata[0]->usernameplain)[0],
					'hakakses'		=> $datajson->loginapps[0]->data[0]->HAKAKSESID,
					'jenismerchant'	=> trim($datajson->loginapps[0]->data[0]->STATUSMEMBER),
					'fotourl'		=> $datajson->loginapps[0]->data[0]->URLFOTO,
					'jsonmenu'		=> $datajson->loginapps[0]->data[0]->JSONMENU,
					'sessionkode'	=> $datajson->loginapps[0]->data[0]->SESSIONKODE,
					'akun_db_aktif'	=> $datajson->loginapps[0]->data[0]->DATABASE,
					'akun_db_prefix' => $datajson->loginapps[0]->data[0]->PREFIX,
					'pajaknegara' 	=> $datajson->loginapps[0]->data[0]->PAJAKNEGARA,
					'pajaktoko' 	=> $datajson->loginapps[0]->data[0]->PAJAKTOKO,
					'outlet'		=> "GDPST",
					'kodekomputer'	=> service('request')->getPost('kodekomputer'),
				];
				$this->session->set($arraysession);
			}
			$json = array_merge($datajson->loginapps, $arrcsrf);
			return json_encode($json);
		}
		if ($result->status == "false"){
			$arraysession = [
				'pesan_lisensi'=> $result->message,
				'code_lisensi'=> isset($result->code),
			];
			$this->session->set($arraysession);
			return json_encode($result);
		}
	}
	public function aktivasilisensi_key(){
		$result = leakLisensi("aktivasi_lisensi");
		return json_encode($result);
	}
	public function ceklisensi_key(){
		$result = leakLisensi("cek_lisensi");
		return json_encode($result);
	}
	public function logout(){
		$this->session->destroy();
		header('Location: '.base_url().'auth');
		exit(); 
	}
	public function aktivasilisensi(){
		return view('auth/aktivasilisensi',);
	}
	public function area403(){
		return view('auth/page_forbidden_403',);
	}
	public function area404_lisensi(){
		$data = [
			"pesan_lisensi" => $this->session->get("pesan_lisensi"),
			"code_lisensi" => $this->session->get("code_lisensi"),
		];
		return view('auth/page_lisensi_404',$data);
	}
	public function ubahoutlet(){
		$arraysession = [
			'outlet' => $this->request->uri->getSegment(3),
		];
		$this->session->set($arraysession);
		$url = $_SERVER['HTTP_REFERER'];
		return redirect()->to($url); 
	}
	public function outlet(){
		$client = \Config\Services::curlrequest();
		$datapost = [
			'KATAKUNCIPENCARIAN' => service('request')->getPost('KATAKUNCIPENCARIAN'),
			'KODEUNIKMEMBER' => service('request')->getPost('KODEUNIKMEMBER'),
		];
		$posts_data = $client->request("POST", BASEURLAPI."auth/outlet", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($posts_data->getBody());
		$jsontext = "[";
		for ($x = 0; $x < $datajson->hasiljson[0]->totaldataquery; $x++) {
			$jsontext .= '{"group": "'.$datajson->hasiljson[0]->dataquery[$x]->KODEOUTLET.'", "namaoutlet": "'.$datajson->hasiljson[0]->dataquery[$x]->NAMAOUTLET.'"},';	
		}
		$jsontext = substr_replace($jsontext, '', -1); /* menghilangkan koma terakhir */
		$jsontext .= "]";
		return json_encode($jsontext);
	}
}