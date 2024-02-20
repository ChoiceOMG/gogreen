// Preview.js

const Preview = ({ contentHTML }: { contentHTML: string }) => {
  return (
    <div className="p-20">
      <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
    </div>
  );
};

export default Preview;
