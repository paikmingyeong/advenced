/**
 * Created by Administrator on 2017-07-27.
 */

// ¸Þ´º ¿ÀÇÂ!!
$(function(){

  $('.gnb-toggle').data({'open':false}).on('click', function(){

    if( $(this).data().open){
      $('.gnb').removeClass('on');
      $(this).data({open:false});
    } else {
      $('.gnb').addClass('on');
      $(this).data({open:true});
    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjcuXHJcbiAqL1xyXG5cclxuLy8g77+93rTvv70g77+977+977+977+9ISFcclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuZ25iLXRvZ2dsZScpLmRhdGEoeydvcGVuJzpmYWxzZX0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4pe1xyXG4gICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbjpmYWxzZX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW46dHJ1ZX0pO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
