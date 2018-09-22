var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.myvar = 56;
 $scope.username = '';
  $scope.invoice =
  {
    items :
    [
      {
        name : '',
        description: '',
        qty: 1,
        price: 0
      }
    ]
  };
  
  $scope.add = function(){
    $scope.invoice.items.push({
      name: '',
      description: '',
      qty: 1,
      price: 0
    });
  }

    $scope.remove = function(index){
    $scope.invoice.items.splice(index, 1);
  },
    $scope.total = function(){
    var total = 0;
    angular.forEach($scope.invoice.items, function(item){
      total += item.qty * item.price;
      $scope.name = total;
    
       
    });
    return total;
  }
 $scope.myfun = ()=>
 {
   window.alert($scope.name);
 }
    
}]);