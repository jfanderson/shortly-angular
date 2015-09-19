angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {
    links: []
  };

  $scope.getLinks = function () {
    Links.retrieve().then(function (data) {
      $scope.data.links = data;
    });
  };

  $scope.signout = function() {
    Auth.signout();
  };

  $scope.getLinks();
});
