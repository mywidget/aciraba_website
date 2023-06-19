<?php

namespace App\Controllers;

class Akuntansi extends BaseController
{
    protected $session,$breadcrumb,$sidetitle = "Akuntansi";
	function __construct()
    {
		$this->session = \Config\Services::session();
        $this->session->start();
		if ($this->session->get("kodeunikmember") == ""){
			header('Location: '.base_url().'auth');
			exit(); 
		}
    }
	/* area algoritma kode akun akuntansi */
	public function kodeakunakuntansi()
	{
		$this->breadcrumb  = array( 
			"Kode Akun Akuntansi" => base_url()."akutansi/kodeakunakuntansi",
		);
		$data = [
			"titleheader"=>"DAFTAR KODE AKUN AKUNTANSI",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
		];
		return view('backend/akuntansi/kontendaftarkodeakunakuntansi',$data);
	}
    /* area algoritma kode akun akuntansi */
	public function depositmember()
	{
		$this->breadcrumb  = array( 
			"Deposit Member" => base_url()."akutansi/depositmember",
		);
		$data = [
			"titleheader"=>"DAFTAR DEPOSIT MEMBER",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
		];
		return view('backend/akuntansi/kontendaftardepositmember',$data);
	}
    /* area algoritma daftar jurnal */
	public function daftarjurnal()
	{
		$this->breadcrumb  = array( 
			"Daftar Jurnal" => base_url()."akutansi/daftarjurnal",
		);
		$data = [
			"titleheader"=>"DAFTAR JURNAL AKUNTANSI",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
		];
		return view('backend/akuntansi/kontendaftarjurnal',$data);
	}
    /* area algoritma setting perkiraan */
	public function daftarperkiraan()
	{
		$this->breadcrumb  = array( 
			"Daftar Perkiraan" => base_url()."akutansi/daftarperkiraan",
		);
		$data = [
			"titleheader"=>"DAFTAR PERKIAAN AKUNTANSI",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
		];
		return view('backend/akuntansi/kontendaftarsettingperkiraan',$data);
	}
    /* area algoritma setting perkiraan */
	public function daftarsaldoawalperkiraan()
	{
		$this->breadcrumb  = array( 
			"Daftar Sawal Perkiraan" => base_url()."akutansi/daftarsaldoawalperkiraan",
		);
		$data = [
			"titleheader"=>"DAFTAR SALDO AWAL PERKIRAAN",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
		];
		return view('backend/akuntansi/kontendaftarsettingperkiraan',$data);
	}
    /* area algoritma saldo awal hutang */
	public function daftarsaldoawalhutang()
	{
		$this->breadcrumb  = array( 
			"Daftar Sawal Hutang" => base_url()."akutansi/daftarsaldoawalhutang",
		);
		$data = [
			"titleheader"=>"DAFTAR SALDO AWAL HUTANG",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
		];
		return view('backend/akuntansi/kontendaftarsaldoawalhutang',$data);
	}
    /* area algoritma setting perkiraan */
	public function daftarsaldoawalpiutang()
	{
		$this->breadcrumb  = array( 
			"Daftar Sawal Piutang" => base_url()."akutansi/daftarsaldoawalpiutang",
		);
		$data = [
			"titleheader"=>"DAFTAR SALDO AWAL PIUTANG",
			"breadcrumb"=>$this->breadcrumb,
            "sidetitle" => $this->sidetitle,
		];
		return view('backend/akuntansi/kontendaftarsaldoawalpiutang',$data);
	}
}