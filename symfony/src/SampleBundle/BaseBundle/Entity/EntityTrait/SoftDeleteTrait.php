<?php

namespace SampleBundle\BaseBundle\Entity\EntityTrait;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation as Serializer;

/**
 * Class SoftDeleteTrait
 * @package SampleBundle\BaseBundle\Entity\EntityTrait
 */
trait SoftDeleteTrait {

    /**
     * @ORM\Column(name="deleted_at", type="datetime", nullable=true)
     *
     * @Serializer\Exclude()
     */
    protected $deletedAt;

    /**
     * Returns DeletedAt
     *
     * @return mixed
     */
    public function getDeletedAt() {
        return $this->deletedAt;
    }

    /**
     * Sets DeletedAt
     *
     * @param $deletedAt
     *
     * @return $this
     */
    public function setDeletedAt($deletedAt) {
        $this->deletedAt = $deletedAt;

        return $this;
    }

}