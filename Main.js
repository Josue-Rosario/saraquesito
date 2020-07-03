console.log('heee')

// this is the id of the form
$('ajax/contact.php').submit(function (e) {
  e.preventDefault() // avoid to execute the actual submit of the form.

  var form = $(this)

  console.log('Hello Bitch...... stop asking shit')

  console.log('form', form)
  $.ajax({
    type: 'POST',
    url: '/api/contact',
    data: form.serialize(), // serializes the form's elements.
    success: function (data) {
      alert(data) // show response from the php script.
    },
  })
})
