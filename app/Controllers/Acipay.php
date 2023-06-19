<?php

namespace App\Controllers;

class Acipay extends BaseController
{
    protected $session,$breadcrumb,$sidetitle = "Aciraba Payment";
	function __construct(){
		$this->session = \Config\Services::session();
        $this->session->start();
		if ($this->session->get("kodeunikmember") == ""){
			header('Location: '.base_url().'auth');
			exit(); 
		}
    }
    /* area algoritma kode non ppob */
	public function produknonppob(){
		$this->breadcrumb  = array( 
			"Produk Acipay" => base_url()."acipay/produknonppob",
		);
		$data = [
            "menuaktif" => "A1",
			"submenuaktif" => "S1",
			"titleheader"=>"DAFTAR PRODUK ACIPAY",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
            
		];
		return view('acipay/kontenproduknonppob',$data);
	}
	public function tambahprodukacipay(){
		
		$this->breadcrumb  = array( 
			"Produk Acipay" => base_url()."acipay/produknonppob",
		);
		$data = [
            "menuaktif" => "A1",
			"submenuaktif" => "S1",
			"titleheader"=>"INFORMASI PRODUK",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
            
		];
		$data['SEGMENT3'] = "";
		if ($this->request->uri->getSegment(3) != ""){
			$client = \Config\Services::curlrequest();
			$datapost = [
				'KATAKUNCI' => $this->request->uri->getSegment(3),
				'STOK' => "",
				'JENIS' => "",
				'STATUS' => $this->request->uri->getSegment(4),
				'KUNCIKATEGORI' => "",
				'KUNCIOPERATOR' => "",
				'DATAKE' => 0,
				'LIMIT' => 1,
				'JOINKAH' => "IYA",
			];
			$json_data = $client->request("POST", BASEURLAPI."acipay/daftarproduknonppon", [
				"headers" => [
					"Accept" => "application/json",
					"Authorization" => "Bearer ".TOKENAPI,
				],
				"form_params" => $datapost
			]);
			$datajson = json_decode($json_data->getBody());
			$data['SEGMENT3'] = $this->request->uri->getSegment(3);
			$data['PRODUK_ID_SERVER'] = $datajson->hasiljson[0]->data[0]->PRODUK_ID_SERVER;
			$data['NAMAPRODUK'] = $datajson->hasiljson[0]->data[0]->NAMA_PRODUK;
			$data['KETERANGAN'] = $datajson->hasiljson[0]->data[0]->KETERANGANPRODUK;
			$data['IMGURL'] = $datajson->hasiljson[0]->data[0]->IMGURPRODUK;
			$data['MARKUP'] = $datajson->hasiljson[0]->data[0]->MARKUP;
			$data['HARGA_UMUM'] = $datajson->hasiljson[0]->data[0]->HARGA_UMUM;
			$data['HARGA_AGEN'] = $datajson->hasiljson[0]->data[0]->HARGA_AGEN;
			$data['HARGA_MEGAAGEN'] = $datajson->hasiljson[0]->data[0]->HARGA_MEGAAGEN;
			$data['APISERVER_ID'] = $datajson->hasiljson[0]->data[0]->APISERVER_IDPRODUK;
			$data['PRODUK_OPERATOR_ID'] = $datajson->hasiljson[0]->data[0]->PRODUK_OPERATOR_ID;
			$data['MULTI'] = $datajson->hasiljson[0]->data[0]->MULTI;
			$data['STATUS'] = $datajson->hasiljson[0]->data[0]->STATUS;
			$data['JENISPRODUK'] = $datajson->hasiljson[0]->data[0]->JENISPRODUK;
			$data['PRODUK_KATEGORI_ID'] = $datajson->hasiljson[0]->data[0]->PRODUK_KATEGORI_ID;
			$data['UNLIMITEDSTOK'] = $datajson->hasiljson[0]->data[0]->UNLIMITEDSTOK;
			$data['TAMPIL'] = $datajson->hasiljson[0]->data[0]->TAMPIL;
			$data['POIN'] = $datajson->hasiljson[0]->data[0]->POIN;
			$data['KATEGORI_NAMA'] = $datajson->hasiljson[0]->data[0]->KATEGORI_NAMA;
			$data['OPERATOR_NAMA'] = $datajson->hasiljson[0]->data[0]->OPERATOR_NAMA;
		}
		return view('acipay/kontentambahprodukacipay',$data);
	}
    public function produknonppobkategori(){
		$this->breadcrumb  = array( 
			"Produk Acipay" => base_url()."acipay/produknonppob",
		);
		$data = [
            "menuaktif" => "A1",
			"submenuaktif" => "S1",
			"titleheader"=>"DAFTAR PRODUK ACIPAY",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
            
		];
		$data["SEGMENT"] = $this->request->uri->getSegment(2);
		return view('acipay/kontenproduknonpponkategori',$data);
	}
    public function produknonppoboperator(){
		$this->breadcrumb  = array( 
			"Produk Acipay" => base_url()."acipay/produknonppob",
		);
		$data = [
            "menuaktif" => "A1",
			"submenuaktif" => "S1",
			"titleheader"=>"DAFTAR PRODUK ACIPAY",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
            
		];
		return view('acipay/kontenproduknonpponoperator',$data);
	}
    /* ajax algoritma */
	public function ajaxdaftarnonppobproduk(){
		
        $client = \Config\Services::curlrequest();
		$datapost = [
			'KATAKUNCI' => service('request')->getPost('KATAKUNCI'),
			'STOK' => service('request')->getPost('STOK'),
			'JENIS' => service('request')->getPost('JENIS'),
            'STATUS' => service('request')->getPost('STATUS'),
			'KUNCIKATEGORI' => service('request')->getPost('KUNCIKATEGORI'),
			'KUNCIOPERATOR' => service('request')->getPost('KUNCIOPERATOR'),
			'DATAKE' => 0,
			'LIMIT' => 500,
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/daftarproduknonppon", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		if ($datajson->hasiljson[0]->success == "false"){
			$outputDT = [
				"draw" => 1,
				"recordsTotal" => 0,
				"recordsFiltered" => 0,
				"data" => []
			];
		}else{
			for ($no = 0; $no < $datajson->hasiljson[0]->totaldata; $no++) {
				$row = [];
				$row[] = "<a href=\"".base_url()."acipay/tambahprodukacipay/".$datajson->hasiljson[0]->data[$no]->PRODUK_ID_SERVER."/".$datajson->hasiljson[0]->data[$no]->STATUS."\"><button class=\"btn btn-outline-success\"><i class=\"fas fa-edit\"></i></button></a> <button onclick=\"sinkronperbarang('".$datajson->hasiljson[0]->data[$no]->PRODUK_ID_SERVER."','".$datajson->hasiljson[0]->data[$no]->JENISPRODUK."','".$datajson->hasiljson[0]->data[$no]->NAMA_PRODUK."','".$datajson->hasiljson[0]->data[$no]->PRODUK_OPERATOR_ID."','".$datajson->hasiljson[0]->data[$no]->PRODUK_KATEGORI_ID."')\" class=\"btn btn-outline-primary\"><i class=\"fas fa-sync\"></i></button>";
				$row[] = $datajson->hasiljson[0]->data[$no]->PRODUK_ID;
				$row[] = $datajson->hasiljson[0]->data[$no]->PRODUK_ID_SERVER;
				$row[] = $datajson->hasiljson[0]->data[$no]->NAMA_PRODUK;
				$row[] = formatuang('IDR',$datajson->hasiljson[0]->data[$no]->HARGA_SERVER,"Rp");
				$row[] = formatuang('IDR',$datajson->hasiljson[0]->data[$no]->HARGA_UMUM,"Rp");
				$row[] = formatuang('IDR',$datajson->hasiljson[0]->data[$no]->HARGA_AGEN,"Rp");
				$row[] = formatuang('IDR',$datajson->hasiljson[0]->data[$no]->HARGA_MEGAAGEN,"Rp");
				$row[] = $datajson->hasiljson[0]->data[$no]->STATUS == "0" ? '<span class="badge badge-label-danger badge-xl">PRODUK GANGGUAN</span>' : '<span class="badge badge-label-success badge-xl">PRODUK NORMAL</span>' ;
				$data[] = $row;
			}
			$outputDT = [
				"draw" => 1,
				"recordsTotal" => $datajson->hasiljson[0]->totaldata,
				"recordsFiltered" => $datajson->hasiljson[0]->totaldata,
				"data" => $data
			];
		}
		return json_encode($outputDT);
    }
	public function ajaxtambahacipayproduk(){
        $client = \Config\Services::curlrequest();
		$datapost = [
			'ISEDIT' => service('request')->getPost('ISEDIT'),
			'PRODUK_ID' => service('request')->getPost('PRODUK_ID'),
			'PRODUK_ID_SERVER' => service('request')->getPost('PRODUK_ID_SERVER'),
            'APISERVER_ID' => service('request')->getPost('APISERVER_ID'),
			'PRODUK_OPERATOR_ID' => service('request')->getPost('PRODUK_OPERATOR_ID'),
			'PRODUK_KATEGORI_ID' => service('request')->getPost('PRODUK_KATEGORI_ID'),
			'NAMA_PRODUK' => service('request')->getPost('NAMA_PRODUK'),
			'KETERANGAN' => service('request')->getPost('KETERANGAN'),
			'HARGA_SERVER' => service('request')->getPost('HARGA_SERVER'),
			'MARKUP' => service('request')->getPost('MARKUP'),
			'HARGA_UMUM' => service('request')->getPost('HARGA_UMUM'),
            'HARGA_AGEN' => service('request')->getPost('HARGA_AGEN'),
			'HARGA_MEGAAGEN' => service('request')->getPost('HARGA_MEGAAGEN'),
			'HARGA_LAINLAIN' => service('request')->getPost('HARGA_LAINLAIN'),
			'STATUS' => service('request')->getPost('STATUS'),
			'POIN' => service('request')->getPost('POIN'),
			'IMGURL' => service('request')->getPost('IMGURL'),
			'JAM_MULAI' => service('request')->getPost('JAM_MULAI'),
            'JAM_TUTUP' => service('request')->getPost('JAM_TUTUP'),
			'MULTI' => service('request')->getPost('MULTI'),
			'STOK' => service('request')->getPost('STOK'),
			'URUTAN' => service('request')->getPost('URUTAN'),
			'JENISPRODUK' => service('request')->getPost('JENISPRODUK'),
			'TAMPIL' => service('request')->getPost('TAMPIL'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/tambahprodukacipay", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		if ($datajson->hasiljson[0]->success == "true"){
			$jsonobj = '{"status":"true","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}else{
			$jsonobj = '{"status":"false","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}
		return json_encode($jsonobj);
    }
	public function ajaxtambahacipayoperator(){
        $client = \Config\Services::curlrequest();
		$datapost = [
			'APISERVER_ID' => service('request')->getPost('APISERVER_ID'),
			'OPERATOR_ID' => service('request')->getPost('OPERATOR_ID'),
			'OPERATOR_NAMA' => service('request')->getPost('OPERATOR_NAMA'),
            'PREFIX' => service('request')->getPost('PREFIX'),
			'IMGURL' => service('request')->getPost('IMGURL'),
			'STATUS' => service('request')->getPost('STATUS'),
			'ISEDIT' => service('request')->getPost('ISEDIT'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/acipaytambahoperator", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		if ($datajson->hasiljson[0]->success == "true"){
			$jsonobj = '{"status":"true","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}else{
			$jsonobj = '{"status":"false","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}
		return json_encode($jsonobj);
    }
    public function ajaxtambahacipaykategori(){
		
        $client = \Config\Services::curlrequest();
		$datapost = [
			'APISERVER_ID' => service('request')->getPost('APISERVER_ID'),
			'URUTAN' => service('request')->getPost('URUTAN'),
            'KATEGORI_ID' => service('request')->getPost('KATEGORI_ID'),
			'KATEGORI_NAMA' => service('request')->getPost('KATEGORI_NAMA'),
			'TIPE' => service('request')->getPost('TIPE'),
            'IMGURL' => service('request')->getPost('IMGURL'),
			'SLUG_URL' => slugify(service('request')->getPost('KATEGORI_NAMA')),
			'STATUS' => service('request')->getPost('STATUS'),
			'PLACEHOLDER' => service('request')->getPost('PLACEHOLDER'),
			'KETERANGAN' => service('request')->getPost('KETERANGAN'),
			'ISEDIT' => service('request')->getPost('ISEDIT'),
			'IDOPERATOR' => service('request')->getPost('IDOPERATOR'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/acipaytambahkategori", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		if ($datajson->hasiljson[0]->success == "true"){
			$jsonobj = '{"status":"true","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}else{
			$jsonobj = '{"status":"false","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}
		return json_encode($jsonobj);
    }
	public function ajaxdaftarkategoriacipaynonppob(){
        helper('number');
		$client = \Config\Services::curlrequest();
		$datapost = [
			'KATAKUNCI' => service('request')->getPost('KATAKUNCI'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/acipaydaftarkategorinonppob", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		if ($datajson->hasiljson[0]->success == "false"){
			$outputDT = [
				"draw" => 1,
				"recordsTotal" => 0,
				"recordsFiltered" => 0,
				"data" => []
			];
		}else{
			for ($no = 0; $no < $datajson->hasiljson[0]->totaldata; $no++) {
				$row = [];
				$row[] = "<button data-toggle=\"modal\" data-target=\"#modalsinkronproduk\" onclick=\"sinkronbarang('','".$datajson->hasiljson[0]->data[$no]->KATEGORI_ID."','".$datajson->hasiljson[0]->data[$no]->KATEGORI_NAMA."')\" class=\"btn btn-outline-success\"><i class=\"fas fa-sync\"></i></button> <button  onclick=\"ubahinformasi('".$datajson->hasiljson[0]->data[$no]->KATEGORI_ID."','".$datajson->hasiljson[0]->data[$no]->KATEGORI_NAMA."','".$datajson->hasiljson[0]->data[$no]->IMGURL."','".$datajson->hasiljson[0]->data[$no]->STATUS."','".$datajson->hasiljson[0]->data[$no]->TIPE."','".$datajson->hasiljson[0]->data[$no]->PLACEHOLDER."','".$datajson->hasiljson[0]->data[$no]->KETERANGAN."','".$datajson->hasiljson[0]->data[$no]->OPERATOR_ID."')\" class=\"btn btn-outline-primary\"><i class=\"fas fa-edit\"></i> Ubah</button> <button  onclick=\"deletekategori('".$datajson->hasiljson[0]->data[$no]->KATEGORI_ID."','".$datajson->hasiljson[0]->data[$no]->KATEGORI_NAMA."')\" class=\"btn btn-outline-danger\"><i class=\"fas fa-trash\"></i> Hapus</button>";
				$row[] = $datajson->hasiljson[0]->data[$no]->KATEGORI_ID;
                $row[] = $datajson->hasiljson[0]->data[$no]->KATEGORI_NAMA;
				$row[] = $datajson->hasiljson[0]->data[$no]->TIPE;
				$row[] = $datajson->hasiljson[0]->data[$no]->STATUS == "0" ? '<span class="badge badge-label-danger badge-xl">KATEGORI TIDAK AKTIF</span>' : '<span class="badge badge-label-success badge-xl">KATEGORI AKTIF</span>' ;
				$row[] = $datajson->hasiljson[0]->data[$no]->PLACEHOLDER;
				$row[] = $datajson->hasiljson[0]->data[$no]->KETERANGAN;
				$data[] = $row;
			}
			$outputDT = [
				"draw" => 1,
				"recordsTotal" => $datajson->hasiljson[0]->totaldata,
				"recordsFiltered" => $datajson->hasiljson[0]->totaldata,
				"data" => $data
			];
		}
		return json_encode($outputDT);
    }
	public function ajaxdaftaroperatoracipaynonppob(){
		$client = \Config\Services::curlrequest();
		$datapost = [
			'KATAKUNCI' => service('request')->getPost('KATAKUNCI'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/acipaydaftaroperatornonppob", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		if ($datajson->hasiljson[0]->success == "false"){
			$outputDT = [
				"draw" => 1,
				"recordsTotal" => 0,
				"recordsFiltered" => 0,
				"data" => []
			];
		}else{
			for ($no = 0; $no < $datajson->hasiljson[0]->totaldata; $no++) {
				$row = [];
				if (service('request')->getPost('DARIPPILIHOPERATOR') == "1"){
					$row[] = "<button onclick=\"onclickplihbarang('".$datajson->hasiljson[0]->data[$no]->OPERATOR_ID."','".$datajson->hasiljson[0]->data[$no]->OPERATOR_NAMA."','".service('request')->getPost('SEGMENT')."')\" class=\"btn btn-outline-primary\"><i class=\"fas fa-edit\"></i> Pilih Ini</button>";
				}else{
					$row[] = "<button onclick=\"ubahinformasi('".$datajson->hasiljson[0]->data[$no]->OPERATOR_ID."','".$datajson->hasiljson[0]->data[$no]->OPERATOR_NAMA."','".$datajson->hasiljson[0]->data[$no]->PREFIX."','".$datajson->hasiljson[0]->data[$no]->STATUS."','".$datajson->hasiljson[0]->data[$no]->IMGURL."')\" class=\"btn btn-outline-primary\"><i class=\"fas fa-edit\"></i> Ubah</button> <button onclick=\"deleteoperator('".$datajson->hasiljson[0]->data[$no]->OPERATOR_ID."','".$datajson->hasiljson[0]->data[$no]->OPERATOR_NAMA."')\" class=\"btn btn-outline-danger\"><i class=\"fas fa-trash\"></i> Hapus</button>";
				}
				$row[] = $datajson->hasiljson[0]->data[$no]->OPERATOR_ID;
                $row[] = $datajson->hasiljson[0]->data[$no]->OPERATOR_NAMA;
				$row[] = $datajson->hasiljson[0]->data[$no]->PREFIX;
				$row[] = $datajson->hasiljson[0]->data[$no]->STATUS == "0" ? '<span class="badge badge-label-danger badge-xl">OPERATOR TIDAK AKTIF</span>' : '<span class="badge badge-label-success badge-xl">OPERATOR AKTIF</span>' ;
				$data[] = $row;
			}
			$outputDT = [
				"draw" => 1,
				"recordsTotal" => $datajson->hasiljson[0]->totaldata,
				"recordsFiltered" => $datajson->hasiljson[0]->totaldata,
				"data" => $data
			];
		}
		return json_encode($outputDT);
    }
	public function acipayhapusoperator(){
        $client = \Config\Services::curlrequest();
		$datapost = [
			'OPERATOR_ID' => service('request')->getPost('OPERATOR_ID'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/acipayhapusoperator", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		if ($datajson->hasiljson[0]->success == "true"){
			$jsonobj = '{"status":"true","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}else{
			$jsonobj = '{"status":"false","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}
		return json_encode($jsonobj);
    }
	public function acipayhapuskategori(){
        $client = \Config\Services::curlrequest();
		$datapost = [
			'KATEGORI_ID' => service('request')->getPost('KATEGORI_ID'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/acipayhapuskategori", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		if ($datajson->hasiljson[0]->success == "true"){
			$jsonobj = '{"status":"true","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}else{
			$jsonobj = '{"status":"false","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}
		return json_encode($jsonobj);
    }
	public function ajaxdaftarkategoriacipayselect2(){
        helper('number');
		$client = \Config\Services::curlrequest();
		$datapost = [
			'KATAKUNCI' => service('request')->getPost('KATAKUNCI'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/acipaydaftarkategorinonppob", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		$jsontext = "[";
		for ($x = 0; $x < $datajson->hasiljson[0]->totaldata; $x++) {
			$jsontext .= '{"idkategori": "'.$datajson->hasiljson[0]->data[$x]->KATEGORI_ID.'", "namakategori": "'.$datajson->hasiljson[0]->data[$x]->KATEGORI_NAMA.'"},';	
		}
		$jsontext = substr_replace($jsontext, '', -1);
		$jsontext .= "]";
		return json_encode($jsontext);
    }
	public function ajaxdaftaroperatoracipayselect2(){
        helper('number');
		$client = \Config\Services::curlrequest();
		$datapost = [
			'KATAKUNCI' => service('request')->getPost('KATAKUNCI'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/acipaydaftaroperatornonppob", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		$jsontext = "[";
		for ($x = 0; $x < $datajson->hasiljson[0]->totaldata; $x++) {
			$jsontext .= '{"idkategori": "'.$datajson->hasiljson[0]->data[$x]->OPERATOR_ID.'", "namakategori": "'.$datajson->hasiljson[0]->data[$x]->OPERATOR_NAMA.'"},';	
		}
		$jsontext = substr_replace($jsontext, '', -1);
		$jsontext .= "]";
		return json_encode($jsontext);
    }
    public function sinkronproduk(){
        $client = \Config\Services::curlrequest();
		$datapost = [
			'CMD' => service('request')->getPost('CMD'),
			'KATPRODUK' => service('request')->getPost('KATPRODUK'),
			'PEMISAH' => service('request')->getPost('PEMISAH'),
			'BATASJUMLAH' => service('request')->getPost('BATASJUMLAH'),
            'PRODUK_OPERATOR_ID' => service('request')->getPost('PRODUK_OPERATOR_ID'),
			'PRODUK_KATEGORI_ID' => service('request')->getPost('PRODUK_KATEGORI_ID'),
			'JENISPRODUK' => service('request')->getPost('JENISPRODUK'),
			'IKONPRODUK' => service('request')->getPost('IKONPRODUK'),
		];
		$json_data = $client->request("POST", BASEURLAPI."apiluar/digiflazzupdate", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		if ($datajson->hasiljson[0]->success == "true"){
			$jsonobj = '{"status":"true","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}else{
			$jsonobj = '{"status":"false","msg":"'.$datajson->hasiljson[0]->msg.'"}';
		}
		return json_encode($jsonobj);
    }
	public function dafartranskasi(){
		$client = \Config\Services::curlrequest();
		$datapost = [
			'KONDISIMODEL' => service('request')->getPost('KONDISIMODEL'),
			'KODEUNIKMEMNER' => service('request')->getPost('KODEUNIKMEMNER'),
			'AGEN' => service('request')->getPost('AGEN'),
			'LOKASI' => service('request')->getPost('LOKASI'),
			'KATAKUNCIPENCARIAN' => service('request')->getPost('KATAKUNCIPENCARIAN'),
			'PARAMETERPENCARIAN' => service('request')->getPost('PARAMETERPENCARIAN'),
			'STATUSTRANSKASI' => service('request')->getPost('STATUSTRANSKASI'),
			'STATUSMEMBER' => service('request')->getPost('STATUSMEMBER'),
			'TANGGALAWAL' => service('request')->getPost('TANGGALAWAL'),
			'TANGGALAKHIR' => service('request')->getPost('TANGGALAKHIR'),
			'STATUSDATA' => service('request')->getPost('STATUSDATA'),
			'DATAKE' => service('request')->getPost('DATAKE'),
			'LIMIT' => service('request')->getPost('LIMIT'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/dafartranskasi", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		if ($datajson->hasiljson[0]->success == "false"){
			$outputDT = [
				"draw" => 1,
				"recordsTotal" => 0,
				"recordsFiltered" => 0,
				"data" => []
			];
		}else{
			for ($no = 0; $no < $datajson->hasiljson[0]->totaldata; $no++) {
				$kondisistatus = '<span class="badge badge-label-danger badge-xl">ERR</span>';
				switch ($datajson->hasiljson[0]->data[$no]->STATUSTRX) {
					case "0":
						$kondisistatus = '<span class="badge badge-label-primary badge-xl">PENDING</span>';
						break;
					case "1":
						$kondisistatus = '<span class="badge badge-label-success badge-xl">SUKSES</span>';
						break;
					case "2":
						$kondisistatus = '<span class="badge badge-label-danger badge-xl">GAGAL</span>';
						break;
				} 
				$row = [];
				$row[] = "<button data-toggle=\"modal\" data-target=\"#kirimulang\" onclick=\"kirimulangfn('".$datajson->hasiljson[0]->data[$no]->TRANSKASI_ID."','".$datajson->hasiljson[0]->data[$no]->APISERVER_ID."','".$datajson->hasiljson[0]->data[$no]->TUJUAN."','".$datajson->hasiljson[0]->data[$no]->PRODUK_ID_SERVER."')\" class=\"btn btn-outline-success\"><i class=\"fas fa-share-square\"></i> Cek</button>  <button onclick=\"hapustransaksiacipay('".$datajson->hasiljson[0]->data[$no]->TRANSKASI_ID."','".$datajson->hasiljson[0]->data[$no]->NAMA_PRODUK."')\" class=\"btn btn-outline-danger\"><i class=\"fas fa-trash\"></i> Hapus</button>";
				$row[] = $kondisistatus;
				$row[] = $datajson->hasiljson[0]->data[$no]->TRANSKASI_ID;
                $row[] = $datajson->hasiljson[0]->data[$no]->TUJUAN." [".$datajson->hasiljson[0]->data[$no]->PRODUK_ID_SERVER."]";
				$row[] = $datajson->hasiljson[0]->data[$no]->NAMA_PRODUK;
				$row[] = $datajson->hasiljson[0]->data[$no]->AGEN;
				$row[] = $datajson->hasiljson[0]->data[$no]->PENGIRIM;
				$row[] = $datajson->hasiljson[0]->data[$no]->SN;
				$row[] = $datajson->hasiljson[0]->data[$no]->TANGGALTRXF;
				$row[] = $datajson->hasiljson[0]->data[$no]->TANGGALUPDATEF;
				$row[] = $datajson->hasiljson[0]->data[$no]->HARGA_BELI > $datajson->hasiljson[0]->data[$no]->HARGA_KEAGEN ? "0" : "1" ;
				$row[] = $datajson->hasiljson[0]->data[$no]->KETERANGAN;
				$data[] = $row;
			}
			$outputDT = [
				"draw" => 1,
				"recordsTotal" => $datajson->hasiljson[0]->totaldata,
				"recordsFiltered" => $datajson->hasiljson[0]->totaldata,
				"data" => $data
			];
		}
		return json_encode($outputDT);
    }
	public function transkasiacipay(){
		$this->breadcrumb  = array( 
			"Transaksi Hari Ini" => base_url()."acipay/transkasiacipay",
		);
		$data = [
            "menuaktif" => "A1",
			"submenuaktif" => "S2",
			"titleheader"=>"TRANSAKSI HARI INI",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
            
		];
		return view('acipay/transaksi/kontendaftartransaksi',$data);
	}
	public function hapuspenjualan(){
		if ($this->session->get("kodeunikmember") == ""){
			return redirect()->to('/auth');
		}
		$client = \Config\Services::curlrequest();
		$datapost = [
			'TRANSAKSIID' => service('request')->getPost('TRANSAKSIID'),
			'OUTLET' => service('request')->getPost('OUTLET'),
			'KODENIKMEMBER' => service('request')->getPost('KODENIKMEMBER'),
			'NAMAPRODUK' => service('request')->getPost('NAMAPRODUK'),
		];
		$json_data = $client->request("POST", BASEURLAPI."acipay/hapustransaksi", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		$arrne = [['csrfName' => csrf_token()],['csrfHash' => csrf_hash()]];
		$jsonbaru = array_merge($datajson->hasiljson, $arrne);
		return json_encode($jsonbaru);
	}
	public function transkasiacipaybackend(){
		$this->breadcrumb  = array( 
			"Trx Hari Ini" => base_url()."acipay/transkasiacipay",
			"Trx Baru" => base_url()."acipay/transkasiacipaybackend",
		);
		$data = [
            "menuaktif" => "A1",
			"submenuaktif" => "S2",
			"titleheader"=>"TRANSAKSI BARU",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
            
		];
		return view('acipay/transaksi/kontentranskasibackend',$data);
	}
	public function transaksikedealer(){
		if ($this->session->get("kodeunikmember") == ""){
			return redirect()->to('/auth');
		}
		$client = \Config\Services::curlrequest();
		$routernodejs = "";
		if (service('request')->getPost('KONDISI') == "FIXTRX"){
			$routernodejs = "penjualan/transaksidigital";
			$datapost = [
				'KONDISI' => service('request')->getPost('KONDISI'),
				'IDSERVER' => service('request')->getPost('IDSERVER'),
				'TRANSKASI_ID' => service('request')->getPost('TRANSKASI_ID'),
				'ANTRIAN_ID' => service('request')->getPost('ANTRIAN_ID'),
				'TAGIHAN' => service('request')->getPost('TAGIHAN'),
				'KODEPRODUK' => service('request')->getPost('KODEPRODUK'),
				'NAMA_PRODUK' => service('request')->getPost('NAMA_PRODUK'),
				'HARGA_BELI' => service('request')->getPost('HARGA_BELI'),
				'HARGA_KEAGEN' => service('request')->getPost('HARGA_KEAGEN'),
				'HARGA_JUALKEPELANGGAN' => service('request')->getPost('HARGA_JUALKEPELANGGAN'),
				'KOMISI' => service('request')->getPost('KOMISI'),
				'TUJUAN' => service('request')->getPost('TUJUAN'),
				'NOMORPELANGGAN' => service('request')->getPost('NOMORPELANGGAN'),
				'KETERANGAN' => service('request')->getPost('KETERANGAN'),
				'PENGIRIM' => service('request')->getPost('PENGIRIM'),
				'STATUSTRX' => service('request')->getPost('STATUSTRX'),
				'AGEN' => service('request')->getPost('AGEN'),
				'VIA' => service('request')->getPost('VIA'),
				'PEMBAYARAN' => service('request')->getPost('PEMBAYARAN'),
				'JENIS_TRANSAKSI' => service('request')->getPost('JENIS_TRANSAKSI'),
				'PERULANGAN' => service('request')->getPost('PERULANGAN'),
				'SALDO_SEBELUM' => service('request')->getPost('SALDO_SEBELUM'),
				'SALDO_SESUDAH' => service('request')->getPost('SALDO_SESUDAH'),
				'NOMORNOTA' => service('request')->getPost('NOMORNOTA'),
				'LOKASI' => service('request')->getPost('LOKASI'),
				'KODEUNIKMEMBER' => service('request')->getPost('KODEUNIKMEMBER'),
				'SESSIONKODE' => service('request')->getPost('SESSIONKODE'),
				'SATPAMTRX' => service('request')->getPost('SATPAMTRX'),
			];
		}else if (service('request')->getPost('KONDISI') == "CEKID"){
			$routernodejs = "acipay/cekvalidasitujuan";
			$datapost = [
				'CMD' => service('request')->getPost('KONDISI'),
				'TUJUAN' => service('request')->getPost('TUJUAN'),
				'IDSERVER' => service('request')->getPost('IDSERVER'),
			];
		}else if (service('request')->getPost('KONDISI') == "CEKTAGIHAN"){
			$routernodejs = "acipay/cektagihan";
			$datapost = [
				'CMD' => service('request')->getPost('KONDISI'),
				'SKUKODE' => service('request')->getPost('SKUKODE'),
				'IDSERVER' => service('request')->getPost('IDSERVER'),
				'TUJUAN' => service('request')->getPost('TUJUAN'),
				'REFID' => service('request')->getPost('REFID'),
			];
		}else{
			$routernodejs = "acipay/transaksikedealer";
			$datapost = [
				'KONDISI' => service('request')->getPost('KONDISI'),
				'PREFIX' => service('request')->getPost('PREFIX'),
				'IDPRODUK' => service('request')->getPost('IDPRODUK'),
				'PENCARIANPRODUK' => service('request')->getPost('PENCARIANPRODUK'),
			];
		}
		$json_data = $client->request("POST", BASEURLAPI.$routernodejs, [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		$arrne = [['csrfName' => csrf_token()],['csrfHash' => csrf_hash()]];
		$jsonbaru = array_merge($datajson->hasiljson, $arrne);
		return json_encode($jsonbaru);
	}
	public function cektransaksi(){
		if ($this->session->get("kodeunikmember") == ""){
			return redirect()->to('/auth');
		}
		$client = \Config\Services::curlrequest();
		$datapost = [
			'IDSERVER' => service('request')->getPost('IDSERVER'),
			'TRANSKASI_ID' => service('request')->getPost('TRANSKASI_ID'),
			'TUJUAN' => service('request')->getPost('TUJUAN'),
			'KODEPRODUK' => service('request')->getPost('KODEPRODUK'),
		];
		$json_data = $client->request("POST", BASEURLAPI."penjualan/cektransaksi", [
			"headers" => [
				"Accept" => "application/json",
				"Authorization" => "Bearer ".TOKENAPI,
			],
			"form_params" => $datapost
		]);
		$datajson = json_decode($json_data->getBody());
		$arrne = [['csrfName' => csrf_token()],['csrfHash' => csrf_hash()]];
		$jsonbaru = array_merge($datajson->hasiljson, $arrne);
		return json_encode($jsonbaru);
	}
}