$(document).ready(function(){
	$(function() {
		$("#accordion").accordion({
			heightStyle: "content"
		});
	});

	$(function(){
		$("#tabs").tabs();
	});

	$("#ex11_container").append("<button id='contactus'></button>");

	$(function(){
		$("#contactus").button({icons: { primary: "ui-icon-mail-closed"}});
		$("#contactus").button({ label: "Contact Us" });
	});

	$(function(){
		var devNames = ["Jason S", "Jason P", "Derek A", "Kingtak W", "Ray F", "Tyler B", "Jon B"," Kelli B"];
		$("#devnames").autocomplete({
			source: devNames
		});

	});



	$(function() {
		$( "#datepicker" ).datepicker({
			changeMonth: true,
			changeYear: true,
			showOtherMonths: true,
			selectOtherMonths: true
		});
		$( "#anim" ).change(function() {
		$( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
		});
	});



	$(function(){
		$("#dialog").dialog({ autoOpen: false}).dialog({modal: true}).dialog({minWidth: 400});
		$("button").click(function(){
			$("#dialog").dialog("open");
			$(document).tooltip();
		});
	});


	 $(function() {
		$( "#slider" ).slider({
		value:25,
		min: 0,
		max: 100,
		step: 1,
		slide: function( event, ui ) {
		$( "#amount" ).val(ui.value );
		}
		});
		$( "#amount" ).val($( "#slider" ).slider( "value" ) );
	});

	
});

	function submitFunction(){
		document.getElementById("myForm").submit();
	}


   
