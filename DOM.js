let txt4 = document.createElement('h2');
txt4.innerHTML = 'Text4';
document.body.append(txt4);

console.log(document.getElementById('t1').innerText);
console.log(document.querySelectorAll('div')[1].innerText); // querySelectorall의 경우 지정한 모든 요소가 선택되므로 배열 형식으로 처리해야 함. 
console.log(document.querySelector('div.t3').innerText); // 