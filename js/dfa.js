var State = function(f){
	this.nextState = [0,1];
	this.getNextState = function(a){
		if(a==null) a = false;
		return this.nextState[a];
	}
	this.isfinal = f;
	this.active = "";
};

var Controller = function($scope){
	$scope.string = "";
	$scope.verdict = false;
	$scope.states = [
		new State(),
		new State(),
		new State(true)
	];
	$scope.$watch('string',function(ne,old){
		$scope.verdict = $scope.checkIfAcc(ne);
	});
	$scope.$watch('states',function(ne,old){
		console.log("asd");
		$scope.verdict = $scope.checkIfAcc($scope.string);
	});
	$scope.addState = function(f){
		if(f==null) f = false;
		$scope.states.push(new State(f));
	}
	$scope.removeState = function(){
		$scope.states.pop();
	}
	$scope.checkIfAcc = function(str){
		var state = 0;
		for (var i = 0; i < $scope.states.length; i++)
			$scope.states[i].active = "";
		for (var i = 0; i < str.length; i++)
			state = $scope.states[state].getNextState(parseInt(str[i]));
		$scope.states[state].active = "active";
		return ($scope.states[state].isfinal);
	}
}
