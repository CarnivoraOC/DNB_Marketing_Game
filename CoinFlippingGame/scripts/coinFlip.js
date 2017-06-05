jQuery(document).ready(function ($) {
    var spinArray = ['animation900', 'animation1080', 'animation1260', 'animation1440', 'animation1620', 'animation1800', 'animation1980', 'animation2160'];

    function getSpin() {
        var spin = spinArray[Math.floor(Math.random() * spinArray.length)];
        return spin;
    }
    $('#coin').on('click', function () {
        $('#coin').removeClass();
        setTimeout(function () {
            $('#coin').addClass(getSpin());
        }, 50);
        
        updatePoints();
    });
    
    function updatePoints() {
        $('#points').html(function (i, val) {
            return val * 1 + 10
        });
    };
});


/*$('#coin').click(function(){
    
    var point = 0;
        point = point +10;
        document.getElementById("Points").innerHTML=point; 
    
});*/


