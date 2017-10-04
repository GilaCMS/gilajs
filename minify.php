<?php
//header('Content-type: text/css');
ob_start("compress");
// Expire in one day
//header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 86400) . ' GMT');
function compress( $minify )
{
    /* remove comments */
    $minify = preg_replace( '!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $minify );
    /* remove tabs, spaces, newlines, etc. */
    //$minify = str_replace( array("\r", "\n", "\t",'  ', '    ', '    '), '', $minify );
    $minify = str_replace( ': ', ':', $minify );
    $minify = str_replace( ' {', '{', $minify );
    file_put_contents('dist/gila.min.css', $minify);
    return $minify;
}
/* css files for combining */
include('dev/css/gila.css');
include('dev/css/colors.css');
include('dev/css/form.css');
include('dev/css/dialog.css');
include('dev/css/grid.css');
include('dev/css/nav.css');
include('dev/css/table.css');
include('dev/css/cards.css');
include('dev/css/gallery.css');

ob_end_flush();

ob_start("compressjs");
// Expire in one day
//header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 86400) . ' GMT');
function compressjs( $minify )
{
    /* remove comments */
    $minify = preg_replace( '!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $minify );
    /* remove tabs, spaces, newlines, etc. */
    //$minify = str_replace( array("\r", "\n", "\t"), '', $minify );
    //$minify = str_replace( array('  ', '    ', '    ', '\t'), '', $minify );
    file_put_contents('dist/gila.min.js', $minify);
    return $minify;
}
/* css files for combining */
include('dev/js/gila.js');
include('dev/js/gItem.js');
include('dev/js/classList.js');
include('dev/js/event.js');
include('dev/js/ajax.js');
include('dev/js/dialog.js');
include('dev/js/gila.require.js');
include('dev/js/popup.js');
include('dev/js/resouces.js');

ob_end_flush();
