import { Circles } from 'react-loader-spinner';
export const Loader = () => {
    return (
        <Circles
            height="80"
            width="80"
            color="#1d11ca"
            ariaLabel="circles-loading"
            wrapperStyle={{ position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
            wrapperClass=""
            visible={true}
        />
    );
};