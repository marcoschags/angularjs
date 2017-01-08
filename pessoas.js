angular
    .module('pessoas', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'listar.html'
            });
    })
    
    .controller('CtrlPessoas', function ($scope) {
        $scope.pessoas = [
            {nome: "Maria", cidade: "São Paulo"},
            {nome: "Pedro", cidade: "Salvador"},
            {nome: "João", cidade: "Parnaíba"},
            {nome: "Cleber", cidade: "Barueri"}
        ];
    })
    .controller('CtrlAdicionar', function ($scope) {
        $scope.add = function () {
            $scope.pessoas.push({
               nome: $scope.pessoa.nome,
               cidade: $scope.pessoa.cidade
            });
        };
    });