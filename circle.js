var cont = 0;

function showCoords(event) {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    //    console.log(document.getElementsByTagName("div").onmouseover);
    if (event.target == event.currentTarget) {
        var div = document.createElement("div");
        $("body").append(div);
        $(div).addClass("circle");
        $(div).attr('id', cont++);
        $(div).attr('onClick', 'removeCircle(event)');
        $(div).css({
            left: mouseX - 40
            , top: mouseY - 40
        }).html();
    }
    //    $(div).css({
    //        'width': '80px'
    //        , 'height': '80px'
    //        , 'background': 'red'
    //        , 'boder-radius': '50px'
    //        , 'left': cX
    //        , 'top': cY
    //        , 'display': 'inline-block'
    //    }).html('This is a test');
}

function removeCircle(event) {
    var id = '#' + event.toElement.id;
    document.getElementById(event.toElement.id).style.pointerEvents = 'none';
    var countdown = 5;
    $(id).html(5);
    var timer = setInterval(function () {
        countdown--;
        $(id).html(countdown);
        if (countdown === 0) {
            clearInterval(timer);
            $(id).remove();
        }
    }, 1000);
    //    setTimeout(function(){
    //    alert("eliminado!!!");    
    //    }, 5000);
    console.log(event.toElement.id);
}