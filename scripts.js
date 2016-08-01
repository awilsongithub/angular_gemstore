$(document).ready(function(){

    // hide form
    $('#review-form').hide();

    // register click handler to button to show form and hide button
    $('#show-form').click(function(){
        $('#review-form').show('slow');
        $('#show-form').hide();
    });

});
