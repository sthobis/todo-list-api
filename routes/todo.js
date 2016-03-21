var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var settings = require('./settings.js');
var pool = mysql.createPool({
	connectionLimit : 10,
	host	 : settings.host,
	user	 : settings.user,
	password : settings.password,
	database : settings.db
});

/*
 * TODO
 * Refactor into multiple routes and models.
 */

/*
 * TODOS
 */
router.route('/todos')

	.get(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'SELECT * FROM ??';
			var table = ['todos'];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	})

	.post(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'INSERT INTO ?? (name, project_id, project_name, assignee) VALUES (?, ?, ?, ?)';
			var table = ['todos', req.name, req.project_id, req.project_name, req.assignee];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	});

/*
 * SPECIFIC TODOS
 */
router.route('/todos/:todo_id')

	.get(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'SELECT * FROM ?? WHERE ?? = ?';
			var table = ['todos', 'todo_id', req.params.todo_id];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	})

	.put(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
			var table = ['todos', req.body.prop, req.body.prop_value, 'todo_id', req.params.todo_id];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	})

	.delete(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'DELETE * FROM ?? WHERE ?? = ?';
			var table = ['todos', 'todo_id', req.params.todo_id];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	});

/*
 * PROJECTS
 */
 router.route('/projects')

	.get(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'SELECT * FROM ??';
			var table = ['projects'];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	})

/*
 * SPECIFIC PROJECTS
 */
router.route('/projects/:project_id')

	.get(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'SELECT * FROM ?? WHERE ?? = ?';
			var table = ['projects', 'project_id', req.params.project_id];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	})

	.put(function(req, res) {
		pool.getConnection(function(err, connection) {

			// TODO
		});
	})

	.delete(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'DELETE * FROM ?? WHERE ?? = ?';
			var table = ['projects', 'project_id', req.params.project_id];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	});

/*
 * DEVELOPERS
 */
 router.route('/devs')

	.get(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'SELECT * FROM ??';
			var table = ['devs'];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	})

/*
 * SPECIFIC DEVELOPERS
 */
router.route('/devs/:dev_id')

	.get(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'SELECT * FROM ?? WHERE ?? = ?';
			var table = ['devs', 'dev_id', req.params.dev_id];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	})

	.put(function(req, res) {
		pool.getConnection(function(err, connection) {
			// TODO
		});
	})

	.delete(function(req, res) {
		pool.getConnection(function(err, connection) {

			var query = 'DELETE * FROM ?? WHERE ?? = ?';
			var table = ['devs', 'dev_id', req.params.dev_id];
			query = mysql.format(query,table);

			connection.query( query, function(err, rows) {
				connection.release();

				if(err) {
					res.json({'Error' : true, 'Message' : 'Error executing MySQL query'});
				} else {
					res.json({'Error' : false, 'Message' : 'Success', 'data' : rows});
				}
			});
		});
	});

module.exports = router;