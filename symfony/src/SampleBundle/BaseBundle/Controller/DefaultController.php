<?php

namespace SampleBundle\BaseBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class DefaultController extends FOSRestController {
    public function indexAction() {
        return 'Hello World!';
    }
}
