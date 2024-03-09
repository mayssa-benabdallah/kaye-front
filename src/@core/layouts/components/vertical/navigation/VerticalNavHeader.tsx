// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const LinkStyled = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper className="nav-header" sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <LinkStyled href="/" passHref>
          <svg width="200" height="60" viewBox="0 0 376 163" fill="none" xmlns="http://www.w3.org/2000/svg">{/*aspect ratio: 2.306 */}
<path d="M49.1951 26.1571H29.7954V124.82H49.1951V26.1571Z" fill="#FFBA3B"/>
<path d="M117.104 51.44L74.1425 76.9399L121.323 84.5114L125.148 114.488L45.0693 97.4176L41.4077 68.7608L113.277 21.4585L117.104 51.44Z" fill="#FFBA3B"/>
<path d="M182.352 117.425L163.639 62.8198L155.724 121.39L131.581 124.98L148.4 25.735L171.478 22.3015L206.5 113.832L182.352 117.425Z" fill="#FFBA3B"/>
<path d="M217.2 18.4797L237.851 52.9877L235.432 10.017L251.961 2.34412L253.661 75.8854L237.86 83.2205L200.671 26.1492L217.2 18.4797Z" fill="#FFBA3B"/>
<mask id="mask0_57_2207" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="376" height="163">
    <path d="M376 0H0V162.38H376V0Z" fill="white"/>
</mask>

