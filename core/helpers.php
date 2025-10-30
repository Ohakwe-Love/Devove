<?php
function component($name, $data = []) {
    $file = __DIR__ . "/../views/components/{$name}.php";
    if (file_exists($file)) {
        extract($data);
        include $file;
    } else {
        echo "<!-- Component {$name} not found -->";
    }
}