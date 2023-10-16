
let url = "/ghapp/commands/";

let lights_state = false;
let fan_state = false;
let vent_state = false;
let UVB_1_state = false;
let UVB_2_state = false;
let UVB_3_state = false;
let UVB_4_state = false;

console.log('document',document.getElementById('UVB'))
$("#UVB").click(function(){
	console.log("lights clicked");
	if (!UVB_1_state){
		console.log("turning lights on");
		$.post(url,{"command":11},function(data, status){
			console.log(JSON.stringify(data));
			$("#UVB_response_label").text(JSON.stringify(data));
			UVB_1_state= true;
		});
	}else{
		console.log("turning lights off");
		$.post(url,{"command":10},function(data, status){
			console.log(JSON.stringify(data));
			$("#UVB_response_label").text(JSON.stringify(data));
			UVB_1_state = false;
		});
	}
});
document.getElementById("UVB").addEventListener("click", myFunction);

function myFunction() {
  console.log("vanthutend daaaa")
}
$(function(){
	$("#lights_button").click(function(){
		console.log("lights clicked");
	    if (!lights_state){
	    	console.log("turning lights on");
	    	$.post(url,{"command":101},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#lights_response_label").text(JSON.stringify(data));
	    		lights_state = true;
	    	});
	    }else{
	    	console.log("turning lights off");
	    	$.post(url,{"command":100},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#lights_response_label").text(JSON.stringify(data));
	    		lights_state = false;
	    	});
	    }
	});
	

	$("#UVB_2").click(function(){
		console.log("lights clicked");
	    if (!UVB_2_state){
	    	console.log("turning lights on");
	    	$.post(url,{"command":21},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#UVB_2_response_label").text(JSON.stringify(data));
	    		UVB_2_state = true;
	    	});
	    }else{
	    	console.log("turning lights off");
	    	$.post(url,{"command":20},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#UVB_2_response_label").text(JSON.stringify(data));
	    		UVB_2_state = false;
	    	});
	    }
	});
	$("#UVB_3").click(function(){
		console.log("lights clicked");
	    if (!UVB_3_state){
	    	console.log("turning lights on");
	    	$.post(url,{"command":31},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#UVB_3_response_label").text(JSON.stringify(data));
	    		UVB_3_state = true;
	    	});
	    }else{
	    	console.log("turning lights off");
	    	$.post(url,{"command":30},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#UVB_3_response_label").text(JSON.stringify(data));
	    		UVB_3_state = false;
	    	});
	    }
	});
	$("#UVB_4").click(function(){
		console.log("lights clicked");
	    if (!UVB_4_state){
	    	console.log("turning lights on");
	    	$.post(url,{"command":41},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#UVB_4_response_label").text(JSON.stringify(data));
	    		UVB_4_state = true;
	    	});
	    }else{
	    	console.log("turning lights off");
	    	$.post(url,{"command":40},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#UVB_4_response_label").text(JSON.stringify(data));
	    		UVB_4_state = false;
	    	});
	    }
	});

	$("#fan_button").click(function(){
		console.log("fan clicked");
	    if (!fan_state){
	    	console.log("turning fan on");
	    	$.post(url,{"command":401},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#fan_response_label").text(JSON.stringify(data));
	    		fan_state = true;
	    	});
	    }else{
	    	console.log("turning fan off");
	    	$.post(url,{"command":400},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#fan_response_label").text(JSON.stringify(data));
	    		fan_state = false;
	    	});
	    }
	});
	$("#pump_button").click(function(){
		console.log("turning pump on");
		$("#pump_response_label").text(" ");
	    $.post(url,{"command":300},function(data, status){
			console.log(JSON.stringify(data));
			$("#pump_response_label").text(JSON.stringify(data));
		});
	});
	$("#vent_button").click(function(){
		console.log("vent clicked");
	    if (!vent_state){
	    	console.log("opening vent");
	    	$.post(url,{"command":201},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#vent_response_label").text(JSON.stringify(data));
	    		vent_state = true;
	    	});
	    }else{
	    	console.log("closing vent");
	    	$.post(url,{"command":200},function(data, status){
	    		console.log(JSON.stringify(data));
	    		$("#vent_response_label").text(JSON.stringify(data));
	    		vent_state = false;
	    	});
	    }
	});
});