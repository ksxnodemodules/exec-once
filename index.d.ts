declare function once<Return> (fn: () => Return): () => Return
export = once
