/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : admin

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-11 14:51:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'demo', 'd25ae6fb20bc8f1ef4dfd88f895b9e14');
INSERT INTO `users` VALUES ('2', 'demo2', 'd25ae6fb20bc8f1ef4dfd88f895b9e14');
INSERT INTO `users` VALUES ('3', 'demo3', 'd25ae6fb20bc8f1ef4dfd88f895b9e14');
INSERT INTO `users` VALUES ('4', 'demo4', 'd25ae6fb20bc8f1ef4dfd88f895b9e14');
INSERT INTO `users` VALUES ('5', 'demo5', 'd25ae6fb20bc8f1ef4dfd88f895b9e14');
INSERT INTO `users` VALUES ('6', 'demo6', 'd25ae6fb20bc8f1ef4dfd88f895b9e14');
INSERT INTO `users` VALUES ('7', 'demo7', 'd25ae6fb20bc8f1ef4dfd88f895b9e14');
INSERT INTO `users` VALUES ('8', 'demo8', 'd25ae6fb20bc8f1ef4dfd88f895b9e14');
