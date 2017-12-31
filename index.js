$(() => {
  // add form submit handler
  $('#friend-form').submit((e) => {
    e.preventDefault()
    $('#friend-list').append(createFriend($('#input').val()))
    $('#input').val('')
  })

  // add new list item
  const createFriend = (name) => 
    $(`<li>${name}</li>`).addClass('list-group-item list-group-item-action list-group-item-dark')

})
