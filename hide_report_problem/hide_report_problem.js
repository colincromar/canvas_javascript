// Hides Report a Problem from Help Menu (left-navigation) from all users

$(document).ready(function () {
    $('#menu a[href="http://help.instructure.com/"]').on('click', function() {
        function onElementRendered(selector, cb, _attempts) {
          var el = $(selector);
          _attempts = ++_attempts || 1;
          if (el.length) return cb(el);
          if (_attempts == 60) return;
          setTimeout(function() {
            onElementRendered(selector, cb, _attempts);
          }, 250);
        }

        onElementRendered('a[href="#create_ticket"]', function(el) {
            if($.inArray('student',ENV['current_user_roles']) > -1) {
                $('a[href="#create_ticket"]').parent().hide();
            }
        });
    });
});
