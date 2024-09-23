<?php
// Enqueue the parent theme styles
function your_theme_enqueue_styles()
{
  wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}
add_action('wp_enqueue_scripts', 'your_theme_enqueue_styles');

/**
 * Custom Landing Page Enqueue scripts and styles.
 */
function lp_scripts()
{
  if (is_page_template('custom-landing-page.php')) {
    $lp_swiper_css = '/lib/swiper/swiper-bundle.min.css';
    $lp_icomoon_css = '/lib/icomoon/style.css';
    $lp_style_css = '/assets/css/style.css';
    wp_enqueue_style('lp-swiper', get_theme_file_uri() . $lp_swiper_css, [], wp_get_theme()->get('Version'));
    wp_enqueue_style('lp-icomoon', get_theme_file_uri() . $lp_icomoon_css, [], wp_get_theme()->get('Version'));
    wp_enqueue_style('lp-style', get_theme_file_uri() . $lp_style_css, [], wp_get_theme()->get('Version'));

    $lp_jquery = '/lib/jquery.min.js';
    $lp_swiper_js = '/lib/swiper/swiper-bundle.min.js';
    $lp_main_js = '/assets/js/main.js';

    wp_enqueue_script('lp-jquery', get_theme_file_uri() . $lp_jquery, [], wp_get_theme()->get('Version'), true);
    wp_enqueue_script('lp-swiper', get_theme_file_uri() . $lp_swiper_js, [], wp_get_theme()->get('Version'), true);
    wp_enqueue_script('lp-script', get_theme_file_uri() . $lp_main_js, [], wp_get_theme()->get('Version'), true);
  }
}
add_action('wp_enqueue_scripts', 'lp_scripts', 999);

// Disable the 'Main default_theme scripts and styles.'
function disable_default_theme_scripts_styles()
{
	if (is_page_template('custom-landing-page.php')) {
		wp_deregister_style('global-styles');
		wp_dequeue_style('global-styles');
		wp_deregister_style('thrive-theme-styles');
		wp_dequeue_style('thrive-theme-styles');
		wp_deregister_style('thrive-theme');
		wp_dequeue_style('thrive-theme');
		wp_deregister_style('parent-style');
		wp_dequeue_style('parent-style');
	}
}
add_action('wp_enqueue_scripts', 'disable_default_theme_scripts_styles', 999);

function disable_imagify_on_specific_template()
{
  // Check if we're on the front end and a singular page
  if (is_page_template('custom-landing-page.php')) {
    add_filter('do_rocket_lazyload', '__return_false'); // Disable Lazy Load (optional)
    add_filter('imagify_disable_optimization', '__return_true'); // Disable Imagify optimization
  }
}
add_action('template_redirect', 'disable_imagify_on_specific_template');

/*
Get Script and Style IDs
Adds inline comment to your frontend pages
View source code near the

<head> section
Lists only properly registered scripts
@ https://digwp.com/2019/03/disable-script-style-added-plugins/
*/
function default_inspect_script_style()
{
  global $wp_scripts, $wp_styles;
  echo "\n" . '<!--' . "\n\n";
  echo 'SCRIPT IDs:' . "\n";
  foreach ($wp_scripts->queue as $handle) echo $handle . "\n";
  echo "\n" . 'STYLE IDs:' . "\n";
  foreach ($wp_styles->queue as $handle) echo $handle . "\n";
  echo "\n" . '-->' . "\n\n";
}
add_action('wp_print_scripts', 'default_inspect_script_style');
