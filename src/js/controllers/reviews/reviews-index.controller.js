angular
  .module('propertyApp')
  .controller('ReviewsIndexCtrl', ReviewsIndexCtrl);

ReviewsIndexCtrl.$inject = ['Review'];
function ReviewsIndexCtrl(Review) {
  const vm = this;

  vm.reviews = Review.query();
}
