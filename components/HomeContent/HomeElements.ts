import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    padding-bottom: 80px;

    @media (max-width: 768px) {
        padding-bottom: 160px;
    }
`