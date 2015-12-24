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
		console.log(vm.links);
	}

	 angular.module("mmdb.homepage").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-homepage.tmpl.html","<div class=\"cover-container\">\n    <div class=\"inner cover\">\n        <h1 class=\"cover-heading\">Cover your page.</h1>\n        <p class=\"lead\">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen\n            background photo to make it your own.</p>\n        <p class=\"lead\">\n            <a href=\"#\" class=\"btn btn-lg btn-default\">Learn more</a>\n        </p>\n    </div>\n\n    <div class=\"mastfoot\">\n        <div class=\"inner\">\n            <p>\n                Cover template for <a href=\"http://getbootstrap.com\">Bootstrap</a>, by <a href=\"https://twitter.com/sirmakesalot\">@mdo</a>.\n            </p>\n        </div>\n    </div>\n</div>");}]);
}());
