app.controller("ngController" ,function($scope){
		$scope.FirstName="Remo";
		$scope.LastName="Roy";
		$scope.ChangeName=function(){
			$scope.FirstName="Abhishek";
			$scope.LastName="Roy";
		}
		});
		