import React from "react";
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    Filter,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask
} from 'react-native-svg';
import { View, Dimensions, Platform } from 'react-native';
import { Colors } from "../../theme/colors";
const totalWidth =Dimensions.get('window').width;


export const InvertedCommaIcon = ({...props}) => ( 
    <Svg width="52" height="36" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M12.48 35.712C9.6 35.712 7.232 35.072 5.376 33.792C3.52 32.512 2.144 30.848 1.248 28.8C0.416 26.752 0 24.608 0 22.368C0 18.912 0.8 15.68 2.4 12.672C4 9.6 5.952 6.976 8.256 4.8C10.624 2.56 12.96 0.960003 15.264 0L23.616 5.664C21.888 6.496 20.192 7.456 18.528 8.544C16.864 9.632 15.36 10.816 14.016 12.096C12.672 13.376 11.616 14.688 10.848 16.032L11.328 16.416C11.84 16.096 12.352 15.872 12.864 15.744C13.44 15.616 14.176 15.552 15.072 15.552C16.48 15.552 17.888 15.904 19.296 16.608C20.704 17.248 21.888 18.24 22.848 19.584C23.808 20.928 24.288 22.624 24.288 24.672C24.288 27.232 23.712 29.344 22.56 31.008C21.472 32.608 20.032 33.792 18.24 34.56C16.448 35.328 14.528 35.712 12.48 35.712ZM39.648 35.712C36.768 35.712 34.4 35.072 32.544 33.792C30.688 32.512 29.312 30.848 28.416 28.8C27.584 26.752 27.168 24.608 27.168 22.368C27.168 18.912 27.968 15.68 29.568 12.672C31.168 9.6 33.12 6.976 35.424 4.8C37.792 2.56 40.128 0.960003 42.432 0L50.784 5.664C49.056 6.496 47.36 7.456 45.696 8.544C44.032 9.632 42.528 10.816 41.184 12.096C39.84 13.376 38.784 14.688 38.016 16.032L38.496 16.416C39.008 16.096 39.52 15.872 40.032 15.744C40.608 15.616 41.344 15.552 42.24 15.552C43.648 15.552 45.056 15.904 46.464 16.608C47.872 17.248 49.056 18.24 50.016 19.584C50.976 20.928 51.456 22.624 51.456 24.672C51.456 27.232 50.88 29.344 49.728 31.008C48.64 32.608 47.2 33.792 45.408 34.56C43.616 35.328 41.696 35.712 39.648 35.712Z" fill="#DDDCE1"/>
    </Svg>
);

export const DropdownArrowIcon = ({...props}) => (  
    <Svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.6743 2.05239L8.54307 9.75654C8.24288 10.0812 7.7579 10.0812 7.45693 9.75654L0.325723 2.05239C-0.108575 1.58378 -0.108575 0.821355 0.325723 0.351914C0.76002 -0.116694 1.46488 -0.116694 1.89917 0.351914L8.00039 6.94239L14.1 0.351914C14.5351 -0.116694 15.24 -0.116694 15.6743 0.351914C16.1086 0.821354 16.1086 1.58378 15.6743 2.05239Z" fill="#333333"/>
    </Svg>
);

export const CarouselStepOneIcon = ({...props}) => (   
    <Svg width="202" height="4" viewBox="0 0 202 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect width="60" height="4" rx="2" fill="#333333"/>
        <Rect x="71" width="60" height="4" rx="2" fill="#DDDCE1"/>
        <Rect x="142" width="60" height="4" rx="2" fill="#DDDCE1"/>
    </Svg>
);

export const CarouselStepTwoIcon = ({...props}) => (   
    <Svg width="202" height="4" viewBox="0 0 202 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect width="60" height="4" rx="2" fill="#DDDCE1"/>
        <Rect x="71" width="60" height="4" rx="2" fill="#333333"/>
        <Rect x="142" width="60" height="4" rx="2" fill="#DDDCE1"/>
    </Svg>
);

