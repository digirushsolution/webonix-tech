<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'webovaep_wp102' );

/** Database username */
define( 'DB_USER', 'webovaep_wp102' );

/** Database password */
define( 'DB_PASSWORD', '))3[9pYSIORc(1!m' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'jlhnjbk2yfm202dyeylta9rjgewpr0uglpqdcszqgzk48oy5ushvrmsjbvlhzd6q' );
define( 'SECURE_AUTH_KEY',  'my5m2nemiz8nmqp5imf1nfbifisbrtapniujpu86leexoxpiixxl1ljme040io5q' );
define( 'LOGGED_IN_KEY',    'dida9ggfg9watitniqu3vp9wjtuodoy4angwbm4lgmpnojsgnurbcpzhapbaqk4f' );
define( 'NONCE_KEY',        'wv6wfhs1f1nje0bhkiziuneoa5r1wagpuuf9r0ydtzoc6kfdnkujsmwjdaxqni3e' );
define( 'AUTH_SALT',        'hvzferodjjcz5zswzf8q5hixdtx5hrx9hnvoxmtzrzmowa0vaiugcpsii8ffjrea' );
define( 'SECURE_AUTH_SALT', 'qm0hnzmwrhpjq9hkpsvmrdoel4tsyxt6ker24wtqwxk4a4jxr9jnirn9enwcp4og' );
define( 'LOGGED_IN_SALT',   'vkifqdrfkay1sdqhpdkvtlnavmm4kuj8em3xrewqfwfprh9qtbsg5kfpwftk67gp' );
define( 'NONCE_SALT',       'nj1d6livfoxhnstsycfmiceekptfvolsotyebevm5u0js3irxz4c2juzbw4zuskq' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wppo_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
