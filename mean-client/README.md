# MeanClient

Consists of two modules:
- appModule
- UserModule

The UserModule is made up of three components:
- userComponent
  - Smart parent component which controls the children. Controls all interaction with server. Polls server every three seconds for latest users.
- userCreationComponent
  - Dumb child component for user creation. Bubbles new user up to userComponent.
- userListComponent
  - Dumb child component to display users in table. Takes users as input.
