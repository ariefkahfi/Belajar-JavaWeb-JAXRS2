app.controller('formSatuController',function($scope,$http,$httpParamSerializer){

    $scope.submitNama = function (){
        var modelNama = $scope.nama ;
        if(modelNama === '' || modelNama === undefined){
            alert('Nama masih kosong');
        }else{
            $http({
               method:"GET",
               url:"rest/api/user",
               params:{nama:modelNama}
            }).
            then(

                function ok(response){
                  console.log(response);
                },

                function error(response){
                  console.log(response);
                }
            );
        }
    };

});