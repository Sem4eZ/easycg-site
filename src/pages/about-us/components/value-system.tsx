import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceObj } from 'shared/theme'
import { XLFont } from 'shared/ui/typography'

export const AboutUsPageValueStystem = () => {
  return (
    <Container>
      <Title>it’s our value system</Title>
      <SystemContainer>
        <div className="container">
          <Center />

          <DigitalEthicsOrbit>
            <DigitalEthicsPlanet>
              <DigitalEthicsText>digital ethics</DigitalEthicsText>
            </DigitalEthicsPlanet>
          </DigitalEthicsOrbit>

          <EasySolutionsOrbit>
            <EasySolutionsPlanet>
              <EasySolutionsText>easy communication</EasySolutionsText>
            </EasySolutionsPlanet>
          </EasySolutionsOrbit>

          <DreamsAndFeelingOrbit>
            <DreamsAndFeelingPlanet>
              <DreamsAndFeelingText>effective solutions</DreamsAndFeelingText>
            </DreamsAndFeelingPlanet>
          </DreamsAndFeelingOrbit>

          <MinimalistOrbit>
            <MinimalistPlanet>
              <MinimalistText>social responsibility</MinimalistText>
            </MinimalistPlanet>
          </MinimalistOrbit>

          <FriendlyOrbit>
            <FriendlyPlanet>
              <FriendlyText>friendship & support</FriendlyText>
            </FriendlyPlanet>
          </FriendlyOrbit>

          <BigLoveOrbit>
            <BigLovePlanet>
              <BigLoveText>big love</BigLoveText>
            </BigLovePlanet>
          </BigLoveOrbit>
        </div>
      </SystemContainer>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    paddingBottom: [0, null, null, null, null, null, 200, null, 198],
    marginBottom: [56, 60, 0, 122, 118, null, 111, null, 184, 200],
    marginTop: [41, 57, 41, 177, 165, null, 137, null, 187, 234],
    borderBottom: [
      'unset',
      null,
      null,
      null,
      null,
      null,
      `2px solid ${theme.palette.text.secondary}`,
    ],
  }),
}))

const Title = styled(XLFont)(({ theme }) => ({
  marginRight: 0,
  marginLeft: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: [
      spaceObj.se,
      spaceObj.se_horizontal,
      spaceObj.ip13,
      spaceObj.ip13_horizontal,
      0,
    ],
    paddingRight: [
      spaceObj.se,
      spaceObj.se_horizontal,
      spaceObj.ip13,
      spaceObj.ip13_horizontal,
      0,
    ],
    width: [
      '100%',
      null,
      null,
      null,
      '561px',
      '640px',
      '864px',
      null,
      '1077px',
      '1087px',
    ],
    marginBottom: [80, null, null, null, null, null, 147, null, 115],
    borderTop: [
      'unset',
      null,
      null,
      null,
      null,
      null,
      `2px solid ${theme.palette.text.secondary}`,
    ],
  }),
}))

const SystemContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    width: [261, null, 327, null, null, null, 804],
    height: [261, null, 327, null, null, null, 804],
  }),
}))

const Center = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.text.primary,
  borderRadius: '50%',
  ...getBreakpointsStylesByArray(theme, {
    height: [7.79, null, 9.76, null, null, null, 24],
    width: [7.79, null, 9.76, null, null, null, 24],
  }),
}))

const Planet = styled('div')(({ theme }) => ({
  position: 'absolute',
  backgroundColor: theme.palette.text.primary,
  borderRadius: '50%',
  animation: 'inverted-rotation linear infinite',
  animationDuration: '20s',
  '@keyframes inverted-rotation': {
    from: {
      transform: 'rotate(360deg)',
    },
    to: {
      transform: 'rotate(0)',
    },
  },
}))

const Orbit = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  borderColor: theme.palette.text.secondary,
  border: '1px solid',
  animation: 'rotation linear infinite',
  animationDuration: '20s',
  '@keyframes rotation': {
    from: {
      transform: 'translate(-50%, -50%) rotate(0deg)',
    },
    to: {
      transform: 'translate(-50%, -50%) rotate(360deg)',
    },
  },
  '&:hover': {
    animationPlayState: 'paused',
    '& > div': {
      animationPlayState: 'paused',
    },
  },
}))

const Text = styled('div')(({ theme }) => ({
  whiteSpace: 'nowrap',
  fontWeight: 700,
  color: theme.palette.text.secondary,
  transform: 'rotate(2deg)',
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [5.19, null, 6.51, null, null, null, 16],
    lineHeight: ['6px', null, 7.93, null, null, null, '19px'],
    marginTop: [-8, null, -10, null, null, null, -26],
  }),
}))

const BigLovePlanet = styled(Planet)(({ theme }) => ({
  top: 45,
  right: 1,
  ...getBreakpointsStylesByArray(theme, {
    top: [1, null, 2, null, null, null, 45],
    width: [2.6, null, 3.25, null, null, null, 8],
    height: [2.6, null, 3.25, null, null, null, 8],
  }),
}))

const BigLoveOrbit = styled(Orbit)(({ theme }) => ({
  zIndex: 6,
  ...getBreakpointsStylesByArray(theme, {
    width: [21, null, 26, null, null, null, 64],
    height: [21, null, 26, null, null, null, 64],
  }),
}))

