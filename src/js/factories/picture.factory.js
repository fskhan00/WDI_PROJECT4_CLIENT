angular
  .module('propertyApp')
  .factory('Picture', pictureFactory);

pictureFactory.$inject = ['API', '$resource'];
function pictureFactory(API, $resource){
  return $resource(`${API}/pictures/:id`, { id: '@_id'}, {'update': {method: 'PUT'}});
}
