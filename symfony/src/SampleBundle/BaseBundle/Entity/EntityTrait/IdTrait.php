<?php

namespace SampleBundle\BaseBundle\Entity\EntityTrait;

use SampleBundle\BaseBundle\Exception\NegativeIdException;
use JMS\Serializer\Annotation as Serializer;

/**
 * Class IdTrait
 * @package SampleBundle\BaseBundle\Entity\EntityTrait
 */
trait IdTrait {
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer", options={"unsigned":true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     * @Serializer\Expose()
     */
    protected $id;

    /**
     * Returns Id
     * @return int
     */
    public function getId() {
        return $this->id;
    }

    /**
     * Sets Id
     *
     * @param $id
     *
     * @return $this
     * @throws \SampleBundle\BaseBundle\Exception\NegativeIdException
     */
    public function setId($id) {
        if ((int) $id <= 0) {
            throw new NegativeIdException();
        }
        $this->id = $id;

        return $this;
    }

    public function __clone() {
        $this->id = null;
    }


}
