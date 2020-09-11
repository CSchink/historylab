import React from 'react';
import ImageUploader from 'react-images-upload';
 
class ImageUpload extends React.Component {
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
        
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}

export default ImageUpload;