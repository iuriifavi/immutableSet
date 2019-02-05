'use strict';

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

exports.ImmutableSet = ImmutableSet;
exports.ExplicitSet = ExplicitSet;