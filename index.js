expression = ""
const getButtonText = (button) => {
  var text =(button.innerHTML);
  var textField = document.getElementById('pressed')
  expression+=  text
  textField.value=expression;
  console.log(expression)

  
}
const handleEqualsTo = () => {
  try{
    value = eval(expression)
    console.log(value)
    expression = value
    var textField = document.getElementById('pressed')
    textField.value=expression;
  }
  catch(e)
  {
    console.log(e)
  }
}

function erase()
{
  expression = ""
  var getValue= document.getElementById("pressed");
  if (getValue.value !="") {
    getValue.value = "";
}
}






