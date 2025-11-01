<?php
require_once __DIR__ . '/components/layout.php';

// $path = trim($_SERVER['REQUEST_URI'], '/');
// $path = str_replace('devove.test/', '', $path);

// if ($path === '' || $path === 'index') {
//     render('home');
// } elseif (file_exists(__DIR__ . "/pages/$path.php")) {
//     render($path);
// } else {
//     http_response_code(404);
//     render('404', ['message' => 'Page not found']);
// }

$path = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

switch ($path) {
    case '':
        render('home', [
            'title' => 'Welcome to Devove',
            'css'   => 'style.css',
        ]);
        break;

    case 'projects':
        render('projects', [
            'title' => 'Our Projects',
            'css'   => 'projects.css',
            'js'    => 'projects.js'
        ]);
        break;

    case 'contact':
        render('contact', [
            'title' => 'Contact Us',
            'css'   => 'contact.css',
            'js'    => 'contact.js'
        ]);
        break;

    default:
        http_response_code(404);
        render('404', [
            'title' => 'Page Not Found'
        ]);
        break;
}