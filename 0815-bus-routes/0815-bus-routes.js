/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
const intersect = (route1, route2) => {
	let i1 = 0,
		i2 = 0;

	while (i1 < route1.length && i2 < route2.length) {
		if (route1[i1] === route2[i2]) {
			return true;
		}
		if (route1[i1] < route2[i2]) {
			i1++;
		} else {
			i2++;
		}
	}

	return false;
};

const binarySearch = (route, stop) => {
	let l = 0,
		r = route.length - 1;

	while (l <= r) {
		const p = l + ((r - l) >>> 1);
        const mid = route[p];

		if (stop === mid) return true;
		if (stop > mid) l = p + 1;
		else r = p - 1;
	}

	return false;
};

/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function (routes, S, T) {
	if (S === T) return 0;

	const n = routes.length;

	const graph = new Array(n);
	for (let i = 0; i < n; i++) {
		graph[i] = [];
		routes[i].sort((a, b) => a - b);
	}

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (intersect(routes[i], routes[j])) {
				graph[i].push(j);
				graph[j].push(i);
			}
		}
	}

	const queue = [];
	const targets = new Set();
	const visited = new Set();

	for (let i = 0; i < n; i++) {
		if (binarySearch(routes[i], S)) {
			queue.push(i);
			visited.add(i);
		}
		if (binarySearch(routes[i], T)) {
			targets.add(i);
		}
	}

	let distance = 0;
	queue.push(null);

	while (queue.length > 0) {
		const bus = queue.shift();

		if (bus !== null) {
			if (targets.has(bus)) {
				return distance + 1;
			}

			for (const next of graph[bus]) {
				if (!visited.has(next)) {
					visited.add(next);
					queue.push(next);
				}
			}
		} else {
			distance++;
			if (queue.length > 0) {
				queue.push(null);
			}
		}
	}

	return -1;
};
