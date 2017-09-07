angular
  .module('propertyApp')
  .factory('Rental', rentalFactory);

rentalFactory.$inject = ['API', '$resource'];
function rentalFactory(API, $resource){
  return $resource(`${API}/rentals/:id`, { id: '@_id'});
}
