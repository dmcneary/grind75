/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length,
    n = mat[0].length;

  const getAllIndexes = (arr, val) => {
    const indexes = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        indexes.push(i);
      }
    }
    return indexes;
  };

  const dist1 = (i, j) => {
    mat[i][j] = Number.MAX_SAFE_INTEGER;
    if (i - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i - 1][j]);
    if (j - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j - 1]);
  };

  const dist2 = (i, j) => {
    if (i + 1 < m) mat[i][j] = Math.min(mat[i][j], 1 + mat[i + 1][j]);
    if (j + 1 < n) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j + 1]);
  };

  for (let i = 0; i < m; i++) {
    if (mat[i].includes(1)) {
      const indexes = getAllIndexes(mat[i], 1);
      for (const j of indexes) {
        dist1(i, j);
        dist2(i, j);
				console.log(mat);
      }
    }
  }

  return mat;
};

console.log(
  updateMatrix([
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
  ])
);
