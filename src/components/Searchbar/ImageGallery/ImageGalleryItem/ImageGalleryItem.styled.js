import styled from "styled-components";

export const GalleryItem = styled.li`
    flex-basis: calc((100% - 120px) / 4);
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 4px;
`

export const GalleryImg = styled.img`
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: scale(1.03);
        cursor: zoom-in;
    }
`