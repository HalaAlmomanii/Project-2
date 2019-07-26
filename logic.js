
console.log("hi")
var x=0;
var obj={Book1:35,Book2:35,Book3:35,Book4:35}
var arr=[]
$ (document).ready(function(){
 $(".card").on("click",function(){
  arr.push( obj[$(this).siblings("h4").html()])
    console.log(arr)
//     arr[x]=arr[x].slice(0,2)
    console.log(arr)
        x=x+1
        $("#number").html(x)
        console.log(x)
   


   
 })

})

$(document).ready(function(){
$(".col-2 > img").on("mouseover",function(){
      $(this).parent().append("<input type=button  id='info'  value=Quick view>")
  

})
})



$(document).ready(function(){
       $(".col-2").on("mouseleave",function(){
            
              $("#info").remove()
       })


})



$(document).ready(function(){

$(document).on('click', '#info', function() {
       var x=$(this).siblings("h4").text()
       // var x=$(this).siblings("div").children("h4").text()
      console.log(x)
       
 })

})



$(document).ready(function(){
       var result=0;
$("#total").on("click",function(){

for(i=0;i<arr.length;i++)
{ result =result+arr[i]}
 console.log(result)
alert("your total is" + result)


})

})
  