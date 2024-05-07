# To do List

### Last updated: 04/02/2024\

### TODO

- Create Initial `User` - Until we implement custom users, we just have 1 (MVP)
- Update MENU MODAL
    - Proper Location - top right, overlaying Over top of the menu button as it's top right corner.
    - Button options:
        - Sign Out - MVP - set's logged in as false
        - About
        - Socials Links
- Work up logic for a 'Create Module' button. Could be the initial 'only' Module on page, simple, middle of page.
    - Would need us to have a CLEAR way of 'add module', or, 'suggested modules'.
        - Suggestions would allow us to easily implement for a user.
- MODULES
    - Need to figure out how we are structuring these. A few options:
        - Get User Modules - Api call
            - Receives a List of organized ( by backend ) Modules in a specified order.
            - User creates/adds a Module, it gets added to the User's
- MODULE as a Wrapper term
    - Size/Shape: Should have the option of a Small size, and a Large size.
        - Large Size would mean full width of the parent component ( bodyMain(?) )
        - Small would mean we could fit 2 next to each other.
        - Height is undetermined, basically based on contents. even a SMALL module could take the full screen height(
          max )
    - Initial State is `open: false`, where `open: true` comes from CLICKING on module.
        - An OPEN module means we are full screen, or otherwise lowering opacity of the main page, and centering the
          module so that it's front and center, and at MINIMUM a large size.
    - Modules could show different data when on main page vs when Selected, or `open`
    - Could be any number of unique Modules
    - We release different module 'Options', such as the following:
        - List (General) - Contains a List of Strings ( simple, easy, MVP )
        - Contact List - Contains a List of User objects, with any number of fields possible. This implies that we could
          have a contact image, name, email, phone number(s), handle/link for Instagram/Twitter/YouTube/etc.
        - To Do List - Contains a List of ToDo Objects, with a Title, Description, Due Date, Boolean of 'Done'
        - Picture Gallery - Contains a list of 'HeadImage' objects.
        - Calendar - When small, would be a List of Upcoming calendar events. Big might have more data on each
            - This would be really would, but would require us to hook into Google Calendar, OR literally make our own.
            - MVP would be to use the Google Calendar API.

        - Create  strikethrough on the grocerylist using state 
            - created the strikethrough but it is happening for every item in the list not just the item i clicked on... 
