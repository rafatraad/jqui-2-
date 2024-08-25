$(document).ready(function(){
    // ex1
     $( "#draggable" ).draggable();
     // ex2
      $( "#draggable1" ).draggable({ scroll: true});
    $( "#draggable2" ).draggable({ scroll: true, scrollSensitivity: 100 });
    $( "#draggable3" ).draggable({ scroll: true, scrollSpeed: 100 });
    // ex3
     $( "#sortable" ).sortable({
      revert: true
    });
    $( "#draggable4" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( "ul, li" ).disableSelection();
    //ex4
    $( "#resizable" ).resizable();
    // ex5
     $( "#resizable1" ).resizable({
        animate: true
     });
     // ex6
     $( "#accordion" ).accordion();
     // ex7
     $( "#accordion1" ).accordion({
      collapsible: true
  })
});
