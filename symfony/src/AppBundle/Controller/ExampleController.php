<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class ExampleController extends FOSRestController {
    public function indexAction() {
        $exampleService = $this->get('app.services.example');

        return $exampleService->example();
    }
}
