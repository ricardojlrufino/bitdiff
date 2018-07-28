

$(function(){

    $("#frmCode").submit(function(e){
        e.preventDefault();
        
        var lines = $("#left").val().split('\n');

        for (var i = 0; i < lines.length; i++) {
            if(i + 1 != lines.length){
                var left = lines[i];
                var right = lines[i+1];

                left = left.trim();
                right = right.trim();

                if(left.length == right.length){
                    compare(left.split(''), right.split(''), (i+1) + " <-> " + (i+2));
                }else{
                    console.warn("Ignoring compile lines: " + (i+1) + " <-> " + (i+2));
                }
            }
        }
        
        // $("#frmCode").trigger("reset");
    });

});

function clearResults(){
    $("#result").html('');
}

function compare(left, right, title){
    //var left =  $("#left").val().split('');
    //var right =  $("#right").val().split('');

    var divResult = document.getElementById("result");


    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");


    var date = new Date().toLocaleString();
    legend.innerHTML = "<input class='editable' value='"+ title + " - " + date+"'></input>";

    fieldset.appendChild(legend);

    var divLeft = document.createElement("div");
    var divRight = document.createElement("div");

    fieldset.appendChild(divLeft);
    fieldset.appendChild(divRight);

    divResult.appendChild(fieldset);

    for (var i = 0; i < left.length; i++) {

        var kclass = "V";
        var leftChar = left[i];
        var rightChar = right[i];
        if(leftChar != rightChar){
            kclass = "F";
        }

        var elLeft = document.createElement("span");
        var elRight = document.createElement("span");

        elLeft.innerHTML = "" + leftChar;
        elRight.innerHTML = "" + rightChar;

        elLeft.classList.add(kclass);
        elRight.classList.add(kclass);

        divLeft.appendChild(elLeft);
        divRight.appendChild(elRight);

    }

}