// 複数を文字列を受け取って、一つの文字列に連結する型関数
type MergeStr<T, S extends string> = T extends string ? `${T} - ${S}` : never;

// 文字列型のタプルを連結する型関数（これを作り上げたい）
type ConnectToString<A extends string[], S extends string = ''> = A extends string[]
                                                                  ? A extends [infer F, ...infer R]
                                                                  // NOTE: この部分のinferのジェネリクスがstringやstring[]として認識されていない？
                                                                  ? ConnectToString<[...R], MergeStr<F, S>> : never
                                                                  : never

// 実際に文字列を連結させたい
type ConnectedStrings = ConnectToString<['a', 'b']>;

const t: ConnectedStrings = 'test'
// エラーになっているべき

const s: ConnectedStrings = 'a - b'
// 正常
