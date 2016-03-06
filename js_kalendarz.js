var luty;
var generujDni;
var reserveCounter;
var kalJSON;

$(document).ready(function() {

	Kalendarz=function() {
		$.get("rezerwacje.json",function(rezer){
		luty=JSON.parse(rezer).luty;
		$(".month").html("");	
			
		for(var i=1;i<luty.length+1;i++) {
			if(luty[i-1]==1) {rez=" unavail"}
			else {rez=""}
			var dzien1="<div class=\"dzien"+rez+"\">"+i+"</div>";
			$(".month").append(dzien1);	
			}					

			
		$(".dzien").click(function() {
			if($(this).hasClass("unavail")) {
			}
			else {
				$(this).toggleClass("reserve");
				 reserveCounter=0;
				 kalJSON='{"luty":[';
				 $(".dzien").each(function(index){
					 if ($(this).hasClass("reserve")||$(this).hasClass("unavail")) {
						 kalJSON+='1';
							 if ($(this).hasClass("reserve")) {
								 reserveCounter+=1;
								 $("#counter").html("Zarezerwowano dni: "+reserveCounter+"<br>Koszt: "+reserveCounter*20+" PLN<br>");				
							 }
						 }
					 else {
						 kalJSON+='0';
						 }
					 if(index<$(".dzien").length-1) {
						 kalJSON+=',';
					 }
				 });
				kalJSON+="]}";
			}
		});
		});
	}
	Kalendarz();

	
	rezerwuj=function() {
		$("#counter").html("Zarezerwowano: "+reserveCounter+" dni");
		$.post("rezerwacje.php",{kalendarz:kalJSON},function(wynik) {
			$("#counter").append("<br>"+wynik);
		});
	}
	
//................................................
//  JQ Funkcja wysyła zapytanie POST do pliku PHP form input, PHP go przetwarza i zapisuje w pliku JSON na serwerze, a zapytanie GET przy użyciu JQ pobiera nową treść pliku JSON, parsuje ją i wyświetla zadaną wartość z key/value pairs
//	getPostSavePrint=function() {
//		a=$("#name").val();
//		
//		$.post("skryptphp.php",{name:a},function(data){
//			$("#demo").html(data);
//		});
//		
//		$.getJSON("get.json",function(wsad2) {
//		$("#demo").html(wsad2.imie);
//		});
//	}

//................................................
//  JQ Funkcja wysyłająca do skrptphp.php imię "Ania", który wysyła powitanie z powrotem do funkcji CB wyswietlajacej go w html
//	var wyslijformularz=function(a) {
//		$.post("skryptphp.php",{name:a},function(data){
//			$("#demo2").html(data);
//		});
//	};
//	wyslijformularz("Ania");

//................................................	
//  JQ Funkcja pobierająca odpowiedź z pliku PHP do funkcji CB
//	$.get("skryptphp.php",function(data){
//		$("#demo").html(data);
//	});
	
//................................................	
//  JS Funkcja pobierająca odpowiedź z pliku PHP do funkcji CB
//	var xhr=new XMLHttpRequest();
//	var urll="get.json";
//	xhr.open("GET",urll,function(wsad){
//		$("#demo").html(wsad);
//	});
//	
//	xhr.send();
//	
//xhr.onreadystatechange = function() {
//  if (xhr.readyState == 4 && xhr.status == 200) {
//    $("#demo").html(xhr.response);
//  }
//}


	
});

