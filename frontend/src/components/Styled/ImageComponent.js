import styled, { css } from "styled-components";

const ImageComponent = styled.img`

    ${(props) =>
        props.CoverVariant
            ? css`
                  width: 100%;
                  height: 100%;

                  object-position: -99999px -99999px;

                  background: url('${(props) => props.src || ''}');
                  background-position-x: left;
                  background-position-y: bottom;
                  background-size: cover;
                  background-repeat: no-repeat;

              `
            : css`
                  height: 100%;
                  width: 100%;
                  object-fit: fill;
              `}
`;
    

export default ImageComponent;