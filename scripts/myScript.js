$(document).ready(function () {

let myWrap = $('.wraper');
$('.myBtn').on('click',function (e) {
    console.log(e.target);
    let myUl = "<ul></ul>";
    let myNum = (Math.random()*1000).toFixed(0);
    console.log(myNum);
    $('<li>New Num - '+myNum+'</li>').appendTo(myUl).appendTo(myWrap);
})

let mySecCommit = 'MySec Commit There';
alert(mySecCommit);

let materCommit_v3 = "V3.0 Commit";
})