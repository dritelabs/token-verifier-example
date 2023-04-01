export interface BaseRepository<Entity> {
  save(input: Partial<Entity>): Promise<Entity>;
  delete(id: string): void;
  findById(id: string): Promise<Entity>;
  findAll(input: Partial<Entity>): Promise<Entity[]>;
  update(input: Partial<Entity>): Promise<Entity>;
}
