$(document).ready(function () {
    /*
    $("#collapseableNav").mCustomScrollbar({
         theme: "minimal"
    });
    */
    $('#navButton').on('click', function () {
        $('#collapseableNav').toggleClass('active');
        let navCont = document.getElementById('navContainer');
        if(navCont.style.display == 'none'){
            navCont.style.display = 'initial';   
        }
        else{
            navCont.style.display = 'none';
        }
    });

});