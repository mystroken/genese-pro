<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Genese
 */

?>
<header id="header" class="header">
	<div class="header__wrapper">
		<div class="header__wrapper__left">
			<nav id="nav" class=nav" role="navigation" aria-label="<?php esc_html_e( 'Primary Navigation', 'genese' ); ?>">
				<?php
					wp_nav_menu(
						array(
							'theme_location'  => 'primary',
							'container_class' => 'primary-navigation',
						)
					);
				?>
			</nav>
		</div>
		<div class="header__wrapper__center">
			<div class="header__logo">
				<?php the_custom_logo(); ?>
			</div>
		</div>
		<div class="header__wrapper__right">
			<div class="header__cart">
				<a class="cart-contents" href="<?php echo wc_get_cart_url(); ?>" title="<?php esc_html_e( 'View your shopping cart', 'genese' ); ?>">
					<?php esc_html_e( 'Cart', 'genese' ); ?>
					<span>
						<?php echo  WC()->cart->get_cart_contents_count(); ?>
					</span>
				</a>
			</div>
		</div>
	</div>
</header>
<?php
if ( has_nav_menu( 'handheld' ) ) {
	?>
	<nav class="handheld-navigation" role="navigation" aria-label="<?php esc_html_e( 'Handheld Navigation', 'genese' ); ?>">
		<?php
			wp_nav_menu(
				array(
					'theme_location' => 'handheld',
					'fallback_cb'    => '',
				)
			);
		?>
	</nav>
	<?php
}
