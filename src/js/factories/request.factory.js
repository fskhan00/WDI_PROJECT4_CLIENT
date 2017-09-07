angular
  .module('propertyApp')
  .factory('Request', requestFactory);

requestFactory.$inject = ['API', '$resource'];
function requestFactory(API, $resource){
  return $resource(`${API}/requests/:id`, { id: '@_id'}, {
    accept: { method: 'GET', url: `${API}/requests/:id/accept` },
    reject: { method: 'GET', url: `${API}/requests/:id/reject` }
  });
}