export const PasswordStrengthIcon = ({...props}) => (  
    <Svg width="342" height="7" viewBox="0 0 342 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect width="77.1429" height="7" rx="3.5" fill="#DDDCE1"/>
        <Rect x="88.1429" width="77.1429" height="7" rx="3.5" fill="#DDDCE1"/>
        <Rect x="176.286" width="77.1429" height="7" rx="3.5" fill="#DDDCE1"/>
        <Rect x="264.429" width="77.1429" height="7" rx="3.5" fill="#DDDCE1"/>
    </Svg>
);
export const BackIcon = ({...props}) => (   
    <Svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.53714 20.5827L0.292152 11.4458C-0.097384 11.0612 -0.097384 10.4398 0.292152 10.0542L9.53714 0.917333C10.0995 0.360889 11.0144 0.360889 11.5777 0.917333C12.14 1.47378 12.14 2.37687 11.5777 2.93332L3.66913 10.7505L11.5777 18.5657C12.14 19.1231 12.14 20.0262 11.5777 20.5827C11.0144 21.1391 10.0995 21.1391 9.53714 20.5827Z" fill="#333333"/>
    </Svg>
);

export const PercentIcon = ({...props}) => (    
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.3999C4.67452 2.3999 3.6 3.47442 3.6 4.7999V21.5999L7.8 19.1999L12 21.5999L16.2 19.1999L20.4 21.5999V4.7999C20.4 3.47442 19.3255 2.3999 18 2.3999H6ZM9 5.9999C8.00589 5.9999 7.2 6.80579 7.2 7.7999C7.2 8.79402 8.00589 9.5999 9 9.5999C9.99411 9.5999 10.8 8.79402 10.8 7.7999C10.8 6.80579 9.99411 5.9999 9 5.9999ZM16.4485 6.35137C15.9799 5.88275 15.2201 5.88275 14.7515 6.35137L7.55147 13.5514C7.08284 14.02 7.08284 14.7798 7.55147 15.2484C8.0201 15.7171 8.7799 15.7171 9.24853 15.2484L16.4485 8.04843C16.9172 7.5798 16.9172 6.82 16.4485 6.35137ZM15 11.9999C14.0059 11.9999 13.2 12.8058 13.2 13.7999C13.2 14.794 14.0059 15.5999 15 15.5999C15.9941 15.5999 16.8 14.794 16.8 13.7999C16.8 12.8058 15.9941 11.9999 15 11.9999Z" fill="red"/>
    </Svg>
);

