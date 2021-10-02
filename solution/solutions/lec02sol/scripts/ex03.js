$(document).ready(function () {
  validateSubmit();
});

function validateSubmit() {
  $("form").on('submit', function (e) {
    let formValid = { valid: true };
    let input = $('input[name=name]');
    //validateTracks(formValid); 

    if (!input.val()) //If there is no value in album name -> not valid
      alertNonValid(input, formValid);

    input = $('input[name=year]');  //Overwrite to year
    if (!(input.val() && Number(input.val()) < 2023)) //If there is no value and if the number is over 2023 -> not valid
      alertNonValid(input, formValid);

    if (!$('input[name=type]:checked').length) //If the inputgroup is not checked -> not valid
      alertNonValid($('input[name=type]').first(), formValid); //It will alert nonValid if nothing (the first value) is not checked off

    if (!formValid.valid) //If false, it will alert
      alert('The form has unvalid values');
      return formValid.valid;
  });
}

function validateTracks(formValid) {
  $('input[name=track]').each(function (index, value) {
    let input = $(this);
    if (!input.val())
      alertNonValid(input, formValid);
  });
}


function alertNonValid(input, formValid) {
  formValid.valid = false;
}
