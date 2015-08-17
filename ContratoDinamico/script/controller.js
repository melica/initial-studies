angular.module("contratoDinamico", []);
	angular.module("contratoDinamico").controller("contratoDinamicoController", function($scope){
		$scope.app="contratoDinamico";
		
		$scope.locatario= [
			{nome: "Joao",
			nascionalidade: "brasileiro",
			estadoCivil:"solteiro",
			rg:"30.828.997-3",
			cpf:"293.464.128-79"}
		];
	});