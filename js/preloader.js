// JavaScript Document
jQuery(document).ready(function($) {
	NProgress.configure({ easing: 'ease', speed: 1000 });
	NProgress.configure({ showSpinner: false });
    NProgress.start();
	$(window).load(function (event) {
        event.preventDefault();
      	NProgress.done();
    });
});