/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
	if (k === points.length) return points;
	const dist = [];
	const res = [];

	for (const point of points) {
			const idx = point[0]**2 + point[1]**2;
			if (dist[idx]) dist[idx] = [...dist[idx], point];
			else dist[idx] = [point];
	}
	let i = 0;
	while (k > 0) {
			if (dist[i] && dist[i].length > 1) {
					console.log(dist[i]);
					for (const point of dist[i]) {
							res.push(point);
							k--;
					}
			} else if (dist[i]) {
					res.push(...dist[i]);
					k--;
			}
			i++;
	}

	return res;
};

console.log(kClosest([[1,3],[-2,2]], 1));