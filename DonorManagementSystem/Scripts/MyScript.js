    function showPanel1() {
        $("#panel1").show();
        $("#panel2").hide();
        $("#panel3").hide();
        $("#panel4").hide();
        $("#panel5").hide();
        $("#defaultPanel").hide();

    }

    function showPanel2() {

        $("#panel1").hide();
        $("#panel2").show();
        $("#panel3").hide();
        $("#panel4").hide();
        $("#panel5").hide();
        $("#defaultPanel").hide();

    }

    function showPanel3() {
        $("#panel1").hide();
        $("#panel2").hide();
        $("#panel3").show();
        $("#panel4").hide();
        $("#panel5").hide();
        $("#defaultPanel").hide();
    }

    function showPanel4() {
        $("#panel1").hide();
        $("#panel2").hide();
        $("#panel3").hide();
        $("#panel4").show();
        $("#panel5").hide();
        $("#defaultPanel").hide();
    }

    function showPanel5() {
        $("#panel1").hide();
        $("#panel2").hide();
        $("#panel3").hide();
        $("#panel4").hide();
        $("#panel5").show();
        $("#defaultPanel").hide();
    }

    function showTextBox() {
        $("#btT").show();
        $("#btText").focus();
        $("#mybutton").hide();

    }

    function showModal() {
        $("#myModel").modal.hide();
        $("#contentModel").modal.show();
    }

    //show button amount on textbox within modal

    $(document).on("click", "#bt1", function () {
        var myBookId = $(this).data('id');
        $(".modal-body #donationAmount").text(myBookId);
        console.log(myBookId);
    });


    //display textbox
    function displayname() {

        var result = document.getElementById("btText").value;
        $(".modal-body #donationAmount").val(result);
        console.log(result);

    }

    var btValue = [];

    function myFunction1() {
        btValue.push("15");
    }
    function myFunction2() {
        btValue.push("35");
    }
    function myFunction3() {
        btValue.push("65");
    }
    function myFunction4() {
        btValue.push("100");
    }
    function myFunction5() {
        btValue.push("250");
    }



    function submitData() {
        console.log(btValue.length);
        if (btValue.length == 0)
        {
            //$('#myModal').modal('hide');
            //$('#myModal').appendTo("body").modal('hide');
            $("#errorMsg").show();
        }

        else {
            //$('#myModal').modal('show');
        }
    }

$(document).ready(function () {
    $("#btT").focusout(function () {
        $("#btText").val('');
        $("#mybutton").show();
        $("#btT").hide();
    });
});

   


