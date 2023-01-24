import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

import { ProjectTags, projectTags } from 'entities/project/types'

import { PlusIcon } from 'shared/icons/plus'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { spaceArr } from 'shared/theme'
import { Modal } from 'shared/ui/modal/default'
import { FilterTag } from 'shared/ui/tags'
import { LFont } from 'shared/ui/typography'

type FilterValue = Array<ProjectTags>

interface Props {
  initial?: FilterValue
}

export const useProjectsFilter = ({ initial }: Props) => {
  const { isDesktopS, isLaptop, isMacbook, isDesktop } = useGetDevice()
  const [open, setOpen] = useState(false)
  const [draftFilter, setDraftFilter] = useState<FilterValue>(
    initial ? initial : [],
  )
  const [filter, setFilter] = useState<FilterValue>(initial ? initial : [])

  const handleClick = (_filter: ProjectTags) => () => {
    setDraftFilter(prevFilter => {
      return prevFilter.includes(_filter)
        ? prevFilter.filter(filter => filter !== _filter)
        : [...prevFilter, _filter]
    })
  }

  const activateFilter = () => {
    setOpen(false)
    setFilter(draftFilter)
  }

  const checkIsActive = (value: ProjectTags) => {
    return draftFilter.includes(value)
  }

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
    setDraftFilter(filter)
  }

  const clearFilter = () => {
    setDraftFilter([])
  }

  const showClearAllInFooter = isDesktopS || isLaptop || isMacbook || isDesktop

  return {
    template: (
      <section>
        <FilterButtonStyled onClick={openModal} endIcon={<PlusIcon />}>
          filters
        </FilterButtonStyled>

        <ModalStyled
          title="Projects filter"
          hideTitle
          open={open}
          onClose={closeModal}
          keepMounted={true}>
          <Header>
            <LFont>chose tags</LFont>
            {!showClearAllInFooter && (
              <ClearButton endIcon="" onClick={clearFilter}>
                clear all
              </ClearButton>
            )}
          </Header>

          <Tags>
            {projectTags.map(projectTag => {
              return (
                <FilterTag
                  active={checkIsActive(projectTag)}
                  onClick={handleClick(projectTag)}>
                  {projectTag}
                </FilterTag>
              )
            })}
          </Tags>

          <Footer>
            {showClearAllInFooter && (
              <ClearButton endIcon="" onClick={clearFilter}>
                clear all
              </ClearButton>
            )}
            <ApplyButoon onClick={activateFilter}>apply filters</ApplyButoon>
          </Footer>
        </ModalStyled>
      </section>
    ),
    filter,
  }
}

const Tags = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
  }),
}))

const ModalStyled = styled(Modal)(({ theme }) => ({
  '&[aria-hidden="true"]': {
    '& .MuiDialog-container': {
      ...getBreakpointsStylesByArray(theme, {
        transform: [
          'translateX(0)',
          null,
          null,
          null,
          null,
          null,
          'translateX(-100vw)',
        ],
      }),
    },
  },
  '& .MuiDialog-paper': {
    margin: 0,
    width: '100%',
    paddingLeft: 0,
    paddingRight: 0,
    ...getBreakpointsStylesByArray(theme, {
      height: ['100%', null, null, null, null, 1117],
      maxHeight: ['100%', null, null, null, null, '98vh'],
      width: ['100%', null, null, null, null, null, 871],
    }),
  },
  '& .MuiDialog-container': {
    transform: 'translateX(0)',
    ...getBreakpointsStylesByArray(theme, {
      transition: [
        'unset',
        null,
        null,
        null,
        null,
        null,
        'transform 1s !important',
      ],
      justifyContent: ['center', null, null, null, null, null, 'flex-start'],
    }),
  },
  '& .MuiDialogContent-root': {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    padding: 0,
    overflowX: 'hidden',
  },
}))

const Header = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: 24,
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [40, 32, 40, null, 64, null, 56],
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
  }),
}))

const Footer = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: 96,
  paddingBottom: 24,
  ...getBreakpointsStylesByArray(theme, {
    justifyContent: ['flex-end', null, null, null, null, null, 'space-between'],
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
  }),
}))

const ClearButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, null, null, null, 25, null, 42],
    lineHeight: [19, null, null, null, 30, null, 51],
  }),
}))

const ApplyButoon = styled(Button)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [16, null, 25, null, 42],
    lineHeight: [19, null, 30, null, 51],
  }),
}))

const FilterButtonStyled = styled(Button)(() => ({
  '& svg': {
    width: '100%',
    height: 'auto',
  },
}))
