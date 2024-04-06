import React from 'react'
import {Resizable} from 're-resizable';
import Draggable from 'react-draggable';

interface ZoomableImageProps {
  svg: React.ComponentType<any>; // Type for your SVG component
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ svg }) => {
  return (
    <Draggable>
      <Resizable
        defaultSize={{
          width: 200,
          height: 360,
        }}
        style={{
          background: 'none', // Remove background since we're using an SVG
        }}
        lockAspectRatio={true}
      >
        <svg/>
      </Resizable>
    </Draggable>
  );
};

export default ZoomableImage;
