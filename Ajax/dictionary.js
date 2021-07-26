$(document).ready(function(){
   
    $('#load').click(function(){
        $('#dictionary').load("load.html");
        return false;
    });
    // 위 예제 코드는 load 함수를 구현하기 위한 예제 코드이다. 가져올 URL(Load.html)이 위의 코드이며, 아래 코드 id를 load로 가진 a 태그를 클릭하게 되면 load.html을 불러다 id를 dictionary로 가진 div 태그에 붙혀준다. 
});
