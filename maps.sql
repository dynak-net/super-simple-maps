DROP TABLE IF EXISTS `points`;
CREATE TABLE `points` (
  `id` int(11) NOT NULL,
  `name` varchar(16) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `info` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `points` WRITE;
INSERT INTO `points` VALUES (1,'WroTest',51,17,'test test test');
UNLOCK TABLES;
