import styled, { css } from 'styled-components'

import { ListItem } from 'material-ui/List'
import Input from 'material-ui/Input'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
`

export const LayoutContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  will-change: left;
  transition: left 225ms cubic-bezier(0, 0, 0.2, 1);

  ${props => props.isDrawerOpen && css`
    left: 182px;
  `}
`

export const SearchBox = styled(Input)`
  flex: 0 0 auto;
  padding: 6px 16px;
`

export const SourceItem = styled(ListItem)`
  padding: 6px 16px;
`

export const AppBody = styled.div`
  display: flex;
  flex: 1 0 100%;
`

export const ListContainer = styled.div`
  width: 100%;
  word-break: break-word;
`

export const DetailContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`

export const DetailBody = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px 14px 40px;
`
