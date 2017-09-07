angular
  .module('propertyApp')
  .config(Interceptor);

Interceptor.$inject = ['$httpProvider'];
function Interceptor($httpProvider){
  return $httpProvider.interceptors.push('AuthInterceptor');
}
