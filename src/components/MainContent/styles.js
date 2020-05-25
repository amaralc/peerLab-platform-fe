import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  width: 100%;
  padding: 0rem 2rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;

  @media (max-width: 300px) {
    min-width: 270px;
  }
`;

export const StyledLink = styled(Link)`
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
  border-bottom: 1px solid #ffd900;
`;

export const SideBarGap = styled.div`
  padding: 0.5rem 1.25rem;
  height: 2rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
`;

export const CentralHeading = styled.div`
  padding: 0.5rem 0.25rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
`;

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  &:last-child {
    margin-bottom: 3rem;
  }
`;

export const Title = styled.h1`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  text-align: left;
  font-size: 20px;
  color: #495057;
  padding: 0.25rem 0;
  border-top: 1px solid #ffd900;
`;
