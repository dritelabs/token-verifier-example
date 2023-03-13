export interface BaseRepository<Entity> {
  create(input: Partial<Entity>): Promise<Entity>;
  delete(input: Partial<Entity>): void;
  get(input: Partial<Entity>): Promise<Entity>;
  query(input: Partial<Entity>): Promise<Entity>;
  update(input: Partial<Entity>): Promise<Entity>;
}
