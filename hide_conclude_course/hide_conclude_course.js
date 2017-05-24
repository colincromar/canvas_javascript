// Hides 'conclude course' button from course settings from teachers

$(document).ready(function(){
   if($.inArray('teacher',ENV['current_user_roles']) === 1) {
    $("a:contains('Conclude this Course')").hide();
  }
});
