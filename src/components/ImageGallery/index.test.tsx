

import {render, screen} from  '@testing-library/react'
import ImageGallery from '.';

describe('Image Gallery', () => {
    test('should render nothing if given an empty array ', () => {
       const {container} =  render(<ImageGallery imageUrls={[]} />)
        expect(container).toBeEmptyDOMElement();
    });


    test('should  render a list of images', () => {
        const imageUrls = ['url1', "url1"];
        render(<ImageGallery imageUrls={imageUrls} />);
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(2);
        imageUrls.forEach((url, index)=> {
            expect(images[index]).toHaveAttribute('src', url)
        })
        
    });
}); 