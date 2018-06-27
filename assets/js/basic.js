$(document).ready(function() {
    $('*input[name=username]').focus();
    $("#sign-in").click(function() {
        var username = $('*input[name=username]').val();
        var password = $('*input[name=password]').val();
        if (username == "admin" && password == "12345") {
            $.get("./src/componnets/search.html", function(data) {
                $("#componnets").append(data);
                $('#sign-in').hide();
            });
        }
    });
    $('#password').keypress(function(e) {
        if (e.which == 13) {
            $.get("./src/componnets/search.html", function(data) {
                $("#componnets").append(data);
                $('#sign-in').hide();
            });
        }
    });
});