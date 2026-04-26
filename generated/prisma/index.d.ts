
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
 * Model Truck
 * 
 */
export type Truck = $Result.DefaultSelection<Prisma.$TruckPayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model migrations
 * 
 */
export type migrations = $Result.DefaultSelection<Prisma.$migrationsPayload>
/**
 * Model password_reset_tokens
 * 
 */
export type password_reset_tokens = $Result.DefaultSelection<Prisma.$password_reset_tokensPayload>
/**
 * Model personal_access_tokens
 * 
 */
export type personal_access_tokens = $Result.DefaultSelection<Prisma.$personal_access_tokensPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model MaintenanceLog
 * 
 */
export type MaintenanceLog = $Result.DefaultSelection<Prisma.$MaintenanceLogPayload>
/**
 * Model TireChangeHistory
 * 
 */
export type TireChangeHistory = $Result.DefaultSelection<Prisma.$TireChangeHistoryPayload>
/**
 * Model TireBrand
 * 
 */
export type TireBrand = $Result.DefaultSelection<Prisma.$TireBrandPayload>
/**
 * Model TireItem
 * 
 */
export type TireItem = $Result.DefaultSelection<Prisma.$TireItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Trucks
 * const trucks = await prisma.truck.findMany()
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
   * // Fetch zero or more Trucks
   * const trucks = await prisma.truck.findMany()
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
   * `prisma.truck`: Exposes CRUD operations for the **Truck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trucks
    * const trucks = await prisma.truck.findMany()
    * ```
    */
  get truck(): Prisma.TruckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.migrations`: Exposes CRUD operations for the **migrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Migrations
    * const migrations = await prisma.migrations.findMany()
    * ```
    */
  get migrations(): Prisma.migrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_reset_tokens`: Exposes CRUD operations for the **password_reset_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_reset_tokens
    * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
    * ```
    */
  get password_reset_tokens(): Prisma.password_reset_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personal_access_tokens`: Exposes CRUD operations for the **personal_access_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personal_access_tokens
    * const personal_access_tokens = await prisma.personal_access_tokens.findMany()
    * ```
    */
  get personal_access_tokens(): Prisma.personal_access_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceLog`: Exposes CRUD operations for the **MaintenanceLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceLogs
    * const maintenanceLogs = await prisma.maintenanceLog.findMany()
    * ```
    */
  get maintenanceLog(): Prisma.MaintenanceLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tireChangeHistory`: Exposes CRUD operations for the **TireChangeHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TireChangeHistories
    * const tireChangeHistories = await prisma.tireChangeHistory.findMany()
    * ```
    */
  get tireChangeHistory(): Prisma.TireChangeHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tireBrand`: Exposes CRUD operations for the **TireBrand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TireBrands
    * const tireBrands = await prisma.tireBrand.findMany()
    * ```
    */
  get tireBrand(): Prisma.TireBrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tireItem`: Exposes CRUD operations for the **TireItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TireItems
    * const tireItems = await prisma.tireItem.findMany()
    * ```
    */
  get tireItem(): Prisma.TireItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Truck: 'Truck',
    Driver: 'Driver',
    Report: 'Report',
    migrations: 'migrations',
    password_reset_tokens: 'password_reset_tokens',
    personal_access_tokens: 'personal_access_tokens',
    users: 'users',
    MaintenanceLog: 'MaintenanceLog',
    TireChangeHistory: 'TireChangeHistory',
    TireBrand: 'TireBrand',
    TireItem: 'TireItem'
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
      modelProps: "truck" | "driver" | "report" | "migrations" | "password_reset_tokens" | "personal_access_tokens" | "users" | "maintenanceLog" | "tireChangeHistory" | "tireBrand" | "tireItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Truck: {
        payload: Prisma.$TruckPayload<ExtArgs>
        fields: Prisma.TruckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TruckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TruckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          findFirst: {
            args: Prisma.TruckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TruckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          findMany: {
            args: Prisma.TruckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>[]
          }
          create: {
            args: Prisma.TruckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          createMany: {
            args: Prisma.TruckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TruckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          update: {
            args: Prisma.TruckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          deleteMany: {
            args: Prisma.TruckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TruckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TruckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TruckPayload>
          }
          aggregate: {
            args: Prisma.TruckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTruck>
          }
          groupBy: {
            args: Prisma.TruckGroupByArgs<ExtArgs>
            result: $Utils.Optional<TruckGroupByOutputType>[]
          }
          count: {
            args: Prisma.TruckCountArgs<ExtArgs>
            result: $Utils.Optional<TruckCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      migrations: {
        payload: Prisma.$migrationsPayload<ExtArgs>
        fields: Prisma.migrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.migrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.migrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findFirst: {
            args: Prisma.migrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.migrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          findMany: {
            args: Prisma.migrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>[]
          }
          create: {
            args: Prisma.migrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          createMany: {
            args: Prisma.migrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.migrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          update: {
            args: Prisma.migrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          deleteMany: {
            args: Prisma.migrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.migrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.migrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$migrationsPayload>
          }
          aggregate: {
            args: Prisma.MigrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMigrations>
          }
          groupBy: {
            args: Prisma.migrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MigrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.migrationsCountArgs<ExtArgs>
            result: $Utils.Optional<MigrationsCountAggregateOutputType> | number
          }
        }
      }
      password_reset_tokens: {
        payload: Prisma.$password_reset_tokensPayload<ExtArgs>
        fields: Prisma.password_reset_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_reset_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findFirst: {
            args: Prisma.password_reset_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_reset_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findMany: {
            args: Prisma.password_reset_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[]
          }
          create: {
            args: Prisma.password_reset_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          createMany: {
            args: Prisma.password_reset_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.password_reset_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          update: {
            args: Prisma.password_reset_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          deleteMany: {
            args: Prisma.password_reset_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.password_reset_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.password_reset_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          aggregate: {
            args: Prisma.Password_reset_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword_reset_tokens>
          }
          groupBy: {
            args: Prisma.password_reset_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_reset_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensCountAggregateOutputType> | number
          }
        }
      }
      personal_access_tokens: {
        payload: Prisma.$personal_access_tokensPayload<ExtArgs>
        fields: Prisma.personal_access_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.personal_access_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.personal_access_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          findFirst: {
            args: Prisma.personal_access_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.personal_access_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          findMany: {
            args: Prisma.personal_access_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>[]
          }
          create: {
            args: Prisma.personal_access_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          createMany: {
            args: Prisma.personal_access_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.personal_access_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          update: {
            args: Prisma.personal_access_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          deleteMany: {
            args: Prisma.personal_access_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.personal_access_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.personal_access_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$personal_access_tokensPayload>
          }
          aggregate: {
            args: Prisma.Personal_access_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonal_access_tokens>
          }
          groupBy: {
            args: Prisma.personal_access_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Personal_access_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.personal_access_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Personal_access_tokensCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceLog: {
        payload: Prisma.$MaintenanceLogPayload<ExtArgs>
        fields: Prisma.MaintenanceLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          findMany: {
            args: Prisma.MaintenanceLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>[]
          }
          create: {
            args: Prisma.MaintenanceLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          createMany: {
            args: Prisma.MaintenanceLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaintenanceLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          update: {
            args: Prisma.MaintenanceLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaintenanceLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceLog>
          }
          groupBy: {
            args: Prisma.MaintenanceLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceLogCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceLogCountAggregateOutputType> | number
          }
        }
      }
      TireChangeHistory: {
        payload: Prisma.$TireChangeHistoryPayload<ExtArgs>
        fields: Prisma.TireChangeHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TireChangeHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireChangeHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TireChangeHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireChangeHistoryPayload>
          }
          findFirst: {
            args: Prisma.TireChangeHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireChangeHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TireChangeHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireChangeHistoryPayload>
          }
          findMany: {
            args: Prisma.TireChangeHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireChangeHistoryPayload>[]
          }
          create: {
            args: Prisma.TireChangeHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireChangeHistoryPayload>
          }
          createMany: {
            args: Prisma.TireChangeHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TireChangeHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireChangeHistoryPayload>
          }
          update: {
            args: Prisma.TireChangeHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireChangeHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TireChangeHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TireChangeHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TireChangeHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireChangeHistoryPayload>
          }
          aggregate: {
            args: Prisma.TireChangeHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTireChangeHistory>
          }
          groupBy: {
            args: Prisma.TireChangeHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TireChangeHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TireChangeHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TireChangeHistoryCountAggregateOutputType> | number
          }
        }
      }
      TireBrand: {
        payload: Prisma.$TireBrandPayload<ExtArgs>
        fields: Prisma.TireBrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TireBrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireBrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TireBrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireBrandPayload>
          }
          findFirst: {
            args: Prisma.TireBrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireBrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TireBrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireBrandPayload>
          }
          findMany: {
            args: Prisma.TireBrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireBrandPayload>[]
          }
          create: {
            args: Prisma.TireBrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireBrandPayload>
          }
          createMany: {
            args: Prisma.TireBrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TireBrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireBrandPayload>
          }
          update: {
            args: Prisma.TireBrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireBrandPayload>
          }
          deleteMany: {
            args: Prisma.TireBrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TireBrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TireBrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireBrandPayload>
          }
          aggregate: {
            args: Prisma.TireBrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTireBrand>
          }
          groupBy: {
            args: Prisma.TireBrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<TireBrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.TireBrandCountArgs<ExtArgs>
            result: $Utils.Optional<TireBrandCountAggregateOutputType> | number
          }
        }
      }
      TireItem: {
        payload: Prisma.$TireItemPayload<ExtArgs>
        fields: Prisma.TireItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TireItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TireItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireItemPayload>
          }
          findFirst: {
            args: Prisma.TireItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TireItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireItemPayload>
          }
          findMany: {
            args: Prisma.TireItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireItemPayload>[]
          }
          create: {
            args: Prisma.TireItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireItemPayload>
          }
          createMany: {
            args: Prisma.TireItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TireItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireItemPayload>
          }
          update: {
            args: Prisma.TireItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireItemPayload>
          }
          deleteMany: {
            args: Prisma.TireItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TireItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TireItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TireItemPayload>
          }
          aggregate: {
            args: Prisma.TireItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTireItem>
          }
          groupBy: {
            args: Prisma.TireItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TireItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TireItemCountArgs<ExtArgs>
            result: $Utils.Optional<TireItemCountAggregateOutputType> | number
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
    truck?: TruckOmit
    driver?: DriverOmit
    report?: ReportOmit
    migrations?: migrationsOmit
    password_reset_tokens?: password_reset_tokensOmit
    personal_access_tokens?: personal_access_tokensOmit
    users?: usersOmit
    maintenanceLog?: MaintenanceLogOmit
    tireChangeHistory?: TireChangeHistoryOmit
    tireBrand?: TireBrandOmit
    tireItem?: TireItemOmit
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
   * Count Type TruckCountOutputType
   */

  export type TruckCountOutputType = {
    reports: number
    maintenanceLogs: number
    tireChangeHistories: number
  }

  export type TruckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | TruckCountOutputTypeCountReportsArgs
    maintenanceLogs?: boolean | TruckCountOutputTypeCountMaintenanceLogsArgs
    tireChangeHistories?: boolean | TruckCountOutputTypeCountTireChangeHistoriesArgs
  }

  // Custom InputTypes
  /**
   * TruckCountOutputType without action
   */
  export type TruckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TruckCountOutputType
     */
    select?: TruckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TruckCountOutputType without action
   */
  export type TruckCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * TruckCountOutputType without action
   */
  export type TruckCountOutputTypeCountMaintenanceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceLogWhereInput
  }

  /**
   * TruckCountOutputType without action
   */
  export type TruckCountOutputTypeCountTireChangeHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TireChangeHistoryWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    trucks: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trucks?: boolean | DriverCountOutputTypeCountTrucksArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountTrucksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TruckWhereInput
  }


  /**
   * Count Type TireChangeHistoryCountOutputType
   */

  export type TireChangeHistoryCountOutputType = {
    tireItems: number
  }

  export type TireChangeHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tireItems?: boolean | TireChangeHistoryCountOutputTypeCountTireItemsArgs
  }

  // Custom InputTypes
  /**
   * TireChangeHistoryCountOutputType without action
   */
  export type TireChangeHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistoryCountOutputType
     */
    select?: TireChangeHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TireChangeHistoryCountOutputType without action
   */
  export type TireChangeHistoryCountOutputTypeCountTireItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TireItemWhereInput
  }


  /**
   * Count Type TireBrandCountOutputType
   */

  export type TireBrandCountOutputType = {
    items: number
  }

  export type TireBrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TireBrandCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * TireBrandCountOutputType without action
   */
  export type TireBrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrandCountOutputType
     */
    select?: TireBrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TireBrandCountOutputType without action
   */
  export type TireBrandCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TireItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Truck
   */

  export type AggregateTruck = {
    _count: TruckCountAggregateOutputType | null
    _avg: TruckAvgAggregateOutputType | null
    _sum: TruckSumAggregateOutputType | null
    _min: TruckMinAggregateOutputType | null
    _max: TruckMaxAggregateOutputType | null
  }

  export type TruckAvgAggregateOutputType = {
    id: number | null
    current_mileage: number | null
    driver_id: number | null
  }

  export type TruckSumAggregateOutputType = {
    id: bigint | null
    current_mileage: number | null
    driver_id: bigint | null
  }

  export type TruckMinAggregateOutputType = {
    id: bigint | null
    number_plate: string | null
    current_mileage: number | null
    driver_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TruckMaxAggregateOutputType = {
    id: bigint | null
    number_plate: string | null
    current_mileage: number | null
    driver_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TruckCountAggregateOutputType = {
    id: number
    number_plate: number
    current_mileage: number
    driver_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TruckAvgAggregateInputType = {
    id?: true
    current_mileage?: true
    driver_id?: true
  }

  export type TruckSumAggregateInputType = {
    id?: true
    current_mileage?: true
    driver_id?: true
  }

  export type TruckMinAggregateInputType = {
    id?: true
    number_plate?: true
    current_mileage?: true
    driver_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TruckMaxAggregateInputType = {
    id?: true
    number_plate?: true
    current_mileage?: true
    driver_id?: true
    created_at?: true
    updated_at?: true
  }

  export type TruckCountAggregateInputType = {
    id?: true
    number_plate?: true
    current_mileage?: true
    driver_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TruckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Truck to aggregate.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trucks
    **/
    _count?: true | TruckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TruckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TruckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TruckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TruckMaxAggregateInputType
  }

  export type GetTruckAggregateType<T extends TruckAggregateArgs> = {
        [P in keyof T & keyof AggregateTruck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTruck[P]>
      : GetScalarType<T[P], AggregateTruck[P]>
  }




  export type TruckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TruckWhereInput
    orderBy?: TruckOrderByWithAggregationInput | TruckOrderByWithAggregationInput[]
    by: TruckScalarFieldEnum[] | TruckScalarFieldEnum
    having?: TruckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TruckCountAggregateInputType | true
    _avg?: TruckAvgAggregateInputType
    _sum?: TruckSumAggregateInputType
    _min?: TruckMinAggregateInputType
    _max?: TruckMaxAggregateInputType
  }

  export type TruckGroupByOutputType = {
    id: bigint
    number_plate: string
    current_mileage: number
    driver_id: bigint | null
    created_at: Date | null
    updated_at: Date | null
    _count: TruckCountAggregateOutputType | null
    _avg: TruckAvgAggregateOutputType | null
    _sum: TruckSumAggregateOutputType | null
    _min: TruckMinAggregateOutputType | null
    _max: TruckMaxAggregateOutputType | null
  }

  type GetTruckGroupByPayload<T extends TruckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TruckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TruckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TruckGroupByOutputType[P]>
            : GetScalarType<T[P], TruckGroupByOutputType[P]>
        }
      >
    >


  export type TruckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number_plate?: boolean
    current_mileage?: boolean
    driver_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    drivers?: boolean | Truck$driversArgs<ExtArgs>
    reports?: boolean | Truck$reportsArgs<ExtArgs>
    maintenanceLogs?: boolean | Truck$maintenanceLogsArgs<ExtArgs>
    tireChangeHistories?: boolean | Truck$tireChangeHistoriesArgs<ExtArgs>
    _count?: boolean | TruckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["truck"]>



  export type TruckSelectScalar = {
    id?: boolean
    number_plate?: boolean
    current_mileage?: boolean
    driver_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TruckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number_plate" | "current_mileage" | "driver_id" | "created_at" | "updated_at", ExtArgs["result"]["truck"]>
  export type TruckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | Truck$driversArgs<ExtArgs>
    reports?: boolean | Truck$reportsArgs<ExtArgs>
    maintenanceLogs?: boolean | Truck$maintenanceLogsArgs<ExtArgs>
    tireChangeHistories?: boolean | Truck$tireChangeHistoriesArgs<ExtArgs>
    _count?: boolean | TruckCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TruckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Truck"
    objects: {
      drivers: Prisma.$DriverPayload<ExtArgs> | null
      reports: Prisma.$ReportPayload<ExtArgs>[]
      maintenanceLogs: Prisma.$MaintenanceLogPayload<ExtArgs>[]
      tireChangeHistories: Prisma.$TireChangeHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      number_plate: string
      current_mileage: number
      driver_id: bigint | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["truck"]>
    composites: {}
  }

  type TruckGetPayload<S extends boolean | null | undefined | TruckDefaultArgs> = $Result.GetResult<Prisma.$TruckPayload, S>

  type TruckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TruckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TruckCountAggregateInputType | true
    }

  export interface TruckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Truck'], meta: { name: 'Truck' } }
    /**
     * Find zero or one Truck that matches the filter.
     * @param {TruckFindUniqueArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TruckFindUniqueArgs>(args: SelectSubset<T, TruckFindUniqueArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Truck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TruckFindUniqueOrThrowArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TruckFindUniqueOrThrowArgs>(args: SelectSubset<T, TruckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Truck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckFindFirstArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TruckFindFirstArgs>(args?: SelectSubset<T, TruckFindFirstArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Truck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckFindFirstOrThrowArgs} args - Arguments to find a Truck
     * @example
     * // Get one Truck
     * const truck = await prisma.truck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TruckFindFirstOrThrowArgs>(args?: SelectSubset<T, TruckFindFirstOrThrowArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trucks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trucks
     * const trucks = await prisma.truck.findMany()
     * 
     * // Get first 10 Trucks
     * const trucks = await prisma.truck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const truckWithIdOnly = await prisma.truck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TruckFindManyArgs>(args?: SelectSubset<T, TruckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Truck.
     * @param {TruckCreateArgs} args - Arguments to create a Truck.
     * @example
     * // Create one Truck
     * const Truck = await prisma.truck.create({
     *   data: {
     *     // ... data to create a Truck
     *   }
     * })
     * 
     */
    create<T extends TruckCreateArgs>(args: SelectSubset<T, TruckCreateArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trucks.
     * @param {TruckCreateManyArgs} args - Arguments to create many Trucks.
     * @example
     * // Create many Trucks
     * const truck = await prisma.truck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TruckCreateManyArgs>(args?: SelectSubset<T, TruckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Truck.
     * @param {TruckDeleteArgs} args - Arguments to delete one Truck.
     * @example
     * // Delete one Truck
     * const Truck = await prisma.truck.delete({
     *   where: {
     *     // ... filter to delete one Truck
     *   }
     * })
     * 
     */
    delete<T extends TruckDeleteArgs>(args: SelectSubset<T, TruckDeleteArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Truck.
     * @param {TruckUpdateArgs} args - Arguments to update one Truck.
     * @example
     * // Update one Truck
     * const truck = await prisma.truck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TruckUpdateArgs>(args: SelectSubset<T, TruckUpdateArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trucks.
     * @param {TruckDeleteManyArgs} args - Arguments to filter Trucks to delete.
     * @example
     * // Delete a few Trucks
     * const { count } = await prisma.truck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TruckDeleteManyArgs>(args?: SelectSubset<T, TruckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trucks
     * const truck = await prisma.truck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TruckUpdateManyArgs>(args: SelectSubset<T, TruckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Truck.
     * @param {TruckUpsertArgs} args - Arguments to update or create a Truck.
     * @example
     * // Update or create a Truck
     * const truck = await prisma.truck.upsert({
     *   create: {
     *     // ... data to create a Truck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Truck we want to update
     *   }
     * })
     */
    upsert<T extends TruckUpsertArgs>(args: SelectSubset<T, TruckUpsertArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckCountArgs} args - Arguments to filter Trucks to count.
     * @example
     * // Count the number of Trucks
     * const count = await prisma.truck.count({
     *   where: {
     *     // ... the filter for the Trucks we want to count
     *   }
     * })
    **/
    count<T extends TruckCountArgs>(
      args?: Subset<T, TruckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TruckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Truck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TruckAggregateArgs>(args: Subset<T, TruckAggregateArgs>): Prisma.PrismaPromise<GetTruckAggregateType<T>>

    /**
     * Group by Truck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TruckGroupByArgs} args - Group by arguments.
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
      T extends TruckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TruckGroupByArgs['orderBy'] }
        : { orderBy?: TruckGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TruckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTruckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Truck model
   */
  readonly fields: TruckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Truck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TruckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drivers<T extends Truck$driversArgs<ExtArgs> = {}>(args?: Subset<T, Truck$driversArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reports<T extends Truck$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Truck$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenanceLogs<T extends Truck$maintenanceLogsArgs<ExtArgs> = {}>(args?: Subset<T, Truck$maintenanceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tireChangeHistories<T extends Truck$tireChangeHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Truck$tireChangeHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Truck model
   */
  interface TruckFieldRefs {
    readonly id: FieldRef<"Truck", 'BigInt'>
    readonly number_plate: FieldRef<"Truck", 'String'>
    readonly current_mileage: FieldRef<"Truck", 'Int'>
    readonly driver_id: FieldRef<"Truck", 'BigInt'>
    readonly created_at: FieldRef<"Truck", 'DateTime'>
    readonly updated_at: FieldRef<"Truck", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Truck findUnique
   */
  export type TruckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck findUniqueOrThrow
   */
  export type TruckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck findFirst
   */
  export type TruckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trucks.
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trucks.
     */
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Truck findFirstOrThrow
   */
  export type TruckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Truck to fetch.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trucks.
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trucks.
     */
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Truck findMany
   */
  export type TruckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter, which Trucks to fetch.
     */
    where?: TruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trucks to fetch.
     */
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trucks.
     */
    cursor?: TruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trucks.
     */
    skip?: number
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Truck create
   */
  export type TruckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * The data needed to create a Truck.
     */
    data: XOR<TruckCreateInput, TruckUncheckedCreateInput>
  }

  /**
   * Truck createMany
   */
  export type TruckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trucks.
     */
    data: TruckCreateManyInput | TruckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Truck update
   */
  export type TruckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * The data needed to update a Truck.
     */
    data: XOR<TruckUpdateInput, TruckUncheckedUpdateInput>
    /**
     * Choose, which Truck to update.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck updateMany
   */
  export type TruckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trucks.
     */
    data: XOR<TruckUpdateManyMutationInput, TruckUncheckedUpdateManyInput>
    /**
     * Filter which Trucks to update
     */
    where?: TruckWhereInput
    /**
     * Limit how many Trucks to update.
     */
    limit?: number
  }

  /**
   * Truck upsert
   */
  export type TruckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * The filter to search for the Truck to update in case it exists.
     */
    where: TruckWhereUniqueInput
    /**
     * In case the Truck found by the `where` argument doesn't exist, create a new Truck with this data.
     */
    create: XOR<TruckCreateInput, TruckUncheckedCreateInput>
    /**
     * In case the Truck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TruckUpdateInput, TruckUncheckedUpdateInput>
  }

  /**
   * Truck delete
   */
  export type TruckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    /**
     * Filter which Truck to delete.
     */
    where: TruckWhereUniqueInput
  }

  /**
   * Truck deleteMany
   */
  export type TruckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trucks to delete
     */
    where?: TruckWhereInput
    /**
     * Limit how many Trucks to delete.
     */
    limit?: number
  }

  /**
   * Truck.drivers
   */
  export type Truck$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Truck.reports
   */
  export type Truck$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Truck.maintenanceLogs
   */
  export type Truck$maintenanceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    where?: MaintenanceLogWhereInput
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    cursor?: MaintenanceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * Truck.tireChangeHistories
   */
  export type Truck$tireChangeHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
    where?: TireChangeHistoryWhereInput
    orderBy?: TireChangeHistoryOrderByWithRelationInput | TireChangeHistoryOrderByWithRelationInput[]
    cursor?: TireChangeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TireChangeHistoryScalarFieldEnum | TireChangeHistoryScalarFieldEnum[]
  }

  /**
   * Truck without action
   */
  export type TruckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    id: number | null
  }

  export type DriverSumAggregateOutputType = {
    id: bigint | null
  }

  export type DriverMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    id?: true
  }

  export type DriverSumAggregateInputType = {
    id?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: bigint
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    trucks?: boolean | Driver$trucksArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>



  export type DriverSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trucks?: boolean | Driver$trucksArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      trucks: Prisma.$TruckPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
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
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trucks<T extends Driver$trucksArgs<ExtArgs> = {}>(args?: Subset<T, Driver$trucksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'BigInt'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly created_at: FieldRef<"Driver", 'DateTime'>
    readonly updated_at: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.trucks
   */
  export type Driver$trucksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    where?: TruckWhereInput
    orderBy?: TruckOrderByWithRelationInput | TruckOrderByWithRelationInput[]
    cursor?: TruckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TruckScalarFieldEnum | TruckScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
    license_plate_id: number | null
    status: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: bigint | null
    license_plate_id: bigint | null
    status: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: bigint | null
    license_plate_id: bigint | null
    repair: string | null
    status: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: bigint | null
    license_plate_id: bigint | null
    repair: string | null
    status: number | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    license_plate_id: number
    repair: number
    status: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
    license_plate_id?: true
    status?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
    license_plate_id?: true
    status?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    license_plate_id?: true
    repair?: true
    status?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    license_plate_id?: true
    repair?: true
    status?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    license_plate_id?: true
    repair?: true
    status?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: bigint
    license_plate_id: bigint
    repair: string
    status: number
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    license_plate_id?: boolean
    repair?: boolean
    status?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    truck?: boolean | Report$truckArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>



  export type ReportSelectScalar = {
    id?: boolean
    license_plate_id?: boolean
    repair?: boolean
    status?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "license_plate_id" | "repair" | "status" | "description" | "created_at" | "updated_at", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    truck?: boolean | Report$truckArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      truck: Prisma.$TruckPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      license_plate_id: bigint
      repair: string
      status: number
      description: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    truck<T extends Report$truckArgs<ExtArgs> = {}>(args?: Subset<T, Report$truckArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'BigInt'>
    readonly license_plate_id: FieldRef<"Report", 'BigInt'>
    readonly repair: FieldRef<"Report", 'String'>
    readonly status: FieldRef<"Report", 'Int'>
    readonly description: FieldRef<"Report", 'String'>
    readonly created_at: FieldRef<"Report", 'DateTime'>
    readonly updated_at: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.truck
   */
  export type Report$truckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Truck
     */
    select?: TruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Truck
     */
    omit?: TruckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TruckInclude<ExtArgs> | null
    where?: TruckWhereInput
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model migrations
   */

  export type AggregateMigrations = {
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  export type MigrationsAvgAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsSumAggregateOutputType = {
    id: number | null
    batch: number | null
  }

  export type MigrationsMinAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsMaxAggregateOutputType = {
    id: number | null
    migration: string | null
    batch: number | null
  }

  export type MigrationsCountAggregateOutputType = {
    id: number
    migration: number
    batch: number
    _all: number
  }


  export type MigrationsAvgAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsSumAggregateInputType = {
    id?: true
    batch?: true
  }

  export type MigrationsMinAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsMaxAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
  }

  export type MigrationsCountAggregateInputType = {
    id?: true
    migration?: true
    batch?: true
    _all?: true
  }

  export type MigrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to aggregate.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned migrations
    **/
    _count?: true | MigrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MigrationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MigrationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MigrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MigrationsMaxAggregateInputType
  }

  export type GetMigrationsAggregateType<T extends MigrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateMigrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMigrations[P]>
      : GetScalarType<T[P], AggregateMigrations[P]>
  }




  export type migrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: migrationsWhereInput
    orderBy?: migrationsOrderByWithAggregationInput | migrationsOrderByWithAggregationInput[]
    by: MigrationsScalarFieldEnum[] | MigrationsScalarFieldEnum
    having?: migrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MigrationsCountAggregateInputType | true
    _avg?: MigrationsAvgAggregateInputType
    _sum?: MigrationsSumAggregateInputType
    _min?: MigrationsMinAggregateInputType
    _max?: MigrationsMaxAggregateInputType
  }

  export type MigrationsGroupByOutputType = {
    id: number
    migration: string
    batch: number
    _count: MigrationsCountAggregateOutputType | null
    _avg: MigrationsAvgAggregateOutputType | null
    _sum: MigrationsSumAggregateOutputType | null
    _min: MigrationsMinAggregateOutputType | null
    _max: MigrationsMaxAggregateOutputType | null
  }

  type GetMigrationsGroupByPayload<T extends migrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MigrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MigrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
            : GetScalarType<T[P], MigrationsGroupByOutputType[P]>
        }
      >
    >


  export type migrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    migration?: boolean
    batch?: boolean
  }, ExtArgs["result"]["migrations"]>



  export type migrationsSelectScalar = {
    id?: boolean
    migration?: boolean
    batch?: boolean
  }

  export type migrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "migration" | "batch", ExtArgs["result"]["migrations"]>

  export type $migrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "migrations"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      migration: string
      batch: number
    }, ExtArgs["result"]["migrations"]>
    composites: {}
  }

  type migrationsGetPayload<S extends boolean | null | undefined | migrationsDefaultArgs> = $Result.GetResult<Prisma.$migrationsPayload, S>

  type migrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<migrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MigrationsCountAggregateInputType | true
    }

  export interface migrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['migrations'], meta: { name: 'migrations' } }
    /**
     * Find zero or one Migrations that matches the filter.
     * @param {migrationsFindUniqueArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends migrationsFindUniqueArgs>(args: SelectSubset<T, migrationsFindUniqueArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Migrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {migrationsFindUniqueOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends migrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, migrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends migrationsFindFirstArgs>(args?: SelectSubset<T, migrationsFindFirstArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Migrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindFirstOrThrowArgs} args - Arguments to find a Migrations
     * @example
     * // Get one Migrations
     * const migrations = await prisma.migrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends migrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, migrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migrations.findMany()
     * 
     * // Get first 10 Migrations
     * const migrations = await prisma.migrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const migrationsWithIdOnly = await prisma.migrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends migrationsFindManyArgs>(args?: SelectSubset<T, migrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Migrations.
     * @param {migrationsCreateArgs} args - Arguments to create a Migrations.
     * @example
     * // Create one Migrations
     * const Migrations = await prisma.migrations.create({
     *   data: {
     *     // ... data to create a Migrations
     *   }
     * })
     * 
     */
    create<T extends migrationsCreateArgs>(args: SelectSubset<T, migrationsCreateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Migrations.
     * @param {migrationsCreateManyArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migrations = await prisma.migrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends migrationsCreateManyArgs>(args?: SelectSubset<T, migrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Migrations.
     * @param {migrationsDeleteArgs} args - Arguments to delete one Migrations.
     * @example
     * // Delete one Migrations
     * const Migrations = await prisma.migrations.delete({
     *   where: {
     *     // ... filter to delete one Migrations
     *   }
     * })
     * 
     */
    delete<T extends migrationsDeleteArgs>(args: SelectSubset<T, migrationsDeleteArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Migrations.
     * @param {migrationsUpdateArgs} args - Arguments to update one Migrations.
     * @example
     * // Update one Migrations
     * const migrations = await prisma.migrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends migrationsUpdateArgs>(args: SelectSubset<T, migrationsUpdateArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Migrations.
     * @param {migrationsDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends migrationsDeleteManyArgs>(args?: SelectSubset<T, migrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migrations = await prisma.migrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends migrationsUpdateManyArgs>(args: SelectSubset<T, migrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Migrations.
     * @param {migrationsUpsertArgs} args - Arguments to update or create a Migrations.
     * @example
     * // Update or create a Migrations
     * const migrations = await prisma.migrations.upsert({
     *   create: {
     *     // ... data to create a Migrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migrations we want to update
     *   }
     * })
     */
    upsert<T extends migrationsUpsertArgs>(args: SelectSubset<T, migrationsUpsertArgs<ExtArgs>>): Prisma__migrationsClient<$Result.GetResult<Prisma.$migrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migrations.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends migrationsCountArgs>(
      args?: Subset<T, migrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MigrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MigrationsAggregateArgs>(args: Subset<T, MigrationsAggregateArgs>): Prisma.PrismaPromise<GetMigrationsAggregateType<T>>

    /**
     * Group by Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {migrationsGroupByArgs} args - Group by arguments.
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
      T extends migrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: migrationsGroupByArgs['orderBy'] }
        : { orderBy?: migrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, migrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the migrations model
   */
  readonly fields: migrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for migrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__migrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the migrations model
   */
  interface migrationsFieldRefs {
    readonly id: FieldRef<"migrations", 'Int'>
    readonly migration: FieldRef<"migrations", 'String'>
    readonly batch: FieldRef<"migrations", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * migrations findUnique
   */
  export type migrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findUniqueOrThrow
   */
  export type migrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations findFirst
   */
  export type migrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findFirstOrThrow
   */
  export type migrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of migrations.
     */
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations findMany
   */
  export type migrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter, which migrations to fetch.
     */
    where?: migrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of migrations to fetch.
     */
    orderBy?: migrationsOrderByWithRelationInput | migrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing migrations.
     */
    cursor?: migrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` migrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` migrations.
     */
    skip?: number
    distinct?: MigrationsScalarFieldEnum | MigrationsScalarFieldEnum[]
  }

  /**
   * migrations create
   */
  export type migrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to create a migrations.
     */
    data: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
  }

  /**
   * migrations createMany
   */
  export type migrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many migrations.
     */
    data: migrationsCreateManyInput | migrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * migrations update
   */
  export type migrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The data needed to update a migrations.
     */
    data: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
    /**
     * Choose, which migrations to update.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations updateMany
   */
  export type migrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update migrations.
     */
    data: XOR<migrationsUpdateManyMutationInput, migrationsUncheckedUpdateManyInput>
    /**
     * Filter which migrations to update
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to update.
     */
    limit?: number
  }

  /**
   * migrations upsert
   */
  export type migrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * The filter to search for the migrations to update in case it exists.
     */
    where: migrationsWhereUniqueInput
    /**
     * In case the migrations found by the `where` argument doesn't exist, create a new migrations with this data.
     */
    create: XOR<migrationsCreateInput, migrationsUncheckedCreateInput>
    /**
     * In case the migrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<migrationsUpdateInput, migrationsUncheckedUpdateInput>
  }

  /**
   * migrations delete
   */
  export type migrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
    /**
     * Filter which migrations to delete.
     */
    where: migrationsWhereUniqueInput
  }

  /**
   * migrations deleteMany
   */
  export type migrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which migrations to delete
     */
    where?: migrationsWhereInput
    /**
     * Limit how many migrations to delete.
     */
    limit?: number
  }

  /**
   * migrations without action
   */
  export type migrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the migrations
     */
    select?: migrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the migrations
     */
    omit?: migrationsOmit<ExtArgs> | null
  }


  /**
   * Model password_reset_tokens
   */

  export type AggregatePassword_reset_tokens = {
    _count: Password_reset_tokensCountAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  export type Password_reset_tokensMinAggregateOutputType = {
    email: string | null
    token: string | null
    created_at: Date | null
  }

  export type Password_reset_tokensMaxAggregateOutputType = {
    email: string | null
    token: string | null
    created_at: Date | null
  }

  export type Password_reset_tokensCountAggregateOutputType = {
    email: number
    token: number
    created_at: number
    _all: number
  }


  export type Password_reset_tokensMinAggregateInputType = {
    email?: true
    token?: true
    created_at?: true
  }

  export type Password_reset_tokensMaxAggregateInputType = {
    email?: true
    token?: true
    created_at?: true
  }

  export type Password_reset_tokensCountAggregateInputType = {
    email?: true
    token?: true
    created_at?: true
    _all?: true
  }

  export type Password_reset_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to aggregate.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_reset_tokens
    **/
    _count?: true | Password_reset_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_reset_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type GetPassword_reset_tokensAggregateType<T extends Password_reset_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_reset_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
      : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
  }




  export type password_reset_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokensWhereInput
    orderBy?: password_reset_tokensOrderByWithAggregationInput | password_reset_tokensOrderByWithAggregationInput[]
    by: Password_reset_tokensScalarFieldEnum[] | Password_reset_tokensScalarFieldEnum
    having?: password_reset_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_reset_tokensCountAggregateInputType | true
    _min?: Password_reset_tokensMinAggregateInputType
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type Password_reset_tokensGroupByOutputType = {
    email: string
    token: string
    created_at: Date | null
    _count: Password_reset_tokensCountAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  type GetPassword_reset_tokensGroupByPayload<T extends password_reset_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_reset_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_reset_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
        }
      >
    >


  export type password_reset_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    token?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["password_reset_tokens"]>



  export type password_reset_tokensSelectScalar = {
    email?: boolean
    token?: boolean
    created_at?: boolean
  }

  export type password_reset_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "token" | "created_at", ExtArgs["result"]["password_reset_tokens"]>

  export type $password_reset_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_reset_tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      email: string
      token: string
      created_at: Date | null
    }, ExtArgs["result"]["password_reset_tokens"]>
    composites: {}
  }

  type password_reset_tokensGetPayload<S extends boolean | null | undefined | password_reset_tokensDefaultArgs> = $Result.GetResult<Prisma.$password_reset_tokensPayload, S>

  type password_reset_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<password_reset_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Password_reset_tokensCountAggregateInputType | true
    }

  export interface password_reset_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_reset_tokens'], meta: { name: 'password_reset_tokens' } }
    /**
     * Find zero or one Password_reset_tokens that matches the filter.
     * @param {password_reset_tokensFindUniqueArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends password_reset_tokensFindUniqueArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password_reset_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {password_reset_tokensFindUniqueOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends password_reset_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends password_reset_tokensFindFirstArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends password_reset_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
     * 
     * // Get first 10 Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const password_reset_tokensWithEmailOnly = await prisma.password_reset_tokens.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends password_reset_tokensFindManyArgs>(args?: SelectSubset<T, password_reset_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password_reset_tokens.
     * @param {password_reset_tokensCreateArgs} args - Arguments to create a Password_reset_tokens.
     * @example
     * // Create one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.create({
     *   data: {
     *     // ... data to create a Password_reset_tokens
     *   }
     * })
     * 
     */
    create<T extends password_reset_tokensCreateArgs>(args: SelectSubset<T, password_reset_tokensCreateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Password_reset_tokens.
     * @param {password_reset_tokensCreateManyArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends password_reset_tokensCreateManyArgs>(args?: SelectSubset<T, password_reset_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Password_reset_tokens.
     * @param {password_reset_tokensDeleteArgs} args - Arguments to delete one Password_reset_tokens.
     * @example
     * // Delete one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.delete({
     *   where: {
     *     // ... filter to delete one Password_reset_tokens
     *   }
     * })
     * 
     */
    delete<T extends password_reset_tokensDeleteArgs>(args: SelectSubset<T, password_reset_tokensDeleteArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password_reset_tokens.
     * @param {password_reset_tokensUpdateArgs} args - Arguments to update one Password_reset_tokens.
     * @example
     * // Update one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends password_reset_tokensUpdateArgs>(args: SelectSubset<T, password_reset_tokensUpdateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Password_reset_tokens.
     * @param {password_reset_tokensDeleteManyArgs} args - Arguments to filter Password_reset_tokens to delete.
     * @example
     * // Delete a few Password_reset_tokens
     * const { count } = await prisma.password_reset_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends password_reset_tokensDeleteManyArgs>(args?: SelectSubset<T, password_reset_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends password_reset_tokensUpdateManyArgs>(args: SelectSubset<T, password_reset_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Password_reset_tokens.
     * @param {password_reset_tokensUpsertArgs} args - Arguments to update or create a Password_reset_tokens.
     * @example
     * // Update or create a Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.upsert({
     *   create: {
     *     // ... data to create a Password_reset_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to update
     *   }
     * })
     */
    upsert<T extends password_reset_tokensUpsertArgs>(args: SelectSubset<T, password_reset_tokensUpsertArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensCountArgs} args - Arguments to filter Password_reset_tokens to count.
     * @example
     * // Count the number of Password_reset_tokens
     * const count = await prisma.password_reset_tokens.count({
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to count
     *   }
     * })
    **/
    count<T extends password_reset_tokensCountArgs>(
      args?: Subset<T, password_reset_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_reset_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_reset_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Password_reset_tokensAggregateArgs>(args: Subset<T, Password_reset_tokensAggregateArgs>): Prisma.PrismaPromise<GetPassword_reset_tokensAggregateType<T>>

    /**
     * Group by Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensGroupByArgs} args - Group by arguments.
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
      T extends password_reset_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_reset_tokensGroupByArgs['orderBy'] }
        : { orderBy?: password_reset_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, password_reset_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_reset_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_reset_tokens model
   */
  readonly fields: password_reset_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_reset_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_reset_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the password_reset_tokens model
   */
  interface password_reset_tokensFieldRefs {
    readonly email: FieldRef<"password_reset_tokens", 'String'>
    readonly token: FieldRef<"password_reset_tokens", 'String'>
    readonly created_at: FieldRef<"password_reset_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * password_reset_tokens findUnique
   */
  export type password_reset_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findUniqueOrThrow
   */
  export type password_reset_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findFirst
   */
  export type password_reset_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findFirstOrThrow
   */
  export type password_reset_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findMany
   */
  export type password_reset_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens create
   */
  export type password_reset_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The data needed to create a password_reset_tokens.
     */
    data: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
  }

  /**
   * password_reset_tokens createMany
   */
  export type password_reset_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokensCreateManyInput | password_reset_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * password_reset_tokens update
   */
  export type password_reset_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The data needed to update a password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
    /**
     * Choose, which password_reset_tokens to update.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens updateMany
   */
  export type password_reset_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
  }

  /**
   * password_reset_tokens upsert
   */
  export type password_reset_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The filter to search for the password_reset_tokens to update in case it exists.
     */
    where: password_reset_tokensWhereUniqueInput
    /**
     * In case the password_reset_tokens found by the `where` argument doesn't exist, create a new password_reset_tokens with this data.
     */
    create: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
    /**
     * In case the password_reset_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
  }

  /**
   * password_reset_tokens delete
   */
  export type password_reset_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Filter which password_reset_tokens to delete.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens deleteMany
   */
  export type password_reset_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to delete
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to delete.
     */
    limit?: number
  }

  /**
   * password_reset_tokens without action
   */
  export type password_reset_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
  }


  /**
   * Model personal_access_tokens
   */

  export type AggregatePersonal_access_tokens = {
    _count: Personal_access_tokensCountAggregateOutputType | null
    _avg: Personal_access_tokensAvgAggregateOutputType | null
    _sum: Personal_access_tokensSumAggregateOutputType | null
    _min: Personal_access_tokensMinAggregateOutputType | null
    _max: Personal_access_tokensMaxAggregateOutputType | null
  }

  export type Personal_access_tokensAvgAggregateOutputType = {
    id: number | null
    tokenable_id: number | null
  }

  export type Personal_access_tokensSumAggregateOutputType = {
    id: bigint | null
    tokenable_id: bigint | null
  }

  export type Personal_access_tokensMinAggregateOutputType = {
    id: bigint | null
    tokenable_type: string | null
    tokenable_id: bigint | null
    name: string | null
    token: string | null
    abilities: string | null
    last_used_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Personal_access_tokensMaxAggregateOutputType = {
    id: bigint | null
    tokenable_type: string | null
    tokenable_id: bigint | null
    name: string | null
    token: string | null
    abilities: string | null
    last_used_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Personal_access_tokensCountAggregateOutputType = {
    id: number
    tokenable_type: number
    tokenable_id: number
    name: number
    token: number
    abilities: number
    last_used_at: number
    expires_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Personal_access_tokensAvgAggregateInputType = {
    id?: true
    tokenable_id?: true
  }

  export type Personal_access_tokensSumAggregateInputType = {
    id?: true
    tokenable_id?: true
  }

  export type Personal_access_tokensMinAggregateInputType = {
    id?: true
    tokenable_type?: true
    tokenable_id?: true
    name?: true
    token?: true
    abilities?: true
    last_used_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Personal_access_tokensMaxAggregateInputType = {
    id?: true
    tokenable_type?: true
    tokenable_id?: true
    name?: true
    token?: true
    abilities?: true
    last_used_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Personal_access_tokensCountAggregateInputType = {
    id?: true
    tokenable_type?: true
    tokenable_id?: true
    name?: true
    token?: true
    abilities?: true
    last_used_at?: true
    expires_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Personal_access_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personal_access_tokens to aggregate.
     */
    where?: personal_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personal_access_tokens to fetch.
     */
    orderBy?: personal_access_tokensOrderByWithRelationInput | personal_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: personal_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personal_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personal_access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned personal_access_tokens
    **/
    _count?: true | Personal_access_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Personal_access_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Personal_access_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Personal_access_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Personal_access_tokensMaxAggregateInputType
  }

  export type GetPersonal_access_tokensAggregateType<T extends Personal_access_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonal_access_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonal_access_tokens[P]>
      : GetScalarType<T[P], AggregatePersonal_access_tokens[P]>
  }




  export type personal_access_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: personal_access_tokensWhereInput
    orderBy?: personal_access_tokensOrderByWithAggregationInput | personal_access_tokensOrderByWithAggregationInput[]
    by: Personal_access_tokensScalarFieldEnum[] | Personal_access_tokensScalarFieldEnum
    having?: personal_access_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Personal_access_tokensCountAggregateInputType | true
    _avg?: Personal_access_tokensAvgAggregateInputType
    _sum?: Personal_access_tokensSumAggregateInputType
    _min?: Personal_access_tokensMinAggregateInputType
    _max?: Personal_access_tokensMaxAggregateInputType
  }

  export type Personal_access_tokensGroupByOutputType = {
    id: bigint
    tokenable_type: string
    tokenable_id: bigint
    name: string
    token: string
    abilities: string | null
    last_used_at: Date | null
    expires_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: Personal_access_tokensCountAggregateOutputType | null
    _avg: Personal_access_tokensAvgAggregateOutputType | null
    _sum: Personal_access_tokensSumAggregateOutputType | null
    _min: Personal_access_tokensMinAggregateOutputType | null
    _max: Personal_access_tokensMaxAggregateOutputType | null
  }

  type GetPersonal_access_tokensGroupByPayload<T extends personal_access_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Personal_access_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Personal_access_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Personal_access_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Personal_access_tokensGroupByOutputType[P]>
        }
      >
    >


  export type personal_access_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenable_type?: boolean
    tokenable_id?: boolean
    name?: boolean
    token?: boolean
    abilities?: boolean
    last_used_at?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["personal_access_tokens"]>



  export type personal_access_tokensSelectScalar = {
    id?: boolean
    tokenable_type?: boolean
    tokenable_id?: boolean
    name?: boolean
    token?: boolean
    abilities?: boolean
    last_used_at?: boolean
    expires_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type personal_access_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenable_type" | "tokenable_id" | "name" | "token" | "abilities" | "last_used_at" | "expires_at" | "created_at" | "updated_at", ExtArgs["result"]["personal_access_tokens"]>

  export type $personal_access_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "personal_access_tokens"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      tokenable_type: string
      tokenable_id: bigint
      name: string
      token: string
      abilities: string | null
      last_used_at: Date | null
      expires_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["personal_access_tokens"]>
    composites: {}
  }

  type personal_access_tokensGetPayload<S extends boolean | null | undefined | personal_access_tokensDefaultArgs> = $Result.GetResult<Prisma.$personal_access_tokensPayload, S>

  type personal_access_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<personal_access_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Personal_access_tokensCountAggregateInputType | true
    }

  export interface personal_access_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['personal_access_tokens'], meta: { name: 'personal_access_tokens' } }
    /**
     * Find zero or one Personal_access_tokens that matches the filter.
     * @param {personal_access_tokensFindUniqueArgs} args - Arguments to find a Personal_access_tokens
     * @example
     * // Get one Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personal_access_tokensFindUniqueArgs>(args: SelectSubset<T, personal_access_tokensFindUniqueArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personal_access_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personal_access_tokensFindUniqueOrThrowArgs} args - Arguments to find a Personal_access_tokens
     * @example
     * // Get one Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personal_access_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, personal_access_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_access_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensFindFirstArgs} args - Arguments to find a Personal_access_tokens
     * @example
     * // Get one Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personal_access_tokensFindFirstArgs>(args?: SelectSubset<T, personal_access_tokensFindFirstArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personal_access_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensFindFirstOrThrowArgs} args - Arguments to find a Personal_access_tokens
     * @example
     * // Get one Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personal_access_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, personal_access_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personal_access_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findMany()
     * 
     * // Get first 10 Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personal_access_tokensWithIdOnly = await prisma.personal_access_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends personal_access_tokensFindManyArgs>(args?: SelectSubset<T, personal_access_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personal_access_tokens.
     * @param {personal_access_tokensCreateArgs} args - Arguments to create a Personal_access_tokens.
     * @example
     * // Create one Personal_access_tokens
     * const Personal_access_tokens = await prisma.personal_access_tokens.create({
     *   data: {
     *     // ... data to create a Personal_access_tokens
     *   }
     * })
     * 
     */
    create<T extends personal_access_tokensCreateArgs>(args: SelectSubset<T, personal_access_tokensCreateArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personal_access_tokens.
     * @param {personal_access_tokensCreateManyArgs} args - Arguments to create many Personal_access_tokens.
     * @example
     * // Create many Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends personal_access_tokensCreateManyArgs>(args?: SelectSubset<T, personal_access_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Personal_access_tokens.
     * @param {personal_access_tokensDeleteArgs} args - Arguments to delete one Personal_access_tokens.
     * @example
     * // Delete one Personal_access_tokens
     * const Personal_access_tokens = await prisma.personal_access_tokens.delete({
     *   where: {
     *     // ... filter to delete one Personal_access_tokens
     *   }
     * })
     * 
     */
    delete<T extends personal_access_tokensDeleteArgs>(args: SelectSubset<T, personal_access_tokensDeleteArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personal_access_tokens.
     * @param {personal_access_tokensUpdateArgs} args - Arguments to update one Personal_access_tokens.
     * @example
     * // Update one Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends personal_access_tokensUpdateArgs>(args: SelectSubset<T, personal_access_tokensUpdateArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personal_access_tokens.
     * @param {personal_access_tokensDeleteManyArgs} args - Arguments to filter Personal_access_tokens to delete.
     * @example
     * // Delete a few Personal_access_tokens
     * const { count } = await prisma.personal_access_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends personal_access_tokensDeleteManyArgs>(args?: SelectSubset<T, personal_access_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personal_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends personal_access_tokensUpdateManyArgs>(args: SelectSubset<T, personal_access_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Personal_access_tokens.
     * @param {personal_access_tokensUpsertArgs} args - Arguments to update or create a Personal_access_tokens.
     * @example
     * // Update or create a Personal_access_tokens
     * const personal_access_tokens = await prisma.personal_access_tokens.upsert({
     *   create: {
     *     // ... data to create a Personal_access_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personal_access_tokens we want to update
     *   }
     * })
     */
    upsert<T extends personal_access_tokensUpsertArgs>(args: SelectSubset<T, personal_access_tokensUpsertArgs<ExtArgs>>): Prisma__personal_access_tokensClient<$Result.GetResult<Prisma.$personal_access_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personal_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensCountArgs} args - Arguments to filter Personal_access_tokens to count.
     * @example
     * // Count the number of Personal_access_tokens
     * const count = await prisma.personal_access_tokens.count({
     *   where: {
     *     // ... the filter for the Personal_access_tokens we want to count
     *   }
     * })
    **/
    count<T extends personal_access_tokensCountArgs>(
      args?: Subset<T, personal_access_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Personal_access_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personal_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Personal_access_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Personal_access_tokensAggregateArgs>(args: Subset<T, Personal_access_tokensAggregateArgs>): Prisma.PrismaPromise<GetPersonal_access_tokensAggregateType<T>>

    /**
     * Group by Personal_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personal_access_tokensGroupByArgs} args - Group by arguments.
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
      T extends personal_access_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: personal_access_tokensGroupByArgs['orderBy'] }
        : { orderBy?: personal_access_tokensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, personal_access_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonal_access_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the personal_access_tokens model
   */
  readonly fields: personal_access_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for personal_access_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__personal_access_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the personal_access_tokens model
   */
  interface personal_access_tokensFieldRefs {
    readonly id: FieldRef<"personal_access_tokens", 'BigInt'>
    readonly tokenable_type: FieldRef<"personal_access_tokens", 'String'>
    readonly tokenable_id: FieldRef<"personal_access_tokens", 'BigInt'>
    readonly name: FieldRef<"personal_access_tokens", 'String'>
    readonly token: FieldRef<"personal_access_tokens", 'String'>
    readonly abilities: FieldRef<"personal_access_tokens", 'String'>
    readonly last_used_at: FieldRef<"personal_access_tokens", 'DateTime'>
    readonly expires_at: FieldRef<"personal_access_tokens", 'DateTime'>
    readonly created_at: FieldRef<"personal_access_tokens", 'DateTime'>
    readonly updated_at: FieldRef<"personal_access_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * personal_access_tokens findUnique
   */
  export type personal_access_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which personal_access_tokens to fetch.
     */
    where: personal_access_tokensWhereUniqueInput
  }

  /**
   * personal_access_tokens findUniqueOrThrow
   */
  export type personal_access_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which personal_access_tokens to fetch.
     */
    where: personal_access_tokensWhereUniqueInput
  }

  /**
   * personal_access_tokens findFirst
   */
  export type personal_access_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which personal_access_tokens to fetch.
     */
    where?: personal_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personal_access_tokens to fetch.
     */
    orderBy?: personal_access_tokensOrderByWithRelationInput | personal_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personal_access_tokens.
     */
    cursor?: personal_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personal_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personal_access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personal_access_tokens.
     */
    distinct?: Personal_access_tokensScalarFieldEnum | Personal_access_tokensScalarFieldEnum[]
  }

  /**
   * personal_access_tokens findFirstOrThrow
   */
  export type personal_access_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which personal_access_tokens to fetch.
     */
    where?: personal_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personal_access_tokens to fetch.
     */
    orderBy?: personal_access_tokensOrderByWithRelationInput | personal_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for personal_access_tokens.
     */
    cursor?: personal_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personal_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personal_access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of personal_access_tokens.
     */
    distinct?: Personal_access_tokensScalarFieldEnum | Personal_access_tokensScalarFieldEnum[]
  }

  /**
   * personal_access_tokens findMany
   */
  export type personal_access_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter, which personal_access_tokens to fetch.
     */
    where?: personal_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of personal_access_tokens to fetch.
     */
    orderBy?: personal_access_tokensOrderByWithRelationInput | personal_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing personal_access_tokens.
     */
    cursor?: personal_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` personal_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` personal_access_tokens.
     */
    skip?: number
    distinct?: Personal_access_tokensScalarFieldEnum | Personal_access_tokensScalarFieldEnum[]
  }

  /**
   * personal_access_tokens create
   */
  export type personal_access_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * The data needed to create a personal_access_tokens.
     */
    data: XOR<personal_access_tokensCreateInput, personal_access_tokensUncheckedCreateInput>
  }

  /**
   * personal_access_tokens createMany
   */
  export type personal_access_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many personal_access_tokens.
     */
    data: personal_access_tokensCreateManyInput | personal_access_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * personal_access_tokens update
   */
  export type personal_access_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * The data needed to update a personal_access_tokens.
     */
    data: XOR<personal_access_tokensUpdateInput, personal_access_tokensUncheckedUpdateInput>
    /**
     * Choose, which personal_access_tokens to update.
     */
    where: personal_access_tokensWhereUniqueInput
  }

  /**
   * personal_access_tokens updateMany
   */
  export type personal_access_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update personal_access_tokens.
     */
    data: XOR<personal_access_tokensUpdateManyMutationInput, personal_access_tokensUncheckedUpdateManyInput>
    /**
     * Filter which personal_access_tokens to update
     */
    where?: personal_access_tokensWhereInput
    /**
     * Limit how many personal_access_tokens to update.
     */
    limit?: number
  }

  /**
   * personal_access_tokens upsert
   */
  export type personal_access_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * The filter to search for the personal_access_tokens to update in case it exists.
     */
    where: personal_access_tokensWhereUniqueInput
    /**
     * In case the personal_access_tokens found by the `where` argument doesn't exist, create a new personal_access_tokens with this data.
     */
    create: XOR<personal_access_tokensCreateInput, personal_access_tokensUncheckedCreateInput>
    /**
     * In case the personal_access_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<personal_access_tokensUpdateInput, personal_access_tokensUncheckedUpdateInput>
  }

  /**
   * personal_access_tokens delete
   */
  export type personal_access_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
    /**
     * Filter which personal_access_tokens to delete.
     */
    where: personal_access_tokensWhereUniqueInput
  }

  /**
   * personal_access_tokens deleteMany
   */
  export type personal_access_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which personal_access_tokens to delete
     */
    where?: personal_access_tokensWhereInput
    /**
     * Limit how many personal_access_tokens to delete.
     */
    limit?: number
  }

  /**
   * personal_access_tokens without action
   */
  export type personal_access_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personal_access_tokens
     */
    select?: personal_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the personal_access_tokens
     */
    omit?: personal_access_tokensOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: bigint | null
  }

  export type UsersMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    email_verified_at: Date | null
    password: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    email: string | null
    email_verified_at: Date | null
    password: string | null
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    email_verified_at: number
    password: number
    remember_token: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    email_verified_at?: true
    password?: true
    remember_token?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: bigint
    name: string
    email: string
    email_verified_at: Date | null
    password: string
    remember_token: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    email_verified_at?: boolean
    password?: boolean
    remember_token?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "email_verified_at" | "password" | "remember_token" | "created_at" | "updated_at", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      email: string
      email_verified_at: Date | null
      password: string
      remember_token: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'BigInt'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly email_verified_at: FieldRef<"users", 'DateTime'>
    readonly password: FieldRef<"users", 'String'>
    readonly remember_token: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model MaintenanceLog
   */

  export type AggregateMaintenanceLog = {
    _count: MaintenanceLogCountAggregateOutputType | null
    _avg: MaintenanceLogAvgAggregateOutputType | null
    _sum: MaintenanceLogSumAggregateOutputType | null
    _min: MaintenanceLogMinAggregateOutputType | null
    _max: MaintenanceLogMaxAggregateOutputType | null
  }

  export type MaintenanceLogAvgAggregateOutputType = {
    id: number | null
    truck_id: number | null
    service_mileage: number | null
    next_service_at: number | null
  }

  export type MaintenanceLogSumAggregateOutputType = {
    id: bigint | null
    truck_id: bigint | null
    service_mileage: number | null
    next_service_at: number | null
  }

  export type MaintenanceLogMinAggregateOutputType = {
    id: bigint | null
    truck_id: bigint | null
    type: string | null
    service_mileage: number | null
    next_service_at: number | null
    description: string | null
    created_at: Date | null
  }

  export type MaintenanceLogMaxAggregateOutputType = {
    id: bigint | null
    truck_id: bigint | null
    type: string | null
    service_mileage: number | null
    next_service_at: number | null
    description: string | null
    created_at: Date | null
  }

  export type MaintenanceLogCountAggregateOutputType = {
    id: number
    truck_id: number
    type: number
    service_mileage: number
    next_service_at: number
    description: number
    created_at: number
    _all: number
  }


  export type MaintenanceLogAvgAggregateInputType = {
    id?: true
    truck_id?: true
    service_mileage?: true
    next_service_at?: true
  }

  export type MaintenanceLogSumAggregateInputType = {
    id?: true
    truck_id?: true
    service_mileage?: true
    next_service_at?: true
  }

  export type MaintenanceLogMinAggregateInputType = {
    id?: true
    truck_id?: true
    type?: true
    service_mileage?: true
    next_service_at?: true
    description?: true
    created_at?: true
  }

  export type MaintenanceLogMaxAggregateInputType = {
    id?: true
    truck_id?: true
    type?: true
    service_mileage?: true
    next_service_at?: true
    description?: true
    created_at?: true
  }

  export type MaintenanceLogCountAggregateInputType = {
    id?: true
    truck_id?: true
    type?: true
    service_mileage?: true
    next_service_at?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type MaintenanceLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceLog to aggregate.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceLogs
    **/
    _count?: true | MaintenanceLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceLogMaxAggregateInputType
  }

  export type GetMaintenanceLogAggregateType<T extends MaintenanceLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceLog[P]>
      : GetScalarType<T[P], AggregateMaintenanceLog[P]>
  }




  export type MaintenanceLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceLogWhereInput
    orderBy?: MaintenanceLogOrderByWithAggregationInput | MaintenanceLogOrderByWithAggregationInput[]
    by: MaintenanceLogScalarFieldEnum[] | MaintenanceLogScalarFieldEnum
    having?: MaintenanceLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceLogCountAggregateInputType | true
    _avg?: MaintenanceLogAvgAggregateInputType
    _sum?: MaintenanceLogSumAggregateInputType
    _min?: MaintenanceLogMinAggregateInputType
    _max?: MaintenanceLogMaxAggregateInputType
  }

  export type MaintenanceLogGroupByOutputType = {
    id: bigint
    truck_id: bigint
    type: string
    service_mileage: number
    next_service_at: number
    description: string | null
    created_at: Date
    _count: MaintenanceLogCountAggregateOutputType | null
    _avg: MaintenanceLogAvgAggregateOutputType | null
    _sum: MaintenanceLogSumAggregateOutputType | null
    _min: MaintenanceLogMinAggregateOutputType | null
    _max: MaintenanceLogMaxAggregateOutputType | null
  }

  type GetMaintenanceLogGroupByPayload<T extends MaintenanceLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceLogGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceLogGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    truck_id?: boolean
    type?: boolean
    service_mileage?: boolean
    next_service_at?: boolean
    description?: boolean
    created_at?: boolean
    truck?: boolean | TruckDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceLog"]>



  export type MaintenanceLogSelectScalar = {
    id?: boolean
    truck_id?: boolean
    type?: boolean
    service_mileage?: boolean
    next_service_at?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type MaintenanceLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "truck_id" | "type" | "service_mileage" | "next_service_at" | "description" | "created_at", ExtArgs["result"]["maintenanceLog"]>
  export type MaintenanceLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    truck?: boolean | TruckDefaultArgs<ExtArgs>
  }

  export type $MaintenanceLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceLog"
    objects: {
      truck: Prisma.$TruckPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      truck_id: bigint
      type: string
      service_mileage: number
      next_service_at: number
      description: string | null
      created_at: Date
    }, ExtArgs["result"]["maintenanceLog"]>
    composites: {}
  }

  type MaintenanceLogGetPayload<S extends boolean | null | undefined | MaintenanceLogDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceLogPayload, S>

  type MaintenanceLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceLogCountAggregateInputType | true
    }

  export interface MaintenanceLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceLog'], meta: { name: 'MaintenanceLog' } }
    /**
     * Find zero or one MaintenanceLog that matches the filter.
     * @param {MaintenanceLogFindUniqueArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceLogFindUniqueArgs>(args: SelectSubset<T, MaintenanceLogFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceLogFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindFirstArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceLogFindFirstArgs>(args?: SelectSubset<T, MaintenanceLogFindFirstArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindFirstOrThrowArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceLogs
     * const maintenanceLogs = await prisma.maintenanceLog.findMany()
     * 
     * // Get first 10 MaintenanceLogs
     * const maintenanceLogs = await prisma.maintenanceLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceLogWithIdOnly = await prisma.maintenanceLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceLogFindManyArgs>(args?: SelectSubset<T, MaintenanceLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceLog.
     * @param {MaintenanceLogCreateArgs} args - Arguments to create a MaintenanceLog.
     * @example
     * // Create one MaintenanceLog
     * const MaintenanceLog = await prisma.maintenanceLog.create({
     *   data: {
     *     // ... data to create a MaintenanceLog
     *   }
     * })
     * 
     */
    create<T extends MaintenanceLogCreateArgs>(args: SelectSubset<T, MaintenanceLogCreateArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceLogs.
     * @param {MaintenanceLogCreateManyArgs} args - Arguments to create many MaintenanceLogs.
     * @example
     * // Create many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceLogCreateManyArgs>(args?: SelectSubset<T, MaintenanceLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MaintenanceLog.
     * @param {MaintenanceLogDeleteArgs} args - Arguments to delete one MaintenanceLog.
     * @example
     * // Delete one MaintenanceLog
     * const MaintenanceLog = await prisma.maintenanceLog.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceLog
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceLogDeleteArgs>(args: SelectSubset<T, MaintenanceLogDeleteArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceLog.
     * @param {MaintenanceLogUpdateArgs} args - Arguments to update one MaintenanceLog.
     * @example
     * // Update one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceLogUpdateArgs>(args: SelectSubset<T, MaintenanceLogUpdateArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceLogs.
     * @param {MaintenanceLogDeleteManyArgs} args - Arguments to filter MaintenanceLogs to delete.
     * @example
     * // Delete a few MaintenanceLogs
     * const { count } = await prisma.maintenanceLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceLogDeleteManyArgs>(args?: SelectSubset<T, MaintenanceLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceLogUpdateManyArgs>(args: SelectSubset<T, MaintenanceLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaintenanceLog.
     * @param {MaintenanceLogUpsertArgs} args - Arguments to update or create a MaintenanceLog.
     * @example
     * // Update or create a MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.upsert({
     *   create: {
     *     // ... data to create a MaintenanceLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceLog we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceLogUpsertArgs>(args: SelectSubset<T, MaintenanceLogUpsertArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogCountArgs} args - Arguments to filter MaintenanceLogs to count.
     * @example
     * // Count the number of MaintenanceLogs
     * const count = await prisma.maintenanceLog.count({
     *   where: {
     *     // ... the filter for the MaintenanceLogs we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceLogCountArgs>(
      args?: Subset<T, MaintenanceLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceLogAggregateArgs>(args: Subset<T, MaintenanceLogAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceLogAggregateType<T>>

    /**
     * Group by MaintenanceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceLogGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceLog model
   */
  readonly fields: MaintenanceLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    truck<T extends TruckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TruckDefaultArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaintenanceLog model
   */
  interface MaintenanceLogFieldRefs {
    readonly id: FieldRef<"MaintenanceLog", 'BigInt'>
    readonly truck_id: FieldRef<"MaintenanceLog", 'BigInt'>
    readonly type: FieldRef<"MaintenanceLog", 'String'>
    readonly service_mileage: FieldRef<"MaintenanceLog", 'Int'>
    readonly next_service_at: FieldRef<"MaintenanceLog", 'Int'>
    readonly description: FieldRef<"MaintenanceLog", 'String'>
    readonly created_at: FieldRef<"MaintenanceLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceLog findUnique
   */
  export type MaintenanceLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog findUniqueOrThrow
   */
  export type MaintenanceLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog findFirst
   */
  export type MaintenanceLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceLogs.
     */
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog findFirstOrThrow
   */
  export type MaintenanceLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceLogs.
     */
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog findMany
   */
  export type MaintenanceLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLogs to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog create
   */
  export type MaintenanceLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceLog.
     */
    data: XOR<MaintenanceLogCreateInput, MaintenanceLogUncheckedCreateInput>
  }

  /**
   * MaintenanceLog createMany
   */
  export type MaintenanceLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceLogs.
     */
    data: MaintenanceLogCreateManyInput | MaintenanceLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceLog update
   */
  export type MaintenanceLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceLog.
     */
    data: XOR<MaintenanceLogUpdateInput, MaintenanceLogUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceLog to update.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog updateMany
   */
  export type MaintenanceLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceLogs.
     */
    data: XOR<MaintenanceLogUpdateManyMutationInput, MaintenanceLogUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceLogs to update
     */
    where?: MaintenanceLogWhereInput
    /**
     * Limit how many MaintenanceLogs to update.
     */
    limit?: number
  }

  /**
   * MaintenanceLog upsert
   */
  export type MaintenanceLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceLog to update in case it exists.
     */
    where: MaintenanceLogWhereUniqueInput
    /**
     * In case the MaintenanceLog found by the `where` argument doesn't exist, create a new MaintenanceLog with this data.
     */
    create: XOR<MaintenanceLogCreateInput, MaintenanceLogUncheckedCreateInput>
    /**
     * In case the MaintenanceLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceLogUpdateInput, MaintenanceLogUncheckedUpdateInput>
  }

  /**
   * MaintenanceLog delete
   */
  export type MaintenanceLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceLog to delete.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog deleteMany
   */
  export type MaintenanceLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceLogs to delete
     */
    where?: MaintenanceLogWhereInput
    /**
     * Limit how many MaintenanceLogs to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceLog without action
   */
  export type MaintenanceLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
  }


  /**
   * Model TireChangeHistory
   */

  export type AggregateTireChangeHistory = {
    _count: TireChangeHistoryCountAggregateOutputType | null
    _avg: TireChangeHistoryAvgAggregateOutputType | null
    _sum: TireChangeHistorySumAggregateOutputType | null
    _min: TireChangeHistoryMinAggregateOutputType | null
    _max: TireChangeHistoryMaxAggregateOutputType | null
  }

  export type TireChangeHistoryAvgAggregateOutputType = {
    id: number | null
    truck_id: number | null
    mileage_at_change: number | null
  }

  export type TireChangeHistorySumAggregateOutputType = {
    id: bigint | null
    truck_id: bigint | null
    mileage_at_change: number | null
  }

  export type TireChangeHistoryMinAggregateOutputType = {
    id: bigint | null
    truck_id: bigint | null
    change_date: Date | null
    mileage_at_change: number | null
    notes: string | null
  }

  export type TireChangeHistoryMaxAggregateOutputType = {
    id: bigint | null
    truck_id: bigint | null
    change_date: Date | null
    mileage_at_change: number | null
    notes: string | null
  }

  export type TireChangeHistoryCountAggregateOutputType = {
    id: number
    truck_id: number
    change_date: number
    mileage_at_change: number
    notes: number
    _all: number
  }


  export type TireChangeHistoryAvgAggregateInputType = {
    id?: true
    truck_id?: true
    mileage_at_change?: true
  }

  export type TireChangeHistorySumAggregateInputType = {
    id?: true
    truck_id?: true
    mileage_at_change?: true
  }

  export type TireChangeHistoryMinAggregateInputType = {
    id?: true
    truck_id?: true
    change_date?: true
    mileage_at_change?: true
    notes?: true
  }

  export type TireChangeHistoryMaxAggregateInputType = {
    id?: true
    truck_id?: true
    change_date?: true
    mileage_at_change?: true
    notes?: true
  }

  export type TireChangeHistoryCountAggregateInputType = {
    id?: true
    truck_id?: true
    change_date?: true
    mileage_at_change?: true
    notes?: true
    _all?: true
  }

  export type TireChangeHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TireChangeHistory to aggregate.
     */
    where?: TireChangeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireChangeHistories to fetch.
     */
    orderBy?: TireChangeHistoryOrderByWithRelationInput | TireChangeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TireChangeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireChangeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireChangeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TireChangeHistories
    **/
    _count?: true | TireChangeHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TireChangeHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TireChangeHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TireChangeHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TireChangeHistoryMaxAggregateInputType
  }

  export type GetTireChangeHistoryAggregateType<T extends TireChangeHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTireChangeHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTireChangeHistory[P]>
      : GetScalarType<T[P], AggregateTireChangeHistory[P]>
  }




  export type TireChangeHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TireChangeHistoryWhereInput
    orderBy?: TireChangeHistoryOrderByWithAggregationInput | TireChangeHistoryOrderByWithAggregationInput[]
    by: TireChangeHistoryScalarFieldEnum[] | TireChangeHistoryScalarFieldEnum
    having?: TireChangeHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TireChangeHistoryCountAggregateInputType | true
    _avg?: TireChangeHistoryAvgAggregateInputType
    _sum?: TireChangeHistorySumAggregateInputType
    _min?: TireChangeHistoryMinAggregateInputType
    _max?: TireChangeHistoryMaxAggregateInputType
  }

  export type TireChangeHistoryGroupByOutputType = {
    id: bigint
    truck_id: bigint
    change_date: Date
    mileage_at_change: number
    notes: string | null
    _count: TireChangeHistoryCountAggregateOutputType | null
    _avg: TireChangeHistoryAvgAggregateOutputType | null
    _sum: TireChangeHistorySumAggregateOutputType | null
    _min: TireChangeHistoryMinAggregateOutputType | null
    _max: TireChangeHistoryMaxAggregateOutputType | null
  }

  type GetTireChangeHistoryGroupByPayload<T extends TireChangeHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TireChangeHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TireChangeHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TireChangeHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TireChangeHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TireChangeHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    truck_id?: boolean
    change_date?: boolean
    mileage_at_change?: boolean
    notes?: boolean
    truck?: boolean | TruckDefaultArgs<ExtArgs>
    tireItems?: boolean | TireChangeHistory$tireItemsArgs<ExtArgs>
    _count?: boolean | TireChangeHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tireChangeHistory"]>



  export type TireChangeHistorySelectScalar = {
    id?: boolean
    truck_id?: boolean
    change_date?: boolean
    mileage_at_change?: boolean
    notes?: boolean
  }

  export type TireChangeHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "truck_id" | "change_date" | "mileage_at_change" | "notes", ExtArgs["result"]["tireChangeHistory"]>
  export type TireChangeHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    truck?: boolean | TruckDefaultArgs<ExtArgs>
    tireItems?: boolean | TireChangeHistory$tireItemsArgs<ExtArgs>
    _count?: boolean | TireChangeHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TireChangeHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TireChangeHistory"
    objects: {
      truck: Prisma.$TruckPayload<ExtArgs>
      tireItems: Prisma.$TireItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      truck_id: bigint
      change_date: Date
      mileage_at_change: number
      notes: string | null
    }, ExtArgs["result"]["tireChangeHistory"]>
    composites: {}
  }

  type TireChangeHistoryGetPayload<S extends boolean | null | undefined | TireChangeHistoryDefaultArgs> = $Result.GetResult<Prisma.$TireChangeHistoryPayload, S>

  type TireChangeHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TireChangeHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TireChangeHistoryCountAggregateInputType | true
    }

  export interface TireChangeHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TireChangeHistory'], meta: { name: 'TireChangeHistory' } }
    /**
     * Find zero or one TireChangeHistory that matches the filter.
     * @param {TireChangeHistoryFindUniqueArgs} args - Arguments to find a TireChangeHistory
     * @example
     * // Get one TireChangeHistory
     * const tireChangeHistory = await prisma.tireChangeHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TireChangeHistoryFindUniqueArgs>(args: SelectSubset<T, TireChangeHistoryFindUniqueArgs<ExtArgs>>): Prisma__TireChangeHistoryClient<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TireChangeHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TireChangeHistoryFindUniqueOrThrowArgs} args - Arguments to find a TireChangeHistory
     * @example
     * // Get one TireChangeHistory
     * const tireChangeHistory = await prisma.tireChangeHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TireChangeHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TireChangeHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TireChangeHistoryClient<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TireChangeHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireChangeHistoryFindFirstArgs} args - Arguments to find a TireChangeHistory
     * @example
     * // Get one TireChangeHistory
     * const tireChangeHistory = await prisma.tireChangeHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TireChangeHistoryFindFirstArgs>(args?: SelectSubset<T, TireChangeHistoryFindFirstArgs<ExtArgs>>): Prisma__TireChangeHistoryClient<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TireChangeHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireChangeHistoryFindFirstOrThrowArgs} args - Arguments to find a TireChangeHistory
     * @example
     * // Get one TireChangeHistory
     * const tireChangeHistory = await prisma.tireChangeHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TireChangeHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TireChangeHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TireChangeHistoryClient<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TireChangeHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireChangeHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TireChangeHistories
     * const tireChangeHistories = await prisma.tireChangeHistory.findMany()
     * 
     * // Get first 10 TireChangeHistories
     * const tireChangeHistories = await prisma.tireChangeHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tireChangeHistoryWithIdOnly = await prisma.tireChangeHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TireChangeHistoryFindManyArgs>(args?: SelectSubset<T, TireChangeHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TireChangeHistory.
     * @param {TireChangeHistoryCreateArgs} args - Arguments to create a TireChangeHistory.
     * @example
     * // Create one TireChangeHistory
     * const TireChangeHistory = await prisma.tireChangeHistory.create({
     *   data: {
     *     // ... data to create a TireChangeHistory
     *   }
     * })
     * 
     */
    create<T extends TireChangeHistoryCreateArgs>(args: SelectSubset<T, TireChangeHistoryCreateArgs<ExtArgs>>): Prisma__TireChangeHistoryClient<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TireChangeHistories.
     * @param {TireChangeHistoryCreateManyArgs} args - Arguments to create many TireChangeHistories.
     * @example
     * // Create many TireChangeHistories
     * const tireChangeHistory = await prisma.tireChangeHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TireChangeHistoryCreateManyArgs>(args?: SelectSubset<T, TireChangeHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TireChangeHistory.
     * @param {TireChangeHistoryDeleteArgs} args - Arguments to delete one TireChangeHistory.
     * @example
     * // Delete one TireChangeHistory
     * const TireChangeHistory = await prisma.tireChangeHistory.delete({
     *   where: {
     *     // ... filter to delete one TireChangeHistory
     *   }
     * })
     * 
     */
    delete<T extends TireChangeHistoryDeleteArgs>(args: SelectSubset<T, TireChangeHistoryDeleteArgs<ExtArgs>>): Prisma__TireChangeHistoryClient<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TireChangeHistory.
     * @param {TireChangeHistoryUpdateArgs} args - Arguments to update one TireChangeHistory.
     * @example
     * // Update one TireChangeHistory
     * const tireChangeHistory = await prisma.tireChangeHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TireChangeHistoryUpdateArgs>(args: SelectSubset<T, TireChangeHistoryUpdateArgs<ExtArgs>>): Prisma__TireChangeHistoryClient<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TireChangeHistories.
     * @param {TireChangeHistoryDeleteManyArgs} args - Arguments to filter TireChangeHistories to delete.
     * @example
     * // Delete a few TireChangeHistories
     * const { count } = await prisma.tireChangeHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TireChangeHistoryDeleteManyArgs>(args?: SelectSubset<T, TireChangeHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TireChangeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireChangeHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TireChangeHistories
     * const tireChangeHistory = await prisma.tireChangeHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TireChangeHistoryUpdateManyArgs>(args: SelectSubset<T, TireChangeHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TireChangeHistory.
     * @param {TireChangeHistoryUpsertArgs} args - Arguments to update or create a TireChangeHistory.
     * @example
     * // Update or create a TireChangeHistory
     * const tireChangeHistory = await prisma.tireChangeHistory.upsert({
     *   create: {
     *     // ... data to create a TireChangeHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TireChangeHistory we want to update
     *   }
     * })
     */
    upsert<T extends TireChangeHistoryUpsertArgs>(args: SelectSubset<T, TireChangeHistoryUpsertArgs<ExtArgs>>): Prisma__TireChangeHistoryClient<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TireChangeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireChangeHistoryCountArgs} args - Arguments to filter TireChangeHistories to count.
     * @example
     * // Count the number of TireChangeHistories
     * const count = await prisma.tireChangeHistory.count({
     *   where: {
     *     // ... the filter for the TireChangeHistories we want to count
     *   }
     * })
    **/
    count<T extends TireChangeHistoryCountArgs>(
      args?: Subset<T, TireChangeHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TireChangeHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TireChangeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireChangeHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TireChangeHistoryAggregateArgs>(args: Subset<T, TireChangeHistoryAggregateArgs>): Prisma.PrismaPromise<GetTireChangeHistoryAggregateType<T>>

    /**
     * Group by TireChangeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireChangeHistoryGroupByArgs} args - Group by arguments.
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
      T extends TireChangeHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TireChangeHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TireChangeHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TireChangeHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTireChangeHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TireChangeHistory model
   */
  readonly fields: TireChangeHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TireChangeHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TireChangeHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    truck<T extends TruckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TruckDefaultArgs<ExtArgs>>): Prisma__TruckClient<$Result.GetResult<Prisma.$TruckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tireItems<T extends TireChangeHistory$tireItemsArgs<ExtArgs> = {}>(args?: Subset<T, TireChangeHistory$tireItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TireChangeHistory model
   */
  interface TireChangeHistoryFieldRefs {
    readonly id: FieldRef<"TireChangeHistory", 'BigInt'>
    readonly truck_id: FieldRef<"TireChangeHistory", 'BigInt'>
    readonly change_date: FieldRef<"TireChangeHistory", 'DateTime'>
    readonly mileage_at_change: FieldRef<"TireChangeHistory", 'Int'>
    readonly notes: FieldRef<"TireChangeHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TireChangeHistory findUnique
   */
  export type TireChangeHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TireChangeHistory to fetch.
     */
    where: TireChangeHistoryWhereUniqueInput
  }

  /**
   * TireChangeHistory findUniqueOrThrow
   */
  export type TireChangeHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TireChangeHistory to fetch.
     */
    where: TireChangeHistoryWhereUniqueInput
  }

  /**
   * TireChangeHistory findFirst
   */
  export type TireChangeHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TireChangeHistory to fetch.
     */
    where?: TireChangeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireChangeHistories to fetch.
     */
    orderBy?: TireChangeHistoryOrderByWithRelationInput | TireChangeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TireChangeHistories.
     */
    cursor?: TireChangeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireChangeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireChangeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TireChangeHistories.
     */
    distinct?: TireChangeHistoryScalarFieldEnum | TireChangeHistoryScalarFieldEnum[]
  }

  /**
   * TireChangeHistory findFirstOrThrow
   */
  export type TireChangeHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TireChangeHistory to fetch.
     */
    where?: TireChangeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireChangeHistories to fetch.
     */
    orderBy?: TireChangeHistoryOrderByWithRelationInput | TireChangeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TireChangeHistories.
     */
    cursor?: TireChangeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireChangeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireChangeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TireChangeHistories.
     */
    distinct?: TireChangeHistoryScalarFieldEnum | TireChangeHistoryScalarFieldEnum[]
  }

  /**
   * TireChangeHistory findMany
   */
  export type TireChangeHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TireChangeHistories to fetch.
     */
    where?: TireChangeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireChangeHistories to fetch.
     */
    orderBy?: TireChangeHistoryOrderByWithRelationInput | TireChangeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TireChangeHistories.
     */
    cursor?: TireChangeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireChangeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireChangeHistories.
     */
    skip?: number
    distinct?: TireChangeHistoryScalarFieldEnum | TireChangeHistoryScalarFieldEnum[]
  }

  /**
   * TireChangeHistory create
   */
  export type TireChangeHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TireChangeHistory.
     */
    data: XOR<TireChangeHistoryCreateInput, TireChangeHistoryUncheckedCreateInput>
  }

  /**
   * TireChangeHistory createMany
   */
  export type TireChangeHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TireChangeHistories.
     */
    data: TireChangeHistoryCreateManyInput | TireChangeHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TireChangeHistory update
   */
  export type TireChangeHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TireChangeHistory.
     */
    data: XOR<TireChangeHistoryUpdateInput, TireChangeHistoryUncheckedUpdateInput>
    /**
     * Choose, which TireChangeHistory to update.
     */
    where: TireChangeHistoryWhereUniqueInput
  }

  /**
   * TireChangeHistory updateMany
   */
  export type TireChangeHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TireChangeHistories.
     */
    data: XOR<TireChangeHistoryUpdateManyMutationInput, TireChangeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TireChangeHistories to update
     */
    where?: TireChangeHistoryWhereInput
    /**
     * Limit how many TireChangeHistories to update.
     */
    limit?: number
  }

  /**
   * TireChangeHistory upsert
   */
  export type TireChangeHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TireChangeHistory to update in case it exists.
     */
    where: TireChangeHistoryWhereUniqueInput
    /**
     * In case the TireChangeHistory found by the `where` argument doesn't exist, create a new TireChangeHistory with this data.
     */
    create: XOR<TireChangeHistoryCreateInput, TireChangeHistoryUncheckedCreateInput>
    /**
     * In case the TireChangeHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TireChangeHistoryUpdateInput, TireChangeHistoryUncheckedUpdateInput>
  }

  /**
   * TireChangeHistory delete
   */
  export type TireChangeHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter which TireChangeHistory to delete.
     */
    where: TireChangeHistoryWhereUniqueInput
  }

  /**
   * TireChangeHistory deleteMany
   */
  export type TireChangeHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TireChangeHistories to delete
     */
    where?: TireChangeHistoryWhereInput
    /**
     * Limit how many TireChangeHistories to delete.
     */
    limit?: number
  }

  /**
   * TireChangeHistory.tireItems
   */
  export type TireChangeHistory$tireItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    where?: TireItemWhereInput
    orderBy?: TireItemOrderByWithRelationInput | TireItemOrderByWithRelationInput[]
    cursor?: TireItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TireItemScalarFieldEnum | TireItemScalarFieldEnum[]
  }

  /**
   * TireChangeHistory without action
   */
  export type TireChangeHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireChangeHistory
     */
    select?: TireChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireChangeHistory
     */
    omit?: TireChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireChangeHistoryInclude<ExtArgs> | null
  }


  /**
   * Model TireBrand
   */

  export type AggregateTireBrand = {
    _count: TireBrandCountAggregateOutputType | null
    _avg: TireBrandAvgAggregateOutputType | null
    _sum: TireBrandSumAggregateOutputType | null
    _min: TireBrandMinAggregateOutputType | null
    _max: TireBrandMaxAggregateOutputType | null
  }

  export type TireBrandAvgAggregateOutputType = {
    id: number | null
  }

  export type TireBrandSumAggregateOutputType = {
    id: number | null
  }

  export type TireBrandMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TireBrandMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TireBrandCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TireBrandAvgAggregateInputType = {
    id?: true
  }

  export type TireBrandSumAggregateInputType = {
    id?: true
  }

  export type TireBrandMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TireBrandMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TireBrandCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TireBrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TireBrand to aggregate.
     */
    where?: TireBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireBrands to fetch.
     */
    orderBy?: TireBrandOrderByWithRelationInput | TireBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TireBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TireBrands
    **/
    _count?: true | TireBrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TireBrandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TireBrandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TireBrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TireBrandMaxAggregateInputType
  }

  export type GetTireBrandAggregateType<T extends TireBrandAggregateArgs> = {
        [P in keyof T & keyof AggregateTireBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTireBrand[P]>
      : GetScalarType<T[P], AggregateTireBrand[P]>
  }




  export type TireBrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TireBrandWhereInput
    orderBy?: TireBrandOrderByWithAggregationInput | TireBrandOrderByWithAggregationInput[]
    by: TireBrandScalarFieldEnum[] | TireBrandScalarFieldEnum
    having?: TireBrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TireBrandCountAggregateInputType | true
    _avg?: TireBrandAvgAggregateInputType
    _sum?: TireBrandSumAggregateInputType
    _min?: TireBrandMinAggregateInputType
    _max?: TireBrandMaxAggregateInputType
  }

  export type TireBrandGroupByOutputType = {
    id: number
    name: string
    _count: TireBrandCountAggregateOutputType | null
    _avg: TireBrandAvgAggregateOutputType | null
    _sum: TireBrandSumAggregateOutputType | null
    _min: TireBrandMinAggregateOutputType | null
    _max: TireBrandMaxAggregateOutputType | null
  }

  type GetTireBrandGroupByPayload<T extends TireBrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TireBrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TireBrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TireBrandGroupByOutputType[P]>
            : GetScalarType<T[P], TireBrandGroupByOutputType[P]>
        }
      >
    >


  export type TireBrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    items?: boolean | TireBrand$itemsArgs<ExtArgs>
    _count?: boolean | TireBrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tireBrand"]>



  export type TireBrandSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TireBrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tireBrand"]>
  export type TireBrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TireBrand$itemsArgs<ExtArgs>
    _count?: boolean | TireBrandCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TireBrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TireBrand"
    objects: {
      items: Prisma.$TireItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tireBrand"]>
    composites: {}
  }

  type TireBrandGetPayload<S extends boolean | null | undefined | TireBrandDefaultArgs> = $Result.GetResult<Prisma.$TireBrandPayload, S>

  type TireBrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TireBrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TireBrandCountAggregateInputType | true
    }

  export interface TireBrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TireBrand'], meta: { name: 'TireBrand' } }
    /**
     * Find zero or one TireBrand that matches the filter.
     * @param {TireBrandFindUniqueArgs} args - Arguments to find a TireBrand
     * @example
     * // Get one TireBrand
     * const tireBrand = await prisma.tireBrand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TireBrandFindUniqueArgs>(args: SelectSubset<T, TireBrandFindUniqueArgs<ExtArgs>>): Prisma__TireBrandClient<$Result.GetResult<Prisma.$TireBrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TireBrand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TireBrandFindUniqueOrThrowArgs} args - Arguments to find a TireBrand
     * @example
     * // Get one TireBrand
     * const tireBrand = await prisma.tireBrand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TireBrandFindUniqueOrThrowArgs>(args: SelectSubset<T, TireBrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TireBrandClient<$Result.GetResult<Prisma.$TireBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TireBrand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireBrandFindFirstArgs} args - Arguments to find a TireBrand
     * @example
     * // Get one TireBrand
     * const tireBrand = await prisma.tireBrand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TireBrandFindFirstArgs>(args?: SelectSubset<T, TireBrandFindFirstArgs<ExtArgs>>): Prisma__TireBrandClient<$Result.GetResult<Prisma.$TireBrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TireBrand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireBrandFindFirstOrThrowArgs} args - Arguments to find a TireBrand
     * @example
     * // Get one TireBrand
     * const tireBrand = await prisma.tireBrand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TireBrandFindFirstOrThrowArgs>(args?: SelectSubset<T, TireBrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__TireBrandClient<$Result.GetResult<Prisma.$TireBrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TireBrands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireBrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TireBrands
     * const tireBrands = await prisma.tireBrand.findMany()
     * 
     * // Get first 10 TireBrands
     * const tireBrands = await prisma.tireBrand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tireBrandWithIdOnly = await prisma.tireBrand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TireBrandFindManyArgs>(args?: SelectSubset<T, TireBrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TireBrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TireBrand.
     * @param {TireBrandCreateArgs} args - Arguments to create a TireBrand.
     * @example
     * // Create one TireBrand
     * const TireBrand = await prisma.tireBrand.create({
     *   data: {
     *     // ... data to create a TireBrand
     *   }
     * })
     * 
     */
    create<T extends TireBrandCreateArgs>(args: SelectSubset<T, TireBrandCreateArgs<ExtArgs>>): Prisma__TireBrandClient<$Result.GetResult<Prisma.$TireBrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TireBrands.
     * @param {TireBrandCreateManyArgs} args - Arguments to create many TireBrands.
     * @example
     * // Create many TireBrands
     * const tireBrand = await prisma.tireBrand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TireBrandCreateManyArgs>(args?: SelectSubset<T, TireBrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TireBrand.
     * @param {TireBrandDeleteArgs} args - Arguments to delete one TireBrand.
     * @example
     * // Delete one TireBrand
     * const TireBrand = await prisma.tireBrand.delete({
     *   where: {
     *     // ... filter to delete one TireBrand
     *   }
     * })
     * 
     */
    delete<T extends TireBrandDeleteArgs>(args: SelectSubset<T, TireBrandDeleteArgs<ExtArgs>>): Prisma__TireBrandClient<$Result.GetResult<Prisma.$TireBrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TireBrand.
     * @param {TireBrandUpdateArgs} args - Arguments to update one TireBrand.
     * @example
     * // Update one TireBrand
     * const tireBrand = await prisma.tireBrand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TireBrandUpdateArgs>(args: SelectSubset<T, TireBrandUpdateArgs<ExtArgs>>): Prisma__TireBrandClient<$Result.GetResult<Prisma.$TireBrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TireBrands.
     * @param {TireBrandDeleteManyArgs} args - Arguments to filter TireBrands to delete.
     * @example
     * // Delete a few TireBrands
     * const { count } = await prisma.tireBrand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TireBrandDeleteManyArgs>(args?: SelectSubset<T, TireBrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TireBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireBrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TireBrands
     * const tireBrand = await prisma.tireBrand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TireBrandUpdateManyArgs>(args: SelectSubset<T, TireBrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TireBrand.
     * @param {TireBrandUpsertArgs} args - Arguments to update or create a TireBrand.
     * @example
     * // Update or create a TireBrand
     * const tireBrand = await prisma.tireBrand.upsert({
     *   create: {
     *     // ... data to create a TireBrand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TireBrand we want to update
     *   }
     * })
     */
    upsert<T extends TireBrandUpsertArgs>(args: SelectSubset<T, TireBrandUpsertArgs<ExtArgs>>): Prisma__TireBrandClient<$Result.GetResult<Prisma.$TireBrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TireBrands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireBrandCountArgs} args - Arguments to filter TireBrands to count.
     * @example
     * // Count the number of TireBrands
     * const count = await prisma.tireBrand.count({
     *   where: {
     *     // ... the filter for the TireBrands we want to count
     *   }
     * })
    **/
    count<T extends TireBrandCountArgs>(
      args?: Subset<T, TireBrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TireBrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TireBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireBrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TireBrandAggregateArgs>(args: Subset<T, TireBrandAggregateArgs>): Prisma.PrismaPromise<GetTireBrandAggregateType<T>>

    /**
     * Group by TireBrand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireBrandGroupByArgs} args - Group by arguments.
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
      T extends TireBrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TireBrandGroupByArgs['orderBy'] }
        : { orderBy?: TireBrandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TireBrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTireBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TireBrand model
   */
  readonly fields: TireBrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TireBrand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TireBrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends TireBrand$itemsArgs<ExtArgs> = {}>(args?: Subset<T, TireBrand$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TireBrand model
   */
  interface TireBrandFieldRefs {
    readonly id: FieldRef<"TireBrand", 'Int'>
    readonly name: FieldRef<"TireBrand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TireBrand findUnique
   */
  export type TireBrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrand
     */
    select?: TireBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireBrand
     */
    omit?: TireBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireBrandInclude<ExtArgs> | null
    /**
     * Filter, which TireBrand to fetch.
     */
    where: TireBrandWhereUniqueInput
  }

  /**
   * TireBrand findUniqueOrThrow
   */
  export type TireBrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrand
     */
    select?: TireBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireBrand
     */
    omit?: TireBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireBrandInclude<ExtArgs> | null
    /**
     * Filter, which TireBrand to fetch.
     */
    where: TireBrandWhereUniqueInput
  }

  /**
   * TireBrand findFirst
   */
  export type TireBrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrand
     */
    select?: TireBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireBrand
     */
    omit?: TireBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireBrandInclude<ExtArgs> | null
    /**
     * Filter, which TireBrand to fetch.
     */
    where?: TireBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireBrands to fetch.
     */
    orderBy?: TireBrandOrderByWithRelationInput | TireBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TireBrands.
     */
    cursor?: TireBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TireBrands.
     */
    distinct?: TireBrandScalarFieldEnum | TireBrandScalarFieldEnum[]
  }

  /**
   * TireBrand findFirstOrThrow
   */
  export type TireBrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrand
     */
    select?: TireBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireBrand
     */
    omit?: TireBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireBrandInclude<ExtArgs> | null
    /**
     * Filter, which TireBrand to fetch.
     */
    where?: TireBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireBrands to fetch.
     */
    orderBy?: TireBrandOrderByWithRelationInput | TireBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TireBrands.
     */
    cursor?: TireBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireBrands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TireBrands.
     */
    distinct?: TireBrandScalarFieldEnum | TireBrandScalarFieldEnum[]
  }

  /**
   * TireBrand findMany
   */
  export type TireBrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrand
     */
    select?: TireBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireBrand
     */
    omit?: TireBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireBrandInclude<ExtArgs> | null
    /**
     * Filter, which TireBrands to fetch.
     */
    where?: TireBrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireBrands to fetch.
     */
    orderBy?: TireBrandOrderByWithRelationInput | TireBrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TireBrands.
     */
    cursor?: TireBrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireBrands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireBrands.
     */
    skip?: number
    distinct?: TireBrandScalarFieldEnum | TireBrandScalarFieldEnum[]
  }

  /**
   * TireBrand create
   */
  export type TireBrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrand
     */
    select?: TireBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireBrand
     */
    omit?: TireBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireBrandInclude<ExtArgs> | null
    /**
     * The data needed to create a TireBrand.
     */
    data: XOR<TireBrandCreateInput, TireBrandUncheckedCreateInput>
  }

  /**
   * TireBrand createMany
   */
  export type TireBrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TireBrands.
     */
    data: TireBrandCreateManyInput | TireBrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TireBrand update
   */
  export type TireBrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrand
     */
    select?: TireBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireBrand
     */
    omit?: TireBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireBrandInclude<ExtArgs> | null
    /**
     * The data needed to update a TireBrand.
     */
    data: XOR<TireBrandUpdateInput, TireBrandUncheckedUpdateInput>
    /**
     * Choose, which TireBrand to update.
     */
    where: TireBrandWhereUniqueInput
  }

  /**
   * TireBrand updateMany
   */
  export type TireBrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TireBrands.
     */
    data: XOR<TireBrandUpdateManyMutationInput, TireBrandUncheckedUpdateManyInput>
    /**
     * Filter which TireBrands to update
     */
    where?: TireBrandWhereInput
    /**
     * Limit how many TireBrands to update.
     */
    limit?: number
  }

  /**
   * TireBrand upsert
   */
  export type TireBrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrand
     */
    select?: TireBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireBrand
     */
    omit?: TireBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireBrandInclude<ExtArgs> | null
    /**
     * The filter to search for the TireBrand to update in case it exists.
     */
    where: TireBrandWhereUniqueInput
    /**
     * In case the TireBrand found by the `where` argument doesn't exist, create a new TireBrand with this data.
     */
    create: XOR<TireBrandCreateInput, TireBrandUncheckedCreateInput>
    /**
     * In case the TireBrand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TireBrandUpdateInput, TireBrandUncheckedUpdateInput>
  }

  /**
   * TireBrand delete
   */
  export type TireBrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrand
     */
    select?: TireBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireBrand
     */
    omit?: TireBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireBrandInclude<ExtArgs> | null
    /**
     * Filter which TireBrand to delete.
     */
    where: TireBrandWhereUniqueInput
  }

  /**
   * TireBrand deleteMany
   */
  export type TireBrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TireBrands to delete
     */
    where?: TireBrandWhereInput
    /**
     * Limit how many TireBrands to delete.
     */
    limit?: number
  }

  /**
   * TireBrand.items
   */
  export type TireBrand$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    where?: TireItemWhereInput
    orderBy?: TireItemOrderByWithRelationInput | TireItemOrderByWithRelationInput[]
    cursor?: TireItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TireItemScalarFieldEnum | TireItemScalarFieldEnum[]
  }

  /**
   * TireBrand without action
   */
  export type TireBrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireBrand
     */
    select?: TireBrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireBrand
     */
    omit?: TireBrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireBrandInclude<ExtArgs> | null
  }


  /**
   * Model TireItem
   */

  export type AggregateTireItem = {
    _count: TireItemCountAggregateOutputType | null
    _avg: TireItemAvgAggregateOutputType | null
    _sum: TireItemSumAggregateOutputType | null
    _min: TireItemMinAggregateOutputType | null
    _max: TireItemMaxAggregateOutputType | null
  }

  export type TireItemAvgAggregateOutputType = {
    id: number | null
    tire_change_id: number | null
    brand_id: number | null
    position: number | null
  }

  export type TireItemSumAggregateOutputType = {
    id: bigint | null
    tire_change_id: bigint | null
    brand_id: number | null
    position: number | null
  }

  export type TireItemMinAggregateOutputType = {
    id: bigint | null
    tire_change_id: bigint | null
    brand_id: number | null
    tire_code: string | null
    position: number | null
  }

  export type TireItemMaxAggregateOutputType = {
    id: bigint | null
    tire_change_id: bigint | null
    brand_id: number | null
    tire_code: string | null
    position: number | null
  }

  export type TireItemCountAggregateOutputType = {
    id: number
    tire_change_id: number
    brand_id: number
    tire_code: number
    position: number
    _all: number
  }


  export type TireItemAvgAggregateInputType = {
    id?: true
    tire_change_id?: true
    brand_id?: true
    position?: true
  }

  export type TireItemSumAggregateInputType = {
    id?: true
    tire_change_id?: true
    brand_id?: true
    position?: true
  }

  export type TireItemMinAggregateInputType = {
    id?: true
    tire_change_id?: true
    brand_id?: true
    tire_code?: true
    position?: true
  }

  export type TireItemMaxAggregateInputType = {
    id?: true
    tire_change_id?: true
    brand_id?: true
    tire_code?: true
    position?: true
  }

  export type TireItemCountAggregateInputType = {
    id?: true
    tire_change_id?: true
    brand_id?: true
    tire_code?: true
    position?: true
    _all?: true
  }

  export type TireItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TireItem to aggregate.
     */
    where?: TireItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireItems to fetch.
     */
    orderBy?: TireItemOrderByWithRelationInput | TireItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TireItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TireItems
    **/
    _count?: true | TireItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TireItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TireItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TireItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TireItemMaxAggregateInputType
  }

  export type GetTireItemAggregateType<T extends TireItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTireItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTireItem[P]>
      : GetScalarType<T[P], AggregateTireItem[P]>
  }




  export type TireItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TireItemWhereInput
    orderBy?: TireItemOrderByWithAggregationInput | TireItemOrderByWithAggregationInput[]
    by: TireItemScalarFieldEnum[] | TireItemScalarFieldEnum
    having?: TireItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TireItemCountAggregateInputType | true
    _avg?: TireItemAvgAggregateInputType
    _sum?: TireItemSumAggregateInputType
    _min?: TireItemMinAggregateInputType
    _max?: TireItemMaxAggregateInputType
  }

  export type TireItemGroupByOutputType = {
    id: bigint
    tire_change_id: bigint
    brand_id: number
    tire_code: string
    position: number
    _count: TireItemCountAggregateOutputType | null
    _avg: TireItemAvgAggregateOutputType | null
    _sum: TireItemSumAggregateOutputType | null
    _min: TireItemMinAggregateOutputType | null
    _max: TireItemMaxAggregateOutputType | null
  }

  type GetTireItemGroupByPayload<T extends TireItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TireItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TireItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TireItemGroupByOutputType[P]>
            : GetScalarType<T[P], TireItemGroupByOutputType[P]>
        }
      >
    >


  export type TireItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tire_change_id?: boolean
    brand_id?: boolean
    tire_code?: boolean
    position?: boolean
    brand?: boolean | TireBrandDefaultArgs<ExtArgs>
    history?: boolean | TireChangeHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tireItem"]>



  export type TireItemSelectScalar = {
    id?: boolean
    tire_change_id?: boolean
    brand_id?: boolean
    tire_code?: boolean
    position?: boolean
  }

  export type TireItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tire_change_id" | "brand_id" | "tire_code" | "position", ExtArgs["result"]["tireItem"]>
  export type TireItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | TireBrandDefaultArgs<ExtArgs>
    history?: boolean | TireChangeHistoryDefaultArgs<ExtArgs>
  }

  export type $TireItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TireItem"
    objects: {
      brand: Prisma.$TireBrandPayload<ExtArgs>
      history: Prisma.$TireChangeHistoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      tire_change_id: bigint
      brand_id: number
      tire_code: string
      position: number
    }, ExtArgs["result"]["tireItem"]>
    composites: {}
  }

  type TireItemGetPayload<S extends boolean | null | undefined | TireItemDefaultArgs> = $Result.GetResult<Prisma.$TireItemPayload, S>

  type TireItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TireItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TireItemCountAggregateInputType | true
    }

  export interface TireItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TireItem'], meta: { name: 'TireItem' } }
    /**
     * Find zero or one TireItem that matches the filter.
     * @param {TireItemFindUniqueArgs} args - Arguments to find a TireItem
     * @example
     * // Get one TireItem
     * const tireItem = await prisma.tireItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TireItemFindUniqueArgs>(args: SelectSubset<T, TireItemFindUniqueArgs<ExtArgs>>): Prisma__TireItemClient<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TireItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TireItemFindUniqueOrThrowArgs} args - Arguments to find a TireItem
     * @example
     * // Get one TireItem
     * const tireItem = await prisma.tireItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TireItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TireItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TireItemClient<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TireItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireItemFindFirstArgs} args - Arguments to find a TireItem
     * @example
     * // Get one TireItem
     * const tireItem = await prisma.tireItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TireItemFindFirstArgs>(args?: SelectSubset<T, TireItemFindFirstArgs<ExtArgs>>): Prisma__TireItemClient<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TireItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireItemFindFirstOrThrowArgs} args - Arguments to find a TireItem
     * @example
     * // Get one TireItem
     * const tireItem = await prisma.tireItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TireItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TireItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TireItemClient<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TireItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TireItems
     * const tireItems = await prisma.tireItem.findMany()
     * 
     * // Get first 10 TireItems
     * const tireItems = await prisma.tireItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tireItemWithIdOnly = await prisma.tireItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TireItemFindManyArgs>(args?: SelectSubset<T, TireItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TireItem.
     * @param {TireItemCreateArgs} args - Arguments to create a TireItem.
     * @example
     * // Create one TireItem
     * const TireItem = await prisma.tireItem.create({
     *   data: {
     *     // ... data to create a TireItem
     *   }
     * })
     * 
     */
    create<T extends TireItemCreateArgs>(args: SelectSubset<T, TireItemCreateArgs<ExtArgs>>): Prisma__TireItemClient<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TireItems.
     * @param {TireItemCreateManyArgs} args - Arguments to create many TireItems.
     * @example
     * // Create many TireItems
     * const tireItem = await prisma.tireItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TireItemCreateManyArgs>(args?: SelectSubset<T, TireItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TireItem.
     * @param {TireItemDeleteArgs} args - Arguments to delete one TireItem.
     * @example
     * // Delete one TireItem
     * const TireItem = await prisma.tireItem.delete({
     *   where: {
     *     // ... filter to delete one TireItem
     *   }
     * })
     * 
     */
    delete<T extends TireItemDeleteArgs>(args: SelectSubset<T, TireItemDeleteArgs<ExtArgs>>): Prisma__TireItemClient<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TireItem.
     * @param {TireItemUpdateArgs} args - Arguments to update one TireItem.
     * @example
     * // Update one TireItem
     * const tireItem = await prisma.tireItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TireItemUpdateArgs>(args: SelectSubset<T, TireItemUpdateArgs<ExtArgs>>): Prisma__TireItemClient<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TireItems.
     * @param {TireItemDeleteManyArgs} args - Arguments to filter TireItems to delete.
     * @example
     * // Delete a few TireItems
     * const { count } = await prisma.tireItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TireItemDeleteManyArgs>(args?: SelectSubset<T, TireItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TireItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TireItems
     * const tireItem = await prisma.tireItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TireItemUpdateManyArgs>(args: SelectSubset<T, TireItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TireItem.
     * @param {TireItemUpsertArgs} args - Arguments to update or create a TireItem.
     * @example
     * // Update or create a TireItem
     * const tireItem = await prisma.tireItem.upsert({
     *   create: {
     *     // ... data to create a TireItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TireItem we want to update
     *   }
     * })
     */
    upsert<T extends TireItemUpsertArgs>(args: SelectSubset<T, TireItemUpsertArgs<ExtArgs>>): Prisma__TireItemClient<$Result.GetResult<Prisma.$TireItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TireItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireItemCountArgs} args - Arguments to filter TireItems to count.
     * @example
     * // Count the number of TireItems
     * const count = await prisma.tireItem.count({
     *   where: {
     *     // ... the filter for the TireItems we want to count
     *   }
     * })
    **/
    count<T extends TireItemCountArgs>(
      args?: Subset<T, TireItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TireItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TireItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TireItemAggregateArgs>(args: Subset<T, TireItemAggregateArgs>): Prisma.PrismaPromise<GetTireItemAggregateType<T>>

    /**
     * Group by TireItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TireItemGroupByArgs} args - Group by arguments.
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
      T extends TireItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TireItemGroupByArgs['orderBy'] }
        : { orderBy?: TireItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TireItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTireItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TireItem model
   */
  readonly fields: TireItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TireItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TireItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends TireBrandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TireBrandDefaultArgs<ExtArgs>>): Prisma__TireBrandClient<$Result.GetResult<Prisma.$TireBrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    history<T extends TireChangeHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TireChangeHistoryDefaultArgs<ExtArgs>>): Prisma__TireChangeHistoryClient<$Result.GetResult<Prisma.$TireChangeHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TireItem model
   */
  interface TireItemFieldRefs {
    readonly id: FieldRef<"TireItem", 'BigInt'>
    readonly tire_change_id: FieldRef<"TireItem", 'BigInt'>
    readonly brand_id: FieldRef<"TireItem", 'Int'>
    readonly tire_code: FieldRef<"TireItem", 'String'>
    readonly position: FieldRef<"TireItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TireItem findUnique
   */
  export type TireItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    /**
     * Filter, which TireItem to fetch.
     */
    where: TireItemWhereUniqueInput
  }

  /**
   * TireItem findUniqueOrThrow
   */
  export type TireItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    /**
     * Filter, which TireItem to fetch.
     */
    where: TireItemWhereUniqueInput
  }

  /**
   * TireItem findFirst
   */
  export type TireItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    /**
     * Filter, which TireItem to fetch.
     */
    where?: TireItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireItems to fetch.
     */
    orderBy?: TireItemOrderByWithRelationInput | TireItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TireItems.
     */
    cursor?: TireItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TireItems.
     */
    distinct?: TireItemScalarFieldEnum | TireItemScalarFieldEnum[]
  }

  /**
   * TireItem findFirstOrThrow
   */
  export type TireItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    /**
     * Filter, which TireItem to fetch.
     */
    where?: TireItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireItems to fetch.
     */
    orderBy?: TireItemOrderByWithRelationInput | TireItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TireItems.
     */
    cursor?: TireItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TireItems.
     */
    distinct?: TireItemScalarFieldEnum | TireItemScalarFieldEnum[]
  }

  /**
   * TireItem findMany
   */
  export type TireItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    /**
     * Filter, which TireItems to fetch.
     */
    where?: TireItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TireItems to fetch.
     */
    orderBy?: TireItemOrderByWithRelationInput | TireItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TireItems.
     */
    cursor?: TireItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TireItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TireItems.
     */
    skip?: number
    distinct?: TireItemScalarFieldEnum | TireItemScalarFieldEnum[]
  }

  /**
   * TireItem create
   */
  export type TireItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TireItem.
     */
    data: XOR<TireItemCreateInput, TireItemUncheckedCreateInput>
  }

  /**
   * TireItem createMany
   */
  export type TireItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TireItems.
     */
    data: TireItemCreateManyInput | TireItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TireItem update
   */
  export type TireItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TireItem.
     */
    data: XOR<TireItemUpdateInput, TireItemUncheckedUpdateInput>
    /**
     * Choose, which TireItem to update.
     */
    where: TireItemWhereUniqueInput
  }

  /**
   * TireItem updateMany
   */
  export type TireItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TireItems.
     */
    data: XOR<TireItemUpdateManyMutationInput, TireItemUncheckedUpdateManyInput>
    /**
     * Filter which TireItems to update
     */
    where?: TireItemWhereInput
    /**
     * Limit how many TireItems to update.
     */
    limit?: number
  }

  /**
   * TireItem upsert
   */
  export type TireItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TireItem to update in case it exists.
     */
    where: TireItemWhereUniqueInput
    /**
     * In case the TireItem found by the `where` argument doesn't exist, create a new TireItem with this data.
     */
    create: XOR<TireItemCreateInput, TireItemUncheckedCreateInput>
    /**
     * In case the TireItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TireItemUpdateInput, TireItemUncheckedUpdateInput>
  }

  /**
   * TireItem delete
   */
  export type TireItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
    /**
     * Filter which TireItem to delete.
     */
    where: TireItemWhereUniqueInput
  }

  /**
   * TireItem deleteMany
   */
  export type TireItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TireItems to delete
     */
    where?: TireItemWhereInput
    /**
     * Limit how many TireItems to delete.
     */
    limit?: number
  }

  /**
   * TireItem without action
   */
  export type TireItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TireItem
     */
    select?: TireItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TireItem
     */
    omit?: TireItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TireItemInclude<ExtArgs> | null
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


  export const TruckScalarFieldEnum: {
    id: 'id',
    number_plate: 'number_plate',
    current_mileage: 'current_mileage',
    driver_id: 'driver_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TruckScalarFieldEnum = (typeof TruckScalarFieldEnum)[keyof typeof TruckScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    license_plate_id: 'license_plate_id',
    repair: 'repair',
    status: 'status',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const MigrationsScalarFieldEnum: {
    id: 'id',
    migration: 'migration',
    batch: 'batch'
  };

  export type MigrationsScalarFieldEnum = (typeof MigrationsScalarFieldEnum)[keyof typeof MigrationsScalarFieldEnum]


  export const Password_reset_tokensScalarFieldEnum: {
    email: 'email',
    token: 'token',
    created_at: 'created_at'
  };

  export type Password_reset_tokensScalarFieldEnum = (typeof Password_reset_tokensScalarFieldEnum)[keyof typeof Password_reset_tokensScalarFieldEnum]


  export const Personal_access_tokensScalarFieldEnum: {
    id: 'id',
    tokenable_type: 'tokenable_type',
    tokenable_id: 'tokenable_id',
    name: 'name',
    token: 'token',
    abilities: 'abilities',
    last_used_at: 'last_used_at',
    expires_at: 'expires_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Personal_access_tokensScalarFieldEnum = (typeof Personal_access_tokensScalarFieldEnum)[keyof typeof Personal_access_tokensScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    email_verified_at: 'email_verified_at',
    password: 'password',
    remember_token: 'remember_token',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const MaintenanceLogScalarFieldEnum: {
    id: 'id',
    truck_id: 'truck_id',
    type: 'type',
    service_mileage: 'service_mileage',
    next_service_at: 'next_service_at',
    description: 'description',
    created_at: 'created_at'
  };

  export type MaintenanceLogScalarFieldEnum = (typeof MaintenanceLogScalarFieldEnum)[keyof typeof MaintenanceLogScalarFieldEnum]


  export const TireChangeHistoryScalarFieldEnum: {
    id: 'id',
    truck_id: 'truck_id',
    change_date: 'change_date',
    mileage_at_change: 'mileage_at_change',
    notes: 'notes'
  };

  export type TireChangeHistoryScalarFieldEnum = (typeof TireChangeHistoryScalarFieldEnum)[keyof typeof TireChangeHistoryScalarFieldEnum]


  export const TireBrandScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TireBrandScalarFieldEnum = (typeof TireBrandScalarFieldEnum)[keyof typeof TireBrandScalarFieldEnum]


  export const TireItemScalarFieldEnum: {
    id: 'id',
    tire_change_id: 'tire_change_id',
    brand_id: 'brand_id',
    tire_code: 'tire_code',
    position: 'position'
  };

  export type TireItemScalarFieldEnum = (typeof TireItemScalarFieldEnum)[keyof typeof TireItemScalarFieldEnum]


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


  export const TruckOrderByRelevanceFieldEnum: {
    number_plate: 'number_plate'
  };

  export type TruckOrderByRelevanceFieldEnum = (typeof TruckOrderByRelevanceFieldEnum)[keyof typeof TruckOrderByRelevanceFieldEnum]


  export const DriverOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type DriverOrderByRelevanceFieldEnum = (typeof DriverOrderByRelevanceFieldEnum)[keyof typeof DriverOrderByRelevanceFieldEnum]


  export const ReportOrderByRelevanceFieldEnum: {
    repair: 'repair',
    description: 'description'
  };

  export type ReportOrderByRelevanceFieldEnum = (typeof ReportOrderByRelevanceFieldEnum)[keyof typeof ReportOrderByRelevanceFieldEnum]


  export const migrationsOrderByRelevanceFieldEnum: {
    migration: 'migration'
  };

  export type migrationsOrderByRelevanceFieldEnum = (typeof migrationsOrderByRelevanceFieldEnum)[keyof typeof migrationsOrderByRelevanceFieldEnum]


  export const password_reset_tokensOrderByRelevanceFieldEnum: {
    email: 'email',
    token: 'token'
  };

  export type password_reset_tokensOrderByRelevanceFieldEnum = (typeof password_reset_tokensOrderByRelevanceFieldEnum)[keyof typeof password_reset_tokensOrderByRelevanceFieldEnum]


  export const personal_access_tokensOrderByRelevanceFieldEnum: {
    tokenable_type: 'tokenable_type',
    name: 'name',
    token: 'token',
    abilities: 'abilities'
  };

  export type personal_access_tokensOrderByRelevanceFieldEnum = (typeof personal_access_tokensOrderByRelevanceFieldEnum)[keyof typeof personal_access_tokensOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    remember_token: 'remember_token'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const MaintenanceLogOrderByRelevanceFieldEnum: {
    type: 'type',
    description: 'description'
  };

  export type MaintenanceLogOrderByRelevanceFieldEnum = (typeof MaintenanceLogOrderByRelevanceFieldEnum)[keyof typeof MaintenanceLogOrderByRelevanceFieldEnum]


  export const TireChangeHistoryOrderByRelevanceFieldEnum: {
    notes: 'notes'
  };

  export type TireChangeHistoryOrderByRelevanceFieldEnum = (typeof TireChangeHistoryOrderByRelevanceFieldEnum)[keyof typeof TireChangeHistoryOrderByRelevanceFieldEnum]


  export const TireBrandOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type TireBrandOrderByRelevanceFieldEnum = (typeof TireBrandOrderByRelevanceFieldEnum)[keyof typeof TireBrandOrderByRelevanceFieldEnum]


  export const TireItemOrderByRelevanceFieldEnum: {
    tire_code: 'tire_code'
  };

  export type TireItemOrderByRelevanceFieldEnum = (typeof TireItemOrderByRelevanceFieldEnum)[keyof typeof TireItemOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


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


  export type TruckWhereInput = {
    AND?: TruckWhereInput | TruckWhereInput[]
    OR?: TruckWhereInput[]
    NOT?: TruckWhereInput | TruckWhereInput[]
    id?: BigIntFilter<"Truck"> | bigint | number
    number_plate?: StringFilter<"Truck"> | string
    current_mileage?: IntFilter<"Truck"> | number
    driver_id?: BigIntNullableFilter<"Truck"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"Truck"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Truck"> | Date | string | null
    drivers?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    reports?: ReportListRelationFilter
    maintenanceLogs?: MaintenanceLogListRelationFilter
    tireChangeHistories?: TireChangeHistoryListRelationFilter
  }

  export type TruckOrderByWithRelationInput = {
    id?: SortOrder
    number_plate?: SortOrder
    current_mileage?: SortOrder
    driver_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    drivers?: DriverOrderByWithRelationInput
    reports?: ReportOrderByRelationAggregateInput
    maintenanceLogs?: MaintenanceLogOrderByRelationAggregateInput
    tireChangeHistories?: TireChangeHistoryOrderByRelationAggregateInput
    _relevance?: TruckOrderByRelevanceInput
  }

  export type TruckWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    number_plate?: string
    driver_id?: bigint | number
    AND?: TruckWhereInput | TruckWhereInput[]
    OR?: TruckWhereInput[]
    NOT?: TruckWhereInput | TruckWhereInput[]
    current_mileage?: IntFilter<"Truck"> | number
    created_at?: DateTimeNullableFilter<"Truck"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Truck"> | Date | string | null
    drivers?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    reports?: ReportListRelationFilter
    maintenanceLogs?: MaintenanceLogListRelationFilter
    tireChangeHistories?: TireChangeHistoryListRelationFilter
  }, "id" | "number_plate" | "driver_id">

  export type TruckOrderByWithAggregationInput = {
    id?: SortOrder
    number_plate?: SortOrder
    current_mileage?: SortOrder
    driver_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: TruckCountOrderByAggregateInput
    _avg?: TruckAvgOrderByAggregateInput
    _max?: TruckMaxOrderByAggregateInput
    _min?: TruckMinOrderByAggregateInput
    _sum?: TruckSumOrderByAggregateInput
  }

  export type TruckScalarWhereWithAggregatesInput = {
    AND?: TruckScalarWhereWithAggregatesInput | TruckScalarWhereWithAggregatesInput[]
    OR?: TruckScalarWhereWithAggregatesInput[]
    NOT?: TruckScalarWhereWithAggregatesInput | TruckScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Truck"> | bigint | number
    number_plate?: StringWithAggregatesFilter<"Truck"> | string
    current_mileage?: IntWithAggregatesFilter<"Truck"> | number
    driver_id?: BigIntNullableWithAggregatesFilter<"Truck"> | bigint | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Truck"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Truck"> | Date | string | null
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: BigIntFilter<"Driver"> | bigint | number
    name?: StringFilter<"Driver"> | string
    created_at?: DateTimeNullableFilter<"Driver"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Driver"> | Date | string | null
    trucks?: TruckListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    trucks?: TruckOrderByRelationAggregateInput
    _relevance?: DriverOrderByRelevanceInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    name?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    created_at?: DateTimeNullableFilter<"Driver"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Driver"> | Date | string | null
    trucks?: TruckListRelationFilter
  }, "id" | "name">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Driver"> | bigint | number
    name?: StringWithAggregatesFilter<"Driver"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: BigIntFilter<"Report"> | bigint | number
    license_plate_id?: BigIntFilter<"Report"> | bigint | number
    repair?: StringFilter<"Report"> | string
    status?: IntFilter<"Report"> | number
    description?: StringNullableFilter<"Report"> | string | null
    created_at?: DateTimeNullableFilter<"Report"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Report"> | Date | string | null
    truck?: XOR<TruckNullableScalarRelationFilter, TruckWhereInput> | null
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    license_plate_id?: SortOrder
    repair?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    truck?: TruckOrderByWithRelationInput
    _relevance?: ReportOrderByRelevanceInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    license_plate_id?: BigIntFilter<"Report"> | bigint | number
    repair?: StringFilter<"Report"> | string
    status?: IntFilter<"Report"> | number
    description?: StringNullableFilter<"Report"> | string | null
    created_at?: DateTimeNullableFilter<"Report"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Report"> | Date | string | null
    truck?: XOR<TruckNullableScalarRelationFilter, TruckWhereInput> | null
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    license_plate_id?: SortOrder
    repair?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Report"> | bigint | number
    license_plate_id?: BigIntWithAggregatesFilter<"Report"> | bigint | number
    repair?: StringWithAggregatesFilter<"Report"> | string
    status?: IntWithAggregatesFilter<"Report"> | number
    description?: StringNullableWithAggregatesFilter<"Report"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
  }

  export type migrationsWhereInput = {
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    id?: IntFilter<"migrations"> | number
    migration?: StringFilter<"migrations"> | string
    batch?: IntFilter<"migrations"> | number
  }

  export type migrationsOrderByWithRelationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _relevance?: migrationsOrderByRelevanceInput
  }

  export type migrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: migrationsWhereInput | migrationsWhereInput[]
    OR?: migrationsWhereInput[]
    NOT?: migrationsWhereInput | migrationsWhereInput[]
    migration?: StringFilter<"migrations"> | string
    batch?: IntFilter<"migrations"> | number
  }, "id">

  export type migrationsOrderByWithAggregationInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
    _count?: migrationsCountOrderByAggregateInput
    _avg?: migrationsAvgOrderByAggregateInput
    _max?: migrationsMaxOrderByAggregateInput
    _min?: migrationsMinOrderByAggregateInput
    _sum?: migrationsSumOrderByAggregateInput
  }

  export type migrationsScalarWhereWithAggregatesInput = {
    AND?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    OR?: migrationsScalarWhereWithAggregatesInput[]
    NOT?: migrationsScalarWhereWithAggregatesInput | migrationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"migrations"> | number
    migration?: StringWithAggregatesFilter<"migrations"> | string
    batch?: IntWithAggregatesFilter<"migrations"> | number
  }

  export type password_reset_tokensWhereInput = {
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    email?: StringFilter<"password_reset_tokens"> | string
    token?: StringFilter<"password_reset_tokens"> | string
    created_at?: DateTimeNullableFilter<"password_reset_tokens"> | Date | string | null
  }

  export type password_reset_tokensOrderByWithRelationInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _relevance?: password_reset_tokensOrderByRelevanceInput
  }

  export type password_reset_tokensWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    token?: StringFilter<"password_reset_tokens"> | string
    created_at?: DateTimeNullableFilter<"password_reset_tokens"> | Date | string | null
  }, "email">

  export type password_reset_tokensOrderByWithAggregationInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: password_reset_tokensCountOrderByAggregateInput
    _max?: password_reset_tokensMaxOrderByAggregateInput
    _min?: password_reset_tokensMinOrderByAggregateInput
  }

  export type password_reset_tokensScalarWhereWithAggregatesInput = {
    AND?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    OR?: password_reset_tokensScalarWhereWithAggregatesInput[]
    NOT?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    token?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"password_reset_tokens"> | Date | string | null
  }

  export type personal_access_tokensWhereInput = {
    AND?: personal_access_tokensWhereInput | personal_access_tokensWhereInput[]
    OR?: personal_access_tokensWhereInput[]
    NOT?: personal_access_tokensWhereInput | personal_access_tokensWhereInput[]
    id?: BigIntFilter<"personal_access_tokens"> | bigint | number
    tokenable_type?: StringFilter<"personal_access_tokens"> | string
    tokenable_id?: BigIntFilter<"personal_access_tokens"> | bigint | number
    name?: StringFilter<"personal_access_tokens"> | string
    token?: StringFilter<"personal_access_tokens"> | string
    abilities?: StringNullableFilter<"personal_access_tokens"> | string | null
    last_used_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    created_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
  }

  export type personal_access_tokensOrderByWithRelationInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrderInput | SortOrder
    last_used_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: personal_access_tokensOrderByRelevanceInput
  }

  export type personal_access_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    token?: string
    AND?: personal_access_tokensWhereInput | personal_access_tokensWhereInput[]
    OR?: personal_access_tokensWhereInput[]
    NOT?: personal_access_tokensWhereInput | personal_access_tokensWhereInput[]
    tokenable_type?: StringFilter<"personal_access_tokens"> | string
    tokenable_id?: BigIntFilter<"personal_access_tokens"> | bigint | number
    name?: StringFilter<"personal_access_tokens"> | string
    abilities?: StringNullableFilter<"personal_access_tokens"> | string | null
    last_used_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    expires_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    created_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"personal_access_tokens"> | Date | string | null
  }, "id" | "token">

  export type personal_access_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrderInput | SortOrder
    last_used_at?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: personal_access_tokensCountOrderByAggregateInput
    _avg?: personal_access_tokensAvgOrderByAggregateInput
    _max?: personal_access_tokensMaxOrderByAggregateInput
    _min?: personal_access_tokensMinOrderByAggregateInput
    _sum?: personal_access_tokensSumOrderByAggregateInput
  }

  export type personal_access_tokensScalarWhereWithAggregatesInput = {
    AND?: personal_access_tokensScalarWhereWithAggregatesInput | personal_access_tokensScalarWhereWithAggregatesInput[]
    OR?: personal_access_tokensScalarWhereWithAggregatesInput[]
    NOT?: personal_access_tokensScalarWhereWithAggregatesInput | personal_access_tokensScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"personal_access_tokens"> | bigint | number
    tokenable_type?: StringWithAggregatesFilter<"personal_access_tokens"> | string
    tokenable_id?: BigIntWithAggregatesFilter<"personal_access_tokens"> | bigint | number
    name?: StringWithAggregatesFilter<"personal_access_tokens"> | string
    token?: StringWithAggregatesFilter<"personal_access_tokens"> | string
    abilities?: StringNullableWithAggregatesFilter<"personal_access_tokens"> | string | null
    last_used_at?: DateTimeNullableWithAggregatesFilter<"personal_access_tokens"> | Date | string | null
    expires_at?: DateTimeNullableWithAggregatesFilter<"personal_access_tokens"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"personal_access_tokens"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"personal_access_tokens"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: BigIntFilter<"users"> | bigint | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    password?: SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    email_verified_at?: DateTimeNullableFilter<"users"> | Date | string | null
    password?: StringFilter<"users"> | string
    remember_token?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrderInput | SortOrder
    password?: SortOrder
    remember_token?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"users"> | bigint | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    email_verified_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    remember_token?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type MaintenanceLogWhereInput = {
    AND?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    OR?: MaintenanceLogWhereInput[]
    NOT?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    id?: BigIntFilter<"MaintenanceLog"> | bigint | number
    truck_id?: BigIntFilter<"MaintenanceLog"> | bigint | number
    type?: StringFilter<"MaintenanceLog"> | string
    service_mileage?: IntFilter<"MaintenanceLog"> | number
    next_service_at?: IntFilter<"MaintenanceLog"> | number
    description?: StringNullableFilter<"MaintenanceLog"> | string | null
    created_at?: DateTimeFilter<"MaintenanceLog"> | Date | string
    truck?: XOR<TruckScalarRelationFilter, TruckWhereInput>
  }

  export type MaintenanceLogOrderByWithRelationInput = {
    id?: SortOrder
    truck_id?: SortOrder
    type?: SortOrder
    service_mileage?: SortOrder
    next_service_at?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    truck?: TruckOrderByWithRelationInput
    _relevance?: MaintenanceLogOrderByRelevanceInput
  }

  export type MaintenanceLogWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    OR?: MaintenanceLogWhereInput[]
    NOT?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    truck_id?: BigIntFilter<"MaintenanceLog"> | bigint | number
    type?: StringFilter<"MaintenanceLog"> | string
    service_mileage?: IntFilter<"MaintenanceLog"> | number
    next_service_at?: IntFilter<"MaintenanceLog"> | number
    description?: StringNullableFilter<"MaintenanceLog"> | string | null
    created_at?: DateTimeFilter<"MaintenanceLog"> | Date | string
    truck?: XOR<TruckScalarRelationFilter, TruckWhereInput>
  }, "id">

  export type MaintenanceLogOrderByWithAggregationInput = {
    id?: SortOrder
    truck_id?: SortOrder
    type?: SortOrder
    service_mileage?: SortOrder
    next_service_at?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: MaintenanceLogCountOrderByAggregateInput
    _avg?: MaintenanceLogAvgOrderByAggregateInput
    _max?: MaintenanceLogMaxOrderByAggregateInput
    _min?: MaintenanceLogMinOrderByAggregateInput
    _sum?: MaintenanceLogSumOrderByAggregateInput
  }

  export type MaintenanceLogScalarWhereWithAggregatesInput = {
    AND?: MaintenanceLogScalarWhereWithAggregatesInput | MaintenanceLogScalarWhereWithAggregatesInput[]
    OR?: MaintenanceLogScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceLogScalarWhereWithAggregatesInput | MaintenanceLogScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"MaintenanceLog"> | bigint | number
    truck_id?: BigIntWithAggregatesFilter<"MaintenanceLog"> | bigint | number
    type?: StringWithAggregatesFilter<"MaintenanceLog"> | string
    service_mileage?: IntWithAggregatesFilter<"MaintenanceLog"> | number
    next_service_at?: IntWithAggregatesFilter<"MaintenanceLog"> | number
    description?: StringNullableWithAggregatesFilter<"MaintenanceLog"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"MaintenanceLog"> | Date | string
  }

  export type TireChangeHistoryWhereInput = {
    AND?: TireChangeHistoryWhereInput | TireChangeHistoryWhereInput[]
    OR?: TireChangeHistoryWhereInput[]
    NOT?: TireChangeHistoryWhereInput | TireChangeHistoryWhereInput[]
    id?: BigIntFilter<"TireChangeHistory"> | bigint | number
    truck_id?: BigIntFilter<"TireChangeHistory"> | bigint | number
    change_date?: DateTimeFilter<"TireChangeHistory"> | Date | string
    mileage_at_change?: IntFilter<"TireChangeHistory"> | number
    notes?: StringNullableFilter<"TireChangeHistory"> | string | null
    truck?: XOR<TruckScalarRelationFilter, TruckWhereInput>
    tireItems?: TireItemListRelationFilter
  }

  export type TireChangeHistoryOrderByWithRelationInput = {
    id?: SortOrder
    truck_id?: SortOrder
    change_date?: SortOrder
    mileage_at_change?: SortOrder
    notes?: SortOrderInput | SortOrder
    truck?: TruckOrderByWithRelationInput
    tireItems?: TireItemOrderByRelationAggregateInput
    _relevance?: TireChangeHistoryOrderByRelevanceInput
  }

  export type TireChangeHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: TireChangeHistoryWhereInput | TireChangeHistoryWhereInput[]
    OR?: TireChangeHistoryWhereInput[]
    NOT?: TireChangeHistoryWhereInput | TireChangeHistoryWhereInput[]
    truck_id?: BigIntFilter<"TireChangeHistory"> | bigint | number
    change_date?: DateTimeFilter<"TireChangeHistory"> | Date | string
    mileage_at_change?: IntFilter<"TireChangeHistory"> | number
    notes?: StringNullableFilter<"TireChangeHistory"> | string | null
    truck?: XOR<TruckScalarRelationFilter, TruckWhereInput>
    tireItems?: TireItemListRelationFilter
  }, "id">

  export type TireChangeHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    truck_id?: SortOrder
    change_date?: SortOrder
    mileage_at_change?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: TireChangeHistoryCountOrderByAggregateInput
    _avg?: TireChangeHistoryAvgOrderByAggregateInput
    _max?: TireChangeHistoryMaxOrderByAggregateInput
    _min?: TireChangeHistoryMinOrderByAggregateInput
    _sum?: TireChangeHistorySumOrderByAggregateInput
  }

  export type TireChangeHistoryScalarWhereWithAggregatesInput = {
    AND?: TireChangeHistoryScalarWhereWithAggregatesInput | TireChangeHistoryScalarWhereWithAggregatesInput[]
    OR?: TireChangeHistoryScalarWhereWithAggregatesInput[]
    NOT?: TireChangeHistoryScalarWhereWithAggregatesInput | TireChangeHistoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"TireChangeHistory"> | bigint | number
    truck_id?: BigIntWithAggregatesFilter<"TireChangeHistory"> | bigint | number
    change_date?: DateTimeWithAggregatesFilter<"TireChangeHistory"> | Date | string
    mileage_at_change?: IntWithAggregatesFilter<"TireChangeHistory"> | number
    notes?: StringNullableWithAggregatesFilter<"TireChangeHistory"> | string | null
  }

  export type TireBrandWhereInput = {
    AND?: TireBrandWhereInput | TireBrandWhereInput[]
    OR?: TireBrandWhereInput[]
    NOT?: TireBrandWhereInput | TireBrandWhereInput[]
    id?: IntFilter<"TireBrand"> | number
    name?: StringFilter<"TireBrand"> | string
    items?: TireItemListRelationFilter
  }

  export type TireBrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    items?: TireItemOrderByRelationAggregateInput
    _relevance?: TireBrandOrderByRelevanceInput
  }

  export type TireBrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TireBrandWhereInput | TireBrandWhereInput[]
    OR?: TireBrandWhereInput[]
    NOT?: TireBrandWhereInput | TireBrandWhereInput[]
    items?: TireItemListRelationFilter
  }, "id" | "name">

  export type TireBrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TireBrandCountOrderByAggregateInput
    _avg?: TireBrandAvgOrderByAggregateInput
    _max?: TireBrandMaxOrderByAggregateInput
    _min?: TireBrandMinOrderByAggregateInput
    _sum?: TireBrandSumOrderByAggregateInput
  }

  export type TireBrandScalarWhereWithAggregatesInput = {
    AND?: TireBrandScalarWhereWithAggregatesInput | TireBrandScalarWhereWithAggregatesInput[]
    OR?: TireBrandScalarWhereWithAggregatesInput[]
    NOT?: TireBrandScalarWhereWithAggregatesInput | TireBrandScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TireBrand"> | number
    name?: StringWithAggregatesFilter<"TireBrand"> | string
  }

  export type TireItemWhereInput = {
    AND?: TireItemWhereInput | TireItemWhereInput[]
    OR?: TireItemWhereInput[]
    NOT?: TireItemWhereInput | TireItemWhereInput[]
    id?: BigIntFilter<"TireItem"> | bigint | number
    tire_change_id?: BigIntFilter<"TireItem"> | bigint | number
    brand_id?: IntFilter<"TireItem"> | number
    tire_code?: StringFilter<"TireItem"> | string
    position?: IntFilter<"TireItem"> | number
    brand?: XOR<TireBrandScalarRelationFilter, TireBrandWhereInput>
    history?: XOR<TireChangeHistoryScalarRelationFilter, TireChangeHistoryWhereInput>
  }

  export type TireItemOrderByWithRelationInput = {
    id?: SortOrder
    tire_change_id?: SortOrder
    brand_id?: SortOrder
    tire_code?: SortOrder
    position?: SortOrder
    brand?: TireBrandOrderByWithRelationInput
    history?: TireChangeHistoryOrderByWithRelationInput
    _relevance?: TireItemOrderByRelevanceInput
  }

  export type TireItemWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: TireItemWhereInput | TireItemWhereInput[]
    OR?: TireItemWhereInput[]
    NOT?: TireItemWhereInput | TireItemWhereInput[]
    tire_change_id?: BigIntFilter<"TireItem"> | bigint | number
    brand_id?: IntFilter<"TireItem"> | number
    tire_code?: StringFilter<"TireItem"> | string
    position?: IntFilter<"TireItem"> | number
    brand?: XOR<TireBrandScalarRelationFilter, TireBrandWhereInput>
    history?: XOR<TireChangeHistoryScalarRelationFilter, TireChangeHistoryWhereInput>
  }, "id">

  export type TireItemOrderByWithAggregationInput = {
    id?: SortOrder
    tire_change_id?: SortOrder
    brand_id?: SortOrder
    tire_code?: SortOrder
    position?: SortOrder
    _count?: TireItemCountOrderByAggregateInput
    _avg?: TireItemAvgOrderByAggregateInput
    _max?: TireItemMaxOrderByAggregateInput
    _min?: TireItemMinOrderByAggregateInput
    _sum?: TireItemSumOrderByAggregateInput
  }

  export type TireItemScalarWhereWithAggregatesInput = {
    AND?: TireItemScalarWhereWithAggregatesInput | TireItemScalarWhereWithAggregatesInput[]
    OR?: TireItemScalarWhereWithAggregatesInput[]
    NOT?: TireItemScalarWhereWithAggregatesInput | TireItemScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"TireItem"> | bigint | number
    tire_change_id?: BigIntWithAggregatesFilter<"TireItem"> | bigint | number
    brand_id?: IntWithAggregatesFilter<"TireItem"> | number
    tire_code?: StringWithAggregatesFilter<"TireItem"> | string
    position?: IntWithAggregatesFilter<"TireItem"> | number
  }

  export type TruckCreateInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    drivers?: DriverCreateNestedOneWithoutTrucksInput
    reports?: ReportCreateNestedManyWithoutTruckInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutTruckInput
    tireChangeHistories?: TireChangeHistoryCreateNestedManyWithoutTruckInput
  }

  export type TruckUncheckedCreateInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    driver_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutTruckInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutTruckInput
    tireChangeHistories?: TireChangeHistoryUncheckedCreateNestedManyWithoutTruckInput
  }

  export type TruckUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: DriverUpdateOneWithoutTrucksNestedInput
    reports?: ReportUpdateManyWithoutTruckNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutTruckNestedInput
    tireChangeHistories?: TireChangeHistoryUpdateManyWithoutTruckNestedInput
  }

  export type TruckUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    driver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutTruckNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutTruckNestedInput
    tireChangeHistories?: TireChangeHistoryUncheckedUpdateManyWithoutTruckNestedInput
  }

  export type TruckCreateManyInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    driver_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TruckUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TruckUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    driver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverCreateInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    trucks?: TruckCreateNestedManyWithoutDriversInput
  }

  export type DriverUncheckedCreateInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    trucks?: TruckUncheckedCreateNestedManyWithoutDriversInput
  }

  export type DriverUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trucks?: TruckUpdateManyWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trucks?: TruckUncheckedUpdateManyWithoutDriversNestedInput
  }

  export type DriverCreateManyInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type DriverUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCreateInput = {
    id?: bigint | number
    repair: string
    status?: number
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    truck?: TruckCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: bigint | number
    license_plate_id: bigint | number
    repair: string
    status?: number
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ReportUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    repair?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    truck?: TruckUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    license_plate_id?: BigIntFieldUpdateOperationsInput | bigint | number
    repair?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCreateManyInput = {
    id?: bigint | number
    license_plate_id: bigint | number
    repair: string
    status?: number
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ReportUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    repair?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    license_plate_id?: BigIntFieldUpdateOperationsInput | bigint | number
    repair?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type migrationsCreateInput = {
    migration: string
    batch: number
  }

  export type migrationsUncheckedCreateInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsCreateManyInput = {
    id?: number
    migration: string
    batch: number
  }

  export type migrationsUpdateManyMutationInput = {
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type migrationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    migration?: StringFieldUpdateOperationsInput | string
    batch?: IntFieldUpdateOperationsInput | number
  }

  export type password_reset_tokensCreateInput = {
    email: string
    token: string
    created_at?: Date | string | null
  }

  export type password_reset_tokensUncheckedCreateInput = {
    email: string
    token: string
    created_at?: Date | string | null
  }

  export type password_reset_tokensUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensCreateManyInput = {
    email: string
    token: string
    created_at?: Date | string | null
  }

  export type password_reset_tokensUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type password_reset_tokensUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personal_access_tokensCreateInput = {
    id?: bigint | number
    tokenable_type: string
    tokenable_id: bigint | number
    name: string
    token: string
    abilities?: string | null
    last_used_at?: Date | string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type personal_access_tokensUncheckedCreateInput = {
    id?: bigint | number
    tokenable_type: string
    tokenable_id: bigint | number
    name: string
    token: string
    abilities?: string | null
    last_used_at?: Date | string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type personal_access_tokensUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personal_access_tokensUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personal_access_tokensCreateManyInput = {
    id?: bigint | number
    tokenable_type: string
    tokenable_id: bigint | number
    name: string
    token: string
    abilities?: string | null
    last_used_at?: Date | string | null
    expires_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type personal_access_tokensUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type personal_access_tokensUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tokenable_type?: StringFieldUpdateOperationsInput | string
    tokenable_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    abilities?: NullableStringFieldUpdateOperationsInput | string | null
    last_used_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUncheckedCreateInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateManyInput = {
    id?: bigint | number
    name: string
    email: string
    email_verified_at?: Date | string | null
    password: string
    remember_token?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    email_verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: StringFieldUpdateOperationsInput | string
    remember_token?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceLogCreateInput = {
    id?: bigint | number
    type: string
    service_mileage: number
    next_service_at: number
    description?: string | null
    created_at?: Date | string
    truck: TruckCreateNestedOneWithoutMaintenanceLogsInput
  }

  export type MaintenanceLogUncheckedCreateInput = {
    id?: bigint | number
    truck_id: bigint | number
    type: string
    service_mileage: number
    next_service_at: number
    description?: string | null
    created_at?: Date | string
  }

  export type MaintenanceLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    service_mileage?: IntFieldUpdateOperationsInput | number
    next_service_at?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    truck?: TruckUpdateOneRequiredWithoutMaintenanceLogsNestedInput
  }

  export type MaintenanceLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    truck_id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    service_mileage?: IntFieldUpdateOperationsInput | number
    next_service_at?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogCreateManyInput = {
    id?: bigint | number
    truck_id: bigint | number
    type: string
    service_mileage: number
    next_service_at: number
    description?: string | null
    created_at?: Date | string
  }

  export type MaintenanceLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    service_mileage?: IntFieldUpdateOperationsInput | number
    next_service_at?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    truck_id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    service_mileage?: IntFieldUpdateOperationsInput | number
    next_service_at?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TireChangeHistoryCreateInput = {
    id?: bigint | number
    change_date?: Date | string
    mileage_at_change: number
    notes?: string | null
    truck: TruckCreateNestedOneWithoutTireChangeHistoriesInput
    tireItems?: TireItemCreateNestedManyWithoutHistoryInput
  }

  export type TireChangeHistoryUncheckedCreateInput = {
    id?: bigint | number
    truck_id: bigint | number
    change_date?: Date | string
    mileage_at_change: number
    notes?: string | null
    tireItems?: TireItemUncheckedCreateNestedManyWithoutHistoryInput
  }

  export type TireChangeHistoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage_at_change?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    truck?: TruckUpdateOneRequiredWithoutTireChangeHistoriesNestedInput
    tireItems?: TireItemUpdateManyWithoutHistoryNestedInput
  }

  export type TireChangeHistoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    truck_id?: BigIntFieldUpdateOperationsInput | bigint | number
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage_at_change?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tireItems?: TireItemUncheckedUpdateManyWithoutHistoryNestedInput
  }

  export type TireChangeHistoryCreateManyInput = {
    id?: bigint | number
    truck_id: bigint | number
    change_date?: Date | string
    mileage_at_change: number
    notes?: string | null
  }

  export type TireChangeHistoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage_at_change?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TireChangeHistoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    truck_id?: BigIntFieldUpdateOperationsInput | bigint | number
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage_at_change?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TireBrandCreateInput = {
    name: string
    items?: TireItemCreateNestedManyWithoutBrandInput
  }

  export type TireBrandUncheckedCreateInput = {
    id?: number
    name: string
    items?: TireItemUncheckedCreateNestedManyWithoutBrandInput
  }

  export type TireBrandUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    items?: TireItemUpdateManyWithoutBrandNestedInput
  }

  export type TireBrandUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    items?: TireItemUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type TireBrandCreateManyInput = {
    id?: number
    name: string
  }

  export type TireBrandUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TireBrandUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TireItemCreateInput = {
    id?: bigint | number
    tire_code: string
    position: number
    brand: TireBrandCreateNestedOneWithoutItemsInput
    history: TireChangeHistoryCreateNestedOneWithoutTireItemsInput
  }

  export type TireItemUncheckedCreateInput = {
    id?: bigint | number
    tire_change_id: bigint | number
    brand_id: number
    tire_code: string
    position: number
  }

  export type TireItemUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tire_code?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    brand?: TireBrandUpdateOneRequiredWithoutItemsNestedInput
    history?: TireChangeHistoryUpdateOneRequiredWithoutTireItemsNestedInput
  }

  export type TireItemUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tire_change_id?: BigIntFieldUpdateOperationsInput | bigint | number
    brand_id?: IntFieldUpdateOperationsInput | number
    tire_code?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type TireItemCreateManyInput = {
    id?: bigint | number
    tire_change_id: bigint | number
    brand_id: number
    tire_code: string
    position: number
  }

  export type TireItemUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tire_code?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type TireItemUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tire_change_id?: BigIntFieldUpdateOperationsInput | bigint | number
    brand_id?: IntFieldUpdateOperationsInput | number
    tire_code?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DriverNullableScalarRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type MaintenanceLogListRelationFilter = {
    every?: MaintenanceLogWhereInput
    some?: MaintenanceLogWhereInput
    none?: MaintenanceLogWhereInput
  }

  export type TireChangeHistoryListRelationFilter = {
    every?: TireChangeHistoryWhereInput
    some?: TireChangeHistoryWhereInput
    none?: TireChangeHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TireChangeHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TruckOrderByRelevanceInput = {
    fields: TruckOrderByRelevanceFieldEnum | TruckOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TruckCountOrderByAggregateInput = {
    id?: SortOrder
    number_plate?: SortOrder
    current_mileage?: SortOrder
    driver_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TruckAvgOrderByAggregateInput = {
    id?: SortOrder
    current_mileage?: SortOrder
    driver_id?: SortOrder
  }

  export type TruckMaxOrderByAggregateInput = {
    id?: SortOrder
    number_plate?: SortOrder
    current_mileage?: SortOrder
    driver_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TruckMinOrderByAggregateInput = {
    id?: SortOrder
    number_plate?: SortOrder
    current_mileage?: SortOrder
    driver_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TruckSumOrderByAggregateInput = {
    id?: SortOrder
    current_mileage?: SortOrder
    driver_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TruckListRelationFilter = {
    every?: TruckWhereInput
    some?: TruckWhereInput
    none?: TruckWhereInput
  }

  export type TruckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverOrderByRelevanceInput = {
    fields: DriverOrderByRelevanceFieldEnum | DriverOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TruckNullableScalarRelationFilter = {
    is?: TruckWhereInput | null
    isNot?: TruckWhereInput | null
  }

  export type ReportOrderByRelevanceInput = {
    fields: ReportOrderByRelevanceFieldEnum | ReportOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    license_plate_id?: SortOrder
    repair?: SortOrder
    status?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
    license_plate_id?: SortOrder
    status?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    license_plate_id?: SortOrder
    repair?: SortOrder
    status?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    license_plate_id?: SortOrder
    repair?: SortOrder
    status?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
    license_plate_id?: SortOrder
    status?: SortOrder
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

  export type migrationsOrderByRelevanceInput = {
    fields: migrationsOrderByRelevanceFieldEnum | migrationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type migrationsCountOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsAvgOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsMinOrderByAggregateInput = {
    id?: SortOrder
    migration?: SortOrder
    batch?: SortOrder
  }

  export type migrationsSumOrderByAggregateInput = {
    id?: SortOrder
    batch?: SortOrder
  }

  export type password_reset_tokensOrderByRelevanceInput = {
    fields: password_reset_tokensOrderByRelevanceFieldEnum | password_reset_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type password_reset_tokensCountOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type password_reset_tokensMaxOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type password_reset_tokensMinOrderByAggregateInput = {
    email?: SortOrder
    token?: SortOrder
    created_at?: SortOrder
  }

  export type personal_access_tokensOrderByRelevanceInput = {
    fields: personal_access_tokensOrderByRelevanceFieldEnum | personal_access_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type personal_access_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrder
    last_used_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type personal_access_tokensAvgOrderByAggregateInput = {
    id?: SortOrder
    tokenable_id?: SortOrder
  }

  export type personal_access_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrder
    last_used_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type personal_access_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    tokenable_type?: SortOrder
    tokenable_id?: SortOrder
    name?: SortOrder
    token?: SortOrder
    abilities?: SortOrder
    last_used_at?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type personal_access_tokensSumOrderByAggregateInput = {
    id?: SortOrder
    tokenable_id?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    email_verified_at?: SortOrder
    password?: SortOrder
    remember_token?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TruckScalarRelationFilter = {
    is?: TruckWhereInput
    isNot?: TruckWhereInput
  }

  export type MaintenanceLogOrderByRelevanceInput = {
    fields: MaintenanceLogOrderByRelevanceFieldEnum | MaintenanceLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MaintenanceLogCountOrderByAggregateInput = {
    id?: SortOrder
    truck_id?: SortOrder
    type?: SortOrder
    service_mileage?: SortOrder
    next_service_at?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type MaintenanceLogAvgOrderByAggregateInput = {
    id?: SortOrder
    truck_id?: SortOrder
    service_mileage?: SortOrder
    next_service_at?: SortOrder
  }

  export type MaintenanceLogMaxOrderByAggregateInput = {
    id?: SortOrder
    truck_id?: SortOrder
    type?: SortOrder
    service_mileage?: SortOrder
    next_service_at?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type MaintenanceLogMinOrderByAggregateInput = {
    id?: SortOrder
    truck_id?: SortOrder
    type?: SortOrder
    service_mileage?: SortOrder
    next_service_at?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type MaintenanceLogSumOrderByAggregateInput = {
    id?: SortOrder
    truck_id?: SortOrder
    service_mileage?: SortOrder
    next_service_at?: SortOrder
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

  export type TireItemListRelationFilter = {
    every?: TireItemWhereInput
    some?: TireItemWhereInput
    none?: TireItemWhereInput
  }

  export type TireItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TireChangeHistoryOrderByRelevanceInput = {
    fields: TireChangeHistoryOrderByRelevanceFieldEnum | TireChangeHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TireChangeHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    truck_id?: SortOrder
    change_date?: SortOrder
    mileage_at_change?: SortOrder
    notes?: SortOrder
  }

  export type TireChangeHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    truck_id?: SortOrder
    mileage_at_change?: SortOrder
  }

  export type TireChangeHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    truck_id?: SortOrder
    change_date?: SortOrder
    mileage_at_change?: SortOrder
    notes?: SortOrder
  }

  export type TireChangeHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    truck_id?: SortOrder
    change_date?: SortOrder
    mileage_at_change?: SortOrder
    notes?: SortOrder
  }

  export type TireChangeHistorySumOrderByAggregateInput = {
    id?: SortOrder
    truck_id?: SortOrder
    mileage_at_change?: SortOrder
  }

  export type TireBrandOrderByRelevanceInput = {
    fields: TireBrandOrderByRelevanceFieldEnum | TireBrandOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TireBrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TireBrandAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TireBrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TireBrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TireBrandSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TireBrandScalarRelationFilter = {
    is?: TireBrandWhereInput
    isNot?: TireBrandWhereInput
  }

  export type TireChangeHistoryScalarRelationFilter = {
    is?: TireChangeHistoryWhereInput
    isNot?: TireChangeHistoryWhereInput
  }

  export type TireItemOrderByRelevanceInput = {
    fields: TireItemOrderByRelevanceFieldEnum | TireItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TireItemCountOrderByAggregateInput = {
    id?: SortOrder
    tire_change_id?: SortOrder
    brand_id?: SortOrder
    tire_code?: SortOrder
    position?: SortOrder
  }

  export type TireItemAvgOrderByAggregateInput = {
    id?: SortOrder
    tire_change_id?: SortOrder
    brand_id?: SortOrder
    position?: SortOrder
  }

  export type TireItemMaxOrderByAggregateInput = {
    id?: SortOrder
    tire_change_id?: SortOrder
    brand_id?: SortOrder
    tire_code?: SortOrder
    position?: SortOrder
  }

  export type TireItemMinOrderByAggregateInput = {
    id?: SortOrder
    tire_change_id?: SortOrder
    brand_id?: SortOrder
    tire_code?: SortOrder
    position?: SortOrder
  }

  export type TireItemSumOrderByAggregateInput = {
    id?: SortOrder
    tire_change_id?: SortOrder
    brand_id?: SortOrder
    position?: SortOrder
  }

  export type DriverCreateNestedOneWithoutTrucksInput = {
    create?: XOR<DriverCreateWithoutTrucksInput, DriverUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTrucksInput
    connect?: DriverWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutTruckInput = {
    create?: XOR<ReportCreateWithoutTruckInput, ReportUncheckedCreateWithoutTruckInput> | ReportCreateWithoutTruckInput[] | ReportUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTruckInput | ReportCreateOrConnectWithoutTruckInput[]
    createMany?: ReportCreateManyTruckInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MaintenanceLogCreateNestedManyWithoutTruckInput = {
    create?: XOR<MaintenanceLogCreateWithoutTruckInput, MaintenanceLogUncheckedCreateWithoutTruckInput> | MaintenanceLogCreateWithoutTruckInput[] | MaintenanceLogUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutTruckInput | MaintenanceLogCreateOrConnectWithoutTruckInput[]
    createMany?: MaintenanceLogCreateManyTruckInputEnvelope
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
  }

  export type TireChangeHistoryCreateNestedManyWithoutTruckInput = {
    create?: XOR<TireChangeHistoryCreateWithoutTruckInput, TireChangeHistoryUncheckedCreateWithoutTruckInput> | TireChangeHistoryCreateWithoutTruckInput[] | TireChangeHistoryUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: TireChangeHistoryCreateOrConnectWithoutTruckInput | TireChangeHistoryCreateOrConnectWithoutTruckInput[]
    createMany?: TireChangeHistoryCreateManyTruckInputEnvelope
    connect?: TireChangeHistoryWhereUniqueInput | TireChangeHistoryWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutTruckInput = {
    create?: XOR<ReportCreateWithoutTruckInput, ReportUncheckedCreateWithoutTruckInput> | ReportCreateWithoutTruckInput[] | ReportUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTruckInput | ReportCreateOrConnectWithoutTruckInput[]
    createMany?: ReportCreateManyTruckInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type MaintenanceLogUncheckedCreateNestedManyWithoutTruckInput = {
    create?: XOR<MaintenanceLogCreateWithoutTruckInput, MaintenanceLogUncheckedCreateWithoutTruckInput> | MaintenanceLogCreateWithoutTruckInput[] | MaintenanceLogUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutTruckInput | MaintenanceLogCreateOrConnectWithoutTruckInput[]
    createMany?: MaintenanceLogCreateManyTruckInputEnvelope
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
  }

  export type TireChangeHistoryUncheckedCreateNestedManyWithoutTruckInput = {
    create?: XOR<TireChangeHistoryCreateWithoutTruckInput, TireChangeHistoryUncheckedCreateWithoutTruckInput> | TireChangeHistoryCreateWithoutTruckInput[] | TireChangeHistoryUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: TireChangeHistoryCreateOrConnectWithoutTruckInput | TireChangeHistoryCreateOrConnectWithoutTruckInput[]
    createMany?: TireChangeHistoryCreateManyTruckInputEnvelope
    connect?: TireChangeHistoryWhereUniqueInput | TireChangeHistoryWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DriverUpdateOneWithoutTrucksNestedInput = {
    create?: XOR<DriverCreateWithoutTrucksInput, DriverUncheckedCreateWithoutTrucksInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTrucksInput
    upsert?: DriverUpsertWithoutTrucksInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutTrucksInput, DriverUpdateWithoutTrucksInput>, DriverUncheckedUpdateWithoutTrucksInput>
  }

  export type ReportUpdateManyWithoutTruckNestedInput = {
    create?: XOR<ReportCreateWithoutTruckInput, ReportUncheckedCreateWithoutTruckInput> | ReportCreateWithoutTruckInput[] | ReportUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTruckInput | ReportCreateOrConnectWithoutTruckInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutTruckInput | ReportUpsertWithWhereUniqueWithoutTruckInput[]
    createMany?: ReportCreateManyTruckInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutTruckInput | ReportUpdateWithWhereUniqueWithoutTruckInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutTruckInput | ReportUpdateManyWithWhereWithoutTruckInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MaintenanceLogUpdateManyWithoutTruckNestedInput = {
    create?: XOR<MaintenanceLogCreateWithoutTruckInput, MaintenanceLogUncheckedCreateWithoutTruckInput> | MaintenanceLogCreateWithoutTruckInput[] | MaintenanceLogUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutTruckInput | MaintenanceLogCreateOrConnectWithoutTruckInput[]
    upsert?: MaintenanceLogUpsertWithWhereUniqueWithoutTruckInput | MaintenanceLogUpsertWithWhereUniqueWithoutTruckInput[]
    createMany?: MaintenanceLogCreateManyTruckInputEnvelope
    set?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    disconnect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    delete?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    update?: MaintenanceLogUpdateWithWhereUniqueWithoutTruckInput | MaintenanceLogUpdateWithWhereUniqueWithoutTruckInput[]
    updateMany?: MaintenanceLogUpdateManyWithWhereWithoutTruckInput | MaintenanceLogUpdateManyWithWhereWithoutTruckInput[]
    deleteMany?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
  }

  export type TireChangeHistoryUpdateManyWithoutTruckNestedInput = {
    create?: XOR<TireChangeHistoryCreateWithoutTruckInput, TireChangeHistoryUncheckedCreateWithoutTruckInput> | TireChangeHistoryCreateWithoutTruckInput[] | TireChangeHistoryUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: TireChangeHistoryCreateOrConnectWithoutTruckInput | TireChangeHistoryCreateOrConnectWithoutTruckInput[]
    upsert?: TireChangeHistoryUpsertWithWhereUniqueWithoutTruckInput | TireChangeHistoryUpsertWithWhereUniqueWithoutTruckInput[]
    createMany?: TireChangeHistoryCreateManyTruckInputEnvelope
    set?: TireChangeHistoryWhereUniqueInput | TireChangeHistoryWhereUniqueInput[]
    disconnect?: TireChangeHistoryWhereUniqueInput | TireChangeHistoryWhereUniqueInput[]
    delete?: TireChangeHistoryWhereUniqueInput | TireChangeHistoryWhereUniqueInput[]
    connect?: TireChangeHistoryWhereUniqueInput | TireChangeHistoryWhereUniqueInput[]
    update?: TireChangeHistoryUpdateWithWhereUniqueWithoutTruckInput | TireChangeHistoryUpdateWithWhereUniqueWithoutTruckInput[]
    updateMany?: TireChangeHistoryUpdateManyWithWhereWithoutTruckInput | TireChangeHistoryUpdateManyWithWhereWithoutTruckInput[]
    deleteMany?: TireChangeHistoryScalarWhereInput | TireChangeHistoryScalarWhereInput[]
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ReportUncheckedUpdateManyWithoutTruckNestedInput = {
    create?: XOR<ReportCreateWithoutTruckInput, ReportUncheckedCreateWithoutTruckInput> | ReportCreateWithoutTruckInput[] | ReportUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutTruckInput | ReportCreateOrConnectWithoutTruckInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutTruckInput | ReportUpsertWithWhereUniqueWithoutTruckInput[]
    createMany?: ReportCreateManyTruckInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutTruckInput | ReportUpdateWithWhereUniqueWithoutTruckInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutTruckInput | ReportUpdateManyWithWhereWithoutTruckInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type MaintenanceLogUncheckedUpdateManyWithoutTruckNestedInput = {
    create?: XOR<MaintenanceLogCreateWithoutTruckInput, MaintenanceLogUncheckedCreateWithoutTruckInput> | MaintenanceLogCreateWithoutTruckInput[] | MaintenanceLogUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutTruckInput | MaintenanceLogCreateOrConnectWithoutTruckInput[]
    upsert?: MaintenanceLogUpsertWithWhereUniqueWithoutTruckInput | MaintenanceLogUpsertWithWhereUniqueWithoutTruckInput[]
    createMany?: MaintenanceLogCreateManyTruckInputEnvelope
    set?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    disconnect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    delete?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    update?: MaintenanceLogUpdateWithWhereUniqueWithoutTruckInput | MaintenanceLogUpdateWithWhereUniqueWithoutTruckInput[]
    updateMany?: MaintenanceLogUpdateManyWithWhereWithoutTruckInput | MaintenanceLogUpdateManyWithWhereWithoutTruckInput[]
    deleteMany?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
  }

  export type TireChangeHistoryUncheckedUpdateManyWithoutTruckNestedInput = {
    create?: XOR<TireChangeHistoryCreateWithoutTruckInput, TireChangeHistoryUncheckedCreateWithoutTruckInput> | TireChangeHistoryCreateWithoutTruckInput[] | TireChangeHistoryUncheckedCreateWithoutTruckInput[]
    connectOrCreate?: TireChangeHistoryCreateOrConnectWithoutTruckInput | TireChangeHistoryCreateOrConnectWithoutTruckInput[]
    upsert?: TireChangeHistoryUpsertWithWhereUniqueWithoutTruckInput | TireChangeHistoryUpsertWithWhereUniqueWithoutTruckInput[]
    createMany?: TireChangeHistoryCreateManyTruckInputEnvelope
    set?: TireChangeHistoryWhereUniqueInput | TireChangeHistoryWhereUniqueInput[]
    disconnect?: TireChangeHistoryWhereUniqueInput | TireChangeHistoryWhereUniqueInput[]
    delete?: TireChangeHistoryWhereUniqueInput | TireChangeHistoryWhereUniqueInput[]
    connect?: TireChangeHistoryWhereUniqueInput | TireChangeHistoryWhereUniqueInput[]
    update?: TireChangeHistoryUpdateWithWhereUniqueWithoutTruckInput | TireChangeHistoryUpdateWithWhereUniqueWithoutTruckInput[]
    updateMany?: TireChangeHistoryUpdateManyWithWhereWithoutTruckInput | TireChangeHistoryUpdateManyWithWhereWithoutTruckInput[]
    deleteMany?: TireChangeHistoryScalarWhereInput | TireChangeHistoryScalarWhereInput[]
  }

  export type TruckCreateNestedManyWithoutDriversInput = {
    create?: XOR<TruckCreateWithoutDriversInput, TruckUncheckedCreateWithoutDriversInput> | TruckCreateWithoutDriversInput[] | TruckUncheckedCreateWithoutDriversInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutDriversInput | TruckCreateOrConnectWithoutDriversInput[]
    createMany?: TruckCreateManyDriversInputEnvelope
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
  }

  export type TruckUncheckedCreateNestedManyWithoutDriversInput = {
    create?: XOR<TruckCreateWithoutDriversInput, TruckUncheckedCreateWithoutDriversInput> | TruckCreateWithoutDriversInput[] | TruckUncheckedCreateWithoutDriversInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutDriversInput | TruckCreateOrConnectWithoutDriversInput[]
    createMany?: TruckCreateManyDriversInputEnvelope
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
  }

  export type TruckUpdateManyWithoutDriversNestedInput = {
    create?: XOR<TruckCreateWithoutDriversInput, TruckUncheckedCreateWithoutDriversInput> | TruckCreateWithoutDriversInput[] | TruckUncheckedCreateWithoutDriversInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutDriversInput | TruckCreateOrConnectWithoutDriversInput[]
    upsert?: TruckUpsertWithWhereUniqueWithoutDriversInput | TruckUpsertWithWhereUniqueWithoutDriversInput[]
    createMany?: TruckCreateManyDriversInputEnvelope
    set?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    disconnect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    delete?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    update?: TruckUpdateWithWhereUniqueWithoutDriversInput | TruckUpdateWithWhereUniqueWithoutDriversInput[]
    updateMany?: TruckUpdateManyWithWhereWithoutDriversInput | TruckUpdateManyWithWhereWithoutDriversInput[]
    deleteMany?: TruckScalarWhereInput | TruckScalarWhereInput[]
  }

  export type TruckUncheckedUpdateManyWithoutDriversNestedInput = {
    create?: XOR<TruckCreateWithoutDriversInput, TruckUncheckedCreateWithoutDriversInput> | TruckCreateWithoutDriversInput[] | TruckUncheckedCreateWithoutDriversInput[]
    connectOrCreate?: TruckCreateOrConnectWithoutDriversInput | TruckCreateOrConnectWithoutDriversInput[]
    upsert?: TruckUpsertWithWhereUniqueWithoutDriversInput | TruckUpsertWithWhereUniqueWithoutDriversInput[]
    createMany?: TruckCreateManyDriversInputEnvelope
    set?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    disconnect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    delete?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    connect?: TruckWhereUniqueInput | TruckWhereUniqueInput[]
    update?: TruckUpdateWithWhereUniqueWithoutDriversInput | TruckUpdateWithWhereUniqueWithoutDriversInput[]
    updateMany?: TruckUpdateManyWithWhereWithoutDriversInput | TruckUpdateManyWithWhereWithoutDriversInput[]
    deleteMany?: TruckScalarWhereInput | TruckScalarWhereInput[]
  }

  export type TruckCreateNestedOneWithoutReportsInput = {
    create?: XOR<TruckCreateWithoutReportsInput, TruckUncheckedCreateWithoutReportsInput>
    connectOrCreate?: TruckCreateOrConnectWithoutReportsInput
    connect?: TruckWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TruckUpdateOneWithoutReportsNestedInput = {
    create?: XOR<TruckCreateWithoutReportsInput, TruckUncheckedCreateWithoutReportsInput>
    connectOrCreate?: TruckCreateOrConnectWithoutReportsInput
    upsert?: TruckUpsertWithoutReportsInput
    disconnect?: TruckWhereInput | boolean
    delete?: TruckWhereInput | boolean
    connect?: TruckWhereUniqueInput
    update?: XOR<XOR<TruckUpdateToOneWithWhereWithoutReportsInput, TruckUpdateWithoutReportsInput>, TruckUncheckedUpdateWithoutReportsInput>
  }

  export type TruckCreateNestedOneWithoutMaintenanceLogsInput = {
    create?: XOR<TruckCreateWithoutMaintenanceLogsInput, TruckUncheckedCreateWithoutMaintenanceLogsInput>
    connectOrCreate?: TruckCreateOrConnectWithoutMaintenanceLogsInput
    connect?: TruckWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TruckUpdateOneRequiredWithoutMaintenanceLogsNestedInput = {
    create?: XOR<TruckCreateWithoutMaintenanceLogsInput, TruckUncheckedCreateWithoutMaintenanceLogsInput>
    connectOrCreate?: TruckCreateOrConnectWithoutMaintenanceLogsInput
    upsert?: TruckUpsertWithoutMaintenanceLogsInput
    connect?: TruckWhereUniqueInput
    update?: XOR<XOR<TruckUpdateToOneWithWhereWithoutMaintenanceLogsInput, TruckUpdateWithoutMaintenanceLogsInput>, TruckUncheckedUpdateWithoutMaintenanceLogsInput>
  }

  export type TruckCreateNestedOneWithoutTireChangeHistoriesInput = {
    create?: XOR<TruckCreateWithoutTireChangeHistoriesInput, TruckUncheckedCreateWithoutTireChangeHistoriesInput>
    connectOrCreate?: TruckCreateOrConnectWithoutTireChangeHistoriesInput
    connect?: TruckWhereUniqueInput
  }

  export type TireItemCreateNestedManyWithoutHistoryInput = {
    create?: XOR<TireItemCreateWithoutHistoryInput, TireItemUncheckedCreateWithoutHistoryInput> | TireItemCreateWithoutHistoryInput[] | TireItemUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: TireItemCreateOrConnectWithoutHistoryInput | TireItemCreateOrConnectWithoutHistoryInput[]
    createMany?: TireItemCreateManyHistoryInputEnvelope
    connect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
  }

  export type TireItemUncheckedCreateNestedManyWithoutHistoryInput = {
    create?: XOR<TireItemCreateWithoutHistoryInput, TireItemUncheckedCreateWithoutHistoryInput> | TireItemCreateWithoutHistoryInput[] | TireItemUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: TireItemCreateOrConnectWithoutHistoryInput | TireItemCreateOrConnectWithoutHistoryInput[]
    createMany?: TireItemCreateManyHistoryInputEnvelope
    connect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
  }

  export type TruckUpdateOneRequiredWithoutTireChangeHistoriesNestedInput = {
    create?: XOR<TruckCreateWithoutTireChangeHistoriesInput, TruckUncheckedCreateWithoutTireChangeHistoriesInput>
    connectOrCreate?: TruckCreateOrConnectWithoutTireChangeHistoriesInput
    upsert?: TruckUpsertWithoutTireChangeHistoriesInput
    connect?: TruckWhereUniqueInput
    update?: XOR<XOR<TruckUpdateToOneWithWhereWithoutTireChangeHistoriesInput, TruckUpdateWithoutTireChangeHistoriesInput>, TruckUncheckedUpdateWithoutTireChangeHistoriesInput>
  }

  export type TireItemUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<TireItemCreateWithoutHistoryInput, TireItemUncheckedCreateWithoutHistoryInput> | TireItemCreateWithoutHistoryInput[] | TireItemUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: TireItemCreateOrConnectWithoutHistoryInput | TireItemCreateOrConnectWithoutHistoryInput[]
    upsert?: TireItemUpsertWithWhereUniqueWithoutHistoryInput | TireItemUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: TireItemCreateManyHistoryInputEnvelope
    set?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    disconnect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    delete?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    connect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    update?: TireItemUpdateWithWhereUniqueWithoutHistoryInput | TireItemUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: TireItemUpdateManyWithWhereWithoutHistoryInput | TireItemUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: TireItemScalarWhereInput | TireItemScalarWhereInput[]
  }

  export type TireItemUncheckedUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<TireItemCreateWithoutHistoryInput, TireItemUncheckedCreateWithoutHistoryInput> | TireItemCreateWithoutHistoryInput[] | TireItemUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: TireItemCreateOrConnectWithoutHistoryInput | TireItemCreateOrConnectWithoutHistoryInput[]
    upsert?: TireItemUpsertWithWhereUniqueWithoutHistoryInput | TireItemUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: TireItemCreateManyHistoryInputEnvelope
    set?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    disconnect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    delete?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    connect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    update?: TireItemUpdateWithWhereUniqueWithoutHistoryInput | TireItemUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: TireItemUpdateManyWithWhereWithoutHistoryInput | TireItemUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: TireItemScalarWhereInput | TireItemScalarWhereInput[]
  }

  export type TireItemCreateNestedManyWithoutBrandInput = {
    create?: XOR<TireItemCreateWithoutBrandInput, TireItemUncheckedCreateWithoutBrandInput> | TireItemCreateWithoutBrandInput[] | TireItemUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: TireItemCreateOrConnectWithoutBrandInput | TireItemCreateOrConnectWithoutBrandInput[]
    createMany?: TireItemCreateManyBrandInputEnvelope
    connect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
  }

  export type TireItemUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<TireItemCreateWithoutBrandInput, TireItemUncheckedCreateWithoutBrandInput> | TireItemCreateWithoutBrandInput[] | TireItemUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: TireItemCreateOrConnectWithoutBrandInput | TireItemCreateOrConnectWithoutBrandInput[]
    createMany?: TireItemCreateManyBrandInputEnvelope
    connect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
  }

  export type TireItemUpdateManyWithoutBrandNestedInput = {
    create?: XOR<TireItemCreateWithoutBrandInput, TireItemUncheckedCreateWithoutBrandInput> | TireItemCreateWithoutBrandInput[] | TireItemUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: TireItemCreateOrConnectWithoutBrandInput | TireItemCreateOrConnectWithoutBrandInput[]
    upsert?: TireItemUpsertWithWhereUniqueWithoutBrandInput | TireItemUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: TireItemCreateManyBrandInputEnvelope
    set?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    disconnect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    delete?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    connect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    update?: TireItemUpdateWithWhereUniqueWithoutBrandInput | TireItemUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: TireItemUpdateManyWithWhereWithoutBrandInput | TireItemUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: TireItemScalarWhereInput | TireItemScalarWhereInput[]
  }

  export type TireItemUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<TireItemCreateWithoutBrandInput, TireItemUncheckedCreateWithoutBrandInput> | TireItemCreateWithoutBrandInput[] | TireItemUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: TireItemCreateOrConnectWithoutBrandInput | TireItemCreateOrConnectWithoutBrandInput[]
    upsert?: TireItemUpsertWithWhereUniqueWithoutBrandInput | TireItemUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: TireItemCreateManyBrandInputEnvelope
    set?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    disconnect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    delete?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    connect?: TireItemWhereUniqueInput | TireItemWhereUniqueInput[]
    update?: TireItemUpdateWithWhereUniqueWithoutBrandInput | TireItemUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: TireItemUpdateManyWithWhereWithoutBrandInput | TireItemUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: TireItemScalarWhereInput | TireItemScalarWhereInput[]
  }

  export type TireBrandCreateNestedOneWithoutItemsInput = {
    create?: XOR<TireBrandCreateWithoutItemsInput, TireBrandUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TireBrandCreateOrConnectWithoutItemsInput
    connect?: TireBrandWhereUniqueInput
  }

  export type TireChangeHistoryCreateNestedOneWithoutTireItemsInput = {
    create?: XOR<TireChangeHistoryCreateWithoutTireItemsInput, TireChangeHistoryUncheckedCreateWithoutTireItemsInput>
    connectOrCreate?: TireChangeHistoryCreateOrConnectWithoutTireItemsInput
    connect?: TireChangeHistoryWhereUniqueInput
  }

  export type TireBrandUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<TireBrandCreateWithoutItemsInput, TireBrandUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TireBrandCreateOrConnectWithoutItemsInput
    upsert?: TireBrandUpsertWithoutItemsInput
    connect?: TireBrandWhereUniqueInput
    update?: XOR<XOR<TireBrandUpdateToOneWithWhereWithoutItemsInput, TireBrandUpdateWithoutItemsInput>, TireBrandUncheckedUpdateWithoutItemsInput>
  }

  export type TireChangeHistoryUpdateOneRequiredWithoutTireItemsNestedInput = {
    create?: XOR<TireChangeHistoryCreateWithoutTireItemsInput, TireChangeHistoryUncheckedCreateWithoutTireItemsInput>
    connectOrCreate?: TireChangeHistoryCreateOrConnectWithoutTireItemsInput
    upsert?: TireChangeHistoryUpsertWithoutTireItemsInput
    connect?: TireChangeHistoryWhereUniqueInput
    update?: XOR<XOR<TireChangeHistoryUpdateToOneWithWhereWithoutTireItemsInput, TireChangeHistoryUpdateWithoutTireItemsInput>, TireChangeHistoryUncheckedUpdateWithoutTireItemsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type DriverCreateWithoutTrucksInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type DriverUncheckedCreateWithoutTrucksInput = {
    id?: bigint | number
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type DriverCreateOrConnectWithoutTrucksInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutTrucksInput, DriverUncheckedCreateWithoutTrucksInput>
  }

  export type ReportCreateWithoutTruckInput = {
    id?: bigint | number
    repair: string
    status?: number
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ReportUncheckedCreateWithoutTruckInput = {
    id?: bigint | number
    repair: string
    status?: number
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ReportCreateOrConnectWithoutTruckInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutTruckInput, ReportUncheckedCreateWithoutTruckInput>
  }

  export type ReportCreateManyTruckInputEnvelope = {
    data: ReportCreateManyTruckInput | ReportCreateManyTruckInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceLogCreateWithoutTruckInput = {
    id?: bigint | number
    type: string
    service_mileage: number
    next_service_at: number
    description?: string | null
    created_at?: Date | string
  }

  export type MaintenanceLogUncheckedCreateWithoutTruckInput = {
    id?: bigint | number
    type: string
    service_mileage: number
    next_service_at: number
    description?: string | null
    created_at?: Date | string
  }

  export type MaintenanceLogCreateOrConnectWithoutTruckInput = {
    where: MaintenanceLogWhereUniqueInput
    create: XOR<MaintenanceLogCreateWithoutTruckInput, MaintenanceLogUncheckedCreateWithoutTruckInput>
  }

  export type MaintenanceLogCreateManyTruckInputEnvelope = {
    data: MaintenanceLogCreateManyTruckInput | MaintenanceLogCreateManyTruckInput[]
    skipDuplicates?: boolean
  }

  export type TireChangeHistoryCreateWithoutTruckInput = {
    id?: bigint | number
    change_date?: Date | string
    mileage_at_change: number
    notes?: string | null
    tireItems?: TireItemCreateNestedManyWithoutHistoryInput
  }

  export type TireChangeHistoryUncheckedCreateWithoutTruckInput = {
    id?: bigint | number
    change_date?: Date | string
    mileage_at_change: number
    notes?: string | null
    tireItems?: TireItemUncheckedCreateNestedManyWithoutHistoryInput
  }

  export type TireChangeHistoryCreateOrConnectWithoutTruckInput = {
    where: TireChangeHistoryWhereUniqueInput
    create: XOR<TireChangeHistoryCreateWithoutTruckInput, TireChangeHistoryUncheckedCreateWithoutTruckInput>
  }

  export type TireChangeHistoryCreateManyTruckInputEnvelope = {
    data: TireChangeHistoryCreateManyTruckInput | TireChangeHistoryCreateManyTruckInput[]
    skipDuplicates?: boolean
  }

  export type DriverUpsertWithoutTrucksInput = {
    update: XOR<DriverUpdateWithoutTrucksInput, DriverUncheckedUpdateWithoutTrucksInput>
    create: XOR<DriverCreateWithoutTrucksInput, DriverUncheckedCreateWithoutTrucksInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutTrucksInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutTrucksInput, DriverUncheckedUpdateWithoutTrucksInput>
  }

  export type DriverUpdateWithoutTrucksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverUncheckedUpdateWithoutTrucksInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportUpsertWithWhereUniqueWithoutTruckInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutTruckInput, ReportUncheckedUpdateWithoutTruckInput>
    create: XOR<ReportCreateWithoutTruckInput, ReportUncheckedCreateWithoutTruckInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutTruckInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutTruckInput, ReportUncheckedUpdateWithoutTruckInput>
  }

  export type ReportUpdateManyWithWhereWithoutTruckInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutTruckInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: BigIntFilter<"Report"> | bigint | number
    license_plate_id?: BigIntFilter<"Report"> | bigint | number
    repair?: StringFilter<"Report"> | string
    status?: IntFilter<"Report"> | number
    description?: StringNullableFilter<"Report"> | string | null
    created_at?: DateTimeNullableFilter<"Report"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Report"> | Date | string | null
  }

  export type MaintenanceLogUpsertWithWhereUniqueWithoutTruckInput = {
    where: MaintenanceLogWhereUniqueInput
    update: XOR<MaintenanceLogUpdateWithoutTruckInput, MaintenanceLogUncheckedUpdateWithoutTruckInput>
    create: XOR<MaintenanceLogCreateWithoutTruckInput, MaintenanceLogUncheckedCreateWithoutTruckInput>
  }

  export type MaintenanceLogUpdateWithWhereUniqueWithoutTruckInput = {
    where: MaintenanceLogWhereUniqueInput
    data: XOR<MaintenanceLogUpdateWithoutTruckInput, MaintenanceLogUncheckedUpdateWithoutTruckInput>
  }

  export type MaintenanceLogUpdateManyWithWhereWithoutTruckInput = {
    where: MaintenanceLogScalarWhereInput
    data: XOR<MaintenanceLogUpdateManyMutationInput, MaintenanceLogUncheckedUpdateManyWithoutTruckInput>
  }

  export type MaintenanceLogScalarWhereInput = {
    AND?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
    OR?: MaintenanceLogScalarWhereInput[]
    NOT?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
    id?: BigIntFilter<"MaintenanceLog"> | bigint | number
    truck_id?: BigIntFilter<"MaintenanceLog"> | bigint | number
    type?: StringFilter<"MaintenanceLog"> | string
    service_mileage?: IntFilter<"MaintenanceLog"> | number
    next_service_at?: IntFilter<"MaintenanceLog"> | number
    description?: StringNullableFilter<"MaintenanceLog"> | string | null
    created_at?: DateTimeFilter<"MaintenanceLog"> | Date | string
  }

  export type TireChangeHistoryUpsertWithWhereUniqueWithoutTruckInput = {
    where: TireChangeHistoryWhereUniqueInput
    update: XOR<TireChangeHistoryUpdateWithoutTruckInput, TireChangeHistoryUncheckedUpdateWithoutTruckInput>
    create: XOR<TireChangeHistoryCreateWithoutTruckInput, TireChangeHistoryUncheckedCreateWithoutTruckInput>
  }

  export type TireChangeHistoryUpdateWithWhereUniqueWithoutTruckInput = {
    where: TireChangeHistoryWhereUniqueInput
    data: XOR<TireChangeHistoryUpdateWithoutTruckInput, TireChangeHistoryUncheckedUpdateWithoutTruckInput>
  }

  export type TireChangeHistoryUpdateManyWithWhereWithoutTruckInput = {
    where: TireChangeHistoryScalarWhereInput
    data: XOR<TireChangeHistoryUpdateManyMutationInput, TireChangeHistoryUncheckedUpdateManyWithoutTruckInput>
  }

  export type TireChangeHistoryScalarWhereInput = {
    AND?: TireChangeHistoryScalarWhereInput | TireChangeHistoryScalarWhereInput[]
    OR?: TireChangeHistoryScalarWhereInput[]
    NOT?: TireChangeHistoryScalarWhereInput | TireChangeHistoryScalarWhereInput[]
    id?: BigIntFilter<"TireChangeHistory"> | bigint | number
    truck_id?: BigIntFilter<"TireChangeHistory"> | bigint | number
    change_date?: DateTimeFilter<"TireChangeHistory"> | Date | string
    mileage_at_change?: IntFilter<"TireChangeHistory"> | number
    notes?: StringNullableFilter<"TireChangeHistory"> | string | null
  }

  export type TruckCreateWithoutDriversInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reports?: ReportCreateNestedManyWithoutTruckInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutTruckInput
    tireChangeHistories?: TireChangeHistoryCreateNestedManyWithoutTruckInput
  }

  export type TruckUncheckedCreateWithoutDriversInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutTruckInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutTruckInput
    tireChangeHistories?: TireChangeHistoryUncheckedCreateNestedManyWithoutTruckInput
  }

  export type TruckCreateOrConnectWithoutDriversInput = {
    where: TruckWhereUniqueInput
    create: XOR<TruckCreateWithoutDriversInput, TruckUncheckedCreateWithoutDriversInput>
  }

  export type TruckCreateManyDriversInputEnvelope = {
    data: TruckCreateManyDriversInput | TruckCreateManyDriversInput[]
    skipDuplicates?: boolean
  }

  export type TruckUpsertWithWhereUniqueWithoutDriversInput = {
    where: TruckWhereUniqueInput
    update: XOR<TruckUpdateWithoutDriversInput, TruckUncheckedUpdateWithoutDriversInput>
    create: XOR<TruckCreateWithoutDriversInput, TruckUncheckedCreateWithoutDriversInput>
  }

  export type TruckUpdateWithWhereUniqueWithoutDriversInput = {
    where: TruckWhereUniqueInput
    data: XOR<TruckUpdateWithoutDriversInput, TruckUncheckedUpdateWithoutDriversInput>
  }

  export type TruckUpdateManyWithWhereWithoutDriversInput = {
    where: TruckScalarWhereInput
    data: XOR<TruckUpdateManyMutationInput, TruckUncheckedUpdateManyWithoutDriversInput>
  }

  export type TruckScalarWhereInput = {
    AND?: TruckScalarWhereInput | TruckScalarWhereInput[]
    OR?: TruckScalarWhereInput[]
    NOT?: TruckScalarWhereInput | TruckScalarWhereInput[]
    id?: BigIntFilter<"Truck"> | bigint | number
    number_plate?: StringFilter<"Truck"> | string
    current_mileage?: IntFilter<"Truck"> | number
    driver_id?: BigIntNullableFilter<"Truck"> | bigint | number | null
    created_at?: DateTimeNullableFilter<"Truck"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Truck"> | Date | string | null
  }

  export type TruckCreateWithoutReportsInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    drivers?: DriverCreateNestedOneWithoutTrucksInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutTruckInput
    tireChangeHistories?: TireChangeHistoryCreateNestedManyWithoutTruckInput
  }

  export type TruckUncheckedCreateWithoutReportsInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    driver_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutTruckInput
    tireChangeHistories?: TireChangeHistoryUncheckedCreateNestedManyWithoutTruckInput
  }

  export type TruckCreateOrConnectWithoutReportsInput = {
    where: TruckWhereUniqueInput
    create: XOR<TruckCreateWithoutReportsInput, TruckUncheckedCreateWithoutReportsInput>
  }

  export type TruckUpsertWithoutReportsInput = {
    update: XOR<TruckUpdateWithoutReportsInput, TruckUncheckedUpdateWithoutReportsInput>
    create: XOR<TruckCreateWithoutReportsInput, TruckUncheckedCreateWithoutReportsInput>
    where?: TruckWhereInput
  }

  export type TruckUpdateToOneWithWhereWithoutReportsInput = {
    where?: TruckWhereInput
    data: XOR<TruckUpdateWithoutReportsInput, TruckUncheckedUpdateWithoutReportsInput>
  }

  export type TruckUpdateWithoutReportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: DriverUpdateOneWithoutTrucksNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutTruckNestedInput
    tireChangeHistories?: TireChangeHistoryUpdateManyWithoutTruckNestedInput
  }

  export type TruckUncheckedUpdateWithoutReportsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    driver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutTruckNestedInput
    tireChangeHistories?: TireChangeHistoryUncheckedUpdateManyWithoutTruckNestedInput
  }

  export type TruckCreateWithoutMaintenanceLogsInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    drivers?: DriverCreateNestedOneWithoutTrucksInput
    reports?: ReportCreateNestedManyWithoutTruckInput
    tireChangeHistories?: TireChangeHistoryCreateNestedManyWithoutTruckInput
  }

  export type TruckUncheckedCreateWithoutMaintenanceLogsInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    driver_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutTruckInput
    tireChangeHistories?: TireChangeHistoryUncheckedCreateNestedManyWithoutTruckInput
  }

  export type TruckCreateOrConnectWithoutMaintenanceLogsInput = {
    where: TruckWhereUniqueInput
    create: XOR<TruckCreateWithoutMaintenanceLogsInput, TruckUncheckedCreateWithoutMaintenanceLogsInput>
  }

  export type TruckUpsertWithoutMaintenanceLogsInput = {
    update: XOR<TruckUpdateWithoutMaintenanceLogsInput, TruckUncheckedUpdateWithoutMaintenanceLogsInput>
    create: XOR<TruckCreateWithoutMaintenanceLogsInput, TruckUncheckedCreateWithoutMaintenanceLogsInput>
    where?: TruckWhereInput
  }

  export type TruckUpdateToOneWithWhereWithoutMaintenanceLogsInput = {
    where?: TruckWhereInput
    data: XOR<TruckUpdateWithoutMaintenanceLogsInput, TruckUncheckedUpdateWithoutMaintenanceLogsInput>
  }

  export type TruckUpdateWithoutMaintenanceLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: DriverUpdateOneWithoutTrucksNestedInput
    reports?: ReportUpdateManyWithoutTruckNestedInput
    tireChangeHistories?: TireChangeHistoryUpdateManyWithoutTruckNestedInput
  }

  export type TruckUncheckedUpdateWithoutMaintenanceLogsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    driver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutTruckNestedInput
    tireChangeHistories?: TireChangeHistoryUncheckedUpdateManyWithoutTruckNestedInput
  }

  export type TruckCreateWithoutTireChangeHistoriesInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    drivers?: DriverCreateNestedOneWithoutTrucksInput
    reports?: ReportCreateNestedManyWithoutTruckInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutTruckInput
  }

  export type TruckUncheckedCreateWithoutTireChangeHistoriesInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    driver_id?: bigint | number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutTruckInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutTruckInput
  }

  export type TruckCreateOrConnectWithoutTireChangeHistoriesInput = {
    where: TruckWhereUniqueInput
    create: XOR<TruckCreateWithoutTireChangeHistoriesInput, TruckUncheckedCreateWithoutTireChangeHistoriesInput>
  }

  export type TireItemCreateWithoutHistoryInput = {
    id?: bigint | number
    tire_code: string
    position: number
    brand: TireBrandCreateNestedOneWithoutItemsInput
  }

  export type TireItemUncheckedCreateWithoutHistoryInput = {
    id?: bigint | number
    brand_id: number
    tire_code: string
    position: number
  }

  export type TireItemCreateOrConnectWithoutHistoryInput = {
    where: TireItemWhereUniqueInput
    create: XOR<TireItemCreateWithoutHistoryInput, TireItemUncheckedCreateWithoutHistoryInput>
  }

  export type TireItemCreateManyHistoryInputEnvelope = {
    data: TireItemCreateManyHistoryInput | TireItemCreateManyHistoryInput[]
    skipDuplicates?: boolean
  }

  export type TruckUpsertWithoutTireChangeHistoriesInput = {
    update: XOR<TruckUpdateWithoutTireChangeHistoriesInput, TruckUncheckedUpdateWithoutTireChangeHistoriesInput>
    create: XOR<TruckCreateWithoutTireChangeHistoriesInput, TruckUncheckedCreateWithoutTireChangeHistoriesInput>
    where?: TruckWhereInput
  }

  export type TruckUpdateToOneWithWhereWithoutTireChangeHistoriesInput = {
    where?: TruckWhereInput
    data: XOR<TruckUpdateWithoutTireChangeHistoriesInput, TruckUncheckedUpdateWithoutTireChangeHistoriesInput>
  }

  export type TruckUpdateWithoutTireChangeHistoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: DriverUpdateOneWithoutTrucksNestedInput
    reports?: ReportUpdateManyWithoutTruckNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutTruckNestedInput
  }

  export type TruckUncheckedUpdateWithoutTireChangeHistoriesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    driver_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutTruckNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutTruckNestedInput
  }

  export type TireItemUpsertWithWhereUniqueWithoutHistoryInput = {
    where: TireItemWhereUniqueInput
    update: XOR<TireItemUpdateWithoutHistoryInput, TireItemUncheckedUpdateWithoutHistoryInput>
    create: XOR<TireItemCreateWithoutHistoryInput, TireItemUncheckedCreateWithoutHistoryInput>
  }

  export type TireItemUpdateWithWhereUniqueWithoutHistoryInput = {
    where: TireItemWhereUniqueInput
    data: XOR<TireItemUpdateWithoutHistoryInput, TireItemUncheckedUpdateWithoutHistoryInput>
  }

  export type TireItemUpdateManyWithWhereWithoutHistoryInput = {
    where: TireItemScalarWhereInput
    data: XOR<TireItemUpdateManyMutationInput, TireItemUncheckedUpdateManyWithoutHistoryInput>
  }

  export type TireItemScalarWhereInput = {
    AND?: TireItemScalarWhereInput | TireItemScalarWhereInput[]
    OR?: TireItemScalarWhereInput[]
    NOT?: TireItemScalarWhereInput | TireItemScalarWhereInput[]
    id?: BigIntFilter<"TireItem"> | bigint | number
    tire_change_id?: BigIntFilter<"TireItem"> | bigint | number
    brand_id?: IntFilter<"TireItem"> | number
    tire_code?: StringFilter<"TireItem"> | string
    position?: IntFilter<"TireItem"> | number
  }

  export type TireItemCreateWithoutBrandInput = {
    id?: bigint | number
    tire_code: string
    position: number
    history: TireChangeHistoryCreateNestedOneWithoutTireItemsInput
  }

  export type TireItemUncheckedCreateWithoutBrandInput = {
    id?: bigint | number
    tire_change_id: bigint | number
    tire_code: string
    position: number
  }

  export type TireItemCreateOrConnectWithoutBrandInput = {
    where: TireItemWhereUniqueInput
    create: XOR<TireItemCreateWithoutBrandInput, TireItemUncheckedCreateWithoutBrandInput>
  }

  export type TireItemCreateManyBrandInputEnvelope = {
    data: TireItemCreateManyBrandInput | TireItemCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type TireItemUpsertWithWhereUniqueWithoutBrandInput = {
    where: TireItemWhereUniqueInput
    update: XOR<TireItemUpdateWithoutBrandInput, TireItemUncheckedUpdateWithoutBrandInput>
    create: XOR<TireItemCreateWithoutBrandInput, TireItemUncheckedCreateWithoutBrandInput>
  }

  export type TireItemUpdateWithWhereUniqueWithoutBrandInput = {
    where: TireItemWhereUniqueInput
    data: XOR<TireItemUpdateWithoutBrandInput, TireItemUncheckedUpdateWithoutBrandInput>
  }

  export type TireItemUpdateManyWithWhereWithoutBrandInput = {
    where: TireItemScalarWhereInput
    data: XOR<TireItemUpdateManyMutationInput, TireItemUncheckedUpdateManyWithoutBrandInput>
  }

  export type TireBrandCreateWithoutItemsInput = {
    name: string
  }

  export type TireBrandUncheckedCreateWithoutItemsInput = {
    id?: number
    name: string
  }

  export type TireBrandCreateOrConnectWithoutItemsInput = {
    where: TireBrandWhereUniqueInput
    create: XOR<TireBrandCreateWithoutItemsInput, TireBrandUncheckedCreateWithoutItemsInput>
  }

  export type TireChangeHistoryCreateWithoutTireItemsInput = {
    id?: bigint | number
    change_date?: Date | string
    mileage_at_change: number
    notes?: string | null
    truck: TruckCreateNestedOneWithoutTireChangeHistoriesInput
  }

  export type TireChangeHistoryUncheckedCreateWithoutTireItemsInput = {
    id?: bigint | number
    truck_id: bigint | number
    change_date?: Date | string
    mileage_at_change: number
    notes?: string | null
  }

  export type TireChangeHistoryCreateOrConnectWithoutTireItemsInput = {
    where: TireChangeHistoryWhereUniqueInput
    create: XOR<TireChangeHistoryCreateWithoutTireItemsInput, TireChangeHistoryUncheckedCreateWithoutTireItemsInput>
  }

  export type TireBrandUpsertWithoutItemsInput = {
    update: XOR<TireBrandUpdateWithoutItemsInput, TireBrandUncheckedUpdateWithoutItemsInput>
    create: XOR<TireBrandCreateWithoutItemsInput, TireBrandUncheckedCreateWithoutItemsInput>
    where?: TireBrandWhereInput
  }

  export type TireBrandUpdateToOneWithWhereWithoutItemsInput = {
    where?: TireBrandWhereInput
    data: XOR<TireBrandUpdateWithoutItemsInput, TireBrandUncheckedUpdateWithoutItemsInput>
  }

  export type TireBrandUpdateWithoutItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TireBrandUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TireChangeHistoryUpsertWithoutTireItemsInput = {
    update: XOR<TireChangeHistoryUpdateWithoutTireItemsInput, TireChangeHistoryUncheckedUpdateWithoutTireItemsInput>
    create: XOR<TireChangeHistoryCreateWithoutTireItemsInput, TireChangeHistoryUncheckedCreateWithoutTireItemsInput>
    where?: TireChangeHistoryWhereInput
  }

  export type TireChangeHistoryUpdateToOneWithWhereWithoutTireItemsInput = {
    where?: TireChangeHistoryWhereInput
    data: XOR<TireChangeHistoryUpdateWithoutTireItemsInput, TireChangeHistoryUncheckedUpdateWithoutTireItemsInput>
  }

  export type TireChangeHistoryUpdateWithoutTireItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage_at_change?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    truck?: TruckUpdateOneRequiredWithoutTireChangeHistoriesNestedInput
  }

  export type TireChangeHistoryUncheckedUpdateWithoutTireItemsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    truck_id?: BigIntFieldUpdateOperationsInput | bigint | number
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage_at_change?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportCreateManyTruckInput = {
    id?: bigint | number
    repair: string
    status?: number
    description?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type MaintenanceLogCreateManyTruckInput = {
    id?: bigint | number
    type: string
    service_mileage: number
    next_service_at: number
    description?: string | null
    created_at?: Date | string
  }

  export type TireChangeHistoryCreateManyTruckInput = {
    id?: bigint | number
    change_date?: Date | string
    mileage_at_change: number
    notes?: string | null
  }

  export type ReportUpdateWithoutTruckInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    repair?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportUncheckedUpdateWithoutTruckInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    repair?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportUncheckedUpdateManyWithoutTruckInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    repair?: StringFieldUpdateOperationsInput | string
    status?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceLogUpdateWithoutTruckInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    service_mileage?: IntFieldUpdateOperationsInput | number
    next_service_at?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateWithoutTruckInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    service_mileage?: IntFieldUpdateOperationsInput | number
    next_service_at?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateManyWithoutTruckInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    service_mileage?: IntFieldUpdateOperationsInput | number
    next_service_at?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TireChangeHistoryUpdateWithoutTruckInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage_at_change?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tireItems?: TireItemUpdateManyWithoutHistoryNestedInput
  }

  export type TireChangeHistoryUncheckedUpdateWithoutTruckInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage_at_change?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    tireItems?: TireItemUncheckedUpdateManyWithoutHistoryNestedInput
  }

  export type TireChangeHistoryUncheckedUpdateManyWithoutTruckInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    change_date?: DateTimeFieldUpdateOperationsInput | Date | string
    mileage_at_change?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TruckCreateManyDriversInput = {
    id?: bigint | number
    number_plate: string
    current_mileage?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type TruckUpdateWithoutDriversInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUpdateManyWithoutTruckNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutTruckNestedInput
    tireChangeHistories?: TireChangeHistoryUpdateManyWithoutTruckNestedInput
  }

  export type TruckUncheckedUpdateWithoutDriversInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutTruckNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutTruckNestedInput
    tireChangeHistories?: TireChangeHistoryUncheckedUpdateManyWithoutTruckNestedInput
  }

  export type TruckUncheckedUpdateManyWithoutDriversInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    number_plate?: StringFieldUpdateOperationsInput | string
    current_mileage?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TireItemCreateManyHistoryInput = {
    id?: bigint | number
    brand_id: number
    tire_code: string
    position: number
  }

  export type TireItemUpdateWithoutHistoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tire_code?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    brand?: TireBrandUpdateOneRequiredWithoutItemsNestedInput
  }

  export type TireItemUncheckedUpdateWithoutHistoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    brand_id?: IntFieldUpdateOperationsInput | number
    tire_code?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type TireItemUncheckedUpdateManyWithoutHistoryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    brand_id?: IntFieldUpdateOperationsInput | number
    tire_code?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type TireItemCreateManyBrandInput = {
    id?: bigint | number
    tire_change_id: bigint | number
    tire_code: string
    position: number
  }

  export type TireItemUpdateWithoutBrandInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tire_code?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    history?: TireChangeHistoryUpdateOneRequiredWithoutTireItemsNestedInput
  }

  export type TireItemUncheckedUpdateWithoutBrandInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tire_change_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tire_code?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
  }

  export type TireItemUncheckedUpdateManyWithoutBrandInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tire_change_id?: BigIntFieldUpdateOperationsInput | bigint | number
    tire_code?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
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