/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 10/01/2022 15:47:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `user_id` int(0) NULL DEFAULT NULL,
  `product_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `status` int(0) NULL DEFAULT NULL,
  `order_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_time` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (1, 10001, '苹果', 2.60, 1, 'DD-20210720-0018', NULL);
INSERT INTO `orders` VALUES (2, 10005, '香蕉', 10.00, 2, 'DD-20220106-0001', NULL);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `user_id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '123456',
  `age` int(0) NULL DEFAULT NULL,
  `sex` tinyint(1) NULL DEFAULT 1,
  `face` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `other` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `create_time` bigint(0) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10020 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (10001, '孙权', '123456', 18, 1, 'https://i2.hdslb.com/bfs/face/a143f44d3ab7a226de9c506cb1930a60ecb121c1.jpg@96w_96h_1c_1s.webp', '', 1641550942859);
INSERT INTO `user` VALUES (10005, '庞德', '123456', 99, 1, 'https://i2.hdslb.com/bfs/face/a143f44d3ab7a226de9c506cb1930a60ecb121c1.jpg@96w_96h_1c_1s.webp', NULL, 1641550942859);
INSERT INTO `user` VALUES (10018, '列宁', '123456', 21, 1, NULL, NULL, 1641551180844);
INSERT INTO `user` VALUES (10019, '宋江', '123456', 45, 1, 'https://i2.hdslb.com/bfs/face/a143f44d3ab7a226de9c506cb1930a60ecb121c1.jpg@96w_96h_1c_1s.webp', NULL, 1641779464557);

SET FOREIGN_KEY_CHECKS = 1;
