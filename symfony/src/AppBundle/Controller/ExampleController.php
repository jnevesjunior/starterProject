<?php

namespace AppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class ExampleController extends FOSRestController {
    public function getExampleAction() {
        $exampleService = $this->get('app.services.example');

        return $exampleService->example();
    }

    public function getExamplesAction() {
        return true;
    }
}
