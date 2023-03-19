export interface BaseRepository<Entity, Context = any> {
  save(input: Partial<Entity>, context?: Context): Promise<Entity>;
  delete(id: string, context?: Context): void;
  findOne(id: string, context?: Context): Promise<Entity>;
  findAll(input: Partial<Entity>, context?: Context): Promise<Entity[]>;
  update(input: Partial<Entity>, context?: Context): Promise<Entity>;
}
