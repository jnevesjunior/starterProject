<?php

namespace SampleBundle\BaseBundle\Entity\EntityTrait;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation as Serializer;

/**
 * Class BlameTrait
 * @package SampleBundle\BaseBundle\Entity\EntityTrait
 */
trait BlameTrait {

    /**
     * @var string
     * @Gedmo\Blameable(on="create")
     * @ORM\Column(nullable=true)
     * @Serializer\Exclude()
     */
    protected $createdBy;

    /**
     * @var string
     * @Gedmo\Blameable(on="update")
     * @ORM\Column(nullable=true)
     * @Serializer\Exclude()
     */
    protected $updatedBy;

    /**
     * Returns createdBy.
     *
     * @return string
     */
    public function getCreatedBy() {
        return $this->createdBy;
    }

    /**
     * Sets createdBy.
     *
     * @param  string $createdBy
     *
     * @return $this
     */
    public function setCreatedBy($createdBy) {
        $this->createdBy = $createdBy;

        return $this;
    }

    /**
     * Returns updatedBy.
     *
     * @return string
     */
    public function getUpdatedBy() {
        return $this->updatedBy;
    }

    /**
     * Sets updatedBy.
     *
     * @param  string $updatedBy
     *
     * @return $this
     */
    public function setUpdatedBy($updatedBy) {
        $this->updatedBy = $updatedBy;

        return $this;
    }

}