import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface DragAndDropProps {
  onDrop: (acceptedFiles: File[]) => void;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ onDrop }) => {
  const onDropCallback = useCallback((acceptedFiles: File[]) => {
    onDrop(acceptedFiles);
  }, [onDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback,
    accept: {
      'image/*': [], // Updated accept format
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-6 cursor-pointer flex flex-col items-center justify-center transition-colors duration-200 ease-in-out
      ${isDragActive ? 'border-[#7e2ee7] bg-gray-100' : 'border-gray-300 bg-gray-50'}
    `}
    >
      <input {...getInputProps()} />
      <p className="text-sm text-black opacity-60 font-normal font-['Poppins'] leading-normal">
        Drag & drop photos here, or click to select files
      </p>
      <p className="text-xs text-gray-400 font-normal font-['Poppins'] leading-tight mt-2">
        Supported formats: JPEG, PNG, GIF
      </p>
    </div>
  );
};

export default DragAndDrop;
