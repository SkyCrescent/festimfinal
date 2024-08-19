-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 15 juil. 2024 à 14:30
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `festim`
--

-- --------------------------------------------------------

--
-- Structure de la table `actualite`
--

CREATE TABLE `actualite` (
  `id` int(11) NOT NULL,
  `dat` varchar(255) NOT NULL,
  `photo` varchar(500) NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `typeMedia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `actualite`
--

INSERT INTO `actualite` (`id`, `dat`, `photo`, `contenu`, `typeMedia`) VALUES
(1, '05/04/2024', 'media/publication/CLAUDIO_SAMA_KENEGUI___Le_FESTIM_pour_rehausser_l_image_du_Congo(360p).mp4', 'Claudio', 'video/mp4'),
(2, '05/04/2024', 'media/publication/Discours_du_Promoteur_Administrateur_Général_du_FESTIM_BRAZZA__du_lancement_officiel_de_la_2_éditio.(360p).mp4', 'Discours', 'video/mp4'),
(3, '05/04/2024', 'media/publication/CONFERENCE_DE_PRESSE_FESTIM_BRAZZA(360p).mp4', 'CONFERENCE DE PRESSE FESTIM BRAZZA', 'video/mp4'),
(4, '05/04/2024', 'media/publication/CONGO_FESTIM___BRAZZA_2019_POUR_UN_TOURISME_CULTUREL_A_TRAVERS_LA_DIPLOMATIE_PASCAL_GANGA_N\'DIAYE(360p).mp4', 'CONGO FESTIM BRAZZA 2019 POUR UN TOURISME CULTUREL A TRAVERS LA DIPLOMATIE PASCAL GANGA NDIAYE', 'video/mp4'),
(5, '05/04/2024', 'media/publication/Lancement_officiel_du_Festim_Afrique_1ere_édition_Brazzaville_🇨🇬_et_Kinshasa_🇨🇩(360p).mp4', 'Lancement_officiel Du_Festim_Afrique', 'video/mp4'),
(6, '05/04/2024', 'media/publication/CULTU-REPORTAGE___LANCEMENT_OFFICIEL_DE_LA_PREMIERE_EDITION_DU_FESTIM_AFRIQUE(360p).mp4', 'CULTURE REPORTAGE LANCEMENT OFFICIEL DE LA PREMIERE EDITION DU FESTIM AFRIQUE', 'video/mp4'),
(7, '05/04/2024', 'media/publication/Promotion_du_tourisme_Congolais_par_Festim_Brazza(360p).mp4', 'Promotion Du Tourisme Congolais Par Festim Brazza', 'video/mp4'),
(8, '05/04/2024', 'media/publication/Documentaire_de_la_première_édition_du_festim_brazza_en_république_du_congo__du_1_au_10_août_2018.(360p).mp4', 'Documentaire De La Premire Edition Du Festim Brazza', 'video/mp4');

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` int(11) NOT NULL,
  `contenu` varchar(500) NOT NULL,
  `id_publication` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE `evenement` (
  `id` int(11) NOT NULL,
  `nom` varchar(80) NOT NULL,
  `date_debut` varchar(10) NOT NULL,
  `date_fin` varchar(10) NOT NULL,
  `concept_devellope` varchar(500) NOT NULL,
  `couleur` varchar(15) NOT NULL,
  `photo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `evenement`
--

INSERT INTO `evenement` (`id`, `nom`, `date_debut`, `date_fin`, `concept_devellope`, `couleur`, `photo`) VALUES
(1, 'FESTIM PHOTO', '2024-03-02', '2024-03-23', 'Infographie Et Lart', 'orange', 'media/events/1631110818-logo-react-js.png'),
(2, 'Photo Media ', '2024-03-14', '2026-10-01', 'Jeunesse', 'sky', 'media/events/IMG-20230214-WA0006.jpg'),
(3, 'Cancer', '2024-03-01', '2024-04-04', 'Sante', '', 'media/events/cancer-du-sein-metastatique-0663f5ca29a8a429.jpeg'),
(4, 'Festim Afrique', '2024-02-29', '2024-04-28', 'Entreprenariat des Jeunes', '', 'media/events/IMG-20201118-WA0004.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `information`
--

CREATE TABLE `information` (
  `id` int(11) NOT NULL,
  `paragraphe` varchar(255) NOT NULL,
  `contenu` varchar(255) NOT NULL,
  `id_evenement` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `information`
--

INSERT INTO `information` (`id`, `paragraphe`, `contenu`, `id_evenement`) VALUES
(3, 'Debut Du Mec', 'Dfsdffsdfgdsgdggdgfd', 1),
(4, 'Debut De Levenemnt', 'Fdfdfsdfsdfkf Dfkdlmfeksrrlm Eefe\r\nDsfdfsdfjsdlkfdsjfflksdjfopofevcsp', 2);

-- --------------------------------------------------------

--
-- Structure de la table `interesse`
--

CREATE TABLE `interesse` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(150) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `ville` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `id_evenement` int(11) NOT NULL,
  `pays` varchar(255) NOT NULL,
  `genre` varchar(255) NOT NULL,
  `profession` varchar(255) NOT NULL,
  `fonction` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `interesse`
--

INSERT INTO `interesse` (`id`, `nom`, `prenom`, `contact`, `adresse`, `ville`, `email`, `photo`, `id_evenement`, `pays`, `genre`, `profession`, `fonction`) VALUES
(1, 'Nounga', 'Crescent', '06/650/88/54', 'Kpg Kalimalang No 517', 'Surabaya', 'Crescentnoungagmailcom', 'media/publication/IMG-20230214-WA0011.jpg', 2, 'Congo', 'Masculin', 'Informaticien', 'PDG'),
(2, 'Nounga', 'Crescent', '06/650/88/54', 'Kpg Kalimalang No 517', 'Berlin', 'Crescentnoungagmailcom', 'media/concerned/135_rules_10082022rf_22735--2cb24847a185eaed2a76e6a500cabdec.jpg', 1, 'Allemagne', 'Masculin', 'Informaticien', 'PDG'),
(3, 'Nounga', 'Crescent', '06/650/88/54', 'Kpg Kalimalang No 517', 'Surabaya', 'Crescentnoungagmailcom', 'media/concerned/233_PAY_08302020ca_10784__df902b5bece541b31fde22ed77b8b2e3.jpg', 1, 'Congo', 'Masculin', 'Informaticien', 'PDG'),
(4, 'Nounga', 'Freze', '06/556/54/45', 'Kpg Kalimalang No 517', 'Surabaya', 'Crescentnoungagmailcom', 'media/concerned/2845218.jpg', 1, 'Efedskl', 'Masculin', 'Informaticien', 'PDG'),
(5, 'Bruce', 'Waeyd', '46/543/15/34', 'Kpg Kalimalang No 517', 'Surabaya', 'Crescentnoungagmailcom', 'media/concerned/367994.jpg', 1, 'Congo', 'Masculin', 'Informaticien', 'PDG'),
(6, 'Nounga', 'Crescent', '06/556/54/45', 'Kpg Kalimalang No 517', 'Surabaya', 'crescentnoungagmailcom', 'media/concerned/63f5a07a50bf6b4c325db4e731133dcc.jpg', 2, 'Congo', 'Masculin', 'Informaticien', 'PDG'),
(7, 'Nounga', 'Crescent', '06/556/54/45', 'Kpg Kalimalang No 517', 'Surabaya', 'crescentnoungagmailcom', 'media/concerned/20230904_raw_jeyentrance--29fffde8700883ebd2f08e9ea60529bb.jpg', 2, 'Congo', 'Masculin', 'Informaticien', 'PDG'),
(8, 'Nounga', 'Crescentljkhj', '06/650/88/54', 'Kpg Kalimalang No 517', 'Surabaya', 'crescentnoungagmailcom', 'media/concerned/63f5a07a50bf6b4c325db4e731133dcc.jpg', 5, 'France', 'Masculin', 'Informaticien', 'PDG'),
(9, 'Nounga', 'Crescent', '06/556/54/45', 'Kpg Kalimalang No 517', 'Surabaya', 'crescentnoungagmailcom', 'media/concerned/AAAABRUjTMAVINYbTbHTQzMp6IK8cVslhVWEJwVfvISufOw1OOTF5Pim6iLMr9_sEpmogOaAoUSKsdH_Ikx2hwx997O7c5OsnTdXlgj8ybaAeVpV6GnARenKXJWq.jpg', 4, 'Congo', 'Masculin', 'Informaticien', 'PDG'),
(10, 'Nounga', 'Crescent', '06/650/88/54', 'Kpg Kalimalang No 517', 'Surabaya', 'crescentnoungagmailcom', 'media/concerned/arr622b_0100b-2000-d200ac6b3b5444c4a3c4cf9413cde220.jpg', 2, 'Congo', 'Masculin', 'Informaticien', 'PDG'),
(11, 'Nounga', 'Crescent', '06/650/88/54', 'Kpg Kalimalang No 517', 'Surabaya', 'crescentnoungagmailcom', 'media/concerned/1c0b2445f27a8f20aa8df4002c2e4851.jpg', 0, 'Congo', 'Masculin', 'Informaticien', 'PDG'),
(12, 'Nounga', 'Crescent', '06/650/88/54', 'Kpg Kalimalang No 517', 'Surabaya', 'crescentnoungagmailcom', 'media/concerned/0_FZBcX0VXEAAizRV.jpg', 2, 'Congo', 'Masculin', 'Informaticien', 'PDG');

-- --------------------------------------------------------

--
-- Structure de la table `mdp`
--

CREATE TABLE `mdp` (
  `id` int(255) NOT NULL,
  `contenu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `mdp`
--

INSERT INTO `mdp` (`id`, `contenu`) VALUES
(1, 'sky');

-- --------------------------------------------------------

--
-- Structure de la table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `titre` varchar(100) NOT NULL,
  `etat` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `partenaires`
--

CREATE TABLE `partenaires` (
  `id` int(11) NOT NULL,
  `Nom` varchar(25) NOT NULL,
  `domaine` varchar(100) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `contact` varchar(200) NOT NULL,
  `id_evenement` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `partenaires`
--

INSERT INTO `partenaires` (`id`, `Nom`, `domaine`, `photo`, `contact`, `id_evenement`) VALUES
(3, 'Nounga', 'Musique', 'media/partenaires/355636114_10160905263795330_3013134489714159392_n.jpg', '95 656 59 89', 1),
(4, 'Happy', 'Cosmetique', 'media/partenaires/IMG-20230101-WA0014.jpg', '06 585 74 88', 1),
(5, 'Sky', 'Vente De Bijoux', 'media/partenaires/IMG-20230214-WA0016.jpg', '05 855 89 79', 2);

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

CREATE TABLE `publication` (
  `id` int(11) NOT NULL,
  `dat` varchar(10) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `contenu` varchar(500) NOT NULL,
  `id_evenement` int(11) NOT NULL,
  `typeMedia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `publication`
--

INSERT INTO `publication` (`id`, `dat`, `photo`, `contenu`, `id_evenement`, `typeMedia`) VALUES
(1, '13/03/2024', 'media/publication/Downloads cody rhodes theme enternace -kingdom-.mp4', 'The WWE Cody Rhodes', 1, 'video/mp4'),
(3, '24/03/2024', 'media/publication/352196562_645524730926185_7832970973712969281_n.jpg', 'Lancement De Levenement', 1, 'image/jpeg'),
(4, '24/03/2024', 'media/publication/IMG-20230214-WA0011.jpg', 'Vente Delements Nouveaux', 2, 'image/jpeg'),
(5, '31/03/2024', 'media/publication/91a1c70b84054f266d8a58f61037b694.jpg', '575245erere7875457__zsdfghjklm\r\nJkjkjdf', 3, 'image/jpeg'),
(6, '05/04/2024', 'media/publication/CLAUDIO_SAMA_KENEGUI___Le_FESTIM_pour_rehausser_l_image_du_Congo(360p).mp4', 'Claudio ', 4, 'video/mp4');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `actualite`
--
ALTER TABLE `actualite`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `interesse`
--
ALTER TABLE `interesse`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `mdp`
--
ALTER TABLE `mdp`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `partenaires`
--
ALTER TABLE `partenaires`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `publication`
--
ALTER TABLE `publication`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `actualite`
--
ALTER TABLE `actualite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `commentaire`
--
ALTER TABLE `commentaire`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `evenement`
--
ALTER TABLE `evenement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `information`
--
ALTER TABLE `information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `interesse`
--
ALTER TABLE `interesse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `mdp`
--
ALTER TABLE `mdp`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `partenaires`
--
ALTER TABLE `partenaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `publication`
--
ALTER TABLE `publication`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
