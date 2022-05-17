//List of Rules

// required — a field should be filled obligatory (true or false);
// maxlength — maximum number of characters (a number);
// minlength — minimum number of characters (a number);
// email — verifying of the email address correctness (true or false);
// url — verifying of the url address correctness (true or false);
// remote — specifying a file for checking the field (for example: check.php);
// date — verifying of the date correctness (true or false);
// dateISO — verifying of the ISO date correctness (true or false);
// number — the number verifying (true or false);
// digits — only numbers (true or false);
// creditcard — a credit card number correctness (true or false);
// equalTo — equal to something (for example, to another field equalTo:»#pswd»);
// accept — verifying of correct extension (accept: «xls|csv»);
// rangelength — range of character lengths, minimum and maximum (rangelength: [2, 6]);
// range — a number should be within the range from to (range: [13, 23]);
// max — maximum number (22);
// min — minimum number (11).


function ValidarAutor() {
 var exe =  $("#formAutor").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      nombreAutor : {
        required: true,
        minlength: 3,
        maxlength: 20
      },
      correoAutor: {
        required: true,
        email: true
      },
      puestoAutor: {
        required: true,
        minlength: 3,
        maxlength: 10
      },
      puesto2Autor: {
        minlength: 3,
        maxlength: 10
      },
      statusAutor: {
        required: true
      },
      FechaIngresoAutor: {
        required: true,
        date:true
      }

    },
    messages : {
      nombreAutor: {
        required: 'Nombre requerido',
        minlength: 'Nombre muy corto',
        maxlength: 'Nombre muy largo'
      },
      correoAutor: {
        required: 'correo requerido',
        email: 'Formato incorrecto'
      },
      puestoAutor: {
        required: 'Puesto requerido',
        minlength: 'puesto muy corto',
        maxlength: 'puesto muy largo'
      },
      puesto2Autor: {
        minlength: 'puesto muy corto',
        maxlength: 'puesto muy largo'
      },
      statusAutor: {
        required: 'estatus requerido',
        equalTo: 'selecciona uno'
      },
      FechaIngresoAutor: {
        required: 'fecha de ingreso requerida',
        date:'error en formato de fecha'
      },
      fotoAutor: {
        required: 'foto requerida',
        accept: 'formato invalido'
      }
    }
  });

  // let inputs = $('#formAutor').find('input: has('')
};