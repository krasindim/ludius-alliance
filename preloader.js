document.body.onload = function(){

    setTimeout(function(){
        // var loader = document.getElementById('loader');
        var preloader = document.getElementById('page-preloader');
        if(!preloader.classList.add('done'))
        {
            preloader.classList.add('done');
        }
    },6000);

}