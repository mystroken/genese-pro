<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Genese
 */

?>

<footer id="footer" class="footer">
	<?php
		wp_nav_menu(
			array(
				'theme_location' => 'footer',
				'menu_id'        => 'footer-menu',
			)
		);
		?>
	<div class="site-info">
		<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'genese' ) ); ?>">
			<?php
			/* translators: %s: CMS name, i.e. WordPress. */
			printf( esc_html__( 'Proudly powered by %s', 'genese' ), 'WordPress' );
			?>
		</a>
		<span class="sep"> | </span>
			<?php
			/* translators: 1: Theme name, 2: Theme author. */
			printf( esc_html__( 'Theme: %1$s by %2$s.', 'genese' ), 'genese', '<a href="https://www.flexyla.com">FlexyLa Studio</a>' );
			?>
	</div><!-- .site-info -->
</footer><!-- #footer -->
