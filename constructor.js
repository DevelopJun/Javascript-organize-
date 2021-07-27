function Product(name, price){
    this.name = name;
    this.price = price;
    this.getInfo = function(){
        return this.name + " , " + this.price;
    }
}

let p1 = new Product("애플 아이폰", 1000000);
let p2 = new Product();
p2.name = "삼성 갤럭시"
p2.price = "11000000";

console.log(p1.getInfo());
console.log(p2.getInfo());