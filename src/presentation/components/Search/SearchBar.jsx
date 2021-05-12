import React from 'react';
import { Input, Button, Container } from './styles';
import { SearchIcon } from '../fonts/FontAwesome';

const SearchBar = () => (
    <Container>
        <Input placeholder="Search..." type="text" />
        <Button type="button">
            <SearchIcon />
        </Button>
    </Container>
);

export default SearchBar;
