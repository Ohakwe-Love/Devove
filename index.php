<?php

require_once __DIR__ . '/core/Env.php';
Env::load(__DIR__ . '/.env');

require_once __DIR__ . '/core/helpers.php';
require_once __DIR__ . '/core/Controller.php';
require_once __DIR__ . '/core/Router.php';
require_once __DIR__ . '/routes/web.php';

$router->run();
