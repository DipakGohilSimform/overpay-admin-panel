import { breakpointsDown } from '@/config/variables'
import styled from 'styled-components'

export const SearchButtonWrapper = styled.button`
  height: 45px;
  &.search {
    position: relative;
    max-width: 400px;
    height: 50px;
    margin: 0 auto;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    border: 0;
    font-size: 24px;
    font-weight: 700;
    background: var(--neutral-60);
    box-shadow: none;
    color: var(--neutral-900);
    &:hover {
      background: var(--neutral-200);
    }
  }
  .search-field {
    position: relative;
    width: 40px;
    height: 45px;
    transition: width 0.3s ease;
    overflow: hidden;
  }

  &.search.active .search-field {
    width: 300px !important;
    border-width: 2px;
  }

  .search-input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 700;
    color: var(--neutral-900);
    background: transparent;
    border-radius: 20px;
    border: none;
    outline: none;
    opacity: 0;
    transition: width 0.3s ease;
  }

  &.search.active .search-input {
    opacity: 1;
  }

  &.active {
    &.search {
      width: unset;
      border-radius: 20px;
    }
  }

  .search-button {
    position: absolute;
    top: 50%;
    right: 5px;
    width: 35px;
    height: 35px;
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: translateY(-50%);
    transition: 0.3s;
    padding: 0;
    border: none;
    outline: none;
    &.search-button {
      &:active {
        background: var(--neutral-60);
      }
    }
    @media ${breakpointsDown.lg} {
      pointer-events: none;
    }
  }
  &.search.active .search-button {
    right: 10px;
  }
`
