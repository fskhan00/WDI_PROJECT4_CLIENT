angular
  .module('propertyApp')
  .service('TokenService', TokenService);

TokenService.$inject = ['$window', 'jwtHelper'];
function TokenService($window, jwtHelper) {
  const self = this;

  self.setToken = (token) => {
    return $window.localStorage.setItem('auth-token', token);
  };

  self.getToken = () => {
    return $window.localStorage.getItem('auth-token');
  };

  self.removeToken = () => {
    $window.localStorage.clear();
  };

  self.decodeToken = () => {
    const token = self.getToken();
    return token ? jwtHelper.decodeToken(token) : null;
  };
}
