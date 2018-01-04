$(() => {
  
  // get friends from db
  $.ajax({
    url: 'http://rest.learncode.academy/api/yajjackson/friends',
    type: 'GET'
  }).done((data) => {
    // populate friend-list with data from db
    data.forEach(friend => $('#friend-list').append(createFriend(friend)))
  })

  // add form submit handler
  $('#friend-form').submit((e) => {
    e.preventDefault()

    // add friend to the db
    $.ajax({
      url: 'http://rest.learncode.academy/api/yajjackson/friends',
      type: 'POST',
      data: {name: $('#input').val()}
    }).done(data => createFriend(data))

    // clear input field after submission
    $('#input').val('')
  })

  // add item click event
  $(document).on('click', 'li.friend-item', (e) => {
    removeFriend(e.target.id)
    e.target.remove()
  })

  // add new list item
  const createFriend = (input) => 
    $('#friend-list').append($(`<li>${input.name}</li>`).addClass('list-group-item list-group-item-action list-group-item-dark friend-item').attr('id', input.id))

  // remove friend list item
  const removeFriend = (id) => {
    $.ajax({
      url: `http://rest.learncode.academy/api/yajjackson/friends/${id}`,
      type: 'DELETE'
    })
  }

})
