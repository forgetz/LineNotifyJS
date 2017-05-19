var lineApi = require("line-api")

const notify = new lineApi.Notify({
    token: "7smvFTjlAP3XEtmFTigNPr9ndRZbOwBHH0A2iZi2beP"
})

module.exports = {
	message: function (text) {
		notify.send({
			message: text
		}).then(console.log)
	},
	sticker: function(text, stickername) {
		notify.send({
			message: text,
			sticker: stickername
		}).then(console.log)
	},
};
