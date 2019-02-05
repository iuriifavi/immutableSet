function ImmutableSet(value, has) {
	if (value) {
		if (has)
			this.has = (val) => value === val || has(val);
		else
			this.has = (val) => value === val;
	} else {
		this.has = (val) => false;
	}

	this.add = function (val) { return new ImmutableSet(val, this.has) }
	this.remove = function (val) { return new ExplicitSet(val, this.has) }
}

function ExplicitSet(value, has) {
	this.has = (val) => val !== value && has(val);
	this.add = ImmutableSet.add;
	this.remove = ImmutableSet.remove;
}

let set = new ImmutableSet().add(9).add(10).add(11).remove(10);

console.log([5, 9, 10, 11, 12].map(x => x + '=' + set.has(x)).join(', '));