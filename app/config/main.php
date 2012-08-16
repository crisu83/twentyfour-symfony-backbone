<?php

return CMap::mergeArray(array(
	'basePath'=>dirname(__FILE__).'/..',
	'runtimePath'=>dirname(__FILE__).'/../../runtime',
	'name'=>'Twentyfour',

	// preloading 'log' component
	'preload'=>array(
		'bootstrap',
		'less',
		'log',
	),

	// autoloading model and component classes
	'import'=>array(
		'application.models.ar.*',
		'application.models.forms.*',
		'application.components.*',
		'ext.bootstrap.widgets.*',
	),

	'modules'=>array(
	),

	// application components
	'components'=>array(
		'bootstrap'=>array(
			'class'=>'ext.bootstrap.components.Bootstrap',
			// we control assets manually
			'coreCss'=>false,
			'responsiveCss'=>false,
			'enableJS'=>false,
		),
		// uncomment the following to use a MySQL database
		/*
		'db'=>array(
			'connectionString' => 'mysql:host=localhost;dbname=testdrive',
			'emulatePrepare' => true,
			'username' => 'root',
			'password' => '',
			'charset' => 'utf8',
		),
		*/
		'errorHandler'=>array(
			'errorAction'=>'site/error',
		),
		'less'=>array(
			'class'=>'ext.less.components.LessCompiler',
			'paths'=>array(
				'less/styles.less'=>'css/styles.css',
			),
		),
		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute',
					'levels'=>'error, warning',
				),
				// uncomment the following to show log messages on web pages
				/*
				array(
					'class'=>'CWebLogRoute',
				),
				*/
			),
		),
		// uncomment the following to enable URLs in path-format
		'urlManager'=>array(
			//'showScriptName'=>false,
			//'urlFormat'=>'path',
			'rules'=>array(
				'<controller:\w+>/<id:\d+>'=>'<controller>/view',
				'<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
				'<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
			),
		),
		'user'=>array(
			'allowAutoLogin'=>true,
		),
	),

	'params'=>array(
		'adminEmail'=>'webmaster@example.com',
	),

), require(dirname(__FILE__).'/local.php'));
