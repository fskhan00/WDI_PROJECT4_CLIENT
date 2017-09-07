angular
  .module('propertyApp')
  .controller('PropertiesNewCtrl', PropertiesNewCtrl);

PropertiesNewCtrl.$inject = ['Property', 'Review', '$state'];
function PropertiesNewCtrl(Property, Review, $state) {
  const vm = this;

  vm.addProperty      = addProperty;
  vm.selectReview  = selectReview;
  vm.reviews       = Review.query();
  vm.song         = { genre_ids: [] };

  function addProperty() {
    Property
      .save({ property: vm.property })
      .$promise
      .then(() => $state.go('propertiesIndex'));
  }

  function selectReview(id) {
    if (vm.property.review_ids.indexOf(id) !== -1) {
      const index = vm.property.review_ids.indexOf(id);
      vm.property.review_ids.splice(index, 1);
    } else {
      vm.property.review_ids.push(id);
    }
  }
}
