<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset') ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>
		<?php bloginfo('name'); ?>
	</title>

	<!-- FAVICON -->
	<?php $favicon_uri = get_template_directory_uri() . '/favicon/'; ?>
	<!-- /FAVICON -->

	<!-- FONTS -->
	<!-- /FONTS -->

	<?php wp_head(); ?>
</head>

<body>

	<header class="header">

		<?php get_template_part('inc/components/logo'); ?>

	</header>