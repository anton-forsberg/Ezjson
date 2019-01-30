(function(angular){
    angular.module('ezjson').controller('ezjsonController', ezjsonController);
    
    ezjsonController.$inject = ["$mdToast"];

    function ezjsonController($mdToast){
        var vm = this;
        vm.Input = "";
        
        vm.UpdateOutput = UpdateOutput;
        vm.Toast = Toast;
        
        function UpdateOutput(){
            if (!vm.Input.length){
                vm.Output = undefined;
                return;
            }

            //Split by ',' and '\n'
            var array = vm.Input.split(new RegExp('\,|\\n'));
            
            vm.Output = [];
            
            for (var i = 0; i < array.length; i++){
                var object = {};
                object.Name = array[i];
                
                if (vm.IncludeOrder)
                    object.Order = i;
                
                vm.Output.push(object);
            }
        }
        
        function Toast(text){
            $mdToast.show($mdToast.simple()
                          .textContent(text)
                          .parent(angular.element(document.body))
                          .position('bottom right'));
        }
    }
})(window.angular)