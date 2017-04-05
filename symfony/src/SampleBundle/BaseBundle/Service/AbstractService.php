<?php

namespace SampleBundle\BaseBundle\Service;

use Doctrine\ORM\EntityManager;

/**
 * Class AbstractService
 * @package SampleBundle\BaseBundle\Service
 */
abstract class AbstractService {

    /**
     * @var EntityManager
     */
    protected $em;

    /**
     * @var \Doctrine\ORM\EntityRepository
     */
    protected $repository;

    /**
     * AbstractService constructor.
     *
     * @param \Doctrine\ORM\EntityManager $em
     */
    public function __construct(EntityManager $em) {
        $this->em         = $em;
        $this->repository = $em->getRepository($this->getEntityName());
    }

    /**
     * @return mixed
     */
    protected abstract function getEntityName();

    /**
     * @param $object
     *
     * @return mixed
     */
    public function save($object) {
        $this->getEm()->persist($object);
        $this->getEm()->flush();

        return $object;
    }

    /**
     * @return \Doctrine\ORM\EntityManager
     */
    public function getEm() {
        return $this->em;
    }

    /**
     * @param \Doctrine\ORM\EntityManager $em
     */
    public function setEm($em) {
        $this->em = $em;
    }

    /**
     * @param     $data
     * @param int $id
     *
     * @return mixed
     */
    public function merge($data, $id = 0) {
        if (is_numeric($id) && $id > 0) {
            $this->getEm()->merge($data);
        }

        $this->getEm()->flush();

        return $data;
    }

    /**
     * @param $id
     *
     * @return bool|string
     */
    public function delete($id) {
        try {
            $entity = $this->fetch($id);

            if ($entity instanceof \Doctrine\ORM\Proxy\Proxy) {
                return false;
            }

            $this->getEm()->remove($entity);
            $this->getEm()->flush();

        } catch (\Exception $e) {
            return $e->getMessage();
        }

        return true;
    }

    /**
     * @param $id
     *
     * @return null|object
     */
    public function fetch($id) {
        return $this->getRepository()->find($id);
    }

    /**
     * @return \Doctrine\ORM\EntityRepository
     */
    public function getRepository($repository = null) {
        if ($repository !== null) {

            return $this->getEm()->getRepository($repository);
        }

        return $this->repository;
    }

    /**
     * @param \Doctrine\ORM\EntityRepository $repository
     */
    public function setRepository(\Doctrine\ORM\EntityRepository $repository) {
        $this->repository = $repository;
    }

    /**
     * @return array
     */
    public function fetchAll() {
        return $this->getRepository()->findAll();
    }

}