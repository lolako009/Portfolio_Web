$(document).ready(function(){
    
    // 3 buttons for student infor ----------------------------------
    $("#btn1").click(function(){
        $("#title").text("Welcome Student!")
        $("#title").css("color","green")
        $("#message").text("Status: You Clicked the first button")
    })

    $("#btn1").dblclick(function(){
        $("#title").text("You double clicked!")
        $("#title").css("color","gold")
        $("#message").text("Status: You double Clicked the first button")
    })

    $("#btn2").click(function(){
        $("#card1").hide("slow")
        $("#message").text("Status: You Hid the student info")
    }) 

    $("#btn3").click(function(){
        $("#card1").show("slow")
        $("#message").text("Status: The the student info is shown")
    })

    $("#btn1 , #btn2 , #btn3").mousedown(function(){
        $(this).css("background","gold")
    })
    
    $("#btn1 , #btn2 , #btn3").mouseup(function(){
        $(this).css("background","dimgray")
    })

    // Choose Course-------------------------------------------------------


    $("#course").change(function(){
        $("#courmess").text(" Course: " + $(this).val())
        $("#message").text("Status: Student Course was changed to " + $(this).val())
        $("#message2").text("Selected Course: " + $(this).val())
    })

    // Table--------------------------------------------------------------

    $("table, tr, td, th").css("border","1px solid black")
    $("th").css("background","black")
    $("th").css("color","white")

    $("#btnodd").click(function(){    
        $("tr:odd").css("background","lightyellow")
        $("tr:even").css("background","white")
        $("#message3").text("Table Status: Odd was highlighted")
    })
    
    $("#btneven").click(function(){    
        $("tr:even").css("background","lightblue")
        $("tr:odd").css("background","white")    
        $("#message3").text("Table Status: Even was highlighted")
    })

    $("#btnhide").click(function(){
        $("#table").hide("slow")
        $("#message3").text("Table Status: Table was hidden")
    }) 

    $("#btnshow").click(function(){
        $("#table").show("slow")
        $("#message3").text("Table Status: Table was Shown")
    })



    //-------------------------------------------------------------------





    


    // $("p.intro").css("color","brown")

    // $("ul li:first").css("color","green")

    // $("[href]").css("color","blue")

    // $("th").css("background","black")
    // $("th").css("color","white")
    

    // $("tr:even").css("background","lightblue")    
    // $("tr:odd").css("background","lightyellow")

    // $("#btn").click(function(){
    //     $("#message").text("You Clicked the button!")
    // })

    // $("#btn").dblclick(function(){
    //     $("#message").text(" You double Clicked the button")
    //     $(this).css("background", "gold")
    //     $(this).css("color", "black")
    // })

    // $("#btn").mouseenter(function(){
    //     $("#message").text("Your mouse reached the button")
    // })

    
    // $("#btn").mouseleave(function(){
    //     $("#message").text("Your mouse left the button")
    // })

    // $("#btn2").mousedown(function(){
    //     $(this).css("background","gold")
    // })

    // $("#btn2").mouseup(function(){
    //     $(this).css("background","blue")
    // })

    // $("#name").focus(function(){
    //     $("#message").text("Typing...")
    // })

    // $("#name").blur(function(){
    //     $("#message").text("Output:")
    // })

    // $("#course").change(function(){
    //     $("#message").text($(this).val())
    // })

    // $("#btnhide").click(function(){
    //     $("#table").hide("slow")
    // }) 

    
    // $("#btnshow").click(function(){
    //     $("#table").show(10000)
    // })


})

