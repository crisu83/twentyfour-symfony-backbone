<?php

namespace Twentyfour\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * @Route("/activity")
 */
class ActivityController extends Controller
{
	/**
	 * @Route("/ajaxFindAll", name="_ajaxFindAll")
	 * @Template()
	 */
    public function ajaxFindAllAction()
    {
        $repository = $this->getDoctrine()
            ->getRepository('TwentyfourAppBundle:Activity');

        $activities = $repository->findAll();

        $data = array();
        /** @var \Twentyfour\AppBundle\Entity\Activity $activity */
        foreach ($activities as $activity) {
            $data[] = $activity->toArray();
        }

        echo json_encode($data);

        exit(0);
    }
}
