import styled, { css } from 'styled-components'

import { ListItem } from 'material-ui/List'
import Input from 'material-ui/Input'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0;
  transform: translate3d(0, 0, 0);
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1);

  ${props => props.isDrawerOpen && css`
    transform: translateX(182px);
  `}
`

export const SearchBox = styled(Input)`
  padding: 6px 16px;
`

export const SourceItem = styled(ListItem)`
  padding: 6px 16px;
`

export const Body = styled.div`
  display: flex;
`

export const ListContainer = styled.div`
  width: 100%;
  word-break: break-word;
`
