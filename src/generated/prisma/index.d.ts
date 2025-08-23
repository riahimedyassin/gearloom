
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Column
 * 
 */
export type Column = $Result.DefaultSelection<Prisma.$ColumnPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model SubTask
 * 
 */
export type SubTask = $Result.DefaultSelection<Prisma.$SubTaskPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model TaskAttachment
 * 
 */
export type TaskAttachment = $Result.DefaultSelection<Prisma.$TaskAttachmentPayload>
/**
 * Model Pomorounds
 * 
 */
export type Pomorounds = $Result.DefaultSelection<Prisma.$PomoroundsPayload>
/**
 * Model Label
 * 
 */
export type Label = $Result.DefaultSelection<Prisma.$LabelPayload>
/**
 * Model TaskLabel
 * 
 */
export type TaskLabel = $Result.DefaultSelection<Prisma.$TaskLabelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectType: {
  learning: 'learning',
  custom: 'custom',
  startup: 'startup'
};

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType]


export const TaskPriority: {
  low: 'low',
  high: 'high',
  medium: 'medium'
};

export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority]


export const AttachmentType: {
  picture: 'picture',
  video: 'video',
  link: 'link',
  document: 'document'
};

export type AttachmentType = (typeof AttachmentType)[keyof typeof AttachmentType]

}

export type ProjectType = $Enums.ProjectType

export const ProjectType: typeof $Enums.ProjectType

export type TaskPriority = $Enums.TaskPriority

export const TaskPriority: typeof $Enums.TaskPriority

export type AttachmentType = $Enums.AttachmentType

