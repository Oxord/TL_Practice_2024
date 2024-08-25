type CardLearnPreviewProps = {
    cardSide: string;
  };
  
  export const CardLearnPreview = ({ cardSide }: CardLearnPreviewProps) => {
    
    return(
    <div className="learn-card-preview__card-preview  card-preview">
      <div className="element-preview__element-name">{cardSide}</div>
    </div>
  )};