<?php

namespace Core;

class Controller
{
    /**
     * Render a view and pass data
     */
    protected function view($view, $data = [])
    {
        extract($data);

        ob_start();
        require __DIR__ . '/../views/' . $view . '.php';
        $content = ob_get_clean();

        require __DIR__ . '/../views/layout/main.php';
    }

    protected function redirect($path)
    {
        header("Location: $path");
        exit;
    }

    protected function json($data)
    {
        header('Content-Type: application/json');
        echo json_encode($data);
        exit;
    }
}
