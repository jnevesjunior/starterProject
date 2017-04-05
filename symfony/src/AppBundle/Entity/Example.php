<?php

namespace AppBundle\Entity;

use SampleBundle\BaseBundle\Entity\EntityTrait\BlameTrait;
use SampleBundle\BaseBundle\Entity\EntityTrait\IdTrait;
use SampleBundle\BaseBundle\Entity\EntityTrait\SoftDeleteTrait;
use SampleBundle\BaseBundle\Entity\EntityTrait\TimestampTrait;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation as Serializer;

/**
 * Example
 *
 * @ORM\Entity
 * @ORM\Table(name="example")
 * @ORM\HasLifecycleCallbacks()
 * @Serializer\ExclusionPolicy("all")
 * @Gedmo\SoftDeleteable(fieldName="deletedAt", timeAware=false)
 */
class Example {

    use IdTrait, TimestampTrait, SoftDeleteTrait, BlameTrait;

    /**
     * @ORM\Column(name="name", type="string", length=100, nullable=false)
     * @Serializer\Expose()
     */
    private $name;

    /**
     * Get name
     *
     * @return string
     */
    public function getName() {
        return $this->name;
    }

    /**
     * Set name
     *
     * @param $name
     *
     * @return $this
     */
    public function setName($name) {
        $this->name = $name;

        return $this;
    }
}
