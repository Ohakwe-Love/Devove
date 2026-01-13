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

    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="/assets/images/favicon_io/site.webmanifest">

    <!-- css -->
    <link rel="stylesheet" href="assets/css/main.css">

    <?php if (!empty($css)): ?>
        <link rel="stylesheet" href="/assets/css/<?= htmlspecialchars($css) ?>">
    <?php endif; ?>

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

    <!-- AOS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <!-- js -->
    <script src="assets/js/script.js" defer></script>
    <script src="assets/js/projects.js" defer></script>
    <script src="assets/js/main.js" defer></script>
    
    <?php if (!empty($js)): ?>
        <script src="/assets/js/<?= htmlspecialchars($js) ?>" defer></script>
    <?php endif; ?>
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

            <button class="nav-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
                </svg>
            </button>
        </div>
    </header>

    <!-- navigation -->
    <nav id="nav" class="nav">

        <button class="close-nav">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path>
            </svg>
        </button>

        <ul>
            <li>
                <a href="/" class="nav-link nav-home-link" data-tooltip="Home">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-5">
                        <path fill="currentColor"
                            d="m220.17 100l-17.31-30a28 28 0 0 0-38.24-10.25a27.7 27.7 0 0 0-9 8.34L138.2 38a28 28 0 0 0-48.48 0a28 28 0 0 0-41.57 36l1.59 2.76A27.7 27.7 0 0 0 38 80.41a28 28 0 0 0-10.24 38.25l40 69.32a87.47 87.47 0 0 0 53.43 41a88.6 88.6 0 0 0 22.92 3a88 88 0 0 0 76.06-132Zm-6.66 62.64A72 72 0 0 1 81.62 180l-40-69.32a12 12 0 0 1 20.78-12L81.63 132a8 8 0 1 0 13.85-8L62 66a12 12 0 1 1 20.78-12L114 108a8 8 0 1 0 13.85-8l-24.28-42a12 12 0 1 1 20.78-12l33.42 57.9a48 48 0 0 0-5.54 60.6a8 8 0 0 0 13.24-9a32 32 0 0 1 7.31-43.5a8 8 0 0 0 2.13-10.4L168.23 90A12 12 0 1 1 189 78l17.31 30a71.56 71.56 0 0 1 7.2 54.62ZM184.25 31.71A8 8 0 0 1 194 26a59.62 59.62 0 0 1 36.53 28l.33.57a8 8 0 1 1-13.85 8l-.33-.57a43.67 43.67 0 0 0-26.8-20.5a8 8 0 0 1-5.63-9.79M80.89 237a8 8 0 0 1-11.23 1.33A119.6 119.6 0 0 1 40.06 204a8 8 0 0 1 13.86-8a103.7 103.7 0 0 0 25.64 29.72A8 8 0 0 1 80.89 237">
                        </path>
                    </svg>

                    <div class="tool-tip">Home</div>
                </a>
            </li>
            <li>
                <a href="/#about" class="nav-link nav-about-link" data-tooltip="About">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>

                    <div class="tool-tip">About</div>
                </a>
            </li>
            <li>
                <a href="/#skills" class="nav-link nav-skills-link" data-tooltip="Skills">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        id="Person-Play-Fill--Streamline-Outlined-Fill-Material">
                        <path fill="currentColor"
                            d="M5.1496 12.05 1.59961 8.5l3.54999 -3.525 3.525 3.525 -3.525 3.55Zm4.175 9.95V16.683c-1.06665 -0.08865 -2.125 -0.20385 -3.175 -0.3455 -1.05 -0.14165 -2.09999 -0.3375 -3.14999 -0.5875l0.375 -1.5c1.421165 0.33335 2.84649 0.57085 4.27599 0.7125 1.4297 0.14165 2.88045 0.2125 4.35225 0.2125 1.472 0 2.92275 -0.07085 4.35225 -0.2125 1.42965 -0.14165 2.85285 -0.37915 4.2695 -0.7125l0.375 1.5c-1.05 0.25 -2.0998 0.4476 -3.1495 0.59275 -1.0498 0.14515 -2.1083 0.2559 -3.1755 0.33225V22h-5.35Zm2.672 -15.5c-0.76465 0 -1.41365 -0.26765 -1.947 -0.803 -0.5333 -0.53535 -0.8 -1.185335 -0.8 -1.95 0 -0.764665 0.2677 -1.413665 0.803 -1.947 0.53535 -0.533335 1.18535 -0.8 1.95 -0.8 0.7647 0 1.4137 0.267665 1.947 0.803 0.53335 0.535335 0.8 1.185335 0.8 1.95 0 0.764665 -0.26765 1.41365 -0.803 1.947 -0.5353 0.53335 -1.1853 0.8 -1.95 0.8Zm0.005 7.15c-0.5013 0 -0.93115 -0.1785 -1.2895 -0.5355 -0.3583 -0.357 -0.5375 -0.78615 -0.5375 -1.2875 0 -0.50135 0.1785 -0.93115 0.5355 -1.2895 0.357 -0.35835 0.7862 -0.5375 1.2875 -0.5375 0.50135 0 0.9312 0.1785 1.2895 0.5355 0.35835 0.357 0.5375 0.78615 0.5375 1.2875 0 0.50135 -0.1785 0.93115 -0.5355 1.2895 -0.357 0.35835 -0.78615 0.5375 -1.2875 0.5375Zm5.448 -1.9 -1.55 -2.75 1.55825 -2.75h3.11675l1.55 2.75 -1.55825 2.75h-3.11675Z"
                            stroke-width="0.5"></path>
                    </svg>
                    <div class="tool-tip">Skills</div>
                </a>
            </li>
            <li>
                <a href="/projects" class="nav-link nav-projects-link" data-tooltip="Projects">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="size-5">
                        <path fill="currentColor"
                            d="M216 56h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16M96 48a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm120 24v41.61A184 184 0 0 1 128 136a184.1 184.1 0 0 1-88-22.38V72Zm0 128H40v-68.36A200.2 200.2 0 0 0 128 152a200.25 200.25 0 0 0 88-20.37zm-112-88a8 8 0 0 1 8-8h32a8 8 0 0 1 0 16h-32a8 8 0 0 1-8-8">
                        </path>
                    </svg>
                    <div class="tool-tip">Projects</div>
                </a>
            </li>
            <li>
                <a href="/contact" class="nav-link nav-contact-link" data-tooltip="Contact">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M4 2C3.44772 2 3 2.44772 3 3V5H5V4H19V20H5V19H3V21C3 21.5523 3.44772 22 4 22H20C20.5523 22 21 21.5523 21 21V3C21 2.44772 20.5523 2 20 2H4ZM9 16C9 14.3431 10.3431 13 12 13C13.6569 13 15 14.3431 15 16H9ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12ZM6 9V7H2V9H6ZM6 11V13H2V11H6ZM6 17V15H2V17H6Z">
                        </path>
                    </svg>
                    <div class="tool-tip">Contact</div>
                </a>
            </li>
        </ul>
    </nav>