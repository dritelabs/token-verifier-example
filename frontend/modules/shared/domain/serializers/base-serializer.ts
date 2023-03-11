export interface BaseSerializer<Input, Entity> {
  serializeToEntity(input: Input): Entity;
}
