<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

use FOS\RestBundle\Controller\Annotations as Rest;

use AppBundle\Entity\Event;
use AppBundle\Form\Type\EventType;

class DefaultController extends Controller
{
    /**
     * @Rest\Get("/events")
     */
    public function indexAction(Request $request)
    {
        $em = $this->get("doctrine.orm.entity_manager");
        $events = $em->getRepository("AppBundle:Event")->findAll();

        return \FOS\RestBundle\View\View::create(['events' => $events], Response::HTTP_OK);
    }

    /**
     * @Rest\Post("/events/create")
     */
    public function createAction(Request $request)
    {       
        $em = $this->get("doctrine.orm.entity_manager");

        $event = new Event();

        $form = $this->createForm(EventType::class, $event);
        $form->submit($request->request->all());

        if ($form->isValid()) {
            $em = $this->get('doctrine.orm.entity_manager');
            $em->persist($event);
            $em->flush();

            $events = $em->getRepository("AppBundle:Event")->findAll();
            return \FOS\RestBundle\View\View::create(['events' => $events], Response::HTTP_OK);
        } else {
            $events = $em->getRepository("AppBundle:Event")->findAll();
            return \FOS\RestBundle\View\View::create(['events' => $events], Response::HTTP_OK);
        }
    }
}
