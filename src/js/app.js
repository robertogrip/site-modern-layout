import '../sass/app.scss';
import 'bootstrap';
import './vendor/parallax.min';

import jQuery from 'jquery';

const headerFunction = () => {
    const scrollTop = jQuery(window).scrollTop();

    if( scrollTop > 100 && !jQuery('.conpass-header').hasClass('fixed-bar') ) {
        jQuery('.conpass-header').addClass('fixed-bar');
    } else if( scrollTop < 101 && jQuery('.conpass-header').hasClass('fixed-bar') ) {
        jQuery('.conpass-header').removeClass('fixed-bar');
    }

    jQuery('.conpass-header').css({'background': `rgba(255, 255, 255, ${ scrollTop < 101 ? scrollTop * 0.01 : 1 })`});
}

headerFunction();
jQuery(window).scroll(headerFunction);