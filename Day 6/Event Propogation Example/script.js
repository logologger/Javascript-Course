 $(document).ready(function() {
        $("span").click(function(event) {
            event.stopPropagation();
            alert("The span element was clicked.");
        });
        $("p").click(function(event) {
            alert("The p element was clicked.");
        });
        $("div").click(function() {
            alert("The div element was clicked.");
        });
    });