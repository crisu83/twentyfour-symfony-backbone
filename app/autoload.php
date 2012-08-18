<?php

use Doctrine\Common\Annotations\AnnotationRegistry;

/** @var \Composer\Autoload\ClassLoader $loader */
$loader = require __DIR__.'/../vendor/autoload.php';

// intl
if (!function_exists('intl_get_error_code')) {
    require_once __DIR__.'/../vendor/symfony/symfony/src/Symfony/Component/Locale/Resources/stubs/functions.php';

    $loader->add('', __DIR__.'/../vendor/symfony/symfony/src/Symfony/Component/Locale/Resources/stubs');
}

$loader->add('BeSimple\\Bundle', __DIR__.'/../vendor/bundles');
$loader->add('Mustache', __DIR__.'/../vendor/mustache-php/src');

AnnotationRegistry::registerLoader(array($loader, 'loadClass'));

return $loader;
