angular
  .module('propertyApp')
  .controller('ReviewsShowCtrl', ReviewsShowCtrl);

ReviewsShowCtrl.$inject = ['Review','User', 'Rental', '$stateParams'];
function ReviewsShowCtrl(Review,User,Rental, $stateParams) {
  const vm = this;

  vm.review = Review.get({ id: $stateParams.id });
}
