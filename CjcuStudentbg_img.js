console.log('hi');
//頭貼更改
var photo=document.querySelectorAll('img');
photo[1].src='https://imgur.dcard.tw/JII96rfh.jpg';
photo[1].style.backgroundSize = 'auto';
//通知訊息 更改背景

try{
    var massenger = document.getElementsByClassName('alert alert-success')[0];
    //上面[0]是因為如果有同Class可以指定第幾個
    console.log(massenger);
    massenger.style.backgroundImage = "url('https://grinews.com/news/wp-content/uploads/2015/07/%E9%9A%A8%E6%A9%9F%E7%A0%8D%E4%BA%BA%E6%A8%A1%E5%80%A3%E6%95%88%E6%87%89.jpg')"
    massenger.style.backgroundRepeat = "repeat-y"
    massenger.style.backgroundSize = 'cover'
    massenger.style.backgroundPasition = 'top'

}
catch{

}
//更改常用功能的樣式
try{
    var MyLists = document.getElementsByClassName("panel-heading")[0];
    console.log(MyLists);
    // MyLists.style.backgroundColor = "#CC0000";
    MyLists.style.backgroundImage = "linear-gradient(to bottom,#CC0000 0%,#CC0000 100%)";
}
catch{

}
//主介面更改
var a = document.querySelectorAll('div')[3];
var b = document.getElementsByClassName('pagebody')[0];
console.log(a);
a.style.backgroundColor = "#CC0000";
b.style.backgroundColor = "red";
try{
    var fontColor = document.querySelectorAll("a");
    console.log(fontColor);
    for(var i = 0;i<fontColor.length;i++){
        fontColor[i].style.color = "#FF8888";
    }
    

}
catch(console){
    console.error(error)
}