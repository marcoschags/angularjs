angular
    .module('pessoas', [])
    .controller('CtrlPessoas', function ($scope) {
        $scope.pessoas = [
            {nome: "Maria", cidade: "São Paulo"},
            {nome: "Pedro", cidade: "Salvador"},
            {nome: "João", cidade: "Parnaíba"},
            {nome: "Cleber", cidade: "Barueri"}
        ];
    });