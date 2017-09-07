angular
  .module('propertyApp')
  .factory('Property', propertyFactory);

propertyFactory.$inject = ['API', '$resource'];
function propertyFactory(API, $resource){
  return $resource(`${API}/properties/:id`, { id: '@_id'}, {'update': {method: 'PUT'}});
}
