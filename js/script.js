
 let repos = [],currentElem;



function repoCardSample(link0,screen0,name0){
    this.link = link0;
    this.screen = screen0;
    this.name = name0;
    this.show = ()=>{
        $(".pages").html($(".pages").html()+' <div class="pages_card smooth click_card"><div class="card_name">'+this.name+'</div><img src="'+this.screen+'.png" alt="" class="pages_front"><img src="'+this.screen+'_blurred.png" alt="" class="pages_blurred"></div>');
     
    
    }
    // this.hovered = (elem) =>{
    //     $(elem).attr("style","background-image:url("+this.screen+".png)");
    // }
    // this.unhovered = (elem) =>{
    //     $(elem).attr("style","background-image:url("+this.screen+"_blurred.png)");
    // }
}


 repos.push(new repoCardSample("https://nikolassnorkell.github.io/trekking/","img/trekking","trekking free design"));
 repos.push(new repoCardSample("https://nikolassnorkell.github.io/Beauty-Saloon/","img/Beauty_Saloon","Beauty Saloon Template"));
 repos.push(new repoCardSample("https://nikolassnorkell.github.io/HEX-Gradient-Generator/","img/Hex","Hex Gradient Back Generator"));
 repos.push(new repoCardSample("https://nikolassnorkell.github.io/Snake/","img/Snake","Snake Game"));
 repos.push(new repoCardSample("https://nikolassnorkell.github.io/Traffic-Simple-Game/","img/CarGame","Simple Car Traffic Game"));
 repos.push(new repoCardSample("https://nikolassnorkell.github.io/Matrix/","img/Matrix","Matrix"));
 repos.push(new repoCardSample("https://nikolassnorkell.github.io/Digital-Clock/","img/DigitClock","Simple Digital Clock"));
 repos.push(new repoCardSample("https://nikolassnorkell.github.io/Memory-Card-Game/","img/CardMemory","Memory Card Game"));
// // repos.push(new repoCardSample("","images/"));



for(let i=0;i<repos.length;i++){
   repos[i].show();   
};

// reposCards = $(".repoCard");

// for(let i=0;i<reposCards.length;i++){
   

//  setTimeout(function(){
//     $(reposCards).eq(i).css({opacity:"0.8"});
//      $(reposCards).eq(i).css({transform:"translateY(0%)"});
//     },i+2+"00");
// }

// setTimeout(function(){
// $("#snorkell_logo_block").children("img").css({transform:"scale(1) rotate(0deg)",opacity:"1"})
// },500);

// // Hover Cards Animation

// $(".repoCard").mouseenter(function(){
//     repos[$(this).index()].hovered(this);
//     $(this).css({opacity:"1"});  
//     $(this).css({transform:"translateY(0%)"});
//     $(this).children("a").children("span").css("bottom","-50px");
 
// });
// $(".repoCard").mouseleave(function(){
//     repos[$(this).index()].unhovered(this);
//     $(this).css({opacity:"0.8"});
//     $(this).css({transform:"translateY(0%)"});
//     $(this).children("a").children("span").css("bottom","0px");
// });





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







let music_volume = 0.2, music_volume_step=0.03;
let music_control_image;







let back_music = new Audio("music/back3.mp3");
back_music.volume=0;

let click_sound = new Audio("music/click2.mp3");
click_sound.volume=0.6;

let animation_scroll;


$("#stop_anim").fadeOut(0);













