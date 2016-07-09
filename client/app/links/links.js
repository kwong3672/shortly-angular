angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // Links.getAll();
  $scope.data = {};
  Links.getAll().then(function(data) {
    console.log('#####################################', data);
    $scope.data.links = data;
  });
});
