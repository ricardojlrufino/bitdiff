

$(function(){

    $("#frmCode").submit(function(e){
        e.preventDefault();
        compare();
        $("#frmCode").trigger("reset");
    });

});

function clearResults(){
    $("#result").html('');
}

function compare(){
    var left =  $("#left").val().split('');
    var right =  $("#right").val().split('');

    var divResult = document.getElementById("result");


    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");


    var date = new Date().toLocaleString();
    legend.innerHTML = "<input class='editable' value='"+date+"'></input>";

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