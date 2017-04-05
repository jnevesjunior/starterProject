<?php

namespace SampleBundle\BaseBundle\Entity\EntityTrait;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use JMS\Serializer\Annotation as Serializer;

/**
 * Class TimestampTrait
 * @package SampleBundle\BaseBundle\Entity\EntityTrait
 */
trait TimestampTrait {

    /**
     * @var \DateTime
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(type="datetime")
     *
     * @Serializer\Exclude()
     */
    protected $createdAt;

    /**
     * @var \DateTime
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(type="datetime")
     *
     * @Serializer\Exclude()
     */
    protected $updatedAt;

    /**
     * Returns createdAt
     *
     * @return \DateTime
     */
    public function getCreatedAt() {
        return $this->createdAt;
    }

    /**
     * Sets createdAt
     *
     * @param  \DateTime $createdAt
     *
     * @return $this
     */
    public function setCreatedAt(\DateTime $createdAt) {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Returns updatedAt
     *
     * @return \DateTime
     */
    public function getUpdatedAt() {
        return $this->updatedAt;
    }

    /**
     * Sets updatedAt
     *
     * @param  \DateTime $updatedAt
     *
     * @return $this
     */
    public function setUpdatedAt(\DateTime $updatedAt) {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}