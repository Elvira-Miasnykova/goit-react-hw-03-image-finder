import { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar"
import { toast, ToastContainer } from "react-toastify";
import { fetchImage } from "services/api";
import { Loader } from "./Loader/Loader";
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from "./Searchbar/ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Box } from "Box";

export class App extends Component {
  state = {
    page: 1,
    imageName: '',
    images: [],
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    try {
      const { page, imageName} = this.state;
      if (prevState.imageName !== imageName ||
        page !== prevState.page) {
        this.setState({isLoading: true});
        await fetchImage(page, imageName).then(data => {
          return (
            data.hits.length === 0
              ? toast.error('Oops! We did not find any images matching your request. Please try again.')
              : this.setState(prevState => ({
                images: [...prevState.images, ...data.hits],
              }))
          )
        })
        this.setState({isLoading: false});
      }
      } catch (error) {
        this.setState({ isLoading: true });
        console.log(error)
        this.setState({ isLoading: false })
    }
    // finally { this.setState({ isLoading: false }) };
    }
  

  handleSearchbarSubmit = imageName => {
    this.setState({
      imageName: imageName,
      page: 1,
      images: [],
    });
    
    
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading, images } = this.state;
    return (
    <Box margin="0 auto" padding="20">
        {isLoading && <Loader/>}
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ToastContainer autoClose={2000} />
        <ImageGallery images={this.state.images} />
        {images.length > 0 && <Button handleClick={this.loadMore} />}
    </Box>
  );
  }
  
};
