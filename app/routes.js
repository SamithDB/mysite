// app/routes.js

	module.exports = function(app) {


	// =====================================
	// HOME PAGE ========
	// =====================================
	app.get('/', function(req, res) {
		
			res.render('index.ejs'); // load the index.ejs file	
		
	});	

	// =====================================
	// HOME PAGE ========
	// =====================================
	app.get('/about', function(req, res) {
		
			res.render('about.ejs'); // load the index.ejs file	
		
	});	

	// =====================================
	// HOME PAGE ========
	// =====================================
	app.get('/work', function(req, res) {
		
			res.render('work.ejs'); // load the index.ejs file	
		
	});	


	
	}