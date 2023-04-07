export default eventHandler((event) =>
  event.context.userModule.resolve("userController").login(event)
);
