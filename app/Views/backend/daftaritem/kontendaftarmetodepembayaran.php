<?= $this->extend('backend/main'); ?>
<?= $this->section('kontenutama'); ?>
<?= $this->include('backend/header') ?>
<!-- BEGIN Page Content -->
<div class="content">
    <div class="container-fluid">
        <div class="row align-items-center mb-3">
            <div class="col-md-6">
                <div class="portlet mb-3">
                    <div class="portlet-body">
                        <!-- BEGIN Widget -->
                        <div class="widget16">
                            <div class="widget16-display">
                                <div class="widget16-content">
                                    <div class="widget16-title">SALDO ACIPAY</div>
                                    <div class="widget16-subtitle">0 IDR</div>
                                </div>
                                <div class="widget16-addon">
                                    <button class="btn btn-label-primary btn-icon btn-lg">
                                        <i class="fa fa-chart-pie"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="widget16-list">
                                <div class="widget16-list-item">
                                    <span class="widget16-list-data">Profits (7d)</span>
                                    <span class="widget16-list-value">
                                        <strong>0</strong> IDR <span class="text-success">
                                            <i class="fa fa-caret-up"></i>0% </span>
                                    </span>
                                </div>
                                <div class="widget16-list-item">
                                    <span class="widget16-list-data">Deposit in orders</span>
                                    <span class="widget16-list-value">0 IDR</span>
                                </div>
                            </div>
                            <div class="widget16-action">
                                <button class="btn btn-primary btn-widest mr-2">Deposit</button>
                                <button class="btn btn-outline-secondary btn-widest">Withdraw</button>
                            </div>
                        </div>
                        <!-- END Widget -->
                    </div>
                </div>
            </div>
            <div class="col-md-6 text-right">
                <input type="text" class="form-control" id="kodesatuan" placeholder="Masukan untuk melakukan penyaringan data tersedia">
                <hr>
                <p align="justify">Dengan saldo acipay anda dapat melakukan transaksi pembelian dengan partner kami sebagai bahan baku anda. Harga yang kami tawarkan adalah harga bersaing jadi anda tidak perlu khawatir dengan margin anda . Saldo pada aciraba POS akan tersinkron dengan <a herf="javascript:void(0)">ACIPAY</a> jadi anda dapat melakukan pencarian ke rekening pribadi anda sendiri. Tenang anda dapat melakukan gratis tarik sebesar 10x dalam 1 bulan jika anda menggunakan jasa REKBER ACIPAY</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="wallet-col-sm-2 wallet-col-md-3">
                    <!-- BEGIN Portlet -->
                    <div class="portlet">
                        <div class="portlet-header">
                            <div class="portlet-icon">
                            <i class="fa fa-wallet"></i>
                            </div>
                            <h4 class="portlet-title">BCA [Bank Central Asia]</h4>
                            <div class="portlet-addon">
                                <!-- BEGIN Dropdown -->
                                <div class="dropdown">
                                    <button class="btn btn-text-secondary btn-icon" data-toggle="dropdown">
                                        <i class="fa fa-ellipsis-v"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                        <a href="#" class="dropdown-item">Details</a>
                                        <a href="#" class="dropdown-item">Edit</a>
                                        <a href="#" class="dropdown-item">Delete</a>
                                    </div>
                                </div>
                                <!-- END Dropdown -->
                            </div>
                        </div>
                        <div class="portlet-body py-4">
                            <h3 class="mb-0 ml-1">
                                <span class="text-level-2">0</span> IDR
                            </h3>
                            <p class="mb-0 ml-1">Nomor : 08233199482332</p>
                            <p class="mb-0 ml-1">A.N : Mochamad Aries Setyawan</p>
                        </div>
                        <div class="portlet-footer">
                            <button class="btn btn-success mr-2">
                                <i class="fa fa-check mr-2"></i>Trx Online</button>
                            <button class="btn btn-success mr-2">
                                <i class="fa fa-check mr-2"></i>Trx Offline</button>
                            <button class="btn btn-flat-primary">
                                <i class="fa fa-long-arrow-alt-right mr-2"></i>Mutasi</button>
                        </div>
                    </div>
                    <!-- END Portlet -->
                    <!-- BEGIN Portlet -->
                    <div class="portlet">
                        <div class="portlet-header">
                            <div class="portlet-icon">
                                <i class="fa fa-wallet"></i>
                            </div>
                            <h4 class="portlet-title">BRI [Bank Rakyat Indonesia]</h4>
                            <div class="portlet-addon">
                                <!-- BEGIN Dropdown -->
                                <div class="dropdown">
                                    <button class="btn btn-text-secondary btn-icon" data-toggle="dropdown">
                                        <i class="fa fa-ellipsis-v"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                        <a href="#" class="dropdown-item">Details</a>
                                        <a href="#" class="dropdown-item">Edit</a>
                                        <a href="#" class="dropdown-item">Delete</a>
                                    </div>
                                </div>
                                <!-- END Dropdown -->
                            </div>
                        </div>
                        <div class="portlet-body py-4">
                            <h3 class="mb-0 ml-1">
                                <span class="text-level-2">0</span> IDR
                            </h3>
                            <p class="mb-0 ml-1">Nomor : 08233199482332</p>
                            <p class="mb-0 ml-1">A.N : Mochamad Aries Setyawan</p>
                        </div>
                        <div class="portlet-footer">
                        <button class="btn btn-danger mr-2">
                                <i class="fa fa-times mr-2"></i>Trx Online</button>
                            <button class="btn btn-success mr-2">
                                <i class="fa fa-check mr-2"></i>Trx Offline</button>
                            <button class="btn btn-flat-primary">
                                <i class="fa fa-long-arrow-alt-right mr-2"></i>Mutasi</button>
                        </div>
                    </div>
                    <!-- END Portlet -->
                    <!-- BEGIN Portlet -->
                    <div class="portlet">
                        <div class="portlet-header">
                            <div class="portlet-icon">
                                <i class="fa fa-wallet"></i>
                            </div>
                            <h4 class="portlet-title">BNI [Bank Negara Indonesia]</h4>
                            <div class="portlet-addon">
                                <!-- BEGIN Dropdown -->
                                <div class="dropdown">
                                    <button class="btn btn-text-secondary btn-icon" data-toggle="dropdown">
                                        <i class="fa fa-ellipsis-v"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                        <a href="#" class="dropdown-item">Details</a>
                                        <a href="#" class="dropdown-item">Edit</a>
                                        <a href="#" class="dropdown-item">Delete</a>
                                    </div>
                                </div>
                                <!-- END Dropdown -->
                            </div>
                        </div>
                        <div class="portlet-body py-4">
                            <h3 class="mb-0 ml-1">
                                <span class="text-level-2">0</span> IDR
                            </h3>
                            <p class="mb-0 ml-1">Nomor : 08233199482332</p>
                            <p class="mb-0 ml-1">A.N : Mochamad Aries Setyawan</p>
                        </div>
                        <div class="portlet-footer">
                            <button class="btn btn-danger mr-2">
                                <i class="fa fa-times mr-2"></i>Trx Online</button>
                            <button class="btn btn-success mr-2">
                                <i class="fa fa-check mr-2"></i>Trx Offline</button>
                            <button class="btn btn-flat-primary">
                                <i class="fa fa-long-arrow-alt-right mr-2"></i>Mutasi</button>
                        </div>
                    </div>
                    <!-- END Portlet -->
                    <!-- BEGIN Portlet -->
                    <div class="portlet">
                        <div class="portlet-header">
                            <div class="portlet-icon">
                                <i class="fa fa-wallet"></i>
                            </div>
                            <h4 class="portlet-title">Q-RIS [Quick Response Code Indonesian Standard]</h4>
                            <div class="portlet-addon">
                                <!-- BEGIN Dropdown -->
                                <div class="dropdown">
                                    <button class="btn btn-text-secondary btn-icon" data-toggle="dropdown">
                                        <i class="fa fa-ellipsis-v"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                        <a href="#" class="dropdown-item">Details</a>
                                        <a href="#" class="dropdown-item">Edit</a>
                                        <a href="#" class="dropdown-item">Delete</a>
                                    </div>
                                </div>
                                <!-- END Dropdown -->
                            </div>
                        </div>
                        <div class="portlet-body py-4">
                            <h3 class="mb-0 ml-1">
                                <span class="text-level-2">0</span> IDR
                            </h3>
                            <p class="mb-0 ml-1">Nomor : 08233199482332</p>
                            <p class="mb-0 ml-1">A.N : Mochamad Aries Setyawan</p>
                        </div>
                        <div class="portlet-footer">
                            <button class="btn btn-danger mr-2">
                                <i class="fa fa-times mr-2"></i>Trx Online</button>
                            <button class="btn btn-success mr-2">
                                <i class="fa fa-check mr-2"></i>Trx Offline</button>
                            <button class="btn btn-flat-primary">
                                <i class="fa fa-long-arrow-alt-right mr-2"></i>Mutasi</button>
                        </div>
                    </div>
                    <!-- END Portlet -->
                    <!-- BEGIN Portlet -->
                    <div class="portlet widget17">
                        <div class="portlet-body">
                            <!-- BEGIN Avatar -->
                            <div class="avatar avatar-label-primary avatar-circle avatar-lg mb-3">
                                <div class="avatar-display">
                                    <i class="fa fa-plus"></i>
                                </div>
                            </div>
                            <!-- END Avatar -->
                            <h5 class="text-level-3">Add Metode Pembayaran</h5>
                            <p class="text-level-1 mb-0">Kami akan berupaya untuk menambahkan tambahan metode pembayaran untuk anda.</p>
                        </div>
                    </div>
                    <!-- END Portlet -->
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END Page Content -->
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
<script type="text/javascript">
    $(document).ready(function () {
        $("#datatable-1").DataTable({
            scrollCollapse: true,
            scrollY: "50vh",
            scrollX: true
        });
    });
</script>
<?= $this->endSection(); ?>