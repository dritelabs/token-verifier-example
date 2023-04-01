export interface BaseSerializer<Entity, DataTransferObject> {
  serializeToEntity(input: DataTransferObject): Entity;
  serializeToDataTransferObject(input: Entity): DataTransferObject;
}
