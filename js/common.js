$(document).ready(function (){
	CommonApp.init();
});

var CommonApp = {
  init() {
  	CommonApp.evtHandler()
  },
  evtHandler(){
		$('#signUpBtn').on('click', function() {
			$('#loginForm').hide();
			$('#signUpForm').show();
		});

		$('#signUpBtn').on('click', function() {
			$('#loginForm').hide();
			$('#signUpForm').show();
		});

		$("nav a").on('click', function() {
			$(this).next().slideToggle("100");
		});
	},
	
}