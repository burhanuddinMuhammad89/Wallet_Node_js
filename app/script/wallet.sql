-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2022 at 08:33 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wallet`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer_cashout_request`
--
use Wallet;

CREATE TABLE `customer_cashout_request` (
  `id` varchar(100) NOT NULL,
  `customer_phone` varchar(100) DEFAULT NULL,
  `customer_name` varchar(100) DEFAULT NULL,
  `customer_email` varchar(100) DEFAULT NULL,
  `customer_bank_name` varchar(100) DEFAULT NULL,
  `customer_bank_code` varchar(100) DEFAULT NULL,
  `customer_bank_account_name` varchar(100) DEFAULT NULL,
  `customer_bank_account_number` varchar(100) DEFAULT NULL,
  `customer_cashout_amount` decimal(19,0) DEFAULT NULL,
  `customer_cashout_request_date` timestamp NULL DEFAULT NULL,
  `customer_cashout_transaction_date` timestamp NULL DEFAULT NULL,
  `customer_cashout_status` varchar(100) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `cashout_code` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` varchar(100) NOT NULL,
  `currency` varchar(10) DEFAULT NULL,
  `balance` decimal(19,0) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `wallet_type` varchar(30) DEFAULT NULL,
  `notes` varchar(1000) DEFAULT NULL,
  `wallet_code` varchar(30) DEFAULT NULL,
  `pin` varchar(10) DEFAULT NULL,
  `expired_time` timestamp NULL DEFAULT NULL,
  `last_transaction_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wallets`
--

INSERT INTO `wallets` (`id`, `currency`, `balance`, `status`, `wallet_type`, `notes`, `wallet_code`, `pin`, `expired_time`, `last_transaction_time`) VALUES
('09964e48-4f57-421f-a79d-8cb64e750610', 'IDR', '0', 0, 'SAKU', '', 'SA-628112345678943', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('12a19da3-579e-484b-ade3-8eb5d82da82d', 'IDR', '0', 0, 'SALDO', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('2edfd61e-ca50-4614-845a-ddfd7fdbd671', 'IDR', '0', 0, 'SALDO', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('3e759442-ec33-488d-9e8c-432a143696bc', NULL, '0', NULL, 'SALDO', '', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('4942dfe5-18b1-4517-b398-ba265d55af11', 'IDR', '0', 0, 'POINT', '', 'SA-628112345678943', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('6dae3b9b-6e32-4729-9413-897b5f871da6', 'IDR', '0', 0, 'POINT', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('7648e1b9-6632-4009-94a8-e28364cb1694', NULL, '0', NULL, 'POINT', '', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('862f790b-84fc-4012-ae74-c643290ce827', 'IDR', '0', 0, 'POINT', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('8e18c362-96e3-4d1a-9d0e-942ee58a7fd0', 'IDR', '0', 0, 'SAKU', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('953099ca-cb16-42f0-aff6-df95fc297d8a', NULL, '0', NULL, 'SAKU', '', NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('bcba270f-56ec-47dd-9c06-2b8bf7f262bb', 'IDR', '0', 0, 'SALDO', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('c13a16f9-96e8-495b-a3e4-4bd95dda728a', 'IDR', '0', 0, 'POINT', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('c621c66f-5634-4426-bd42-7804120b35bb', 'IDR', '0', 0, 'SAKU', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('e2ed44e5-a315-4583-b679-e4413d51780f', 'IDR', '0', 0, 'SALDO', '', 'SA-628112345678943', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('e45c3e0c-e19d-44a7-9269-4425974f7891', 'IDR', '0', 0, 'SALDO', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('ebf178c7-0a13-42e1-974b-652467039c57', 'IDR', '0', 0, 'SAKU', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('f6c01cb0-ef75-4845-b4c0-26c01fabe3fa', 'IDR', '0', 0, 'SAKU', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('f8e7655b-d710-4e2b-89c7-320441409b30', 'IDR', '0', 0, 'POINT', '', 'SA-628112345678902', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `wallet_transactions`
--

CREATE TABLE `wallet_transactions` (
  `id` varchar(100) NOT NULL,
  `wallet_transaction_time` timestamp NULL DEFAULT NULL,
  `transaction_id` varchar(100) DEFAULT NULL,
  `wallet_code` varchar(100) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `currency` varchar(19) DEFAULT NULL,
  `balance_before` decimal(10,0) DEFAULT NULL,
  `amount` decimal(10,0) DEFAULT NULL,
  `balance_after` decimal(10,0) DEFAULT NULL,
  `wallet_transaction_type` varchar(30) DEFAULT NULL,
  `notes` varchar(100) DEFAULT NULL,
  `wallet_transaction_no` varchar(30) DEFAULT NULL,
  `wallet_transaction_state` varchar(30) DEFAULT NULL,
  `wallet_transaction_operation` varchar(100) DEFAULT NULL,
  `wallet_transaction_release_time` varchar(100) DEFAULT NULL,
  `wallet_fund_source` varchar(100) DEFAULT NULL,
  `wallet_fund_data` varchar(100) DEFAULT NULL,
  `is_display` int(11) DEFAULT NULL,
  `wallet_type` varchar(100) DEFAULT NULL,
  `wallet_transaction_cancel_time` timestamp NULL DEFAULT NULL,
  `wallet_transaction_void_time` timestamp NULL DEFAULT NULL,
  `wallet_user` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `wallet_users`
--

CREATE TABLE `wallet_users` (
  `id` varchar(100) NOT NULL,
  `wallet_code` varchar(100) DEFAULT NULL,
  `wallet_user` varchar(30) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `system` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wallet_users`
--

INSERT INTO `wallet_users` (`id`, `wallet_code`, `wallet_user`, `phone`, `name`, `status`, `system`) VALUES
('086895b1-7038-41d8-ab3e-8657524e8105', 'SA-628112345678902', '628112345678902', '628112345678902', 'wkwk-2', '', 'ACA'),
('95510432-7711-490e-a773-663ae54c20bd', 'SA-628112345678943', '628112345678943', '628112345678943', 'wkwk-2', '', 'ACA'),
('ac1c7dc3-ceb0-430e-a127-241de4bda3ba', 'SA-628112345678902', '628112345678902', '628112345678902', 'wkwk-2', '', 'ACA'),
('ad165566-a73d-44b6-99e3-94dc46220b3f', 'SA-628112345678902', '628112345678902', '628112345678902', 'wkwk-2', '', 'ACA'),
('f8f2a0d9-cd94-42e3-b5fd-c51401169277', 'SA-628112345678902', '628112345678902', '628112345678902', 'wkwk-2', '', 'ACA'),
('f9160a1a-4f2e-4b02-834e-b3c6c90f138f', 'SA-628112345678902', '628112345678902', '628112345678902', 'wkwk-2', '', 'ACA');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer_cashout_request`
--
ALTER TABLE `customer_cashout_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet_transactions`
--
ALTER TABLE `wallet_transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet_users`
--
ALTER TABLE `wallet_users`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
