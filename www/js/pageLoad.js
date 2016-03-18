$(function() {
    $( "[data-role='navbar']" ).navbar();
    $( "[data-role='header'], [data-role='footer']" ).toolbar();
});
// Update the contents of the toolbars
$( document ).on( "pagecontainerchange", function() {
    // Each of the four pages in this demo has a data-title attribute
    // which value is equal to the text of the nav button
    // For example, on first page: <div data-role="page" data-title="Info">
    var current = $( ".ui-page-active" ).jqmData( "title" );
    $(".pageLink").show();
    if(current == "Gallery")
    {
        $(".pageLink").html("<i class='fa fa-home'></i>").attr("href", "#home");
    }
    else if(current == "Home")
    {
        $(".pageLink").html("<i class='fa fa-th-large'></i>").attr("href", "#gallery");
    }
    else
    {
        $(".pageLink").hide();
    }
});