export const AttachmentType: typeof $Enums.AttachmentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.column`: Exposes CRUD operations for the **Column** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Columns
    * const columns = await prisma.column.findMany()
    * ```
    */
  get column(): Prisma.ColumnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subTask`: Exposes CRUD operations for the **SubTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubTasks
    * const subTasks = await prisma.subTask.findMany()
    * ```
    */
  get subTask(): Prisma.SubTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskAttachment`: Exposes CRUD operations for the **TaskAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskAttachments
    * const taskAttachments = await prisma.taskAttachment.findMany()
    * ```
    */
  get taskAttachment(): Prisma.TaskAttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pomorounds`: Exposes CRUD operations for the **Pomorounds** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pomorounds
    * const pomorounds = await prisma.pomorounds.findMany()
    * ```
    */
  get pomorounds(): Prisma.PomoroundsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.label`: Exposes CRUD operations for the **Label** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Labels
    * const labels = await prisma.label.findMany()
    * ```
    */
  get label(): Prisma.LabelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskLabel`: Exposes CRUD operations for the **TaskLabel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskLabels
    * const taskLabels = await prisma.taskLabel.findMany()
    * ```
    */
  get taskLabel(): Prisma.TaskLabelDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    User: 'User',
    Project: 'Project',
    Column: 'Column',
    Task: 'Task',
    SubTask: 'SubTask',
    Comment: 'Comment',
    TaskAttachment: 'TaskAttachment',
    Pomorounds: 'Pomorounds',
    Label: 'Label',
    TaskLabel: 'TaskLabel'
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
      modelProps: "user" | "project" | "column" | "task" | "subTask" | "comment" | "taskAttachment" | "pomorounds" | "label" | "taskLabel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Column: {
        payload: Prisma.$ColumnPayload<ExtArgs>
        fields: Prisma.ColumnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColumnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColumnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          findFirst: {
            args: Prisma.ColumnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColumnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          findMany: {
            args: Prisma.ColumnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          create: {
            args: Prisma.ColumnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          createMany: {
            args: Prisma.ColumnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColumnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          delete: {
            args: Prisma.ColumnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          update: {
            args: Prisma.ColumnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          deleteMany: {
            args: Prisma.ColumnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColumnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColumnUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          upsert: {
            args: Prisma.ColumnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          aggregate: {
            args: Prisma.ColumnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumn>
          }
          groupBy: {
            args: Prisma.ColumnGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColumnCountArgs<ExtArgs>
            result: $Utils.Optional<ColumnCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      SubTask: {
        payload: Prisma.$SubTaskPayload<ExtArgs>
        fields: Prisma.SubTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload>
          }
          findFirst: {
            args: Prisma.SubTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload>
          }
          findMany: {
            args: Prisma.SubTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload>[]
          }
          create: {
            args: Prisma.SubTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload>
          }
          createMany: {
            args: Prisma.SubTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload>[]
          }
          delete: {
            args: Prisma.SubTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload>
          }
          update: {
            args: Prisma.SubTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload>
          }
          deleteMany: {
            args: Prisma.SubTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload>[]
          }
          upsert: {
            args: Prisma.SubTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTaskPayload>
          }
          aggregate: {
            args: Prisma.SubTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubTask>
          }
          groupBy: {
            args: Prisma.SubTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubTaskCountArgs<ExtArgs>
            result: $Utils.Optional<SubTaskCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      TaskAttachment: {
        payload: Prisma.$TaskAttachmentPayload<ExtArgs>
        fields: Prisma.TaskAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload>
          }
          findFirst: {
            args: Prisma.TaskAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload>
          }
          findMany: {
            args: Prisma.TaskAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload>[]
          }
          create: {
            args: Prisma.TaskAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload>
          }
          createMany: {
            args: Prisma.TaskAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload>[]
          }
          delete: {
            args: Prisma.TaskAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload>
          }
          update: {
            args: Prisma.TaskAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.TaskAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskAttachmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload>[]
          }
          upsert: {
            args: Prisma.TaskAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskAttachmentPayload>
          }
          aggregate: {
            args: Prisma.TaskAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskAttachment>
          }
          groupBy: {
            args: Prisma.TaskAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<TaskAttachmentCountAggregateOutputType> | number
          }
        }
      }
      Pomorounds: {
        payload: Prisma.$PomoroundsPayload<ExtArgs>
        fields: Prisma.PomoroundsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PomoroundsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PomoroundsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload>
          }
          findFirst: {
            args: Prisma.PomoroundsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PomoroundsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload>
          }
          findMany: {
            args: Prisma.PomoroundsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload>[]
          }
          create: {
            args: Prisma.PomoroundsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload>
          }
          createMany: {
            args: Prisma.PomoroundsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PomoroundsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload>[]
          }
          delete: {
            args: Prisma.PomoroundsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload>
          }
          update: {
            args: Prisma.PomoroundsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload>
          }
          deleteMany: {
            args: Prisma.PomoroundsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PomoroundsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PomoroundsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload>[]
          }
          upsert: {
            args: Prisma.PomoroundsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PomoroundsPayload>
          }
          aggregate: {
            args: Prisma.PomoroundsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePomorounds>
          }
          groupBy: {
            args: Prisma.PomoroundsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PomoroundsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PomoroundsCountArgs<ExtArgs>
            result: $Utils.Optional<PomoroundsCountAggregateOutputType> | number
          }
        }
      }
      Label: {
        payload: Prisma.$LabelPayload<ExtArgs>
        fields: Prisma.LabelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LabelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LabelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          findFirst: {
            args: Prisma.LabelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LabelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          findMany: {
            args: Prisma.LabelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>[]
          }
          create: {
            args: Prisma.LabelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          createMany: {
            args: Prisma.LabelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LabelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>[]
          }
          delete: {
            args: Prisma.LabelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          update: {
            args: Prisma.LabelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          deleteMany: {
            args: Prisma.LabelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LabelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LabelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>[]
          }
          upsert: {
            args: Prisma.LabelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LabelPayload>
          }
          aggregate: {
            args: Prisma.LabelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLabel>
          }
          groupBy: {
            args: Prisma.LabelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LabelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LabelCountArgs<ExtArgs>
            result: $Utils.Optional<LabelCountAggregateOutputType> | number
          }
        }
      }
      TaskLabel: {
        payload: Prisma.$TaskLabelPayload<ExtArgs>
        fields: Prisma.TaskLabelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskLabelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskLabelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload>
          }
          findFirst: {
            args: Prisma.TaskLabelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskLabelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload>
          }
          findMany: {
            args: Prisma.TaskLabelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload>[]
          }
          create: {
            args: Prisma.TaskLabelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload>
          }
          createMany: {
            args: Prisma.TaskLabelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskLabelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload>[]
          }
          delete: {
            args: Prisma.TaskLabelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload>
          }
          update: {
            args: Prisma.TaskLabelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload>
          }
          deleteMany: {
            args: Prisma.TaskLabelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskLabelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskLabelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload>[]
          }
          upsert: {
            args: Prisma.TaskLabelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskLabelPayload>
          }
          aggregate: {
            args: Prisma.TaskLabelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskLabel>
          }
          groupBy: {
            args: Prisma.TaskLabelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskLabelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskLabelCountArgs<ExtArgs>
            result: $Utils.Optional<TaskLabelCountAggregateOutputType> | number
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
    user?: UserOmit
    project?: ProjectOmit
    column?: ColumnOmit
    task?: TaskOmit
    subTask?: SubTaskOmit
    comment?: CommentOmit
    taskAttachment?: TaskAttachmentOmit
    pomorounds?: PomoroundsOmit
    label?: LabelOmit
    taskLabel?: TaskLabelOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdTasks: number
    assignedTasks: number
    projects: number
    comments: number
    pomorounds: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdTasks?: boolean | UserCountOutputTypeCountCreatedTasksArgs
    assignedTasks?: boolean | UserCountOutputTypeCountAssignedTasksArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    pomorounds?: boolean | UserCountOutputTypeCountPomoroundsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPomoroundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PomoroundsWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type ColumnCountOutputType
   */

  export type ColumnCountOutputType = {
    tasks: number
  }

  export type ColumnCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ColumnCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnCountOutputType
     */
    select?: ColumnCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    subTasks: number
    pomorounds: number
    taskLabels: number
    comments: number
    attachments: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subTasks?: boolean | TaskCountOutputTypeCountSubTasksArgs
    pomorounds?: boolean | TaskCountOutputTypeCountPomoroundsArgs
    taskLabels?: boolean | TaskCountOutputTypeCountTaskLabelsArgs
    comments?: boolean | TaskCountOutputTypeCountCommentsArgs
    attachments?: boolean | TaskCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubTaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountPomoroundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PomoroundsWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTaskLabelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLabelWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAttachmentWhereInput
  }


  /**
   * Count Type LabelCountOutputType
   */

  export type LabelCountOutputType = {
    taskLabels: number
  }

  export type LabelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskLabels?: boolean | LabelCountOutputTypeCountTaskLabelsArgs
  }

  // Custom InputTypes
  /**
   * LabelCountOutputType without action
   */
  export type LabelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LabelCountOutputType
     */
    select?: LabelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LabelCountOutputType without action
   */
  export type LabelCountOutputTypeCountTaskLabelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLabelWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    pomorounds?: boolean | User$pomoroundsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdTasks?: boolean | User$createdTasksArgs<ExtArgs>
    assignedTasks?: boolean | User$assignedTasksArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    pomorounds?: boolean | User$pomoroundsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdTasks: Prisma.$TaskPayload<ExtArgs>[]
      assignedTasks: Prisma.$TaskPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      pomorounds: Prisma.$PomoroundsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdTasks<T extends User$createdTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTasks<T extends User$assignedTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pomorounds<T extends User$pomoroundsArgs<ExtArgs> = {}>(args?: Subset<T, User$pomoroundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdTasks
   */
  export type User$createdTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.assignedTasks
   */
  export type User$assignedTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.pomorounds
   */
  export type User$pomoroundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    where?: PomoroundsWhereInput
    orderBy?: PomoroundsOrderByWithRelationInput | PomoroundsOrderByWithRelationInput[]
    cursor?: PomoroundsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PomoroundsScalarFieldEnum | PomoroundsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: $Enums.ProjectType | null
    ownerId: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    type: $Enums.ProjectType | null
    ownerId: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    ownerId: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    ownerId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    ownerId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    ownerId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string
    type: $Enums.ProjectType
    ownerId: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    ownerId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "type" | "ownerId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      type: $Enums.ProjectType
      ownerId: number
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly type: FieldRef<"Project", 'ProjectType'>
    readonly ownerId: FieldRef<"Project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Column
   */

  export type AggregateColumn = {
    _count: ColumnCountAggregateOutputType | null
    _avg: ColumnAvgAggregateOutputType | null
    _sum: ColumnSumAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  export type ColumnAvgAggregateOutputType = {
    id: number | null
  }

  export type ColumnSumAggregateOutputType = {
    id: number | null
  }

  export type ColumnMinAggregateOutputType = {
    id: number | null
    name: string | null
    isDone: boolean | null
  }

  export type ColumnMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isDone: boolean | null
  }

  export type ColumnCountAggregateOutputType = {
    id: number
    name: number
    isDone: number
    _all: number
  }


  export type ColumnAvgAggregateInputType = {
    id?: true
  }

  export type ColumnSumAggregateInputType = {
    id?: true
  }

  export type ColumnMinAggregateInputType = {
    id?: true
    name?: true
    isDone?: true
  }

  export type ColumnMaxAggregateInputType = {
    id?: true
    name?: true
    isDone?: true
  }

  export type ColumnCountAggregateInputType = {
    id?: true
    name?: true
    isDone?: true
    _all?: true
  }

  export type ColumnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Column to aggregate.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Columns
    **/
    _count?: true | ColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColumnMaxAggregateInputType
  }

  export type GetColumnAggregateType<T extends ColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumn[P]>
      : GetScalarType<T[P], AggregateColumn[P]>
  }




  export type ColumnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnWhereInput
    orderBy?: ColumnOrderByWithAggregationInput | ColumnOrderByWithAggregationInput[]
    by: ColumnScalarFieldEnum[] | ColumnScalarFieldEnum
    having?: ColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColumnCountAggregateInputType | true
    _avg?: ColumnAvgAggregateInputType
    _sum?: ColumnSumAggregateInputType
    _min?: ColumnMinAggregateInputType
    _max?: ColumnMaxAggregateInputType
  }

  export type ColumnGroupByOutputType = {
    id: number
    name: string
    isDone: boolean
    _count: ColumnCountAggregateOutputType | null
    _avg: ColumnAvgAggregateOutputType | null
    _sum: ColumnSumAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  type GetColumnGroupByPayload<T extends ColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnGroupByOutputType[P]>
        }
      >
    >


  export type ColumnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDone?: boolean
    tasks?: boolean | Column$tasksArgs<ExtArgs>
    _count?: boolean | ColumnCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDone?: boolean
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isDone?: boolean
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectScalar = {
    id?: boolean
    name?: boolean
    isDone?: boolean
  }

  export type ColumnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isDone", ExtArgs["result"]["column"]>
  export type ColumnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Column$tasksArgs<ExtArgs>
    _count?: boolean | ColumnCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ColumnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ColumnIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ColumnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Column"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isDone: boolean
    }, ExtArgs["result"]["column"]>
    composites: {}
  }

  type ColumnGetPayload<S extends boolean | null | undefined | ColumnDefaultArgs> = $Result.GetResult<Prisma.$ColumnPayload, S>

  type ColumnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColumnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColumnCountAggregateInputType | true
    }

  export interface ColumnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Column'], meta: { name: 'Column' } }
    /**
     * Find zero or one Column that matches the filter.
     * @param {ColumnFindUniqueArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColumnFindUniqueArgs>(args: SelectSubset<T, ColumnFindUniqueArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Column that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColumnFindUniqueOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColumnFindUniqueOrThrowArgs>(args: SelectSubset<T, ColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Column that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColumnFindFirstArgs>(args?: SelectSubset<T, ColumnFindFirstArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Column that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColumnFindFirstOrThrowArgs>(args?: SelectSubset<T, ColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Columns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Columns
     * const columns = await prisma.column.findMany()
     * 
     * // Get first 10 Columns
     * const columns = await prisma.column.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const columnWithIdOnly = await prisma.column.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColumnFindManyArgs>(args?: SelectSubset<T, ColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Column.
     * @param {ColumnCreateArgs} args - Arguments to create a Column.
     * @example
     * // Create one Column
     * const Column = await prisma.column.create({
     *   data: {
     *     // ... data to create a Column
     *   }
     * })
     * 
     */
    create<T extends ColumnCreateArgs>(args: SelectSubset<T, ColumnCreateArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Columns.
     * @param {ColumnCreateManyArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColumnCreateManyArgs>(args?: SelectSubset<T, ColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Columns and returns the data saved in the database.
     * @param {ColumnCreateManyAndReturnArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Columns and only return the `id`
     * const columnWithIdOnly = await prisma.column.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColumnCreateManyAndReturnArgs>(args?: SelectSubset<T, ColumnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Column.
     * @param {ColumnDeleteArgs} args - Arguments to delete one Column.
     * @example
     * // Delete one Column
     * const Column = await prisma.column.delete({
     *   where: {
     *     // ... filter to delete one Column
     *   }
     * })
     * 
     */
    delete<T extends ColumnDeleteArgs>(args: SelectSubset<T, ColumnDeleteArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Column.
     * @param {ColumnUpdateArgs} args - Arguments to update one Column.
     * @example
     * // Update one Column
     * const column = await prisma.column.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColumnUpdateArgs>(args: SelectSubset<T, ColumnUpdateArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Columns.
     * @param {ColumnDeleteManyArgs} args - Arguments to filter Columns to delete.
     * @example
     * // Delete a few Columns
     * const { count } = await prisma.column.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColumnDeleteManyArgs>(args?: SelectSubset<T, ColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColumnUpdateManyArgs>(args: SelectSubset<T, ColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns and returns the data updated in the database.
     * @param {ColumnUpdateManyAndReturnArgs} args - Arguments to update many Columns.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Columns and only return the `id`
     * const columnWithIdOnly = await prisma.column.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColumnUpdateManyAndReturnArgs>(args: SelectSubset<T, ColumnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Column.
     * @param {ColumnUpsertArgs} args - Arguments to update or create a Column.
     * @example
     * // Update or create a Column
     * const column = await prisma.column.upsert({
     *   create: {
     *     // ... data to create a Column
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Column we want to update
     *   }
     * })
     */
    upsert<T extends ColumnUpsertArgs>(args: SelectSubset<T, ColumnUpsertArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnCountArgs} args - Arguments to filter Columns to count.
     * @example
     * // Count the number of Columns
     * const count = await prisma.column.count({
     *   where: {
     *     // ... the filter for the Columns we want to count
     *   }
     * })
    **/
    count<T extends ColumnCountArgs>(
      args?: Subset<T, ColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColumnAggregateArgs>(args: Subset<T, ColumnAggregateArgs>): Prisma.PrismaPromise<GetColumnAggregateType<T>>

    /**
     * Group by Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnGroupByArgs} args - Group by arguments.
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
      T extends ColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnGroupByArgs['orderBy'] }
        : { orderBy?: ColumnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Column model
   */
  readonly fields: ColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Column.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColumnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Column$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Column$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Column model
   */
  interface ColumnFieldRefs {
    readonly id: FieldRef<"Column", 'Int'>
    readonly name: FieldRef<"Column", 'String'>
    readonly isDone: FieldRef<"Column", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Column findUnique
   */
  export type ColumnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findUniqueOrThrow
   */
  export type ColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findFirst
   */
  export type ColumnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column findFirstOrThrow
   */
  export type ColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column findMany
   */
  export type ColumnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column create
   */
  export type ColumnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a Column.
     */
    data: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
  }

  /**
   * Column createMany
   */
  export type ColumnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Column createManyAndReturn
   */
  export type ColumnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Column update
   */
  export type ColumnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a Column.
     */
    data: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
    /**
     * Choose, which Column to update.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column updateMany
   */
  export type ColumnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to update.
     */
    limit?: number
  }

  /**
   * Column updateManyAndReturn
   */
  export type ColumnUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to update.
     */
    limit?: number
  }

  /**
   * Column upsert
   */
  export type ColumnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the Column to update in case it exists.
     */
    where: ColumnWhereUniqueInput
    /**
     * In case the Column found by the `where` argument doesn't exist, create a new Column with this data.
     */
    create: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
    /**
     * In case the Column was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
  }

  /**
   * Column delete
   */
  export type ColumnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter which Column to delete.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column deleteMany
   */
  export type ColumnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Columns to delete
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to delete.
     */
    limit?: number
  }

  /**
   * Column.tasks
   */
  export type Column$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Column without action
   */
  export type ColumnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    order: number | null
    createdById: number | null
    assignedToId: number | null
    projectId: number | null
    columnId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    order: number | null
    createdById: number | null
    assignedToId: number | null
    projectId: number | null
    columnId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    priority: $Enums.TaskPriority | null
    order: number | null
    createdAt: Date | null
    createdById: number | null
    assignedToId: number | null
    projectId: number | null
    columnId: number | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    priority: $Enums.TaskPriority | null
    order: number | null
    createdAt: Date | null
    createdById: number | null
    assignedToId: number | null
    projectId: number | null
    columnId: number | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    priority: number
    order: number
    createdAt: number
    createdById: number
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    order?: true
    createdById?: true
    assignedToId?: true
    projectId?: true
    columnId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    order?: true
    createdById?: true
    assignedToId?: true
    projectId?: true
    columnId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    order?: true
    createdAt?: true
    createdById?: true
    assignedToId?: true
    projectId?: true
    columnId?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    order?: true
    createdAt?: true
    createdById?: true
    assignedToId?: true
    projectId?: true
    columnId?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    order?: true
    createdAt?: true
    createdById?: true
    assignedToId?: true
    projectId?: true
    columnId?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order: number
    createdAt: Date
    createdById: number
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt: Date
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    order?: boolean
    createdAt?: boolean
    createdById?: boolean
    assignedToId?: boolean
    projectId?: boolean
    columnId?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    subTasks?: boolean | Task$subTasksArgs<ExtArgs>
    pomorounds?: boolean | Task$pomoroundsArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    taskLabels?: boolean | Task$taskLabelsArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    attachments?: boolean | Task$attachmentsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    order?: boolean
    createdAt?: boolean
    createdById?: boolean
    assignedToId?: boolean
    projectId?: boolean
    columnId?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    order?: boolean
    createdAt?: boolean
    createdById?: boolean
    assignedToId?: boolean
    projectId?: boolean
    columnId?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    order?: boolean
    createdAt?: boolean
    createdById?: boolean
    assignedToId?: boolean
    projectId?: boolean
    columnId?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "priority" | "order" | "createdAt" | "createdById" | "assignedToId" | "projectId" | "columnId" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    subTasks?: boolean | Task$subTasksArgs<ExtArgs>
    pomorounds?: boolean | Task$pomoroundsArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    taskLabels?: boolean | Task$taskLabelsArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    attachments?: boolean | Task$attachmentsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    assignedTo?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs>
      subTasks: Prisma.$SubTaskPayload<ExtArgs>[]
      pomorounds: Prisma.$PomoroundsPayload<ExtArgs>[]
      project: Prisma.$ProjectPayload<ExtArgs>
      taskLabels: Prisma.$TaskLabelPayload<ExtArgs>[]
      column: Prisma.$ColumnPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      attachments: Prisma.$TaskAttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      priority: $Enums.TaskPriority
      order: number
      createdAt: Date
      createdById: number
      assignedToId: number
      projectId: number
      columnId: number
      updatedAt: Date
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subTasks<T extends Task$subTasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$subTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pomorounds<T extends Task$pomoroundsArgs<ExtArgs> = {}>(args?: Subset<T, Task$pomoroundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    taskLabels<T extends Task$taskLabelsArgs<ExtArgs> = {}>(args?: Subset<T, Task$taskLabelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    column<T extends ColumnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColumnDefaultArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Task$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Task$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'TaskPriority'>
    readonly order: FieldRef<"Task", 'Int'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly createdById: FieldRef<"Task", 'Int'>
    readonly assignedToId: FieldRef<"Task", 'Int'>
    readonly projectId: FieldRef<"Task", 'Int'>
    readonly columnId: FieldRef<"Task", 'Int'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.subTasks
   */
  export type Task$subTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
    where?: SubTaskWhereInput
    orderBy?: SubTaskOrderByWithRelationInput | SubTaskOrderByWithRelationInput[]
    cursor?: SubTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubTaskScalarFieldEnum | SubTaskScalarFieldEnum[]
  }

  /**
   * Task.pomorounds
   */
  export type Task$pomoroundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    where?: PomoroundsWhereInput
    orderBy?: PomoroundsOrderByWithRelationInput | PomoroundsOrderByWithRelationInput[]
    cursor?: PomoroundsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PomoroundsScalarFieldEnum | PomoroundsScalarFieldEnum[]
  }

  /**
   * Task.taskLabels
   */
  export type Task$taskLabelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    where?: TaskLabelWhereInput
    orderBy?: TaskLabelOrderByWithRelationInput | TaskLabelOrderByWithRelationInput[]
    cursor?: TaskLabelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskLabelScalarFieldEnum | TaskLabelScalarFieldEnum[]
  }

  /**
   * Task.comments
   */
  export type Task$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Task.attachments
   */
  export type Task$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
    where?: TaskAttachmentWhereInput
    orderBy?: TaskAttachmentOrderByWithRelationInput | TaskAttachmentOrderByWithRelationInput[]
    cursor?: TaskAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskAttachmentScalarFieldEnum | TaskAttachmentScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model SubTask
   */

  export type AggregateSubTask = {
    _count: SubTaskCountAggregateOutputType | null
    _avg: SubTaskAvgAggregateOutputType | null
    _sum: SubTaskSumAggregateOutputType | null
    _min: SubTaskMinAggregateOutputType | null
    _max: SubTaskMaxAggregateOutputType | null
  }

  export type SubTaskAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type SubTaskSumAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type SubTaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    priority: $Enums.TaskPriority | null
    createdAt: Date | null
    taskId: number | null
    updatedAt: Date | null
  }

  export type SubTaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    priority: $Enums.TaskPriority | null
    createdAt: Date | null
    taskId: number | null
    updatedAt: Date | null
  }

  export type SubTaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    priority: number
    createdAt: number
    taskId: number
    updatedAt: number
    _all: number
  }


  export type SubTaskAvgAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type SubTaskSumAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type SubTaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    createdAt?: true
    taskId?: true
    updatedAt?: true
  }

  export type SubTaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    createdAt?: true
    taskId?: true
    updatedAt?: true
  }

  export type SubTaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    priority?: true
    createdAt?: true
    taskId?: true
    updatedAt?: true
    _all?: true
  }

  export type SubTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubTask to aggregate.
     */
    where?: SubTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTasks to fetch.
     */
    orderBy?: SubTaskOrderByWithRelationInput | SubTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubTasks
    **/
    _count?: true | SubTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubTaskMaxAggregateInputType
  }

  export type GetSubTaskAggregateType<T extends SubTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateSubTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubTask[P]>
      : GetScalarType<T[P], AggregateSubTask[P]>
  }




  export type SubTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubTaskWhereInput
    orderBy?: SubTaskOrderByWithAggregationInput | SubTaskOrderByWithAggregationInput[]
    by: SubTaskScalarFieldEnum[] | SubTaskScalarFieldEnum
    having?: SubTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubTaskCountAggregateInputType | true
    _avg?: SubTaskAvgAggregateInputType
    _sum?: SubTaskSumAggregateInputType
    _min?: SubTaskMinAggregateInputType
    _max?: SubTaskMaxAggregateInputType
  }

  export type SubTaskGroupByOutputType = {
    id: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    createdAt: Date
    taskId: number
    updatedAt: Date
    _count: SubTaskCountAggregateOutputType | null
    _avg: SubTaskAvgAggregateOutputType | null
    _sum: SubTaskSumAggregateOutputType | null
    _min: SubTaskMinAggregateOutputType | null
    _max: SubTaskMaxAggregateOutputType | null
  }

  type GetSubTaskGroupByPayload<T extends SubTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubTaskGroupByOutputType[P]>
            : GetScalarType<T[P], SubTaskGroupByOutputType[P]>
        }
      >
    >


  export type SubTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    createdAt?: boolean
    taskId?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subTask"]>

  export type SubTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    createdAt?: boolean
    taskId?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subTask"]>

  export type SubTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    createdAt?: boolean
    taskId?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subTask"]>

  export type SubTaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    priority?: boolean
    createdAt?: boolean
    taskId?: boolean
    updatedAt?: boolean
  }

  export type SubTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "priority" | "createdAt" | "taskId" | "updatedAt", ExtArgs["result"]["subTask"]>
  export type SubTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type SubTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type SubTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $SubTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubTask"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      priority: $Enums.TaskPriority
      createdAt: Date
      taskId: number
      updatedAt: Date
    }, ExtArgs["result"]["subTask"]>
    composites: {}
  }

  type SubTaskGetPayload<S extends boolean | null | undefined | SubTaskDefaultArgs> = $Result.GetResult<Prisma.$SubTaskPayload, S>

  type SubTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubTaskCountAggregateInputType | true
    }

  export interface SubTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubTask'], meta: { name: 'SubTask' } }
    /**
     * Find zero or one SubTask that matches the filter.
     * @param {SubTaskFindUniqueArgs} args - Arguments to find a SubTask
     * @example
     * // Get one SubTask
     * const subTask = await prisma.subTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubTaskFindUniqueArgs>(args: SelectSubset<T, SubTaskFindUniqueArgs<ExtArgs>>): Prisma__SubTaskClient<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubTaskFindUniqueOrThrowArgs} args - Arguments to find a SubTask
     * @example
     * // Get one SubTask
     * const subTask = await prisma.subTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, SubTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubTaskClient<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTaskFindFirstArgs} args - Arguments to find a SubTask
     * @example
     * // Get one SubTask
     * const subTask = await prisma.subTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubTaskFindFirstArgs>(args?: SelectSubset<T, SubTaskFindFirstArgs<ExtArgs>>): Prisma__SubTaskClient<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTaskFindFirstOrThrowArgs} args - Arguments to find a SubTask
     * @example
     * // Get one SubTask
     * const subTask = await prisma.subTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, SubTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubTaskClient<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubTasks
     * const subTasks = await prisma.subTask.findMany()
     * 
     * // Get first 10 SubTasks
     * const subTasks = await prisma.subTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subTaskWithIdOnly = await prisma.subTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubTaskFindManyArgs>(args?: SelectSubset<T, SubTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubTask.
     * @param {SubTaskCreateArgs} args - Arguments to create a SubTask.
     * @example
     * // Create one SubTask
     * const SubTask = await prisma.subTask.create({
     *   data: {
     *     // ... data to create a SubTask
     *   }
     * })
     * 
     */
    create<T extends SubTaskCreateArgs>(args: SelectSubset<T, SubTaskCreateArgs<ExtArgs>>): Prisma__SubTaskClient<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubTasks.
     * @param {SubTaskCreateManyArgs} args - Arguments to create many SubTasks.
     * @example
     * // Create many SubTasks
     * const subTask = await prisma.subTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubTaskCreateManyArgs>(args?: SelectSubset<T, SubTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubTasks and returns the data saved in the database.
     * @param {SubTaskCreateManyAndReturnArgs} args - Arguments to create many SubTasks.
     * @example
     * // Create many SubTasks
     * const subTask = await prisma.subTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubTasks and only return the `id`
     * const subTaskWithIdOnly = await prisma.subTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, SubTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubTask.
     * @param {SubTaskDeleteArgs} args - Arguments to delete one SubTask.
     * @example
     * // Delete one SubTask
     * const SubTask = await prisma.subTask.delete({
     *   where: {
     *     // ... filter to delete one SubTask
     *   }
     * })
     * 
     */
    delete<T extends SubTaskDeleteArgs>(args: SelectSubset<T, SubTaskDeleteArgs<ExtArgs>>): Prisma__SubTaskClient<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubTask.
     * @param {SubTaskUpdateArgs} args - Arguments to update one SubTask.
     * @example
     * // Update one SubTask
     * const subTask = await prisma.subTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubTaskUpdateArgs>(args: SelectSubset<T, SubTaskUpdateArgs<ExtArgs>>): Prisma__SubTaskClient<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubTasks.
     * @param {SubTaskDeleteManyArgs} args - Arguments to filter SubTasks to delete.
     * @example
     * // Delete a few SubTasks
     * const { count } = await prisma.subTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubTaskDeleteManyArgs>(args?: SelectSubset<T, SubTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubTasks
     * const subTask = await prisma.subTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubTaskUpdateManyArgs>(args: SelectSubset<T, SubTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubTasks and returns the data updated in the database.
     * @param {SubTaskUpdateManyAndReturnArgs} args - Arguments to update many SubTasks.
     * @example
     * // Update many SubTasks
     * const subTask = await prisma.subTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubTasks and only return the `id`
     * const subTaskWithIdOnly = await prisma.subTask.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, SubTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubTask.
     * @param {SubTaskUpsertArgs} args - Arguments to update or create a SubTask.
     * @example
     * // Update or create a SubTask
     * const subTask = await prisma.subTask.upsert({
     *   create: {
     *     // ... data to create a SubTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubTask we want to update
     *   }
     * })
     */
    upsert<T extends SubTaskUpsertArgs>(args: SelectSubset<T, SubTaskUpsertArgs<ExtArgs>>): Prisma__SubTaskClient<$Result.GetResult<Prisma.$SubTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTaskCountArgs} args - Arguments to filter SubTasks to count.
     * @example
     * // Count the number of SubTasks
     * const count = await prisma.subTask.count({
     *   where: {
     *     // ... the filter for the SubTasks we want to count
     *   }
     * })
    **/
    count<T extends SubTaskCountArgs>(
      args?: Subset<T, SubTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubTaskAggregateArgs>(args: Subset<T, SubTaskAggregateArgs>): Prisma.PrismaPromise<GetSubTaskAggregateType<T>>

    /**
     * Group by SubTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTaskGroupByArgs} args - Group by arguments.
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
      T extends SubTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubTaskGroupByArgs['orderBy'] }
        : { orderBy?: SubTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubTask model
   */
  readonly fields: SubTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubTask model
   */
  interface SubTaskFieldRefs {
    readonly id: FieldRef<"SubTask", 'Int'>
    readonly title: FieldRef<"SubTask", 'String'>
    readonly description: FieldRef<"SubTask", 'String'>
    readonly priority: FieldRef<"SubTask", 'TaskPriority'>
    readonly createdAt: FieldRef<"SubTask", 'DateTime'>
    readonly taskId: FieldRef<"SubTask", 'Int'>
    readonly updatedAt: FieldRef<"SubTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubTask findUnique
   */
  export type SubTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
    /**
     * Filter, which SubTask to fetch.
     */
    where: SubTaskWhereUniqueInput
  }

  /**
   * SubTask findUniqueOrThrow
   */
  export type SubTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
    /**
     * Filter, which SubTask to fetch.
     */
    where: SubTaskWhereUniqueInput
  }

  /**
   * SubTask findFirst
   */
  export type SubTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
    /**
     * Filter, which SubTask to fetch.
     */
    where?: SubTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTasks to fetch.
     */
    orderBy?: SubTaskOrderByWithRelationInput | SubTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubTasks.
     */
    cursor?: SubTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubTasks.
     */
    distinct?: SubTaskScalarFieldEnum | SubTaskScalarFieldEnum[]
  }

  /**
   * SubTask findFirstOrThrow
   */
  export type SubTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
    /**
     * Filter, which SubTask to fetch.
     */
    where?: SubTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTasks to fetch.
     */
    orderBy?: SubTaskOrderByWithRelationInput | SubTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubTasks.
     */
    cursor?: SubTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubTasks.
     */
    distinct?: SubTaskScalarFieldEnum | SubTaskScalarFieldEnum[]
  }

  /**
   * SubTask findMany
   */
  export type SubTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
    /**
     * Filter, which SubTasks to fetch.
     */
    where?: SubTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTasks to fetch.
     */
    orderBy?: SubTaskOrderByWithRelationInput | SubTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubTasks.
     */
    cursor?: SubTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTasks.
     */
    skip?: number
    distinct?: SubTaskScalarFieldEnum | SubTaskScalarFieldEnum[]
  }

  /**
   * SubTask create
   */
  export type SubTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a SubTask.
     */
    data: XOR<SubTaskCreateInput, SubTaskUncheckedCreateInput>
  }

  /**
   * SubTask createMany
   */
  export type SubTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubTasks.
     */
    data: SubTaskCreateManyInput | SubTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubTask createManyAndReturn
   */
  export type SubTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * The data used to create many SubTasks.
     */
    data: SubTaskCreateManyInput | SubTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubTask update
   */
  export type SubTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a SubTask.
     */
    data: XOR<SubTaskUpdateInput, SubTaskUncheckedUpdateInput>
    /**
     * Choose, which SubTask to update.
     */
    where: SubTaskWhereUniqueInput
  }

  /**
   * SubTask updateMany
   */
  export type SubTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubTasks.
     */
    data: XOR<SubTaskUpdateManyMutationInput, SubTaskUncheckedUpdateManyInput>
    /**
     * Filter which SubTasks to update
     */
    where?: SubTaskWhereInput
    /**
     * Limit how many SubTasks to update.
     */
    limit?: number
  }

  /**
   * SubTask updateManyAndReturn
   */
  export type SubTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * The data used to update SubTasks.
     */
    data: XOR<SubTaskUpdateManyMutationInput, SubTaskUncheckedUpdateManyInput>
    /**
     * Filter which SubTasks to update
     */
    where?: SubTaskWhereInput
    /**
     * Limit how many SubTasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubTask upsert
   */
  export type SubTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the SubTask to update in case it exists.
     */
    where: SubTaskWhereUniqueInput
    /**
     * In case the SubTask found by the `where` argument doesn't exist, create a new SubTask with this data.
     */
    create: XOR<SubTaskCreateInput, SubTaskUncheckedCreateInput>
    /**
     * In case the SubTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubTaskUpdateInput, SubTaskUncheckedUpdateInput>
  }

  /**
   * SubTask delete
   */
  export type SubTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
    /**
     * Filter which SubTask to delete.
     */
    where: SubTaskWhereUniqueInput
  }

  /**
   * SubTask deleteMany
   */
  export type SubTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubTasks to delete
     */
    where?: SubTaskWhereInput
    /**
     * Limit how many SubTasks to delete.
     */
    limit?: number
  }

  /**
   * SubTask without action
   */
  export type SubTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTask
     */
    select?: SubTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTask
     */
    omit?: SubTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTaskInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
    taskId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    taskId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    createdById: number | null
    taskId: number | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    createdById: number | null
    taskId: number | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    createdById: number
    taskId: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    createdById?: true
    taskId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    createdById?: true
    taskId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    taskId?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    createdById?: true
    taskId?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    createdById?: true
    taskId?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    content: JsonValue
    createdAt: Date
    createdById: number
    taskId: number
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    createdById?: boolean
    taskId?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    createdById?: boolean
    taskId?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    createdById?: boolean
    taskId?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    createdById?: boolean
    taskId?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "createdById" | "taskId" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: Prisma.JsonValue
      createdAt: Date
      createdById: number
      taskId: number
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'Json'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly createdById: FieldRef<"Comment", 'Int'>
    readonly taskId: FieldRef<"Comment", 'Int'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model TaskAttachment
   */

  export type AggregateTaskAttachment = {
    _count: TaskAttachmentCountAggregateOutputType | null
    _avg: TaskAttachmentAvgAggregateOutputType | null
    _sum: TaskAttachmentSumAggregateOutputType | null
    _min: TaskAttachmentMinAggregateOutputType | null
    _max: TaskAttachmentMaxAggregateOutputType | null
  }

  export type TaskAttachmentAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type TaskAttachmentSumAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type TaskAttachmentMinAggregateOutputType = {
    id: number | null
    type: $Enums.AttachmentType | null
    link: string | null
    taskId: number | null
  }

  export type TaskAttachmentMaxAggregateOutputType = {
    id: number | null
    type: $Enums.AttachmentType | null
    link: string | null
    taskId: number | null
  }

  export type TaskAttachmentCountAggregateOutputType = {
    id: number
    type: number
    link: number
    taskId: number
    _all: number
  }


  export type TaskAttachmentAvgAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type TaskAttachmentSumAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type TaskAttachmentMinAggregateInputType = {
    id?: true
    type?: true
    link?: true
    taskId?: true
  }

  export type TaskAttachmentMaxAggregateInputType = {
    id?: true
    type?: true
    link?: true
    taskId?: true
  }

  export type TaskAttachmentCountAggregateInputType = {
    id?: true
    type?: true
    link?: true
    taskId?: true
    _all?: true
  }

  export type TaskAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskAttachment to aggregate.
     */
    where?: TaskAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAttachments to fetch.
     */
    orderBy?: TaskAttachmentOrderByWithRelationInput | TaskAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskAttachments
    **/
    _count?: true | TaskAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskAttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskAttachmentMaxAggregateInputType
  }

  export type GetTaskAttachmentAggregateType<T extends TaskAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskAttachment[P]>
      : GetScalarType<T[P], AggregateTaskAttachment[P]>
  }




  export type TaskAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskAttachmentWhereInput
    orderBy?: TaskAttachmentOrderByWithAggregationInput | TaskAttachmentOrderByWithAggregationInput[]
    by: TaskAttachmentScalarFieldEnum[] | TaskAttachmentScalarFieldEnum
    having?: TaskAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskAttachmentCountAggregateInputType | true
    _avg?: TaskAttachmentAvgAggregateInputType
    _sum?: TaskAttachmentSumAggregateInputType
    _min?: TaskAttachmentMinAggregateInputType
    _max?: TaskAttachmentMaxAggregateInputType
  }

  export type TaskAttachmentGroupByOutputType = {
    id: number
    type: $Enums.AttachmentType
    link: string
    taskId: number
    _count: TaskAttachmentCountAggregateOutputType | null
    _avg: TaskAttachmentAvgAggregateOutputType | null
    _sum: TaskAttachmentSumAggregateOutputType | null
    _min: TaskAttachmentMinAggregateOutputType | null
    _max: TaskAttachmentMaxAggregateOutputType | null
  }

  type GetTaskAttachmentGroupByPayload<T extends TaskAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], TaskAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type TaskAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    link?: boolean
    taskId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAttachment"]>

  export type TaskAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    link?: boolean
    taskId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAttachment"]>

  export type TaskAttachmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    link?: boolean
    taskId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskAttachment"]>

  export type TaskAttachmentSelectScalar = {
    id?: boolean
    type?: boolean
    link?: boolean
    taskId?: boolean
  }

  export type TaskAttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "link" | "taskId", ExtArgs["result"]["taskAttachment"]>
  export type TaskAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskAttachmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskAttachment"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.AttachmentType
      link: string
      taskId: number
    }, ExtArgs["result"]["taskAttachment"]>
    composites: {}
  }

  type TaskAttachmentGetPayload<S extends boolean | null | undefined | TaskAttachmentDefaultArgs> = $Result.GetResult<Prisma.$TaskAttachmentPayload, S>

  type TaskAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskAttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskAttachmentCountAggregateInputType | true
    }

  export interface TaskAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskAttachment'], meta: { name: 'TaskAttachment' } }
    /**
     * Find zero or one TaskAttachment that matches the filter.
     * @param {TaskAttachmentFindUniqueArgs} args - Arguments to find a TaskAttachment
     * @example
     * // Get one TaskAttachment
     * const taskAttachment = await prisma.taskAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskAttachmentFindUniqueArgs>(args: SelectSubset<T, TaskAttachmentFindUniqueArgs<ExtArgs>>): Prisma__TaskAttachmentClient<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskAttachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskAttachmentFindUniqueOrThrowArgs} args - Arguments to find a TaskAttachment
     * @example
     * // Get one TaskAttachment
     * const taskAttachment = await prisma.taskAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskAttachmentClient<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAttachmentFindFirstArgs} args - Arguments to find a TaskAttachment
     * @example
     * // Get one TaskAttachment
     * const taskAttachment = await prisma.taskAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskAttachmentFindFirstArgs>(args?: SelectSubset<T, TaskAttachmentFindFirstArgs<ExtArgs>>): Prisma__TaskAttachmentClient<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAttachmentFindFirstOrThrowArgs} args - Arguments to find a TaskAttachment
     * @example
     * // Get one TaskAttachment
     * const taskAttachment = await prisma.taskAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskAttachmentClient<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskAttachments
     * const taskAttachments = await prisma.taskAttachment.findMany()
     * 
     * // Get first 10 TaskAttachments
     * const taskAttachments = await prisma.taskAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskAttachmentWithIdOnly = await prisma.taskAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskAttachmentFindManyArgs>(args?: SelectSubset<T, TaskAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskAttachment.
     * @param {TaskAttachmentCreateArgs} args - Arguments to create a TaskAttachment.
     * @example
     * // Create one TaskAttachment
     * const TaskAttachment = await prisma.taskAttachment.create({
     *   data: {
     *     // ... data to create a TaskAttachment
     *   }
     * })
     * 
     */
    create<T extends TaskAttachmentCreateArgs>(args: SelectSubset<T, TaskAttachmentCreateArgs<ExtArgs>>): Prisma__TaskAttachmentClient<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskAttachments.
     * @param {TaskAttachmentCreateManyArgs} args - Arguments to create many TaskAttachments.
     * @example
     * // Create many TaskAttachments
     * const taskAttachment = await prisma.taskAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskAttachmentCreateManyArgs>(args?: SelectSubset<T, TaskAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskAttachments and returns the data saved in the database.
     * @param {TaskAttachmentCreateManyAndReturnArgs} args - Arguments to create many TaskAttachments.
     * @example
     * // Create many TaskAttachments
     * const taskAttachment = await prisma.taskAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskAttachments and only return the `id`
     * const taskAttachmentWithIdOnly = await prisma.taskAttachment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskAttachment.
     * @param {TaskAttachmentDeleteArgs} args - Arguments to delete one TaskAttachment.
     * @example
     * // Delete one TaskAttachment
     * const TaskAttachment = await prisma.taskAttachment.delete({
     *   where: {
     *     // ... filter to delete one TaskAttachment
     *   }
     * })
     * 
     */
    delete<T extends TaskAttachmentDeleteArgs>(args: SelectSubset<T, TaskAttachmentDeleteArgs<ExtArgs>>): Prisma__TaskAttachmentClient<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskAttachment.
     * @param {TaskAttachmentUpdateArgs} args - Arguments to update one TaskAttachment.
     * @example
     * // Update one TaskAttachment
     * const taskAttachment = await prisma.taskAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskAttachmentUpdateArgs>(args: SelectSubset<T, TaskAttachmentUpdateArgs<ExtArgs>>): Prisma__TaskAttachmentClient<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskAttachments.
     * @param {TaskAttachmentDeleteManyArgs} args - Arguments to filter TaskAttachments to delete.
     * @example
     * // Delete a few TaskAttachments
     * const { count } = await prisma.taskAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskAttachmentDeleteManyArgs>(args?: SelectSubset<T, TaskAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskAttachments
     * const taskAttachment = await prisma.taskAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskAttachmentUpdateManyArgs>(args: SelectSubset<T, TaskAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskAttachments and returns the data updated in the database.
     * @param {TaskAttachmentUpdateManyAndReturnArgs} args - Arguments to update many TaskAttachments.
     * @example
     * // Update many TaskAttachments
     * const taskAttachment = await prisma.taskAttachment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskAttachments and only return the `id`
     * const taskAttachmentWithIdOnly = await prisma.taskAttachment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskAttachmentUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskAttachmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskAttachment.
     * @param {TaskAttachmentUpsertArgs} args - Arguments to update or create a TaskAttachment.
     * @example
     * // Update or create a TaskAttachment
     * const taskAttachment = await prisma.taskAttachment.upsert({
     *   create: {
     *     // ... data to create a TaskAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskAttachment we want to update
     *   }
     * })
     */
    upsert<T extends TaskAttachmentUpsertArgs>(args: SelectSubset<T, TaskAttachmentUpsertArgs<ExtArgs>>): Prisma__TaskAttachmentClient<$Result.GetResult<Prisma.$TaskAttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAttachmentCountArgs} args - Arguments to filter TaskAttachments to count.
     * @example
     * // Count the number of TaskAttachments
     * const count = await prisma.taskAttachment.count({
     *   where: {
     *     // ... the filter for the TaskAttachments we want to count
     *   }
     * })
    **/
    count<T extends TaskAttachmentCountArgs>(
      args?: Subset<T, TaskAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAttachmentAggregateArgs>(args: Subset<T, TaskAttachmentAggregateArgs>): Prisma.PrismaPromise<GetTaskAttachmentAggregateType<T>>

    /**
     * Group by TaskAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAttachmentGroupByArgs} args - Group by arguments.
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
      T extends TaskAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: TaskAttachmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskAttachment model
   */
  readonly fields: TaskAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskAttachment model
   */
  interface TaskAttachmentFieldRefs {
    readonly id: FieldRef<"TaskAttachment", 'Int'>
    readonly type: FieldRef<"TaskAttachment", 'AttachmentType'>
    readonly link: FieldRef<"TaskAttachment", 'String'>
    readonly taskId: FieldRef<"TaskAttachment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TaskAttachment findUnique
   */
  export type TaskAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAttachment to fetch.
     */
    where: TaskAttachmentWhereUniqueInput
  }

  /**
   * TaskAttachment findUniqueOrThrow
   */
  export type TaskAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAttachment to fetch.
     */
    where: TaskAttachmentWhereUniqueInput
  }

  /**
   * TaskAttachment findFirst
   */
  export type TaskAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAttachment to fetch.
     */
    where?: TaskAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAttachments to fetch.
     */
    orderBy?: TaskAttachmentOrderByWithRelationInput | TaskAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskAttachments.
     */
    cursor?: TaskAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskAttachments.
     */
    distinct?: TaskAttachmentScalarFieldEnum | TaskAttachmentScalarFieldEnum[]
  }

  /**
   * TaskAttachment findFirstOrThrow
   */
  export type TaskAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAttachment to fetch.
     */
    where?: TaskAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAttachments to fetch.
     */
    orderBy?: TaskAttachmentOrderByWithRelationInput | TaskAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskAttachments.
     */
    cursor?: TaskAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskAttachments.
     */
    distinct?: TaskAttachmentScalarFieldEnum | TaskAttachmentScalarFieldEnum[]
  }

  /**
   * TaskAttachment findMany
   */
  export type TaskAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which TaskAttachments to fetch.
     */
    where?: TaskAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskAttachments to fetch.
     */
    orderBy?: TaskAttachmentOrderByWithRelationInput | TaskAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskAttachments.
     */
    cursor?: TaskAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskAttachments.
     */
    skip?: number
    distinct?: TaskAttachmentScalarFieldEnum | TaskAttachmentScalarFieldEnum[]
  }

  /**
   * TaskAttachment create
   */
  export type TaskAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskAttachment.
     */
    data: XOR<TaskAttachmentCreateInput, TaskAttachmentUncheckedCreateInput>
  }

  /**
   * TaskAttachment createMany
   */
  export type TaskAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskAttachments.
     */
    data: TaskAttachmentCreateManyInput | TaskAttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskAttachment createManyAndReturn
   */
  export type TaskAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * The data used to create many TaskAttachments.
     */
    data: TaskAttachmentCreateManyInput | TaskAttachmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskAttachment update
   */
  export type TaskAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskAttachment.
     */
    data: XOR<TaskAttachmentUpdateInput, TaskAttachmentUncheckedUpdateInput>
    /**
     * Choose, which TaskAttachment to update.
     */
    where: TaskAttachmentWhereUniqueInput
  }

  /**
   * TaskAttachment updateMany
   */
  export type TaskAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskAttachments.
     */
    data: XOR<TaskAttachmentUpdateManyMutationInput, TaskAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which TaskAttachments to update
     */
    where?: TaskAttachmentWhereInput
    /**
     * Limit how many TaskAttachments to update.
     */
    limit?: number
  }

  /**
   * TaskAttachment updateManyAndReturn
   */
  export type TaskAttachmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * The data used to update TaskAttachments.
     */
    data: XOR<TaskAttachmentUpdateManyMutationInput, TaskAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which TaskAttachments to update
     */
    where?: TaskAttachmentWhereInput
    /**
     * Limit how many TaskAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskAttachment upsert
   */
  export type TaskAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskAttachment to update in case it exists.
     */
    where: TaskAttachmentWhereUniqueInput
    /**
     * In case the TaskAttachment found by the `where` argument doesn't exist, create a new TaskAttachment with this data.
     */
    create: XOR<TaskAttachmentCreateInput, TaskAttachmentUncheckedCreateInput>
    /**
     * In case the TaskAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskAttachmentUpdateInput, TaskAttachmentUncheckedUpdateInput>
  }

  /**
   * TaskAttachment delete
   */
  export type TaskAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
    /**
     * Filter which TaskAttachment to delete.
     */
    where: TaskAttachmentWhereUniqueInput
  }

  /**
   * TaskAttachment deleteMany
   */
  export type TaskAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskAttachments to delete
     */
    where?: TaskAttachmentWhereInput
    /**
     * Limit how many TaskAttachments to delete.
     */
    limit?: number
  }

  /**
   * TaskAttachment without action
   */
  export type TaskAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskAttachment
     */
    select?: TaskAttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskAttachment
     */
    omit?: TaskAttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model Pomorounds
   */

  export type AggregatePomorounds = {
    _count: PomoroundsCountAggregateOutputType | null
    _avg: PomoroundsAvgAggregateOutputType | null
    _sum: PomoroundsSumAggregateOutputType | null
    _min: PomoroundsMinAggregateOutputType | null
    _max: PomoroundsMaxAggregateOutputType | null
  }

  export type PomoroundsAvgAggregateOutputType = {
    id: number | null
    rounds: number | null
    longBreaks: number | null
    shortBreaks: number | null
    userId: number | null
    taskId: number | null
  }

  export type PomoroundsSumAggregateOutputType = {
    id: number | null
    rounds: number | null
    longBreaks: number | null
    shortBreaks: number | null
    userId: number | null
    taskId: number | null
  }

  export type PomoroundsMinAggregateOutputType = {
    id: number | null
    rounds: number | null
    longBreaks: number | null
    shortBreaks: number | null
    userId: number | null
    taskId: number | null
    updatedAt: Date | null
  }

  export type PomoroundsMaxAggregateOutputType = {
    id: number | null
    rounds: number | null
    longBreaks: number | null
    shortBreaks: number | null
    userId: number | null
    taskId: number | null
    updatedAt: Date | null
  }

  export type PomoroundsCountAggregateOutputType = {
    id: number
    rounds: number
    longBreaks: number
    shortBreaks: number
    userId: number
    taskId: number
    updatedAt: number
    _all: number
  }


  export type PomoroundsAvgAggregateInputType = {
    id?: true
    rounds?: true
    longBreaks?: true
    shortBreaks?: true
    userId?: true
    taskId?: true
  }

  export type PomoroundsSumAggregateInputType = {
    id?: true
    rounds?: true
    longBreaks?: true
    shortBreaks?: true
    userId?: true
    taskId?: true
  }

  export type PomoroundsMinAggregateInputType = {
    id?: true
    rounds?: true
    longBreaks?: true
    shortBreaks?: true
    userId?: true
    taskId?: true
    updatedAt?: true
  }

  export type PomoroundsMaxAggregateInputType = {
    id?: true
    rounds?: true
    longBreaks?: true
    shortBreaks?: true
    userId?: true
    taskId?: true
    updatedAt?: true
  }

  export type PomoroundsCountAggregateInputType = {
    id?: true
    rounds?: true
    longBreaks?: true
    shortBreaks?: true
    userId?: true
    taskId?: true
    updatedAt?: true
    _all?: true
  }

  export type PomoroundsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pomorounds to aggregate.
     */
    where?: PomoroundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pomorounds to fetch.
     */
    orderBy?: PomoroundsOrderByWithRelationInput | PomoroundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PomoroundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pomorounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pomorounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pomorounds
    **/
    _count?: true | PomoroundsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PomoroundsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PomoroundsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PomoroundsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PomoroundsMaxAggregateInputType
  }

  export type GetPomoroundsAggregateType<T extends PomoroundsAggregateArgs> = {
        [P in keyof T & keyof AggregatePomorounds]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePomorounds[P]>
      : GetScalarType<T[P], AggregatePomorounds[P]>
  }




  export type PomoroundsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PomoroundsWhereInput
    orderBy?: PomoroundsOrderByWithAggregationInput | PomoroundsOrderByWithAggregationInput[]
    by: PomoroundsScalarFieldEnum[] | PomoroundsScalarFieldEnum
    having?: PomoroundsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PomoroundsCountAggregateInputType | true
    _avg?: PomoroundsAvgAggregateInputType
    _sum?: PomoroundsSumAggregateInputType
    _min?: PomoroundsMinAggregateInputType
    _max?: PomoroundsMaxAggregateInputType
  }

  export type PomoroundsGroupByOutputType = {
    id: number
    rounds: number
    longBreaks: number
    shortBreaks: number
    userId: number
    taskId: number
    updatedAt: Date
    _count: PomoroundsCountAggregateOutputType | null
    _avg: PomoroundsAvgAggregateOutputType | null
    _sum: PomoroundsSumAggregateOutputType | null
    _min: PomoroundsMinAggregateOutputType | null
    _max: PomoroundsMaxAggregateOutputType | null
  }

  type GetPomoroundsGroupByPayload<T extends PomoroundsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PomoroundsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PomoroundsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PomoroundsGroupByOutputType[P]>
            : GetScalarType<T[P], PomoroundsGroupByOutputType[P]>
        }
      >
    >


  export type PomoroundsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rounds?: boolean
    longBreaks?: boolean
    shortBreaks?: boolean
    userId?: boolean
    taskId?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomorounds"]>

  export type PomoroundsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rounds?: boolean
    longBreaks?: boolean
    shortBreaks?: boolean
    userId?: boolean
    taskId?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomorounds"]>

  export type PomoroundsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rounds?: boolean
    longBreaks?: boolean
    shortBreaks?: boolean
    userId?: boolean
    taskId?: boolean
    updatedAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pomorounds"]>

  export type PomoroundsSelectScalar = {
    id?: boolean
    rounds?: boolean
    longBreaks?: boolean
    shortBreaks?: boolean
    userId?: boolean
    taskId?: boolean
    updatedAt?: boolean
  }

  export type PomoroundsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rounds" | "longBreaks" | "shortBreaks" | "userId" | "taskId" | "updatedAt", ExtArgs["result"]["pomorounds"]>
  export type PomoroundsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PomoroundsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PomoroundsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PomoroundsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pomorounds"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rounds: number
      longBreaks: number
      shortBreaks: number
      userId: number
      taskId: number
      updatedAt: Date
    }, ExtArgs["result"]["pomorounds"]>
    composites: {}
  }

  type PomoroundsGetPayload<S extends boolean | null | undefined | PomoroundsDefaultArgs> = $Result.GetResult<Prisma.$PomoroundsPayload, S>

  type PomoroundsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PomoroundsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PomoroundsCountAggregateInputType | true
    }

  export interface PomoroundsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pomorounds'], meta: { name: 'Pomorounds' } }
    /**
     * Find zero or one Pomorounds that matches the filter.
     * @param {PomoroundsFindUniqueArgs} args - Arguments to find a Pomorounds
     * @example
     * // Get one Pomorounds
     * const pomorounds = await prisma.pomorounds.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PomoroundsFindUniqueArgs>(args: SelectSubset<T, PomoroundsFindUniqueArgs<ExtArgs>>): Prisma__PomoroundsClient<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pomorounds that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PomoroundsFindUniqueOrThrowArgs} args - Arguments to find a Pomorounds
     * @example
     * // Get one Pomorounds
     * const pomorounds = await prisma.pomorounds.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PomoroundsFindUniqueOrThrowArgs>(args: SelectSubset<T, PomoroundsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PomoroundsClient<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pomorounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomoroundsFindFirstArgs} args - Arguments to find a Pomorounds
     * @example
     * // Get one Pomorounds
     * const pomorounds = await prisma.pomorounds.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PomoroundsFindFirstArgs>(args?: SelectSubset<T, PomoroundsFindFirstArgs<ExtArgs>>): Prisma__PomoroundsClient<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pomorounds that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomoroundsFindFirstOrThrowArgs} args - Arguments to find a Pomorounds
     * @example
     * // Get one Pomorounds
     * const pomorounds = await prisma.pomorounds.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PomoroundsFindFirstOrThrowArgs>(args?: SelectSubset<T, PomoroundsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PomoroundsClient<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pomorounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomoroundsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pomorounds
     * const pomorounds = await prisma.pomorounds.findMany()
     * 
     * // Get first 10 Pomorounds
     * const pomorounds = await prisma.pomorounds.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pomoroundsWithIdOnly = await prisma.pomorounds.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PomoroundsFindManyArgs>(args?: SelectSubset<T, PomoroundsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pomorounds.
     * @param {PomoroundsCreateArgs} args - Arguments to create a Pomorounds.
     * @example
     * // Create one Pomorounds
     * const Pomorounds = await prisma.pomorounds.create({
     *   data: {
     *     // ... data to create a Pomorounds
     *   }
     * })
     * 
     */
    create<T extends PomoroundsCreateArgs>(args: SelectSubset<T, PomoroundsCreateArgs<ExtArgs>>): Prisma__PomoroundsClient<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pomorounds.
     * @param {PomoroundsCreateManyArgs} args - Arguments to create many Pomorounds.
     * @example
     * // Create many Pomorounds
     * const pomorounds = await prisma.pomorounds.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PomoroundsCreateManyArgs>(args?: SelectSubset<T, PomoroundsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pomorounds and returns the data saved in the database.
     * @param {PomoroundsCreateManyAndReturnArgs} args - Arguments to create many Pomorounds.
     * @example
     * // Create many Pomorounds
     * const pomorounds = await prisma.pomorounds.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pomorounds and only return the `id`
     * const pomoroundsWithIdOnly = await prisma.pomorounds.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PomoroundsCreateManyAndReturnArgs>(args?: SelectSubset<T, PomoroundsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pomorounds.
     * @param {PomoroundsDeleteArgs} args - Arguments to delete one Pomorounds.
     * @example
     * // Delete one Pomorounds
     * const Pomorounds = await prisma.pomorounds.delete({
     *   where: {
     *     // ... filter to delete one Pomorounds
     *   }
     * })
     * 
     */
    delete<T extends PomoroundsDeleteArgs>(args: SelectSubset<T, PomoroundsDeleteArgs<ExtArgs>>): Prisma__PomoroundsClient<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pomorounds.
     * @param {PomoroundsUpdateArgs} args - Arguments to update one Pomorounds.
     * @example
     * // Update one Pomorounds
     * const pomorounds = await prisma.pomorounds.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PomoroundsUpdateArgs>(args: SelectSubset<T, PomoroundsUpdateArgs<ExtArgs>>): Prisma__PomoroundsClient<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pomorounds.
     * @param {PomoroundsDeleteManyArgs} args - Arguments to filter Pomorounds to delete.
     * @example
     * // Delete a few Pomorounds
     * const { count } = await prisma.pomorounds.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PomoroundsDeleteManyArgs>(args?: SelectSubset<T, PomoroundsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pomorounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomoroundsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pomorounds
     * const pomorounds = await prisma.pomorounds.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PomoroundsUpdateManyArgs>(args: SelectSubset<T, PomoroundsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pomorounds and returns the data updated in the database.
     * @param {PomoroundsUpdateManyAndReturnArgs} args - Arguments to update many Pomorounds.
     * @example
     * // Update many Pomorounds
     * const pomorounds = await prisma.pomorounds.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pomorounds and only return the `id`
     * const pomoroundsWithIdOnly = await prisma.pomorounds.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PomoroundsUpdateManyAndReturnArgs>(args: SelectSubset<T, PomoroundsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pomorounds.
     * @param {PomoroundsUpsertArgs} args - Arguments to update or create a Pomorounds.
     * @example
     * // Update or create a Pomorounds
     * const pomorounds = await prisma.pomorounds.upsert({
     *   create: {
     *     // ... data to create a Pomorounds
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pomorounds we want to update
     *   }
     * })
     */
    upsert<T extends PomoroundsUpsertArgs>(args: SelectSubset<T, PomoroundsUpsertArgs<ExtArgs>>): Prisma__PomoroundsClient<$Result.GetResult<Prisma.$PomoroundsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pomorounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomoroundsCountArgs} args - Arguments to filter Pomorounds to count.
     * @example
     * // Count the number of Pomorounds
     * const count = await prisma.pomorounds.count({
     *   where: {
     *     // ... the filter for the Pomorounds we want to count
     *   }
     * })
    **/
    count<T extends PomoroundsCountArgs>(
      args?: Subset<T, PomoroundsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PomoroundsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pomorounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomoroundsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PomoroundsAggregateArgs>(args: Subset<T, PomoroundsAggregateArgs>): Prisma.PrismaPromise<GetPomoroundsAggregateType<T>>

    /**
     * Group by Pomorounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PomoroundsGroupByArgs} args - Group by arguments.
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
      T extends PomoroundsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PomoroundsGroupByArgs['orderBy'] }
        : { orderBy?: PomoroundsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PomoroundsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPomoroundsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pomorounds model
   */
  readonly fields: PomoroundsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pomorounds.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PomoroundsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pomorounds model
   */
  interface PomoroundsFieldRefs {
    readonly id: FieldRef<"Pomorounds", 'Int'>
    readonly rounds: FieldRef<"Pomorounds", 'Int'>
    readonly longBreaks: FieldRef<"Pomorounds", 'Int'>
    readonly shortBreaks: FieldRef<"Pomorounds", 'Int'>
    readonly userId: FieldRef<"Pomorounds", 'Int'>
    readonly taskId: FieldRef<"Pomorounds", 'Int'>
    readonly updatedAt: FieldRef<"Pomorounds", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pomorounds findUnique
   */
  export type PomoroundsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    /**
     * Filter, which Pomorounds to fetch.
     */
    where: PomoroundsWhereUniqueInput
  }

  /**
   * Pomorounds findUniqueOrThrow
   */
  export type PomoroundsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    /**
     * Filter, which Pomorounds to fetch.
     */
    where: PomoroundsWhereUniqueInput
  }

  /**
   * Pomorounds findFirst
   */
  export type PomoroundsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    /**
     * Filter, which Pomorounds to fetch.
     */
    where?: PomoroundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pomorounds to fetch.
     */
    orderBy?: PomoroundsOrderByWithRelationInput | PomoroundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pomorounds.
     */
    cursor?: PomoroundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pomorounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pomorounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pomorounds.
     */
    distinct?: PomoroundsScalarFieldEnum | PomoroundsScalarFieldEnum[]
  }

  /**
   * Pomorounds findFirstOrThrow
   */
  export type PomoroundsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    /**
     * Filter, which Pomorounds to fetch.
     */
    where?: PomoroundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pomorounds to fetch.
     */
    orderBy?: PomoroundsOrderByWithRelationInput | PomoroundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pomorounds.
     */
    cursor?: PomoroundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pomorounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pomorounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pomorounds.
     */
    distinct?: PomoroundsScalarFieldEnum | PomoroundsScalarFieldEnum[]
  }

  /**
   * Pomorounds findMany
   */
  export type PomoroundsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    /**
     * Filter, which Pomorounds to fetch.
     */
    where?: PomoroundsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pomorounds to fetch.
     */
    orderBy?: PomoroundsOrderByWithRelationInput | PomoroundsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pomorounds.
     */
    cursor?: PomoroundsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pomorounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pomorounds.
     */
    skip?: number
    distinct?: PomoroundsScalarFieldEnum | PomoroundsScalarFieldEnum[]
  }

  /**
   * Pomorounds create
   */
  export type PomoroundsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    /**
     * The data needed to create a Pomorounds.
     */
    data: XOR<PomoroundsCreateInput, PomoroundsUncheckedCreateInput>
  }

  /**
   * Pomorounds createMany
   */
  export type PomoroundsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pomorounds.
     */
    data: PomoroundsCreateManyInput | PomoroundsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pomorounds createManyAndReturn
   */
  export type PomoroundsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * The data used to create many Pomorounds.
     */
    data: PomoroundsCreateManyInput | PomoroundsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pomorounds update
   */
  export type PomoroundsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    /**
     * The data needed to update a Pomorounds.
     */
    data: XOR<PomoroundsUpdateInput, PomoroundsUncheckedUpdateInput>
    /**
     * Choose, which Pomorounds to update.
     */
    where: PomoroundsWhereUniqueInput
  }

  /**
   * Pomorounds updateMany
   */
  export type PomoroundsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pomorounds.
     */
    data: XOR<PomoroundsUpdateManyMutationInput, PomoroundsUncheckedUpdateManyInput>
    /**
     * Filter which Pomorounds to update
     */
    where?: PomoroundsWhereInput
    /**
     * Limit how many Pomorounds to update.
     */
    limit?: number
  }

  /**
   * Pomorounds updateManyAndReturn
   */
  export type PomoroundsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * The data used to update Pomorounds.
     */
    data: XOR<PomoroundsUpdateManyMutationInput, PomoroundsUncheckedUpdateManyInput>
    /**
     * Filter which Pomorounds to update
     */
    where?: PomoroundsWhereInput
    /**
     * Limit how many Pomorounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pomorounds upsert
   */
  export type PomoroundsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    /**
     * The filter to search for the Pomorounds to update in case it exists.
     */
    where: PomoroundsWhereUniqueInput
    /**
     * In case the Pomorounds found by the `where` argument doesn't exist, create a new Pomorounds with this data.
     */
    create: XOR<PomoroundsCreateInput, PomoroundsUncheckedCreateInput>
    /**
     * In case the Pomorounds was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PomoroundsUpdateInput, PomoroundsUncheckedUpdateInput>
  }

  /**
   * Pomorounds delete
   */
  export type PomoroundsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
    /**
     * Filter which Pomorounds to delete.
     */
    where: PomoroundsWhereUniqueInput
  }

  /**
   * Pomorounds deleteMany
   */
  export type PomoroundsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pomorounds to delete
     */
    where?: PomoroundsWhereInput
    /**
     * Limit how many Pomorounds to delete.
     */
    limit?: number
  }

  /**
   * Pomorounds without action
   */
  export type PomoroundsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pomorounds
     */
    select?: PomoroundsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pomorounds
     */
    omit?: PomoroundsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PomoroundsInclude<ExtArgs> | null
  }


  /**
   * Model Label
   */

  export type AggregateLabel = {
    _count: LabelCountAggregateOutputType | null
    _avg: LabelAvgAggregateOutputType | null
    _sum: LabelSumAggregateOutputType | null
    _min: LabelMinAggregateOutputType | null
    _max: LabelMaxAggregateOutputType | null
  }

  export type LabelAvgAggregateOutputType = {
    id: number | null
  }

  export type LabelSumAggregateOutputType = {
    id: number | null
  }

  export type LabelMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LabelMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LabelCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LabelAvgAggregateInputType = {
    id?: true
  }

  export type LabelSumAggregateInputType = {
    id?: true
  }

  export type LabelMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LabelMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LabelCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LabelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Label to aggregate.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Labels
    **/
    _count?: true | LabelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LabelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LabelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LabelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LabelMaxAggregateInputType
  }

  export type GetLabelAggregateType<T extends LabelAggregateArgs> = {
        [P in keyof T & keyof AggregateLabel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLabel[P]>
      : GetScalarType<T[P], AggregateLabel[P]>
  }




  export type LabelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LabelWhereInput
    orderBy?: LabelOrderByWithAggregationInput | LabelOrderByWithAggregationInput[]
    by: LabelScalarFieldEnum[] | LabelScalarFieldEnum
    having?: LabelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LabelCountAggregateInputType | true
    _avg?: LabelAvgAggregateInputType
    _sum?: LabelSumAggregateInputType
    _min?: LabelMinAggregateInputType
    _max?: LabelMaxAggregateInputType
  }

  export type LabelGroupByOutputType = {
    id: number
    name: string
    _count: LabelCountAggregateOutputType | null
    _avg: LabelAvgAggregateOutputType | null
    _sum: LabelSumAggregateOutputType | null
    _min: LabelMinAggregateOutputType | null
    _max: LabelMaxAggregateOutputType | null
  }

  type GetLabelGroupByPayload<T extends LabelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LabelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LabelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LabelGroupByOutputType[P]>
            : GetScalarType<T[P], LabelGroupByOutputType[P]>
        }
      >
    >


  export type LabelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    taskLabels?: boolean | Label$taskLabelsArgs<ExtArgs>
    _count?: boolean | LabelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["label"]>

  export type LabelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["label"]>

  export type LabelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["label"]>

  export type LabelSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type LabelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["label"]>
  export type LabelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    taskLabels?: boolean | Label$taskLabelsArgs<ExtArgs>
    _count?: boolean | LabelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LabelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LabelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LabelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Label"
    objects: {
      taskLabels: Prisma.$TaskLabelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["label"]>
    composites: {}
  }

  type LabelGetPayload<S extends boolean | null | undefined | LabelDefaultArgs> = $Result.GetResult<Prisma.$LabelPayload, S>

  type LabelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LabelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LabelCountAggregateInputType | true
    }

  export interface LabelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Label'], meta: { name: 'Label' } }
    /**
     * Find zero or one Label that matches the filter.
     * @param {LabelFindUniqueArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LabelFindUniqueArgs>(args: SelectSubset<T, LabelFindUniqueArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Label that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LabelFindUniqueOrThrowArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LabelFindUniqueOrThrowArgs>(args: SelectSubset<T, LabelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Label that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindFirstArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LabelFindFirstArgs>(args?: SelectSubset<T, LabelFindFirstArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Label that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindFirstOrThrowArgs} args - Arguments to find a Label
     * @example
     * // Get one Label
     * const label = await prisma.label.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LabelFindFirstOrThrowArgs>(args?: SelectSubset<T, LabelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Labels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Labels
     * const labels = await prisma.label.findMany()
     * 
     * // Get first 10 Labels
     * const labels = await prisma.label.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const labelWithIdOnly = await prisma.label.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LabelFindManyArgs>(args?: SelectSubset<T, LabelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Label.
     * @param {LabelCreateArgs} args - Arguments to create a Label.
     * @example
     * // Create one Label
     * const Label = await prisma.label.create({
     *   data: {
     *     // ... data to create a Label
     *   }
     * })
     * 
     */
    create<T extends LabelCreateArgs>(args: SelectSubset<T, LabelCreateArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Labels.
     * @param {LabelCreateManyArgs} args - Arguments to create many Labels.
     * @example
     * // Create many Labels
     * const label = await prisma.label.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LabelCreateManyArgs>(args?: SelectSubset<T, LabelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Labels and returns the data saved in the database.
     * @param {LabelCreateManyAndReturnArgs} args - Arguments to create many Labels.
     * @example
     * // Create many Labels
     * const label = await prisma.label.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Labels and only return the `id`
     * const labelWithIdOnly = await prisma.label.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LabelCreateManyAndReturnArgs>(args?: SelectSubset<T, LabelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Label.
     * @param {LabelDeleteArgs} args - Arguments to delete one Label.
     * @example
     * // Delete one Label
     * const Label = await prisma.label.delete({
     *   where: {
     *     // ... filter to delete one Label
     *   }
     * })
     * 
     */
    delete<T extends LabelDeleteArgs>(args: SelectSubset<T, LabelDeleteArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Label.
     * @param {LabelUpdateArgs} args - Arguments to update one Label.
     * @example
     * // Update one Label
     * const label = await prisma.label.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LabelUpdateArgs>(args: SelectSubset<T, LabelUpdateArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Labels.
     * @param {LabelDeleteManyArgs} args - Arguments to filter Labels to delete.
     * @example
     * // Delete a few Labels
     * const { count } = await prisma.label.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LabelDeleteManyArgs>(args?: SelectSubset<T, LabelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Labels
     * const label = await prisma.label.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LabelUpdateManyArgs>(args: SelectSubset<T, LabelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Labels and returns the data updated in the database.
     * @param {LabelUpdateManyAndReturnArgs} args - Arguments to update many Labels.
     * @example
     * // Update many Labels
     * const label = await prisma.label.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Labels and only return the `id`
     * const labelWithIdOnly = await prisma.label.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LabelUpdateManyAndReturnArgs>(args: SelectSubset<T, LabelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Label.
     * @param {LabelUpsertArgs} args - Arguments to update or create a Label.
     * @example
     * // Update or create a Label
     * const label = await prisma.label.upsert({
     *   create: {
     *     // ... data to create a Label
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Label we want to update
     *   }
     * })
     */
    upsert<T extends LabelUpsertArgs>(args: SelectSubset<T, LabelUpsertArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Labels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelCountArgs} args - Arguments to filter Labels to count.
     * @example
     * // Count the number of Labels
     * const count = await prisma.label.count({
     *   where: {
     *     // ... the filter for the Labels we want to count
     *   }
     * })
    **/
    count<T extends LabelCountArgs>(
      args?: Subset<T, LabelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LabelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Label.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LabelAggregateArgs>(args: Subset<T, LabelAggregateArgs>): Prisma.PrismaPromise<GetLabelAggregateType<T>>

    /**
     * Group by Label.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LabelGroupByArgs} args - Group by arguments.
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
      T extends LabelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LabelGroupByArgs['orderBy'] }
        : { orderBy?: LabelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Label model
   */
  readonly fields: LabelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Label.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LabelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    taskLabels<T extends Label$taskLabelsArgs<ExtArgs> = {}>(args?: Subset<T, Label$taskLabelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Label model
   */
  interface LabelFieldRefs {
    readonly id: FieldRef<"Label", 'Int'>
    readonly name: FieldRef<"Label", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Label findUnique
   */
  export type LabelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label findUniqueOrThrow
   */
  export type LabelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label findFirst
   */
  export type LabelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labels.
     */
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Label findFirstOrThrow
   */
  export type LabelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Label to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Labels.
     */
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Label findMany
   */
  export type LabelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter, which Labels to fetch.
     */
    where?: LabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Labels to fetch.
     */
    orderBy?: LabelOrderByWithRelationInput | LabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Labels.
     */
    cursor?: LabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Labels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Labels.
     */
    skip?: number
    distinct?: LabelScalarFieldEnum | LabelScalarFieldEnum[]
  }

  /**
   * Label create
   */
  export type LabelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * The data needed to create a Label.
     */
    data: XOR<LabelCreateInput, LabelUncheckedCreateInput>
  }

  /**
   * Label createMany
   */
  export type LabelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Labels.
     */
    data: LabelCreateManyInput | LabelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Label createManyAndReturn
   */
  export type LabelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * The data used to create many Labels.
     */
    data: LabelCreateManyInput | LabelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Label update
   */
  export type LabelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * The data needed to update a Label.
     */
    data: XOR<LabelUpdateInput, LabelUncheckedUpdateInput>
    /**
     * Choose, which Label to update.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label updateMany
   */
  export type LabelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Labels.
     */
    data: XOR<LabelUpdateManyMutationInput, LabelUncheckedUpdateManyInput>
    /**
     * Filter which Labels to update
     */
    where?: LabelWhereInput
    /**
     * Limit how many Labels to update.
     */
    limit?: number
  }

  /**
   * Label updateManyAndReturn
   */
  export type LabelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * The data used to update Labels.
     */
    data: XOR<LabelUpdateManyMutationInput, LabelUncheckedUpdateManyInput>
    /**
     * Filter which Labels to update
     */
    where?: LabelWhereInput
    /**
     * Limit how many Labels to update.
     */
    limit?: number
  }

  /**
   * Label upsert
   */
  export type LabelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * The filter to search for the Label to update in case it exists.
     */
    where: LabelWhereUniqueInput
    /**
     * In case the Label found by the `where` argument doesn't exist, create a new Label with this data.
     */
    create: XOR<LabelCreateInput, LabelUncheckedCreateInput>
    /**
     * In case the Label was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LabelUpdateInput, LabelUncheckedUpdateInput>
  }

  /**
   * Label delete
   */
  export type LabelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
    /**
     * Filter which Label to delete.
     */
    where: LabelWhereUniqueInput
  }

  /**
   * Label deleteMany
   */
  export type LabelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Labels to delete
     */
    where?: LabelWhereInput
    /**
     * Limit how many Labels to delete.
     */
    limit?: number
  }

  /**
   * Label.taskLabels
   */
  export type Label$taskLabelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    where?: TaskLabelWhereInput
    orderBy?: TaskLabelOrderByWithRelationInput | TaskLabelOrderByWithRelationInput[]
    cursor?: TaskLabelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskLabelScalarFieldEnum | TaskLabelScalarFieldEnum[]
  }

  /**
   * Label without action
   */
  export type LabelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Label
     */
    select?: LabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Label
     */
    omit?: LabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LabelInclude<ExtArgs> | null
  }


  /**
   * Model TaskLabel
   */

  export type AggregateTaskLabel = {
    _count: TaskLabelCountAggregateOutputType | null
    _avg: TaskLabelAvgAggregateOutputType | null
    _sum: TaskLabelSumAggregateOutputType | null
    _min: TaskLabelMinAggregateOutputType | null
    _max: TaskLabelMaxAggregateOutputType | null
  }

  export type TaskLabelAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    labelId: number | null
  }

  export type TaskLabelSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    labelId: number | null
  }

  export type TaskLabelMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    labelId: number | null
  }

  export type TaskLabelMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    labelId: number | null
  }

  export type TaskLabelCountAggregateOutputType = {
    id: number
    taskId: number
    labelId: number
    _all: number
  }


  export type TaskLabelAvgAggregateInputType = {
    id?: true
    taskId?: true
    labelId?: true
  }

  export type TaskLabelSumAggregateInputType = {
    id?: true
    taskId?: true
    labelId?: true
  }

  export type TaskLabelMinAggregateInputType = {
    id?: true
    taskId?: true
    labelId?: true
  }

  export type TaskLabelMaxAggregateInputType = {
    id?: true
    taskId?: true
    labelId?: true
  }

  export type TaskLabelCountAggregateInputType = {
    id?: true
    taskId?: true
    labelId?: true
    _all?: true
  }

  export type TaskLabelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLabel to aggregate.
     */
    where?: TaskLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLabels to fetch.
     */
    orderBy?: TaskLabelOrderByWithRelationInput | TaskLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskLabels
    **/
    _count?: true | TaskLabelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskLabelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskLabelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskLabelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskLabelMaxAggregateInputType
  }

  export type GetTaskLabelAggregateType<T extends TaskLabelAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskLabel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskLabel[P]>
      : GetScalarType<T[P], AggregateTaskLabel[P]>
  }




  export type TaskLabelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskLabelWhereInput
    orderBy?: TaskLabelOrderByWithAggregationInput | TaskLabelOrderByWithAggregationInput[]
    by: TaskLabelScalarFieldEnum[] | TaskLabelScalarFieldEnum
    having?: TaskLabelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskLabelCountAggregateInputType | true
    _avg?: TaskLabelAvgAggregateInputType
    _sum?: TaskLabelSumAggregateInputType
    _min?: TaskLabelMinAggregateInputType
    _max?: TaskLabelMaxAggregateInputType
  }

  export type TaskLabelGroupByOutputType = {
    id: number
    taskId: number
    labelId: number
    _count: TaskLabelCountAggregateOutputType | null
    _avg: TaskLabelAvgAggregateOutputType | null
    _sum: TaskLabelSumAggregateOutputType | null
    _min: TaskLabelMinAggregateOutputType | null
    _max: TaskLabelMaxAggregateOutputType | null
  }

  type GetTaskLabelGroupByPayload<T extends TaskLabelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskLabelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskLabelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskLabelGroupByOutputType[P]>
            : GetScalarType<T[P], TaskLabelGroupByOutputType[P]>
        }
      >
    >


  export type TaskLabelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    labelId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLabel"]>

  export type TaskLabelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    labelId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLabel"]>

  export type TaskLabelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    labelId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskLabel"]>

  export type TaskLabelSelectScalar = {
    id?: boolean
    taskId?: boolean
    labelId?: boolean
  }

  export type TaskLabelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "labelId", ExtArgs["result"]["taskLabel"]>
  export type TaskLabelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }
  export type TaskLabelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }
  export type TaskLabelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    label?: boolean | LabelDefaultArgs<ExtArgs>
  }

  export type $TaskLabelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskLabel"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      label: Prisma.$LabelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      labelId: number
    }, ExtArgs["result"]["taskLabel"]>
    composites: {}
  }

  type TaskLabelGetPayload<S extends boolean | null | undefined | TaskLabelDefaultArgs> = $Result.GetResult<Prisma.$TaskLabelPayload, S>

  type TaskLabelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskLabelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskLabelCountAggregateInputType | true
    }

  export interface TaskLabelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskLabel'], meta: { name: 'TaskLabel' } }
    /**
     * Find zero or one TaskLabel that matches the filter.
     * @param {TaskLabelFindUniqueArgs} args - Arguments to find a TaskLabel
     * @example
     * // Get one TaskLabel
     * const taskLabel = await prisma.taskLabel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskLabelFindUniqueArgs>(args: SelectSubset<T, TaskLabelFindUniqueArgs<ExtArgs>>): Prisma__TaskLabelClient<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskLabel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskLabelFindUniqueOrThrowArgs} args - Arguments to find a TaskLabel
     * @example
     * // Get one TaskLabel
     * const taskLabel = await prisma.taskLabel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskLabelFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskLabelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskLabelClient<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLabel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLabelFindFirstArgs} args - Arguments to find a TaskLabel
     * @example
     * // Get one TaskLabel
     * const taskLabel = await prisma.taskLabel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskLabelFindFirstArgs>(args?: SelectSubset<T, TaskLabelFindFirstArgs<ExtArgs>>): Prisma__TaskLabelClient<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskLabel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLabelFindFirstOrThrowArgs} args - Arguments to find a TaskLabel
     * @example
     * // Get one TaskLabel
     * const taskLabel = await prisma.taskLabel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskLabelFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskLabelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskLabelClient<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskLabels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLabelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskLabels
     * const taskLabels = await prisma.taskLabel.findMany()
     * 
     * // Get first 10 TaskLabels
     * const taskLabels = await prisma.taskLabel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskLabelWithIdOnly = await prisma.taskLabel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskLabelFindManyArgs>(args?: SelectSubset<T, TaskLabelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskLabel.
     * @param {TaskLabelCreateArgs} args - Arguments to create a TaskLabel.
     * @example
     * // Create one TaskLabel
     * const TaskLabel = await prisma.taskLabel.create({
     *   data: {
     *     // ... data to create a TaskLabel
     *   }
     * })
     * 
     */
    create<T extends TaskLabelCreateArgs>(args: SelectSubset<T, TaskLabelCreateArgs<ExtArgs>>): Prisma__TaskLabelClient<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskLabels.
     * @param {TaskLabelCreateManyArgs} args - Arguments to create many TaskLabels.
     * @example
     * // Create many TaskLabels
     * const taskLabel = await prisma.taskLabel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskLabelCreateManyArgs>(args?: SelectSubset<T, TaskLabelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskLabels and returns the data saved in the database.
     * @param {TaskLabelCreateManyAndReturnArgs} args - Arguments to create many TaskLabels.
     * @example
     * // Create many TaskLabels
     * const taskLabel = await prisma.taskLabel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskLabels and only return the `id`
     * const taskLabelWithIdOnly = await prisma.taskLabel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskLabelCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskLabelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskLabel.
     * @param {TaskLabelDeleteArgs} args - Arguments to delete one TaskLabel.
     * @example
     * // Delete one TaskLabel
     * const TaskLabel = await prisma.taskLabel.delete({
     *   where: {
     *     // ... filter to delete one TaskLabel
     *   }
     * })
     * 
     */
    delete<T extends TaskLabelDeleteArgs>(args: SelectSubset<T, TaskLabelDeleteArgs<ExtArgs>>): Prisma__TaskLabelClient<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskLabel.
     * @param {TaskLabelUpdateArgs} args - Arguments to update one TaskLabel.
     * @example
     * // Update one TaskLabel
     * const taskLabel = await prisma.taskLabel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskLabelUpdateArgs>(args: SelectSubset<T, TaskLabelUpdateArgs<ExtArgs>>): Prisma__TaskLabelClient<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskLabels.
     * @param {TaskLabelDeleteManyArgs} args - Arguments to filter TaskLabels to delete.
     * @example
     * // Delete a few TaskLabels
     * const { count } = await prisma.taskLabel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskLabelDeleteManyArgs>(args?: SelectSubset<T, TaskLabelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLabelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskLabels
     * const taskLabel = await prisma.taskLabel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskLabelUpdateManyArgs>(args: SelectSubset<T, TaskLabelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLabels and returns the data updated in the database.
     * @param {TaskLabelUpdateManyAndReturnArgs} args - Arguments to update many TaskLabels.
     * @example
     * // Update many TaskLabels
     * const taskLabel = await prisma.taskLabel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskLabels and only return the `id`
     * const taskLabelWithIdOnly = await prisma.taskLabel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskLabelUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskLabelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskLabel.
     * @param {TaskLabelUpsertArgs} args - Arguments to update or create a TaskLabel.
     * @example
     * // Update or create a TaskLabel
     * const taskLabel = await prisma.taskLabel.upsert({
     *   create: {
     *     // ... data to create a TaskLabel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskLabel we want to update
     *   }
     * })
     */
    upsert<T extends TaskLabelUpsertArgs>(args: SelectSubset<T, TaskLabelUpsertArgs<ExtArgs>>): Prisma__TaskLabelClient<$Result.GetResult<Prisma.$TaskLabelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLabelCountArgs} args - Arguments to filter TaskLabels to count.
     * @example
     * // Count the number of TaskLabels
     * const count = await prisma.taskLabel.count({
     *   where: {
     *     // ... the filter for the TaskLabels we want to count
     *   }
     * })
    **/
    count<T extends TaskLabelCountArgs>(
      args?: Subset<T, TaskLabelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskLabelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLabelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskLabelAggregateArgs>(args: Subset<T, TaskLabelAggregateArgs>): Prisma.PrismaPromise<GetTaskLabelAggregateType<T>>

    /**
     * Group by TaskLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskLabelGroupByArgs} args - Group by arguments.
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
      T extends TaskLabelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskLabelGroupByArgs['orderBy'] }
        : { orderBy?: TaskLabelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskLabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskLabel model
   */
  readonly fields: TaskLabelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskLabel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskLabelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    label<T extends LabelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LabelDefaultArgs<ExtArgs>>): Prisma__LabelClient<$Result.GetResult<Prisma.$LabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TaskLabel model
   */
  interface TaskLabelFieldRefs {
    readonly id: FieldRef<"TaskLabel", 'Int'>
    readonly taskId: FieldRef<"TaskLabel", 'Int'>
    readonly labelId: FieldRef<"TaskLabel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TaskLabel findUnique
   */
  export type TaskLabelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    /**
     * Filter, which TaskLabel to fetch.
     */
    where: TaskLabelWhereUniqueInput
  }

  /**
   * TaskLabel findUniqueOrThrow
   */
  export type TaskLabelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    /**
     * Filter, which TaskLabel to fetch.
     */
    where: TaskLabelWhereUniqueInput
  }

  /**
   * TaskLabel findFirst
   */
  export type TaskLabelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    /**
     * Filter, which TaskLabel to fetch.
     */
    where?: TaskLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLabels to fetch.
     */
    orderBy?: TaskLabelOrderByWithRelationInput | TaskLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLabels.
     */
    cursor?: TaskLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLabels.
     */
    distinct?: TaskLabelScalarFieldEnum | TaskLabelScalarFieldEnum[]
  }

  /**
   * TaskLabel findFirstOrThrow
   */
  export type TaskLabelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    /**
     * Filter, which TaskLabel to fetch.
     */
    where?: TaskLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLabels to fetch.
     */
    orderBy?: TaskLabelOrderByWithRelationInput | TaskLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLabels.
     */
    cursor?: TaskLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLabels.
     */
    distinct?: TaskLabelScalarFieldEnum | TaskLabelScalarFieldEnum[]
  }

  /**
   * TaskLabel findMany
   */
  export type TaskLabelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    /**
     * Filter, which TaskLabels to fetch.
     */
    where?: TaskLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLabels to fetch.
     */
    orderBy?: TaskLabelOrderByWithRelationInput | TaskLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskLabels.
     */
    cursor?: TaskLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLabels.
     */
    skip?: number
    distinct?: TaskLabelScalarFieldEnum | TaskLabelScalarFieldEnum[]
  }

  /**
   * TaskLabel create
   */
  export type TaskLabelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskLabel.
     */
    data: XOR<TaskLabelCreateInput, TaskLabelUncheckedCreateInput>
  }

  /**
   * TaskLabel createMany
   */
  export type TaskLabelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskLabels.
     */
    data: TaskLabelCreateManyInput | TaskLabelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskLabel createManyAndReturn
   */
  export type TaskLabelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * The data used to create many TaskLabels.
     */
    data: TaskLabelCreateManyInput | TaskLabelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskLabel update
   */
  export type TaskLabelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskLabel.
     */
    data: XOR<TaskLabelUpdateInput, TaskLabelUncheckedUpdateInput>
    /**
     * Choose, which TaskLabel to update.
     */
    where: TaskLabelWhereUniqueInput
  }

  /**
   * TaskLabel updateMany
   */
  export type TaskLabelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskLabels.
     */
    data: XOR<TaskLabelUpdateManyMutationInput, TaskLabelUncheckedUpdateManyInput>
    /**
     * Filter which TaskLabels to update
     */
    where?: TaskLabelWhereInput
    /**
     * Limit how many TaskLabels to update.
     */
    limit?: number
  }

  /**
   * TaskLabel updateManyAndReturn
   */
  export type TaskLabelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * The data used to update TaskLabels.
     */
    data: XOR<TaskLabelUpdateManyMutationInput, TaskLabelUncheckedUpdateManyInput>
    /**
     * Filter which TaskLabels to update
     */
    where?: TaskLabelWhereInput
    /**
     * Limit how many TaskLabels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskLabel upsert
   */
  export type TaskLabelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskLabel to update in case it exists.
     */
    where: TaskLabelWhereUniqueInput
    /**
     * In case the TaskLabel found by the `where` argument doesn't exist, create a new TaskLabel with this data.
     */
    create: XOR<TaskLabelCreateInput, TaskLabelUncheckedCreateInput>
    /**
     * In case the TaskLabel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskLabelUpdateInput, TaskLabelUncheckedUpdateInput>
  }

  /**
   * TaskLabel delete
   */
  export type TaskLabelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
    /**
     * Filter which TaskLabel to delete.
     */
    where: TaskLabelWhereUniqueInput
  }

  /**
   * TaskLabel deleteMany
   */
  export type TaskLabelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLabels to delete
     */
    where?: TaskLabelWhereInput
    /**
     * Limit how many TaskLabels to delete.
     */
    limit?: number
  }

  /**
   * TaskLabel without action
   */
  export type TaskLabelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskLabel
     */
    select?: TaskLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskLabel
     */
    omit?: TaskLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskLabelInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    type: 'type',
    ownerId: 'ownerId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ColumnScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isDone: 'isDone'
  };

  export type ColumnScalarFieldEnum = (typeof ColumnScalarFieldEnum)[keyof typeof ColumnScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    priority: 'priority',
    order: 'order',
    createdAt: 'createdAt',
    createdById: 'createdById',
    assignedToId: 'assignedToId',
    projectId: 'projectId',
    columnId: 'columnId',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SubTaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    priority: 'priority',
    createdAt: 'createdAt',
    taskId: 'taskId',
    updatedAt: 'updatedAt'
  };

  export type SubTaskScalarFieldEnum = (typeof SubTaskScalarFieldEnum)[keyof typeof SubTaskScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    createdById: 'createdById',
    taskId: 'taskId',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const TaskAttachmentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    link: 'link',
    taskId: 'taskId'
  };

  export type TaskAttachmentScalarFieldEnum = (typeof TaskAttachmentScalarFieldEnum)[keyof typeof TaskAttachmentScalarFieldEnum]


  export const PomoroundsScalarFieldEnum: {
    id: 'id',
    rounds: 'rounds',
    longBreaks: 'longBreaks',
    shortBreaks: 'shortBreaks',
    userId: 'userId',
    taskId: 'taskId',
    updatedAt: 'updatedAt'
  };

  export type PomoroundsScalarFieldEnum = (typeof PomoroundsScalarFieldEnum)[keyof typeof PomoroundsScalarFieldEnum]


  export const LabelScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LabelScalarFieldEnum = (typeof LabelScalarFieldEnum)[keyof typeof LabelScalarFieldEnum]


  export const TaskLabelScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    labelId: 'labelId'
  };

  export type TaskLabelScalarFieldEnum = (typeof TaskLabelScalarFieldEnum)[keyof typeof TaskLabelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ProjectType'
   */
  export type EnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType'>
    


  /**
   * Reference to a field of type 'ProjectType[]'
   */
  export type ListEnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority'>
    


  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskPriority[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AttachmentType'
   */
  export type EnumAttachmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttachmentType'>
    


  /**
   * Reference to a field of type 'AttachmentType[]'
   */
  export type ListEnumAttachmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttachmentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdTasks?: TaskListRelationFilter
    assignedTasks?: TaskListRelationFilter
    projects?: ProjectListRelationFilter
    comments?: CommentListRelationFilter
    pomorounds?: PomoroundsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdTasks?: TaskOrderByRelationAggregateInput
    assignedTasks?: TaskOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    pomorounds?: PomoroundsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdTasks?: TaskListRelationFilter
    assignedTasks?: TaskListRelationFilter
    projects?: ProjectListRelationFilter
    comments?: CommentListRelationFilter
    pomorounds?: PomoroundsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    type?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    ownerId?: IntFilter<"Project"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    type?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    ownerId?: IntFilter<"Project"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    ownerId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    type?: EnumProjectTypeWithAggregatesFilter<"Project"> | $Enums.ProjectType
    ownerId?: IntWithAggregatesFilter<"Project"> | number
  }

  export type ColumnWhereInput = {
    AND?: ColumnWhereInput | ColumnWhereInput[]
    OR?: ColumnWhereInput[]
    NOT?: ColumnWhereInput | ColumnWhereInput[]
    id?: IntFilter<"Column"> | number
    name?: StringFilter<"Column"> | string
    isDone?: BoolFilter<"Column"> | boolean
    tasks?: TaskListRelationFilter
  }

  export type ColumnOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isDone?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColumnWhereInput | ColumnWhereInput[]
    OR?: ColumnWhereInput[]
    NOT?: ColumnWhereInput | ColumnWhereInput[]
    name?: StringFilter<"Column"> | string
    isDone?: BoolFilter<"Column"> | boolean
    tasks?: TaskListRelationFilter
  }, "id">

  export type ColumnOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isDone?: SortOrder
    _count?: ColumnCountOrderByAggregateInput
    _avg?: ColumnAvgOrderByAggregateInput
    _max?: ColumnMaxOrderByAggregateInput
    _min?: ColumnMinOrderByAggregateInput
    _sum?: ColumnSumOrderByAggregateInput
  }

  export type ColumnScalarWhereWithAggregatesInput = {
    AND?: ColumnScalarWhereWithAggregatesInput | ColumnScalarWhereWithAggregatesInput[]
    OR?: ColumnScalarWhereWithAggregatesInput[]
    NOT?: ColumnScalarWhereWithAggregatesInput | ColumnScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Column"> | number
    name?: StringWithAggregatesFilter<"Column"> | string
    isDone?: BoolWithAggregatesFilter<"Column"> | boolean
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    order?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    createdById?: IntFilter<"Task"> | number
    assignedToId?: IntFilter<"Task"> | number
    projectId?: IntFilter<"Task"> | number
    columnId?: IntFilter<"Task"> | number
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    subTasks?: SubTaskListRelationFilter
    pomorounds?: PomoroundsListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    taskLabels?: TaskLabelListRelationFilter
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
    comments?: CommentListRelationFilter
    attachments?: TaskAttachmentListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    columnId?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    subTasks?: SubTaskOrderByRelationAggregateInput
    pomorounds?: PomoroundsOrderByRelationAggregateInput
    project?: ProjectOrderByWithRelationInput
    taskLabels?: TaskLabelOrderByRelationAggregateInput
    column?: ColumnOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    attachments?: TaskAttachmentOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    order?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    createdById?: IntFilter<"Task"> | number
    assignedToId?: IntFilter<"Task"> | number
    projectId?: IntFilter<"Task"> | number
    columnId?: IntFilter<"Task"> | number
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignedTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    subTasks?: SubTaskListRelationFilter
    pomorounds?: PomoroundsListRelationFilter
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    taskLabels?: TaskLabelListRelationFilter
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
    comments?: CommentListRelationFilter
    attachments?: TaskAttachmentListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    columnId?: SortOrder
    updatedAt?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    priority?: EnumTaskPriorityWithAggregatesFilter<"Task"> | $Enums.TaskPriority
    order?: IntWithAggregatesFilter<"Task"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    createdById?: IntWithAggregatesFilter<"Task"> | number
    assignedToId?: IntWithAggregatesFilter<"Task"> | number
    projectId?: IntWithAggregatesFilter<"Task"> | number
    columnId?: IntWithAggregatesFilter<"Task"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
  }

  export type SubTaskWhereInput = {
    AND?: SubTaskWhereInput | SubTaskWhereInput[]
    OR?: SubTaskWhereInput[]
    NOT?: SubTaskWhereInput | SubTaskWhereInput[]
    id?: IntFilter<"SubTask"> | number
    title?: StringFilter<"SubTask"> | string
    description?: StringFilter<"SubTask"> | string
    priority?: EnumTaskPriorityFilter<"SubTask"> | $Enums.TaskPriority
    createdAt?: DateTimeFilter<"SubTask"> | Date | string
    taskId?: IntFilter<"SubTask"> | number
    updatedAt?: DateTimeFilter<"SubTask"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type SubTaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type SubTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubTaskWhereInput | SubTaskWhereInput[]
    OR?: SubTaskWhereInput[]
    NOT?: SubTaskWhereInput | SubTaskWhereInput[]
    title?: StringFilter<"SubTask"> | string
    description?: StringFilter<"SubTask"> | string
    priority?: EnumTaskPriorityFilter<"SubTask"> | $Enums.TaskPriority
    createdAt?: DateTimeFilter<"SubTask"> | Date | string
    taskId?: IntFilter<"SubTask"> | number
    updatedAt?: DateTimeFilter<"SubTask"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type SubTaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
    _count?: SubTaskCountOrderByAggregateInput
    _avg?: SubTaskAvgOrderByAggregateInput
    _max?: SubTaskMaxOrderByAggregateInput
    _min?: SubTaskMinOrderByAggregateInput
    _sum?: SubTaskSumOrderByAggregateInput
  }

  export type SubTaskScalarWhereWithAggregatesInput = {
    AND?: SubTaskScalarWhereWithAggregatesInput | SubTaskScalarWhereWithAggregatesInput[]
    OR?: SubTaskScalarWhereWithAggregatesInput[]
    NOT?: SubTaskScalarWhereWithAggregatesInput | SubTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubTask"> | number
    title?: StringWithAggregatesFilter<"SubTask"> | string
    description?: StringWithAggregatesFilter<"SubTask"> | string
    priority?: EnumTaskPriorityWithAggregatesFilter<"SubTask"> | $Enums.TaskPriority
    createdAt?: DateTimeWithAggregatesFilter<"SubTask"> | Date | string
    taskId?: IntWithAggregatesFilter<"SubTask"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"SubTask"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: JsonFilter<"Comment">
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    createdById?: IntFilter<"Comment"> | number
    taskId?: IntFilter<"Comment"> | number
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: JsonFilter<"Comment">
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    createdById?: IntFilter<"Comment"> | number
    taskId?: IntFilter<"Comment"> | number
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    content?: JsonWithAggregatesFilter<"Comment">
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    createdById?: IntWithAggregatesFilter<"Comment"> | number
    taskId?: IntWithAggregatesFilter<"Comment"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type TaskAttachmentWhereInput = {
    AND?: TaskAttachmentWhereInput | TaskAttachmentWhereInput[]
    OR?: TaskAttachmentWhereInput[]
    NOT?: TaskAttachmentWhereInput | TaskAttachmentWhereInput[]
    id?: IntFilter<"TaskAttachment"> | number
    type?: EnumAttachmentTypeFilter<"TaskAttachment"> | $Enums.AttachmentType
    link?: StringFilter<"TaskAttachment"> | string
    taskId?: IntFilter<"TaskAttachment"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    link?: SortOrder
    taskId?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type TaskAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskAttachmentWhereInput | TaskAttachmentWhereInput[]
    OR?: TaskAttachmentWhereInput[]
    NOT?: TaskAttachmentWhereInput | TaskAttachmentWhereInput[]
    type?: EnumAttachmentTypeFilter<"TaskAttachment"> | $Enums.AttachmentType
    link?: StringFilter<"TaskAttachment"> | string
    taskId?: IntFilter<"TaskAttachment"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type TaskAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    link?: SortOrder
    taskId?: SortOrder
    _count?: TaskAttachmentCountOrderByAggregateInput
    _avg?: TaskAttachmentAvgOrderByAggregateInput
    _max?: TaskAttachmentMaxOrderByAggregateInput
    _min?: TaskAttachmentMinOrderByAggregateInput
    _sum?: TaskAttachmentSumOrderByAggregateInput
  }

  export type TaskAttachmentScalarWhereWithAggregatesInput = {
    AND?: TaskAttachmentScalarWhereWithAggregatesInput | TaskAttachmentScalarWhereWithAggregatesInput[]
    OR?: TaskAttachmentScalarWhereWithAggregatesInput[]
    NOT?: TaskAttachmentScalarWhereWithAggregatesInput | TaskAttachmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskAttachment"> | number
    type?: EnumAttachmentTypeWithAggregatesFilter<"TaskAttachment"> | $Enums.AttachmentType
    link?: StringWithAggregatesFilter<"TaskAttachment"> | string
    taskId?: IntWithAggregatesFilter<"TaskAttachment"> | number
  }

  export type PomoroundsWhereInput = {
    AND?: PomoroundsWhereInput | PomoroundsWhereInput[]
    OR?: PomoroundsWhereInput[]
    NOT?: PomoroundsWhereInput | PomoroundsWhereInput[]
    id?: IntFilter<"Pomorounds"> | number
    rounds?: IntFilter<"Pomorounds"> | number
    longBreaks?: IntFilter<"Pomorounds"> | number
    shortBreaks?: IntFilter<"Pomorounds"> | number
    userId?: IntFilter<"Pomorounds"> | number
    taskId?: IntFilter<"Pomorounds"> | number
    updatedAt?: DateTimeFilter<"Pomorounds"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PomoroundsOrderByWithRelationInput = {
    id?: SortOrder
    rounds?: SortOrder
    longBreaks?: SortOrder
    shortBreaks?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PomoroundsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PomoroundsWhereInput | PomoroundsWhereInput[]
    OR?: PomoroundsWhereInput[]
    NOT?: PomoroundsWhereInput | PomoroundsWhereInput[]
    rounds?: IntFilter<"Pomorounds"> | number
    longBreaks?: IntFilter<"Pomorounds"> | number
    shortBreaks?: IntFilter<"Pomorounds"> | number
    userId?: IntFilter<"Pomorounds"> | number
    taskId?: IntFilter<"Pomorounds"> | number
    updatedAt?: DateTimeFilter<"Pomorounds"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PomoroundsOrderByWithAggregationInput = {
    id?: SortOrder
    rounds?: SortOrder
    longBreaks?: SortOrder
    shortBreaks?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
    _count?: PomoroundsCountOrderByAggregateInput
    _avg?: PomoroundsAvgOrderByAggregateInput
    _max?: PomoroundsMaxOrderByAggregateInput
    _min?: PomoroundsMinOrderByAggregateInput
    _sum?: PomoroundsSumOrderByAggregateInput
  }

  export type PomoroundsScalarWhereWithAggregatesInput = {
    AND?: PomoroundsScalarWhereWithAggregatesInput | PomoroundsScalarWhereWithAggregatesInput[]
    OR?: PomoroundsScalarWhereWithAggregatesInput[]
    NOT?: PomoroundsScalarWhereWithAggregatesInput | PomoroundsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pomorounds"> | number
    rounds?: IntWithAggregatesFilter<"Pomorounds"> | number
    longBreaks?: IntWithAggregatesFilter<"Pomorounds"> | number
    shortBreaks?: IntWithAggregatesFilter<"Pomorounds"> | number
    userId?: IntWithAggregatesFilter<"Pomorounds"> | number
    taskId?: IntWithAggregatesFilter<"Pomorounds"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Pomorounds"> | Date | string
  }

  export type LabelWhereInput = {
    AND?: LabelWhereInput | LabelWhereInput[]
    OR?: LabelWhereInput[]
    NOT?: LabelWhereInput | LabelWhereInput[]
    id?: IntFilter<"Label"> | number
    name?: StringFilter<"Label"> | string
    taskLabels?: TaskLabelListRelationFilter
  }

  export type LabelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    taskLabels?: TaskLabelOrderByRelationAggregateInput
  }

  export type LabelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LabelWhereInput | LabelWhereInput[]
    OR?: LabelWhereInput[]
    NOT?: LabelWhereInput | LabelWhereInput[]
    taskLabels?: TaskLabelListRelationFilter
  }, "id" | "name">

  export type LabelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LabelCountOrderByAggregateInput
    _avg?: LabelAvgOrderByAggregateInput
    _max?: LabelMaxOrderByAggregateInput
    _min?: LabelMinOrderByAggregateInput
    _sum?: LabelSumOrderByAggregateInput
  }

  export type LabelScalarWhereWithAggregatesInput = {
    AND?: LabelScalarWhereWithAggregatesInput | LabelScalarWhereWithAggregatesInput[]
    OR?: LabelScalarWhereWithAggregatesInput[]
    NOT?: LabelScalarWhereWithAggregatesInput | LabelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Label"> | number
    name?: StringWithAggregatesFilter<"Label"> | string
  }

  export type TaskLabelWhereInput = {
    AND?: TaskLabelWhereInput | TaskLabelWhereInput[]
    OR?: TaskLabelWhereInput[]
    NOT?: TaskLabelWhereInput | TaskLabelWhereInput[]
    id?: IntFilter<"TaskLabel"> | number
    taskId?: IntFilter<"TaskLabel"> | number
    labelId?: IntFilter<"TaskLabel"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    label?: XOR<LabelScalarRelationFilter, LabelWhereInput>
  }

  export type TaskLabelOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    labelId?: SortOrder
    task?: TaskOrderByWithRelationInput
    label?: LabelOrderByWithRelationInput
  }

  export type TaskLabelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    taskId_labelId?: TaskLabelTaskIdLabelIdCompoundUniqueInput
    AND?: TaskLabelWhereInput | TaskLabelWhereInput[]
    OR?: TaskLabelWhereInput[]
    NOT?: TaskLabelWhereInput | TaskLabelWhereInput[]
    taskId?: IntFilter<"TaskLabel"> | number
    labelId?: IntFilter<"TaskLabel"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    label?: XOR<LabelScalarRelationFilter, LabelWhereInput>
  }, "id" | "taskId_labelId">

  export type TaskLabelOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    labelId?: SortOrder
    _count?: TaskLabelCountOrderByAggregateInput
    _avg?: TaskLabelAvgOrderByAggregateInput
    _max?: TaskLabelMaxOrderByAggregateInput
    _min?: TaskLabelMinOrderByAggregateInput
    _sum?: TaskLabelSumOrderByAggregateInput
  }

  export type TaskLabelScalarWhereWithAggregatesInput = {
    AND?: TaskLabelScalarWhereWithAggregatesInput | TaskLabelScalarWhereWithAggregatesInput[]
    OR?: TaskLabelScalarWhereWithAggregatesInput[]
    NOT?: TaskLabelScalarWhereWithAggregatesInput | TaskLabelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskLabel"> | number
    taskId?: IntWithAggregatesFilter<"TaskLabel"> | number
    labelId?: IntWithAggregatesFilter<"TaskLabel"> | number
  }

  export type UserCreateInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutCreatedByInput
    pomorounds?: PomoroundsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatedByInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutCreatedByNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatedByNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    name: string
    description: string
    type: $Enums.ProjectType
    owner: UserCreateNestedOneWithoutProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    type: $Enums.ProjectType
    ownerId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    ownerId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description: string
    type: $Enums.ProjectType
    ownerId: number
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type ColumnCreateInput = {
    name: string
    isDone?: boolean
    tasks?: TaskCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateInput = {
    id?: number
    name: string
    isDone?: boolean
    tasks?: TaskUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    tasks?: TaskUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
    tasks?: TaskUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnCreateManyInput = {
    id?: number
    name: string
    isDone?: boolean
  }

  export type ColumnUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColumnUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TaskCreateInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    subTasks?: SubTaskCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsCreateNestedManyWithoutTaskInput
    project: ProjectCreateNestedOneWithoutTasksInput
    taskLabels?: TaskLabelCreateNestedManyWithoutTaskInput
    column: ColumnCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
    subTasks?: SubTaskUncheckedCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutTaskInput
    taskLabels?: TaskLabelUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    subTasks?: SubTaskUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutTaskNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    taskLabels?: TaskLabelUpdateManyWithoutTaskNestedInput
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTasks?: SubTaskUncheckedUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutTaskNestedInput
    taskLabels?: TaskLabelUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubTaskCreateInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutSubTasksInput
  }

  export type SubTaskUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    createdAt?: Date | string
    taskId: number
    updatedAt?: Date | string
  }

  export type SubTaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutSubTasksNestedInput
  }

  export type SubTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubTaskCreateManyInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    createdAt?: Date | string
    taskId: number
    updatedAt?: Date | string
  }

  export type SubTaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCommentsInput
    task: TaskCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdById: number
    taskId: number
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCommentsNestedInput
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdById: number
    taskId: number
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAttachmentCreateInput = {
    type: $Enums.AttachmentType
    link: string
    task: TaskCreateNestedOneWithoutAttachmentsInput
  }

  export type TaskAttachmentUncheckedCreateInput = {
    id?: number
    type: $Enums.AttachmentType
    link: string
    taskId: number
  }

  export type TaskAttachmentUpdateInput = {
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    link?: StringFieldUpdateOperationsInput | string
    task?: TaskUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type TaskAttachmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    link?: StringFieldUpdateOperationsInput | string
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskAttachmentCreateManyInput = {
    id?: number
    type: $Enums.AttachmentType
    link: string
    taskId: number
  }

  export type TaskAttachmentUpdateManyMutationInput = {
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    link?: StringFieldUpdateOperationsInput | string
  }

  export type TaskAttachmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    link?: StringFieldUpdateOperationsInput | string
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type PomoroundsCreateInput = {
    rounds: number
    longBreaks: number
    shortBreaks: number
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutPomoroundsInput
    user: UserCreateNestedOneWithoutPomoroundsInput
  }

  export type PomoroundsUncheckedCreateInput = {
    id?: number
    rounds: number
    longBreaks: number
    shortBreaks: number
    userId: number
    taskId: number
    updatedAt?: Date | string
  }

  export type PomoroundsUpdateInput = {
    rounds?: IntFieldUpdateOperationsInput | number
    longBreaks?: IntFieldUpdateOperationsInput | number
    shortBreaks?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutPomoroundsNestedInput
    user?: UserUpdateOneRequiredWithoutPomoroundsNestedInput
  }

  export type PomoroundsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    longBreaks?: IntFieldUpdateOperationsInput | number
    shortBreaks?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PomoroundsCreateManyInput = {
    id?: number
    rounds: number
    longBreaks: number
    shortBreaks: number
    userId: number
    taskId: number
    updatedAt?: Date | string
  }

  export type PomoroundsUpdateManyMutationInput = {
    rounds?: IntFieldUpdateOperationsInput | number
    longBreaks?: IntFieldUpdateOperationsInput | number
    shortBreaks?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PomoroundsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    longBreaks?: IntFieldUpdateOperationsInput | number
    shortBreaks?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LabelCreateInput = {
    name: string
    taskLabels?: TaskLabelCreateNestedManyWithoutLabelInput
  }

  export type LabelUncheckedCreateInput = {
    id?: number
    name: string
    taskLabels?: TaskLabelUncheckedCreateNestedManyWithoutLabelInput
  }

  export type LabelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    taskLabels?: TaskLabelUpdateManyWithoutLabelNestedInput
  }

  export type LabelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    taskLabels?: TaskLabelUncheckedUpdateManyWithoutLabelNestedInput
  }

  export type LabelCreateManyInput = {
    id?: number
    name: string
  }

  export type LabelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LabelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaskLabelCreateInput = {
    task: TaskCreateNestedOneWithoutTaskLabelsInput
    label: LabelCreateNestedOneWithoutTaskLabelsInput
  }

  export type TaskLabelUncheckedCreateInput = {
    id?: number
    taskId: number
    labelId: number
  }

  export type TaskLabelUpdateInput = {
    task?: TaskUpdateOneRequiredWithoutTaskLabelsNestedInput
    label?: LabelUpdateOneRequiredWithoutTaskLabelsNestedInput
  }

  export type TaskLabelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    labelId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskLabelCreateManyInput = {
    id?: number
    taskId: number
    labelId: number
  }

  export type TaskLabelUpdateManyMutationInput = {

  }

  export type TaskLabelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    labelId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type PomoroundsListRelationFilter = {
    every?: PomoroundsWhereInput
    some?: PomoroundsWhereInput
    none?: PomoroundsWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PomoroundsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    ownerId?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type EnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ColumnCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDone?: SortOrder
  }

  export type ColumnAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDone?: SortOrder
  }

  export type ColumnMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isDone?: SortOrder
  }

  export type ColumnSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubTaskListRelationFilter = {
    every?: SubTaskWhereInput
    some?: SubTaskWhereInput
    none?: SubTaskWhereInput
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TaskLabelListRelationFilter = {
    every?: TaskLabelWhereInput
    some?: TaskLabelWhereInput
    none?: TaskLabelWhereInput
  }

  export type ColumnScalarRelationFilter = {
    is?: ColumnWhereInput
    isNot?: ColumnWhereInput
  }

  export type TaskAttachmentListRelationFilter = {
    every?: TaskAttachmentWhereInput
    some?: TaskAttachmentWhereInput
    none?: TaskAttachmentWhereInput
  }

  export type SubTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskLabelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    columnId?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    columnId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    columnId?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    columnId?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    createdById?: SortOrder
    assignedToId?: SortOrder
    projectId?: SortOrder
    columnId?: SortOrder
  }

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type SubTaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubTaskAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }

  export type SubTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubTaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubTaskSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    taskId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    taskId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumAttachmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | EnumAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttachmentType[] | ListEnumAttachmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttachmentType[] | ListEnumAttachmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttachmentTypeFilter<$PrismaModel> | $Enums.AttachmentType
  }

  export type TaskAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    link?: SortOrder
    taskId?: SortOrder
  }

  export type TaskAttachmentAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }

  export type TaskAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    link?: SortOrder
    taskId?: SortOrder
  }

  export type TaskAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    link?: SortOrder
    taskId?: SortOrder
  }

  export type TaskAttachmentSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }

  export type EnumAttachmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | EnumAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttachmentType[] | ListEnumAttachmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttachmentType[] | ListEnumAttachmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttachmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttachmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttachmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAttachmentTypeFilter<$PrismaModel>
  }

  export type PomoroundsCountOrderByAggregateInput = {
    id?: SortOrder
    rounds?: SortOrder
    longBreaks?: SortOrder
    shortBreaks?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
  }

  export type PomoroundsAvgOrderByAggregateInput = {
    id?: SortOrder
    rounds?: SortOrder
    longBreaks?: SortOrder
    shortBreaks?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type PomoroundsMaxOrderByAggregateInput = {
    id?: SortOrder
    rounds?: SortOrder
    longBreaks?: SortOrder
    shortBreaks?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
  }

  export type PomoroundsMinOrderByAggregateInput = {
    id?: SortOrder
    rounds?: SortOrder
    longBreaks?: SortOrder
    shortBreaks?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
    updatedAt?: SortOrder
  }

  export type PomoroundsSumOrderByAggregateInput = {
    id?: SortOrder
    rounds?: SortOrder
    longBreaks?: SortOrder
    shortBreaks?: SortOrder
    userId?: SortOrder
    taskId?: SortOrder
  }

  export type LabelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LabelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LabelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LabelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LabelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LabelScalarRelationFilter = {
    is?: LabelWhereInput
    isNot?: LabelWhereInput
  }

  export type TaskLabelTaskIdLabelIdCompoundUniqueInput = {
    taskId: number
    labelId: number
  }

  export type TaskLabelCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    labelId?: SortOrder
  }

  export type TaskLabelAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    labelId?: SortOrder
  }

  export type TaskLabelMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    labelId?: SortOrder
  }

  export type TaskLabelMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    labelId?: SortOrder
  }

  export type TaskLabelSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    labelId?: SortOrder
  }

  export type TaskCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CommentCreateWithoutCreatedByInput, CommentUncheckedCreateWithoutCreatedByInput> | CommentCreateWithoutCreatedByInput[] | CommentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCreatedByInput | CommentCreateOrConnectWithoutCreatedByInput[]
    createMany?: CommentCreateManyCreatedByInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PomoroundsCreateNestedManyWithoutUserInput = {
    create?: XOR<PomoroundsCreateWithoutUserInput, PomoroundsUncheckedCreateWithoutUserInput> | PomoroundsCreateWithoutUserInput[] | PomoroundsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomoroundsCreateOrConnectWithoutUserInput | PomoroundsCreateOrConnectWithoutUserInput[]
    createMany?: PomoroundsCreateManyUserInputEnvelope
    connect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<CommentCreateWithoutCreatedByInput, CommentUncheckedCreateWithoutCreatedByInput> | CommentCreateWithoutCreatedByInput[] | CommentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCreatedByInput | CommentCreateOrConnectWithoutCreatedByInput[]
    createMany?: CommentCreateManyCreatedByInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PomoroundsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PomoroundsCreateWithoutUserInput, PomoroundsUncheckedCreateWithoutUserInput> | PomoroundsCreateWithoutUserInput[] | PomoroundsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomoroundsCreateOrConnectWithoutUserInput | PomoroundsCreateOrConnectWithoutUserInput[]
    createMany?: PomoroundsCreateManyUserInputEnvelope
    connect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TaskUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CommentCreateWithoutCreatedByInput, CommentUncheckedCreateWithoutCreatedByInput> | CommentCreateWithoutCreatedByInput[] | CommentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCreatedByInput | CommentCreateOrConnectWithoutCreatedByInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCreatedByInput | CommentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CommentCreateManyCreatedByInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCreatedByInput | CommentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCreatedByInput | CommentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PomoroundsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PomoroundsCreateWithoutUserInput, PomoroundsUncheckedCreateWithoutUserInput> | PomoroundsCreateWithoutUserInput[] | PomoroundsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomoroundsCreateOrConnectWithoutUserInput | PomoroundsCreateOrConnectWithoutUserInput[]
    upsert?: PomoroundsUpsertWithWhereUniqueWithoutUserInput | PomoroundsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PomoroundsCreateManyUserInputEnvelope
    set?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    disconnect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    delete?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    connect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    update?: PomoroundsUpdateWithWhereUniqueWithoutUserInput | PomoroundsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PomoroundsUpdateManyWithWhereWithoutUserInput | PomoroundsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PomoroundsScalarWhereInput | PomoroundsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput> | TaskCreateWithoutCreatedByInput[] | TaskUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCreatedByInput | TaskCreateOrConnectWithoutCreatedByInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCreatedByInput | TaskUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: TaskCreateManyCreatedByInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCreatedByInput | TaskUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCreatedByInput | TaskUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput> | TaskCreateWithoutAssignedToInput[] | TaskUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssignedToInput | TaskCreateOrConnectWithoutAssignedToInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssignedToInput | TaskUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: TaskCreateManyAssignedToInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssignedToInput | TaskUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssignedToInput | TaskUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<CommentCreateWithoutCreatedByInput, CommentUncheckedCreateWithoutCreatedByInput> | CommentCreateWithoutCreatedByInput[] | CommentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutCreatedByInput | CommentCreateOrConnectWithoutCreatedByInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutCreatedByInput | CommentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: CommentCreateManyCreatedByInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutCreatedByInput | CommentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutCreatedByInput | CommentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PomoroundsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PomoroundsCreateWithoutUserInput, PomoroundsUncheckedCreateWithoutUserInput> | PomoroundsCreateWithoutUserInput[] | PomoroundsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PomoroundsCreateOrConnectWithoutUserInput | PomoroundsCreateOrConnectWithoutUserInput[]
    upsert?: PomoroundsUpsertWithWhereUniqueWithoutUserInput | PomoroundsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PomoroundsCreateManyUserInputEnvelope
    set?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    disconnect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    delete?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    connect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    update?: PomoroundsUpdateWithWhereUniqueWithoutUserInput | PomoroundsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PomoroundsUpdateManyWithWhereWithoutUserInput | PomoroundsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PomoroundsScalarWhereInput | PomoroundsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumProjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectType
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutColumnInput = {
    create?: XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput> | TaskCreateWithoutColumnInput[] | TaskUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutColumnInput | TaskCreateOrConnectWithoutColumnInput[]
    createMany?: TaskCreateManyColumnInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput> | TaskCreateWithoutColumnInput[] | TaskUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutColumnInput | TaskCreateOrConnectWithoutColumnInput[]
    createMany?: TaskCreateManyColumnInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TaskUpdateManyWithoutColumnNestedInput = {
    create?: XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput> | TaskCreateWithoutColumnInput[] | TaskUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutColumnInput | TaskCreateOrConnectWithoutColumnInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutColumnInput | TaskUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: TaskCreateManyColumnInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutColumnInput | TaskUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutColumnInput | TaskUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput> | TaskCreateWithoutColumnInput[] | TaskUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutColumnInput | TaskCreateOrConnectWithoutColumnInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutColumnInput | TaskUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: TaskCreateManyColumnInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutColumnInput | TaskUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutColumnInput | TaskUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedTasksInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedTasksInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
  }

  export type SubTaskCreateNestedManyWithoutTaskInput = {
    create?: XOR<SubTaskCreateWithoutTaskInput, SubTaskUncheckedCreateWithoutTaskInput> | SubTaskCreateWithoutTaskInput[] | SubTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubTaskCreateOrConnectWithoutTaskInput | SubTaskCreateOrConnectWithoutTaskInput[]
    createMany?: SubTaskCreateManyTaskInputEnvelope
    connect?: SubTaskWhereUniqueInput | SubTaskWhereUniqueInput[]
  }

  export type PomoroundsCreateNestedManyWithoutTaskInput = {
    create?: XOR<PomoroundsCreateWithoutTaskInput, PomoroundsUncheckedCreateWithoutTaskInput> | PomoroundsCreateWithoutTaskInput[] | PomoroundsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: PomoroundsCreateOrConnectWithoutTaskInput | PomoroundsCreateOrConnectWithoutTaskInput[]
    createMany?: PomoroundsCreateManyTaskInputEnvelope
    connect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type TaskLabelCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskLabelCreateWithoutTaskInput, TaskLabelUncheckedCreateWithoutTaskInput> | TaskLabelCreateWithoutTaskInput[] | TaskLabelUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLabelCreateOrConnectWithoutTaskInput | TaskLabelCreateOrConnectWithoutTaskInput[]
    createMany?: TaskLabelCreateManyTaskInputEnvelope
    connect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
  }

  export type ColumnCreateNestedOneWithoutTasksInput = {
    create?: XOR<ColumnCreateWithoutTasksInput, ColumnUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutTasksInput
    connect?: ColumnWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutTaskInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TaskAttachmentCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskAttachmentCreateWithoutTaskInput, TaskAttachmentUncheckedCreateWithoutTaskInput> | TaskAttachmentCreateWithoutTaskInput[] | TaskAttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAttachmentCreateOrConnectWithoutTaskInput | TaskAttachmentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskAttachmentCreateManyTaskInputEnvelope
    connect?: TaskAttachmentWhereUniqueInput | TaskAttachmentWhereUniqueInput[]
  }

  export type SubTaskUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<SubTaskCreateWithoutTaskInput, SubTaskUncheckedCreateWithoutTaskInput> | SubTaskCreateWithoutTaskInput[] | SubTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubTaskCreateOrConnectWithoutTaskInput | SubTaskCreateOrConnectWithoutTaskInput[]
    createMany?: SubTaskCreateManyTaskInputEnvelope
    connect?: SubTaskWhereUniqueInput | SubTaskWhereUniqueInput[]
  }

  export type PomoroundsUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<PomoroundsCreateWithoutTaskInput, PomoroundsUncheckedCreateWithoutTaskInput> | PomoroundsCreateWithoutTaskInput[] | PomoroundsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: PomoroundsCreateOrConnectWithoutTaskInput | PomoroundsCreateOrConnectWithoutTaskInput[]
    createMany?: PomoroundsCreateManyTaskInputEnvelope
    connect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
  }

  export type TaskLabelUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskLabelCreateWithoutTaskInput, TaskLabelUncheckedCreateWithoutTaskInput> | TaskLabelCreateWithoutTaskInput[] | TaskLabelUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLabelCreateOrConnectWithoutTaskInput | TaskLabelCreateOrConnectWithoutTaskInput[]
    createMany?: TaskLabelCreateManyTaskInputEnvelope
    connect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TaskAttachmentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskAttachmentCreateWithoutTaskInput, TaskAttachmentUncheckedCreateWithoutTaskInput> | TaskAttachmentCreateWithoutTaskInput[] | TaskAttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAttachmentCreateOrConnectWithoutTaskInput | TaskAttachmentCreateOrConnectWithoutTaskInput[]
    createMany?: TaskAttachmentCreateManyTaskInputEnvelope
    connect?: TaskAttachmentWhereUniqueInput | TaskAttachmentWhereUniqueInput[]
  }

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCreatedTasksNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTasksInput
    upsert?: UserUpsertWithoutCreatedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTasksInput, UserUpdateWithoutCreatedTasksInput>, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedTasksNestedInput = {
    create?: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedTasksInput
    upsert?: UserUpsertWithoutAssignedTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedTasksInput, UserUpdateWithoutAssignedTasksInput>, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type SubTaskUpdateManyWithoutTaskNestedInput = {
    create?: XOR<SubTaskCreateWithoutTaskInput, SubTaskUncheckedCreateWithoutTaskInput> | SubTaskCreateWithoutTaskInput[] | SubTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubTaskCreateOrConnectWithoutTaskInput | SubTaskCreateOrConnectWithoutTaskInput[]
    upsert?: SubTaskUpsertWithWhereUniqueWithoutTaskInput | SubTaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: SubTaskCreateManyTaskInputEnvelope
    set?: SubTaskWhereUniqueInput | SubTaskWhereUniqueInput[]
    disconnect?: SubTaskWhereUniqueInput | SubTaskWhereUniqueInput[]
    delete?: SubTaskWhereUniqueInput | SubTaskWhereUniqueInput[]
    connect?: SubTaskWhereUniqueInput | SubTaskWhereUniqueInput[]
    update?: SubTaskUpdateWithWhereUniqueWithoutTaskInput | SubTaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: SubTaskUpdateManyWithWhereWithoutTaskInput | SubTaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: SubTaskScalarWhereInput | SubTaskScalarWhereInput[]
  }

  export type PomoroundsUpdateManyWithoutTaskNestedInput = {
    create?: XOR<PomoroundsCreateWithoutTaskInput, PomoroundsUncheckedCreateWithoutTaskInput> | PomoroundsCreateWithoutTaskInput[] | PomoroundsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: PomoroundsCreateOrConnectWithoutTaskInput | PomoroundsCreateOrConnectWithoutTaskInput[]
    upsert?: PomoroundsUpsertWithWhereUniqueWithoutTaskInput | PomoroundsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: PomoroundsCreateManyTaskInputEnvelope
    set?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    disconnect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    delete?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    connect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    update?: PomoroundsUpdateWithWhereUniqueWithoutTaskInput | PomoroundsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: PomoroundsUpdateManyWithWhereWithoutTaskInput | PomoroundsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: PomoroundsScalarWhereInput | PomoroundsScalarWhereInput[]
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type TaskLabelUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskLabelCreateWithoutTaskInput, TaskLabelUncheckedCreateWithoutTaskInput> | TaskLabelCreateWithoutTaskInput[] | TaskLabelUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLabelCreateOrConnectWithoutTaskInput | TaskLabelCreateOrConnectWithoutTaskInput[]
    upsert?: TaskLabelUpsertWithWhereUniqueWithoutTaskInput | TaskLabelUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskLabelCreateManyTaskInputEnvelope
    set?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    disconnect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    delete?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    connect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    update?: TaskLabelUpdateWithWhereUniqueWithoutTaskInput | TaskLabelUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskLabelUpdateManyWithWhereWithoutTaskInput | TaskLabelUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskLabelScalarWhereInput | TaskLabelScalarWhereInput[]
  }

  export type ColumnUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ColumnCreateWithoutTasksInput, ColumnUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutTasksInput
    upsert?: ColumnUpsertWithoutTasksInput
    connect?: ColumnWhereUniqueInput
    update?: XOR<XOR<ColumnUpdateToOneWithWhereWithoutTasksInput, ColumnUpdateWithoutTasksInput>, ColumnUncheckedUpdateWithoutTasksInput>
  }

  export type CommentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput | CommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTaskInput | CommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTaskInput | CommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TaskAttachmentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskAttachmentCreateWithoutTaskInput, TaskAttachmentUncheckedCreateWithoutTaskInput> | TaskAttachmentCreateWithoutTaskInput[] | TaskAttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAttachmentCreateOrConnectWithoutTaskInput | TaskAttachmentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskAttachmentUpsertWithWhereUniqueWithoutTaskInput | TaskAttachmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskAttachmentCreateManyTaskInputEnvelope
    set?: TaskAttachmentWhereUniqueInput | TaskAttachmentWhereUniqueInput[]
    disconnect?: TaskAttachmentWhereUniqueInput | TaskAttachmentWhereUniqueInput[]
    delete?: TaskAttachmentWhereUniqueInput | TaskAttachmentWhereUniqueInput[]
    connect?: TaskAttachmentWhereUniqueInput | TaskAttachmentWhereUniqueInput[]
    update?: TaskAttachmentUpdateWithWhereUniqueWithoutTaskInput | TaskAttachmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskAttachmentUpdateManyWithWhereWithoutTaskInput | TaskAttachmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskAttachmentScalarWhereInput | TaskAttachmentScalarWhereInput[]
  }

  export type SubTaskUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<SubTaskCreateWithoutTaskInput, SubTaskUncheckedCreateWithoutTaskInput> | SubTaskCreateWithoutTaskInput[] | SubTaskUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: SubTaskCreateOrConnectWithoutTaskInput | SubTaskCreateOrConnectWithoutTaskInput[]
    upsert?: SubTaskUpsertWithWhereUniqueWithoutTaskInput | SubTaskUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: SubTaskCreateManyTaskInputEnvelope
    set?: SubTaskWhereUniqueInput | SubTaskWhereUniqueInput[]
    disconnect?: SubTaskWhereUniqueInput | SubTaskWhereUniqueInput[]
    delete?: SubTaskWhereUniqueInput | SubTaskWhereUniqueInput[]
    connect?: SubTaskWhereUniqueInput | SubTaskWhereUniqueInput[]
    update?: SubTaskUpdateWithWhereUniqueWithoutTaskInput | SubTaskUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: SubTaskUpdateManyWithWhereWithoutTaskInput | SubTaskUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: SubTaskScalarWhereInput | SubTaskScalarWhereInput[]
  }

  export type PomoroundsUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<PomoroundsCreateWithoutTaskInput, PomoroundsUncheckedCreateWithoutTaskInput> | PomoroundsCreateWithoutTaskInput[] | PomoroundsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: PomoroundsCreateOrConnectWithoutTaskInput | PomoroundsCreateOrConnectWithoutTaskInput[]
    upsert?: PomoroundsUpsertWithWhereUniqueWithoutTaskInput | PomoroundsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: PomoroundsCreateManyTaskInputEnvelope
    set?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    disconnect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    delete?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    connect?: PomoroundsWhereUniqueInput | PomoroundsWhereUniqueInput[]
    update?: PomoroundsUpdateWithWhereUniqueWithoutTaskInput | PomoroundsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: PomoroundsUpdateManyWithWhereWithoutTaskInput | PomoroundsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: PomoroundsScalarWhereInput | PomoroundsScalarWhereInput[]
  }

  export type TaskLabelUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskLabelCreateWithoutTaskInput, TaskLabelUncheckedCreateWithoutTaskInput> | TaskLabelCreateWithoutTaskInput[] | TaskLabelUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskLabelCreateOrConnectWithoutTaskInput | TaskLabelCreateOrConnectWithoutTaskInput[]
    upsert?: TaskLabelUpsertWithWhereUniqueWithoutTaskInput | TaskLabelUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskLabelCreateManyTaskInputEnvelope
    set?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    disconnect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    delete?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    connect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    update?: TaskLabelUpdateWithWhereUniqueWithoutTaskInput | TaskLabelUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskLabelUpdateManyWithWhereWithoutTaskInput | TaskLabelUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskLabelScalarWhereInput | TaskLabelScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput | CommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTaskInput | CommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTaskInput | CommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TaskAttachmentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskAttachmentCreateWithoutTaskInput, TaskAttachmentUncheckedCreateWithoutTaskInput> | TaskAttachmentCreateWithoutTaskInput[] | TaskAttachmentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskAttachmentCreateOrConnectWithoutTaskInput | TaskAttachmentCreateOrConnectWithoutTaskInput[]
    upsert?: TaskAttachmentUpsertWithWhereUniqueWithoutTaskInput | TaskAttachmentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskAttachmentCreateManyTaskInputEnvelope
    set?: TaskAttachmentWhereUniqueInput | TaskAttachmentWhereUniqueInput[]
    disconnect?: TaskAttachmentWhereUniqueInput | TaskAttachmentWhereUniqueInput[]
    delete?: TaskAttachmentWhereUniqueInput | TaskAttachmentWhereUniqueInput[]
    connect?: TaskAttachmentWhereUniqueInput | TaskAttachmentWhereUniqueInput[]
    update?: TaskAttachmentUpdateWithWhereUniqueWithoutTaskInput | TaskAttachmentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskAttachmentUpdateManyWithWhereWithoutTaskInput | TaskAttachmentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskAttachmentScalarWhereInput | TaskAttachmentScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutSubTasksInput = {
    create?: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutSubTasksNestedInput = {
    create?: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput
    upsert?: TaskUpsertWithoutSubTasksInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubTasksInput, TaskUpdateWithoutSubTasksInput>, TaskUncheckedUpdateWithoutSubTasksInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    upsert?: TaskUpsertWithoutCommentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutCommentsInput, TaskUpdateWithoutCommentsInput>, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAttachmentsInput
    connect?: TaskWhereUniqueInput
  }

  export type EnumAttachmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttachmentType
  }

  export type TaskUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAttachmentsInput
    upsert?: TaskUpsertWithoutAttachmentsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutAttachmentsInput, TaskUpdateWithoutAttachmentsInput>, TaskUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TaskCreateNestedOneWithoutPomoroundsInput = {
    create?: XOR<TaskCreateWithoutPomoroundsInput, TaskUncheckedCreateWithoutPomoroundsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutPomoroundsInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPomoroundsInput = {
    create?: XOR<UserCreateWithoutPomoroundsInput, UserUncheckedCreateWithoutPomoroundsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPomoroundsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutPomoroundsNestedInput = {
    create?: XOR<TaskCreateWithoutPomoroundsInput, TaskUncheckedCreateWithoutPomoroundsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutPomoroundsInput
    upsert?: TaskUpsertWithoutPomoroundsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutPomoroundsInput, TaskUpdateWithoutPomoroundsInput>, TaskUncheckedUpdateWithoutPomoroundsInput>
  }

  export type UserUpdateOneRequiredWithoutPomoroundsNestedInput = {
    create?: XOR<UserCreateWithoutPomoroundsInput, UserUncheckedCreateWithoutPomoroundsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPomoroundsInput
    upsert?: UserUpsertWithoutPomoroundsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPomoroundsInput, UserUpdateWithoutPomoroundsInput>, UserUncheckedUpdateWithoutPomoroundsInput>
  }

  export type TaskLabelCreateNestedManyWithoutLabelInput = {
    create?: XOR<TaskLabelCreateWithoutLabelInput, TaskLabelUncheckedCreateWithoutLabelInput> | TaskLabelCreateWithoutLabelInput[] | TaskLabelUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: TaskLabelCreateOrConnectWithoutLabelInput | TaskLabelCreateOrConnectWithoutLabelInput[]
    createMany?: TaskLabelCreateManyLabelInputEnvelope
    connect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
  }

  export type TaskLabelUncheckedCreateNestedManyWithoutLabelInput = {
    create?: XOR<TaskLabelCreateWithoutLabelInput, TaskLabelUncheckedCreateWithoutLabelInput> | TaskLabelCreateWithoutLabelInput[] | TaskLabelUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: TaskLabelCreateOrConnectWithoutLabelInput | TaskLabelCreateOrConnectWithoutLabelInput[]
    createMany?: TaskLabelCreateManyLabelInputEnvelope
    connect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
  }

  export type TaskLabelUpdateManyWithoutLabelNestedInput = {
    create?: XOR<TaskLabelCreateWithoutLabelInput, TaskLabelUncheckedCreateWithoutLabelInput> | TaskLabelCreateWithoutLabelInput[] | TaskLabelUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: TaskLabelCreateOrConnectWithoutLabelInput | TaskLabelCreateOrConnectWithoutLabelInput[]
    upsert?: TaskLabelUpsertWithWhereUniqueWithoutLabelInput | TaskLabelUpsertWithWhereUniqueWithoutLabelInput[]
    createMany?: TaskLabelCreateManyLabelInputEnvelope
    set?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    disconnect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    delete?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    connect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    update?: TaskLabelUpdateWithWhereUniqueWithoutLabelInput | TaskLabelUpdateWithWhereUniqueWithoutLabelInput[]
    updateMany?: TaskLabelUpdateManyWithWhereWithoutLabelInput | TaskLabelUpdateManyWithWhereWithoutLabelInput[]
    deleteMany?: TaskLabelScalarWhereInput | TaskLabelScalarWhereInput[]
  }

  export type TaskLabelUncheckedUpdateManyWithoutLabelNestedInput = {
    create?: XOR<TaskLabelCreateWithoutLabelInput, TaskLabelUncheckedCreateWithoutLabelInput> | TaskLabelCreateWithoutLabelInput[] | TaskLabelUncheckedCreateWithoutLabelInput[]
    connectOrCreate?: TaskLabelCreateOrConnectWithoutLabelInput | TaskLabelCreateOrConnectWithoutLabelInput[]
    upsert?: TaskLabelUpsertWithWhereUniqueWithoutLabelInput | TaskLabelUpsertWithWhereUniqueWithoutLabelInput[]
    createMany?: TaskLabelCreateManyLabelInputEnvelope
    set?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    disconnect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    delete?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    connect?: TaskLabelWhereUniqueInput | TaskLabelWhereUniqueInput[]
    update?: TaskLabelUpdateWithWhereUniqueWithoutLabelInput | TaskLabelUpdateWithWhereUniqueWithoutLabelInput[]
    updateMany?: TaskLabelUpdateManyWithWhereWithoutLabelInput | TaskLabelUpdateManyWithWhereWithoutLabelInput[]
    deleteMany?: TaskLabelScalarWhereInput | TaskLabelScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutTaskLabelsInput = {
    create?: XOR<TaskCreateWithoutTaskLabelsInput, TaskUncheckedCreateWithoutTaskLabelsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskLabelsInput
    connect?: TaskWhereUniqueInput
  }

  export type LabelCreateNestedOneWithoutTaskLabelsInput = {
    create?: XOR<LabelCreateWithoutTaskLabelsInput, LabelUncheckedCreateWithoutTaskLabelsInput>
    connectOrCreate?: LabelCreateOrConnectWithoutTaskLabelsInput
    connect?: LabelWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutTaskLabelsNestedInput = {
    create?: XOR<TaskCreateWithoutTaskLabelsInput, TaskUncheckedCreateWithoutTaskLabelsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutTaskLabelsInput
    upsert?: TaskUpsertWithoutTaskLabelsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutTaskLabelsInput, TaskUpdateWithoutTaskLabelsInput>, TaskUncheckedUpdateWithoutTaskLabelsInput>
  }

  export type LabelUpdateOneRequiredWithoutTaskLabelsNestedInput = {
    create?: XOR<LabelCreateWithoutTaskLabelsInput, LabelUncheckedCreateWithoutTaskLabelsInput>
    connectOrCreate?: LabelCreateOrConnectWithoutTaskLabelsInput
    upsert?: LabelUpsertWithoutTaskLabelsInput
    connect?: LabelWhereUniqueInput
    update?: XOR<XOR<LabelUpdateToOneWithWhereWithoutTaskLabelsInput, LabelUpdateWithoutTaskLabelsInput>, LabelUncheckedUpdateWithoutTaskLabelsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
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

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskPriority[] | ListEnumTaskPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TaskPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAttachmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | EnumAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttachmentType[] | ListEnumAttachmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttachmentType[] | ListEnumAttachmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttachmentTypeFilter<$PrismaModel> | $Enums.AttachmentType
  }

  export type NestedEnumAttachmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttachmentType | EnumAttachmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttachmentType[] | ListEnumAttachmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttachmentType[] | ListEnumAttachmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttachmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttachmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttachmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAttachmentTypeFilter<$PrismaModel>
  }

  export type TaskCreateWithoutCreatedByInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    subTasks?: SubTaskCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsCreateNestedManyWithoutTaskInput
    project: ProjectCreateNestedOneWithoutTasksInput
    taskLabels?: TaskLabelCreateNestedManyWithoutTaskInput
    column: ColumnCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
    subTasks?: SubTaskUncheckedCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutTaskInput
    taskLabels?: TaskLabelUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskCreateManyCreatedByInputEnvelope = {
    data: TaskCreateManyCreatedByInput | TaskCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutAssignedToInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    subTasks?: SubTaskCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsCreateNestedManyWithoutTaskInput
    project: ProjectCreateNestedOneWithoutTasksInput
    taskLabels?: TaskLabelCreateNestedManyWithoutTaskInput
    column: ColumnCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssignedToInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
    subTasks?: SubTaskUncheckedCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutTaskInput
    taskLabels?: TaskLabelUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskCreateManyAssignedToInputEnvelope = {
    data: TaskCreateManyAssignedToInput | TaskCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOwnerInput = {
    name: string
    description: string
    type: $Enums.ProjectType
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    description: string
    type: $Enums.ProjectType
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutCreatedByInput = {
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutCreatedByInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    taskId: number
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutCreatedByInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCreatedByInput, CommentUncheckedCreateWithoutCreatedByInput>
  }

  export type CommentCreateManyCreatedByInputEnvelope = {
    data: CommentCreateManyCreatedByInput | CommentCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type PomoroundsCreateWithoutUserInput = {
    rounds: number
    longBreaks: number
    shortBreaks: number
    updatedAt?: Date | string
    task: TaskCreateNestedOneWithoutPomoroundsInput
  }

  export type PomoroundsUncheckedCreateWithoutUserInput = {
    id?: number
    rounds: number
    longBreaks: number
    shortBreaks: number
    taskId: number
    updatedAt?: Date | string
  }

  export type PomoroundsCreateOrConnectWithoutUserInput = {
    where: PomoroundsWhereUniqueInput
    create: XOR<PomoroundsCreateWithoutUserInput, PomoroundsUncheckedCreateWithoutUserInput>
  }

  export type PomoroundsCreateManyUserInputEnvelope = {
    data: PomoroundsCreateManyUserInput | PomoroundsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
    create: XOR<TaskCreateWithoutCreatedByInput, TaskUncheckedCreateWithoutCreatedByInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCreatedByInput, TaskUncheckedUpdateWithoutCreatedByInput>
  }

  export type TaskUpdateManyWithWhereWithoutCreatedByInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    priority?: EnumTaskPriorityFilter<"Task"> | $Enums.TaskPriority
    order?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    createdById?: IntFilter<"Task"> | number
    assignedToId?: IntFilter<"Task"> | number
    projectId?: IntFilter<"Task"> | number
    columnId?: IntFilter<"Task"> | number
    updatedAt?: DateTimeFilter<"Task"> | Date | string
  }

  export type TaskUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
    create: XOR<TaskCreateWithoutAssignedToInput, TaskUncheckedCreateWithoutAssignedToInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssignedToInput, TaskUncheckedUpdateWithoutAssignedToInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssignedToInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    type?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    ownerId?: IntFilter<"Project"> | number
  }

  export type CommentUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutCreatedByInput, CommentUncheckedUpdateWithoutCreatedByInput>
    create: XOR<CommentCreateWithoutCreatedByInput, CommentUncheckedCreateWithoutCreatedByInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutCreatedByInput, CommentUncheckedUpdateWithoutCreatedByInput>
  }

  export type CommentUpdateManyWithWhereWithoutCreatedByInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: JsonFilter<"Comment">
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    createdById?: IntFilter<"Comment"> | number
    taskId?: IntFilter<"Comment"> | number
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type PomoroundsUpsertWithWhereUniqueWithoutUserInput = {
    where: PomoroundsWhereUniqueInput
    update: XOR<PomoroundsUpdateWithoutUserInput, PomoroundsUncheckedUpdateWithoutUserInput>
    create: XOR<PomoroundsCreateWithoutUserInput, PomoroundsUncheckedCreateWithoutUserInput>
  }

  export type PomoroundsUpdateWithWhereUniqueWithoutUserInput = {
    where: PomoroundsWhereUniqueInput
    data: XOR<PomoroundsUpdateWithoutUserInput, PomoroundsUncheckedUpdateWithoutUserInput>
  }

  export type PomoroundsUpdateManyWithWhereWithoutUserInput = {
    where: PomoroundsScalarWhereInput
    data: XOR<PomoroundsUpdateManyMutationInput, PomoroundsUncheckedUpdateManyWithoutUserInput>
  }

  export type PomoroundsScalarWhereInput = {
    AND?: PomoroundsScalarWhereInput | PomoroundsScalarWhereInput[]
    OR?: PomoroundsScalarWhereInput[]
    NOT?: PomoroundsScalarWhereInput | PomoroundsScalarWhereInput[]
    id?: IntFilter<"Pomorounds"> | number
    rounds?: IntFilter<"Pomorounds"> | number
    longBreaks?: IntFilter<"Pomorounds"> | number
    shortBreaks?: IntFilter<"Pomorounds"> | number
    userId?: IntFilter<"Pomorounds"> | number
    taskId?: IntFilter<"Pomorounds"> | number
    updatedAt?: DateTimeFilter<"Pomorounds"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    comments?: CommentCreateNestedManyWithoutCreatedByInput
    pomorounds?: PomoroundsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatedByInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type TaskCreateWithoutProjectInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    subTasks?: SubTaskCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsCreateNestedManyWithoutTaskInput
    taskLabels?: TaskLabelCreateNestedManyWithoutTaskInput
    column: ColumnCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    columnId: number
    updatedAt?: Date | string
    subTasks?: SubTaskUncheckedCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutTaskInput
    taskLabels?: TaskLabelUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUpdateManyWithoutCreatedByNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatedByNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type TaskCreateWithoutColumnInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    subTasks?: SubTaskCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsCreateNestedManyWithoutTaskInput
    project: ProjectCreateNestedOneWithoutTasksInput
    taskLabels?: TaskLabelCreateNestedManyWithoutTaskInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutColumnInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    projectId: number
    updatedAt?: Date | string
    subTasks?: SubTaskUncheckedCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutTaskInput
    taskLabels?: TaskLabelUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutColumnInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput>
  }

  export type TaskCreateManyColumnInputEnvelope = {
    data: TaskCreateManyColumnInput | TaskCreateManyColumnInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutColumnInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutColumnInput, TaskUncheckedUpdateWithoutColumnInput>
    create: XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutColumnInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutColumnInput, TaskUncheckedUpdateWithoutColumnInput>
  }

  export type TaskUpdateManyWithWhereWithoutColumnInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutColumnInput>
  }

  export type UserCreateWithoutCreatedTasksInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutCreatedByInput
    pomorounds?: PomoroundsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedTasksInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatedByInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
  }

  export type UserCreateWithoutAssignedTasksInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutCreatedByInput
    pomorounds?: PomoroundsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedTasksInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatedByInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
  }

  export type SubTaskCreateWithoutTaskInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubTaskUncheckedCreateWithoutTaskInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubTaskCreateOrConnectWithoutTaskInput = {
    where: SubTaskWhereUniqueInput
    create: XOR<SubTaskCreateWithoutTaskInput, SubTaskUncheckedCreateWithoutTaskInput>
  }

  export type SubTaskCreateManyTaskInputEnvelope = {
    data: SubTaskCreateManyTaskInput | SubTaskCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type PomoroundsCreateWithoutTaskInput = {
    rounds: number
    longBreaks: number
    shortBreaks: number
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPomoroundsInput
  }

  export type PomoroundsUncheckedCreateWithoutTaskInput = {
    id?: number
    rounds: number
    longBreaks: number
    shortBreaks: number
    userId: number
    updatedAt?: Date | string
  }

  export type PomoroundsCreateOrConnectWithoutTaskInput = {
    where: PomoroundsWhereUniqueInput
    create: XOR<PomoroundsCreateWithoutTaskInput, PomoroundsUncheckedCreateWithoutTaskInput>
  }

  export type PomoroundsCreateManyTaskInputEnvelope = {
    data: PomoroundsCreateManyTaskInput | PomoroundsCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutTasksInput = {
    name: string
    description: string
    type: $Enums.ProjectType
    owner: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    description: string
    type: $Enums.ProjectType
    ownerId: number
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type TaskLabelCreateWithoutTaskInput = {
    label: LabelCreateNestedOneWithoutTaskLabelsInput
  }

  export type TaskLabelUncheckedCreateWithoutTaskInput = {
    id?: number
    labelId: number
  }

  export type TaskLabelCreateOrConnectWithoutTaskInput = {
    where: TaskLabelWhereUniqueInput
    create: XOR<TaskLabelCreateWithoutTaskInput, TaskLabelUncheckedCreateWithoutTaskInput>
  }

  export type TaskLabelCreateManyTaskInputEnvelope = {
    data: TaskLabelCreateManyTaskInput | TaskLabelCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type ColumnCreateWithoutTasksInput = {
    name: string
    isDone?: boolean
  }

  export type ColumnUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    isDone?: boolean
  }

  export type ColumnCreateOrConnectWithoutTasksInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutTasksInput, ColumnUncheckedCreateWithoutTasksInput>
  }

  export type CommentCreateWithoutTaskInput = {
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutTaskInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdById: number
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutTaskInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentCreateManyTaskInputEnvelope = {
    data: CommentCreateManyTaskInput | CommentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskAttachmentCreateWithoutTaskInput = {
    type: $Enums.AttachmentType
    link: string
  }

  export type TaskAttachmentUncheckedCreateWithoutTaskInput = {
    id?: number
    type: $Enums.AttachmentType
    link: string
  }

  export type TaskAttachmentCreateOrConnectWithoutTaskInput = {
    where: TaskAttachmentWhereUniqueInput
    create: XOR<TaskAttachmentCreateWithoutTaskInput, TaskAttachmentUncheckedCreateWithoutTaskInput>
  }

  export type TaskAttachmentCreateManyTaskInputEnvelope = {
    data: TaskAttachmentCreateManyTaskInput | TaskAttachmentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedTasksInput = {
    update: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
    create: XOR<UserCreateWithoutCreatedTasksInput, UserUncheckedCreateWithoutCreatedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTasksInput, UserUncheckedUpdateWithoutCreatedTasksInput>
  }

  export type UserUpdateWithoutCreatedTasksInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutCreatedByNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatedByNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutAssignedTasksInput = {
    update: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
    create: XOR<UserCreateWithoutAssignedTasksInput, UserUncheckedCreateWithoutAssignedTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedTasksInput, UserUncheckedUpdateWithoutAssignedTasksInput>
  }

  export type UserUpdateWithoutAssignedTasksInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutCreatedByNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatedByNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubTaskUpsertWithWhereUniqueWithoutTaskInput = {
    where: SubTaskWhereUniqueInput
    update: XOR<SubTaskUpdateWithoutTaskInput, SubTaskUncheckedUpdateWithoutTaskInput>
    create: XOR<SubTaskCreateWithoutTaskInput, SubTaskUncheckedCreateWithoutTaskInput>
  }

  export type SubTaskUpdateWithWhereUniqueWithoutTaskInput = {
    where: SubTaskWhereUniqueInput
    data: XOR<SubTaskUpdateWithoutTaskInput, SubTaskUncheckedUpdateWithoutTaskInput>
  }

  export type SubTaskUpdateManyWithWhereWithoutTaskInput = {
    where: SubTaskScalarWhereInput
    data: XOR<SubTaskUpdateManyMutationInput, SubTaskUncheckedUpdateManyWithoutTaskInput>
  }

  export type SubTaskScalarWhereInput = {
    AND?: SubTaskScalarWhereInput | SubTaskScalarWhereInput[]
    OR?: SubTaskScalarWhereInput[]
    NOT?: SubTaskScalarWhereInput | SubTaskScalarWhereInput[]
    id?: IntFilter<"SubTask"> | number
    title?: StringFilter<"SubTask"> | string
    description?: StringFilter<"SubTask"> | string
    priority?: EnumTaskPriorityFilter<"SubTask"> | $Enums.TaskPriority
    createdAt?: DateTimeFilter<"SubTask"> | Date | string
    taskId?: IntFilter<"SubTask"> | number
    updatedAt?: DateTimeFilter<"SubTask"> | Date | string
  }

  export type PomoroundsUpsertWithWhereUniqueWithoutTaskInput = {
    where: PomoroundsWhereUniqueInput
    update: XOR<PomoroundsUpdateWithoutTaskInput, PomoroundsUncheckedUpdateWithoutTaskInput>
    create: XOR<PomoroundsCreateWithoutTaskInput, PomoroundsUncheckedCreateWithoutTaskInput>
  }

  export type PomoroundsUpdateWithWhereUniqueWithoutTaskInput = {
    where: PomoroundsWhereUniqueInput
    data: XOR<PomoroundsUpdateWithoutTaskInput, PomoroundsUncheckedUpdateWithoutTaskInput>
  }

  export type PomoroundsUpdateManyWithWhereWithoutTaskInput = {
    where: PomoroundsScalarWhereInput
    data: XOR<PomoroundsUpdateManyMutationInput, PomoroundsUncheckedUpdateManyWithoutTaskInput>
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    ownerId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskLabelUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskLabelWhereUniqueInput
    update: XOR<TaskLabelUpdateWithoutTaskInput, TaskLabelUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskLabelCreateWithoutTaskInput, TaskLabelUncheckedCreateWithoutTaskInput>
  }

  export type TaskLabelUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskLabelWhereUniqueInput
    data: XOR<TaskLabelUpdateWithoutTaskInput, TaskLabelUncheckedUpdateWithoutTaskInput>
  }

  export type TaskLabelUpdateManyWithWhereWithoutTaskInput = {
    where: TaskLabelScalarWhereInput
    data: XOR<TaskLabelUpdateManyMutationInput, TaskLabelUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskLabelScalarWhereInput = {
    AND?: TaskLabelScalarWhereInput | TaskLabelScalarWhereInput[]
    OR?: TaskLabelScalarWhereInput[]
    NOT?: TaskLabelScalarWhereInput | TaskLabelScalarWhereInput[]
    id?: IntFilter<"TaskLabel"> | number
    taskId?: IntFilter<"TaskLabel"> | number
    labelId?: IntFilter<"TaskLabel"> | number
  }

  export type ColumnUpsertWithoutTasksInput = {
    update: XOR<ColumnUpdateWithoutTasksInput, ColumnUncheckedUpdateWithoutTasksInput>
    create: XOR<ColumnCreateWithoutTasksInput, ColumnUncheckedCreateWithoutTasksInput>
    where?: ColumnWhereInput
  }

  export type ColumnUpdateToOneWithWhereWithoutTasksInput = {
    where?: ColumnWhereInput
    data: XOR<ColumnUpdateWithoutTasksInput, ColumnUncheckedUpdateWithoutTasksInput>
  }

  export type ColumnUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColumnUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isDone?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
  }

  export type CommentUpdateManyWithWhereWithoutTaskInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskAttachmentUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskAttachmentWhereUniqueInput
    update: XOR<TaskAttachmentUpdateWithoutTaskInput, TaskAttachmentUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskAttachmentCreateWithoutTaskInput, TaskAttachmentUncheckedCreateWithoutTaskInput>
  }

  export type TaskAttachmentUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskAttachmentWhereUniqueInput
    data: XOR<TaskAttachmentUpdateWithoutTaskInput, TaskAttachmentUncheckedUpdateWithoutTaskInput>
  }

  export type TaskAttachmentUpdateManyWithWhereWithoutTaskInput = {
    where: TaskAttachmentScalarWhereInput
    data: XOR<TaskAttachmentUpdateManyMutationInput, TaskAttachmentUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskAttachmentScalarWhereInput = {
    AND?: TaskAttachmentScalarWhereInput | TaskAttachmentScalarWhereInput[]
    OR?: TaskAttachmentScalarWhereInput[]
    NOT?: TaskAttachmentScalarWhereInput | TaskAttachmentScalarWhereInput[]
    id?: IntFilter<"TaskAttachment"> | number
    type?: EnumAttachmentTypeFilter<"TaskAttachment"> | $Enums.AttachmentType
    link?: StringFilter<"TaskAttachment"> | string
    taskId?: IntFilter<"TaskAttachment"> | number
  }

  export type TaskCreateWithoutSubTasksInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    pomorounds?: PomoroundsCreateNestedManyWithoutTaskInput
    project: ProjectCreateNestedOneWithoutTasksInput
    taskLabels?: TaskLabelCreateNestedManyWithoutTaskInput
    column: ColumnCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubTasksInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutTaskInput
    taskLabels?: TaskLabelUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubTasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
  }

  export type TaskUpsertWithoutSubTasksInput = {
    update: XOR<TaskUpdateWithoutSubTasksInput, TaskUncheckedUpdateWithoutSubTasksInput>
    create: XOR<TaskCreateWithoutSubTasksInput, TaskUncheckedCreateWithoutSubTasksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubTasksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubTasksInput, TaskUncheckedUpdateWithoutSubTasksInput>
  }

  export type TaskUpdateWithoutSubTasksInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutTaskNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    taskLabels?: TaskLabelUpdateManyWithoutTaskNestedInput
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutTaskNestedInput
    taskLabels?: TaskLabelUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    pomorounds?: PomoroundsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type TaskCreateWithoutCommentsInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    subTasks?: SubTaskCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsCreateNestedManyWithoutTaskInput
    project: ProjectCreateNestedOneWithoutTasksInput
    taskLabels?: TaskLabelCreateNestedManyWithoutTaskInput
    column: ColumnCreateNestedOneWithoutTasksInput
    attachments?: TaskAttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
    subTasks?: SubTaskUncheckedCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutTaskInput
    taskLabels?: TaskLabelUncheckedCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCommentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithoutCommentsInput = {
    update: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    subTasks?: SubTaskUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutTaskNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    taskLabels?: TaskLabelUpdateManyWithoutTaskNestedInput
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
    attachments?: TaskAttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTasks?: SubTaskUncheckedUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutTaskNestedInput
    taskLabels?: TaskLabelUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateWithoutAttachmentsInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    subTasks?: SubTaskCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsCreateNestedManyWithoutTaskInput
    project: ProjectCreateNestedOneWithoutTasksInput
    taskLabels?: TaskLabelCreateNestedManyWithoutTaskInput
    column: ColumnCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
    subTasks?: SubTaskUncheckedCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutTaskInput
    taskLabels?: TaskLabelUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAttachmentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
  }

  export type TaskUpsertWithoutAttachmentsInput = {
    update: XOR<TaskUpdateWithoutAttachmentsInput, TaskUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<TaskCreateWithoutAttachmentsInput, TaskUncheckedCreateWithoutAttachmentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutAttachmentsInput, TaskUncheckedUpdateWithoutAttachmentsInput>
  }

  export type TaskUpdateWithoutAttachmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    subTasks?: SubTaskUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutTaskNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    taskLabels?: TaskLabelUpdateManyWithoutTaskNestedInput
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTasks?: SubTaskUncheckedUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutTaskNestedInput
    taskLabels?: TaskLabelUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateWithoutPomoroundsInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    subTasks?: SubTaskCreateNestedManyWithoutTaskInput
    project: ProjectCreateNestedOneWithoutTasksInput
    taskLabels?: TaskLabelCreateNestedManyWithoutTaskInput
    column: ColumnCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutPomoroundsInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
    subTasks?: SubTaskUncheckedCreateNestedManyWithoutTaskInput
    taskLabels?: TaskLabelUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutPomoroundsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutPomoroundsInput, TaskUncheckedCreateWithoutPomoroundsInput>
  }

  export type UserCreateWithoutPomoroundsInput = {
    firstname: string
    lastname: string
    email: string
    password: string
    createdTasks?: TaskCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskCreateNestedManyWithoutAssignedToInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    comments?: CommentCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutPomoroundsInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    password: string
    createdTasks?: TaskUncheckedCreateNestedManyWithoutCreatedByInput
    assignedTasks?: TaskUncheckedCreateNestedManyWithoutAssignedToInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    comments?: CommentUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutPomoroundsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPomoroundsInput, UserUncheckedCreateWithoutPomoroundsInput>
  }

  export type TaskUpsertWithoutPomoroundsInput = {
    update: XOR<TaskUpdateWithoutPomoroundsInput, TaskUncheckedUpdateWithoutPomoroundsInput>
    create: XOR<TaskCreateWithoutPomoroundsInput, TaskUncheckedCreateWithoutPomoroundsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutPomoroundsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutPomoroundsInput, TaskUncheckedUpdateWithoutPomoroundsInput>
  }

  export type TaskUpdateWithoutPomoroundsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    subTasks?: SubTaskUpdateManyWithoutTaskNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    taskLabels?: TaskLabelUpdateManyWithoutTaskNestedInput
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutPomoroundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTasks?: SubTaskUncheckedUpdateManyWithoutTaskNestedInput
    taskLabels?: TaskLabelUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutPomoroundsInput = {
    update: XOR<UserUpdateWithoutPomoroundsInput, UserUncheckedUpdateWithoutPomoroundsInput>
    create: XOR<UserCreateWithoutPomoroundsInput, UserUncheckedCreateWithoutPomoroundsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPomoroundsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPomoroundsInput, UserUncheckedUpdateWithoutPomoroundsInput>
  }

  export type UserUpdateWithoutPomoroundsInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdTasks?: TaskUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUpdateManyWithoutAssignedToNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    comments?: CommentUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPomoroundsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdTasks?: TaskUncheckedUpdateManyWithoutCreatedByNestedInput
    assignedTasks?: TaskUncheckedUpdateManyWithoutAssignedToNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    comments?: CommentUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type TaskLabelCreateWithoutLabelInput = {
    task: TaskCreateNestedOneWithoutTaskLabelsInput
  }

  export type TaskLabelUncheckedCreateWithoutLabelInput = {
    id?: number
    taskId: number
  }

  export type TaskLabelCreateOrConnectWithoutLabelInput = {
    where: TaskLabelWhereUniqueInput
    create: XOR<TaskLabelCreateWithoutLabelInput, TaskLabelUncheckedCreateWithoutLabelInput>
  }

  export type TaskLabelCreateManyLabelInputEnvelope = {
    data: TaskLabelCreateManyLabelInput | TaskLabelCreateManyLabelInput[]
    skipDuplicates?: boolean
  }

  export type TaskLabelUpsertWithWhereUniqueWithoutLabelInput = {
    where: TaskLabelWhereUniqueInput
    update: XOR<TaskLabelUpdateWithoutLabelInput, TaskLabelUncheckedUpdateWithoutLabelInput>
    create: XOR<TaskLabelCreateWithoutLabelInput, TaskLabelUncheckedCreateWithoutLabelInput>
  }

  export type TaskLabelUpdateWithWhereUniqueWithoutLabelInput = {
    where: TaskLabelWhereUniqueInput
    data: XOR<TaskLabelUpdateWithoutLabelInput, TaskLabelUncheckedUpdateWithoutLabelInput>
  }

  export type TaskLabelUpdateManyWithWhereWithoutLabelInput = {
    where: TaskLabelScalarWhereInput
    data: XOR<TaskLabelUpdateManyMutationInput, TaskLabelUncheckedUpdateManyWithoutLabelInput>
  }

  export type TaskCreateWithoutTaskLabelsInput = {
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedTasksInput
    assignedTo: UserCreateNestedOneWithoutAssignedTasksInput
    subTasks?: SubTaskCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsCreateNestedManyWithoutTaskInput
    project: ProjectCreateNestedOneWithoutTasksInput
    column: ColumnCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTaskLabelsInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
    subTasks?: SubTaskUncheckedCreateNestedManyWithoutTaskInput
    pomorounds?: PomoroundsUncheckedCreateNestedManyWithoutTaskInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    attachments?: TaskAttachmentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTaskLabelsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTaskLabelsInput, TaskUncheckedCreateWithoutTaskLabelsInput>
  }

  export type LabelCreateWithoutTaskLabelsInput = {
    name: string
  }

  export type LabelUncheckedCreateWithoutTaskLabelsInput = {
    id?: number
    name: string
  }

  export type LabelCreateOrConnectWithoutTaskLabelsInput = {
    where: LabelWhereUniqueInput
    create: XOR<LabelCreateWithoutTaskLabelsInput, LabelUncheckedCreateWithoutTaskLabelsInput>
  }

  export type TaskUpsertWithoutTaskLabelsInput = {
    update: XOR<TaskUpdateWithoutTaskLabelsInput, TaskUncheckedUpdateWithoutTaskLabelsInput>
    create: XOR<TaskCreateWithoutTaskLabelsInput, TaskUncheckedCreateWithoutTaskLabelsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutTaskLabelsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutTaskLabelsInput, TaskUncheckedUpdateWithoutTaskLabelsInput>
  }

  export type TaskUpdateWithoutTaskLabelsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    subTasks?: SubTaskUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutTaskNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTaskLabelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTasks?: SubTaskUncheckedUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type LabelUpsertWithoutTaskLabelsInput = {
    update: XOR<LabelUpdateWithoutTaskLabelsInput, LabelUncheckedUpdateWithoutTaskLabelsInput>
    create: XOR<LabelCreateWithoutTaskLabelsInput, LabelUncheckedCreateWithoutTaskLabelsInput>
    where?: LabelWhereInput
  }

  export type LabelUpdateToOneWithWhereWithoutTaskLabelsInput = {
    where?: LabelWhereInput
    data: XOR<LabelUpdateWithoutTaskLabelsInput, LabelUncheckedUpdateWithoutTaskLabelsInput>
  }

  export type LabelUpdateWithoutTaskLabelsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LabelUncheckedUpdateWithoutTaskLabelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyCreatedByInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    assignedToId: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
  }

  export type TaskCreateManyAssignedToInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    projectId: number
    columnId: number
    updatedAt?: Date | string
  }

  export type ProjectCreateManyOwnerInput = {
    id?: number
    name: string
    description: string
    type: $Enums.ProjectType
  }

  export type CommentCreateManyCreatedByInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    taskId: number
    updatedAt?: Date | string
  }

  export type PomoroundsCreateManyUserInput = {
    id?: number
    rounds: number
    longBreaks: number
    shortBreaks: number
    taskId: number
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    subTasks?: SubTaskUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutTaskNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    taskLabels?: TaskLabelUpdateManyWithoutTaskNestedInput
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTasks?: SubTaskUncheckedUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutTaskNestedInput
    taskLabels?: TaskLabelUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUpdateWithoutAssignedToInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    subTasks?: SubTaskUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutTaskNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    taskLabels?: TaskLabelUpdateManyWithoutTaskNestedInput
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTasks?: SubTaskUncheckedUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutTaskNestedInput
    taskLabels?: TaskLabelUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutAssignedToInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
  }

  export type CommentUpdateWithoutCreatedByInput = {
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PomoroundsUpdateWithoutUserInput = {
    rounds?: IntFieldUpdateOperationsInput | number
    longBreaks?: IntFieldUpdateOperationsInput | number
    shortBreaks?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutPomoroundsNestedInput
  }

  export type PomoroundsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    longBreaks?: IntFieldUpdateOperationsInput | number
    shortBreaks?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PomoroundsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    longBreaks?: IntFieldUpdateOperationsInput | number
    shortBreaks?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyProjectInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    columnId: number
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    subTasks?: SubTaskUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutTaskNestedInput
    taskLabels?: TaskLabelUpdateManyWithoutTaskNestedInput
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTasks?: SubTaskUncheckedUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutTaskNestedInput
    taskLabels?: TaskLabelUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyColumnInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    order?: number
    createdAt?: Date | string
    createdById: number
    assignedToId: number
    projectId: number
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutColumnInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedTasksNestedInput
    assignedTo?: UserUpdateOneRequiredWithoutAssignedTasksNestedInput
    subTasks?: SubTaskUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUpdateManyWithoutTaskNestedInput
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    taskLabels?: TaskLabelUpdateManyWithoutTaskNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subTasks?: SubTaskUncheckedUpdateManyWithoutTaskNestedInput
    pomorounds?: PomoroundsUncheckedUpdateManyWithoutTaskNestedInput
    taskLabels?: TaskLabelUncheckedUpdateManyWithoutTaskNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    attachments?: TaskAttachmentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    assignedToId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubTaskCreateManyTaskInput = {
    id?: number
    title: string
    description: string
    priority: $Enums.TaskPriority
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PomoroundsCreateManyTaskInput = {
    id?: number
    rounds: number
    longBreaks: number
    shortBreaks: number
    userId: number
    updatedAt?: Date | string
  }

  export type TaskLabelCreateManyTaskInput = {
    id?: number
    labelId: number
  }

  export type CommentCreateManyTaskInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdById: number
    updatedAt?: Date | string
  }

  export type TaskAttachmentCreateManyTaskInput = {
    id?: number
    type: $Enums.AttachmentType
    link: string
  }

  export type SubTaskUpdateWithoutTaskInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubTaskUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubTaskUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PomoroundsUpdateWithoutTaskInput = {
    rounds?: IntFieldUpdateOperationsInput | number
    longBreaks?: IntFieldUpdateOperationsInput | number
    shortBreaks?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPomoroundsNestedInput
  }

  export type PomoroundsUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    longBreaks?: IntFieldUpdateOperationsInput | number
    shortBreaks?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PomoroundsUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    rounds?: IntFieldUpdateOperationsInput | number
    longBreaks?: IntFieldUpdateOperationsInput | number
    shortBreaks?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskLabelUpdateWithoutTaskInput = {
    label?: LabelUpdateOneRequiredWithoutTaskLabelsNestedInput
  }

  export type TaskLabelUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskLabelUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    labelId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpdateWithoutTaskInput = {
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskAttachmentUpdateWithoutTaskInput = {
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    link?: StringFieldUpdateOperationsInput | string
  }

  export type TaskAttachmentUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    link?: StringFieldUpdateOperationsInput | string
  }

  export type TaskAttachmentUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAttachmentTypeFieldUpdateOperationsInput | $Enums.AttachmentType
    link?: StringFieldUpdateOperationsInput | string
  }

  export type TaskLabelCreateManyLabelInput = {
    id?: number
    taskId: number
  }

  export type TaskLabelUpdateWithoutLabelInput = {
    task?: TaskUpdateOneRequiredWithoutTaskLabelsNestedInput
  }

  export type TaskLabelUncheckedUpdateWithoutLabelInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskLabelUncheckedUpdateManyWithoutLabelInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
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