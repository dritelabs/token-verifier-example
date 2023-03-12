export interface BaseRepository<Entity> {
  create(request: Partial<Entity>): Promise<Entity>;
  delete(request: Partial<Entity>): void;
  get(request: Partial<Entity>): Promise<Entity>;
  query(request: Partial<Entity>): Promise<Entity>;
  update(request: Partial<Entity>): Promise<Entity>;
}
