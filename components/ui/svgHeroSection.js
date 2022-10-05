function SvgMain() {
  return (
    <svg
      width="100%"
      height="50%"
      id="svg"
      viewBox="0 0 1400 100"
      xmlns="http://www.w3.org/2000/svg"
      class="transition duration-300 ease-in-out delay-150"
    >
      <defs>
        <linearGradient id="gradient" x1="74%" y1="94%" x2="26%" y2="6%">
          <stop offset="5%" stop-color="#fcb900"></stop>
          <stop offset="95%" stop-color="#8ed1fc"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 C 0,400 0,133 0,133 C 118.39999999999998,134.73333333333335 236.79999999999995,136.46666666666667 391,135 C 545.2,133.53333333333333 735.2,128.86666666666667 916,128 C 1096.8,127.13333333333331 1268.4,130.06666666666666 1440,133 C 1440,133 1440,400 1440,400 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        fill-opacity="0.53"
        class="transition-all duration-300 ease-in-out delay-150 path-0"
        transform="rotate(-180 720 200)"
      ></path>
      <defs>
        <linearGradient id="gradient" x1="74%" y1="94%" x2="26%" y2="6%">
          <stop offset="5%" stop-color="#fcb900"></stop>
          <stop offset="95%" stop-color="#8ed1fc"></stop>
        </linearGradient>
      </defs>
      <path
        d="M 0,400 C 0,400 0,266 0,266 C 197.2,264.26666666666665 394.4,262.5333333333333 530,252 C 665.6,241.46666666666667 739.6,222.13333333333333 881,223 C 1022.4,223.86666666666667 1231.2,244.93333333333334 1440,266 C 1440,266 1440,400 1440,400 Z"
        stroke="none"
        stroke-width="0"
        fill="url(#gradient)"
        fill-opacity="1"
        class="transition-all duration-300 ease-in-out delay-150 path-1"
        transform="rotate(-180 720 200)"
      ></path>
    </svg>
  );
}

export default SvgMain;
