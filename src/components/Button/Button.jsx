import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';
import { Box } from 'Box';

export const Button = ({ handleClick }) => {
    return (
        <Box display="flex" justifyContent="center">
        
            <ButtonLoad onClick={() => handleClick()}>
            Loadmore
            </ButtonLoad>
        </Box>
    );
};

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
};