$("#play").click(function(){
                 click_sound.play();

                $("#play_start_cont").animate({"opacity":"0"},200);
                setTimeout(function(){
                    $("#play_start_cont").css({"display":"none"});
                },400)
            


                back_music.play();
            let inter = setInterval(() => {
                back_music.volume+=music_volume_step;
                
                    if( back_music.volume>=music_volume) clearInterval(inter);
                   
                }, 200);
                setTimeout(function(){
                    $("#back_image").animate({"opacity":"10%"},800);
                    setInterval(() => {
                            if(  $("#back_image").css("opacity")=="0.1"){
                                $("#back_image").animate({"opacity":"20%"},1000);
                               
                            } else {
                                $("#back_image").animate({"opacity":"10%"},1000);
                               
                            }

                        
                    }, 1500);

                  

                },2500)
               
                setTimeout(function(){
                    $("#top_nav").css("transform","rotateX(0)");
                },2700)
               



                $("#main_block").animate({"opacity":"1"},200);
                setTimeout(function(){
                    $("#main_block").css({"display":"block"});
                },400)



              
                let smoothBlocks = $(".smooth");
                let smoothPoints = $(".smooth_points");

            let k = 0;
            let smoothTop = $(".smooth").eq(k).position();

            let aboutTop = $(".about").position();
            let smoothPointsTop = $(".smooth").eq(k).position();

            $(".smooth_points").css({
                opacity: "0"
                // transform: "translateY(100px)"
            });




            $(window).scroll(function () {

                        if ($(window).scrollTop() >= aboutTop.top+300) {

                            let temp_i =0;
                           let temp = setInterval(() => {

                            
                                $(smoothPoints[temp_i]).animate({opacity:"1"},300);
                                temp_i++;
                                if(temp_i==smoothPoints.length) clearInterval(temp);
                            }, 200);


                                    
                            // if (k < smoothBlocks.length) {
                            //     $(".smooth").eq(k).css({
                            //         opacity: "1",
                            //         transform: "translateY(0px)"
                            //     });

                            //     if (k != smoothBlocks.length - 1) k++;

                            //     smoothTop = $(".smooth").eq(k).position();
                            // }

                        }
        })
                
              













                setTimeout(function(){
                    $("#stop_anim").fadeIn(500);
                   
                            let scroll = 0;
                            animation_scroll = setInterval(() => {
                                scroll+=$(window).height();
                                $('html, body').animate({
                                    scrollTop: scroll,
                                }, 800);
                                if(scroll>=($(".contact").position()).top){
                                    $('html, body').animate({
                                        scrollTop: 0,
                                    }, 1200);
                                    clearInterval(animation_scroll);
                                    $("#stop_anim").fadeOut(500);
                                }
                            }, 1000);
                },3700)



                $("#stop_anim").click(function(){
                    clearInterval(animation_scroll);
                    $(this).fadeOut(500);
                })


                // let spans_letters =  $("#title").children("span");

                // setTimeout(() => {
                  
                //     let num = 0;
                //     setInterval(() => {
                       
                        
                //         $(spans_letters[num]).css({"font-size":"16rem"});
                        
                //         setTimeout(()=>{
                //             $(spans_letters[num]).css("font-size","17rem");
                //         },400)
                //         num++;
                //         if(num==spans_letters.length) num=0;


                //     }, 400);
                  
                // }, 4000);



});




$("#music_control").mouseover(function(){
    $("#music_control").addClass("active");
   
})

$("#music_control").mouseout(function(){
 
    $("#music_control").removeClass("active");
   
})

$("#music_control").click(function(){
    $("#music_control").toggleClass("off");
   
    
    if($(this).hasClass("off")){
        back_music.volume=0;
    } else {
      back_music.volume=music_volume;
      back_music.play();
    }
   
  
})





$("#go_up").fadeOut(0);


$(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    let bar_height = $("#scroll_line").height();
    let doc_height = $(document).height()-$(window).height();
    let koeff = (bar_height/doc_height);
    // koeff = parseFloat(koeff).toFixed(3);

    if(scroll>800) $("#go_up").fadeIn(500);
    if(scroll<800) $("#go_up").fadeOut(500);



    // $("#scroll_ball").css("top",scroll*koeff+"px");
    $("#scroll_cover").css("top",scroll*koeff+"px");
     console.log();




    


});





// $(window).scroll(function (event) {
//     let scroll = $(window).scrollTop();
  
// });


let goUpTop = $("header").position();
$("#go_up").children("img").click(function(){
    $('html, body').animate({
        scrollTop: goUpTop.top,
      }, 800);
});




let contactTop;

$(".contacts").click(function(){
    contactTop = $(".contact").position();
    $('html, body').animate({
        scrollTop: contactTop.top,
      }, 800);
});

let pagesTop;

$(".works").click(function(){
    pagesTop = $(".pages").position();
    $('html, body').animate({
        scrollTop: pagesTop.top,
      }, 800);
});



$(".who").click(function(){
    aboutTop = $(".about").position();
    $('html, body').animate({
        scrollTop: aboutTop.top,
      }, 800);
});





if($(document).width()<768){
    $(".pages_card").toggleClass("click_card");
    $(".pages_front").toggleClass("click_card");

} else {
    $(".pages_card").toggleClass("click_card");
    $(".pages_front").toggleClass("click_card");
}

$(".click_card").click(function(){

    if($(this).hasClass(".pages_card")) {
         window.open(repos[$(this).index()].link,"_blank");
    }
    else {
        window.open(repos[$(this).parent(".pages_card").index()].link,"_blank");
    }
})







