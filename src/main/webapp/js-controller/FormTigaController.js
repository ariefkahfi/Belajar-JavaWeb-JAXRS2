app.controller('formTigaController',function($scope){
    $scope.cars = ['Ferrari','Lamborghini','Bugatti','Blabla'];

    $scope.submit = function (){
        var modelMobil = $scope.mobil;

        console.log('Mobil : ' + modelMobil);

        //cara catch value dari tag option javascript
        var options = document.querySelector('#lokasi');

        console.log(options[options.selectedIndex].value);

        //cara catch value dari tag option di jquery
        var opt = $('#lokasi option:selected').val();

        console.log('jquery options : ' + opt);

        //cara ke-1 untuk getValue dari checkbox
        var cek1 = document.getElementsByName('h');


        for(var i=0; i<cek1.length; i++){
            if(cek1[i].checked){
                console.log(cek1[i].value);
            }
        }

        //cara ke-2 untuk getValue dari checkbox(Jquery)
       $('.a:checked').each(function (index,element){
            console.log('index ke : ' + index + "element value : " + element.value);
            console.log($(this).val());
       });



    }

});