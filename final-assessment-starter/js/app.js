var app = angular.module("ticketKiosk", ["ui.bootstrap"]);
app.controller("ticketController", function($scope) {


  $scope.consumers = [];
  $scope.newsFeed = function (name, numTix){
    if (numTix ===1){
      $scope.consumers.unshift(name + " has bought " + numTix + " ticket")
    } else {
        $scope.consumers.unshift(name + " has bought " + numTix + " tickets")
    }
    $scope.name = ""
    $scope.numTix = 1
  }



});
