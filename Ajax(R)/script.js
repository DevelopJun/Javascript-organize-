$(function(){
    $('#call').click(function(){
        $('#show').html('.....loading...'); // .html은 선택한 요소의 내용을 가져오거나, 다른 내용으로 바꿈.

        $.ajax({
            type: "GET",
            // url: "MOCK_DATA.json", // 혜원님이 만들어준 api 완성시에 부르면 된다. 
            url : "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20210101",
            async: false,
            success:function(data){
                const final = [];
                for(var i = 0; i < data.boxOfficeResult.dailyBoxOfficeList.length; i++ ){
                // $('#show').html(JSON.stringify(data.boxOfficeResult.dailyBoxOfficeList[i].movieNm)); // JSON.stringify()는 자바스크립트 값을 Json 문자열로 변환한다.  
                final[data.boxOfficeResult.dailyBoxOfficeList[i].rank] = data.boxOfficeResult.dailyBoxOfficeList[i].movieNm;    
            };
            // for(var i = 0; i < data.boxOfficeResult.dailyBoxOfficeList.length; i++ ){
            //     $('#show').html(final[i]);
            // }
           
            // $.each(final, function (index, item) { 

            // },
            $.each(final, function (index, item) { 
                var result = ''; 
                result += index +' 위는 : ' + item; 
                
                document.write(result, '<br>');
                
                  
            })
            }
        })
         // JSON.stringify()는 자바스크립트 값을 Json 문자열로 변환한다.  
    })
    return final;
})
