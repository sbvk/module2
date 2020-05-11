
var buy=[
    {
      name:"Milk",
      quantity:"20"
    },
    {
      name:"butter",
      quantity:"50"
    },
    {
      name:"egg",
      quantity:"500"
    },
    {
      name:"bread",
      quantity:"150"
    },
    {
      name:"cheese",
      quantity:"700"
    },
    {
      name:"cookies",
      quantity:"950"
    },
    {
      name:"dough",
      quantity:"350"
    }
  ];
   var items=[];
  
  angular.module("ShoppingListCheckOff",[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
  ToBuyController.$inject=['$scope','ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject=['$scope','ShoppingListCheckOffService'];
  function ToBuyController($scope,ShoppingListCheckOffService)
  {
    $scope.buy=buy;
    var toBuy=this;
    toBuy.removeItem=function(itemIndex){
      ShoppingListCheckOffService.removeItem(itemIndex);
    }
  }
  
  function AlreadyBoughtController($scope,ShoppingListCheckOffService)
  {
    var bought=this;
    $scope.items=items;
  }
  
  
  function ShoppingListCheckOffService(){
    service=this;
    
   service.removeItem=function(itemIndex)
    {
      
    
     var item={
        name: buy[itemIndex].name,
       quantity:buy[itemIndex].quantity
     };
     items.push(item);
     buy.splice(itemIndex,1);
    };
    
  }   