<?php
require_once __DIR__ . '/layout/layout.php';

$path = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

switch ($path) {
    case '':
        render('home', [
            'title' => 'Ohakwe Love - Software Engineer | Full-Stack Developer',
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

    case 'resume':
        render_plain('my_cv', [
            'title' => 'My Resume',
            'css'   => 'my_cv.css',
            'js'    => 'my_cv.js'
        ]);
        break;

    default:
        http_response_code(404);
        render_plain('404', [
            'title' => 'Page Not Found',
            'css'   => '404.css'
        ]);
        break;
}