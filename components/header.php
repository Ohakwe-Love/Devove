<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Love Ohakwe - Software Engineer specializing in JavaScript ecosystem. Dedicated problem-solver who thrives on learning and building innovative solutions.">
    <meta name="keywords"
        content="software engineer, JavaScript developer, web development, problem solver, PHP Developer, React JS, Laravel Developer">
    <meta name="author" content="Love Ohakwe">
    <title><?= htmlspecialchars($title) ?? 'Ohakwe Love - Software Engineer | JavaScript Developer' ?></title>

    <!-- css -->
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/footer.css">

    <?php if (!empty($css)): ?>
        <link rel="stylesheet" href="/assets/css/<?= htmlspecialchars($css) ?>">
    <?php endif; ?>

    <style>
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

    <!-- js -->
    <script src="assets/js/script.js" defer></script>
    <script src="assets/js/projects.js" defer></script>
    <script src="assets/js/main.js" defer></script>
</head>

<body>
    <!-- preloader  -->
    <div class="loaderDiv">
        <div class="loader"></div>
    </div>

    <!-- header -->
    <header>
        <div class="container">
            <a href="/" class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1907 382.5">
                    <defs>
                        <style>
                            .cls-1 {
                                letter-spacing: -.06em;
                            }

                            .cls-2 {
                                letter-spacing: -.07em;
                            }

                            .cls-3 {
                                letter-spacing: -.07em;
                            }

                            .cls-4 {
                                letter-spacing: -.06em;
                            }

                            .cls-5 {
                                font-family: 'Chillax';
                                font-size: 436.5px;
                                font-weight: 600;
                            }

                            .cls-5,
                            .cls-6 {
                                fill: #fff;
                            }

                            .cls-6 {
                                stroke-width: 0px;
                            }
                        </style>
                    </defs>
                    <text class="cls-5" transform="translate(443.63 342.9)">
                        <tspan class="cls-1" x="0" y="0">D</tspan>
                        <tspan class="cls-2" x="300.31" y="0">e</tspan>
                        <tspan class="cls-3" x="525.11" y="0">vov</tspan>
                        <tspan class="cls-4" x="1206.46" y="0">e</tspan>
                    </text>
                    <g>
                        <path class="cls-6"
                            d="M395.05,32.97v140.95l-80.68-58.31-1.59-1.14H100.92L11,49.47v-16.5c0-11.11,10.4-20.12,23.23-20.12h337.58c12.83,0,23.23,9.01,23.23,20.12Z" />
                        <polygon class="cls-6"
                            points="395.05 201.88 395.05 303.32 310.87 242.48 309.28 241.33 99.01 241.33 11 177.72 11 77.44 95.6 138.58 96.82 139.46 96.46 139.72 309.05 139.72 395.05 201.88" />
                        <path class="cls-6"
                            d="M395.05,331.28v20.26c0,9.2-8.61,16.65-19.23,16.65H30.23c-10.62,0-19.23-7.46-19.23-16.65v-145.87l82.7,59.77,1.58,1.14h210.26l89.51,64.69Z" />
                    </g>
                </svg>
            </a>

            <a href="/my_cv" target="_blank" class="view-resume  primary-btn animated-border">
                Resume

                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-up-right-circle"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
                    </svg>
                </span>
            </a>
        </div>
    </header>

    <!-- navigation -->
    <div id="nav-container" class="nav-container">
        <nav>
            <div id="bottom-nav-bar-upper"></div>
            <ul id="nav-dock" class="">
                <div class="nav-tool-tip" aria-hidden="true">
                    <p class="nav-tool-tip__text" aria-hidden="true"></p>
                </div>

                <li>
                    <a href="/" class="nav-link nav-home-link" data-tooltip="Home">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-5">
                            <path fill="currentColor"
                                d="m220.17 100l-17.31-30a28 28 0 0 0-38.24-10.25a27.7 27.7 0 0 0-9 8.34L138.2 38a28 28 0 0 0-48.48 0a28 28 0 0 0-41.57 36l1.59 2.76A27.7 27.7 0 0 0 38 80.41a28 28 0 0 0-10.24 38.25l40 69.32a87.47 87.47 0 0 0 53.43 41a88.6 88.6 0 0 0 22.92 3a88 88 0 0 0 76.06-132Zm-6.66 62.64A72 72 0 0 1 81.62 180l-40-69.32a12 12 0 0 1 20.78-12L81.63 132a8 8 0 1 0 13.85-8L62 66a12 12 0 1 1 20.78-12L114 108a8 8 0 1 0 13.85-8l-24.28-42a12 12 0 1 1 20.78-12l33.42 57.9a48 48 0 0 0-5.54 60.6a8 8 0 0 0 13.24-9a32 32 0 0 1 7.31-43.5a8 8 0 0 0 2.13-10.4L168.23 90A12 12 0 1 1 189 78l17.31 30a71.56 71.56 0 0 1 7.2 54.62ZM184.25 31.71A8 8 0 0 1 194 26a59.62 59.62 0 0 1 36.53 28l.33.57a8 8 0 1 1-13.85 8l-.33-.57a43.67 43.67 0 0 0-26.8-20.5a8 8 0 0 1-5.63-9.79M80.89 237a8 8 0 0 1-11.23 1.33A119.6 119.6 0 0 1 40.06 204a8 8 0 0 1 13.86-8a103.7 103.7 0 0 0 25.64 29.72A8 8 0 0 1 80.89 237">
                            </path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#about" class="nav-link nav-about-link" data-tooltip="About">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#skills" class="nav-link nav-skills-link" data-tooltip="Skills">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-layers"
                            viewBox="0 0 16 16">
                            <path
                                d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z" />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="/projects" class="nav-link nav-projects-link" data-tooltip="Projects">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-5">
                            <path fill="currentColor"
                                d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v41.61A184 184 0 0 1 128 136a184.1 184.1 0 0 1-88-22.38V72Zm0 128H40v-68.36A200.2 200.2 0 0 0 128 152a200.25 200.25 0 0 0 88-20.37zm-112-88a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8">
                            </path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="/contact" class="nav-link nav-contact-link" data-tooltip="Contact">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-5">
                            <path fill="currentColor"
                                d="M132 24A100.11 100.11 0 0 0 32 124v84a16 16 0 0 0 16 16h84a100 100 0 0 0 0-200m0 184H48v-84a84 84 0 1 1 84 84m12-80a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-44 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m88 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12">
                            </path>
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    </div>