app.controller('formDuaController',function($scope,$http,$httpParamSerializer){


    $scope.submitNama = function (){
        var modelNama = $scope.nama ;

        if(modelNama === '' || modelNama === undefined){
           alert('Nama masih kosong');
        }else{
           $http({
                method:"POST",
                url:"rest/api/user",
                headers:{"Content-type":"application/x-www-form-urlencoded"},
                data:$httpParamSerializer({
                    nama:modelNama
                })
           }).
           then(
               function ok(response){
                  console.log(response);
               }

               ,

               function error(response){
                  console.log(response);
               }

           );
        }


    };


});