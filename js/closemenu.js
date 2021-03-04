var justBodyClick = true;
$(".menu-content").click(function(){
    justBodyClick = false;
});

$(".menu-checkbox").click(function(){
    justBodyClick = false;
});

$(".if-click").click(function(){

    if(justBodyClick){
        $('.menu-checkbox').prop('checked', false);
    }
    
    if(justBodyClick == false){
        justBodyClick = true;
    }
});