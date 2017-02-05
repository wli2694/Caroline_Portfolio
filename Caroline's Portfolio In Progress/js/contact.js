$(document).ready(function () {
    function submitMessage(){
        data=$('#sendMessage').serialize();

        $.ajax({
            url: "sendMessage.php",
            type:'POST',
            data:data,
            async:false,
            dataType:'html',
            success: function(msg){
                $('#thankYou').html(msg);
            }
        });
    }
})