$(document).ready(function(){
   if($.inArray('teacher',ENV['current_user_roles']) === 1) {
    $("a:contains('Conclude this Course')").hide();
  }
});
