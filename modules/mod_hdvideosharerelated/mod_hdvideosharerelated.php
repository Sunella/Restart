<?php
/**
 * Related videos module for HD Video Share
 *
 * This file is to fetch Related videos module 
 *
 * @category   Apptha
 * @package    Mod_HDVideoShareRSS
 * @version    3.6
 * @author     Apptha Team <developers@contus.in>
 * @copyright  Copyright (C) 2014 Apptha. All rights reserved.
 * @license    GNU General Public License http://www.gnu.org/copyleft/gpl.html
 */

// No direct access to this file
defined('_JEXEC') or die('Restricted access');

// Define DS
if (!defined('DS'))
{
	define('DS', DIRECTORY_SEPARATOR);
}

require_once dirname(__FILE__) . DS . 'helper.php';
$document = JFactory::getDocument();

if (version_compare(JVERSION, '1.7.0', 'ge'))
{
	$version = '1.7';
}
elseif (version_compare(JVERSION, '1.6.0', 'ge'))
{
	$version = '1.6';
}
else
{
	$version = '1.5';
	$document->addStyleSheet(JURI::base() . 'components/com_contushdvideoshare/css/tool_tip_15.css');
}

if (version_compare(JVERSION, '1.6.0', 'ge'))
{
	$jlang = JFactory::getLanguage();
	$jlang->load('mod_HDVideoShareRelated', JPATH_SITE, $jlang->get('tag'), true);
	$jlang->load('mod_HDVideoShareRelated', JPATH_SITE, null, true);
}

$class = $params->get('moduleclass_sfx');
$result1 = '';
$result = Modrelatedvideos::getrelatedvideos();
$result1 = Modrelatedvideos::getrelatedvideossettings();
$Itemid = Modrelatedvideos::getmenuitemid_thumb();
require JModuleHelper::getLayoutPath('mod_HDVideoShareRelated');
