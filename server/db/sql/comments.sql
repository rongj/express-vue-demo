/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : admin

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-05-03 20:30:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for comments
-- ----------------------------
DROP TABLE IF EXISTS `comments`;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) NOT NULL,
  `c_content` varchar(255) NOT NULL,
  `c_user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of comments
-- ----------------------------
INSERT INTO `comments` VALUES ('1', '1', '哈哈哈', '5');
INSERT INTO `comments` VALUES ('2', '2', '恩恩额', '6');
INSERT INTO `comments` VALUES ('3', '3', '啦啦啦', '5');
INSERT INTO `comments` VALUES ('4', '2', '来来来', '4');
INSERT INTO `comments` VALUES ('5', '2', '啧啧额', '5');
INSERT INTO `comments` VALUES ('6', '3', '急急急', '6');
INSERT INTO `comments` VALUES ('7', '2', '嘤嘤嘤', '6');
