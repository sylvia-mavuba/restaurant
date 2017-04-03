//gestion des routes
(function () {

	angular
		.module('myApp.App', [])
		.config(function ($stateProvider) {

			$stateProvider.state('home', {
				url: '/',
				//redirectTo: '404'
			});

			$stateProvider.state('appBlogPost', {
				//url: '^/'
				views: {
					content: {
						template: '<app></app>'
					}
				},
				redirectTo: 'appBlogPost.article',
				resolve: {

				}
			});

		});
}());
