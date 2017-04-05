<?php

namespace SampleBundle\BaseBundle\Entity\EntityTrait;

use Zend\Hydrator\Reflection;

/**
 * Class ArrayTrait
 * @package SampleBundle\BaseBundle\Entity\EntityTrait
 */
trait ArrayTrait {
    /**
     * {@inheritdoc}
     */
    public function exchangeArray(array $array) {
        return (new Reflection())->hydrate($array, $this);
    }

    /**
     * @return array
     */
    public function toArray() {
        return (new Reflection())->extract($this);
    }

}