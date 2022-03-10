



const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
   
    gsap.to(cursor, {duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
    gsap.to(follower, {duration: 0.8, left: e.pageX - 15, top: e.pageY - 15 });

    //오버 효과
    document.querySelectorAll(".mouseOver").forEach(em => {
        em.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
            follower.classList.add("active");
        });
        em.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
            follower.classList.remove("active");
        });
    });

});

    

    $(window).resize(function(){
        let winHeight = $(window).height();
        let winWidth = $(window).width();

        $(".fullpage").outerHeight(winHeight).outerWidth(winWidth);
        
        //----메인배경
        let visualBg_b = $('#visual .visualBg_b');
        let visualBg_s = $('#visual .visualBg_s');
        
        visualBg_b.height(winWidth/2).width(winWidth/2);
        visualBg_s.height(winWidth/2.7).width(winWidth/2.7);
    }).resize();

 

//----전체메뉴
let allMenu = $('#header .allMenu');
allMenu.click(function(){
    allMenu.find('.line').toggleClass('over');
});

//----스크롤
let scroll = $('#visual .scroll .arrow');
function scrollMotion (){
    scroll.toggleClass('motion');
}
setInterval(scrollMotion, 800);



// setTimeout(function(){
//     $('#visual .visualTit span').addClass('active');
// },500);

// function titleMotion (){
//     $('#visual .visualTit span').toggleClass('active');
// }
// setInterval(titleMotion, 3000);



function titleMotion (){
    let el = $('#visual .visualTit');
    let elLength = el.length;
    let elOnIndex = $('#visual .visualTit.active').index();

    el.eq(elOnIndex).removeClass('active');

    if(elLength <= elOnIndex){
        elOnIndex = 0;
    } else {
        elOnIndex = elOnIndex+1
    }
    el.eq(elOnIndex).addClass('active')
}
setInterval(titleMotion, 3000);

// function ClassAppendSetInterval(){
//     var ps = $("div#div p");
//     //var pLength = ps.length == 0 ? 0 : ps.length-1; 
//     var pLength = ps.length; //4 
//     var pOnIndex = $("div#div p.on").index();
    
//     ps.eq(pOnIndex).removeClass("on");
    
//     if(pLength <= pOnIndex){
//         pOnIndex = 0;
//     }else{
//         pOnIndex = pOnIndex+1;
//     }
//     ps.eq(pOnIndex).addClass("on");

//     console.log(pOnIndex); //01234
// }

//let target = document.querySelector('.visualTit_b');
//let targetText = 'I make';
//let targetTextArr = targetText.split(''); //단어 하나하나가 쪼개져서 배열로 분리
//let visualTitle = targetTextArr.join(''); //배열의 아이템을 합침. 각 아이템의 구분자를 ()안에 지정할 수 있음
//target.textContent = visualTitle;

//target.textContent = "<span>"++"</span>"

//target.textContent += targetTextArr.shift();

//target.textContent += targetTextArr.shift();
// function dynamic(){
//     if(targetTextArr.length > 0){
//         target.textContent += targetTextArr.shift();
//         setTimeout(function(){
//             dynamic(targetTextArr);
//         },300);
//     }
// }
// dynamic();

