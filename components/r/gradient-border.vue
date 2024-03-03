<template>
  <div cls="border">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100% 100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient">
          <stop offset="0" stop-color="#B6A2E0">
            <animate
              attributeName="stop-color"
              values="#B6A2E0;#4E4CB5;#D7D7D1;#B6A2E0"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stop-color="#B6A2E0">
            <animate
              attributeName="offset"
              values=".5;.2;.5"
              dur="3.1500000000000004s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stop-color="#4E4CB5">
            <animate
              attributeName="offset"
              values="1;.9;1"
              dur="3.1500000000000004s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stop-color"
              values="#4E4CB5;#D7D7D1;#B6A2E0;#4E4CB5"
              dur="3.1500000000000004s"
              repeatCount="indefinite"
            />
          </stop>
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 .5 .5"
            to="360 .5 .5"
            dur="5.4s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" stroke="url(#gradient)" rx="24" ry="24" />
    </svg>
  </div>
</template>

<style module lang="scss">
.border {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  svg {
    rect {
      stroke-width: 10px;
    }
  }
}
</style>
