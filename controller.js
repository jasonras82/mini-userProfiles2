angular.module('userProfiles').controller('MainController', function($scope, mainService) {
 mainService.getUsers()
  .then(function(result) {
    $scope.users = result.data.data;
  }, function(err) {
    console.log(err);
  });
});
