$(() => {
  // add form submit handler
  $('#friend-form').submit(() => {
    $('#friend-list').append(createFriend($('#input').val()))
    $('#input').val('')
  })

  const createFriend = (name) => 
    $(`<a>${name}</a>`).addClass('list-group-item list-group-item-action list-group-item-dark')
})