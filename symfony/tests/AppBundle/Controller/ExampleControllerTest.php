<?php

namespace Tests\AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ExampleControllerTest extends WebTestCase {
    public function testExample() {
        $client = static::createClient();

        $client->request('GET', '/example');

        return $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }

    public function testExamples() {
        $client = static::createClient();

        $client->request('GET', '/examples');

        return $this->assertEquals(200, $client->getResponse()->getStatusCode());
    }
}
