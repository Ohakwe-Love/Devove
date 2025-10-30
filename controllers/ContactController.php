<?php

namespace Controllers;

use Core\Controller;

class ContactController extends Controller {
    public function index() {
        $this->view('pages/contact', ['title' => 'Contact']);
    }
}
