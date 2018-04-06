/*
Navicat MySQL Data Transfer

Source Server         : docker-mysql
Source Server Version : 50626
Source Host           : localhost:3309
Source Database       : ttc

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2018-04-06 16:31:09
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `g_articles`
-- ----------------------------
DROP TABLE IF EXISTS `g_articles`;
CREATE TABLE `g_articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of g_articles
-- ----------------------------

-- ----------------------------
-- Table structure for `g_slide`
-- ----------------------------
DROP TABLE IF EXISTS `g_slide`;
CREATE TABLE `g_slide` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  `content` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of g_slide
-- ----------------------------

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'doan nguyen', 'doangatesvnn93@gmail.com', '$2y$10$KIoZqDlAqYS4gjOEL7qpw.rRdZ6A47lEh0QCZIONsyMCCpoLLHwRq', null, null, 'Zrfxg3QQ9zWh1GpaHrwrzhnfHWoodVq4o6bYrup3OL6Q05nujZSGcT5iKSsv', '2018-03-15 11:50:23', '2018-03-15 11:50:23');