<g mask="url(#mask0_57_2207)">
<path d="M236.151 119.964L247.845 90.3838C247.72 90.1394 253.589 77.2978 253.609 76.93L248.222 56.7763L243.52 56.0707L219.938 117.523L236.151 119.964Z" fill="#FFBA3B"/>
<path d="M275.156 98.6193L331.069 100.989L330.559 119.752L274.646 117.382L275.156 98.6193Z" fill="#FFBA3B"/>
<path d="M274.944 57.1476L330.888 57.6826L330.767 76.4561L274.823 75.9212L274.944 57.1476Z" fill="#FFBA3B"/>
<path d="M12.1466 160.804C11.7432 161.14 11.3047 161.426 10.8396 161.658C10.3444 161.904 9.82242 162.085 9.28527 162.198C8.66108 162.326 8.02611 162.387 7.39015 162.38C6.37998 162.39 5.37842 162.184 4.44634 161.776C3.5667 161.397 2.76856 160.836 2.09919 160.128C1.42983 159.419 0.902848 158.577 0.549471 157.651C0.178431 156.685 -0.00830859 155.652 -0.000157513 154.611V154.568C-0.00945503 153.528 0.17734 152.497 0.549471 151.534C0.906346 150.611 1.42878 149.768 2.08843 149.052C2.76166 148.329 3.56697 147.756 4.45623 147.366C5.42177 146.947 6.45841 146.737 7.50337 146.751C8.12137 146.746 8.73835 146.804 9.34573 146.924C9.86457 147.027 10.3718 147.187 10.8594 147.4C11.3023 147.595 11.7236 147.841 12.1159 148.132C12.497 148.418 12.855 148.736 13.1865 149.083L11.1683 151.524C10.6525 151.026 10.074 150.604 9.44906 150.271C8.83593 149.962 8.16265 149.806 7.48249 149.817C6.90462 149.812 6.33246 149.938 5.80502 150.185C5.29999 150.422 4.84771 150.768 4.47712 151.199C4.103 151.638 3.80968 152.146 3.612 152.698C3.4037 153.281 3.29902 153.9 3.30311 154.524V154.565C3.2996 155.192 3.40425 155.814 3.612 156.402C3.80667 156.956 4.09612 157.468 4.46613 157.914C4.84322 158.361 5.30783 158.718 5.82835 158.961C6.34886 159.203 6.91304 159.325 7.48249 159.318C8.20539 159.341 8.9227 159.178 9.57108 158.842C10.1878 158.488 10.7583 158.053 11.2683 157.546L13.3009 159.684C12.9443 160.089 12.5588 160.464 12.1477 160.807" fill="#FFBA3B"/>
<path d="M40.2332 157.598C39.8571 158.536 39.3078 159.387 38.617 160.102C37.9262 160.818 37.1074 161.382 36.2077 161.764C34.2338 162.585 32.0357 162.585 30.0618 161.764C29.1615 161.378 28.3404 160.814 27.6434 160.102C26.9621 159.402 26.4226 158.564 26.0572 157.64C25.6768 156.679 25.4846 155.647 25.4922 154.607V154.563C25.4845 153.521 25.6806 152.489 26.0682 151.53C26.4442 150.591 26.9934 149.739 27.6842 149.024C28.375 148.309 29.1939 147.744 30.0936 147.362C32.0675 146.541 34.2657 146.541 36.2396 147.362C37.1392 147.749 37.96 148.313 38.658 149.023C39.338 149.725 39.877 150.562 40.2431 151.486C40.6237 152.447 40.8163 153.479 40.8092 154.52V154.563C40.8159 155.605 40.6206 156.638 40.2332 157.598ZM37.4939 154.563C37.4973 153.936 37.3892 153.314 37.1751 152.729C36.9718 152.167 36.664 151.654 36.2698 151.219C35.8756 150.783 35.4027 150.434 34.8787 150.192C34.3277 149.937 33.7311 149.808 33.1287 149.814C32.5245 149.806 31.9254 149.931 31.3699 150.181C30.8546 150.416 30.3918 150.762 30.0112 151.195C29.63 151.633 29.3296 152.141 29.1252 152.694C28.9106 153.276 28.8025 153.895 28.8064 154.519V154.562C28.8031 155.19 28.9112 155.812 29.1252 156.399C29.5371 157.528 30.3589 158.44 31.4106 158.935C31.9642 159.192 32.564 159.321 33.1694 159.313C33.7707 159.319 34.3667 159.194 34.9194 158.945C35.439 158.712 35.9058 158.366 36.2891 157.93C36.6698 157.492 36.9698 156.983 37.174 156.431C37.3887 155.849 37.4968 155.23 37.4928 154.607L37.4939 154.563Z" fill="#FFBA3B"/>
<path d="M68.0252 157.598C67.6491 158.536 67.0998 159.387 66.409 160.102C65.7182 160.818 64.8994 161.382 63.9997 161.764C62.0258 162.585 59.8277 162.585 57.8538 161.764C56.9535 161.378 56.1324 160.814 55.4354 160.102C54.7541 159.402 54.2146 158.564 53.8492 157.64C53.4688 156.679 53.2766 155.647 53.2841 154.607V154.563C53.2776 153.521 53.4747 152.489 53.8635 151.53C54.2394 150.591 54.7887 149.739 55.4795 149.024C56.1703 148.309 56.9892 147.744 57.8889 147.362C59.8628 146.541 62.061 146.541 64.0349 147.362C64.9345 147.749 65.7553 148.313 66.4533 149.023C67.1333 149.725 67.6723 150.562 68.0384 151.486C68.419 152.447 68.6115 153.479 68.6045 154.52V154.563C68.6112 155.605 68.4148 156.638 68.0274 157.598M65.2891 154.563C65.2926 153.936 65.1845 153.314 64.9704 152.729C64.767 152.167 64.4593 151.654 64.0651 151.219C63.6709 150.783 63.198 150.434 62.674 150.192C62.123 149.937 61.5263 149.808 60.924 149.814C60.3198 149.806 59.7207 149.931 59.1652 150.181C58.6499 150.416 58.1871 150.762 57.8065 151.195C57.4253 151.633 57.1249 152.141 56.9205 152.694C56.7059 153.276 56.5977 153.895 56.6017 154.519V154.562C56.5983 155.19 56.7064 155.812 56.9205 156.399C57.3324 157.528 58.1542 158.44 59.2058 158.935C59.7595 159.192 60.3593 159.321 60.9647 159.313C61.566 159.319 62.1619 159.194 62.7147 158.945C63.2343 158.712 63.7011 158.366 64.0844 157.93C64.4651 157.492 64.7651 156.983 64.9693 156.431C65.1839 155.849 65.2921 155.23 65.288 154.607L65.2891 154.563Z" fill="#FFBA3B"/>
<path d="M81.7175 162.122V147.002H84.8889V159.118H92.0736V162.116L81.7175 162.122Z" fill="#FFBA3B"/>
<path d="M133.079 159.79C132.824 160.31 132.449 160.755 131.989 161.086C131.47 161.452 130.892 161.716 130.283 161.864C129.559 162.043 128.817 162.13 128.074 162.122H121.229V147.002H127.908C129.15 146.927 130.38 147.301 131.391 148.062C131.802 148.399 132.13 148.832 132.35 149.328C132.57 149.824 132.674 150.367 132.655 150.913V150.955C132.662 151.342 132.61 151.729 132.503 152.1C132.407 152.417 132.269 152.719 132.092 152.995C131.927 153.257 131.728 153.494 131.5 153.699C131.276 153.898 131.033 154.071 130.774 154.216C131.526 154.49 132.201 154.954 132.741 155.566C133.251 156.234 133.507 157.076 133.459 157.93V157.974C133.472 158.602 133.342 159.223 133.079 159.787M129.527 151.473C129.538 151.25 129.494 151.026 129.401 150.825C129.307 150.623 129.166 150.45 128.991 150.321C128.53 150.024 127.993 149.884 127.453 149.919H124.323V153.113H127.247C127.824 153.142 128.399 153.011 128.913 152.735C129.115 152.613 129.28 152.433 129.389 152.218C129.499 152.002 129.548 151.759 129.532 151.515L129.527 151.473ZM130.329 157.521C130.337 157.288 130.29 157.058 130.193 156.849C130.096 156.64 129.952 156.459 129.773 156.322C129.235 155.98 128.609 155.825 127.982 155.879H124.317V159.204H128.085C128.659 159.236 129.231 159.098 129.733 158.805C129.93 158.673 130.089 158.488 130.193 158.27C130.298 158.051 130.346 157.807 130.33 157.563L130.329 157.521Z" fill="#FFBA3B"/>
<path d="M160.492 157.598C160.116 158.536 159.567 159.387 158.876 160.102C158.185 160.818 157.366 161.382 156.466 161.764C154.493 162.585 152.294 162.585 150.321 161.764C149.42 161.378 148.599 160.813 147.902 160.102C147.221 159.402 146.682 158.564 146.317 157.64C145.936 156.679 145.744 155.648 145.751 154.607V154.563C145.744 153.521 145.94 152.489 146.327 151.53C146.702 150.602 147.245 149.759 147.924 149.046C148.619 148.321 149.445 147.749 150.354 147.362C152.327 146.541 154.526 146.541 156.499 147.362C157.399 147.749 158.22 148.313 158.918 149.023C159.599 149.724 160.138 150.562 160.504 151.486C160.885 152.447 161.078 153.479 161.071 154.52V154.563C161.078 155.605 160.881 156.638 160.492 157.598ZM157.754 154.563C157.758 153.936 157.65 153.314 157.435 152.729C157.232 152.168 156.924 151.654 156.53 151.219C156.136 150.783 155.663 150.434 155.14 150.192C154.588 149.937 153.991 149.808 153.389 149.814C152.784 149.807 152.185 149.931 151.63 150.181C151.115 150.417 150.652 150.762 150.271 151.195C149.891 151.633 149.591 152.142 149.386 152.694C149.172 153.276 149.064 153.895 149.068 154.519V154.562C149.065 155.189 149.173 155.812 149.386 156.399C149.798 157.528 150.62 158.44 151.672 158.935C152.225 159.192 152.825 159.321 153.43 159.313C154.032 159.319 154.628 159.194 155.18 158.945C155.7 158.712 156.166 158.366 156.549 157.93C156.931 157.493 157.232 156.984 157.435 156.431C157.65 155.849 157.758 155.231 157.754 154.607V154.563Z" fill="#FFBA3B"/>
<path d="M188.287 157.598C187.911 158.536 187.361 159.387 186.67 160.102C185.98 160.818 185.161 161.382 184.261 161.764C182.287 162.585 180.089 162.585 178.115 161.764C177.215 161.378 176.394 160.813 175.697 160.102C175.016 159.402 174.477 158.564 174.112 157.64C173.731 156.679 173.538 155.648 173.546 154.607V154.563C173.539 153.521 173.735 152.489 174.122 151.53C174.497 150.602 175.039 149.759 175.719 149.046C176.414 148.321 177.24 147.749 178.148 147.362C180.122 146.541 182.32 146.541 184.294 147.362C185.194 147.749 186.015 148.313 186.713 149.023C187.393 149.724 187.933 150.562 188.299 151.486C188.68 152.447 188.873 153.479 188.866 154.52V154.563C188.873 155.605 188.675 156.638 188.287 157.598ZM185.549 154.563C185.553 153.936 185.445 153.314 185.231 152.729C185.027 152.168 184.72 151.654 184.326 151.219C183.932 150.783 183.459 150.434 182.935 150.192C182.384 149.937 181.787 149.808 181.184 149.814C180.58 149.807 179.981 149.931 179.426 150.181C178.911 150.417 178.448 150.762 178.067 151.195C177.686 151.633 177.386 152.142 177.182 152.694C176.968 153.276 176.86 153.895 176.864 154.519V154.562C176.861 155.189 176.968 155.812 177.182 156.399C177.594 157.528 178.416 158.44 179.467 158.935C180.021 159.192 180.621 159.321 181.226 159.313C181.827 159.319 182.423 159.194 182.976 158.945C183.496 158.712 183.962 158.366 184.345 157.93C184.727 157.493 185.027 156.984 185.231 156.431C185.446 155.849 185.554 155.231 185.549 154.607V154.563Z" fill="#FFBA3B"/>
<path d="M211.285 162.122L206.818 155.686L205.151 157.499V162.122H201.979V147.002H205.151V153.612L210.997 147.002H214.827L208.959 153.417L215.095 162.119L211.285 162.122Z" fill="#FFBA3B"/>
<path d="M230.619 147.004H227.447V162.122H230.619V147.004Z" fill="#FFBA3B"/>
<path d="M254.627 162.122L247.646 152.512V162.122H244.517V147.002H247.443L254.198 156.311V147.002H257.326V162.119L254.627 162.122Z" fill="#FFBA3B"/>
<path d="M281.52 161.679C280.409 162.165 279.214 162.404 278.01 162.38C276.959 162.397 275.914 162.201 274.932 161.804C274.041 161.437 273.229 160.886 272.545 160.183C271.872 159.482 271.342 158.645 270.989 157.721C270.611 156.732 270.422 155.674 270.433 154.608V154.565C270.42 153.028 270.844 151.521 271.651 150.239C272.458 148.956 273.612 147.955 274.964 147.363C275.922 146.945 276.952 146.736 277.989 146.748C278.578 146.743 279.167 146.79 279.748 146.888C280.249 146.975 280.742 147.108 281.22 147.287C281.666 147.456 282.094 147.674 282.496 147.936C282.902 148.2 283.287 148.496 283.649 148.822L281.652 151.347C281.391 151.113 281.116 150.897 280.83 150.7C280.559 150.515 280.273 150.355 279.975 150.224C279.665 150.091 279.344 149.99 279.016 149.922C278.643 149.847 278.264 149.811 277.885 149.814C277.326 149.811 276.773 149.94 276.268 150.193C275.772 150.442 275.324 150.787 274.949 151.21C274.569 151.647 274.27 152.155 274.069 152.708C273.854 153.292 273.746 153.913 273.751 154.538V154.58C273.743 155.233 273.852 155.883 274.069 156.496C274.272 157.063 274.58 157.582 274.976 158.022C275.365 158.454 275.834 158.796 276.355 159.028C276.911 159.272 277.51 159.394 278.114 159.385C279.176 159.422 280.221 159.102 281.098 158.473V156.297H277.91V153.425H284.168V159.989C283.371 160.689 282.48 161.26 281.522 161.685" fill="#FFBA3B"/>
<path d="M324.711 162.122L323.392 158.732H317.298L315.978 162.122H312.747L318.922 146.897H321.846L328.024 162.122H324.711ZM320.346 150.892L318.431 155.795H322.261L320.346 150.892Z" fill="#FFBA3B"/>
<path d="M351.498 154.585C351.208 155.232 350.782 155.801 350.252 156.249C349.703 156.707 349.074 157.047 348.4 157.252C347.661 157.481 346.895 157.594 346.124 157.589H343.716V162.122H340.55V147.002H346.44C347.226 146.99 348.009 147.118 348.755 147.38C349.395 147.609 349.983 147.973 350.484 148.45C350.958 148.911 351.331 149.475 351.575 150.102C351.836 150.778 351.966 151.501 351.957 152.23V152.274C351.973 153.068 351.818 153.856 351.503 154.579M348.745 152.291C348.765 151.97 348.713 151.648 348.593 151.352C348.473 151.055 348.289 150.793 348.055 150.584C347.51 150.168 346.845 149.962 346.172 150.001H343.716V154.623H346.228C346.904 154.667 347.57 154.43 348.081 153.964C348.294 153.756 348.463 153.504 348.577 153.223C348.691 152.942 348.746 152.64 348.741 152.335L348.745 152.291Z" fill="#FFBA3B"/>
<path d="M375.546 154.585C375.257 155.232 374.831 155.801 374.301 156.249C373.751 156.707 373.122 157.047 372.448 157.252C371.71 157.481 370.943 157.594 370.173 157.589H367.764V162.122H364.593V147.002H370.483C371.269 146.99 372.052 147.118 372.798 147.38C373.438 147.609 374.026 147.974 374.527 148.45C375.001 148.911 375.374 149.475 375.617 150.102C375.879 150.778 376.009 151.501 376 152.23V152.274C376.016 153.068 375.861 153.856 375.546 154.579M372.788 152.291C372.808 151.97 372.756 151.648 372.636 151.352C372.516 151.055 372.332 150.793 372.098 150.584C371.553 150.168 370.888 149.961 370.215 150.001H367.764V154.623H370.276C370.953 154.667 371.618 154.43 372.13 153.964C372.343 153.756 372.512 153.504 372.625 153.223C372.739 152.942 372.795 152.64 372.789 152.335L372.788 152.291Z" fill="#FFBA3B"/>
<path d="M288.153 28.7421L291.265 110.348L274.733 116.92L270.837 18.4796L288.153 28.7421Z" fill="#FFBA3B"/>
<path d="M332.926 19.1114L331.27 0L298.512 9.41735V9.42311L314.926 4.70406L312.782 10.7225L319.123 12.1187L315.953 17.9907H320.475L319.959 22.5115L332.926 19.1114Z" fill="#FFBA3B"/>
<path d="M312.969 19.3927L316.139 13.5219L309.799 12.1245L311.942 6.10144L295.531 10.8205L270.271 18.0841L273.646 36.3792L316.975 23.9215V23.9158L317.491 19.3939L312.969 19.3927Z" fill="#FFBA3B"/>
</g>
</svg>


          <HeaderTitle variant="h6" sx={{ ml: 3 }}>
            {/*themeConfig.templateName*/}
          </HeaderTitle>
        </LinkStyled>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
