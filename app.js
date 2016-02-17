angular.module('sortApp',[])
	
	.controller('mainController',function($scope){
		$scope.sortType = 'fish'; // set the defauult sort type
		$scope.sortReverse = false; //set the default sort type
		$scope.searchFish = '';

		//create the list of sushi rolls
		$scope.sushi = [
			{ name: 'Dhokla', fish: 'Snack', tastiness: 6 },
    { name: 'Idli', fish: 'Fastfood', tastiness: 2 },
    { name: 'Oondhiyu', fish: 'Cusine', tastiness: 4 },
    { name: 'Khakhara', fish: 'Snack', tastiness: 5 }
		];
	});