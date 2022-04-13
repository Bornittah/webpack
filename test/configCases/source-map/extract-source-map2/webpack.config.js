/** @type {import("../../../../").Configuration} */
module.exports = {
	target: "node",
	entry: "./index",
	devtool: "source-map",
	module: {
		rules: [
			{
				parser: {
					extractSourceMap: true
				}
			}
		]
	}
};