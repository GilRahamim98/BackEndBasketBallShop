-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: onlineshop
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `birth_day` datetime NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `street` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `register_date` datetime NOT NULL,
  `password` char(64) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_name_UNIQUE` (`user_name`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Noam','Miko','2001-02-02 00:00:00','Noam02','noammiko23@gmail.com','0525381648','Golmb 23','Holon','2022-06-02 00:00:00','$2b$10$njLEgGT91SwQhoDyYSNeaOUjiQaPxAPLenX0UtHxgV7PB3US.Rx2O'),(2,'Asaf','Dona','1997-10-13 00:00:00','Amiti','amitmit@gmail.com','0504632897','Rakefet 7','Haifa','2022-05-01 00:00:00','$2b$10$RobVJisKnCkjINg8sftpIuUswqxJ12vGZwtrI8aj6xuPr2gaKvibC'),(3,'Dana','Modan','2000-01-03 00:00:00','Dana45','dandan@gmail.com','0525381622','Roze 4','Ashdod','2022-05-07 00:00:00','$2b$10$vKhEoX0NZczqhlznJaFaDut0UGDxobqOeL8C4IAo6xviCFsWDSrdK'),(4,'Rozi','Haviv','1993-07-01 00:00:00','Roza','rozrozi@gmail.com','0525381742','Vered 7','Eilat','2022-06-07 00:00:00','$2b$10$/zCqflMZDyajvCtNInI4..0DZjGSZsndj6cvHuVhsIJjHvsZyAbIG'),(22,'Koli','Alma','2001-01-02 00:00:00','Armani23','mima@gmail.com','0589632566','Herzog 72','Tel Aviv','2022-09-11 18:53:28','$2b$10$xVHDCvzU5nMt01uWIytQIudz1/V/MSLmTPaJq7cqy.nQ/wRWGEWSm'),(23,'George','Miko','1965-07-12 00:00:00','georgeM','gegi@gmail.com','0532699854','Givati 78','Holon','2022-09-11 18:55:12','$2b$10$o3VGU7qzpogL7B/4G9w49OWUfNoQU2N/NluJG1dQmDBOthWBYcEWO');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-21 16:38:31
