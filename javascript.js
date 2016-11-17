//Javascript functions for the Datepicker(s)

// Dropdown Pickers

		$(function()
	{
	  $('#year').yearpicker();
	  $('#halfyear').halfyearpicker();
	  $('#quarteryear').quarteryearpicker();
	});

	$.fn.extend(
	{
	  yearpicker: function()
	  {
	    var select = $(this);

	    var year = new Date().getFullYear();
	    for (var i = -6; i < 2; i++)
	    {
	      var option = $('<option/>');
	      var year_to_add = year + i;

	      option.val(year_to_add).text(year_to_add);

	      if (year == year_to_add)
	      {
	        option
	          .css('font-weight', 'bold')
	          .attr('selected', 'selected');
	      }

	      select.append(option);
	    }
	  },
	  halfyearpicker: function()
	  {
	    var select = $(this);

	    var date = new Date();
	    var year = date.getFullYear();
	    var half = Math.floor(date.getMonth() / 6);

	    for (var i = -6; i < 2; i++)
	    {
	      var year_to_add = year + i;

	      for (var j = 0; j < 2; j++)
	      {
	        var option = $('<option/>');
	        var half_text = j == 0 ? 'Jan-Jun' : 'Jul-Dec';
	        var value = year_to_add + '-' + (j + 1);
	        var text = year_to_add + ' ' + half_text;

	        option.val(value).text(text);

	        if (year_to_add == year && half == j)
	        {
	          option
	            .css('font-weight', 'bold')
	            .attr('selected', 'selected');
	        }

	        select.append(option);
	      }
	    }
	  },
	  quarteryearpicker: function()
	  {
	    var select = $(this);

	    var date = new Date();
	    var year = date.getFullYear();
	    var quarter = Math.floor(date.getMonth() / 3);

	    for (var i = -6; i < 2; i++)
	    {
	      var year_to_add = year + i;

	      for (var j = 0; j < 4; j++)
	      {
	        var option = $('<option/>');
	        var quarter_text = get_quarter_text(j);

	        var value = year_to_add + '-' + (j + 1);
	        var text = year_to_add + ' ' + quarter_text;

	        option.val(value).text(text);

	        if (year_to_add == year && quarter == j)
	        {
	          option
	            .css('font-weight', 'bold')
	            .attr('selected', 'selected');
	        }

	        select.append(option);
	      }
	    }

	    function get_quarter_text(num)
	    {
	      switch(num)
	      {
	        case 0:
	          return 'Jan-Mar';
	        case 1:
	          return 'Apr-Jun';
	        case 2:
	          return 'Jul-Sep';
	        case 3:
	          return 'Oct-Dec';
	      }
	    }
	  }
	});


	// Hide/Show Single & Range div's
	
	$('.appear').hide();
	$('.range-appear').hide();
	
	$(document).ready(function(){
			$("#single-selector").click(function(){
				$(".appear").toggle();
			});
		});

	$(document).ready(function(){
			$("#range-selector").click(function(){
				$(".range-appear").toggle();
			});
		});


	//Monthselect

	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "October", "November", "December"];

		for (i = new Date().getFullYear() ; i > 2009; i--){
			$.each(months, function (index, value) {
				$('#yearMonthInput').append($('<option />').val(index + "_" + i).html(value + " " + i));
			});
		}



	$(document).ready(function(){
		$('input[type="radio"]').click(function(){
			if($(this).attr("value")=="date-range"){
			 	$(".box").not(".range").hide();
			 	$(".range").show();
			 }
		});
	});
	
	$(document).ready(function(){
		$('input[type="radio"]').click(function(){
			if($(this).attr("value")=="week-range"){
			 	$(".box").not(".week").hide();
			 	$(".week").show();
			 }
		});
	});

	$(document).ready(function(){
		$('input[type="radio"]').click(function(){
			if($(this).attr("value")=="month-range"){
			 	$(".box").not(".month").hide();
			 	$(".month").show();
			 }
		});
	});

	$(document).ready(function(){
		$('input[type="radio"]').click(function(){
			if($(this).attr("value")=="year-range"){
			 	$(".box").not(".year").hide();
			 	$(".year").show();
			 }
		});
	});

	$(document).ready(function(){
		$('input[type="radio"]').click(function(){
			if($(this).attr("value")=="Quarter Year"){
			 	$(".box").not(".quarter").hide();
			 	$(".quarter").show();
			 }
		});
	});
	// Singledatepicker

	$(function() {
		$('#singledate').datepicker({
		  firstDay: 1,
		  maxDate: new Date,
		  dateFormat: "dd-mm-yy",
	      showOtherWeeks: true,
	      showOtherMonths: true,
	      selectOtherMonths: true,
	      changeMonth: true,
	      changeYear: true,
	      showWeek: true,
	      showButtonPanel: true,
	      onClose: function(selected) {
	        $("#to").datepicker("option","minDate", selected)
	      }
	    });
	});

	//Week Picker 

	$('#singleweek').datepicker({
		  firstDay: 1,
		  maxDate: new Date,
	      showOtherMonths: true,
	      selectOtherMonths: true,
	      showButtonPanel: true,
	      changeMonth: true,
	      changeYear: true,
	      showWeek: true,
	      numberOfMonths: 1,
	      showButtonPanel: true,
        onClose: function (dateText, inst) {
            $('#singleweek').val("");
            $('#singleweek').val($.datepicker.iso8601Week(new Date(dateText)));
        }
    });

	//Month Picker

	$(function() {
		  $('#singlemonth').datepicker( {
		  	  firstDay: 1,
		      maxDate: new Date,
		      showOtherWeeks: true,
		      showOtherMonths: true,
		      selectOtherMonths: true,
		      changeMonth: true,
		      changeYear: true,
		      showWeek: true,
		      showButtonPanel: true,
		      dateFormat: 'MM yy',
		      onClose: function(dateText, inst) { 
		          $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
		      }
		  });
	});

	// Yearpicker

	$(function(){
		$('.date-picker-year').datepicker({
			maxDate: new Date,
			firstDay: 1,
	        showOtherWeeks: true,
	      	showOtherMonths: true,
			changeYear: true,
			showWeek: true,
			changeMonth: true,
			showButtonPanel: true,
			dateFormat: 'yy',
			onClose: function(dateText, inst) {
				var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
				$(this).datepicker('setDate', new Date(year, 1));
			}
		});
		$(".date-picker-year").focus(function(){
			$(".ui-datepicker-month").hide();
		});
	});

