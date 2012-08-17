<?php

namespace Twentyfour\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
	/**
	 * @Route("/index")
	 * @Template()
	 */
    public function indexAction()
    {
        return $this->render('TwentyfourAppBundle:Default:index.html.twig');
    }
}
