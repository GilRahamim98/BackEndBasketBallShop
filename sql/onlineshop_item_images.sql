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
-- Table structure for table `item_images`
--

DROP TABLE IF EXISTS `item_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `item_id` int NOT NULL,
  `image_src` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_images`
--

LOCK TABLES `item_images` WRITE;
/*!40000 ALTER TABLE `item_images` DISABLE KEYS */;
INSERT INTO `item_images` VALUES (1,2,'https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_4314000/ff_4314197-2cff4f0ba5d784106a71_full.jpg&w=340'),(2,2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmOSHQPoCYBd5AziH_i_zwirGtuVZO1sAclAfxZu1cmX5w90FT8-UGRddH2zj-MiQdqQ&usqp=CAU'),(3,2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WoyqszNnvrFuLJmZ-PT6Ak190hB0MsNxv7XNkKKblHEyeMDqlm8pSU56MxhVo-fT7SE&usqp=CAU'),(4,1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwEC8YLmHJBeLr96tBttrvo-WL8yWYhlRkduQ35YG6DGXSOLCCbKNkNyfG5VuBbzFFwc&usqp=CAU'),(5,1,'https://cdn.shopify.com/s/files/1/0249/0122/2485/products/product-image-1148630946_700x700.jpg?v=1631992572'),(6,1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ssyYuHOc9VFxi3ObFp5np0L6mqFQ5jdDjY1wd5FkrF7Ry1Fi9I4RGZeYGFUgWZ5qUXo&usqp=CAU'),(7,3,'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/978f5e8a-3753-4950-8174-723b309b6e6c/air-jordan-xxxvi-low-basketball-shoes-nJBBHH.png'),(8,3,'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/72d2a488-a065-47a1-bf66-e8adfe0ba1f7/air-jordan-xxxvi-low-mens-basketball-shoes-LgcvQl.png'),(9,3,'https://cdn.shopify.com/s/files/1/0267/9232/9325/products/DH0833-660-3_620x.jpg?v=1655315807'),(10,4,'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/465ab10b-d24f-4d78-98eb-f94db71fbdbd/lebron-19-basketball-shoes-Tshbtg.png'),(11,4,'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/58ae40db-4bab-441a-ba47-0c1ac4755654/lebron-19-basketball-shoes-Tshbtg.png'),(12,4,'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c13adec0-4806-4540-b499-66952d851ad7/lebron-19-basketball-shoes-Tshbtg.png'),(13,5,'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-kobe-bryant-2009-authentic-jersey-by-mitchell-and-ness-no24-yellow-mens_ss4_p-12014198+pv-1+u-13sy2v8dmdc66geobhgc+v-0669bfab90af45e49ec96bad1d0c4743.jpg?_hv=2&w=900'),(14,5,'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-kobe-bryant-2009-authentic-jersey-by-mitchell-and-ness-no24-yellow-mens_ss4_p-12014198+pv-2+u-13sy2v8dmdc66geobhgc+v-7d707c0889314c8cb7de3cf9b054ca6a.jpg?_hv=2&w=900'),(15,5,'https://images.footballfanatics.com/los-angeles-lakers/los-angeles-lakers-kobe-bryant-2009-authentic-jersey-by-mitchell-and-ness-no24-yellow-mens_ss4_p-12014198+u-13sy2v8dmdc66geobhgc+v-24e8cdafff6e45d99dea971493ebad59.jpg?_hv=2&w=900'),(16,6,'https://www.wilson.com/en-us/media/catalog/product/6/b/6b10c76e-ea03-4a5c-b47d-2caae8da68e1_wughya1pnbhvcyev.png?dpr=1&fit=bounds&orient=1&quality=95&optimize=high&format=pjpg&auto=webp&enable=upscale&width=272&height=332&canvas=272%2C332&bg-color=f5f5f5'),(17,6,'https://www.wilson.com/en-us/media/catalog/product/5/d/5d64b2f7-23f9-4ee9-acbf-49a3b7e2b0de_2dqr4ceybc1xprtd.png?dpr=1&fit=bounds&orient=1&quality=95&optimize=high&format=pjpg&auto=webp&enable=upscale&width=272&height=332&canvas=272%2C332&bg-color=f5f5f5'),(18,6,'https://www.wilson.com/en-us/media/catalog/product/7/a/7ad3c15b-60e5-4138-b906-2598c70b85b1_kyjbe5y2ddewidfu.png?dpr=1&fit=bounds&orient=1&quality=95&optimize=high&format=pjpg&auto=webp&enable=upscale&width=272&height=332&canvas=272%2C332&bg-color=f5f5f5'),(19,7,'https://fanatics.frgimages.com/cleveland-cavaliers/mens-mitchell-and-ness-lebron-james-wine-cleveland-cavaliers-big-and-tall-hardwood-classics-swingman-jersey_pi3278000_altimages_ff_3278327-ef1614742e1918b9a428alt2_full.jpg?_hv=2&w=900'),(20,7,'https://fanatics.frgimages.com/cleveland-cavaliers/mens-mitchell-and-ness-lebron-james-wine-cleveland-cavaliers-big-and-tall-hardwood-classics-swingman-jersey_pi3278000_altimages_ff_3278327-ef1614742e1918b9a428alt3_full.jpg?_hv=2&w=900'),(21,7,'https://fanatics.frgimages.com/cleveland-cavaliers/mens-mitchell-and-ness-lebron-james-wine-cleveland-cavaliers-big-and-tall-hardwood-classics-swingman-jersey_pi3278000_altimages_ff_3278327-ef1614742e1918b9a428alt1_full.jpg?_hv=2&w=900'),(22,8,'https://media.terminalx.com/pub/media/catalog/product/cache/f112238e8de94b6d480bd02e7a9501b8/z/3/z372900001-11647941567.jpg'),(23,8,'https://www.prodirectbasketball.com/ProductImages/Thumbs/174799_Main_Thumb_0442992.jpg'),(24,8,'https://i5.walmartimages.com/asr/4adc27cd-515c-4b65-a1f7-3f725c6f5335_1.55db4f2cc950a406e9fb7551ae7b7adf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'),(25,9,'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c615c44a-f5d0-456d-9a65-23a42ff21301/giannis-immortality-2-basketball-shoes-X7xj7b.png'),(26,9,'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5923d46b-a152-43a6-ab8d-abc292d50150/giannis-immortality-2-basketball-shoes-X7xj7b.png'),(27,9,'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/05cedc28-bcec-44af-878a-054e5bd1debd/giannis-immortality-2-basketball-shoes-X7xj7b.png');
/*!40000 ALTER TABLE `item_images` ENABLE KEYS */;
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
