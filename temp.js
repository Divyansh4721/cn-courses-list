function show()
{
  var a=document.querySelector('body');
  a.innerHTML='';
  $.get('https://codingninjas.in/api/v3/courses',function(coding){
    for (var i = 0; i < coding.data.courses.length; i++) {
      if(coding.data.courses[i].preview_image_url){
        let str='<div id="square">';
        str+='<img src='+coding.data.courses[i].preview_image_url+' id="image">';
        str+='<span id="coursename">'+coding.data.courses[i].name+'</span>';
        str+='<span id="coursetype">'+coding.data.courses[i].level+'</span></div>';
        $('body').append(str);
      }
    }
  });
}
