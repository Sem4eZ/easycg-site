import { styled } from '@mui/material/styles'
import { useState } from 'react'

import { ServiceType } from 'entities/services/types'

import { CheckIcon } from 'shared/icons/check'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { spaceArr } from 'shared/theme'
import { FilterLink } from 'shared/ui/link'
import { Modal } from 'shared/ui/modal/default'

import { FilterLinkWrapper } from '../filter-link-wrapper'

type FilterValue = Array<ServiceType | 'all'>

const FILTER: {
  title: string
  value: FilterValue
}[] = [
  {
    title: 'all',
    value: ['all'],
  },
  {
    title: 'APP',
    value: ['APP'],
  },
  {
    title: 'CGI',
    value: ['CGI'],
  },
  {
    title: 'XR',
    value: ['XR'],
  },
  {
    title: 'AR',
    value: ['AR'],
  },
  {
    title: 'VR',
    value: ['VR'],
  },
]

interface Props {
  initial?: FilterValue
}

export const useServicesFilter = ({ initial }: Props) => {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState<FilterValue>(initial ? initial : ['all'])

  const handleClick = (_filter: FilterValue) => () => {
    setOpen(false)
    setFilter(_filter)
  }

  const checkIsActive = (value: FilterValue) => {
    return filter.join(' ') === value.join(' ') ? 1 : 0
  }

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return {
    template: (
      <section>
        <DesktopFiler>
          {FILTER.map(filterData => (
            <FilterLinkWrapper
              key={filterData.title}
              active={checkIsActive(filterData.value)}
              onClick={handleClick(filterData.value)}
              style={{ cursor: 'pointer' }}>
              {filterData.title}
            </FilterLinkWrapper>
          ))}
        </DesktopFiler>

        <MobileFilter>
          <div>
            <FilterLink
              active={checkIsActive(FILTER[0].value)}
              onClick={handleClick(FILTER[0].value)}>
              {FILTER[0].title}
            </FilterLink>
          </div>
          <div>
            <FilterLink
              active={checkIsActive(FILTER[0].value) ? 0 : 1}
              onClick={openModal}>
              type
            </FilterLink>
          </div>
          <ModalStyled
            title="Service filter"
            hideTitle
            open={open}
            onClose={closeModal}>
            <MobileFilterContainer>
              {FILTER.filter(filterData => filterData.title !== 'all').map(
                filterData => (
                  <MobileFilterLink
                    key={filterData.title}
                    data-active={checkIsActive(filterData.value)}
                    active={checkIsActive(filterData.value)}
                    onClick={handleClick(filterData.value)}>
                    {filterData.title}
                    {Boolean(checkIsActive(filterData.value)) && (
                      <CheckIconWrapper>
                        <CheckIcon />
                      </CheckIconWrapper>
                    )}
                  </MobileFilterLink>
                ),
              )}
            </MobileFilterContainer>
          </ModalStyled>
        </MobileFilter>
      </section>
    ),
    filter,
  }
}

const DesktopFiler = styled('div')(({ theme }) => ({
  justifyContent: 'space-between',
  gap: 10,
  ...getBreakpointsStylesByArray(theme, {
    display: ['none', null, null, null, null, null, 'flex'],
  }),
}))

const MobileFilter = styled('div')(({ theme }) => ({
  gridTemplateColumns: 'repeat(2, 1fr)',
  ...getBreakpointsStylesByArray(theme, {
    display: ['grid', null, null, null, null, null, 'none'],
  }),
}))

const MobileFilterContainer = styled('section')(({ theme }) => ({
  display: 'grid',
  ...getBreakpointsStylesByArray(theme, {
    gridRowGap: [32, 5, 32, 10, 40, 48],
  }),
}))

const CheckIconWrapper = styled('div')(({ theme }) => ({
  width: 16,
  svg: {
    width: '100%',
  },
}))

const ModalStyled = styled(Modal)(({ theme }) => ({
  '& .MuiDialog-paper': {
    height: '100%',
    maxHeight: 'unset',
    margin: 0,
    width: '100%',
    ...getBreakpointsStylesByArray(theme, {
      paddingLeft: spaceArr,
      paddingRight: spaceArr,
    }),
  },
  '& .MuiDialogContent-root': {
    padding: 0,
  },
}))

const MobileFilterLink = styled(FilterLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingBottom: `${pxToRem(8)} !important`,
  fontWeight: 700,
  color: theme.palette.text.primary,
  '&:after': {
    height: 1,
  },
  '&[data-active="0"]:after': {
    left: 0,
    backgroundColor: theme.palette.text.disabled,
  },
  ...getBreakpointsStylesByArray(theme, {
    paddingRight: [12, null, 0, null, 83],
  }),
}))
