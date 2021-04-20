
$( document ).ready(function() {
    var containerClicked = false;
    var itemsClicked = false;
    var gapClicked = false;

    $('#grid-container-btn').click(function() {
        console.log("container");
        if(containerClicked === false){
            TweenMax.set($('#grid-demo'),{display:"grid"});
            containerClicked = true;
        }else{
            TweenMax.set($('#grid-demo'),{display:"block"});
            containerClicked = false;
        }
    });

    $('#grid-items-btn').click(function() {
        console.log("items");
        if(itemsClicked === false){
            TweenMax.set($('#grid-demo'),{ gridTemplateColumns:"repeat(3, 1fr)"});
            itemsClicked = true;
        }else{
            TweenMax.set($('#grid-demo'),{gridTemplateColumns:"repeat(1, 1fr)"});
            itemsClicked = false;
        }
    });

    $('#grid-gap-btn').click(function() {
        console.log("gap");
        if(gapClicked === false){
            TweenMax.set($('#grid-demo'),{ gridGap:"20px"});
            gapClicked = true;
        }else{
            TweenMax.set($('#grid-demo'),{gridGap:"0px"});
            gapClicked = false;
        }
    });



});
