import * as React from 'react'
import classnames from 'classnames'

export interface LogoProps {
    size?: string;
    className?: string;
}

export default ({ size = '1024px', className }: LogoProps) => (
  <svg width={size} height={size} viewBox="0 0 1024 1024" version="1.1" className={classnames(className)}>
      <defs></defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Face-ID" fill="#46C6FF">
              <path d="M1024,858 L1024,743 C1024,728.641 1012.359,717 998,717 C983.641,717 972,728.641 972,743 L972,858 C972,920.859 920.859,972 858,972 L743,972 C728.641,972 717,983.641 717,998 C717,1012.359 728.641,1024 743,1024 L858,1024 C949.532,1024 1024,949.532 1024,858 M307,998 C307,983.641 295.359,972 281,972 L166,972 C103.141,972 52,920.859 52,858 L52,743 C52,728.641 40.359,717 26,717 C11.641,717 0,728.641 0,743 L0,858 C0,949.532 74.468,1024 166,1024 L281,1024 C295.359,1024 307,1012.359 307,998 M52,281 L52,166 C52,103.14 103.141,52 166,52 L281,52 C295.359,52 307,40.359 307,26 C307,11.641 295.359,0 281,0 L166,0 C74.468,0 0,74.467 0,166 L0,281 C0,295.359 11.641,307 26,307 C40.359,307 52,295.359 52,281 M1024,281 L1024,166 C1024,74.467 949.532,0 858,0 L743,0 C728.641,0 717,11.641 717,26 C717,40.359 728.641,52 743,52 L858,52 C920.859,52 972,103.14 972,166 L972,281 C972,295.359 983.641,307 998,307 C1012.359,307 1024,295.359 1024,281 M691.429,756.836 C702.383,746.718 703.06,729.636 692.942,718.682 C682.823,707.728 665.742,707.051 654.788,717.168 C615.811,753.172 565.101,773 512,773 C458.899,773 408.189,753.172 369.212,717.168 C358.256,707.051 341.177,707.729 331.058,718.682 C320.94,729.636 321.617,746.718 332.571,756.836 C381.556,802.082 445.277,827 512,827 C578.723,827 642.444,802.082 691.429,756.836 M566,578 L566,386 C566,371.088 553.912,359 539,359 C524.088,359 512,371.088 512,386 L512,578 C512,586.271 505.271,593 497,593 L475,593 C460.088,593 448,605.088 448,620 C448,634.912 460.088,647 475,647 L497,647 C535.047,647 566,616.047 566,578 M752,461.5 L752,384.5 C752,370.417 740.583,359 726.5,359 C712.417,359 701,370.417 701,384.5 L701,461.5 C701,475.583 712.417,487 726.5,487 C740.583,487 752,475.583 752,461.5 M303.5,487 C289.417,487 278,475.583 278,461.5 L278,384.5 C278,370.417 289.417,359 303.5,359 C317.583,359 329,370.417 329,384.5 L329,461.5 C329,475.583 317.583,487 303.5,487"></path>
          </g>
      </g>
  </svg>
)