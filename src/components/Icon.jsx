// Nucleo "core" outline icons (24px grid). Same icons used in the Figma file.
// Stroke width is 1.5 on the 24px grid so it scales with the rendered size,
// matching the stroke weights in the design (e.g. 2.5px at 40px, 1px at 16px).

const paths = {
  podium: (
    <>
      <path d="M9 13H3V21H9" />
      <path d="M15 16H21V21H15" />
      <path
        d="M12 0L13.0811 2.13965L15.5 2.483L13.75 4.14853L14.163 6.5L12 5.38965L9.83622 6.5L10.25 4.14853L8.5 2.483L10.9181 2.13965L12 0Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M15 9H9V21H15V9Z" />
    </>
  ),
  'chevron-down': <path d="M21 8L12 17L3 8" strokeLinecap="square" />,
  trophy: (
    <>
      <path d="M18 3H22V6C22 7.65685 20.6569 9 19 9H18" />
      <path d="M6 3H2V6C2 7.65685 3.34315 9 5 9H6" />
      <path d="M12 14V18" />
      <path d="M6 3V8C6 11.3137 8.68629 14 12 14C15.3137 14 18 11.3137 18 8V3H6Z" strokeLinecap="square" />
      <path d="M16 22H8V21C8 19.3431 9.34315 18 11 18H13C14.6569 18 16 19.3431 16 21V22Z" strokeLinecap="square" />
    </>
  ),
  medication: (
    <>
      <path
        d="M9.10001 17H14.5L14.5 16.5C14.5 14.8431 13.1569 13.5 11.5 13.5H10L9.17157 12.6716C8.42143 11.9214 7.40401 11.5 6.34315 11.5H6.14074C4.80332 11.5 3.5544 12.1684 2.81253 13.2812L2 14.5L2.33333 14M18.5 15L21.1178 14.4183C22.0837 14.2036 23 14.9386 23 15.9281C23 16.5729 22.6001 17.15 21.9964 17.3764L12.2198 21.0426C11.4271 21.3398 10.5605 21.3779 9.74476 21.1513L2 19L2.5 19.1389"
        strokeLinecap="square"
      />
      <path d="M2 21V11" strokeLinecap="square" />
      <path d="M14.4643 8.53931L18.707 4.29667" strokeLinecap="square" />
      <path d="M13.0501 7.12514C11.8785 5.95356 11.8785 4.05407 13.0501 2.88249C14.2217 1.71092 16.1212 1.71092 17.2927 2.88249L20.1212 5.71092C21.2927 6.88249 21.2927 8.78199 20.1212 9.95356C18.9496 11.1251 17.0501 11.1251 15.8785 9.95356L13.0501 7.12514Z" />
    </>
  ),
  globe: (
    <>
      <path d="M22 12H2" />
      <path d="M12 22C17.7143 16.5578 17.7143 7.44218 12 2" />
      <path d="M12 22C6.28571 16.5578 6.28571 7.44218 12 2" />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        strokeLinecap="square"
      />
    </>
  ),
  users: (
    <>
      <circle cx="16.5" cy="4.75" r="2.75" strokeLinecap="square" />
      <path d="M15.553 16.5h6.422c.015-.165.025-.331.025-.5 0-3.038-2.462-5.5-5.5-5.5-.825 0-1.604.187-2.306.512" strokeLinecap="square" />
      <circle cx="7.5" cy="10.25" r="2.75" strokeLinecap="square" />
      <path d="M12.975 22c.015-.165.025-.331.025-.5 0-3.038-2.462-5.5-5.5-5.5s-5.5 2.462-5.5 5.5c0 .169.01.335.025.5h10.95Z" strokeLinecap="square" />
    </>
  ),
  'arrow-up-right': (
    <>
      <path d="M4 20L20 4" strokeLinecap="square" />
      <path d="M13 4H20V11" strokeLinecap="square" />
    </>
  ),
  'cart-plus': (
    <>
      <path
        d="M6 22C6.55228 22 7 21.5523 7 21C7 20.4477 6.55228 20 6 20C5.44772 20 5 20.4477 5 21C5 21.5523 5.44772 22 6 22Z"
        fill="currentColor"
        strokeLinecap="square"
      />
      <path d="M19 23V15" strokeLinecap="square" />
      <path d="M15 19H23" strokeLinecap="square" />
      <path d="M4.821 6H22L21 11M1 2H4L5.75469 14.2828C5.89545 15.2681 6.73929 16 7.73459 16H11" strokeLinecap="square" />
    </>
  ),
  menu: (
    <>
      <path d="M2 12H22" strokeLinecap="square" />
      <path d="M2 5H22" strokeLinecap="square" />
      <path d="M2 19H22" strokeLinecap="square" />
    </>
  ),
  xmark: (
    <>
      <path d="M19 19L5 5" strokeLinecap="square" />
      <path d="M19 5L5 19" strokeLinecap="square" />
    </>
  ),
}

export default function Icon({ name, size = 24, className = '', strokeWidth = 1.5 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
