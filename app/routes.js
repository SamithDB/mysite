// app/routes.js

	module.exports = function(app) {


	// =====================================
	// HOME PAGE ========
	// =====================================
	app.get('/', function(req, res) {
			console.log('Home')
			res.render('index.ejs'); // load the index.ejs file	
		
	});	

	// =====================================
	// HOME PAGE ========
	// =====================================
	app.get('/about', function(req, res) {
			console.log('About')
			res.render('about.ejs'); // load the index.ejs file	
		
	});	

	// =====================================
	// HOME PAGE ========
	// =====================================
	app.get('/work', function(req, res) {
			console.log('Work')
			res.render('work.ejs'); // load the index.ejs file	
		
	});	


	
	}