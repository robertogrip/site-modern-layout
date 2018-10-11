import 'styles/index.scss';
import './vendor/parallax.min';

import jQuery from 'jquery';

const showPage = () => {
	jQuery('body').fadeIn();
}

const headerFunction = () => {
    const scrollTop = jQuery(window).scrollTop();

    if( scrollTop > 60 && !jQuery('.conpass-header').hasClass('fixed-bar') ) {
        jQuery('.conpass-header').addClass('fixed-bar');
    } else if( scrollTop < 61 && jQuery('.conpass-header').hasClass('fixed-bar') ) {
        jQuery('.conpass-header').removeClass('fixed-bar');
    }

    jQuery('.conpass-header').css({'background': `rgba(255, 255, 255, ${ scrollTop < 101 ? scrollTop * 0.01 : 1 })`});
}

headerFunction();
window.onload = showPage;
window.onscroll = headerFunction;

jQuery('[data-tab-for]').click(event => {
	const dataId = jQuery(event.currentTarget).attr('data-tab-for') || '';

	if( dataId ) {
		jQuery('[data-tab-for]').removeClass('active');
		jQuery(event.currentTarget).addClass('active');

		jQuery('[data-tab-id]').removeClass('active');
		jQuery(`[data-tab-id="${dataId}"]`).addClass('active');
	}
});