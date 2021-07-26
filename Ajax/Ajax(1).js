
// 객체 생성부분
var xmlhttp;
if(window.XMLHttpRequest){ // javaScript Ajax 구현에 있어서 XMLHttpRequest객체는 반드시 필요한 객체이다. 대부분의 웹 브라우저는 XHR 지원한다. 만약에 지원을 안하면 ActiveXobject 사용.
    xmlhttp = new XMLHttpRequest();
}
else{
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
}

 // Ajax 구현 부분 
 xmlhttp.onreadystatechange = function(){
     if(xmlhttp.readyState == 4 && xmlhttp.status == 200){ //readyState 는 ajax통신의 진행중인 상태를 알려준다. Status는 데이터 수신의 성공 여부를 판단.
         // 통신 성공시 구현 부분 
     }
 }

 xmlhttp.open("GET", "exam.xml", true);
 xmlhttp.send();