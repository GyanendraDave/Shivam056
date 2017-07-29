$(document).ready(function () {
    $("#private-entries").click(function () {
        $("#journal-refresh").load("demo_test.txt", function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                alert("External content loaded successfully!");
            if (statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});

$('#private-entries').change(function () {

    if ($(this).is(':checked')) {
        // Checkbox is checked.
        $("#journal-refresh").load("demo_test.txt");
    } else {
        $("#journal-refresh").load("demo_test.txt");
    }

});




$('#private-entries').change(function(){

    if($(this).is(':checked')){
        // Checkbox is checked.
        $("#journal-refresh").html('your content');
    }else{
        $("#journal-refresh").html('refreshed');
    }   

});