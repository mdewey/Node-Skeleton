 var config = require('./modules/config').keys;

module.exports = function (app) {
	// set routes
	app.get('/', function(req, res) {
		res.render('index',{
			Title:config.SiteTitle
		});
	});
}
