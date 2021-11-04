var x;
x=$(document);
x.ready(inicializarEventos);


function inicializarEventos()
{

  var x;
  x=$("#opera");
  x.click(clickopera);
}

function clickopera()
{
    var numa=$("#numa").val();
    var numb=$("#numb").val();
    var operacio=$("#operacio").val();

	/*	$.post("calculadora.php", {numa:numa,numb:numb,operacio:operacio}, function(resultat){
		$("#res").val(resultat);
  }, "json"); /*El parámetro "json" indica que la respuesta desde PHP es en formato JSON*/
  $.ajax({
                    url:"calculadora.php",
                    method:"POST",
                    data:{numa:numa,numb:numb,operacio:operacio},
                    dataType:'json',
                    success:function(data)
                    {
                         $('#res').val(data['resultat']);
                    } ,
     });



}
