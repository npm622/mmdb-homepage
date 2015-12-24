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

	 angular.module("mmdb.homepage").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-homepage.tmpl.html","<div class=\"container cover-wrapper\">\n    <div class=\"cover\">\n        <h1 class=\"cover-heading\">welcome.</h1>\n        <p class=\"lead\">this is the homepage. eventually, it will house an ng-transclude spot to place additional buttons/links/content. but for now, just\n            enjoy its simplicity.</p>\n        <p class=\"lead\">\n            <a href=\"#/dbAdmin\" class=\"btn mmdb-btn-lg mmdb-btn-default mmdb-link\">enter dashboard</a>\n        </p>\n    </div>\n</div>");}]);
}());
