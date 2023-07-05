<?php

namespace App\Helpers;

use CodeIgniter\Controller;

class HakAksesHelper extends Controller
{
    private $kondisimenu;
    private $hakakses;
    private $session;

    public function __construct($kondisimenu, $hakakses, $session)
    {
        $this->kondisimenu = $kondisimenu;
        $this->hakakses = $hakakses;
        $this->session = $session;
    }

    public function checkPermission()
    {
        if ($this->searchForMenu($this->kondisimenu, $this->hakakses->menuakses) == "0" && $this->session->get("hakakses") != "OWNER") {
            return false;
        }
        return true;
    }

    private function searchForMenu($id, $array) {
        foreach ($array as $key => $val) {
            if ($val->menuke === $id) {
                return $val->status;
            }
        }
        return false;
    }
    
}
