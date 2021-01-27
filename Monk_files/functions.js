(function($){"use strict";var $bgSection=$(".bg-section");$bgSection.each(function(){var bgSrc=$(this).children("img").attr("src");var bgUrl='url('+bgSrc+')';$(this).parent().css("backgroundImage",bgUrl);$(this).parent().addClass("bg-section");$(this).remove();});$(window).scroll(function(){if($(document).scrollTop()>$(window).height()||$(document).scrollTop()>105){$(".navbar-sticky").addClass("navbar-fixed");}else{$(".navbar-sticky").removeClass("navbar-fixed");}});$('.navbar-toggler').on('click',function(){$('.navbar-toggler-icon').toggleClass('active');});var aScroll=$('.nav-item .nav-link'),$navbarCollapse=$('.navbar-collapse');aScroll.on('click',function(event){var target=$($(this).attr('href'));$(this).parent(".nav-item").siblings().removeClass('active');$(this).parent('.nav-item').addClass('active');if(target.length>0){event.preventDefault();$('html, body').animate({scrollTop:target.offset().top-100},1000);}
if($('.navbar-collapse').hasClass('show')){$('.navbar-collapse').toggleClass('show');$('.navbar-toggler-icon').toggleClass('active');$('.navbar-toggler').toggleClass('collapsed');}});var $section=$('section'),$bodyScroll=$('.body-scroll');if($bodyScroll.length>0){$(window).on("scroll",function(){$section.each(function(){var sectionID=$(this).attr("id"),sectionTop=$(this).offset().top-100,sectionHight=$(this).outerHeight(),wScroll=$(window).scrollTop(),$navHref=$("a[href='#"+sectionID+"']"),$nav=$('.navbar-nav').find($navHref).parent();if(wScroll>sectionTop-1&&wScroll<sectionTop+sectionHight-1){$nav.addClass('active');$nav.siblings().removeClass('active');}});});}
$('.mailchimp').ajaxChimp({url:"http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&id=aa0f2ab5fa",callback:chimpCallback});function chimpCallback(resp){if(resp.result==='success'){$('.subscribe-alert').html('<h5 class="alert alert-success">'+resp.msg+'</h5>').fadeIn(1000);}else if(resp.result==='error'){$('.subscribe-alert').html('<h5 class="alert alert-danger">'+resp.msg+'</h5>').fadeIn(1000);}}
$('#campaignmonitor').submit(function(e){e.preventDefault();$.getJSON(this.action+"?callback=?",$(this).serialize(),function(data){if(data.Status===400){alert("Error: "+data.Message);}else{alert("Success: "+data.Message);}});});var $pricingSwitcher=$('.pricing-switcher'),$pricingLabel=$('.pricing-switcher label'),$pricingIndicator=$('.pricing-switcher .indicator'),$pricingball=$('.pricing-switcher .indicator .ball'),$pricingContainer=$('.pricing-container'),$pricingPanel=$('.pricing-panel');if($pricingSwitcher.length>0){$pricingLabel.on('click',function(){$(this).siblings('label').removeClass('active');$(this).addClass('active');$pricingContainer.toggleClass('monthly yearly');$pricingPanel.toggleClass('hidden visible');$pricingball.toggleClass('monthly yearly');});$pricingIndicator.on('click',function(){$pricingball.toggleClass('monthly yearly');$pricingContainer.toggleClass('monthly yearly');$pricingLabel.toggleClass('active');$pricingPanel.toggleClass('hidden visible');});}
$(".counting").counterUp({delay:10,time:1000});$(".owl-carousel").each(function(){var $Carousel=$(this);$Carousel.owlCarousel({loop:$Carousel.data('loop'),autoplay:$Carousel.data("autoplay"),margin:$Carousel.data('space'),nav:$Carousel.data('nav'),dots:$Carousel.data('dots'),dotsSpeed:$Carousel.data('speed'),responsive:{0:{items:1},600:{items:$Carousel.data('slide-res')},1000:{items:$Carousel.data('slide'),}}});});$('.popup-video').magnificPopup({disableOn:700,mainClass:'mfp-fade',removalDelay:0,preloader:false,fixedContentPos:false,type:'iframe',iframe:{markup:'<div class="mfp-iframe-scaler">'+
'<div class="mfp-close"></div>'+
'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
'</div>',patterns:{youtube:{index:'youtube.com/',id:'v=',src:'//www.youtube.com/embed/%id%?autoplay=1'}},srcAction:'iframe_src',}});var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:50,mobile:false,live:true});wow.init();var contactForm=$(".contactForm"),contactResult=$('.contact-result');contactForm.validate({debug:false,submitHandler:function(contactForm){$(contactResult,contactForm).html('Please Wait...');$.ajax({type:"POST",url:"assets/php/contact.php",data:$(contactForm).serialize(),timeout:20000,success:function(msg){window.location.href="thanks-you.html";},error:$('.thanks').show()});return false;}});contactForm.removeAttr("novalidate");}(jQuery));