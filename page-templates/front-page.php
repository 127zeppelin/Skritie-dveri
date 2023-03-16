<?php

/**
 * Template Name: Front page
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Bootscore
 */

get_header();
?>
<div class="navigation__toggle js-toggleMainNav isTop">
            <div class="burger">
                <span class="hamburger-icon top"></span>
                <span class="hamburger-icon middle"></span>
                <span class="hamburger-icon bottom"></span>
            </div>
        </div>
<div id="spacenav">
			<canvas id="menubg" class="menubg"></canvas>
  <nav class="offcanvas-menu">
    <ul>
      <li><a href="#">Главная</a></li>
      <li><a href="#">О нас</a></li>
      <li><a href="#">Контакты</a></li>
    </ul>
  </nav>

</div>



<div id="content" class="site-content container py-5 mt-5">
  <div id="primary" class="content-area">

    <!-- Hook to add something nice -->
    <?php bs_after_primary(); ?>

      <main id="main" class="site-main">

        <header class="entry-header">
          <?php the_post(); ?>
          <h1><?php the_title(); ?></h1>
          <?php bootscore_post_thumbnail(); ?>
        </header>

        <div class="entry-content">
          <?php the_content(); ?>
        </div>

        <footer class="entry-footer">
          <?php comments_template(); ?>
        </footer>

      </main>

  </div>
</div>

<?php
get_footer();

