export default eventHandler((event) => {
  return event.context.userModule.resolve("userController").listUsers(event);
});
