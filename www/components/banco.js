// This is a JavaScript file
$(document).on("click","#btnEnviar", function(){
    var parametros = {
        "nome": $("#txtNome").val(),
        "cpf": $("#txtCpf").val()
    };

    $.ajax({
        type:"post",
        url:"https://crudmobile3i2-jussimar.c9users.io/cadastro.php",
        data: parametros,
        success: function(data){
          navigator.notification.alert(data);
          $("#txtNome").val("");
          $("#txtCpf").val("");
        },
        error:function(data){
          navigator.notification.alert("erro: "+data);
        }
    });
});

$(document).on("click","#btnListar", function(){
  $(location).attr("href","lista.html");
});

function preenchepessoas(){
  $.ajax({
        type:"post",
        url:"https://crudmobile3i2-jussimar.c9users.io/listarpessoas.php",
        dataType: "json",
        success: function(data){
          var itemlista = "";
          $.each(data.pessoas, function(i, dados){
              itemlista += "<option value='"+dados.codigo+"'>"+dados.nome+"</option>";
          });
          $("#lista").html(itemlista);
        },
        error:function(data){
          navigator.notification.alert("erro: "+data);
        }
    });
}