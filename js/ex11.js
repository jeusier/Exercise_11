$(document).ready(function(){
	$(function() {
		$("#accordion").accordion({
			heightStyle: "content"
		});
	});

	$(function(){
		$("#tabs").tabs();
	});

	$("#ex11_container").append("<button></button>");


	$("button").button({icons: { primary: "ui-icon-mail-closed"}});
	$("button").button({ label: "Contact Us" });
			$("#slider").slider({
				max: 100,
				min: 0,
				value: 25,
				slide: function(e,ui){
					$("#currentval").html(ui.value);
				}
			});
			$("#datepicker").datepicker({
				changeMonth: true,
				changeYear: true,
				showOtherMonths: true,
				selectOtherMonths: true
			});




		$("#dialog").dialog({ autoOpen: false}).dialog({modal: true}).dialog({minWidth: 400});
		$("button").click(function(){
		
		$("#dialog").dialog("open");

		$(document).tooltip();





	});





	
});


   
