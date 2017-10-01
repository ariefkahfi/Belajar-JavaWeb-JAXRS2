app.controller('formJsonController',function($scope,$http){
        $scope.submitData = function (){
            var modelNama = $scope.nama;
            var modelGender =$scope.gender;

            if(modelNama === '' || modelNama === undefined
            || modelGender === '' || modelGender === undefined){
               alert('Masih ada form yang kosong');
            }else{
               $http({
                  url:"rest/api/user/json",
                  method:"POST",
                  data:{
                      nama:modelNama,
                      gender:modelGender
                  }
               }).
               then(
                   function ok(response){
                      console.log("Gender : " + response.data.gender + " Nama : " + response.data.nama);
                   },

                   function error(response){
                      console.log(response);
                   }

                   );
            }

        };
});