export const Tag = ({
  tag,
  handleTagClick,
}: {
  tag: string;
  handleTagClick: (tag: string) => void;
}) => {
  return (
    <button
      key={tag}
      className='badge badge-primary badge-lg mx-1'
      onClick={() => handleTagClick(tag)}
    >
      {tag}
    </button>
  );
};
