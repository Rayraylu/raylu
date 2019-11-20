$(document).ready(function() {
    //開始程式
    $("#btn").click(function() {
        var currency = $("#currency").val();
        var resolution = $("#resolution").val();
        var d1 = $("#d1").val();
        var d2 = $("#d2").val();
        var strategy = $("#strategy").val();
        var date1 = encodeURIComponent(d1);
        var date2 = encodeURIComponent(d2);

        $.ajax({
            type: 'GET', //傳送方式
            url: "/result", //傳送目的地
            data: {
                'currency': currency,
                'resolution': resolution,
                'date1': date1,
                'date2': date2,
                'strategy': strategy
            },
            success: function(Data) {
                $("#result").html(Data)
            },
            error: function(e) {
                console.log(e);
            }
        })
    });
});