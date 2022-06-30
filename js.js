window.addEventListener('load', (event) => {
    $('.arrowSlide').click(function(){
        $('.hoverSlide').addClass('bienmat');
    })
    var selects = document.querySelectorAll('.item-submenu-select');
    var replaceHere = document.querySelector('.replaceHere');
    $('#item1').hover(function(){
        $('.hoverMenu').addClass('bienmat');
    });
    $('.look').click(function(){
        $('.hoverFind').addClass('bienmat');
    });
    [...selects].forEach( e =>{
        e.addEventListener("click" , function(){
            var text = e.innerHTML;
            replaceHere.innerHTML = text;
            $('.submenu-select').removeClass('animationSelect')
        })
    })
   
    $('#look').click(function(){
        $('.box-look').toggleClass('xuathienflex');
    });
    setInterval(() => {
        $('#bannerArrow').trigger('click');
    }, 5000);
    $('.item').hover(function () {
        $(this).toggleClass('active');
        $(this).find('.border').toggleClass('xuathien');
        $(this).find('.fa-angle-down').toggleClass('xuathien');
        $(this).find('.submenu').toggleClass('xuathien2');
        $(this).find('.submenu').toggleClass('zindex');
        $('.item-submenu').hover(function () {
            $(this).find('.submenu2').toggleClass('xuathien2');
        });
    });
    $('.item-submenu').hover(function(){
        $(this).toggleClass('z-index5');
    })
    $('.submenu2').find('.item-submenu2:first-child').addClass('box-shadow');

    // get height banner max
    var banner = document.querySelectorAll('.bannerImg')[1];
    var bannerMain = document.querySelector('.banner');
    heightBanner = banner.offsetHeight;
    bannerMain.style = `height : ${heightBanner}px`;
    //
    // click banner
    $('.arrowbanner').click(function () {

        if ($('.bannerImg').hasClass('opacity0') == true) {
            banner.classList.add('opacity1');

            setTimeout(() => {
                banner.classList.remove("opacity0");
            }, 500);
        }
        else {
            banner.classList.add('opacity0');
            banner.classList.remove('opacity1');
        }
    });

    //
    //select
    $('.Topselect').click(function () {
        $('.submenu-select').toggleClass('animationSelect');

    })
    //

    // slider
    var slider = document.querySelector('.slider');
    var itemSlider = document.querySelectorAll('.item-slider')[0];
    var itemSliders = document.querySelectorAll('.item-slider');
    var length = itemSliders.length;
    var widthItemSlider = itemSlider.offsetWidth;
    var left1 = document.getElementById('left1');
    var slideMain = document.querySelector('.slidemain');
    var WFS = slideMain.offsetWidth;
   
    
    var right1 = document.getElementById('right1');
    $('#left1').click(function () {
        if($(this).hasClass('stop')==true){
            return
        }
        else{
            $(this).addClass('stop');
            setTimeout(() => {
                $(this).removeClass('stop');
               }, 1000);
        $('.item-slider').eq(length - 1).clone().insertBefore('.item-slider:first-child');
        $('.item-slider').eq(length).remove();


        slider.style = `transform : translateX( ${-1 * widthItemSlider}px)`;
        slider.style.transition = "none"
        setTimeout(() => {
            slider.style = `transform : translateX( 0px)`;
        }, 1);
    }
    });
    $('#right1').click(function () {
        
        
        if($(this).hasClass('stop')==true){
            return
        }
        else{
            $(this).addClass('stop');
            setTimeout(() => {
                $(this).removeClass('stop');
               }, 1000);
            slider.style = `transform : translateX( ${-1 * widthItemSlider}px)`;
            $('.item-slider').eq(0).clone().insertAfter('.item-slider:last-child');
            setTimeout(() => {
                $('.item-slider').eq(0).remove()
                slider.style = `transform : translateX(0px)`;
                slider.style = `transition : none`
            }, 500);
        }
       
    });
    //

    // slide2
    var slide2 = document.querySelector('.slide2')
    var itemSlide2 = document.querySelectorAll('.item-slide2')[0];
    var itemSlide3 = document.querySelectorAll('.item-slide3')[0];
    var itemSlide22 = document.querySelectorAll('.item-slide2');
    var itemSlide23 = document.querySelectorAll('.item-slide3');
    var length2 = itemSlide22.length;
    var heightItemSlide2 = itemSlide2.offsetHeight;
    var length3 = itemSlide23.length;
    var heightItemSlide3 = itemSlide3.offsetHeight;
    var slide3 = document.querySelector('.slide3');
    $('#right2').click(function () {
        if($(this).hasClass('stop')==true){
            return
        }
        else{
            $(this).addClass('stop');
            setTimeout(() => {
                $(this).removeClass('stop');
               }, 800);
        slide2.style = `transform : translateY(${-1 * heightItemSlide2}px)`
        $('.item-slide2').eq(0).clone().insertAfter('.item-slide2:last-child');
        setTimeout(() => {
            $('.item-slide2').eq(0).remove();
            slide2.style = `transform : translateY(${0}px)`
            slide2.style = `transition: 0s`
        }, 500);
    }
    });

    function right2() {
        
        
    }

    $('#left2').click(function () {
        if($(this).hasClass('stop')==true){
            return
        }
        else{
            $(this).addClass('stop');
            setTimeout(() => {
                $(this).removeClass('stop');
               }, 800);
        slide2.style = `transform : translateY(${-1 * heightItemSlide2}px)`;
        slide2.style.transition = "0s"
        $('.item-slide2').eq(length2 - 1).clone().insertBefore('.item-slide2:first-child');
        setTimeout(() => {
            slide2.style = `transform : translateY(${0}px)`;
            $('.item-slide2').eq(length2).remove();
        }, 20);
    }
    });
    function left2() {
        
        
    }
    //
    //slide3 
    $('#right3').click(function () {
        if($(this).hasClass('stop')==true){
            return
        }
        else{
            $(this).addClass('stop');
            setTimeout(() => {
                $(this).removeClass('stop');
               }, 800);
        slide3.style = `transform : translateY(${-1 * heightItemSlide3}px)`
        $('.item-slide3').eq(0).clone().insertAfter('.item-slide3:last-child');
        setTimeout(() => {
            $('.item-slide3').eq(0).remove();
            slide3.style = `transform : translateY(${0}px)`
            slide3.style = `transition: 0s`
        }, 500);
    }
    });
    function right3() {
        
        slide3.style = `transform : translateY(${-1 * heightItemSlide3}px)`
        $('.item-slide3').eq(0).clone().insertAfter('.item-slide3:last-child');
        setTimeout(() => {
            $('.item-slide3').eq(0).remove();
            slide3.style = `transform : translateY(${0}px)`
            slide3.style = `transition: 0s`
        }, 500);
    }
    $('#left3').click(function () {
        if($(this).hasClass('stop')==true){
            return
        }
        else{
            $(this).addClass('stop');
            setTimeout(() => {
                $(this).removeClass('stop');
               }, 800);
        slide3.style = `transform : translateY(${-1 * heightItemSlide3}px)`;
        slide3.style.transition = "0s"
        $('.item-slide3').eq(length2 - 1).clone().insertBefore('.item-slide3:first-child');
        setTimeout(() => {
            slide3.style = `transform : translateY(${0}px)`;
            $('.item-slide3').eq(length3).remove();
        }, 20);
    }
    });
    function left3() {
       
    }
    //

    //talk

    var box = document.querySelector('.box');
    var heightBox = box.offsetHeight;
    var itemBox = document.querySelectorAll('.itembox')[0];
    var heightmain = itemBox.offsetHeight;
    box.style = `height : ${heightmain}px`
    var widthItemBox = itemBox.offsetWidth;
    var itemBoxs = document.querySelectorAll('.itembox');
    var lengthItemBox = itemBoxs.length;
    var avatar = document.querySelectorAll('.avatar');
    var y = 0;
    var test = document.getElementById('test');
    var dem=0;
    var trigger = document.querySelector('.trigger');
    function testClick(){
        test.addEventListener("click" , function(){
            [...itemBoxs].forEach(e =>{
                if(e.classList.contains('active')==true){
                   var x = e.dataset.index;
                   x++;
                   if(x >= lengthItemBox){
                     itemBoxs[5].classList.remove('active');
                     itemBox.style = `margin-left : ${ - 1 * 0 * widthItemBox}px`;
                     setTimeout(() => {
                        itemBoxs[0].classList.add('active');
                     }, 200);
                   }
                   else{
                   // trigger
                    [...avatar].forEach(e => {
                        var y = e.dataset.index;
                        y++;
                        if (x == y){
                            var rect = avatar[y].getBoundingClientRect().left;
                            var WidthOfTrigger = trigger.offsetWidth/2;
                          
                            var HalfWidth = e.offsetWidth/2;
                           
                            
                            var RectOfBox = box.getBoundingClientRect().left;
                            var pos = rect + HalfWidth - RectOfBox -WidthOfTrigger +"px";
                           
                            trigger.style = `left : ${pos}`;
                        }
                    });
                    itemBox.style = `margin-left : ${ - 1 * x * widthItemBox}px`;
                    e.classList.remove('active');
                  setTimeout(() => {
                     itemBoxs[x].classList.add('active');
                     console.log(x)
                  }, 300);
                  setTimeout(() => {
                     [...itemBoxs].forEach(event =>{
                         if(event.classList.contains('active')==true){
                             var x = this.dataset.index;
                              hei = event.offsetHeight
                             box.style = `height : ${hei}px`;
                             
                         }
                        
                     });
                    }, 300);
                   }
                  
                }
               
            })
        });
    }
    testClick();

    
  function setin(){
      console.log("Set in ter val")
    interval = setInterval(() => {
        $('#test').trigger('click');
        
    }, 8000);
  }
  setin();
    function clearInterval2(){
        clearInterval(interval);
        console.log("clear interval")
    }
   
    function auto(){
      var x = -1 ;
      setTimeout(() => {
         setInterval(() => {
           
            if(x == lengthItemBox -1){
                x = -1;
            }
            else {
                x++;
                console.log(x);
                [...itemBoxs].forEach(e => {
                    var m = e.dataset.index;
                    if(m == x){
                        e.classList.add('active');
                        itemBox.style = `margin-left : ${ - 1 * x * widthItemBox}px`;
                    }
                    else{
                        e.classList.remove('active');
                    }
                    setTimeout(() => {
                        [...itemBoxs].forEach(event =>{
                            if(event.classList.contains('active')==true){
                                var x = event.dataset.index;
                                 hei = event.offsetHeight
                                box.style = `height : ${hei}px`;
                                
                            }
                           
                        });
                       }, 300);
                })
            }
         }, 2000);
      }, 4000);
       
       
    }
  
       var rect = avatar[0].getBoundingClientRect().left;
       var WidthOfTrigger = trigger.offsetWidth/2;
       
       var HalfWidth = avatar[0].offsetWidth/2;
      
       
       var RectOfBox = box.getBoundingClientRect().left;
       var pos = rect + HalfWidth - RectOfBox -WidthOfTrigger +"px";
      
       trigger.style = `left : ${pos}`;
       
  
   
    [...avatar].forEach(e =>{
        e.addEventListener("click" , function(){
            clearInterval2();
            setTimeout(() => {
                setin();
            }, 50);
            var x = e.dataset.index;
            [...avatar].forEach(e => {
                var y = e.dataset.index;
               
                
                if (x == y){
                    var rect = avatar[y].getBoundingClientRect().left;
                    var WidthOfTrigger = trigger.offsetWidth/2;
                  
                    var HalfWidth = e.offsetWidth/2;
                   
                    
                    var RectOfBox = box.getBoundingClientRect().left;
                    var pos = rect + HalfWidth - RectOfBox -WidthOfTrigger +"px";
                   
                    trigger.style = `left : ${pos}`;
                }
                
               
            });
            [...itemBoxs].forEach(el =>{
                itemBox.style = `margin-left : ${ - 1 * x * widthItemBox}px`;
                var y = el.dataset.index;
                if(x==y){
                    el.classList.add('active')
                   
                }
                else {
                    el.classList.remove('active')
                }
            });
           setTimeout(() => {
            [...itemBoxs].forEach(event =>{
                if(event.classList.contains('active')==true){
                    var x = this.dataset.index;
                     hei = event.offsetHeight
                    box.style = `height : ${hei}px`;
                    
                }
               
            });
           }, 300);
           
        });
       
    });
// responsive
var o = window.matchMedia("(max-width: 996px)");
if (o.matches) { // If media query matches
    var p = WFS/4 - 5 +"px";
        [...itemSliders].forEach( e => {
            e.style = `width : ${p}`
        });
  } 
  
  var o2 = window.matchMedia("(max-width: 912px)");
if (o2.matches) { // If media query matches
    var p = WFS/3.05  +"px";
        [...itemSliders].forEach( e => {
            e.style = `width : ${p}`
        });
  } 
  //
  // menu Responsive
  var mainAllLeft = document.querySelectorAll('.mainAllLeft1')[0];
  var mainAllLefts = document.querySelector('.mainAllLeft');
  var click1 = document.getElementById('arrow1');
  var arrows = document.querySelectorAll('.arrow_item-mainAllLeft');
  var itemarrows = document.querySelectorAll('.mainAllLeft3-one');
  var logomenu = document.getElementById('logomenu');
  var allLeft = document.querySelector('.allLeft');
  var overlay = document.querySelector('.overlay');
  var cross1 = document.getElementById('cross1');
  var cross2 = document.getElementById('cross2');
  var cross3 = document.getElementById('cross3');
  overlay.addEventListener("click" , function(){
     
      if(allLeft.classList.contains('LeftToRight')==true){
        allLeft.classList.add('RightToLeft');
        allLeft.classList.remove('LeftToRight');
        $('body,html').removeClass('overflow');
        cross1.classList.remove('cross1'); 
        cross2.classList.remove('cross2');
        cross3.classList.remove('cross3');
        overlay.style = `z-index : 0`;
      setTimeout(() => {
        allLeft.style = `margin-left : -340px`;
       
      }, 500);
    }
    else {
        cross1.classList.add('cross1');
        cross2.classList.add('cross2');
        cross3.classList.add('cross3');
        overlay.style = `z-index : 4`;
        allLeft.classList.add('LeftToRight');
        allLeft.classList.remove('RightToLeft');
        $('body,html').addClass('overflow');
        setTimeout(() => {
           
            allLeft.style = `margin-left : 0px`;
        }, 500);
    }
  })
  logomenu.addEventListener("click" , function(){
    if(allLeft.classList.contains('LeftToRight')==true){
        allLeft.classList.add('RightToLeft');
        allLeft.classList.remove('LeftToRight');
        $('body,html').removeClass('overflow');
        cross1.classList.remove('cross1'); 
        cross2.classList.remove('cross2');
        cross3.classList.remove('cross3');

        overlay.style = `z-index : 0`;
      setTimeout(() => {
        allLeft.style = `margin-left : -340px`;
       
      }, 500);
    }
    else {
        cross1.classList.add('cross1');
        cross2.classList.add('cross2');
        cross3.classList.add('cross3');
        overlay.style = `z-index : 4`;
        allLeft.classList.add('LeftToRight');
        allLeft.classList.remove('RightToLeft');
        $('body,html').addClass('overflow');
        setTimeout(() => {
           
            allLeft.style = `margin-left : 0px`;
        }, 500);
    }
    
  });
  [...arrows].forEach(e => {
     
      e.addEventListener("click" , function(){
        var x = e.dataset.index;
        mainAllLefts.style = `transform : translateX(${-2 * widthOfmainAllLeft1}px)`;
        [...itemarrows].forEach(el =>{
            var y = el.dataset.index;
            if(x == y ){
                el.classList.add('xuathien2');
            }
            else {
                el.classList.remove('xuathien2')
            }
        })
      });
      
  })
  click1.addEventListener("click" , function(){
     
     widthOfmainAllLeft1 = mainAllLeft.offsetWidth;
     mainAllLefts.style = `transform : translateX(${-1 * widthOfmainAllLeft1}px)`;
  });
  var click2 = document.getElementById('arrow2');
  click2.addEventListener("click" , function(){
    mainAllLefts.style = `transform : translateX(0)`;
  })
  var click4 = document.querySelectorAll('.arrow4');
  
  [...click4].forEach(e =>{
      e.addEventListener("click" , function(){
        mainAllLefts.style = `transform : translateX(${-1 * widthOfmainAllLeft1}px)`;
      })
  });
  

});