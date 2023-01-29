import _ from "lodash";

type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${CamelToSnakeCase<U>}`
  : S;

type SnakeToCamelCaseNested<T> = T extends object
  ? {
      [K in keyof T as CamelToSnakeCase<K & string>]: SnakeToCamelCaseNested<
        T[K]
      >;
    }
  : T;

export function toSnakeCase<T extends string>(key: T) {
  return _.snakeCase(key) as CamelToSnakeCase<T>;
}
