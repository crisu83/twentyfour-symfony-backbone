<?php

class m120816_004144_create_user_table extends CDbMigration
{
	public function up()
	{
		$this->createTable('user', array(
			'id' => 'int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY',
			'created' => 'timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated' => 'timestamp NULL DEFAULT NULL',
			'name' => 'varchar(255) NOT NULL',
			'password' => 'varchar(255) NOT NULL',
			'deleted' => 'tinyint(1) NOT NULL DEFAULT \'0\'',
		));
	}

	public function down()
	{
		$this->dropTable('user');
	}
}