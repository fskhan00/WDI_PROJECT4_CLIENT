angular
.module('propertyApp')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('homepage', {
    url: '/',
    templateUrl: '/js/views/homepage.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/authentications/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/authentications/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl',
    controllerAs: 'vm'
  })
  .state('rentalsIndex', {
    url: '/rentals',
    templateUrl: '/js/views/rentals/index.html',
    controller: 'RentalsIndexCtrl',
    controllerAs: 'vm'
  })
  .state('rentalsNew', {
    url: '/rentals/new',
    templateUrl: '/js/views/rentals/new.html',
    controller: 'RentalsNewCtrl',
    controllerAs: 'vm'
  })
  .state('rentalsShow', {
    url: '/rentals/:id',
    templateUrl: '/js/views/rentals/show.html',
    controller: 'RentalsShowCtrl',
    controllerAs: 'vm'
  });

  $urlRouterProvider.otherwise('/');
}
