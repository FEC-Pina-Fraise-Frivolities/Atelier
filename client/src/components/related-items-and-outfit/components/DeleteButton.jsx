import { React } from 'react';

function DeleteButton({ deleteId, setOutfitArr }) {
  const handleClick = () => {
    const outfit = JSON.parse(window.localStorage.getItem('outfitArr'));
    const index = outfit.indexOf(deleteId);
    outfit.splice(index, 1);
    setOutfitArr(outfit);
    window.localStorage.setItem('outfitArr', JSON.stringify(outfit));
  };
  return (
    <div>
      <button className="relatedbutton" type="button" onClick={handleClick}>delete</button>
    </div>
  );
}
export default DeleteButton;
