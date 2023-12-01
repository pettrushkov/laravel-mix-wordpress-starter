<?php
add_action('wp_enqueue_scripts', 'astra_child_enqueue_styles');
function astra_child_enqueue_styles() {
	wp_enqueue_style('parent-style', get_stylesheet_directory_uri() . '/assets/css/app.css');
	wp_enqueue_script('parent-script', get_stylesheet_directory_uri() . '/assets/js/app.js');
}
