(function(scope) {

	console.log('acceptMachine.js has been invoked')

	$(document).ready(function(){

		$('.submit_button').click(function(e) {	

		  e.preventDefault()  

		  // debug
		  console.log("Accept Machine Submit button was clicked")

		  missing = false;
		  message = "";

		  model = "";

		  var data = $('.acceptForm').serializeArray().reduce(function(obj, item) {
		  	if (item.value == "") {
		  		message += "[FIELD]: " + item.name + " is missing. "
		  		missing = true;
		  	} else if (item.name == "model") {
		  		model = item.value;
			}
			obj[item.name] = item.value;
			return obj;
		  }, {});

		  if(missing == true) {
		  	alert(message)
		  	return;
		  }

		  var callback = function(result,message) {
		  	console.log("Reached");
		  	if(result == 0) {
		  		alert("New Machine '" + model + "' was Accepted");
		  	} else {
		  		alert("An Error Occured. " + message)
		  	}
		  }

		  // call function from dbTransactions.js
		  scope.fetchPHPdata(data, "acceptMachine.php", callback);

		});

	});

})(this);