// Rangepicker

	//Single Dates

	$(document).ready(function(){
	  $("#fromdate").datepicker({
	  	  firstDay: 1,
	  	  dateFormat: "dd-mm-yy",
	      showOtherMonths: true,
	      selectOtherMonths: true,
	      showButtonPanel: true,
	      changeMonth: true,
	      changeYear: true,
	      showWeek: true,
	      maxDate: new Date,
	      numberOfMonths: 1,
	      showButtonPanel: true,
	      onSelect: function(date){
	      	var date2 = $('#fromdate').datepicker('getDate');
	      	date2.setDate(date2.getDate() + 1);
	      	$('#todate').datepicker('option', 'minDate', date2);
	      }
	  });
	  $("#todate").datepicker({ 
	  	  firstDay: 1,
	  	  dateFormat: "dd-mm-yy",
	      showOtherMonths: true,
	      selectOtherMonths: true,
	      changeMonth: true,
	      changeYear: true,
	      showWeek: true,
	      maxDate: new Date,
	      numberOfMonths: 1,
	      showButtonPanel: true,
	      onSelect: function(){
	      	var fromdate = $('#fromdate').datepicker('getDate');
	      	var todate = $('#todate').datepicker('getDate');
	      	if (todate <= fromdate){
	      		var minDate = $('#todate').datepicker('option', 'minDate');
	      	}
	      }
	  });  
	});

	// From Week

	$('#fromweek').datepicker({
		  maxDate: new Date,
		  firstDay: 1,
	      showOtherMonths: true,
	      selectOtherMonths: true,
	      showButtonPanel: true,
	      changeMonth: true,
	      changeYear: true,
	      showWeek: true,
	      numberOfMonths: 1,
	      showButtonPanel: true,
		onSelect: function(dateText, inst){
			$('#fromweek').val("");
			$('#fromweek').val($.datepicker.iso8601Week(new Date(dateText)));
		}
	}); 

	// To Week

	$('#toweek').datepicker({
		  maxDate: new Date,
		  firstDay: 1,
	      showOtherMonths: true,
	      selectOtherMonths: true,
	      showButtonPanel: true,
	      changeMonth: true,
	      changeYear: true,
	      showWeek: true,
	      numberOfMonths: 1,
	      showButtonPanel: true,
		onSelect: function(dateText, inst){
			$('#toweek').val("");
			$('#toweek').val($.datepicker.iso8601Week(new Date(dateText)));
		}
	});

	//From Month to Month

	$(document).ready(function(){
	  $("#frommonth").datepicker({
	  	  firstDay: 1,
	  	  dateFormat: "MM yy",
	      showOtherMonths: true,
	      selectOtherMonths: true,
	      showButtonPanel: true,
	      changeMonth: true,
	      changeYear: true,
	      showWeek: true,
	      maxDate: new Date,
	      numberOfMonths: 1,
	      showButtonPanel: true,
	      onSelect: function(dateText, inst) { 
		          $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth));
		      }
	  });
	  $("#tomonth").datepicker({ 
	  	  firstDay: 1,
	  	  dateFormat: "MM yy",
	      showOtherMonths: true,
	      selectOtherMonths: true,
	      changeMonth: true,
	      changeYear: true,
	      showWeek: true,
	      maxDate: new Date,
	      numberOfMonths: 1,
	      showButtonPanel: true,
	      onClose: function(dateText, inst) { 
		          $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth));
		      }
	  });  
	});

	// From Year to Year

	$(function(){
		$("#fromyear").datepicker({
			maxDate: new Date,
			firstDay: 1,
	        showOtherWeeks: true,
	      	showOtherMonths: true,
			changeYear: true,
			changeMonth: true,
			showWeek: true,
			showButtonPanel: true,
			dateFormat: 'yy',
			onClose: function(dateText, inst) {
				var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
				$(this).datepicker('setDate', new Date(year, 1));
			}
		});
		$(".date-picker-year").focus(function(){
		});
	});

	$(function(){
		$("#toyear").datepicker({
			maxDate: new Date,
			firstDay: 1,
	        showOtherWeeks: true,
	      	showOtherMonths: true,
			changeYear: true,
			changeMonth: true,
			showWeek: true,
			showButtonPanel: true,
			dateFormat: 'yy',
			onClose: function(dateText, inst) {
				var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
				$(this).datepicker('setDate', new Date(year, 1));
			}
		});
		$(".date-picker-year").focus(function(){
		});
	});