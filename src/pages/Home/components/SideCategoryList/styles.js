import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListGroup = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  width: 15rem;
`;

export const SideBarItem = styled(Link)`
  position: relative;
  display: block;
  padding: 0.25rem 1.25rem;
  background-color: #f8f9fa !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  width: 100%;
  color: #495057;
  text-align: inherit;

  &:hover,
  &:focus {
    z-index: 1;
    color: #495057;
    text-decoration: none;
    background-color: #f8f9fa;
    background-color: #dae0e5 !important;
  }

  &:active {
    color: #212529;
    background-color: #e9ecef;
    background-color: #dae0e5 !important;
  }
`;

export const SideBarHeading = styled.div`
  padding: 0.5rem 1.25rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 2px solid #ffd900;
`;

export const SideBarGap = styled.div`
  padding: 0.5rem 1.25rem;
  height: 2rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
`;