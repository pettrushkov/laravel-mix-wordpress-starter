<?php
// Template name: Flexible content
get_header();

if (have_rows('flexible_content')) {
	while (have_rows('flexible_content')) {
		the_row();
		get_template_part('inc/flexible-content/' . get_row_layout());
	}
}

get_footer();