export const ShoppingCartIcon = ({...props}) => (    
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const ShoppingCartBlackIcon = ({...props}) => (    
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);


export const HeartIcon = ({...props}) => (    
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const HeartBlackIcon = ({...props}) => (    
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M4.31802 6.31802C2.56066 8.07538 2.56066 10.9246 4.31802 12.682L12.0001 20.364L19.682 12.682C21.4393 10.9246 21.4393 8.07538 19.682 6.31802C17.9246 4.56066 15.0754 4.56066 13.318 6.31802L12.0001 7.63609L10.682 6.31802C8.92462 4.56066 6.07538 4.56066 4.31802 6.31802Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const PlusWhiteIcon = ({...props}) => (   
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 0.25C13.4665 0.25 14.25 1.0335 14.25 2V10.75H23C23.9665 10.75 24.75 11.5335 24.75 12.5C24.75 13.4665 23.9665 14.25 23 14.25H14.25V23C14.25 23.9665 13.4665 24.75 12.5 24.75C11.5335 24.75 10.75 23.9665 10.75 23V14.25H2C1.0335 14.25 0.25 13.4665 0.25 12.5C0.25 11.5335 1.0335 10.75 2 10.75L10.75 10.75V2C10.75 1.0335 11.5335 0.25 12.5 0.25Z" fill="white"/>
    </Svg>
);

export const ProductHighlightIcon = ({...props}) => (   
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M3.50002 0.899902C2.06408 0.899902 0.900024 2.06396 0.900024 3.4999V6.0999C0.900024 7.53584 2.06408 8.6999 3.50002 8.6999H6.10002C7.53596 8.6999 8.70002 7.53584 8.70002 6.0999V3.4999C8.70002 2.06396 7.53596 0.899902 6.10002 0.899902H3.50002Z" fill="#333333"/>
        <Path d="M3.50002 11.2999C2.06408 11.2999 0.900024 12.464 0.900024 13.8999V16.4999C0.900024 17.9358 2.06408 19.0999 3.50002 19.0999H6.10002C7.53596 19.0999 8.70002 17.9358 8.70002 16.4999V13.8999C8.70002 12.464 7.53596 11.2999 6.10002 11.2999H3.50002Z" fill="#333333"/>
        <Path d="M11.3 3.4999C11.3 2.06396 12.4641 0.899902 13.9 0.899902H16.5C17.936 0.899902 19.1 2.06396 19.1 3.4999V6.0999C19.1 7.53584 17.936 8.6999 16.5 8.6999H13.9C12.4641 8.6999 11.3 7.53584 11.3 6.0999V3.4999Z" fill="#333333"/>
        <Path d="M11.3 13.8999C11.3 12.464 12.4641 11.2999 13.9 11.2999H16.5C17.936 11.2999 19.1 12.464 19.1 13.8999V16.4999C19.1 17.9358 17.936 19.0999 16.5 19.0999H13.9C12.4641 19.0999 11.3 17.9358 11.3 16.4999V13.8999Z" fill="#333333"/>
    </Svg>
);

export const ProductGreyIcon = ({...props}) => (   
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M3.50002 0.899902C2.06408 0.899902 0.900024 2.06396 0.900024 3.4999V6.0999C0.900024 7.53584 2.06408 8.6999 3.50002 8.6999H6.10002C7.53596 8.6999 8.70002 7.53584 8.70002 6.0999V3.4999C8.70002 2.06396 7.53596 0.899902 6.10002 0.899902H3.50002Z" fill="#7E7E7E"/>
        <Path d="M3.50002 11.2999C2.06408 11.2999 0.900024 12.464 0.900024 13.8999V16.4999C0.900024 17.9358 2.06408 19.0999 3.50002 19.0999H6.10002C7.53596 19.0999 8.70002 17.9358 8.70002 16.4999V13.8999C8.70002 12.464 7.53596 11.2999 6.10002 11.2999H3.50002Z" fill="#7E7E7E"/>
        <Path d="M11.3 3.4999C11.3 2.06396 12.4641 0.899902 13.9 0.899902H16.5C17.936 0.899902 19.1 2.06396 19.1 3.4999V6.0999C19.1 7.53584 17.936 8.6999 16.5 8.6999H13.9C12.4641 8.6999 11.3 7.53584 11.3 6.0999V3.4999Z" fill="#7E7E7E"/>
        <Path d="M11.3 13.8999C11.3 12.464 12.4641 11.2999 13.9 11.2999H16.5C17.936 11.2999 19.1 12.464 19.1 13.8999V16.4999C19.1 17.9358 17.936 19.0999 16.5 19.0999H13.9C12.4641 19.0999 11.3 17.9358 11.3 16.4999V13.8999Z" fill="#7E7E7E"/>
    </Svg>
);

export const SearchHighlightIcon = ({...props}) => (   
    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.1 2.7999C5.44904 2.7999 3.30002 4.94894 3.30002 7.5999C3.30002 10.2509 5.44904 12.3999 8.1 12.3999C10.751 12.3999 12.9 10.2509 12.9 7.5999C12.9 4.94894 10.751 2.7999 8.1 2.7999ZM0.900024 7.5999C0.900024 3.62345 4.12356 0.399902 8.1 0.399902C12.0764 0.399902 15.3 3.62345 15.3 7.5999C15.3 9.1549 14.807 10.5948 13.9689 11.7717L19.7485 17.5514C20.2171 18.02 20.2171 18.7798 19.7485 19.2484C19.2799 19.7171 18.5201 19.7171 18.0514 19.2484L12.2718 13.4688C11.0949 14.307 9.65499 14.7999 8.1 14.7999C4.12356 14.7999 0.900024 11.5764 0.900024 7.5999Z" fill="#333333"/>
    </Svg>
);

export const SearchGreyIcon = ({...props}) => (   
    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M8.1 2.7999C5.44904 2.7999 3.30002 4.94894 3.30002 7.5999C3.30002 10.2509 5.44904 12.3999 8.1 12.3999C10.751 12.3999 12.9 10.2509 12.9 7.5999C12.9 4.94894 10.751 2.7999 8.1 2.7999ZM0.900024 7.5999C0.900024 3.62345 4.12356 0.399902 8.1 0.399902C12.0764 0.399902 15.3 3.62345 15.3 7.5999C15.3 9.1549 14.807 10.5948 13.9689 11.7717L19.7485 17.5514C20.2171 18.02 20.2171 18.7798 19.7485 19.2484C19.2799 19.7171 18.5201 19.7171 18.0514 19.2484L12.2718 13.4688C11.0949 14.307 9.65499 14.7999 8.1 14.7999C4.12356 14.7999 0.900024 11.5764 0.900024 7.5999Z" fill="#7E7E7E"/>
    </Svg>
);

export const ProfileHighlightIcon = ({...props}) => (   
    <Svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M14.25 5.875C14.25 8.36028 12.2353 10.375 9.75 10.375C7.26472 10.375 5.25 8.36028 5.25 5.875C5.25 3.38972 7.26472 1.375 9.75 1.375C12.2353 1.375 14.25 3.38972 14.25 5.875Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M9.75 13.75C5.40076 13.75 1.875 17.2758 1.875 21.625H17.625C17.625 17.2758 14.0992 13.75 9.75 13.75Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const ProfileGreyIcon = ({...props}) => (   
    <Svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M14.25 5.875C14.25 8.36028 12.2353 10.375 9.75 10.375C7.26472 10.375 5.25 8.36028 5.25 5.875C5.25 3.38972 7.26472 1.375 9.75 1.375C12.2353 1.375 14.25 3.38972 14.25 5.875Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M9.75 13.75C5.40076 13.75 1.875 17.2758 1.875 21.625H17.625C17.625 17.2758 14.0992 13.75 9.75 13.75Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const CrossIcon = ({...props}) => (   
    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.65418 0.653936C1.25949 0.048623 2.2409 0.048623 2.84621 0.653936L9.50019 7.30792L16.1542 0.653936C16.7595 0.048623 17.7409 0.048623 18.3462 0.653936C18.9515 1.25925 18.9515 2.24065 18.3462 2.84597L11.6922 9.49995L18.3462 16.1539C18.9515 16.7592 18.9515 17.7407 18.3462 18.346C17.7409 18.9513 16.7595 18.9513 16.1542 18.346L9.50019 11.692L2.84621 18.346C2.2409 18.9513 1.25949 18.9513 0.65418 18.346C0.0488671 17.7407 0.0488671 16.7592 0.65418 16.1539L7.30816 9.49995L0.65418 2.84597C0.0488671 2.24065 0.0488671 1.25925 0.65418 0.653936Z" fill="#111827"/>
    </Svg>
);

export const DeleteIcon = ({...props}) => (  
    <Svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.65502 0.899902C9.07455 0.899902 8.5439 1.21021 8.2843 1.70144L7.17537 3.7999H1.99247C1.14609 3.7999 0.459961 4.44909 0.459961 5.2499C0.459961 6.05072 1.14609 6.6999 1.99247 6.6999L1.99247 21.1999C1.99247 22.8015 3.36473 24.0999 5.05749 24.0999H17.3176C19.0103 24.0999 20.3826 22.8015 20.3826 21.1999V6.6999C21.229 6.6999 21.9151 6.05072 21.9151 5.2499C21.9151 4.44909 21.229 3.7999 20.3826 3.7999H15.1997L14.0908 1.70144C13.8312 1.21021 13.3005 0.899902 12.72 0.899902H9.65502ZM6.59 9.5999C6.59 8.79909 7.27613 8.1499 8.12251 8.1499C8.96889 8.1499 9.65502 8.79909 9.65502 9.5999V18.2999C9.65502 19.1007 8.96889 19.7499 8.12251 19.7499C7.27613 19.7499 6.59 19.1007 6.59 18.2999V9.5999ZM14.2525 8.1499C13.4062 8.1499 12.72 8.79909 12.72 9.5999V18.2999C12.72 19.1007 13.4062 19.7499 14.2525 19.7499C15.0989 19.7499 15.7851 19.1007 15.7851 18.2999V9.5999C15.7851 8.79909 15.0989 8.1499 14.2525 8.1499Z" fill="#B7323B"/>
    </Svg>
);

export const CouponCorrectIcon = ({...props}) => (  
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="11.5624" cy="12.4364" r="11.5624" fill="#7BA986"/>
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.1007 8.54805C17.4233 8.87057 17.4233 9.39349 17.1007 9.71602L10.4937 16.3231C10.1711 16.6456 9.64823 16.6456 9.3257 16.3231L6.02217 13.0196C5.69964 12.697 5.69964 12.1741 6.02217 11.8516C6.3447 11.5291 6.86762 11.5291 7.19014 11.8516L9.90969 14.5711L15.9328 8.54805C16.2553 8.22552 16.7782 8.22552 17.1007 8.54805Z" fill="white"/>
    </Svg>
);

export const ProductHomeHighlightIcon = ({...props}) => (  
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.5523 3.44772 19 4 19H7M17 8L19 10M17 8V18C17 18.5523 16.5523 19 16 19H13M7 19C7.55228 19 8 18.5523 8 18V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V18C12 18.5523 12.4477 19 13 19M7 19H13" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const ProductHomeGreyIcon = ({...props}) => (  
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.5523 3.44772 19 4 19H7M17 8L19 10M17 8V18C17 18.5523 16.5523 19 16 19H13M7 19C7.55228 19 8 18.5523 8 18V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V18C12 18.5523 12.4477 19 13 19M7 19H13" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const ProductGlobeHighlightIcon = ({...props}) => (  
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M1.05493 9H3C4.10457 9 5 9.89543 5 11V12C5 13.1046 5.89543 14 7 14C8.10457 14 9 14.8954 9 16V18.9451M6 1.93552V3.5C6 4.88071 7.11929 6 8.5 6H9C10.1046 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 15.8954 6 17 6L18.0645 6M13 18.4879V16C13 14.8954 13.8954 14 15 14H18.0645M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const ProductGlobeGreyIcon = ({...props}) => (  
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M1.05493 9H3C4.10457 9 5 9.89543 5 11V12C5 13.1046 5.89543 14 7 14C8.10457 14 9 14.8954 9 16V18.9451M6 1.93552V3.5C6 4.88071 7.11929 6 8.5 6H9C10.1046 6 11 6.89543 11 8C11 9.10457 11.8954 10 13 10C14.1046 10 15 9.10457 15 8C15 6.89543 15.8954 6 17 6L18.0645 6M13 18.4879V16C13 14.8954 13.8954 14 15 14H18.0645M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const ProductCommentsHighlightIcon = ({...props}) => (  
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M15 5H17C18.1046 5 19 5.89543 19 7V13C19 14.1046 18.1046 15 17 15H15V19L11 15H7C6.44772 15 5.94772 14.7761 5.58579 14.4142M5.58579 14.4142L9 11H13C14.1046 11 15 10.1046 15 9V3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H5V15L5.58579 14.4142Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const ProductCommentsGreyIcon = ({...props}) => (  
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M15 5H17C18.1046 5 19 5.89543 19 7V13C19 14.1046 18.1046 15 17 15H15V19L11 15H7C6.44772 15 5.94772 14.7761 5.58579 14.4142M5.58579 14.4142L9 11H13C14.1046 11 15 10.1046 15 9V3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H5V15L5.58579 14.4142Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const ProductMapHighlightIcon = ({...props}) => (  
    <Svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M14.6569 14.6569C13.7202 15.5935 11.7616 17.5521 10.4138 18.8999C9.63275 19.681 8.36768 19.6814 7.58663 18.9003C6.26234 17.576 4.34159 15.6553 3.34315 14.6569C0.218951 11.5327 0.218951 6.46734 3.34315 3.34315C6.46734 0.218951 11.5327 0.218951 14.6569 3.34315C17.781 6.46734 17.781 11.5327 14.6569 14.6569Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const ProductMapGreyIcon = ({...props}) => (  
    <Svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M14.6569 14.6569C13.7202 15.5935 11.7616 17.5521 10.4138 18.8999C9.63275 19.681 8.36768 19.6814 7.58663 18.9003C6.26234 17.576 4.34159 15.6553 3.34315 14.6569C0.218951 11.5327 0.218951 6.46734 3.34315 3.34315C6.46734 0.218951 11.5327 0.218951 14.6569 3.34315C17.781 6.46734 17.781 11.5327 14.6569 14.6569Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);

export const DownloadIcon = ({...props}) => (       
    <Svg width="29" height="39" viewBox="0 0 29 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.0999 0.700195C2.50416 0.700195 0.399902 2.80446 0.399902 5.4002V33.6002C0.399902 36.1959 2.50416 38.3002 5.0999 38.3002H23.8999C26.4956 38.3002 28.5999 36.1959 28.5999 33.6002V13.4236C28.5999 12.1771 28.1047 10.9816 27.2233 10.1002L19.1999 2.07679C18.3185 1.19537 17.123 0.700195 15.8765 0.700195H5.0999ZM16.8499 14.8002C16.8499 13.5023 15.7978 12.4502 14.4999 12.4502C13.202 12.4502 12.1499 13.5023 12.1499 14.8002V23.2268L9.1116 20.1885C8.19387 19.2708 6.70593 19.2708 5.7882 20.1885C4.87047 21.1062 4.87047 22.5942 5.7882 23.5119L12.8382 30.5619C13.7559 31.4796 15.2439 31.4796 16.1616 30.5619L23.2116 23.5119C24.1293 22.5942 24.1293 21.1062 23.2116 20.1885C22.2939 19.2708 20.8059 19.2708 19.8882 20.1885L16.8499 23.2268V14.8002Z" fill="#999999"/>
    </Svg>
);

export const CameraIcon = ({...props}) => (       
    <Svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M1.125 8.375C1.125 6.85622 2.35622 5.625 3.875 5.625H5.15324C6.07272 5.625 6.93135 5.16547 7.44138 4.40043L8.55862 2.72457C9.06865 1.95953 9.92728 1.5 10.8468 1.5H16.1532C17.0727 1.5 17.9314 1.95953 18.4414 2.72457L19.5586 4.40043C20.0686 5.16547 20.9273 5.625 21.8468 5.625H23.125C24.6438 5.625 25.875 6.85622 25.875 8.375V20.75C25.875 22.2688 24.6438 23.5 23.125 23.5H3.875C2.35622 23.5 1.125 22.2688 1.125 20.75V8.375Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M17.625 13.875C17.625 16.1532 15.7782 18 13.5 18C11.2218 18 9.375 16.1532 9.375 13.875C9.375 11.5968 11.2218 9.75 13.5 9.75C15.7782 9.75 17.625 11.5968 17.625 13.875Z" stroke="#7E7E7E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
);






















  
  
  
  
  



  

  

  
  
  