const BigLoveText = styled(Text)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [4, null, 6, null, null, null, 10],
    marginLeft: [-6, null, -8, null, null, null, -16],
  }),
}))

const FriendlyPlanet = styled(Planet)(({ theme }) => ({
  left: 20,
  animationDuration: '30s',
  ...getBreakpointsStylesByArray(theme, {
    top: [-1, null, -2, null, null, null, 8],
    width: [2.6, null, 3.25, null, null, null, 8],
    height: [2.6, null, 3.25, null, null, null, 8],
  }),
}))

const FriendlyOrbit = styled(Orbit)(({ theme }) => ({
  zIndex: 5,
  animationDuration: '30s',
  ...getBreakpointsStylesByArray(theme, {
    width: [42, null, 52, null, null, null, 128],
    height: [42, null, 52, null, null, null, 128],
  }),
}))

const FriendlyText = styled(Text)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [-8, null, -10, null, null, null, -26],
    marginLeft: [-8, null, -8, null, null, null, -14],
  }),
}))

const MinimalistPlanet = styled(Planet)(({ theme }) => ({
  animationDuration: '40s',
  ...getBreakpointsStylesByArray(theme, {
    top: [32, null, 40, null, null, null, 96],
    left: [-3, null, -4, null, null, null, -8],
    width: [5.19, null, 6.51, null, null, null, 16],
    height: [5.19, null, 6.51, null, null, null, 16],
  }),
}))

const MinimalistOrbit = styled(Orbit)(({ theme }) => ({
  zIndex: 4,
  animationDuration: '40s',
  ...getBreakpointsStylesByArray(theme, {
    width: [73, null, 91, null, null, null, 224],
    height: [73, null, 91, null, null, null, 224],
  }),
}))

const MinimalistText = styled(Text)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginLeft: [-8, null, -12, null, null, null, -25],
  }),
}))

const DreamsAndFeelingPlanet = styled(Planet)(({ theme }) => ({
  animationDuration: '50s',
  ...getBreakpointsStylesByArray(theme, {
    top: [90, null, 120, null, null, null, 329],
    left: [3, null, 8, null, null, null, 43],
    width: [5.19, null, 6.51, null, null, null, 16],
    height: [5.19, null, 6.51, null, null, null, 16],
  }),
}))

const DreamsAndFeelingOrbit = styled(Orbit)(({ theme }) => ({
  zIndex: 3,
  animationDuration: '50s',
  ...getBreakpointsStylesByArray(theme, {
    width: [131, null, 164, null, null, null, 404],
    height: [131, null, 164, null, null, null, 404],
  }),
}))

const DreamsAndFeelingText = styled(Text)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginLeft: [-16, null, -20, null, null, null, -49],
  }),
}))

const EasySolutionsPlanet = styled(Planet)(({ theme }) => ({
  backgroundColor: theme.palette.accent,
  '&::after': {
    content: "''",
    display: 'block',
    position: 'absolute',

    background: theme.palette.accent,
    borderRadius: '50%',
    zIndex: -1,
    animation: 'grow 2s ease-in-out infinite',
    ...getBreakpointsStylesByArray(theme, {
      top: [-8, null, -10, null, null, null, -8],
      left: [-7, null, -10, null, null, null, -8],
      width: [23.37, null, 29.28, null, null, null, 40],
      height: [23.37, null, 29.28, null, null, null, 40],
    }),
  },
  '@keyframes grow': {
    '0%': {
      transform: 'scale(1,1)',
      opacity: 0.8,
    },
    '100%': {
      transform: 'scale(1.8,1.8)',
      opacity: 0,
    },
  },
  animationDuration: '50s',
  ...getBreakpointsStylesByArray(theme, {
    top: [40, null, 48, null, null, null, 148],
    right: [12, null, 16, null, null, null, 24],
    width: [7.79, null, 9.76, null, null, null, 24],
    height: [7.79, null, 9.76, null, null, null, 24],
  }),
}))

const EasySolutionsOrbit = styled(Orbit)(({ theme }) => ({
  zIndex: 2,
  animationDuration: '50s',
  ...getBreakpointsStylesByArray(theme, {
    width: [196, null, 246, null, null, null, 604],
    height: [196, null, 246, null, null, null, 604],
  }),
}))

const EasySolutionsText = styled(Text)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [-16, null, -20, null, null, null, -45],
    marginLeft: [-20, null, -24, null, null, null, -56],
    fontSize: [8.12, null, 10, null, null, null, 25],
    lineHeight: [10, null, 12, null, null, null, '30px'],
  }),
}))

const DigitalEthicsPlanet = styled(Planet)(({ theme }) => ({
  animationDuration: '40s',
  ...getBreakpointsStylesByArray(theme, {
    bottom: [40, null, 48, null, null, null, 148],
    left: [25, null, 34, null, null, null, 61],
    width: [10.39, null, 13, null, null, null, 32],
    height: [10.39, null, 13, null, null, null, 32],
  }),
}))

const DigitalEthicsOrbit = styled(Orbit)(({ theme }) => ({
  zIndex: 1,
  animationDuration: '40s',
  ...getBreakpointsStylesByArray(theme, {
    width: [261, null, 327, null, null, null, 804],
    height: [261, null, 327, null, null, null, 804],
  }),
}))

const DigitalEthicsText = styled(Text)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginLeft: [-10, null, -14, null, null, null, -25],
  }),
}))
