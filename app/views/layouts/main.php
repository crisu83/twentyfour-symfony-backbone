<?php /* @var $this Controller */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="en" />

	<title><?php echo CHtml::encode($this->pageTitle); ?></title>

	<link rel="stylesheet" href="<?php echo Yii::app()->request->baseUrl; ?>/css/styles.css" />

	<script data-main="js/main" src="<?php echo Yii::app()->request->baseUrl; ?>/js/lib/require/require.js"></script>
</head>

<body>

<?php $this->widget('TbNavbar',array(
	'items'=>array(
		array(
			'class'=>'TbMenu',
			'htmlOptions'=>array('class'=>'pull-right'),
			'items'=>array(
				array('label'=>'Home', 'url'=>array('/site/index')),
				array('label'=>'About', 'url'=>array('/site/page', 'view'=>'about')),
				array('label'=>'Login', 'url'=>array('/site/login'), 'visible'=>Yii::app()->user->isGuest),
				array('label'=>Yii::app()->user->name, 'visible'=>!Yii::app()->user->isGuest, 'items'=>array(
					array('label'=>'Logout', 'url'=>array('/site/logout')),
				)),
			),
		),
	),
)); ?>

<div id="page" class="container">

	<?php $this->beginWidget('TbHeroUnit', array(
		'heading'=>Yii::app()->name,
	)); ?>

	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis, mauris sed fringilla iaculis, purus dolor pulvinar purus, ac adipiscing metus sem eget mi. Proin eros eros, sagittis in dapibus quis, ultrices convallis metus.</p>

	<?php $this->endWidget(); ?>

	<?php if(!empty($this->breadcrumbs)): ?>
		<?php $this->widget('TbBreadcrumbs', array(
			'links'=>$this->breadcrumbs,
		)); ?>
	<?php endif?>

	<?php echo $content; ?>

	<div id="footer">
		&copy; Christoffer Niska <?php echo date('Y'); ?><br/>
		<?php echo Yii::powered(); ?>
	</div><!-- footer -->

</div><!-- page -->

</body>
</html>
