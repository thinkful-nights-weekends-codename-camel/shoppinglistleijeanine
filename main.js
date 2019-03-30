$(function () {
  console.log('js working');  
  $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();     // preventing default ! hah
        let userItem = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');  // emptying user input, ready for next

        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${userItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
      $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item__checked');

      console.log('check button');  
    });
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
      $(this).closest('li').remove();
    });
});

/*
1 make sure DOM is ready
    - listening for event
        - submission button (event)
    *** prevent default submission ***
2 gather user's input  --> store in variable (string)
        - clear input once input has been gathered
3 display stored variable with html tags
4 listen for event
    - checked button
        - toggle the strikethrough or not
5 listen for event (click)
    - delete button
        - figure out which delete button was clicked
        - remove this item from the list 
- Enter items users need by hitting "Return" or click "Add item" button
- Check and Uncheck items by clicking "Check" button
- Permanently remove items from list
methods to consider: .submit(), .preventDefault(), toggleClass(), .closest()
*/