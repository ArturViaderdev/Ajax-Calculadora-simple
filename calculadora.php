<?php

  if(isset($_POST['operacio']) && isset($_POST['numa']) && isset($_POST['numb']))
  {
    extract($_POST);
    switch($operacio)
    {
      case 1:
        $resultat['resultat'] = $numa + $numb;
      break;
      case 2:
        $resultat['resultat'] = $numa - $numb;
      break;
      case 3:
        $resultat['resultat'] = $numa * $numb;
      break;
      case 4:
        $resultat['resultat'] = $numa / $numb;
      break;
    }
    echo json_encode($resultat);
    exit();
  }
?>
