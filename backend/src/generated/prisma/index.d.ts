
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model questoes
 * 
 */
export type questoes = $Result.DefaultSelection<Prisma.$questoesPayload>
/**
 * Model respostas_simulado
 * 
 */
export type respostas_simulado = $Result.DefaultSelection<Prisma.$respostas_simuladoPayload>
/**
 * Model resultados_por_disciplina
 * 
 */
export type resultados_por_disciplina = $Result.DefaultSelection<Prisma.$resultados_por_disciplinaPayload>
/**
 * Model simulados_feitos
 * 
 */
export type simulados_feitos = $Result.DefaultSelection<Prisma.$simulados_feitosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Questoes
 * const questoes = await prisma.questoes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Questoes
   * const questoes = await prisma.questoes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.questoes`: Exposes CRUD operations for the **questoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questoes
    * const questoes = await prisma.questoes.findMany()
    * ```
    */
  get questoes(): Prisma.questoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.respostas_simulado`: Exposes CRUD operations for the **respostas_simulado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Respostas_simulados
    * const respostas_simulados = await prisma.respostas_simulado.findMany()
    * ```
    */
  get respostas_simulado(): Prisma.respostas_simuladoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resultados_por_disciplina`: Exposes CRUD operations for the **resultados_por_disciplina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resultados_por_disciplinas
    * const resultados_por_disciplinas = await prisma.resultados_por_disciplina.findMany()
    * ```
    */
  get resultados_por_disciplina(): Prisma.resultados_por_disciplinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.simulados_feitos`: Exposes CRUD operations for the **simulados_feitos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Simulados_feitos
    * const simulados_feitos = await prisma.simulados_feitos.findMany()
    * ```
    */
  get simulados_feitos(): Prisma.simulados_feitosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    questoes: 'questoes',
    respostas_simulado: 'respostas_simulado',
    resultados_por_disciplina: 'resultados_por_disciplina',
    simulados_feitos: 'simulados_feitos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "questoes" | "respostas_simulado" | "resultados_por_disciplina" | "simulados_feitos"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      questoes: {
        payload: Prisma.$questoesPayload<ExtArgs>
        fields: Prisma.questoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questoesPayload>
          }
          findFirst: {
            args: Prisma.questoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questoesPayload>
          }
          findMany: {
            args: Prisma.questoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questoesPayload>[]
          }
          create: {
            args: Prisma.questoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questoesPayload>
          }
          createMany: {
            args: Prisma.questoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.questoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questoesPayload>
          }
          update: {
            args: Prisma.questoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questoesPayload>
          }
          deleteMany: {
            args: Prisma.questoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.questoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questoesPayload>
          }
          aggregate: {
            args: Prisma.QuestoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestoes>
          }
          groupBy: {
            args: Prisma.questoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.questoesCountArgs<ExtArgs>
            result: $Utils.Optional<QuestoesCountAggregateOutputType> | number
          }
        }
      }
      respostas_simulado: {
        payload: Prisma.$respostas_simuladoPayload<ExtArgs>
        fields: Prisma.respostas_simuladoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.respostas_simuladoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostas_simuladoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.respostas_simuladoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostas_simuladoPayload>
          }
          findFirst: {
            args: Prisma.respostas_simuladoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostas_simuladoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.respostas_simuladoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostas_simuladoPayload>
          }
          findMany: {
            args: Prisma.respostas_simuladoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostas_simuladoPayload>[]
          }
          create: {
            args: Prisma.respostas_simuladoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostas_simuladoPayload>
          }
          createMany: {
            args: Prisma.respostas_simuladoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.respostas_simuladoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostas_simuladoPayload>
          }
          update: {
            args: Prisma.respostas_simuladoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostas_simuladoPayload>
          }
          deleteMany: {
            args: Prisma.respostas_simuladoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.respostas_simuladoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.respostas_simuladoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$respostas_simuladoPayload>
          }
          aggregate: {
            args: Prisma.Respostas_simuladoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRespostas_simulado>
          }
          groupBy: {
            args: Prisma.respostas_simuladoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Respostas_simuladoGroupByOutputType>[]
          }
          count: {
            args: Prisma.respostas_simuladoCountArgs<ExtArgs>
            result: $Utils.Optional<Respostas_simuladoCountAggregateOutputType> | number
          }
        }
      }
      resultados_por_disciplina: {
        payload: Prisma.$resultados_por_disciplinaPayload<ExtArgs>
        fields: Prisma.resultados_por_disciplinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.resultados_por_disciplinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultados_por_disciplinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.resultados_por_disciplinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultados_por_disciplinaPayload>
          }
          findFirst: {
            args: Prisma.resultados_por_disciplinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultados_por_disciplinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.resultados_por_disciplinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultados_por_disciplinaPayload>
          }
          findMany: {
            args: Prisma.resultados_por_disciplinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultados_por_disciplinaPayload>[]
          }
          create: {
            args: Prisma.resultados_por_disciplinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultados_por_disciplinaPayload>
          }
          createMany: {
            args: Prisma.resultados_por_disciplinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.resultados_por_disciplinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultados_por_disciplinaPayload>
          }
          update: {
            args: Prisma.resultados_por_disciplinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultados_por_disciplinaPayload>
          }
          deleteMany: {
            args: Prisma.resultados_por_disciplinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.resultados_por_disciplinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.resultados_por_disciplinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultados_por_disciplinaPayload>
          }
          aggregate: {
            args: Prisma.Resultados_por_disciplinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResultados_por_disciplina>
          }
          groupBy: {
            args: Prisma.resultados_por_disciplinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Resultados_por_disciplinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.resultados_por_disciplinaCountArgs<ExtArgs>
            result: $Utils.Optional<Resultados_por_disciplinaCountAggregateOutputType> | number
          }
        }
      }
      simulados_feitos: {
        payload: Prisma.$simulados_feitosPayload<ExtArgs>
        fields: Prisma.simulados_feitosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.simulados_feitosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$simulados_feitosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.simulados_feitosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$simulados_feitosPayload>
          }
          findFirst: {
            args: Prisma.simulados_feitosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$simulados_feitosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.simulados_feitosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$simulados_feitosPayload>
          }
          findMany: {
            args: Prisma.simulados_feitosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$simulados_feitosPayload>[]
          }
          create: {
            args: Prisma.simulados_feitosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$simulados_feitosPayload>
          }
          createMany: {
            args: Prisma.simulados_feitosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.simulados_feitosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$simulados_feitosPayload>
          }
          update: {
            args: Prisma.simulados_feitosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$simulados_feitosPayload>
          }
          deleteMany: {
            args: Prisma.simulados_feitosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.simulados_feitosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.simulados_feitosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$simulados_feitosPayload>
          }
          aggregate: {
            args: Prisma.Simulados_feitosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSimulados_feitos>
          }
          groupBy: {
            args: Prisma.simulados_feitosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Simulados_feitosGroupByOutputType>[]
          }
          count: {
            args: Prisma.simulados_feitosCountArgs<ExtArgs>
            result: $Utils.Optional<Simulados_feitosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    questoes?: questoesOmit
    respostas_simulado?: respostas_simuladoOmit
    resultados_por_disciplina?: resultados_por_disciplinaOmit
    simulados_feitos?: simulados_feitosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type QuestoesCountOutputType
   */

  export type QuestoesCountOutputType = {
    respostas_simulado: number
  }

  export type QuestoesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas_simulado?: boolean | QuestoesCountOutputTypeCountRespostas_simuladoArgs
  }

  // Custom InputTypes
  /**
   * QuestoesCountOutputType without action
   */
  export type QuestoesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestoesCountOutputType
     */
    select?: QuestoesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestoesCountOutputType without action
   */
  export type QuestoesCountOutputTypeCountRespostas_simuladoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: respostas_simuladoWhereInput
  }


  /**
   * Count Type Simulados_feitosCountOutputType
   */

  export type Simulados_feitosCountOutputType = {
    respostas_simulado: number
    resultados_por_disciplina: number
  }

  export type Simulados_feitosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas_simulado?: boolean | Simulados_feitosCountOutputTypeCountRespostas_simuladoArgs
    resultados_por_disciplina?: boolean | Simulados_feitosCountOutputTypeCountResultados_por_disciplinaArgs
  }

  // Custom InputTypes
  /**
   * Simulados_feitosCountOutputType without action
   */
  export type Simulados_feitosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Simulados_feitosCountOutputType
     */
    select?: Simulados_feitosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Simulados_feitosCountOutputType without action
   */
  export type Simulados_feitosCountOutputTypeCountRespostas_simuladoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: respostas_simuladoWhereInput
  }

  /**
   * Simulados_feitosCountOutputType without action
   */
  export type Simulados_feitosCountOutputTypeCountResultados_por_disciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resultados_por_disciplinaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model questoes
   */

  export type AggregateQuestoes = {
    _count: QuestoesCountAggregateOutputType | null
    _avg: QuestoesAvgAggregateOutputType | null
    _sum: QuestoesSumAggregateOutputType | null
    _min: QuestoesMinAggregateOutputType | null
    _max: QuestoesMaxAggregateOutputType | null
  }

  export type QuestoesAvgAggregateOutputType = {
    id_questoes: number | null
  }

  export type QuestoesSumAggregateOutputType = {
    id_questoes: number | null
  }

  export type QuestoesMinAggregateOutputType = {
    id_questoes: number | null
    texto: string | null
    alternativas: string | null
    gabarito: string | null
    disciplina: string | null
  }

  export type QuestoesMaxAggregateOutputType = {
    id_questoes: number | null
    texto: string | null
    alternativas: string | null
    gabarito: string | null
    disciplina: string | null
  }

  export type QuestoesCountAggregateOutputType = {
    id_questoes: number
    texto: number
    alternativas: number
    gabarito: number
    disciplina: number
    _all: number
  }


  export type QuestoesAvgAggregateInputType = {
    id_questoes?: true
  }

  export type QuestoesSumAggregateInputType = {
    id_questoes?: true
  }

  export type QuestoesMinAggregateInputType = {
    id_questoes?: true
    texto?: true
    alternativas?: true
    gabarito?: true
    disciplina?: true
  }

  export type QuestoesMaxAggregateInputType = {
    id_questoes?: true
    texto?: true
    alternativas?: true
    gabarito?: true
    disciplina?: true
  }

  export type QuestoesCountAggregateInputType = {
    id_questoes?: true
    texto?: true
    alternativas?: true
    gabarito?: true
    disciplina?: true
    _all?: true
  }

  export type QuestoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questoes to aggregate.
     */
    where?: questoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questoes to fetch.
     */
    orderBy?: questoesOrderByWithRelationInput | questoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned questoes
    **/
    _count?: true | QuestoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestoesMaxAggregateInputType
  }

  export type GetQuestoesAggregateType<T extends QuestoesAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestoes[P]>
      : GetScalarType<T[P], AggregateQuestoes[P]>
  }




  export type questoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questoesWhereInput
    orderBy?: questoesOrderByWithAggregationInput | questoesOrderByWithAggregationInput[]
    by: QuestoesScalarFieldEnum[] | QuestoesScalarFieldEnum
    having?: questoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestoesCountAggregateInputType | true
    _avg?: QuestoesAvgAggregateInputType
    _sum?: QuestoesSumAggregateInputType
    _min?: QuestoesMinAggregateInputType
    _max?: QuestoesMaxAggregateInputType
  }

  export type QuestoesGroupByOutputType = {
    id_questoes: number
    texto: string
    alternativas: string
    gabarito: string
    disciplina: string | null
    _count: QuestoesCountAggregateOutputType | null
    _avg: QuestoesAvgAggregateOutputType | null
    _sum: QuestoesSumAggregateOutputType | null
    _min: QuestoesMinAggregateOutputType | null
    _max: QuestoesMaxAggregateOutputType | null
  }

  type GetQuestoesGroupByPayload<T extends questoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestoesGroupByOutputType[P]>
            : GetScalarType<T[P], QuestoesGroupByOutputType[P]>
        }
      >
    >


  export type questoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_questoes?: boolean
    texto?: boolean
    alternativas?: boolean
    gabarito?: boolean
    disciplina?: boolean
    respostas_simulado?: boolean | questoes$respostas_simuladoArgs<ExtArgs>
    _count?: boolean | QuestoesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questoes"]>



  export type questoesSelectScalar = {
    id_questoes?: boolean
    texto?: boolean
    alternativas?: boolean
    gabarito?: boolean
    disciplina?: boolean
  }

  export type questoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_questoes" | "texto" | "alternativas" | "gabarito" | "disciplina", ExtArgs["result"]["questoes"]>
  export type questoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas_simulado?: boolean | questoes$respostas_simuladoArgs<ExtArgs>
    _count?: boolean | QuestoesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $questoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "questoes"
    objects: {
      respostas_simulado: Prisma.$respostas_simuladoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_questoes: number
      texto: string
      alternativas: string
      gabarito: string
      disciplina: string | null
    }, ExtArgs["result"]["questoes"]>
    composites: {}
  }

  type questoesGetPayload<S extends boolean | null | undefined | questoesDefaultArgs> = $Result.GetResult<Prisma.$questoesPayload, S>

  type questoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestoesCountAggregateInputType | true
    }

  export interface questoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['questoes'], meta: { name: 'questoes' } }
    /**
     * Find zero or one Questoes that matches the filter.
     * @param {questoesFindUniqueArgs} args - Arguments to find a Questoes
     * @example
     * // Get one Questoes
     * const questoes = await prisma.questoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questoesFindUniqueArgs>(args: SelectSubset<T, questoesFindUniqueArgs<ExtArgs>>): Prisma__questoesClient<$Result.GetResult<Prisma.$questoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Questoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questoesFindUniqueOrThrowArgs} args - Arguments to find a Questoes
     * @example
     * // Get one Questoes
     * const questoes = await prisma.questoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questoesFindUniqueOrThrowArgs>(args: SelectSubset<T, questoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questoesClient<$Result.GetResult<Prisma.$questoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questoesFindFirstArgs} args - Arguments to find a Questoes
     * @example
     * // Get one Questoes
     * const questoes = await prisma.questoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questoesFindFirstArgs>(args?: SelectSubset<T, questoesFindFirstArgs<ExtArgs>>): Prisma__questoesClient<$Result.GetResult<Prisma.$questoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Questoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questoesFindFirstOrThrowArgs} args - Arguments to find a Questoes
     * @example
     * // Get one Questoes
     * const questoes = await prisma.questoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questoesFindFirstOrThrowArgs>(args?: SelectSubset<T, questoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__questoesClient<$Result.GetResult<Prisma.$questoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questoes
     * const questoes = await prisma.questoes.findMany()
     * 
     * // Get first 10 Questoes
     * const questoes = await prisma.questoes.findMany({ take: 10 })
     * 
     * // Only select the `id_questoes`
     * const questoesWithId_questoesOnly = await prisma.questoes.findMany({ select: { id_questoes: true } })
     * 
     */
    findMany<T extends questoesFindManyArgs>(args?: SelectSubset<T, questoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Questoes.
     * @param {questoesCreateArgs} args - Arguments to create a Questoes.
     * @example
     * // Create one Questoes
     * const Questoes = await prisma.questoes.create({
     *   data: {
     *     // ... data to create a Questoes
     *   }
     * })
     * 
     */
    create<T extends questoesCreateArgs>(args: SelectSubset<T, questoesCreateArgs<ExtArgs>>): Prisma__questoesClient<$Result.GetResult<Prisma.$questoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questoes.
     * @param {questoesCreateManyArgs} args - Arguments to create many Questoes.
     * @example
     * // Create many Questoes
     * const questoes = await prisma.questoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questoesCreateManyArgs>(args?: SelectSubset<T, questoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Questoes.
     * @param {questoesDeleteArgs} args - Arguments to delete one Questoes.
     * @example
     * // Delete one Questoes
     * const Questoes = await prisma.questoes.delete({
     *   where: {
     *     // ... filter to delete one Questoes
     *   }
     * })
     * 
     */
    delete<T extends questoesDeleteArgs>(args: SelectSubset<T, questoesDeleteArgs<ExtArgs>>): Prisma__questoesClient<$Result.GetResult<Prisma.$questoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Questoes.
     * @param {questoesUpdateArgs} args - Arguments to update one Questoes.
     * @example
     * // Update one Questoes
     * const questoes = await prisma.questoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questoesUpdateArgs>(args: SelectSubset<T, questoesUpdateArgs<ExtArgs>>): Prisma__questoesClient<$Result.GetResult<Prisma.$questoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questoes.
     * @param {questoesDeleteManyArgs} args - Arguments to filter Questoes to delete.
     * @example
     * // Delete a few Questoes
     * const { count } = await prisma.questoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questoesDeleteManyArgs>(args?: SelectSubset<T, questoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questoes
     * const questoes = await prisma.questoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questoesUpdateManyArgs>(args: SelectSubset<T, questoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Questoes.
     * @param {questoesUpsertArgs} args - Arguments to update or create a Questoes.
     * @example
     * // Update or create a Questoes
     * const questoes = await prisma.questoes.upsert({
     *   create: {
     *     // ... data to create a Questoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Questoes we want to update
     *   }
     * })
     */
    upsert<T extends questoesUpsertArgs>(args: SelectSubset<T, questoesUpsertArgs<ExtArgs>>): Prisma__questoesClient<$Result.GetResult<Prisma.$questoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questoesCountArgs} args - Arguments to filter Questoes to count.
     * @example
     * // Count the number of Questoes
     * const count = await prisma.questoes.count({
     *   where: {
     *     // ... the filter for the Questoes we want to count
     *   }
     * })
    **/
    count<T extends questoesCountArgs>(
      args?: Subset<T, questoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Questoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestoesAggregateArgs>(args: Subset<T, QuestoesAggregateArgs>): Prisma.PrismaPromise<GetQuestoesAggregateType<T>>

    /**
     * Group by Questoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends questoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questoesGroupByArgs['orderBy'] }
        : { orderBy?: questoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, questoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the questoes model
   */
  readonly fields: questoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for questoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    respostas_simulado<T extends questoes$respostas_simuladoArgs<ExtArgs> = {}>(args?: Subset<T, questoes$respostas_simuladoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the questoes model
   */
  interface questoesFieldRefs {
    readonly id_questoes: FieldRef<"questoes", 'Int'>
    readonly texto: FieldRef<"questoes", 'String'>
    readonly alternativas: FieldRef<"questoes", 'String'>
    readonly gabarito: FieldRef<"questoes", 'String'>
    readonly disciplina: FieldRef<"questoes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * questoes findUnique
   */
  export type questoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questoes
     */
    select?: questoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questoes
     */
    omit?: questoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questoesInclude<ExtArgs> | null
    /**
     * Filter, which questoes to fetch.
     */
    where: questoesWhereUniqueInput
  }

  /**
   * questoes findUniqueOrThrow
   */
  export type questoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questoes
     */
    select?: questoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questoes
     */
    omit?: questoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questoesInclude<ExtArgs> | null
    /**
     * Filter, which questoes to fetch.
     */
    where: questoesWhereUniqueInput
  }

  /**
   * questoes findFirst
   */
  export type questoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questoes
     */
    select?: questoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questoes
     */
    omit?: questoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questoesInclude<ExtArgs> | null
    /**
     * Filter, which questoes to fetch.
     */
    where?: questoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questoes to fetch.
     */
    orderBy?: questoesOrderByWithRelationInput | questoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questoes.
     */
    cursor?: questoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questoes.
     */
    distinct?: QuestoesScalarFieldEnum | QuestoesScalarFieldEnum[]
  }

  /**
   * questoes findFirstOrThrow
   */
  export type questoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questoes
     */
    select?: questoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questoes
     */
    omit?: questoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questoesInclude<ExtArgs> | null
    /**
     * Filter, which questoes to fetch.
     */
    where?: questoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questoes to fetch.
     */
    orderBy?: questoesOrderByWithRelationInput | questoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for questoes.
     */
    cursor?: questoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of questoes.
     */
    distinct?: QuestoesScalarFieldEnum | QuestoesScalarFieldEnum[]
  }

  /**
   * questoes findMany
   */
  export type questoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questoes
     */
    select?: questoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questoes
     */
    omit?: questoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questoesInclude<ExtArgs> | null
    /**
     * Filter, which questoes to fetch.
     */
    where?: questoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of questoes to fetch.
     */
    orderBy?: questoesOrderByWithRelationInput | questoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing questoes.
     */
    cursor?: questoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` questoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` questoes.
     */
    skip?: number
    distinct?: QuestoesScalarFieldEnum | QuestoesScalarFieldEnum[]
  }

  /**
   * questoes create
   */
  export type questoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questoes
     */
    select?: questoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questoes
     */
    omit?: questoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questoesInclude<ExtArgs> | null
    /**
     * The data needed to create a questoes.
     */
    data: XOR<questoesCreateInput, questoesUncheckedCreateInput>
  }

  /**
   * questoes createMany
   */
  export type questoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many questoes.
     */
    data: questoesCreateManyInput | questoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * questoes update
   */
  export type questoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questoes
     */
    select?: questoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questoes
     */
    omit?: questoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questoesInclude<ExtArgs> | null
    /**
     * The data needed to update a questoes.
     */
    data: XOR<questoesUpdateInput, questoesUncheckedUpdateInput>
    /**
     * Choose, which questoes to update.
     */
    where: questoesWhereUniqueInput
  }

  /**
   * questoes updateMany
   */
  export type questoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update questoes.
     */
    data: XOR<questoesUpdateManyMutationInput, questoesUncheckedUpdateManyInput>
    /**
     * Filter which questoes to update
     */
    where?: questoesWhereInput
    /**
     * Limit how many questoes to update.
     */
    limit?: number
  }

  /**
   * questoes upsert
   */
  export type questoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questoes
     */
    select?: questoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questoes
     */
    omit?: questoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questoesInclude<ExtArgs> | null
    /**
     * The filter to search for the questoes to update in case it exists.
     */
    where: questoesWhereUniqueInput
    /**
     * In case the questoes found by the `where` argument doesn't exist, create a new questoes with this data.
     */
    create: XOR<questoesCreateInput, questoesUncheckedCreateInput>
    /**
     * In case the questoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questoesUpdateInput, questoesUncheckedUpdateInput>
  }

  /**
   * questoes delete
   */
  export type questoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questoes
     */
    select?: questoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questoes
     */
    omit?: questoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questoesInclude<ExtArgs> | null
    /**
     * Filter which questoes to delete.
     */
    where: questoesWhereUniqueInput
  }

  /**
   * questoes deleteMany
   */
  export type questoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which questoes to delete
     */
    where?: questoesWhereInput
    /**
     * Limit how many questoes to delete.
     */
    limit?: number
  }

  /**
   * questoes.respostas_simulado
   */
  export type questoes$respostas_simuladoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    where?: respostas_simuladoWhereInput
    orderBy?: respostas_simuladoOrderByWithRelationInput | respostas_simuladoOrderByWithRelationInput[]
    cursor?: respostas_simuladoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Respostas_simuladoScalarFieldEnum | Respostas_simuladoScalarFieldEnum[]
  }

  /**
   * questoes without action
   */
  export type questoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the questoes
     */
    select?: questoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the questoes
     */
    omit?: questoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questoesInclude<ExtArgs> | null
  }


  /**
   * Model respostas_simulado
   */

  export type AggregateRespostas_simulado = {
    _count: Respostas_simuladoCountAggregateOutputType | null
    _avg: Respostas_simuladoAvgAggregateOutputType | null
    _sum: Respostas_simuladoSumAggregateOutputType | null
    _min: Respostas_simuladoMinAggregateOutputType | null
    _max: Respostas_simuladoMaxAggregateOutputType | null
  }

  export type Respostas_simuladoAvgAggregateOutputType = {
    id_resposta: number | null
    id_simulado_feito: number | null
    id_questao: number | null
  }

  export type Respostas_simuladoSumAggregateOutputType = {
    id_resposta: number | null
    id_simulado_feito: number | null
    id_questao: number | null
  }

  export type Respostas_simuladoMinAggregateOutputType = {
    id_resposta: number | null
    id_simulado_feito: number | null
    id_questao: number | null
    acertou: boolean | null
  }

  export type Respostas_simuladoMaxAggregateOutputType = {
    id_resposta: number | null
    id_simulado_feito: number | null
    id_questao: number | null
    acertou: boolean | null
  }

  export type Respostas_simuladoCountAggregateOutputType = {
    id_resposta: number
    id_simulado_feito: number
    id_questao: number
    acertou: number
    _all: number
  }


  export type Respostas_simuladoAvgAggregateInputType = {
    id_resposta?: true
    id_simulado_feito?: true
    id_questao?: true
  }

  export type Respostas_simuladoSumAggregateInputType = {
    id_resposta?: true
    id_simulado_feito?: true
    id_questao?: true
  }

  export type Respostas_simuladoMinAggregateInputType = {
    id_resposta?: true
    id_simulado_feito?: true
    id_questao?: true
    acertou?: true
  }

  export type Respostas_simuladoMaxAggregateInputType = {
    id_resposta?: true
    id_simulado_feito?: true
    id_questao?: true
    acertou?: true
  }

  export type Respostas_simuladoCountAggregateInputType = {
    id_resposta?: true
    id_simulado_feito?: true
    id_questao?: true
    acertou?: true
    _all?: true
  }

  export type Respostas_simuladoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which respostas_simulado to aggregate.
     */
    where?: respostas_simuladoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respostas_simulados to fetch.
     */
    orderBy?: respostas_simuladoOrderByWithRelationInput | respostas_simuladoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: respostas_simuladoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respostas_simulados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respostas_simulados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned respostas_simulados
    **/
    _count?: true | Respostas_simuladoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Respostas_simuladoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Respostas_simuladoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Respostas_simuladoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Respostas_simuladoMaxAggregateInputType
  }

  export type GetRespostas_simuladoAggregateType<T extends Respostas_simuladoAggregateArgs> = {
        [P in keyof T & keyof AggregateRespostas_simulado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRespostas_simulado[P]>
      : GetScalarType<T[P], AggregateRespostas_simulado[P]>
  }




  export type respostas_simuladoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: respostas_simuladoWhereInput
    orderBy?: respostas_simuladoOrderByWithAggregationInput | respostas_simuladoOrderByWithAggregationInput[]
    by: Respostas_simuladoScalarFieldEnum[] | Respostas_simuladoScalarFieldEnum
    having?: respostas_simuladoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Respostas_simuladoCountAggregateInputType | true
    _avg?: Respostas_simuladoAvgAggregateInputType
    _sum?: Respostas_simuladoSumAggregateInputType
    _min?: Respostas_simuladoMinAggregateInputType
    _max?: Respostas_simuladoMaxAggregateInputType
  }

  export type Respostas_simuladoGroupByOutputType = {
    id_resposta: number
    id_simulado_feito: number
    id_questao: number
    acertou: boolean
    _count: Respostas_simuladoCountAggregateOutputType | null
    _avg: Respostas_simuladoAvgAggregateOutputType | null
    _sum: Respostas_simuladoSumAggregateOutputType | null
    _min: Respostas_simuladoMinAggregateOutputType | null
    _max: Respostas_simuladoMaxAggregateOutputType | null
  }

  type GetRespostas_simuladoGroupByPayload<T extends respostas_simuladoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Respostas_simuladoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Respostas_simuladoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Respostas_simuladoGroupByOutputType[P]>
            : GetScalarType<T[P], Respostas_simuladoGroupByOutputType[P]>
        }
      >
    >


  export type respostas_simuladoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_resposta?: boolean
    id_simulado_feito?: boolean
    id_questao?: boolean
    acertou?: boolean
    questoes?: boolean | questoesDefaultArgs<ExtArgs>
    simulados_feitos?: boolean | simulados_feitosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["respostas_simulado"]>



  export type respostas_simuladoSelectScalar = {
    id_resposta?: boolean
    id_simulado_feito?: boolean
    id_questao?: boolean
    acertou?: boolean
  }

  export type respostas_simuladoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_resposta" | "id_simulado_feito" | "id_questao" | "acertou", ExtArgs["result"]["respostas_simulado"]>
  export type respostas_simuladoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questoes?: boolean | questoesDefaultArgs<ExtArgs>
    simulados_feitos?: boolean | simulados_feitosDefaultArgs<ExtArgs>
  }

  export type $respostas_simuladoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "respostas_simulado"
    objects: {
      questoes: Prisma.$questoesPayload<ExtArgs>
      simulados_feitos: Prisma.$simulados_feitosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_resposta: number
      id_simulado_feito: number
      id_questao: number
      acertou: boolean
    }, ExtArgs["result"]["respostas_simulado"]>
    composites: {}
  }

  type respostas_simuladoGetPayload<S extends boolean | null | undefined | respostas_simuladoDefaultArgs> = $Result.GetResult<Prisma.$respostas_simuladoPayload, S>

  type respostas_simuladoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<respostas_simuladoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Respostas_simuladoCountAggregateInputType | true
    }

  export interface respostas_simuladoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['respostas_simulado'], meta: { name: 'respostas_simulado' } }
    /**
     * Find zero or one Respostas_simulado that matches the filter.
     * @param {respostas_simuladoFindUniqueArgs} args - Arguments to find a Respostas_simulado
     * @example
     * // Get one Respostas_simulado
     * const respostas_simulado = await prisma.respostas_simulado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends respostas_simuladoFindUniqueArgs>(args: SelectSubset<T, respostas_simuladoFindUniqueArgs<ExtArgs>>): Prisma__respostas_simuladoClient<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Respostas_simulado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {respostas_simuladoFindUniqueOrThrowArgs} args - Arguments to find a Respostas_simulado
     * @example
     * // Get one Respostas_simulado
     * const respostas_simulado = await prisma.respostas_simulado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends respostas_simuladoFindUniqueOrThrowArgs>(args: SelectSubset<T, respostas_simuladoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__respostas_simuladoClient<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Respostas_simulado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostas_simuladoFindFirstArgs} args - Arguments to find a Respostas_simulado
     * @example
     * // Get one Respostas_simulado
     * const respostas_simulado = await prisma.respostas_simulado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends respostas_simuladoFindFirstArgs>(args?: SelectSubset<T, respostas_simuladoFindFirstArgs<ExtArgs>>): Prisma__respostas_simuladoClient<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Respostas_simulado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostas_simuladoFindFirstOrThrowArgs} args - Arguments to find a Respostas_simulado
     * @example
     * // Get one Respostas_simulado
     * const respostas_simulado = await prisma.respostas_simulado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends respostas_simuladoFindFirstOrThrowArgs>(args?: SelectSubset<T, respostas_simuladoFindFirstOrThrowArgs<ExtArgs>>): Prisma__respostas_simuladoClient<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Respostas_simulados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostas_simuladoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Respostas_simulados
     * const respostas_simulados = await prisma.respostas_simulado.findMany()
     * 
     * // Get first 10 Respostas_simulados
     * const respostas_simulados = await prisma.respostas_simulado.findMany({ take: 10 })
     * 
     * // Only select the `id_resposta`
     * const respostas_simuladoWithId_respostaOnly = await prisma.respostas_simulado.findMany({ select: { id_resposta: true } })
     * 
     */
    findMany<T extends respostas_simuladoFindManyArgs>(args?: SelectSubset<T, respostas_simuladoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Respostas_simulado.
     * @param {respostas_simuladoCreateArgs} args - Arguments to create a Respostas_simulado.
     * @example
     * // Create one Respostas_simulado
     * const Respostas_simulado = await prisma.respostas_simulado.create({
     *   data: {
     *     // ... data to create a Respostas_simulado
     *   }
     * })
     * 
     */
    create<T extends respostas_simuladoCreateArgs>(args: SelectSubset<T, respostas_simuladoCreateArgs<ExtArgs>>): Prisma__respostas_simuladoClient<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Respostas_simulados.
     * @param {respostas_simuladoCreateManyArgs} args - Arguments to create many Respostas_simulados.
     * @example
     * // Create many Respostas_simulados
     * const respostas_simulado = await prisma.respostas_simulado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends respostas_simuladoCreateManyArgs>(args?: SelectSubset<T, respostas_simuladoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Respostas_simulado.
     * @param {respostas_simuladoDeleteArgs} args - Arguments to delete one Respostas_simulado.
     * @example
     * // Delete one Respostas_simulado
     * const Respostas_simulado = await prisma.respostas_simulado.delete({
     *   where: {
     *     // ... filter to delete one Respostas_simulado
     *   }
     * })
     * 
     */
    delete<T extends respostas_simuladoDeleteArgs>(args: SelectSubset<T, respostas_simuladoDeleteArgs<ExtArgs>>): Prisma__respostas_simuladoClient<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Respostas_simulado.
     * @param {respostas_simuladoUpdateArgs} args - Arguments to update one Respostas_simulado.
     * @example
     * // Update one Respostas_simulado
     * const respostas_simulado = await prisma.respostas_simulado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends respostas_simuladoUpdateArgs>(args: SelectSubset<T, respostas_simuladoUpdateArgs<ExtArgs>>): Prisma__respostas_simuladoClient<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Respostas_simulados.
     * @param {respostas_simuladoDeleteManyArgs} args - Arguments to filter Respostas_simulados to delete.
     * @example
     * // Delete a few Respostas_simulados
     * const { count } = await prisma.respostas_simulado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends respostas_simuladoDeleteManyArgs>(args?: SelectSubset<T, respostas_simuladoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Respostas_simulados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostas_simuladoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Respostas_simulados
     * const respostas_simulado = await prisma.respostas_simulado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends respostas_simuladoUpdateManyArgs>(args: SelectSubset<T, respostas_simuladoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Respostas_simulado.
     * @param {respostas_simuladoUpsertArgs} args - Arguments to update or create a Respostas_simulado.
     * @example
     * // Update or create a Respostas_simulado
     * const respostas_simulado = await prisma.respostas_simulado.upsert({
     *   create: {
     *     // ... data to create a Respostas_simulado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Respostas_simulado we want to update
     *   }
     * })
     */
    upsert<T extends respostas_simuladoUpsertArgs>(args: SelectSubset<T, respostas_simuladoUpsertArgs<ExtArgs>>): Prisma__respostas_simuladoClient<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Respostas_simulados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostas_simuladoCountArgs} args - Arguments to filter Respostas_simulados to count.
     * @example
     * // Count the number of Respostas_simulados
     * const count = await prisma.respostas_simulado.count({
     *   where: {
     *     // ... the filter for the Respostas_simulados we want to count
     *   }
     * })
    **/
    count<T extends respostas_simuladoCountArgs>(
      args?: Subset<T, respostas_simuladoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Respostas_simuladoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Respostas_simulado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Respostas_simuladoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Respostas_simuladoAggregateArgs>(args: Subset<T, Respostas_simuladoAggregateArgs>): Prisma.PrismaPromise<GetRespostas_simuladoAggregateType<T>>

    /**
     * Group by Respostas_simulado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {respostas_simuladoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends respostas_simuladoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: respostas_simuladoGroupByArgs['orderBy'] }
        : { orderBy?: respostas_simuladoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, respostas_simuladoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRespostas_simuladoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the respostas_simulado model
   */
  readonly fields: respostas_simuladoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for respostas_simulado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__respostas_simuladoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questoes<T extends questoesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questoesDefaultArgs<ExtArgs>>): Prisma__questoesClient<$Result.GetResult<Prisma.$questoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    simulados_feitos<T extends simulados_feitosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, simulados_feitosDefaultArgs<ExtArgs>>): Prisma__simulados_feitosClient<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the respostas_simulado model
   */
  interface respostas_simuladoFieldRefs {
    readonly id_resposta: FieldRef<"respostas_simulado", 'Int'>
    readonly id_simulado_feito: FieldRef<"respostas_simulado", 'Int'>
    readonly id_questao: FieldRef<"respostas_simulado", 'Int'>
    readonly acertou: FieldRef<"respostas_simulado", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * respostas_simulado findUnique
   */
  export type respostas_simuladoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    /**
     * Filter, which respostas_simulado to fetch.
     */
    where: respostas_simuladoWhereUniqueInput
  }

  /**
   * respostas_simulado findUniqueOrThrow
   */
  export type respostas_simuladoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    /**
     * Filter, which respostas_simulado to fetch.
     */
    where: respostas_simuladoWhereUniqueInput
  }

  /**
   * respostas_simulado findFirst
   */
  export type respostas_simuladoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    /**
     * Filter, which respostas_simulado to fetch.
     */
    where?: respostas_simuladoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respostas_simulados to fetch.
     */
    orderBy?: respostas_simuladoOrderByWithRelationInput | respostas_simuladoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for respostas_simulados.
     */
    cursor?: respostas_simuladoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respostas_simulados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respostas_simulados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of respostas_simulados.
     */
    distinct?: Respostas_simuladoScalarFieldEnum | Respostas_simuladoScalarFieldEnum[]
  }

  /**
   * respostas_simulado findFirstOrThrow
   */
  export type respostas_simuladoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    /**
     * Filter, which respostas_simulado to fetch.
     */
    where?: respostas_simuladoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respostas_simulados to fetch.
     */
    orderBy?: respostas_simuladoOrderByWithRelationInput | respostas_simuladoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for respostas_simulados.
     */
    cursor?: respostas_simuladoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respostas_simulados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respostas_simulados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of respostas_simulados.
     */
    distinct?: Respostas_simuladoScalarFieldEnum | Respostas_simuladoScalarFieldEnum[]
  }

  /**
   * respostas_simulado findMany
   */
  export type respostas_simuladoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    /**
     * Filter, which respostas_simulados to fetch.
     */
    where?: respostas_simuladoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of respostas_simulados to fetch.
     */
    orderBy?: respostas_simuladoOrderByWithRelationInput | respostas_simuladoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing respostas_simulados.
     */
    cursor?: respostas_simuladoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` respostas_simulados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` respostas_simulados.
     */
    skip?: number
    distinct?: Respostas_simuladoScalarFieldEnum | Respostas_simuladoScalarFieldEnum[]
  }

  /**
   * respostas_simulado create
   */
  export type respostas_simuladoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    /**
     * The data needed to create a respostas_simulado.
     */
    data: XOR<respostas_simuladoCreateInput, respostas_simuladoUncheckedCreateInput>
  }

  /**
   * respostas_simulado createMany
   */
  export type respostas_simuladoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many respostas_simulados.
     */
    data: respostas_simuladoCreateManyInput | respostas_simuladoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * respostas_simulado update
   */
  export type respostas_simuladoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    /**
     * The data needed to update a respostas_simulado.
     */
    data: XOR<respostas_simuladoUpdateInput, respostas_simuladoUncheckedUpdateInput>
    /**
     * Choose, which respostas_simulado to update.
     */
    where: respostas_simuladoWhereUniqueInput
  }

  /**
   * respostas_simulado updateMany
   */
  export type respostas_simuladoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update respostas_simulados.
     */
    data: XOR<respostas_simuladoUpdateManyMutationInput, respostas_simuladoUncheckedUpdateManyInput>
    /**
     * Filter which respostas_simulados to update
     */
    where?: respostas_simuladoWhereInput
    /**
     * Limit how many respostas_simulados to update.
     */
    limit?: number
  }

  /**
   * respostas_simulado upsert
   */
  export type respostas_simuladoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    /**
     * The filter to search for the respostas_simulado to update in case it exists.
     */
    where: respostas_simuladoWhereUniqueInput
    /**
     * In case the respostas_simulado found by the `where` argument doesn't exist, create a new respostas_simulado with this data.
     */
    create: XOR<respostas_simuladoCreateInput, respostas_simuladoUncheckedCreateInput>
    /**
     * In case the respostas_simulado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<respostas_simuladoUpdateInput, respostas_simuladoUncheckedUpdateInput>
  }

  /**
   * respostas_simulado delete
   */
  export type respostas_simuladoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    /**
     * Filter which respostas_simulado to delete.
     */
    where: respostas_simuladoWhereUniqueInput
  }

  /**
   * respostas_simulado deleteMany
   */
  export type respostas_simuladoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which respostas_simulados to delete
     */
    where?: respostas_simuladoWhereInput
    /**
     * Limit how many respostas_simulados to delete.
     */
    limit?: number
  }

  /**
   * respostas_simulado without action
   */
  export type respostas_simuladoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
  }


  /**
   * Model resultados_por_disciplina
   */

  export type AggregateResultados_por_disciplina = {
    _count: Resultados_por_disciplinaCountAggregateOutputType | null
    _avg: Resultados_por_disciplinaAvgAggregateOutputType | null
    _sum: Resultados_por_disciplinaSumAggregateOutputType | null
    _min: Resultados_por_disciplinaMinAggregateOutputType | null
    _max: Resultados_por_disciplinaMaxAggregateOutputType | null
  }

  export type Resultados_por_disciplinaAvgAggregateOutputType = {
    id_resultado_disciplina: number | null
    id_simulado_feito: number | null
    acertos_disciplina: number | null
    questoes_feitas_disciplina: number | null
  }

  export type Resultados_por_disciplinaSumAggregateOutputType = {
    id_resultado_disciplina: number | null
    id_simulado_feito: number | null
    acertos_disciplina: number | null
    questoes_feitas_disciplina: number | null
  }

  export type Resultados_por_disciplinaMinAggregateOutputType = {
    id_resultado_disciplina: number | null
    id_simulado_feito: number | null
    disciplina: string | null
    acertos_disciplina: number | null
    questoes_feitas_disciplina: number | null
  }

  export type Resultados_por_disciplinaMaxAggregateOutputType = {
    id_resultado_disciplina: number | null
    id_simulado_feito: number | null
    disciplina: string | null
    acertos_disciplina: number | null
    questoes_feitas_disciplina: number | null
  }

  export type Resultados_por_disciplinaCountAggregateOutputType = {
    id_resultado_disciplina: number
    id_simulado_feito: number
    disciplina: number
    acertos_disciplina: number
    questoes_feitas_disciplina: number
    _all: number
  }


  export type Resultados_por_disciplinaAvgAggregateInputType = {
    id_resultado_disciplina?: true
    id_simulado_feito?: true
    acertos_disciplina?: true
    questoes_feitas_disciplina?: true
  }

  export type Resultados_por_disciplinaSumAggregateInputType = {
    id_resultado_disciplina?: true
    id_simulado_feito?: true
    acertos_disciplina?: true
    questoes_feitas_disciplina?: true
  }

  export type Resultados_por_disciplinaMinAggregateInputType = {
    id_resultado_disciplina?: true
    id_simulado_feito?: true
    disciplina?: true
    acertos_disciplina?: true
    questoes_feitas_disciplina?: true
  }

  export type Resultados_por_disciplinaMaxAggregateInputType = {
    id_resultado_disciplina?: true
    id_simulado_feito?: true
    disciplina?: true
    acertos_disciplina?: true
    questoes_feitas_disciplina?: true
  }

  export type Resultados_por_disciplinaCountAggregateInputType = {
    id_resultado_disciplina?: true
    id_simulado_feito?: true
    disciplina?: true
    acertos_disciplina?: true
    questoes_feitas_disciplina?: true
    _all?: true
  }

  export type Resultados_por_disciplinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resultados_por_disciplina to aggregate.
     */
    where?: resultados_por_disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resultados_por_disciplinas to fetch.
     */
    orderBy?: resultados_por_disciplinaOrderByWithRelationInput | resultados_por_disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: resultados_por_disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resultados_por_disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resultados_por_disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned resultados_por_disciplinas
    **/
    _count?: true | Resultados_por_disciplinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Resultados_por_disciplinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Resultados_por_disciplinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Resultados_por_disciplinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Resultados_por_disciplinaMaxAggregateInputType
  }

  export type GetResultados_por_disciplinaAggregateType<T extends Resultados_por_disciplinaAggregateArgs> = {
        [P in keyof T & keyof AggregateResultados_por_disciplina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultados_por_disciplina[P]>
      : GetScalarType<T[P], AggregateResultados_por_disciplina[P]>
  }




  export type resultados_por_disciplinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resultados_por_disciplinaWhereInput
    orderBy?: resultados_por_disciplinaOrderByWithAggregationInput | resultados_por_disciplinaOrderByWithAggregationInput[]
    by: Resultados_por_disciplinaScalarFieldEnum[] | Resultados_por_disciplinaScalarFieldEnum
    having?: resultados_por_disciplinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Resultados_por_disciplinaCountAggregateInputType | true
    _avg?: Resultados_por_disciplinaAvgAggregateInputType
    _sum?: Resultados_por_disciplinaSumAggregateInputType
    _min?: Resultados_por_disciplinaMinAggregateInputType
    _max?: Resultados_por_disciplinaMaxAggregateInputType
  }

  export type Resultados_por_disciplinaGroupByOutputType = {
    id_resultado_disciplina: number
    id_simulado_feito: number
    disciplina: string
    acertos_disciplina: number
    questoes_feitas_disciplina: number
    _count: Resultados_por_disciplinaCountAggregateOutputType | null
    _avg: Resultados_por_disciplinaAvgAggregateOutputType | null
    _sum: Resultados_por_disciplinaSumAggregateOutputType | null
    _min: Resultados_por_disciplinaMinAggregateOutputType | null
    _max: Resultados_por_disciplinaMaxAggregateOutputType | null
  }

  type GetResultados_por_disciplinaGroupByPayload<T extends resultados_por_disciplinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Resultados_por_disciplinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Resultados_por_disciplinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Resultados_por_disciplinaGroupByOutputType[P]>
            : GetScalarType<T[P], Resultados_por_disciplinaGroupByOutputType[P]>
        }
      >
    >


  export type resultados_por_disciplinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_resultado_disciplina?: boolean
    id_simulado_feito?: boolean
    disciplina?: boolean
    acertos_disciplina?: boolean
    questoes_feitas_disciplina?: boolean
    simulados_feitos?: boolean | simulados_feitosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resultados_por_disciplina"]>



  export type resultados_por_disciplinaSelectScalar = {
    id_resultado_disciplina?: boolean
    id_simulado_feito?: boolean
    disciplina?: boolean
    acertos_disciplina?: boolean
    questoes_feitas_disciplina?: boolean
  }

  export type resultados_por_disciplinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_resultado_disciplina" | "id_simulado_feito" | "disciplina" | "acertos_disciplina" | "questoes_feitas_disciplina", ExtArgs["result"]["resultados_por_disciplina"]>
  export type resultados_por_disciplinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    simulados_feitos?: boolean | simulados_feitosDefaultArgs<ExtArgs>
  }

  export type $resultados_por_disciplinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "resultados_por_disciplina"
    objects: {
      simulados_feitos: Prisma.$simulados_feitosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_resultado_disciplina: number
      id_simulado_feito: number
      disciplina: string
      acertos_disciplina: number
      questoes_feitas_disciplina: number
    }, ExtArgs["result"]["resultados_por_disciplina"]>
    composites: {}
  }

  type resultados_por_disciplinaGetPayload<S extends boolean | null | undefined | resultados_por_disciplinaDefaultArgs> = $Result.GetResult<Prisma.$resultados_por_disciplinaPayload, S>

  type resultados_por_disciplinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<resultados_por_disciplinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Resultados_por_disciplinaCountAggregateInputType | true
    }

  export interface resultados_por_disciplinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['resultados_por_disciplina'], meta: { name: 'resultados_por_disciplina' } }
    /**
     * Find zero or one Resultados_por_disciplina that matches the filter.
     * @param {resultados_por_disciplinaFindUniqueArgs} args - Arguments to find a Resultados_por_disciplina
     * @example
     * // Get one Resultados_por_disciplina
     * const resultados_por_disciplina = await prisma.resultados_por_disciplina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends resultados_por_disciplinaFindUniqueArgs>(args: SelectSubset<T, resultados_por_disciplinaFindUniqueArgs<ExtArgs>>): Prisma__resultados_por_disciplinaClient<$Result.GetResult<Prisma.$resultados_por_disciplinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resultados_por_disciplina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {resultados_por_disciplinaFindUniqueOrThrowArgs} args - Arguments to find a Resultados_por_disciplina
     * @example
     * // Get one Resultados_por_disciplina
     * const resultados_por_disciplina = await prisma.resultados_por_disciplina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends resultados_por_disciplinaFindUniqueOrThrowArgs>(args: SelectSubset<T, resultados_por_disciplinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__resultados_por_disciplinaClient<$Result.GetResult<Prisma.$resultados_por_disciplinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultados_por_disciplina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultados_por_disciplinaFindFirstArgs} args - Arguments to find a Resultados_por_disciplina
     * @example
     * // Get one Resultados_por_disciplina
     * const resultados_por_disciplina = await prisma.resultados_por_disciplina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends resultados_por_disciplinaFindFirstArgs>(args?: SelectSubset<T, resultados_por_disciplinaFindFirstArgs<ExtArgs>>): Prisma__resultados_por_disciplinaClient<$Result.GetResult<Prisma.$resultados_por_disciplinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resultados_por_disciplina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultados_por_disciplinaFindFirstOrThrowArgs} args - Arguments to find a Resultados_por_disciplina
     * @example
     * // Get one Resultados_por_disciplina
     * const resultados_por_disciplina = await prisma.resultados_por_disciplina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends resultados_por_disciplinaFindFirstOrThrowArgs>(args?: SelectSubset<T, resultados_por_disciplinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__resultados_por_disciplinaClient<$Result.GetResult<Prisma.$resultados_por_disciplinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resultados_por_disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultados_por_disciplinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resultados_por_disciplinas
     * const resultados_por_disciplinas = await prisma.resultados_por_disciplina.findMany()
     * 
     * // Get first 10 Resultados_por_disciplinas
     * const resultados_por_disciplinas = await prisma.resultados_por_disciplina.findMany({ take: 10 })
     * 
     * // Only select the `id_resultado_disciplina`
     * const resultados_por_disciplinaWithId_resultado_disciplinaOnly = await prisma.resultados_por_disciplina.findMany({ select: { id_resultado_disciplina: true } })
     * 
     */
    findMany<T extends resultados_por_disciplinaFindManyArgs>(args?: SelectSubset<T, resultados_por_disciplinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resultados_por_disciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resultados_por_disciplina.
     * @param {resultados_por_disciplinaCreateArgs} args - Arguments to create a Resultados_por_disciplina.
     * @example
     * // Create one Resultados_por_disciplina
     * const Resultados_por_disciplina = await prisma.resultados_por_disciplina.create({
     *   data: {
     *     // ... data to create a Resultados_por_disciplina
     *   }
     * })
     * 
     */
    create<T extends resultados_por_disciplinaCreateArgs>(args: SelectSubset<T, resultados_por_disciplinaCreateArgs<ExtArgs>>): Prisma__resultados_por_disciplinaClient<$Result.GetResult<Prisma.$resultados_por_disciplinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resultados_por_disciplinas.
     * @param {resultados_por_disciplinaCreateManyArgs} args - Arguments to create many Resultados_por_disciplinas.
     * @example
     * // Create many Resultados_por_disciplinas
     * const resultados_por_disciplina = await prisma.resultados_por_disciplina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends resultados_por_disciplinaCreateManyArgs>(args?: SelectSubset<T, resultados_por_disciplinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resultados_por_disciplina.
     * @param {resultados_por_disciplinaDeleteArgs} args - Arguments to delete one Resultados_por_disciplina.
     * @example
     * // Delete one Resultados_por_disciplina
     * const Resultados_por_disciplina = await prisma.resultados_por_disciplina.delete({
     *   where: {
     *     // ... filter to delete one Resultados_por_disciplina
     *   }
     * })
     * 
     */
    delete<T extends resultados_por_disciplinaDeleteArgs>(args: SelectSubset<T, resultados_por_disciplinaDeleteArgs<ExtArgs>>): Prisma__resultados_por_disciplinaClient<$Result.GetResult<Prisma.$resultados_por_disciplinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resultados_por_disciplina.
     * @param {resultados_por_disciplinaUpdateArgs} args - Arguments to update one Resultados_por_disciplina.
     * @example
     * // Update one Resultados_por_disciplina
     * const resultados_por_disciplina = await prisma.resultados_por_disciplina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends resultados_por_disciplinaUpdateArgs>(args: SelectSubset<T, resultados_por_disciplinaUpdateArgs<ExtArgs>>): Prisma__resultados_por_disciplinaClient<$Result.GetResult<Prisma.$resultados_por_disciplinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resultados_por_disciplinas.
     * @param {resultados_por_disciplinaDeleteManyArgs} args - Arguments to filter Resultados_por_disciplinas to delete.
     * @example
     * // Delete a few Resultados_por_disciplinas
     * const { count } = await prisma.resultados_por_disciplina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends resultados_por_disciplinaDeleteManyArgs>(args?: SelectSubset<T, resultados_por_disciplinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resultados_por_disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultados_por_disciplinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resultados_por_disciplinas
     * const resultados_por_disciplina = await prisma.resultados_por_disciplina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends resultados_por_disciplinaUpdateManyArgs>(args: SelectSubset<T, resultados_por_disciplinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resultados_por_disciplina.
     * @param {resultados_por_disciplinaUpsertArgs} args - Arguments to update or create a Resultados_por_disciplina.
     * @example
     * // Update or create a Resultados_por_disciplina
     * const resultados_por_disciplina = await prisma.resultados_por_disciplina.upsert({
     *   create: {
     *     // ... data to create a Resultados_por_disciplina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resultados_por_disciplina we want to update
     *   }
     * })
     */
    upsert<T extends resultados_por_disciplinaUpsertArgs>(args: SelectSubset<T, resultados_por_disciplinaUpsertArgs<ExtArgs>>): Prisma__resultados_por_disciplinaClient<$Result.GetResult<Prisma.$resultados_por_disciplinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resultados_por_disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultados_por_disciplinaCountArgs} args - Arguments to filter Resultados_por_disciplinas to count.
     * @example
     * // Count the number of Resultados_por_disciplinas
     * const count = await prisma.resultados_por_disciplina.count({
     *   where: {
     *     // ... the filter for the Resultados_por_disciplinas we want to count
     *   }
     * })
    **/
    count<T extends resultados_por_disciplinaCountArgs>(
      args?: Subset<T, resultados_por_disciplinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Resultados_por_disciplinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resultados_por_disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Resultados_por_disciplinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Resultados_por_disciplinaAggregateArgs>(args: Subset<T, Resultados_por_disciplinaAggregateArgs>): Prisma.PrismaPromise<GetResultados_por_disciplinaAggregateType<T>>

    /**
     * Group by Resultados_por_disciplina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultados_por_disciplinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends resultados_por_disciplinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: resultados_por_disciplinaGroupByArgs['orderBy'] }
        : { orderBy?: resultados_por_disciplinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, resultados_por_disciplinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultados_por_disciplinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the resultados_por_disciplina model
   */
  readonly fields: resultados_por_disciplinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for resultados_por_disciplina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__resultados_por_disciplinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    simulados_feitos<T extends simulados_feitosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, simulados_feitosDefaultArgs<ExtArgs>>): Prisma__simulados_feitosClient<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the resultados_por_disciplina model
   */
  interface resultados_por_disciplinaFieldRefs {
    readonly id_resultado_disciplina: FieldRef<"resultados_por_disciplina", 'Int'>
    readonly id_simulado_feito: FieldRef<"resultados_por_disciplina", 'Int'>
    readonly disciplina: FieldRef<"resultados_por_disciplina", 'String'>
    readonly acertos_disciplina: FieldRef<"resultados_por_disciplina", 'Int'>
    readonly questoes_feitas_disciplina: FieldRef<"resultados_por_disciplina", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * resultados_por_disciplina findUnique
   */
  export type resultados_por_disciplinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which resultados_por_disciplina to fetch.
     */
    where: resultados_por_disciplinaWhereUniqueInput
  }

  /**
   * resultados_por_disciplina findUniqueOrThrow
   */
  export type resultados_por_disciplinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which resultados_por_disciplina to fetch.
     */
    where: resultados_por_disciplinaWhereUniqueInput
  }

  /**
   * resultados_por_disciplina findFirst
   */
  export type resultados_por_disciplinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which resultados_por_disciplina to fetch.
     */
    where?: resultados_por_disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resultados_por_disciplinas to fetch.
     */
    orderBy?: resultados_por_disciplinaOrderByWithRelationInput | resultados_por_disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resultados_por_disciplinas.
     */
    cursor?: resultados_por_disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resultados_por_disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resultados_por_disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resultados_por_disciplinas.
     */
    distinct?: Resultados_por_disciplinaScalarFieldEnum | Resultados_por_disciplinaScalarFieldEnum[]
  }

  /**
   * resultados_por_disciplina findFirstOrThrow
   */
  export type resultados_por_disciplinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which resultados_por_disciplina to fetch.
     */
    where?: resultados_por_disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resultados_por_disciplinas to fetch.
     */
    orderBy?: resultados_por_disciplinaOrderByWithRelationInput | resultados_por_disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resultados_por_disciplinas.
     */
    cursor?: resultados_por_disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resultados_por_disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resultados_por_disciplinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resultados_por_disciplinas.
     */
    distinct?: Resultados_por_disciplinaScalarFieldEnum | Resultados_por_disciplinaScalarFieldEnum[]
  }

  /**
   * resultados_por_disciplina findMany
   */
  export type resultados_por_disciplinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
    /**
     * Filter, which resultados_por_disciplinas to fetch.
     */
    where?: resultados_por_disciplinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resultados_por_disciplinas to fetch.
     */
    orderBy?: resultados_por_disciplinaOrderByWithRelationInput | resultados_por_disciplinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing resultados_por_disciplinas.
     */
    cursor?: resultados_por_disciplinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resultados_por_disciplinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resultados_por_disciplinas.
     */
    skip?: number
    distinct?: Resultados_por_disciplinaScalarFieldEnum | Resultados_por_disciplinaScalarFieldEnum[]
  }

  /**
   * resultados_por_disciplina create
   */
  export type resultados_por_disciplinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
    /**
     * The data needed to create a resultados_por_disciplina.
     */
    data: XOR<resultados_por_disciplinaCreateInput, resultados_por_disciplinaUncheckedCreateInput>
  }

  /**
   * resultados_por_disciplina createMany
   */
  export type resultados_por_disciplinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many resultados_por_disciplinas.
     */
    data: resultados_por_disciplinaCreateManyInput | resultados_por_disciplinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resultados_por_disciplina update
   */
  export type resultados_por_disciplinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
    /**
     * The data needed to update a resultados_por_disciplina.
     */
    data: XOR<resultados_por_disciplinaUpdateInput, resultados_por_disciplinaUncheckedUpdateInput>
    /**
     * Choose, which resultados_por_disciplina to update.
     */
    where: resultados_por_disciplinaWhereUniqueInput
  }

  /**
   * resultados_por_disciplina updateMany
   */
  export type resultados_por_disciplinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update resultados_por_disciplinas.
     */
    data: XOR<resultados_por_disciplinaUpdateManyMutationInput, resultados_por_disciplinaUncheckedUpdateManyInput>
    /**
     * Filter which resultados_por_disciplinas to update
     */
    where?: resultados_por_disciplinaWhereInput
    /**
     * Limit how many resultados_por_disciplinas to update.
     */
    limit?: number
  }

  /**
   * resultados_por_disciplina upsert
   */
  export type resultados_por_disciplinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
    /**
     * The filter to search for the resultados_por_disciplina to update in case it exists.
     */
    where: resultados_por_disciplinaWhereUniqueInput
    /**
     * In case the resultados_por_disciplina found by the `where` argument doesn't exist, create a new resultados_por_disciplina with this data.
     */
    create: XOR<resultados_por_disciplinaCreateInput, resultados_por_disciplinaUncheckedCreateInput>
    /**
     * In case the resultados_por_disciplina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<resultados_por_disciplinaUpdateInput, resultados_por_disciplinaUncheckedUpdateInput>
  }

  /**
   * resultados_por_disciplina delete
   */
  export type resultados_por_disciplinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
    /**
     * Filter which resultados_por_disciplina to delete.
     */
    where: resultados_por_disciplinaWhereUniqueInput
  }

  /**
   * resultados_por_disciplina deleteMany
   */
  export type resultados_por_disciplinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resultados_por_disciplinas to delete
     */
    where?: resultados_por_disciplinaWhereInput
    /**
     * Limit how many resultados_por_disciplinas to delete.
     */
    limit?: number
  }

  /**
   * resultados_por_disciplina without action
   */
  export type resultados_por_disciplinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
  }


  /**
   * Model simulados_feitos
   */

  export type AggregateSimulados_feitos = {
    _count: Simulados_feitosCountAggregateOutputType | null
    _avg: Simulados_feitosAvgAggregateOutputType | null
    _sum: Simulados_feitosSumAggregateOutputType | null
    _min: Simulados_feitosMinAggregateOutputType | null
    _max: Simulados_feitosMaxAggregateOutputType | null
  }

  export type Simulados_feitosAvgAggregateOutputType = {
    id_simulados_feitos: number | null
    acertos_totais: number | null
    questoes_feitas_totais: number | null
  }

  export type Simulados_feitosSumAggregateOutputType = {
    id_simulados_feitos: number | null
    acertos_totais: number | null
    questoes_feitas_totais: number | null
  }

  export type Simulados_feitosMinAggregateOutputType = {
    id_simulados_feitos: number | null
    id_usuario: string | null
    data_simulado: Date | null
    acertos_totais: number | null
    questoes_feitas_totais: number | null
    tempo_gasto: Date | null
  }

  export type Simulados_feitosMaxAggregateOutputType = {
    id_simulados_feitos: number | null
    id_usuario: string | null
    data_simulado: Date | null
    acertos_totais: number | null
    questoes_feitas_totais: number | null
    tempo_gasto: Date | null
  }

  export type Simulados_feitosCountAggregateOutputType = {
    id_simulados_feitos: number
    id_usuario: number
    data_simulado: number
    acertos_totais: number
    questoes_feitas_totais: number
    tempo_gasto: number
    _all: number
  }


  export type Simulados_feitosAvgAggregateInputType = {
    id_simulados_feitos?: true
    acertos_totais?: true
    questoes_feitas_totais?: true
  }

  export type Simulados_feitosSumAggregateInputType = {
    id_simulados_feitos?: true
    acertos_totais?: true
    questoes_feitas_totais?: true
  }

  export type Simulados_feitosMinAggregateInputType = {
    id_simulados_feitos?: true
    id_usuario?: true
    data_simulado?: true
    acertos_totais?: true
    questoes_feitas_totais?: true
    tempo_gasto?: true
  }

  export type Simulados_feitosMaxAggregateInputType = {
    id_simulados_feitos?: true
    id_usuario?: true
    data_simulado?: true
    acertos_totais?: true
    questoes_feitas_totais?: true
    tempo_gasto?: true
  }

  export type Simulados_feitosCountAggregateInputType = {
    id_simulados_feitos?: true
    id_usuario?: true
    data_simulado?: true
    acertos_totais?: true
    questoes_feitas_totais?: true
    tempo_gasto?: true
    _all?: true
  }

  export type Simulados_feitosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which simulados_feitos to aggregate.
     */
    where?: simulados_feitosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of simulados_feitos to fetch.
     */
    orderBy?: simulados_feitosOrderByWithRelationInput | simulados_feitosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: simulados_feitosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` simulados_feitos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` simulados_feitos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned simulados_feitos
    **/
    _count?: true | Simulados_feitosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Simulados_feitosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Simulados_feitosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Simulados_feitosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Simulados_feitosMaxAggregateInputType
  }

  export type GetSimulados_feitosAggregateType<T extends Simulados_feitosAggregateArgs> = {
        [P in keyof T & keyof AggregateSimulados_feitos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimulados_feitos[P]>
      : GetScalarType<T[P], AggregateSimulados_feitos[P]>
  }




  export type simulados_feitosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: simulados_feitosWhereInput
    orderBy?: simulados_feitosOrderByWithAggregationInput | simulados_feitosOrderByWithAggregationInput[]
    by: Simulados_feitosScalarFieldEnum[] | Simulados_feitosScalarFieldEnum
    having?: simulados_feitosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Simulados_feitosCountAggregateInputType | true
    _avg?: Simulados_feitosAvgAggregateInputType
    _sum?: Simulados_feitosSumAggregateInputType
    _min?: Simulados_feitosMinAggregateInputType
    _max?: Simulados_feitosMaxAggregateInputType
  }

  export type Simulados_feitosGroupByOutputType = {
    id_simulados_feitos: number
    id_usuario: string
    data_simulado: Date
    acertos_totais: number
    questoes_feitas_totais: number
    tempo_gasto: Date
    _count: Simulados_feitosCountAggregateOutputType | null
    _avg: Simulados_feitosAvgAggregateOutputType | null
    _sum: Simulados_feitosSumAggregateOutputType | null
    _min: Simulados_feitosMinAggregateOutputType | null
    _max: Simulados_feitosMaxAggregateOutputType | null
  }

  type GetSimulados_feitosGroupByPayload<T extends simulados_feitosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Simulados_feitosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Simulados_feitosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Simulados_feitosGroupByOutputType[P]>
            : GetScalarType<T[P], Simulados_feitosGroupByOutputType[P]>
        }
      >
    >


  export type simulados_feitosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_simulados_feitos?: boolean
    id_usuario?: boolean
    data_simulado?: boolean
    acertos_totais?: boolean
    questoes_feitas_totais?: boolean
    tempo_gasto?: boolean
    respostas_simulado?: boolean | simulados_feitos$respostas_simuladoArgs<ExtArgs>
    resultados_por_disciplina?: boolean | simulados_feitos$resultados_por_disciplinaArgs<ExtArgs>
    _count?: boolean | Simulados_feitosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simulados_feitos"]>



  export type simulados_feitosSelectScalar = {
    id_simulados_feitos?: boolean
    id_usuario?: boolean
    data_simulado?: boolean
    acertos_totais?: boolean
    questoes_feitas_totais?: boolean
    tempo_gasto?: boolean
  }

  export type simulados_feitosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_simulados_feitos" | "id_usuario" | "data_simulado" | "acertos_totais" | "questoes_feitas_totais" | "tempo_gasto", ExtArgs["result"]["simulados_feitos"]>
  export type simulados_feitosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    respostas_simulado?: boolean | simulados_feitos$respostas_simuladoArgs<ExtArgs>
    resultados_por_disciplina?: boolean | simulados_feitos$resultados_por_disciplinaArgs<ExtArgs>
    _count?: boolean | Simulados_feitosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $simulados_feitosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "simulados_feitos"
    objects: {
      respostas_simulado: Prisma.$respostas_simuladoPayload<ExtArgs>[]
      resultados_por_disciplina: Prisma.$resultados_por_disciplinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_simulados_feitos: number
      id_usuario: string
      data_simulado: Date
      acertos_totais: number
      questoes_feitas_totais: number
      tempo_gasto: Date
    }, ExtArgs["result"]["simulados_feitos"]>
    composites: {}
  }

  type simulados_feitosGetPayload<S extends boolean | null | undefined | simulados_feitosDefaultArgs> = $Result.GetResult<Prisma.$simulados_feitosPayload, S>

  type simulados_feitosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<simulados_feitosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Simulados_feitosCountAggregateInputType | true
    }

  export interface simulados_feitosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['simulados_feitos'], meta: { name: 'simulados_feitos' } }
    /**
     * Find zero or one Simulados_feitos that matches the filter.
     * @param {simulados_feitosFindUniqueArgs} args - Arguments to find a Simulados_feitos
     * @example
     * // Get one Simulados_feitos
     * const simulados_feitos = await prisma.simulados_feitos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends simulados_feitosFindUniqueArgs>(args: SelectSubset<T, simulados_feitosFindUniqueArgs<ExtArgs>>): Prisma__simulados_feitosClient<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Simulados_feitos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {simulados_feitosFindUniqueOrThrowArgs} args - Arguments to find a Simulados_feitos
     * @example
     * // Get one Simulados_feitos
     * const simulados_feitos = await prisma.simulados_feitos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends simulados_feitosFindUniqueOrThrowArgs>(args: SelectSubset<T, simulados_feitosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__simulados_feitosClient<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simulados_feitos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {simulados_feitosFindFirstArgs} args - Arguments to find a Simulados_feitos
     * @example
     * // Get one Simulados_feitos
     * const simulados_feitos = await prisma.simulados_feitos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends simulados_feitosFindFirstArgs>(args?: SelectSubset<T, simulados_feitosFindFirstArgs<ExtArgs>>): Prisma__simulados_feitosClient<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Simulados_feitos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {simulados_feitosFindFirstOrThrowArgs} args - Arguments to find a Simulados_feitos
     * @example
     * // Get one Simulados_feitos
     * const simulados_feitos = await prisma.simulados_feitos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends simulados_feitosFindFirstOrThrowArgs>(args?: SelectSubset<T, simulados_feitosFindFirstOrThrowArgs<ExtArgs>>): Prisma__simulados_feitosClient<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Simulados_feitos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {simulados_feitosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Simulados_feitos
     * const simulados_feitos = await prisma.simulados_feitos.findMany()
     * 
     * // Get first 10 Simulados_feitos
     * const simulados_feitos = await prisma.simulados_feitos.findMany({ take: 10 })
     * 
     * // Only select the `id_simulados_feitos`
     * const simulados_feitosWithId_simulados_feitosOnly = await prisma.simulados_feitos.findMany({ select: { id_simulados_feitos: true } })
     * 
     */
    findMany<T extends simulados_feitosFindManyArgs>(args?: SelectSubset<T, simulados_feitosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Simulados_feitos.
     * @param {simulados_feitosCreateArgs} args - Arguments to create a Simulados_feitos.
     * @example
     * // Create one Simulados_feitos
     * const Simulados_feitos = await prisma.simulados_feitos.create({
     *   data: {
     *     // ... data to create a Simulados_feitos
     *   }
     * })
     * 
     */
    create<T extends simulados_feitosCreateArgs>(args: SelectSubset<T, simulados_feitosCreateArgs<ExtArgs>>): Prisma__simulados_feitosClient<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Simulados_feitos.
     * @param {simulados_feitosCreateManyArgs} args - Arguments to create many Simulados_feitos.
     * @example
     * // Create many Simulados_feitos
     * const simulados_feitos = await prisma.simulados_feitos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends simulados_feitosCreateManyArgs>(args?: SelectSubset<T, simulados_feitosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Simulados_feitos.
     * @param {simulados_feitosDeleteArgs} args - Arguments to delete one Simulados_feitos.
     * @example
     * // Delete one Simulados_feitos
     * const Simulados_feitos = await prisma.simulados_feitos.delete({
     *   where: {
     *     // ... filter to delete one Simulados_feitos
     *   }
     * })
     * 
     */
    delete<T extends simulados_feitosDeleteArgs>(args: SelectSubset<T, simulados_feitosDeleteArgs<ExtArgs>>): Prisma__simulados_feitosClient<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Simulados_feitos.
     * @param {simulados_feitosUpdateArgs} args - Arguments to update one Simulados_feitos.
     * @example
     * // Update one Simulados_feitos
     * const simulados_feitos = await prisma.simulados_feitos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends simulados_feitosUpdateArgs>(args: SelectSubset<T, simulados_feitosUpdateArgs<ExtArgs>>): Prisma__simulados_feitosClient<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Simulados_feitos.
     * @param {simulados_feitosDeleteManyArgs} args - Arguments to filter Simulados_feitos to delete.
     * @example
     * // Delete a few Simulados_feitos
     * const { count } = await prisma.simulados_feitos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends simulados_feitosDeleteManyArgs>(args?: SelectSubset<T, simulados_feitosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Simulados_feitos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {simulados_feitosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Simulados_feitos
     * const simulados_feitos = await prisma.simulados_feitos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends simulados_feitosUpdateManyArgs>(args: SelectSubset<T, simulados_feitosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Simulados_feitos.
     * @param {simulados_feitosUpsertArgs} args - Arguments to update or create a Simulados_feitos.
     * @example
     * // Update or create a Simulados_feitos
     * const simulados_feitos = await prisma.simulados_feitos.upsert({
     *   create: {
     *     // ... data to create a Simulados_feitos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Simulados_feitos we want to update
     *   }
     * })
     */
    upsert<T extends simulados_feitosUpsertArgs>(args: SelectSubset<T, simulados_feitosUpsertArgs<ExtArgs>>): Prisma__simulados_feitosClient<$Result.GetResult<Prisma.$simulados_feitosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Simulados_feitos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {simulados_feitosCountArgs} args - Arguments to filter Simulados_feitos to count.
     * @example
     * // Count the number of Simulados_feitos
     * const count = await prisma.simulados_feitos.count({
     *   where: {
     *     // ... the filter for the Simulados_feitos we want to count
     *   }
     * })
    **/
    count<T extends simulados_feitosCountArgs>(
      args?: Subset<T, simulados_feitosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Simulados_feitosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Simulados_feitos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Simulados_feitosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Simulados_feitosAggregateArgs>(args: Subset<T, Simulados_feitosAggregateArgs>): Prisma.PrismaPromise<GetSimulados_feitosAggregateType<T>>

    /**
     * Group by Simulados_feitos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {simulados_feitosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends simulados_feitosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: simulados_feitosGroupByArgs['orderBy'] }
        : { orderBy?: simulados_feitosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, simulados_feitosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimulados_feitosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the simulados_feitos model
   */
  readonly fields: simulados_feitosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for simulados_feitos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__simulados_feitosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    respostas_simulado<T extends simulados_feitos$respostas_simuladoArgs<ExtArgs> = {}>(args?: Subset<T, simulados_feitos$respostas_simuladoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$respostas_simuladoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultados_por_disciplina<T extends simulados_feitos$resultados_por_disciplinaArgs<ExtArgs> = {}>(args?: Subset<T, simulados_feitos$resultados_por_disciplinaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resultados_por_disciplinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the simulados_feitos model
   */
  interface simulados_feitosFieldRefs {
    readonly id_simulados_feitos: FieldRef<"simulados_feitos", 'Int'>
    readonly id_usuario: FieldRef<"simulados_feitos", 'String'>
    readonly data_simulado: FieldRef<"simulados_feitos", 'DateTime'>
    readonly acertos_totais: FieldRef<"simulados_feitos", 'Int'>
    readonly questoes_feitas_totais: FieldRef<"simulados_feitos", 'Int'>
    readonly tempo_gasto: FieldRef<"simulados_feitos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * simulados_feitos findUnique
   */
  export type simulados_feitosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the simulados_feitos
     */
    select?: simulados_feitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the simulados_feitos
     */
    omit?: simulados_feitosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: simulados_feitosInclude<ExtArgs> | null
    /**
     * Filter, which simulados_feitos to fetch.
     */
    where: simulados_feitosWhereUniqueInput
  }

  /**
   * simulados_feitos findUniqueOrThrow
   */
  export type simulados_feitosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the simulados_feitos
     */
    select?: simulados_feitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the simulados_feitos
     */
    omit?: simulados_feitosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: simulados_feitosInclude<ExtArgs> | null
    /**
     * Filter, which simulados_feitos to fetch.
     */
    where: simulados_feitosWhereUniqueInput
  }

  /**
   * simulados_feitos findFirst
   */
  export type simulados_feitosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the simulados_feitos
     */
    select?: simulados_feitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the simulados_feitos
     */
    omit?: simulados_feitosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: simulados_feitosInclude<ExtArgs> | null
    /**
     * Filter, which simulados_feitos to fetch.
     */
    where?: simulados_feitosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of simulados_feitos to fetch.
     */
    orderBy?: simulados_feitosOrderByWithRelationInput | simulados_feitosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for simulados_feitos.
     */
    cursor?: simulados_feitosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` simulados_feitos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` simulados_feitos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of simulados_feitos.
     */
    distinct?: Simulados_feitosScalarFieldEnum | Simulados_feitosScalarFieldEnum[]
  }

  /**
   * simulados_feitos findFirstOrThrow
   */
  export type simulados_feitosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the simulados_feitos
     */
    select?: simulados_feitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the simulados_feitos
     */
    omit?: simulados_feitosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: simulados_feitosInclude<ExtArgs> | null
    /**
     * Filter, which simulados_feitos to fetch.
     */
    where?: simulados_feitosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of simulados_feitos to fetch.
     */
    orderBy?: simulados_feitosOrderByWithRelationInput | simulados_feitosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for simulados_feitos.
     */
    cursor?: simulados_feitosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` simulados_feitos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` simulados_feitos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of simulados_feitos.
     */
    distinct?: Simulados_feitosScalarFieldEnum | Simulados_feitosScalarFieldEnum[]
  }

  /**
   * simulados_feitos findMany
   */
  export type simulados_feitosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the simulados_feitos
     */
    select?: simulados_feitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the simulados_feitos
     */
    omit?: simulados_feitosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: simulados_feitosInclude<ExtArgs> | null
    /**
     * Filter, which simulados_feitos to fetch.
     */
    where?: simulados_feitosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of simulados_feitos to fetch.
     */
    orderBy?: simulados_feitosOrderByWithRelationInput | simulados_feitosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing simulados_feitos.
     */
    cursor?: simulados_feitosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` simulados_feitos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` simulados_feitos.
     */
    skip?: number
    distinct?: Simulados_feitosScalarFieldEnum | Simulados_feitosScalarFieldEnum[]
  }

  /**
   * simulados_feitos create
   */
  export type simulados_feitosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the simulados_feitos
     */
    select?: simulados_feitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the simulados_feitos
     */
    omit?: simulados_feitosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: simulados_feitosInclude<ExtArgs> | null
    /**
     * The data needed to create a simulados_feitos.
     */
    data: XOR<simulados_feitosCreateInput, simulados_feitosUncheckedCreateInput>
  }

  /**
   * simulados_feitos createMany
   */
  export type simulados_feitosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many simulados_feitos.
     */
    data: simulados_feitosCreateManyInput | simulados_feitosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * simulados_feitos update
   */
  export type simulados_feitosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the simulados_feitos
     */
    select?: simulados_feitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the simulados_feitos
     */
    omit?: simulados_feitosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: simulados_feitosInclude<ExtArgs> | null
    /**
     * The data needed to update a simulados_feitos.
     */
    data: XOR<simulados_feitosUpdateInput, simulados_feitosUncheckedUpdateInput>
    /**
     * Choose, which simulados_feitos to update.
     */
    where: simulados_feitosWhereUniqueInput
  }

  /**
   * simulados_feitos updateMany
   */
  export type simulados_feitosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update simulados_feitos.
     */
    data: XOR<simulados_feitosUpdateManyMutationInput, simulados_feitosUncheckedUpdateManyInput>
    /**
     * Filter which simulados_feitos to update
     */
    where?: simulados_feitosWhereInput
    /**
     * Limit how many simulados_feitos to update.
     */
    limit?: number
  }

  /**
   * simulados_feitos upsert
   */
  export type simulados_feitosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the simulados_feitos
     */
    select?: simulados_feitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the simulados_feitos
     */
    omit?: simulados_feitosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: simulados_feitosInclude<ExtArgs> | null
    /**
     * The filter to search for the simulados_feitos to update in case it exists.
     */
    where: simulados_feitosWhereUniqueInput
    /**
     * In case the simulados_feitos found by the `where` argument doesn't exist, create a new simulados_feitos with this data.
     */
    create: XOR<simulados_feitosCreateInput, simulados_feitosUncheckedCreateInput>
    /**
     * In case the simulados_feitos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<simulados_feitosUpdateInput, simulados_feitosUncheckedUpdateInput>
  }

  /**
   * simulados_feitos delete
   */
  export type simulados_feitosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the simulados_feitos
     */
    select?: simulados_feitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the simulados_feitos
     */
    omit?: simulados_feitosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: simulados_feitosInclude<ExtArgs> | null
    /**
     * Filter which simulados_feitos to delete.
     */
    where: simulados_feitosWhereUniqueInput
  }

  /**
   * simulados_feitos deleteMany
   */
  export type simulados_feitosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which simulados_feitos to delete
     */
    where?: simulados_feitosWhereInput
    /**
     * Limit how many simulados_feitos to delete.
     */
    limit?: number
  }

  /**
   * simulados_feitos.respostas_simulado
   */
  export type simulados_feitos$respostas_simuladoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the respostas_simulado
     */
    select?: respostas_simuladoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the respostas_simulado
     */
    omit?: respostas_simuladoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: respostas_simuladoInclude<ExtArgs> | null
    where?: respostas_simuladoWhereInput
    orderBy?: respostas_simuladoOrderByWithRelationInput | respostas_simuladoOrderByWithRelationInput[]
    cursor?: respostas_simuladoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Respostas_simuladoScalarFieldEnum | Respostas_simuladoScalarFieldEnum[]
  }

  /**
   * simulados_feitos.resultados_por_disciplina
   */
  export type simulados_feitos$resultados_por_disciplinaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resultados_por_disciplina
     */
    select?: resultados_por_disciplinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resultados_por_disciplina
     */
    omit?: resultados_por_disciplinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resultados_por_disciplinaInclude<ExtArgs> | null
    where?: resultados_por_disciplinaWhereInput
    orderBy?: resultados_por_disciplinaOrderByWithRelationInput | resultados_por_disciplinaOrderByWithRelationInput[]
    cursor?: resultados_por_disciplinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Resultados_por_disciplinaScalarFieldEnum | Resultados_por_disciplinaScalarFieldEnum[]
  }

  /**
   * simulados_feitos without action
   */
  export type simulados_feitosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the simulados_feitos
     */
    select?: simulados_feitosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the simulados_feitos
     */
    omit?: simulados_feitosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: simulados_feitosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const QuestoesScalarFieldEnum: {
    id_questoes: 'id_questoes',
    texto: 'texto',
    alternativas: 'alternativas',
    gabarito: 'gabarito',
    disciplina: 'disciplina'
  };

  export type QuestoesScalarFieldEnum = (typeof QuestoesScalarFieldEnum)[keyof typeof QuestoesScalarFieldEnum]


  export const Respostas_simuladoScalarFieldEnum: {
    id_resposta: 'id_resposta',
    id_simulado_feito: 'id_simulado_feito',
    id_questao: 'id_questao',
    acertou: 'acertou'
  };

  export type Respostas_simuladoScalarFieldEnum = (typeof Respostas_simuladoScalarFieldEnum)[keyof typeof Respostas_simuladoScalarFieldEnum]


  export const Resultados_por_disciplinaScalarFieldEnum: {
    id_resultado_disciplina: 'id_resultado_disciplina',
    id_simulado_feito: 'id_simulado_feito',
    disciplina: 'disciplina',
    acertos_disciplina: 'acertos_disciplina',
    questoes_feitas_disciplina: 'questoes_feitas_disciplina'
  };

  export type Resultados_por_disciplinaScalarFieldEnum = (typeof Resultados_por_disciplinaScalarFieldEnum)[keyof typeof Resultados_por_disciplinaScalarFieldEnum]


  export const Simulados_feitosScalarFieldEnum: {
    id_simulados_feitos: 'id_simulados_feitos',
    id_usuario: 'id_usuario',
    data_simulado: 'data_simulado',
    acertos_totais: 'acertos_totais',
    questoes_feitas_totais: 'questoes_feitas_totais',
    tempo_gasto: 'tempo_gasto'
  };

  export type Simulados_feitosScalarFieldEnum = (typeof Simulados_feitosScalarFieldEnum)[keyof typeof Simulados_feitosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const questoesOrderByRelevanceFieldEnum: {
    texto: 'texto',
    alternativas: 'alternativas',
    gabarito: 'gabarito',
    disciplina: 'disciplina'
  };

  export type questoesOrderByRelevanceFieldEnum = (typeof questoesOrderByRelevanceFieldEnum)[keyof typeof questoesOrderByRelevanceFieldEnum]


  export const resultados_por_disciplinaOrderByRelevanceFieldEnum: {
    disciplina: 'disciplina'
  };

  export type resultados_por_disciplinaOrderByRelevanceFieldEnum = (typeof resultados_por_disciplinaOrderByRelevanceFieldEnum)[keyof typeof resultados_por_disciplinaOrderByRelevanceFieldEnum]


  export const simulados_feitosOrderByRelevanceFieldEnum: {
    id_usuario: 'id_usuario'
  };

  export type simulados_feitosOrderByRelevanceFieldEnum = (typeof simulados_feitosOrderByRelevanceFieldEnum)[keyof typeof simulados_feitosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type questoesWhereInput = {
    AND?: questoesWhereInput | questoesWhereInput[]
    OR?: questoesWhereInput[]
    NOT?: questoesWhereInput | questoesWhereInput[]
    id_questoes?: IntFilter<"questoes"> | number
    texto?: StringFilter<"questoes"> | string
    alternativas?: StringFilter<"questoes"> | string
    gabarito?: StringFilter<"questoes"> | string
    disciplina?: StringNullableFilter<"questoes"> | string | null
    respostas_simulado?: Respostas_simuladoListRelationFilter
  }

  export type questoesOrderByWithRelationInput = {
    id_questoes?: SortOrder
    texto?: SortOrder
    alternativas?: SortOrder
    gabarito?: SortOrder
    disciplina?: SortOrderInput | SortOrder
    respostas_simulado?: respostas_simuladoOrderByRelationAggregateInput
    _relevance?: questoesOrderByRelevanceInput
  }

  export type questoesWhereUniqueInput = Prisma.AtLeast<{
    id_questoes?: number
    AND?: questoesWhereInput | questoesWhereInput[]
    OR?: questoesWhereInput[]
    NOT?: questoesWhereInput | questoesWhereInput[]
    texto?: StringFilter<"questoes"> | string
    alternativas?: StringFilter<"questoes"> | string
    gabarito?: StringFilter<"questoes"> | string
    disciplina?: StringNullableFilter<"questoes"> | string | null
    respostas_simulado?: Respostas_simuladoListRelationFilter
  }, "id_questoes">

  export type questoesOrderByWithAggregationInput = {
    id_questoes?: SortOrder
    texto?: SortOrder
    alternativas?: SortOrder
    gabarito?: SortOrder
    disciplina?: SortOrderInput | SortOrder
    _count?: questoesCountOrderByAggregateInput
    _avg?: questoesAvgOrderByAggregateInput
    _max?: questoesMaxOrderByAggregateInput
    _min?: questoesMinOrderByAggregateInput
    _sum?: questoesSumOrderByAggregateInput
  }

  export type questoesScalarWhereWithAggregatesInput = {
    AND?: questoesScalarWhereWithAggregatesInput | questoesScalarWhereWithAggregatesInput[]
    OR?: questoesScalarWhereWithAggregatesInput[]
    NOT?: questoesScalarWhereWithAggregatesInput | questoesScalarWhereWithAggregatesInput[]
    id_questoes?: IntWithAggregatesFilter<"questoes"> | number
    texto?: StringWithAggregatesFilter<"questoes"> | string
    alternativas?: StringWithAggregatesFilter<"questoes"> | string
    gabarito?: StringWithAggregatesFilter<"questoes"> | string
    disciplina?: StringNullableWithAggregatesFilter<"questoes"> | string | null
  }

  export type respostas_simuladoWhereInput = {
    AND?: respostas_simuladoWhereInput | respostas_simuladoWhereInput[]
    OR?: respostas_simuladoWhereInput[]
    NOT?: respostas_simuladoWhereInput | respostas_simuladoWhereInput[]
    id_resposta?: IntFilter<"respostas_simulado"> | number
    id_simulado_feito?: IntFilter<"respostas_simulado"> | number
    id_questao?: IntFilter<"respostas_simulado"> | number
    acertou?: BoolFilter<"respostas_simulado"> | boolean
    questoes?: XOR<QuestoesScalarRelationFilter, questoesWhereInput>
    simulados_feitos?: XOR<Simulados_feitosScalarRelationFilter, simulados_feitosWhereInput>
  }

  export type respostas_simuladoOrderByWithRelationInput = {
    id_resposta?: SortOrder
    id_simulado_feito?: SortOrder
    id_questao?: SortOrder
    acertou?: SortOrder
    questoes?: questoesOrderByWithRelationInput
    simulados_feitos?: simulados_feitosOrderByWithRelationInput
  }

  export type respostas_simuladoWhereUniqueInput = Prisma.AtLeast<{
    id_resposta?: number
    AND?: respostas_simuladoWhereInput | respostas_simuladoWhereInput[]
    OR?: respostas_simuladoWhereInput[]
    NOT?: respostas_simuladoWhereInput | respostas_simuladoWhereInput[]
    id_simulado_feito?: IntFilter<"respostas_simulado"> | number
    id_questao?: IntFilter<"respostas_simulado"> | number
    acertou?: BoolFilter<"respostas_simulado"> | boolean
    questoes?: XOR<QuestoesScalarRelationFilter, questoesWhereInput>
    simulados_feitos?: XOR<Simulados_feitosScalarRelationFilter, simulados_feitosWhereInput>
  }, "id_resposta">

  export type respostas_simuladoOrderByWithAggregationInput = {
    id_resposta?: SortOrder
    id_simulado_feito?: SortOrder
    id_questao?: SortOrder
    acertou?: SortOrder
    _count?: respostas_simuladoCountOrderByAggregateInput
    _avg?: respostas_simuladoAvgOrderByAggregateInput
    _max?: respostas_simuladoMaxOrderByAggregateInput
    _min?: respostas_simuladoMinOrderByAggregateInput
    _sum?: respostas_simuladoSumOrderByAggregateInput
  }

  export type respostas_simuladoScalarWhereWithAggregatesInput = {
    AND?: respostas_simuladoScalarWhereWithAggregatesInput | respostas_simuladoScalarWhereWithAggregatesInput[]
    OR?: respostas_simuladoScalarWhereWithAggregatesInput[]
    NOT?: respostas_simuladoScalarWhereWithAggregatesInput | respostas_simuladoScalarWhereWithAggregatesInput[]
    id_resposta?: IntWithAggregatesFilter<"respostas_simulado"> | number
    id_simulado_feito?: IntWithAggregatesFilter<"respostas_simulado"> | number
    id_questao?: IntWithAggregatesFilter<"respostas_simulado"> | number
    acertou?: BoolWithAggregatesFilter<"respostas_simulado"> | boolean
  }

  export type resultados_por_disciplinaWhereInput = {
    AND?: resultados_por_disciplinaWhereInput | resultados_por_disciplinaWhereInput[]
    OR?: resultados_por_disciplinaWhereInput[]
    NOT?: resultados_por_disciplinaWhereInput | resultados_por_disciplinaWhereInput[]
    id_resultado_disciplina?: IntFilter<"resultados_por_disciplina"> | number
    id_simulado_feito?: IntFilter<"resultados_por_disciplina"> | number
    disciplina?: StringFilter<"resultados_por_disciplina"> | string
    acertos_disciplina?: IntFilter<"resultados_por_disciplina"> | number
    questoes_feitas_disciplina?: IntFilter<"resultados_por_disciplina"> | number
    simulados_feitos?: XOR<Simulados_feitosScalarRelationFilter, simulados_feitosWhereInput>
  }

  export type resultados_por_disciplinaOrderByWithRelationInput = {
    id_resultado_disciplina?: SortOrder
    id_simulado_feito?: SortOrder
    disciplina?: SortOrder
    acertos_disciplina?: SortOrder
    questoes_feitas_disciplina?: SortOrder
    simulados_feitos?: simulados_feitosOrderByWithRelationInput
    _relevance?: resultados_por_disciplinaOrderByRelevanceInput
  }

  export type resultados_por_disciplinaWhereUniqueInput = Prisma.AtLeast<{
    id_resultado_disciplina?: number
    AND?: resultados_por_disciplinaWhereInput | resultados_por_disciplinaWhereInput[]
    OR?: resultados_por_disciplinaWhereInput[]
    NOT?: resultados_por_disciplinaWhereInput | resultados_por_disciplinaWhereInput[]
    id_simulado_feito?: IntFilter<"resultados_por_disciplina"> | number
    disciplina?: StringFilter<"resultados_por_disciplina"> | string
    acertos_disciplina?: IntFilter<"resultados_por_disciplina"> | number
    questoes_feitas_disciplina?: IntFilter<"resultados_por_disciplina"> | number
    simulados_feitos?: XOR<Simulados_feitosScalarRelationFilter, simulados_feitosWhereInput>
  }, "id_resultado_disciplina">

  export type resultados_por_disciplinaOrderByWithAggregationInput = {
    id_resultado_disciplina?: SortOrder
    id_simulado_feito?: SortOrder
    disciplina?: SortOrder
    acertos_disciplina?: SortOrder
    questoes_feitas_disciplina?: SortOrder
    _count?: resultados_por_disciplinaCountOrderByAggregateInput
    _avg?: resultados_por_disciplinaAvgOrderByAggregateInput
    _max?: resultados_por_disciplinaMaxOrderByAggregateInput
    _min?: resultados_por_disciplinaMinOrderByAggregateInput
    _sum?: resultados_por_disciplinaSumOrderByAggregateInput
  }

  export type resultados_por_disciplinaScalarWhereWithAggregatesInput = {
    AND?: resultados_por_disciplinaScalarWhereWithAggregatesInput | resultados_por_disciplinaScalarWhereWithAggregatesInput[]
    OR?: resultados_por_disciplinaScalarWhereWithAggregatesInput[]
    NOT?: resultados_por_disciplinaScalarWhereWithAggregatesInput | resultados_por_disciplinaScalarWhereWithAggregatesInput[]
    id_resultado_disciplina?: IntWithAggregatesFilter<"resultados_por_disciplina"> | number
    id_simulado_feito?: IntWithAggregatesFilter<"resultados_por_disciplina"> | number
    disciplina?: StringWithAggregatesFilter<"resultados_por_disciplina"> | string
    acertos_disciplina?: IntWithAggregatesFilter<"resultados_por_disciplina"> | number
    questoes_feitas_disciplina?: IntWithAggregatesFilter<"resultados_por_disciplina"> | number
  }

  export type simulados_feitosWhereInput = {
    AND?: simulados_feitosWhereInput | simulados_feitosWhereInput[]
    OR?: simulados_feitosWhereInput[]
    NOT?: simulados_feitosWhereInput | simulados_feitosWhereInput[]
    id_simulados_feitos?: IntFilter<"simulados_feitos"> | number
    id_usuario?: StringFilter<"simulados_feitos"> | string
    data_simulado?: DateTimeFilter<"simulados_feitos"> | Date | string
    acertos_totais?: IntFilter<"simulados_feitos"> | number
    questoes_feitas_totais?: IntFilter<"simulados_feitos"> | number
    tempo_gasto?: DateTimeFilter<"simulados_feitos"> | Date | string
    respostas_simulado?: Respostas_simuladoListRelationFilter
    resultados_por_disciplina?: Resultados_por_disciplinaListRelationFilter
  }

  export type simulados_feitosOrderByWithRelationInput = {
    id_simulados_feitos?: SortOrder
    id_usuario?: SortOrder
    data_simulado?: SortOrder
    acertos_totais?: SortOrder
    questoes_feitas_totais?: SortOrder
    tempo_gasto?: SortOrder
    respostas_simulado?: respostas_simuladoOrderByRelationAggregateInput
    resultados_por_disciplina?: resultados_por_disciplinaOrderByRelationAggregateInput
    _relevance?: simulados_feitosOrderByRelevanceInput
  }

  export type simulados_feitosWhereUniqueInput = Prisma.AtLeast<{
    id_simulados_feitos?: number
    AND?: simulados_feitosWhereInput | simulados_feitosWhereInput[]
    OR?: simulados_feitosWhereInput[]
    NOT?: simulados_feitosWhereInput | simulados_feitosWhereInput[]
    id_usuario?: StringFilter<"simulados_feitos"> | string
    data_simulado?: DateTimeFilter<"simulados_feitos"> | Date | string
    acertos_totais?: IntFilter<"simulados_feitos"> | number
    questoes_feitas_totais?: IntFilter<"simulados_feitos"> | number
    tempo_gasto?: DateTimeFilter<"simulados_feitos"> | Date | string
    respostas_simulado?: Respostas_simuladoListRelationFilter
    resultados_por_disciplina?: Resultados_por_disciplinaListRelationFilter
  }, "id_simulados_feitos">

  export type simulados_feitosOrderByWithAggregationInput = {
    id_simulados_feitos?: SortOrder
    id_usuario?: SortOrder
    data_simulado?: SortOrder
    acertos_totais?: SortOrder
    questoes_feitas_totais?: SortOrder
    tempo_gasto?: SortOrder
    _count?: simulados_feitosCountOrderByAggregateInput
    _avg?: simulados_feitosAvgOrderByAggregateInput
    _max?: simulados_feitosMaxOrderByAggregateInput
    _min?: simulados_feitosMinOrderByAggregateInput
    _sum?: simulados_feitosSumOrderByAggregateInput
  }

  export type simulados_feitosScalarWhereWithAggregatesInput = {
    AND?: simulados_feitosScalarWhereWithAggregatesInput | simulados_feitosScalarWhereWithAggregatesInput[]
    OR?: simulados_feitosScalarWhereWithAggregatesInput[]
    NOT?: simulados_feitosScalarWhereWithAggregatesInput | simulados_feitosScalarWhereWithAggregatesInput[]
    id_simulados_feitos?: IntWithAggregatesFilter<"simulados_feitos"> | number
    id_usuario?: StringWithAggregatesFilter<"simulados_feitos"> | string
    data_simulado?: DateTimeWithAggregatesFilter<"simulados_feitos"> | Date | string
    acertos_totais?: IntWithAggregatesFilter<"simulados_feitos"> | number
    questoes_feitas_totais?: IntWithAggregatesFilter<"simulados_feitos"> | number
    tempo_gasto?: DateTimeWithAggregatesFilter<"simulados_feitos"> | Date | string
  }

  export type questoesCreateInput = {
    texto: string
    alternativas: string
    gabarito: string
    disciplina?: string | null
    respostas_simulado?: respostas_simuladoCreateNestedManyWithoutQuestoesInput
  }

  export type questoesUncheckedCreateInput = {
    id_questoes?: number
    texto: string
    alternativas: string
    gabarito: string
    disciplina?: string | null
    respostas_simulado?: respostas_simuladoUncheckedCreateNestedManyWithoutQuestoesInput
  }

  export type questoesUpdateInput = {
    texto?: StringFieldUpdateOperationsInput | string
    alternativas?: StringFieldUpdateOperationsInput | string
    gabarito?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    respostas_simulado?: respostas_simuladoUpdateManyWithoutQuestoesNestedInput
  }

  export type questoesUncheckedUpdateInput = {
    id_questoes?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    alternativas?: StringFieldUpdateOperationsInput | string
    gabarito?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
    respostas_simulado?: respostas_simuladoUncheckedUpdateManyWithoutQuestoesNestedInput
  }

  export type questoesCreateManyInput = {
    id_questoes?: number
    texto: string
    alternativas: string
    gabarito: string
    disciplina?: string | null
  }

  export type questoesUpdateManyMutationInput = {
    texto?: StringFieldUpdateOperationsInput | string
    alternativas?: StringFieldUpdateOperationsInput | string
    gabarito?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type questoesUncheckedUpdateManyInput = {
    id_questoes?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    alternativas?: StringFieldUpdateOperationsInput | string
    gabarito?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type respostas_simuladoCreateInput = {
    acertou: boolean
    questoes: questoesCreateNestedOneWithoutRespostas_simuladoInput
    simulados_feitos: simulados_feitosCreateNestedOneWithoutRespostas_simuladoInput
  }

  export type respostas_simuladoUncheckedCreateInput = {
    id_resposta?: number
    id_simulado_feito: number
    id_questao: number
    acertou: boolean
  }

  export type respostas_simuladoUpdateInput = {
    acertou?: BoolFieldUpdateOperationsInput | boolean
    questoes?: questoesUpdateOneRequiredWithoutRespostas_simuladoNestedInput
    simulados_feitos?: simulados_feitosUpdateOneRequiredWithoutRespostas_simuladoNestedInput
  }

  export type respostas_simuladoUncheckedUpdateInput = {
    id_resposta?: IntFieldUpdateOperationsInput | number
    id_simulado_feito?: IntFieldUpdateOperationsInput | number
    id_questao?: IntFieldUpdateOperationsInput | number
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type respostas_simuladoCreateManyInput = {
    id_resposta?: number
    id_simulado_feito: number
    id_questao: number
    acertou: boolean
  }

  export type respostas_simuladoUpdateManyMutationInput = {
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type respostas_simuladoUncheckedUpdateManyInput = {
    id_resposta?: IntFieldUpdateOperationsInput | number
    id_simulado_feito?: IntFieldUpdateOperationsInput | number
    id_questao?: IntFieldUpdateOperationsInput | number
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type resultados_por_disciplinaCreateInput = {
    disciplina: string
    acertos_disciplina: number
    questoes_feitas_disciplina: number
    simulados_feitos: simulados_feitosCreateNestedOneWithoutResultados_por_disciplinaInput
  }

  export type resultados_por_disciplinaUncheckedCreateInput = {
    id_resultado_disciplina?: number
    id_simulado_feito: number
    disciplina: string
    acertos_disciplina: number
    questoes_feitas_disciplina: number
  }

  export type resultados_por_disciplinaUpdateInput = {
    disciplina?: StringFieldUpdateOperationsInput | string
    acertos_disciplina?: IntFieldUpdateOperationsInput | number
    questoes_feitas_disciplina?: IntFieldUpdateOperationsInput | number
    simulados_feitos?: simulados_feitosUpdateOneRequiredWithoutResultados_por_disciplinaNestedInput
  }

  export type resultados_por_disciplinaUncheckedUpdateInput = {
    id_resultado_disciplina?: IntFieldUpdateOperationsInput | number
    id_simulado_feito?: IntFieldUpdateOperationsInput | number
    disciplina?: StringFieldUpdateOperationsInput | string
    acertos_disciplina?: IntFieldUpdateOperationsInput | number
    questoes_feitas_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type resultados_por_disciplinaCreateManyInput = {
    id_resultado_disciplina?: number
    id_simulado_feito: number
    disciplina: string
    acertos_disciplina: number
    questoes_feitas_disciplina: number
  }

  export type resultados_por_disciplinaUpdateManyMutationInput = {
    disciplina?: StringFieldUpdateOperationsInput | string
    acertos_disciplina?: IntFieldUpdateOperationsInput | number
    questoes_feitas_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type resultados_por_disciplinaUncheckedUpdateManyInput = {
    id_resultado_disciplina?: IntFieldUpdateOperationsInput | number
    id_simulado_feito?: IntFieldUpdateOperationsInput | number
    disciplina?: StringFieldUpdateOperationsInput | string
    acertos_disciplina?: IntFieldUpdateOperationsInput | number
    questoes_feitas_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type simulados_feitosCreateInput = {
    id_usuario: string
    data_simulado: Date | string
    acertos_totais: number
    questoes_feitas_totais: number
    tempo_gasto: Date | string
    respostas_simulado?: respostas_simuladoCreateNestedManyWithoutSimulados_feitosInput
    resultados_por_disciplina?: resultados_por_disciplinaCreateNestedManyWithoutSimulados_feitosInput
  }

  export type simulados_feitosUncheckedCreateInput = {
    id_simulados_feitos?: number
    id_usuario: string
    data_simulado: Date | string
    acertos_totais: number
    questoes_feitas_totais: number
    tempo_gasto: Date | string
    respostas_simulado?: respostas_simuladoUncheckedCreateNestedManyWithoutSimulados_feitosInput
    resultados_por_disciplina?: resultados_por_disciplinaUncheckedCreateNestedManyWithoutSimulados_feitosInput
  }

  export type simulados_feitosUpdateInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    data_simulado?: DateTimeFieldUpdateOperationsInput | Date | string
    acertos_totais?: IntFieldUpdateOperationsInput | number
    questoes_feitas_totais?: IntFieldUpdateOperationsInput | number
    tempo_gasto?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas_simulado?: respostas_simuladoUpdateManyWithoutSimulados_feitosNestedInput
    resultados_por_disciplina?: resultados_por_disciplinaUpdateManyWithoutSimulados_feitosNestedInput
  }

  export type simulados_feitosUncheckedUpdateInput = {
    id_simulados_feitos?: IntFieldUpdateOperationsInput | number
    id_usuario?: StringFieldUpdateOperationsInput | string
    data_simulado?: DateTimeFieldUpdateOperationsInput | Date | string
    acertos_totais?: IntFieldUpdateOperationsInput | number
    questoes_feitas_totais?: IntFieldUpdateOperationsInput | number
    tempo_gasto?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas_simulado?: respostas_simuladoUncheckedUpdateManyWithoutSimulados_feitosNestedInput
    resultados_por_disciplina?: resultados_por_disciplinaUncheckedUpdateManyWithoutSimulados_feitosNestedInput
  }

  export type simulados_feitosCreateManyInput = {
    id_simulados_feitos?: number
    id_usuario: string
    data_simulado: Date | string
    acertos_totais: number
    questoes_feitas_totais: number
    tempo_gasto: Date | string
  }

  export type simulados_feitosUpdateManyMutationInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    data_simulado?: DateTimeFieldUpdateOperationsInput | Date | string
    acertos_totais?: IntFieldUpdateOperationsInput | number
    questoes_feitas_totais?: IntFieldUpdateOperationsInput | number
    tempo_gasto?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type simulados_feitosUncheckedUpdateManyInput = {
    id_simulados_feitos?: IntFieldUpdateOperationsInput | number
    id_usuario?: StringFieldUpdateOperationsInput | string
    data_simulado?: DateTimeFieldUpdateOperationsInput | Date | string
    acertos_totais?: IntFieldUpdateOperationsInput | number
    questoes_feitas_totais?: IntFieldUpdateOperationsInput | number
    tempo_gasto?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Respostas_simuladoListRelationFilter = {
    every?: respostas_simuladoWhereInput
    some?: respostas_simuladoWhereInput
    none?: respostas_simuladoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type respostas_simuladoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questoesOrderByRelevanceInput = {
    fields: questoesOrderByRelevanceFieldEnum | questoesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type questoesCountOrderByAggregateInput = {
    id_questoes?: SortOrder
    texto?: SortOrder
    alternativas?: SortOrder
    gabarito?: SortOrder
    disciplina?: SortOrder
  }

  export type questoesAvgOrderByAggregateInput = {
    id_questoes?: SortOrder
  }

  export type questoesMaxOrderByAggregateInput = {
    id_questoes?: SortOrder
    texto?: SortOrder
    alternativas?: SortOrder
    gabarito?: SortOrder
    disciplina?: SortOrder
  }

  export type questoesMinOrderByAggregateInput = {
    id_questoes?: SortOrder
    texto?: SortOrder
    alternativas?: SortOrder
    gabarito?: SortOrder
    disciplina?: SortOrder
  }

  export type questoesSumOrderByAggregateInput = {
    id_questoes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestoesScalarRelationFilter = {
    is?: questoesWhereInput
    isNot?: questoesWhereInput
  }

  export type Simulados_feitosScalarRelationFilter = {
    is?: simulados_feitosWhereInput
    isNot?: simulados_feitosWhereInput
  }

  export type respostas_simuladoCountOrderByAggregateInput = {
    id_resposta?: SortOrder
    id_simulado_feito?: SortOrder
    id_questao?: SortOrder
    acertou?: SortOrder
  }

  export type respostas_simuladoAvgOrderByAggregateInput = {
    id_resposta?: SortOrder
    id_simulado_feito?: SortOrder
    id_questao?: SortOrder
  }

  export type respostas_simuladoMaxOrderByAggregateInput = {
    id_resposta?: SortOrder
    id_simulado_feito?: SortOrder
    id_questao?: SortOrder
    acertou?: SortOrder
  }

  export type respostas_simuladoMinOrderByAggregateInput = {
    id_resposta?: SortOrder
    id_simulado_feito?: SortOrder
    id_questao?: SortOrder
    acertou?: SortOrder
  }

  export type respostas_simuladoSumOrderByAggregateInput = {
    id_resposta?: SortOrder
    id_simulado_feito?: SortOrder
    id_questao?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type resultados_por_disciplinaOrderByRelevanceInput = {
    fields: resultados_por_disciplinaOrderByRelevanceFieldEnum | resultados_por_disciplinaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type resultados_por_disciplinaCountOrderByAggregateInput = {
    id_resultado_disciplina?: SortOrder
    id_simulado_feito?: SortOrder
    disciplina?: SortOrder
    acertos_disciplina?: SortOrder
    questoes_feitas_disciplina?: SortOrder
  }

  export type resultados_por_disciplinaAvgOrderByAggregateInput = {
    id_resultado_disciplina?: SortOrder
    id_simulado_feito?: SortOrder
    acertos_disciplina?: SortOrder
    questoes_feitas_disciplina?: SortOrder
  }

  export type resultados_por_disciplinaMaxOrderByAggregateInput = {
    id_resultado_disciplina?: SortOrder
    id_simulado_feito?: SortOrder
    disciplina?: SortOrder
    acertos_disciplina?: SortOrder
    questoes_feitas_disciplina?: SortOrder
  }

  export type resultados_por_disciplinaMinOrderByAggregateInput = {
    id_resultado_disciplina?: SortOrder
    id_simulado_feito?: SortOrder
    disciplina?: SortOrder
    acertos_disciplina?: SortOrder
    questoes_feitas_disciplina?: SortOrder
  }

  export type resultados_por_disciplinaSumOrderByAggregateInput = {
    id_resultado_disciplina?: SortOrder
    id_simulado_feito?: SortOrder
    acertos_disciplina?: SortOrder
    questoes_feitas_disciplina?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Resultados_por_disciplinaListRelationFilter = {
    every?: resultados_por_disciplinaWhereInput
    some?: resultados_por_disciplinaWhereInput
    none?: resultados_por_disciplinaWhereInput
  }

  export type resultados_por_disciplinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type simulados_feitosOrderByRelevanceInput = {
    fields: simulados_feitosOrderByRelevanceFieldEnum | simulados_feitosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type simulados_feitosCountOrderByAggregateInput = {
    id_simulados_feitos?: SortOrder
    id_usuario?: SortOrder
    data_simulado?: SortOrder
    acertos_totais?: SortOrder
    questoes_feitas_totais?: SortOrder
    tempo_gasto?: SortOrder
  }

  export type simulados_feitosAvgOrderByAggregateInput = {
    id_simulados_feitos?: SortOrder
    acertos_totais?: SortOrder
    questoes_feitas_totais?: SortOrder
  }

  export type simulados_feitosMaxOrderByAggregateInput = {
    id_simulados_feitos?: SortOrder
    id_usuario?: SortOrder
    data_simulado?: SortOrder
    acertos_totais?: SortOrder
    questoes_feitas_totais?: SortOrder
    tempo_gasto?: SortOrder
  }

  export type simulados_feitosMinOrderByAggregateInput = {
    id_simulados_feitos?: SortOrder
    id_usuario?: SortOrder
    data_simulado?: SortOrder
    acertos_totais?: SortOrder
    questoes_feitas_totais?: SortOrder
    tempo_gasto?: SortOrder
  }

  export type simulados_feitosSumOrderByAggregateInput = {
    id_simulados_feitos?: SortOrder
    acertos_totais?: SortOrder
    questoes_feitas_totais?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type respostas_simuladoCreateNestedManyWithoutQuestoesInput = {
    create?: XOR<respostas_simuladoCreateWithoutQuestoesInput, respostas_simuladoUncheckedCreateWithoutQuestoesInput> | respostas_simuladoCreateWithoutQuestoesInput[] | respostas_simuladoUncheckedCreateWithoutQuestoesInput[]
    connectOrCreate?: respostas_simuladoCreateOrConnectWithoutQuestoesInput | respostas_simuladoCreateOrConnectWithoutQuestoesInput[]
    createMany?: respostas_simuladoCreateManyQuestoesInputEnvelope
    connect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
  }

  export type respostas_simuladoUncheckedCreateNestedManyWithoutQuestoesInput = {
    create?: XOR<respostas_simuladoCreateWithoutQuestoesInput, respostas_simuladoUncheckedCreateWithoutQuestoesInput> | respostas_simuladoCreateWithoutQuestoesInput[] | respostas_simuladoUncheckedCreateWithoutQuestoesInput[]
    connectOrCreate?: respostas_simuladoCreateOrConnectWithoutQuestoesInput | respostas_simuladoCreateOrConnectWithoutQuestoesInput[]
    createMany?: respostas_simuladoCreateManyQuestoesInputEnvelope
    connect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type respostas_simuladoUpdateManyWithoutQuestoesNestedInput = {
    create?: XOR<respostas_simuladoCreateWithoutQuestoesInput, respostas_simuladoUncheckedCreateWithoutQuestoesInput> | respostas_simuladoCreateWithoutQuestoesInput[] | respostas_simuladoUncheckedCreateWithoutQuestoesInput[]
    connectOrCreate?: respostas_simuladoCreateOrConnectWithoutQuestoesInput | respostas_simuladoCreateOrConnectWithoutQuestoesInput[]
    upsert?: respostas_simuladoUpsertWithWhereUniqueWithoutQuestoesInput | respostas_simuladoUpsertWithWhereUniqueWithoutQuestoesInput[]
    createMany?: respostas_simuladoCreateManyQuestoesInputEnvelope
    set?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    disconnect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    delete?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    connect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    update?: respostas_simuladoUpdateWithWhereUniqueWithoutQuestoesInput | respostas_simuladoUpdateWithWhereUniqueWithoutQuestoesInput[]
    updateMany?: respostas_simuladoUpdateManyWithWhereWithoutQuestoesInput | respostas_simuladoUpdateManyWithWhereWithoutQuestoesInput[]
    deleteMany?: respostas_simuladoScalarWhereInput | respostas_simuladoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type respostas_simuladoUncheckedUpdateManyWithoutQuestoesNestedInput = {
    create?: XOR<respostas_simuladoCreateWithoutQuestoesInput, respostas_simuladoUncheckedCreateWithoutQuestoesInput> | respostas_simuladoCreateWithoutQuestoesInput[] | respostas_simuladoUncheckedCreateWithoutQuestoesInput[]
    connectOrCreate?: respostas_simuladoCreateOrConnectWithoutQuestoesInput | respostas_simuladoCreateOrConnectWithoutQuestoesInput[]
    upsert?: respostas_simuladoUpsertWithWhereUniqueWithoutQuestoesInput | respostas_simuladoUpsertWithWhereUniqueWithoutQuestoesInput[]
    createMany?: respostas_simuladoCreateManyQuestoesInputEnvelope
    set?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    disconnect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    delete?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    connect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    update?: respostas_simuladoUpdateWithWhereUniqueWithoutQuestoesInput | respostas_simuladoUpdateWithWhereUniqueWithoutQuestoesInput[]
    updateMany?: respostas_simuladoUpdateManyWithWhereWithoutQuestoesInput | respostas_simuladoUpdateManyWithWhereWithoutQuestoesInput[]
    deleteMany?: respostas_simuladoScalarWhereInput | respostas_simuladoScalarWhereInput[]
  }

  export type questoesCreateNestedOneWithoutRespostas_simuladoInput = {
    create?: XOR<questoesCreateWithoutRespostas_simuladoInput, questoesUncheckedCreateWithoutRespostas_simuladoInput>
    connectOrCreate?: questoesCreateOrConnectWithoutRespostas_simuladoInput
    connect?: questoesWhereUniqueInput
  }

  export type simulados_feitosCreateNestedOneWithoutRespostas_simuladoInput = {
    create?: XOR<simulados_feitosCreateWithoutRespostas_simuladoInput, simulados_feitosUncheckedCreateWithoutRespostas_simuladoInput>
    connectOrCreate?: simulados_feitosCreateOrConnectWithoutRespostas_simuladoInput
    connect?: simulados_feitosWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type questoesUpdateOneRequiredWithoutRespostas_simuladoNestedInput = {
    create?: XOR<questoesCreateWithoutRespostas_simuladoInput, questoesUncheckedCreateWithoutRespostas_simuladoInput>
    connectOrCreate?: questoesCreateOrConnectWithoutRespostas_simuladoInput
    upsert?: questoesUpsertWithoutRespostas_simuladoInput
    connect?: questoesWhereUniqueInput
    update?: XOR<XOR<questoesUpdateToOneWithWhereWithoutRespostas_simuladoInput, questoesUpdateWithoutRespostas_simuladoInput>, questoesUncheckedUpdateWithoutRespostas_simuladoInput>
  }

  export type simulados_feitosUpdateOneRequiredWithoutRespostas_simuladoNestedInput = {
    create?: XOR<simulados_feitosCreateWithoutRespostas_simuladoInput, simulados_feitosUncheckedCreateWithoutRespostas_simuladoInput>
    connectOrCreate?: simulados_feitosCreateOrConnectWithoutRespostas_simuladoInput
    upsert?: simulados_feitosUpsertWithoutRespostas_simuladoInput
    connect?: simulados_feitosWhereUniqueInput
    update?: XOR<XOR<simulados_feitosUpdateToOneWithWhereWithoutRespostas_simuladoInput, simulados_feitosUpdateWithoutRespostas_simuladoInput>, simulados_feitosUncheckedUpdateWithoutRespostas_simuladoInput>
  }

  export type simulados_feitosCreateNestedOneWithoutResultados_por_disciplinaInput = {
    create?: XOR<simulados_feitosCreateWithoutResultados_por_disciplinaInput, simulados_feitosUncheckedCreateWithoutResultados_por_disciplinaInput>
    connectOrCreate?: simulados_feitosCreateOrConnectWithoutResultados_por_disciplinaInput
    connect?: simulados_feitosWhereUniqueInput
  }

  export type simulados_feitosUpdateOneRequiredWithoutResultados_por_disciplinaNestedInput = {
    create?: XOR<simulados_feitosCreateWithoutResultados_por_disciplinaInput, simulados_feitosUncheckedCreateWithoutResultados_por_disciplinaInput>
    connectOrCreate?: simulados_feitosCreateOrConnectWithoutResultados_por_disciplinaInput
    upsert?: simulados_feitosUpsertWithoutResultados_por_disciplinaInput
    connect?: simulados_feitosWhereUniqueInput
    update?: XOR<XOR<simulados_feitosUpdateToOneWithWhereWithoutResultados_por_disciplinaInput, simulados_feitosUpdateWithoutResultados_por_disciplinaInput>, simulados_feitosUncheckedUpdateWithoutResultados_por_disciplinaInput>
  }

  export type respostas_simuladoCreateNestedManyWithoutSimulados_feitosInput = {
    create?: XOR<respostas_simuladoCreateWithoutSimulados_feitosInput, respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput> | respostas_simuladoCreateWithoutSimulados_feitosInput[] | respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput[]
    connectOrCreate?: respostas_simuladoCreateOrConnectWithoutSimulados_feitosInput | respostas_simuladoCreateOrConnectWithoutSimulados_feitosInput[]
    createMany?: respostas_simuladoCreateManySimulados_feitosInputEnvelope
    connect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
  }

  export type resultados_por_disciplinaCreateNestedManyWithoutSimulados_feitosInput = {
    create?: XOR<resultados_por_disciplinaCreateWithoutSimulados_feitosInput, resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput> | resultados_por_disciplinaCreateWithoutSimulados_feitosInput[] | resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput[]
    connectOrCreate?: resultados_por_disciplinaCreateOrConnectWithoutSimulados_feitosInput | resultados_por_disciplinaCreateOrConnectWithoutSimulados_feitosInput[]
    createMany?: resultados_por_disciplinaCreateManySimulados_feitosInputEnvelope
    connect?: resultados_por_disciplinaWhereUniqueInput | resultados_por_disciplinaWhereUniqueInput[]
  }

  export type respostas_simuladoUncheckedCreateNestedManyWithoutSimulados_feitosInput = {
    create?: XOR<respostas_simuladoCreateWithoutSimulados_feitosInput, respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput> | respostas_simuladoCreateWithoutSimulados_feitosInput[] | respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput[]
    connectOrCreate?: respostas_simuladoCreateOrConnectWithoutSimulados_feitosInput | respostas_simuladoCreateOrConnectWithoutSimulados_feitosInput[]
    createMany?: respostas_simuladoCreateManySimulados_feitosInputEnvelope
    connect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
  }

  export type resultados_por_disciplinaUncheckedCreateNestedManyWithoutSimulados_feitosInput = {
    create?: XOR<resultados_por_disciplinaCreateWithoutSimulados_feitosInput, resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput> | resultados_por_disciplinaCreateWithoutSimulados_feitosInput[] | resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput[]
    connectOrCreate?: resultados_por_disciplinaCreateOrConnectWithoutSimulados_feitosInput | resultados_por_disciplinaCreateOrConnectWithoutSimulados_feitosInput[]
    createMany?: resultados_por_disciplinaCreateManySimulados_feitosInputEnvelope
    connect?: resultados_por_disciplinaWhereUniqueInput | resultados_por_disciplinaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type respostas_simuladoUpdateManyWithoutSimulados_feitosNestedInput = {
    create?: XOR<respostas_simuladoCreateWithoutSimulados_feitosInput, respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput> | respostas_simuladoCreateWithoutSimulados_feitosInput[] | respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput[]
    connectOrCreate?: respostas_simuladoCreateOrConnectWithoutSimulados_feitosInput | respostas_simuladoCreateOrConnectWithoutSimulados_feitosInput[]
    upsert?: respostas_simuladoUpsertWithWhereUniqueWithoutSimulados_feitosInput | respostas_simuladoUpsertWithWhereUniqueWithoutSimulados_feitosInput[]
    createMany?: respostas_simuladoCreateManySimulados_feitosInputEnvelope
    set?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    disconnect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    delete?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    connect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    update?: respostas_simuladoUpdateWithWhereUniqueWithoutSimulados_feitosInput | respostas_simuladoUpdateWithWhereUniqueWithoutSimulados_feitosInput[]
    updateMany?: respostas_simuladoUpdateManyWithWhereWithoutSimulados_feitosInput | respostas_simuladoUpdateManyWithWhereWithoutSimulados_feitosInput[]
    deleteMany?: respostas_simuladoScalarWhereInput | respostas_simuladoScalarWhereInput[]
  }

  export type resultados_por_disciplinaUpdateManyWithoutSimulados_feitosNestedInput = {
    create?: XOR<resultados_por_disciplinaCreateWithoutSimulados_feitosInput, resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput> | resultados_por_disciplinaCreateWithoutSimulados_feitosInput[] | resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput[]
    connectOrCreate?: resultados_por_disciplinaCreateOrConnectWithoutSimulados_feitosInput | resultados_por_disciplinaCreateOrConnectWithoutSimulados_feitosInput[]
    upsert?: resultados_por_disciplinaUpsertWithWhereUniqueWithoutSimulados_feitosInput | resultados_por_disciplinaUpsertWithWhereUniqueWithoutSimulados_feitosInput[]
    createMany?: resultados_por_disciplinaCreateManySimulados_feitosInputEnvelope
    set?: resultados_por_disciplinaWhereUniqueInput | resultados_por_disciplinaWhereUniqueInput[]
    disconnect?: resultados_por_disciplinaWhereUniqueInput | resultados_por_disciplinaWhereUniqueInput[]
    delete?: resultados_por_disciplinaWhereUniqueInput | resultados_por_disciplinaWhereUniqueInput[]
    connect?: resultados_por_disciplinaWhereUniqueInput | resultados_por_disciplinaWhereUniqueInput[]
    update?: resultados_por_disciplinaUpdateWithWhereUniqueWithoutSimulados_feitosInput | resultados_por_disciplinaUpdateWithWhereUniqueWithoutSimulados_feitosInput[]
    updateMany?: resultados_por_disciplinaUpdateManyWithWhereWithoutSimulados_feitosInput | resultados_por_disciplinaUpdateManyWithWhereWithoutSimulados_feitosInput[]
    deleteMany?: resultados_por_disciplinaScalarWhereInput | resultados_por_disciplinaScalarWhereInput[]
  }

  export type respostas_simuladoUncheckedUpdateManyWithoutSimulados_feitosNestedInput = {
    create?: XOR<respostas_simuladoCreateWithoutSimulados_feitosInput, respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput> | respostas_simuladoCreateWithoutSimulados_feitosInput[] | respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput[]
    connectOrCreate?: respostas_simuladoCreateOrConnectWithoutSimulados_feitosInput | respostas_simuladoCreateOrConnectWithoutSimulados_feitosInput[]
    upsert?: respostas_simuladoUpsertWithWhereUniqueWithoutSimulados_feitosInput | respostas_simuladoUpsertWithWhereUniqueWithoutSimulados_feitosInput[]
    createMany?: respostas_simuladoCreateManySimulados_feitosInputEnvelope
    set?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    disconnect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    delete?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    connect?: respostas_simuladoWhereUniqueInput | respostas_simuladoWhereUniqueInput[]
    update?: respostas_simuladoUpdateWithWhereUniqueWithoutSimulados_feitosInput | respostas_simuladoUpdateWithWhereUniqueWithoutSimulados_feitosInput[]
    updateMany?: respostas_simuladoUpdateManyWithWhereWithoutSimulados_feitosInput | respostas_simuladoUpdateManyWithWhereWithoutSimulados_feitosInput[]
    deleteMany?: respostas_simuladoScalarWhereInput | respostas_simuladoScalarWhereInput[]
  }

  export type resultados_por_disciplinaUncheckedUpdateManyWithoutSimulados_feitosNestedInput = {
    create?: XOR<resultados_por_disciplinaCreateWithoutSimulados_feitosInput, resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput> | resultados_por_disciplinaCreateWithoutSimulados_feitosInput[] | resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput[]
    connectOrCreate?: resultados_por_disciplinaCreateOrConnectWithoutSimulados_feitosInput | resultados_por_disciplinaCreateOrConnectWithoutSimulados_feitosInput[]
    upsert?: resultados_por_disciplinaUpsertWithWhereUniqueWithoutSimulados_feitosInput | resultados_por_disciplinaUpsertWithWhereUniqueWithoutSimulados_feitosInput[]
    createMany?: resultados_por_disciplinaCreateManySimulados_feitosInputEnvelope
    set?: resultados_por_disciplinaWhereUniqueInput | resultados_por_disciplinaWhereUniqueInput[]
    disconnect?: resultados_por_disciplinaWhereUniqueInput | resultados_por_disciplinaWhereUniqueInput[]
    delete?: resultados_por_disciplinaWhereUniqueInput | resultados_por_disciplinaWhereUniqueInput[]
    connect?: resultados_por_disciplinaWhereUniqueInput | resultados_por_disciplinaWhereUniqueInput[]
    update?: resultados_por_disciplinaUpdateWithWhereUniqueWithoutSimulados_feitosInput | resultados_por_disciplinaUpdateWithWhereUniqueWithoutSimulados_feitosInput[]
    updateMany?: resultados_por_disciplinaUpdateManyWithWhereWithoutSimulados_feitosInput | resultados_por_disciplinaUpdateManyWithWhereWithoutSimulados_feitosInput[]
    deleteMany?: resultados_por_disciplinaScalarWhereInput | resultados_por_disciplinaScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type respostas_simuladoCreateWithoutQuestoesInput = {
    acertou: boolean
    simulados_feitos: simulados_feitosCreateNestedOneWithoutRespostas_simuladoInput
  }

  export type respostas_simuladoUncheckedCreateWithoutQuestoesInput = {
    id_resposta?: number
    id_simulado_feito: number
    acertou: boolean
  }

  export type respostas_simuladoCreateOrConnectWithoutQuestoesInput = {
    where: respostas_simuladoWhereUniqueInput
    create: XOR<respostas_simuladoCreateWithoutQuestoesInput, respostas_simuladoUncheckedCreateWithoutQuestoesInput>
  }

  export type respostas_simuladoCreateManyQuestoesInputEnvelope = {
    data: respostas_simuladoCreateManyQuestoesInput | respostas_simuladoCreateManyQuestoesInput[]
    skipDuplicates?: boolean
  }

  export type respostas_simuladoUpsertWithWhereUniqueWithoutQuestoesInput = {
    where: respostas_simuladoWhereUniqueInput
    update: XOR<respostas_simuladoUpdateWithoutQuestoesInput, respostas_simuladoUncheckedUpdateWithoutQuestoesInput>
    create: XOR<respostas_simuladoCreateWithoutQuestoesInput, respostas_simuladoUncheckedCreateWithoutQuestoesInput>
  }

  export type respostas_simuladoUpdateWithWhereUniqueWithoutQuestoesInput = {
    where: respostas_simuladoWhereUniqueInput
    data: XOR<respostas_simuladoUpdateWithoutQuestoesInput, respostas_simuladoUncheckedUpdateWithoutQuestoesInput>
  }

  export type respostas_simuladoUpdateManyWithWhereWithoutQuestoesInput = {
    where: respostas_simuladoScalarWhereInput
    data: XOR<respostas_simuladoUpdateManyMutationInput, respostas_simuladoUncheckedUpdateManyWithoutQuestoesInput>
  }

  export type respostas_simuladoScalarWhereInput = {
    AND?: respostas_simuladoScalarWhereInput | respostas_simuladoScalarWhereInput[]
    OR?: respostas_simuladoScalarWhereInput[]
    NOT?: respostas_simuladoScalarWhereInput | respostas_simuladoScalarWhereInput[]
    id_resposta?: IntFilter<"respostas_simulado"> | number
    id_simulado_feito?: IntFilter<"respostas_simulado"> | number
    id_questao?: IntFilter<"respostas_simulado"> | number
    acertou?: BoolFilter<"respostas_simulado"> | boolean
  }

  export type questoesCreateWithoutRespostas_simuladoInput = {
    texto: string
    alternativas: string
    gabarito: string
    disciplina?: string | null
  }

  export type questoesUncheckedCreateWithoutRespostas_simuladoInput = {
    id_questoes?: number
    texto: string
    alternativas: string
    gabarito: string
    disciplina?: string | null
  }

  export type questoesCreateOrConnectWithoutRespostas_simuladoInput = {
    where: questoesWhereUniqueInput
    create: XOR<questoesCreateWithoutRespostas_simuladoInput, questoesUncheckedCreateWithoutRespostas_simuladoInput>
  }

  export type simulados_feitosCreateWithoutRespostas_simuladoInput = {
    id_usuario: string
    data_simulado: Date | string
    acertos_totais: number
    questoes_feitas_totais: number
    tempo_gasto: Date | string
    resultados_por_disciplina?: resultados_por_disciplinaCreateNestedManyWithoutSimulados_feitosInput
  }

  export type simulados_feitosUncheckedCreateWithoutRespostas_simuladoInput = {
    id_simulados_feitos?: number
    id_usuario: string
    data_simulado: Date | string
    acertos_totais: number
    questoes_feitas_totais: number
    tempo_gasto: Date | string
    resultados_por_disciplina?: resultados_por_disciplinaUncheckedCreateNestedManyWithoutSimulados_feitosInput
  }

  export type simulados_feitosCreateOrConnectWithoutRespostas_simuladoInput = {
    where: simulados_feitosWhereUniqueInput
    create: XOR<simulados_feitosCreateWithoutRespostas_simuladoInput, simulados_feitosUncheckedCreateWithoutRespostas_simuladoInput>
  }

  export type questoesUpsertWithoutRespostas_simuladoInput = {
    update: XOR<questoesUpdateWithoutRespostas_simuladoInput, questoesUncheckedUpdateWithoutRespostas_simuladoInput>
    create: XOR<questoesCreateWithoutRespostas_simuladoInput, questoesUncheckedCreateWithoutRespostas_simuladoInput>
    where?: questoesWhereInput
  }

  export type questoesUpdateToOneWithWhereWithoutRespostas_simuladoInput = {
    where?: questoesWhereInput
    data: XOR<questoesUpdateWithoutRespostas_simuladoInput, questoesUncheckedUpdateWithoutRespostas_simuladoInput>
  }

  export type questoesUpdateWithoutRespostas_simuladoInput = {
    texto?: StringFieldUpdateOperationsInput | string
    alternativas?: StringFieldUpdateOperationsInput | string
    gabarito?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type questoesUncheckedUpdateWithoutRespostas_simuladoInput = {
    id_questoes?: IntFieldUpdateOperationsInput | number
    texto?: StringFieldUpdateOperationsInput | string
    alternativas?: StringFieldUpdateOperationsInput | string
    gabarito?: StringFieldUpdateOperationsInput | string
    disciplina?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type simulados_feitosUpsertWithoutRespostas_simuladoInput = {
    update: XOR<simulados_feitosUpdateWithoutRespostas_simuladoInput, simulados_feitosUncheckedUpdateWithoutRespostas_simuladoInput>
    create: XOR<simulados_feitosCreateWithoutRespostas_simuladoInput, simulados_feitosUncheckedCreateWithoutRespostas_simuladoInput>
    where?: simulados_feitosWhereInput
  }

  export type simulados_feitosUpdateToOneWithWhereWithoutRespostas_simuladoInput = {
    where?: simulados_feitosWhereInput
    data: XOR<simulados_feitosUpdateWithoutRespostas_simuladoInput, simulados_feitosUncheckedUpdateWithoutRespostas_simuladoInput>
  }

  export type simulados_feitosUpdateWithoutRespostas_simuladoInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    data_simulado?: DateTimeFieldUpdateOperationsInput | Date | string
    acertos_totais?: IntFieldUpdateOperationsInput | number
    questoes_feitas_totais?: IntFieldUpdateOperationsInput | number
    tempo_gasto?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados_por_disciplina?: resultados_por_disciplinaUpdateManyWithoutSimulados_feitosNestedInput
  }

  export type simulados_feitosUncheckedUpdateWithoutRespostas_simuladoInput = {
    id_simulados_feitos?: IntFieldUpdateOperationsInput | number
    id_usuario?: StringFieldUpdateOperationsInput | string
    data_simulado?: DateTimeFieldUpdateOperationsInput | Date | string
    acertos_totais?: IntFieldUpdateOperationsInput | number
    questoes_feitas_totais?: IntFieldUpdateOperationsInput | number
    tempo_gasto?: DateTimeFieldUpdateOperationsInput | Date | string
    resultados_por_disciplina?: resultados_por_disciplinaUncheckedUpdateManyWithoutSimulados_feitosNestedInput
  }

  export type simulados_feitosCreateWithoutResultados_por_disciplinaInput = {
    id_usuario: string
    data_simulado: Date | string
    acertos_totais: number
    questoes_feitas_totais: number
    tempo_gasto: Date | string
    respostas_simulado?: respostas_simuladoCreateNestedManyWithoutSimulados_feitosInput
  }

  export type simulados_feitosUncheckedCreateWithoutResultados_por_disciplinaInput = {
    id_simulados_feitos?: number
    id_usuario: string
    data_simulado: Date | string
    acertos_totais: number
    questoes_feitas_totais: number
    tempo_gasto: Date | string
    respostas_simulado?: respostas_simuladoUncheckedCreateNestedManyWithoutSimulados_feitosInput
  }

  export type simulados_feitosCreateOrConnectWithoutResultados_por_disciplinaInput = {
    where: simulados_feitosWhereUniqueInput
    create: XOR<simulados_feitosCreateWithoutResultados_por_disciplinaInput, simulados_feitosUncheckedCreateWithoutResultados_por_disciplinaInput>
  }

  export type simulados_feitosUpsertWithoutResultados_por_disciplinaInput = {
    update: XOR<simulados_feitosUpdateWithoutResultados_por_disciplinaInput, simulados_feitosUncheckedUpdateWithoutResultados_por_disciplinaInput>
    create: XOR<simulados_feitosCreateWithoutResultados_por_disciplinaInput, simulados_feitosUncheckedCreateWithoutResultados_por_disciplinaInput>
    where?: simulados_feitosWhereInput
  }

  export type simulados_feitosUpdateToOneWithWhereWithoutResultados_por_disciplinaInput = {
    where?: simulados_feitosWhereInput
    data: XOR<simulados_feitosUpdateWithoutResultados_por_disciplinaInput, simulados_feitosUncheckedUpdateWithoutResultados_por_disciplinaInput>
  }

  export type simulados_feitosUpdateWithoutResultados_por_disciplinaInput = {
    id_usuario?: StringFieldUpdateOperationsInput | string
    data_simulado?: DateTimeFieldUpdateOperationsInput | Date | string
    acertos_totais?: IntFieldUpdateOperationsInput | number
    questoes_feitas_totais?: IntFieldUpdateOperationsInput | number
    tempo_gasto?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas_simulado?: respostas_simuladoUpdateManyWithoutSimulados_feitosNestedInput
  }

  export type simulados_feitosUncheckedUpdateWithoutResultados_por_disciplinaInput = {
    id_simulados_feitos?: IntFieldUpdateOperationsInput | number
    id_usuario?: StringFieldUpdateOperationsInput | string
    data_simulado?: DateTimeFieldUpdateOperationsInput | Date | string
    acertos_totais?: IntFieldUpdateOperationsInput | number
    questoes_feitas_totais?: IntFieldUpdateOperationsInput | number
    tempo_gasto?: DateTimeFieldUpdateOperationsInput | Date | string
    respostas_simulado?: respostas_simuladoUncheckedUpdateManyWithoutSimulados_feitosNestedInput
  }

  export type respostas_simuladoCreateWithoutSimulados_feitosInput = {
    acertou: boolean
    questoes: questoesCreateNestedOneWithoutRespostas_simuladoInput
  }

  export type respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput = {
    id_resposta?: number
    id_questao: number
    acertou: boolean
  }

  export type respostas_simuladoCreateOrConnectWithoutSimulados_feitosInput = {
    where: respostas_simuladoWhereUniqueInput
    create: XOR<respostas_simuladoCreateWithoutSimulados_feitosInput, respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput>
  }

  export type respostas_simuladoCreateManySimulados_feitosInputEnvelope = {
    data: respostas_simuladoCreateManySimulados_feitosInput | respostas_simuladoCreateManySimulados_feitosInput[]
    skipDuplicates?: boolean
  }

  export type resultados_por_disciplinaCreateWithoutSimulados_feitosInput = {
    disciplina: string
    acertos_disciplina: number
    questoes_feitas_disciplina: number
  }

  export type resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput = {
    id_resultado_disciplina?: number
    disciplina: string
    acertos_disciplina: number
    questoes_feitas_disciplina: number
  }

  export type resultados_por_disciplinaCreateOrConnectWithoutSimulados_feitosInput = {
    where: resultados_por_disciplinaWhereUniqueInput
    create: XOR<resultados_por_disciplinaCreateWithoutSimulados_feitosInput, resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput>
  }

  export type resultados_por_disciplinaCreateManySimulados_feitosInputEnvelope = {
    data: resultados_por_disciplinaCreateManySimulados_feitosInput | resultados_por_disciplinaCreateManySimulados_feitosInput[]
    skipDuplicates?: boolean
  }

  export type respostas_simuladoUpsertWithWhereUniqueWithoutSimulados_feitosInput = {
    where: respostas_simuladoWhereUniqueInput
    update: XOR<respostas_simuladoUpdateWithoutSimulados_feitosInput, respostas_simuladoUncheckedUpdateWithoutSimulados_feitosInput>
    create: XOR<respostas_simuladoCreateWithoutSimulados_feitosInput, respostas_simuladoUncheckedCreateWithoutSimulados_feitosInput>
  }

  export type respostas_simuladoUpdateWithWhereUniqueWithoutSimulados_feitosInput = {
    where: respostas_simuladoWhereUniqueInput
    data: XOR<respostas_simuladoUpdateWithoutSimulados_feitosInput, respostas_simuladoUncheckedUpdateWithoutSimulados_feitosInput>
  }

  export type respostas_simuladoUpdateManyWithWhereWithoutSimulados_feitosInput = {
    where: respostas_simuladoScalarWhereInput
    data: XOR<respostas_simuladoUpdateManyMutationInput, respostas_simuladoUncheckedUpdateManyWithoutSimulados_feitosInput>
  }

  export type resultados_por_disciplinaUpsertWithWhereUniqueWithoutSimulados_feitosInput = {
    where: resultados_por_disciplinaWhereUniqueInput
    update: XOR<resultados_por_disciplinaUpdateWithoutSimulados_feitosInput, resultados_por_disciplinaUncheckedUpdateWithoutSimulados_feitosInput>
    create: XOR<resultados_por_disciplinaCreateWithoutSimulados_feitosInput, resultados_por_disciplinaUncheckedCreateWithoutSimulados_feitosInput>
  }

  export type resultados_por_disciplinaUpdateWithWhereUniqueWithoutSimulados_feitosInput = {
    where: resultados_por_disciplinaWhereUniqueInput
    data: XOR<resultados_por_disciplinaUpdateWithoutSimulados_feitosInput, resultados_por_disciplinaUncheckedUpdateWithoutSimulados_feitosInput>
  }

  export type resultados_por_disciplinaUpdateManyWithWhereWithoutSimulados_feitosInput = {
    where: resultados_por_disciplinaScalarWhereInput
    data: XOR<resultados_por_disciplinaUpdateManyMutationInput, resultados_por_disciplinaUncheckedUpdateManyWithoutSimulados_feitosInput>
  }

  export type resultados_por_disciplinaScalarWhereInput = {
    AND?: resultados_por_disciplinaScalarWhereInput | resultados_por_disciplinaScalarWhereInput[]
    OR?: resultados_por_disciplinaScalarWhereInput[]
    NOT?: resultados_por_disciplinaScalarWhereInput | resultados_por_disciplinaScalarWhereInput[]
    id_resultado_disciplina?: IntFilter<"resultados_por_disciplina"> | number
    id_simulado_feito?: IntFilter<"resultados_por_disciplina"> | number
    disciplina?: StringFilter<"resultados_por_disciplina"> | string
    acertos_disciplina?: IntFilter<"resultados_por_disciplina"> | number
    questoes_feitas_disciplina?: IntFilter<"resultados_por_disciplina"> | number
  }

  export type respostas_simuladoCreateManyQuestoesInput = {
    id_resposta?: number
    id_simulado_feito: number
    acertou: boolean
  }

  export type respostas_simuladoUpdateWithoutQuestoesInput = {
    acertou?: BoolFieldUpdateOperationsInput | boolean
    simulados_feitos?: simulados_feitosUpdateOneRequiredWithoutRespostas_simuladoNestedInput
  }

  export type respostas_simuladoUncheckedUpdateWithoutQuestoesInput = {
    id_resposta?: IntFieldUpdateOperationsInput | number
    id_simulado_feito?: IntFieldUpdateOperationsInput | number
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type respostas_simuladoUncheckedUpdateManyWithoutQuestoesInput = {
    id_resposta?: IntFieldUpdateOperationsInput | number
    id_simulado_feito?: IntFieldUpdateOperationsInput | number
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type respostas_simuladoCreateManySimulados_feitosInput = {
    id_resposta?: number
    id_questao: number
    acertou: boolean
  }

  export type resultados_por_disciplinaCreateManySimulados_feitosInput = {
    id_resultado_disciplina?: number
    disciplina: string
    acertos_disciplina: number
    questoes_feitas_disciplina: number
  }

  export type respostas_simuladoUpdateWithoutSimulados_feitosInput = {
    acertou?: BoolFieldUpdateOperationsInput | boolean
    questoes?: questoesUpdateOneRequiredWithoutRespostas_simuladoNestedInput
  }

  export type respostas_simuladoUncheckedUpdateWithoutSimulados_feitosInput = {
    id_resposta?: IntFieldUpdateOperationsInput | number
    id_questao?: IntFieldUpdateOperationsInput | number
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type respostas_simuladoUncheckedUpdateManyWithoutSimulados_feitosInput = {
    id_resposta?: IntFieldUpdateOperationsInput | number
    id_questao?: IntFieldUpdateOperationsInput | number
    acertou?: BoolFieldUpdateOperationsInput | boolean
  }

  export type resultados_por_disciplinaUpdateWithoutSimulados_feitosInput = {
    disciplina?: StringFieldUpdateOperationsInput | string
    acertos_disciplina?: IntFieldUpdateOperationsInput | number
    questoes_feitas_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type resultados_por_disciplinaUncheckedUpdateWithoutSimulados_feitosInput = {
    id_resultado_disciplina?: IntFieldUpdateOperationsInput | number
    disciplina?: StringFieldUpdateOperationsInput | string
    acertos_disciplina?: IntFieldUpdateOperationsInput | number
    questoes_feitas_disciplina?: IntFieldUpdateOperationsInput | number
  }

  export type resultados_por_disciplinaUncheckedUpdateManyWithoutSimulados_feitosInput = {
    id_resultado_disciplina?: IntFieldUpdateOperationsInput | number
    disciplina?: StringFieldUpdateOperationsInput | string
    acertos_disciplina?: IntFieldUpdateOperationsInput | number
    questoes_feitas_disciplina?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}