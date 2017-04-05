<?php

namespace AppBundle\Service;

use SampleBundle\BaseBundle\Service\AbstractService;
use AppBundle\Entity\Example;

class ExampleService extends AbstractService {

    /**
     * Returns Example class instance name.
     *
     * @return string
     */
    protected function getEntityName() {
        return Example::class;
    }

    public function example(){
        return 'oi';
    }
}