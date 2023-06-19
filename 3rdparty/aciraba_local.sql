/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 100427
 Source Host           : localhost:3306
 Source Schema         : aciraba_local

 Target Server Type    : MySQL
 Target Server Version : 100427
 File Encoding         : 65001

 Date: 03/05/2023 15:33:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for 01_tms_keranjang
-- ----------------------------
DROP TABLE IF EXISTS `01_tms_keranjang`;
CREATE TABLE `01_tms_keranjang`  (
  `AI` int(12) NOT NULL AUTO_INCREMENT,
  `BARANG_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `NAMA_BARANG` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `QTY` double(30, 2) NOT NULL,
  `HARGA_JUAL` double(30, 2) NOT NULL,
  `HARGA_BELI` double(30, 2) NOT NULL,
  `POTONGANGLOBAL` double(15, 2) NOT NULL,
  `DARIPERUSAHAAN` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `KETERANGAN` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `APAKAHVARIAN` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `STOKDAPATMINUS` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `JSONTAMBAHAN` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `CATATANPERBARANG` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `BRAND_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `PRINCIPAL_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `HARGAASLI` double(30, 2) NOT NULL,
  `HARGAASLISEMENTARA` double(30, 2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`AI`) USING BTREE,
  UNIQUE INDEX `BARANG_ID`(`BARANG_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for 01_tms_keranjang_barangmasuk
-- ----------------------------
DROP TABLE IF EXISTS `01_tms_keranjang_barangmasuk`;
CREATE TABLE `01_tms_keranjang_barangmasuk`  (
  `AI` int(12) NOT NULL AUTO_INCREMENT,
  `KODEBARANG` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `NAMABARANG` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `STOKSEBELUM` double(30, 2) NOT NULL,
  `JUMLAHBELI` double(30, 2) NOT NULL,
  `DISPLAY` double(30, 2) NOT NULL,
  `GUDANG` double(30, 2) NOT NULL,
  `HARGASUPLIER` double(30, 2) NOT NULL,
  `EXP` date NOT NULL,
  `SUBTOTAL` double(30, 2) NOT NULL,
  `DISKON1` double(30, 2) NOT NULL,
  `DISKON2` double(30, 2) NOT NULL,
  `PPN` double(30, 2) NOT NULL,
  `ADISKON1` double(30, 2) NOT NULL,
  `ADISKON2` double(30, 2) NOT NULL,
  `SUBTOTALHPP` double(30, 2) NOT NULL,
  `HPP` double(30, 2) NOT NULL,
  `BEBANGAJI` double(30, 2) NOT NULL,
  `BEBANPROMO` double(30, 2) NOT NULL,
  `BEBANPACKING` double(30, 2) NOT NULL,
  `BEBANTRANSPORT` double(30, 2) NOT NULL,
  `HPPBEBAN` double(30, 2) NOT NULL,
  PRIMARY KEY (`AI`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for 01_tms_keranjang_pending
-- ----------------------------
DROP TABLE IF EXISTS `01_tms_keranjang_pending`;
CREATE TABLE `01_tms_keranjang_pending`  (
  `AI` int(12) NOT NULL AUTO_INCREMENT,
  `BARANG_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `NAMA_BARANG` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `QTY` double(30, 2) NOT NULL,
  `HARGA_JUAL` double(30, 2) NOT NULL,
  `HARGA_BELI` double(30, 2) NOT NULL,
  `POTONGANGLOBAL` double(15, 2) NOT NULL,
  `DARIPERUSAHAAN` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `KETERANGAN` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `APAKAHVARIAN` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `STOKDAPATMINUS` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `JSONTAMBAHAN` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `CATATANPERBARANG` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `BRAND_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `PRINCIPAL_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `HARGAASLI` double(30, 2) NOT NULL,
  `HARGAASLISEMENTARA` double(30, 2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`AI`) USING BTREE,
  UNIQUE INDEX `BARANG_ID`(`BARANG_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for 01_trs_mutasibarang_detail
-- ----------------------------
DROP TABLE IF EXISTS `01_trs_mutasibarang_detail`;
CREATE TABLE `01_trs_mutasibarang_detail`  (
  `AI` int(12) NOT NULL AUTO_INCREMENT,
  `NOMORMUTASI` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `KODEBARANG` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `NAMABARANG` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `UNIT` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `STOKAWAL` double(30, 2) NOT NULL,
  `STOKMUTASI` double(30, 2) NOT NULL,
  `NOMINAL` double(30, 2) NOT NULL,
  `ASALOUTLET` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `TUJUANOUTLET` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `ASALLOKASIITEM` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `TUJUANLOKASIITEM` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'NON',
  `OUTLET` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `KODEUNIKMEMBER` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`AI`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for 01_trs_opname_detail
-- ----------------------------
DROP TABLE IF EXISTS `01_trs_opname_detail`;
CREATE TABLE `01_trs_opname_detail`  (
  `AI` int(12) NOT NULL AUTO_INCREMENT,
  `NOTAOPNAME` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `KODEBARANG` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `NAMABARANG` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `LOKASIOPNAME` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `STOKKOMPUTER` double(30, 2) NOT NULL,
  `STOKOPNAME` double(30, 2) NOT NULL,
  `KONDISIOPNAME` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `OUTLET` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `KODEUNIKMEMBER` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `HPP` decimal(30, 2) NOT NULL,
  `INFORMASI` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`AI`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for 01_trs_returpembelian_detail
-- ----------------------------
DROP TABLE IF EXISTS `01_trs_returpembelian_detail`;
CREATE TABLE `01_trs_returpembelian_detail`  (
  `AI` int(12) NOT NULL AUTO_INCREMENT,
  `NOTRXRETURBELI` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `NOTRXPEMBELIAN` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `KODEBARANG` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `NAMABARANG` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `JUMLAHBELI` decimal(30, 2) NOT NULL,
  `JUMLAHRETUR` decimal(30, 2) NOT NULL,
  `HARGABELI` decimal(30, 2) NOT NULL,
  `POTONGAN` decimal(30, 2) NOT NULL DEFAULT 0,
  `PPN` decimal(30, 2) NOT NULL,
  `ASALOUTLET` varchar(11) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `ASALLOKASI` varchar(11) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `KETERANGAN` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `JENISTRX` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `KODEUNIKMEMBER` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `OUTLET` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`AI`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for 01_trs_returpenjualan_detail
-- ----------------------------
DROP TABLE IF EXISTS `01_trs_returpenjualan_detail`;
CREATE TABLE `01_trs_returpenjualan_detail`  (
  `AI` int(12) NOT NULL AUTO_INCREMENT,
  `NOTRXRETUR` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `NOTRXPENJUALAN` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `KODEBARANG` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `NAMABARANG` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `JUMLAHBELI` double(30, 2) NOT NULL,
  `JUMLAHRETUR` double(30, 2) NOT NULL,
  `HARGABELI` decimal(30, 2) NOT NULL,
  `HARGAJUAL` decimal(30, 2) NOT NULL,
  `PPN` decimal(30, 2) NOT NULL,
  `TUJUANOUTLET` varchar(15) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `TUJUANLOKASISSTOK` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `KETERANGAN` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `JENISTRX` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `OUTLET` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL DEFAULT 'TUNAI',
  `KODEUNIKMEMBER` varchar(45) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`AI`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
