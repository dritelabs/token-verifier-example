export interface BaseRepository<Entity> {
  create(entity: Partial<Entity>): Promise<Entity>;
  delete(entity: Partial<Entity>): void;
  get(entity: Partial<Entity>): Promise<Entity>;
  query(entity: Partial<Entity>): Promise<Entity>;
  update(entity: Partial<Entity>): Promise<Entity>;
}
