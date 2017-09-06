function lupines(x) {
	if (x >= 10)
		return;
	lupines(x + 1)
}
lupines(15);
console.log(lupines());