import Rating from "./rating"
const DeleteButton = ({ onDelete }) => {
  return (
    <div>
      <div className="col3_rating_box">
        <div className="delete_button">
          <img src="fluent_delete-32-regular.svg" alt="Delete" onClick={onDelete}/>
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
