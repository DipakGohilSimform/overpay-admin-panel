import styled from 'styled-components'

export const SearchButtonWrapper = styled.button`
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
  .search__field {
    position: relative;
    width: 40px;
    height: 45px;
    transition: width 0.3s ease;
    overflow: hidden;
  }

  &.search.active .search__field {
    width: 300px !important;
    border-width: 2px;
  }

  .search__input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 700;
    color: var(--neutral-900);
    background-color: transparent;
    border: none;
    outline: none;
    opacity: 0;
    transition: width 0.3s ease;
  }

  &.search.active .search__input {
    opacity: 1;
  }

  &.active {
    &.search {
      width: unset;
      border-radius: 20px;
    }
  }

  .search__button {
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
  }
  &.search.active .search__button {
    right: 10px;
  }
`
