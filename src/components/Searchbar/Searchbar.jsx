import { Component } from "react"
import { toast } from "react-toastify";
import { ReactComponent as SearchIcon } from 'components/icons/icons8-search.svg';
import { FormButton, HeaderSearchbar, SearchForm, FormInput } from "./Searchbar.styled";

export class Searchbar extends Component{
    state = {
        imageName: '',
    };

    handleNameChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.imageName.trim() === '') {
            toast.error("please input name of image");
            return 
        }
        this.props.onSubmit(this.state.imageName);
        this.setState({imageName: ''});
    }

    render() {
        return (
            <HeaderSearchbar>
                <SearchForm onSubmit={this.handleSubmit}>
                <FormButton type="submit">
                    <SearchIcon width="32" height="32"/>
                </FormButton>

                <FormInput
                    
                    type="text"
                    name="imageName"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.imageName}
                    onChange={this.handleNameChange}
                    />
                    
                </SearchForm>
            </HeaderSearchbar>
        )
        
    }

}