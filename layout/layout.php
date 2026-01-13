<?php
function render_plain($view, $data = [])
{
    extract($data);

    $title = $title ?? 'Devove';
    $css   = $css ?? null;
    $js    = $js ?? null;
?>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?= htmlspecialchars($title) ?></title>

        <!-- favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon_io/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon_io/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon_io/favicon-16x16.png">
        <link rel="manifest" href="/assets/images/favicon_io/site.webmanifest">

        <!-- same core css the site uses -->
        <link rel="stylesheet" href="assets/css/main.css">
        <link rel="stylesheet" href="assets/css/footer.css">

        <?php if (!empty($css)): ?>
            <link rel="stylesheet" href="/assets/css/<?= htmlspecialchars($css) ?>">
        <?php endif; ?>

        <!-- core scripts (deferred) -->
        <script src="assets/js/projects.js" defer></script>
        <script src="assets/js/main.js" defer></script>

        <style>
            .loaderDiv.fade-out {
                opacity: 0;
                transition: opacity 0.3s ease;
                pointer-events: none;
            }

            body.loading {
                overflow: hidden;
            }

            .loaderDiv {
                width: 100vw;
                height: 100vh;
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 99999;
                background-color: var(--background-2);
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }

            .loader {
                width: 50px;
                aspect-ratio: 1;
                display: grid;
                border: 4px solid var(--primary);
                border-radius: 50%;
                border-right-color: transparent;
                animation: l15 1s infinite linear;
            }

            .loader::before,
            .loader::after {
                content: "";
                grid-area: 1/1;
                margin: 2px;
                border: inherit;
                border-radius: 50%;
                animation: l15 2s infinite;
            }

            .loader::after {
                margin: 8px;
                animation-duration: 3s;
            }

            @keyframes l15 {
                100% {
                    transform: rotate(1turn)
                }
            }
        </style>
    </head>

    <body>

        <!-- preloader  -->
        <div class="loaderDiv">
            <div class="loader"></div>
        </div>
        
        <?php

        // include the requested view (no header/footer)
        include __DIR__ . '/../pages/' . $view . '.php';

        ?>

        <script>
            // Preloader
            const loader = document.querySelector('.loaderDiv');

            if (loader) {
                window.addEventListener('load', () => {
                    loader.classList.add('fade-out');
                    document.body.classList.remove('loading');
                });
            }
        </script>
    </body>

    </html>
<?php
}

function render($view, $data = [])
{
    extract($data);

    $title = $title ?? 'Devove';
    $css   = $css ?? null;
    $js    = $js ?? null;

    include __DIR__ . '/header.php';
    include __DIR__ . '/../pages/' . $view . '.php';
    include __DIR__ . '/footer.php';
}
