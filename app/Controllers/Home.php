<?php

namespace App\Controllers;

class Home extends BaseController
{
	protected $session,$sidetitle = "BERANDA";
	function __construct()
    {
		$this->session = \Config\Services::session();
        $this->session->start();
		if ($this->session->get("kodeunikmember") == ""){
			header('Location: '.base_url().'auth');
			exit(); 
		}
    }
	public function index()
	{
		if ($this->session->get("jenismerchant") != "OW" && $this->session->get("jenismerchant") != "ADM"){
			header('Location: '.base_url().'auth/area403/');
			exit(); 
		}
		$this->breadcrumb  = array( "Dashboard" => "home",);
		$data = [
			"titleheader"=>"DASHBORD REPORT",
			"menuaktif" => "0",
			"submenuaktif" => "0",
			"breadcrumb"=>$this->breadcrumb,
			"sidetitle" => $this->sidetitle,
			"tutup_notif_koneksi" => $this->sidetitle,
			"lic_response" => $this->session->get("lic_response"),
			
		];
		return view('backend/dashboard/kontendashboard',$data);
	}
}
