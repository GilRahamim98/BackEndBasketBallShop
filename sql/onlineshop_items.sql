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
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(45) NOT NULL,
  `category_id` int NOT NULL,
  `description` varchar(300) NOT NULL,
  `units_in_stock` smallint NOT NULL,
  `unit_price` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Spalding Basketball',1,'Spalding Basketball Indoor Outdoor Nba Wear-resistant Competition  Basketball Equipment Basket ball',100,200),(2,'Michael Jordan Jersey',2,'AUTHENTIC JERSEY CHICAGO BULLS 95 -MICHAEL JORDAN',100,300),(3,'Air Jordan XXXVI',3,'The Air Jordan XXXVI isn\'t just the next shoe up in the iconic franchise, it\'s an expression of the drive and energy that sparked a basketball revolution.It\'s one of the lightest Air Jordan game shoes to date, featuring minimal but durable Leno-Weave upper reinforced with a TPU ribbon',150,400),(4,'LeBron 19',3,'LeBron plays less in the paint and more at the point, so it makes sense that he wants to feel a little quicker. His 19th signature gives you the feeling of containment but with a lighter design that\'s ideal for fast, strong players like LeBron who stretch the court.',199,350),(5,'Kobe Bryant Jersey',2,'Los Angeles Lakers Kobe Bryant 2009 Authentic Jersey By Mitchell & Ness - No.24 - Yellow - Mens',119,270),(6,'Wilson Basketball',1,'NBA OFFICIAL GAME BASKETBALL',80,210),(7,'LeBron James Jersey',2,'Men\'s Cleveland Cavaliers LeBron James Mitchell & Ness Wine Big & Tall Hardwood Classics Swingman Jersey',136,140),(8,'Jordan Basketball',1,'Basketballs Jordan Legacy 8P Size 7 Game Day',130,220),(9,'Giannis Immortality 2',3,'Morph into all-timer with the Giannis Immortality 2. A plush foam package combined with a more focused fit in the midfoot in a super lightweight design means you can maintain a high level of intensity and focus when victory hangs in the balance—just like Giannis in the clutch.',148,85);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-21 16:38:30
