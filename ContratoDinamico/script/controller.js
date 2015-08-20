angular.module("contratoDinamico", []);
	angular.module("contratoDinamico").controller("contratoDinamicoController", function($scope){
		$scope.app="contratoDinamico";
		
		$scope.locatarios= [
			{nome:"",
			nascionalidade:"",
			estadoCivil:"",
			rg:"",
			cpf:""}
		];

		$scope.addLocatario = function(locatario){
			$scope.locatarios.push(angular.copy(locatario));
			//delete $scope.locatario;
			//$scope.locatarioForm.$setPristine();
		}
	});