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

	 angular.module("mmdb.homepage").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-homepage.tmpl.html","<div class=\"container cover-wrapper\">\n    <div class=\"cover\">\n        <h1>welcome.</h1>\n        <p class=\"lead\">\n            this is the homepage. eventually, it will house a command center for everything you can do here. until then, <br /> just enjoy its simplicity.\n        </p>\n    </div>\n</div>");}]);
}());
