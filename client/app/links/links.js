angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Links, Auth) {
  // Your code here
  // Links.getAll();
  $scope.data = {};
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });
  // $scope.linksHtml = <div> this is the links div</div> 
  $scope.signout = function() {
    Auth.signout();
    $location.path('/signin');
  };
});
