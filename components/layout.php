<?php
function render($view, $data = []) {
    extract($data);

    $title = $title ?? 'Devove';
    $css   = $css ?? null;
    $js    = $js ?? null;

    include __DIR__ . '/header.php';
    include __DIR__ . '/../pages/' . $view . '.php';
    include __DIR__ . '/footer.php';
}