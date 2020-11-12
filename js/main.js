new WOW().init();

$(document).ready(function(){
    
    $( "#run-test" ).on( "click", function() {
        $('.window').css({'display': 'none'});
        $('.test').css({'display': 'block'});
    });

    let arr = [];

    $(".item").click(function(e) {
        e.preventDefault();
        const active = $(this).find("p").text();
        $(".items").find(".item .number-q").removeClass('active');
        $(".items").find(".item .number-q span").css({'color': '#40526A'});
        $(this).find(".number-q").addClass('active');
        $(this).find(".number-q span").css({'color':'#FFFFFF'});

        arr.push(active);
        console.log(arr);
    })

    if (arr.length <= 10) {
        $('.result-1').css({'display':'block'});
        console.log(arr);
    } else {
        $('.result-1').css({'display':'none'});
        $('.result-2').css({'display':'block'});
        console.log(arr);
    }

    $( "#question-1 .btn-next" ).on( "click", function() {
        $('#question-1').hide();
        $('#question-2').show();
        $(".question-2 .checkbox").addClass('checkbox-active');
        $(".question-1 .checkbox").removeClass('checkbox-active').addClass('checkbox-done');

    });
    $( "#question-2 .btn-next" ).on( "click", function() {
        $('#question-2').hide();
        $('#question-3').show();
        $(".question-3 .checkbox").addClass('checkbox-active');
        $(".question-2 .checkbox").removeClass('checkbox-active').addClass('checkbox-done');
        
    });
    $( "#question-3 .btn-next" ).on( "click", function() {
        $('#question-3').hide();
        $('#question-4').show();
        $(".question-4 .checkbox").addClass('checkbox-active');
        $(".question-3 .checkbox").removeClass('checkbox-active').addClass('checkbox-done');
    });
    $( "#question-4 .btn-next" ).on( "click", function() {
        $('#question-4').hide();
        $('#question-5').show();
        $(".question-5 .checkbox").addClass('checkbox-active');
        $(".question-4 .checkbox").removeClass('checkbox-active').addClass('checkbox-done');
    });
    $( "#question-5 .btn-next" ).on( "click", function() {
        $('#question-5').hide();
        $('#question-6').show();
        $(".question-6 .checkbox").addClass('checkbox-active');
        $(".question-5 .checkbox").removeClass('checkbox-active').addClass('checkbox-done');
    });
    $( "#question-6 .btn-next" ).on( "click", function() {
        $('#question-6').hide();
        $('#question-7').show();
        $(".question-7 .checkbox").addClass('checkbox-active');
        $(".question-6 .checkbox").removeClass('checkbox-active').addClass('checkbox-done');
    });
    $( "#question-7 .btn-next" ).on( "click", function() {
        $('#question-7').hide();
        $('#question-8').show();
        $(".question-8 .checkbox").addClass('checkbox-active');
        $(".question-7 .checkbox").removeClass('checkbox-active').addClass('checkbox-done');
    });
    $( "#question-8 .btn-next" ).on( "click", function() {
        $('#question-8').hide();
        $('#question-9').show();
        $(".question-9 .checkbox").addClass('checkbox-active');
        $(".question-8 .checkbox").removeClass('checkbox-active').addClass('checkbox-done');
    });
    $( "#question-9 .btn-next" ).on( "click", function() {
        $('#question-9').hide();
        $('#question-10').show();
        $( "#question-10 .btn-next" ).text('Узнать результат');
        $("#question-10 .btn-next").append('<img src="img/next.png">');
        $(".question-10 .checkbox").addClass('checkbox-active');
        $(".question-9 .checkbox").removeClass('checkbox-active').addClass('checkbox-done');

    });

    $( "#question-10 .btn-next" ).on( "click", function() {
        $('.test').hide();
        $('.form').css({'display': 'block'});

    });
    
    $( "#question-2 .btn-prev" ).on( "click", function() {
        $('#question-2').hide();
        $('#question-1').show();
        $(".question-1 .checkbox").removeClass('checkbox-done').addClass('checkbox-active');
        $(".question-2 .checkbox").removeClass('checkbox-active');
        
    });
    $( "#question-3 .btn-prev" ).on( "click", function() {
        $('#question-3').hide();
        $('#question-2').show();
        $(".question-2 .checkbox").removeClass('checkbox-done').addClass('checkbox-active');
        $(".question-3 .checkbox").removeClass('checkbox-active');
       
    });
    $( "#question-4 .btn-prev" ).on( "click", function() {
        $('#question-4').hide();
        $('#question-3').show();
        $(".question-3 .checkbox").removeClass('checkbox-done').addClass('checkbox-active');
        $(".question-4 .checkbox").removeClass('checkbox-active');
     
    });
    $( "#question-5 .btn-prev" ).on( "click", function() {
        $('#question-5').hide();
        $('#question-4').show();
        $(".question-4 .checkbox").removeClass('checkbox-done').addClass('checkbox-active');
        $(".question-5 .checkbox").removeClass('checkbox-active');
     
    });
    $( "#question-6 .btn-prev" ).on( "click", function() {
        $('#question-6').hide();
        $('#question-5').show();
        $(".question-5 .checkbox").removeClass('checkbox-done').addClass('checkbox-active');
        $(".question-6 .checkbox").removeClass('checkbox-active');
 
    });
    $( "#question-7 .btn-prev" ).on( "click", function() {
        $('#question-7').hide();
        $('#question-6').show();
        $(".question-6 .checkbox").removeClass('checkbox-done').addClass('checkbox-active');
        $(".question-7 .checkbox").removeClass('checkbox-active');
 
    });
    $( "#question-8 .btn-prev" ).on( "click", function() {
        $('#question-8').hide();
        $('#question-7').show();
        $(".question-7 .checkbox").removeClass('checkbox-done').addClass('checkbox-active');
        $(".question-8 .checkbox").removeClass('checkbox-active');

    });
    $( "#question-9 .btn-prev" ).on( "click", function() {
        $('#question-9').hide();
        $('#question-8').show();
        $(".question-8 .checkbox").removeClass('checkbox-done').addClass('checkbox-active');
        $(".question-9 .checkbox").removeClass('checkbox-active');
     
    });
    $( "#question-10 .btn-prev" ).on( "click", function() {
        $('#question-10').hide();
        $('#question-9').show();
        $(".question-9 .checkbox").removeClass('checkbox-done').addClass('checkbox-active');
        $(".question-10 .checkbox").removeClass('checkbox-active');
     
    });

    
});

