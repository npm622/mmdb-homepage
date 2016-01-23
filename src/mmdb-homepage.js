(function() {
	'use strict';

	angular.module( 'mmdb.homepage', [ 'ui.router' ] )

	.provider( 'mmdbHomepage', function() {

		this.setBrandImg = function(brandImg) {
			this.brandImg = brandImg;
		};
		
		this.setLinks = function(linkModels) {
			/**
			 * { display: 'click me!', method: function() { ... } }
			 */
			this.links = linkModels;
		}

		this.$get = function() {
			return this;
		};
	} )

	.config( function config($stateProvider) {
		$stateProvider.state( 'homepage', {
			url : '/',
			templateUrl : 'mmdb-homepage.tmpl.html',
			controller : 'MmdbHomepageCtrl',
			controllerAs : 'mmdbHomepage',
			data : {
				pageTitle : 'homepage'
			}
		} );
	} )

	.controller( 'MmdbHomepageCtrl', [ MmdbHomepageCtrl ] );

	function MmdbHomepageCtrl() {
		var vm = this;
	}

	 @@templateCache
}());
