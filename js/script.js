
let repos = [],currentElem;



function repoCardSample(link0,screen0,name0){
    this.link = link0;
    this.screen = screen0;
    this.name = name0;
    this.show = ()=>{
        $("#repositories_block").html($("#repositories_block").html()+"<div class='repoCard' style='background-image:url("+this.screen+"_blurred.png);opacity:0;transform:translateY(50%);'><a  href='"+this.link+"'  target='_blank'><span>"+this.name+"</span></a></div>");
     
    
    }
    this.hovered = (elem) =>{
        $(elem).attr("style","background-image:url("+this.screen+".png)");
    }
    this.unhovered = (elem) =>{
        $(elem).attr("style","background-image:url("+this.screen+"_blurred.png)");
    }
}


repos.push(new repoCardSample("https://nikolassnorkell.github.io/trekking/","images/trekking","trekking free design"));
repos.push(new repoCardSample("https://nikolassnorkell.github.io/HEX-Gradient-Generator/","images/Hex","Hex Gradient Back Generator"));
repos.push(new repoCardSample("https://nikolassnorkell.github.io/Traffic-Simple-Game/","images/CarGame","Simple Car Traffic Game"));
repos.push(new repoCardSample("https://nikolassnorkell.github.io/Matrix/","images/Matrix","Matrix"));
repos.push(new repoCardSample("https://nikolassnorkell.github.io/Digital-Clock/","images/DigitClock","Simple Digital Clock"));
repos.push(new repoCardSample("https://nikolassnorkell.github.io/Memory-Card-Game/","images/CardMemory","Memory Card Game"));
// repos.push(new repoCardSample("","images/"));



for(let i=0;i<repos.length;i++){
   repos[i].show();
   
//    console.log(currentElem[i]);
  
 
   
};

reposCards = $(".repoCard");

for(let i=0;i<reposCards.length;i++){
   

 setTimeout(function(){
    $(reposCards).eq(i).css({opacity:"0.8"});
     $(reposCards).eq(i).css({transform:"translateY(0%)"});
    },i+2+"00");
}

setTimeout(function(){
$("#snorkell_logo_block").children("img").css({transform:"scale(1) rotate(0deg)",opacity:"1"})
},500);

// Hover Cards Animation

$(".repoCard").mouseenter(function(){
    repos[$(this).index()].hovered(this);
    $(this).css({opacity:"1"});  
    $(this).css({transform:"translateY(0%)"});
    $(this).children("a").children("span").css("bottom","-50px");
 
});
$(".repoCard").mouseleave(function(){
    repos[$(this).index()].unhovered(this);
    $(this).css({opacity:"0.8"});
    $(this).css({transform:"translateY(0%)"});
    $(this).children("a").children("span").css("bottom","0px");
});





// Version Banner
setTimeout(()=>{
    $("#version").animate({
        top:"10px"
    });

    setTimeout(()=>{
        $("#version").animate({
            top:"-50px"
        });
    
    
        
    },2500)

},1500)

