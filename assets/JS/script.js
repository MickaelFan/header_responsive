$(document).ready(function() {

    var etat=1;

    $(".bouton").click(function(){

        if(etat==1){
            $(this).animate({
                rotate:'-180deg'
            });

            $(".menu").animate({
                top:'60px'
            },500);
            etat=2;

        
    }

        else{
            $(this).animate({
                rotate:'0deg'
            });
                $(".menu").animate({
                    top:'-150px'
                },500);
                etat=1;
        }

    });


    $(".menu ul li a").click(function(){
        $(".bouton").animate({
            rotate:'0deg'
        });
        $(".menu").animate({
            top:'-150px'
        },500);
        etat=1;
    });


    
});