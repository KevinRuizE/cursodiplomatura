-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-05-2022 a las 01:35:49
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ilac_bd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, '“La vida es la ficción de la muerte”: Ricardo Silva Romero sobre su último libro', '‘Zoológico humano’, editado y publicado por Penguin Random House, es el más reciente libro del autor colombiano, quien en entrevista con Infobae habló sobre la muerte, el arte, la creación y el encierro', 'El escritor colombiano Ricardo Silva Romero acaba de publicar Zoológico humano, su más reciente libro, editado por Penguin Random House. Este texto nos habla de ocho personajes que tuvieron una experiencia con la muerte y regresan a este plano, al terrenal, quienes empiezan a percibir de manera diferente la vida.\r\n\r\nEn entrevista para Infobae Colombia Silva Romero habló de cómo plasmó la idea de muerte en su libro, por qué escogió 8 personajes, cómo el encierro lleva al ser humano a fomentar la ficción, la oportunidad que tienen las personas de crear nuevas historias y relato tras la pandemia del COVID-19 y su visión de la inteligencia artificial versus la naturaleza y lo místico.\r\n\r\n', NULL),
(2, 'Instagram está trabajando en una nueva forma para ver las Historias', 'La red social también planea implementar nuevas opciones para las cuentas y el feed de inicio', 'Los planes de Instagram para parecerse a TikTok van más allá de priorizar videos sobre publicaciones de imágenes.\r\n\r\nLa red social parece estar probando una nueva forma de ver Historias, claramente inspirada en la aplicación ByteDance, que permite el desplazamiento vertical y omite las animaciones de carrusel a un lado.\r\n\r\nCómo funcionaría la nueva actualización en las Historias de Instagram\r\n\r\nActualmente, los usuarios tienen dos formas de desplazarse por las Historias de Instagram. Por un lado, al tocar el borde de la pantalla, una acción también permite visualizar las distintas publicaciones compartidas por el usuario. De lo contrario, desplazándose hacia la izquierda (para ir a la siguiente cuenta) o hacia la derecha (para volver).', NULL),
(5, 'modificado', 'modificado', 'modificado', 'n8g0url6tqdbtgateur9'),
(6, 'asdasd', 'asdasdqweasda', 'asdasdaasdasdasd', 'elizrcdfn2qkh1xj2ooj');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'kevin', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
