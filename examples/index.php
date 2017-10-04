<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel='stylesheet' href='../font-awesome/css/font-awesome.min.css' />

<link rel='stylesheet' href='../dev/css/gila.css' />
<link rel='stylesheet' href='../dev/css/cards.css' />
<link rel='stylesheet' href='../dev/css/colors.css' />
<link rel='stylesheet' href='../dev/css/grid.css' />
<link rel='stylesheet' href='../dev/css/table.css' />
<link rel='stylesheet' href='../dev/css/form.css' />
<link rel='stylesheet' href='../dev/css/nav.css' />
<link rel='stylesheet' href='../dev/css/dialog.css' />
<link rel='stylesheet' href='../dev/css/gallery.css' />

<script src='../dev/js/gila.js'></script>
<script src='../dev/js/gItem.js'></script>
<script src='../dev/js/dialog.js'></script>
<script src='../dev/js/event.js'></script>
<script src='../dev/js/ajax.js'></script>
<script src='../dev/js/classList.js'></script>
<script src='../dev/js/resources.js'></script>
<script src='../dev/js/serialize.js'></script>
<script src='../dev/js/gila.require.js'></script>
<script src='../dev/js/table.js'></script>


<ul id="mainmenu" class="g-nav g-navbar">
    <li href="?p=menu">
        <a href="?p=menu">Display</a>
        <ul>
            <li><a href="?p=grid">Grid</a></li>
            <li><a href="?p=colums">Columns</a></li>
            <li><a href="?p=gallery">Gallery</a></li>
        </ul>
    </li>
    <li>
        <a href="?p=form">Forms</a>
    </li>
    <li>
        <a href="?p=table">Tables</a>
    </li>
    <li>
        <a href="?p=menu">Navigation</a>
        <ul>
            <li><a href="?p=menu">Menu</a></li>
            <li><a href="?p=nav.tabs">Tab</a></li>
            <li><a href="?p=nav.toolbar">Toolbar</a></li>
        </ul>
    </li>
    <li>
        <a href="?p=menu">Components</a>
        <ul>
            <li><a href="?p=alerts">Alerts</a></li>
            <li><a href="?p=buttons">Buttons</a></li>
            <li><a href="?p=dialogs">Dialogs</a></li>
            <li><a href="?p=cards">Cards</a></li>
            <li><a href="?p=panels">Panels</a></li>
        </ul>
    </li>
    <li>
        <a href="?p=menu">Functions</a>
        <ul>
            <li><a href="?p=fn.serialize">Serialize</a></li>
        </ul>
    </li>
</ul>



<div id="content" class="wrapper">
<?php
include $_GET['p'].'.phtml';
?>
</div>
