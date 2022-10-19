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
-- Table structure for table `order_details`
--

DROP TABLE IF EXISTS `order_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_details` (
  `order_id` int NOT NULL,
  `item_id` int NOT NULL,
  `quantity` smallint NOT NULL,
  `unit_price` double NOT NULL,
  PRIMARY KEY (`order_id`,`item_id`),
  KEY `item_id_idx` (`item_id`),
  CONSTRAINT `` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_details`
--

LOCK TABLES `order_details` WRITE;
/*!40000 ALTER TABLE `order_details` DISABLE KEYS */;
INSERT INTO `order_details` VALUES (1,1,4,200),(1,2,2,300),(2,1,3,200),(2,3,5,400),(3,3,1,400),(3,4,3,350),(3,7,1,140),(4,4,3,350),(4,6,4,210),(4,7,2,140),(5,1,2,200),(5,2,3,300),(5,3,1,400),(5,6,3,210),(6,1,3,200),(6,2,2,300),(6,3,1,400),(6,4,2,350),(6,5,1,270),(6,6,1,210),(6,7,1,140),(7,6,5,210),(8,1,4,200),(8,3,1,400),(8,5,6,270),(8,8,3,220),(9,1,9,200),(9,2,1,300),(9,3,1,400),(9,4,1,350),(9,5,5,270),(9,6,1,210),(9,7,1,140),(9,8,1,220),(10,1,3,200),(10,2,1,300),(11,1,1,200),(11,2,1,300),(12,1,1,200),(12,4,1,350),(13,4,1,350),(13,8,1,220),(14,1,3,200),(14,6,2,210),(14,9,1,85),(30,4,1,350),(31,2,1,300),(31,3,1,400),(31,4,1,350),(32,1,1,200),(32,4,1,350),(32,5,1,270),(32,7,4,140),(32,9,2,85),(33,3,1,400),(33,4,1,350),(34,9,1,85),(35,1,1,200),(36,1,2,200),(37,1,2,200),(38,6,10,210),(39,1,1,200),(39,6,5,210),(40,5,5,270),(40,7,1,140),(40,9,1,85),(41,3,1,400);
/*!40000 ALTER TABLE `order_details` ENABLE KEYS */;
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
