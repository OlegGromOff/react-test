import classes from "./Search.module.css";
import cn from "classnames"; // использую чтобы удобно динамически добавлять классы
// npm i classnames

const Search = (props) => {
  const {
    value,
    onChange,
    children = "Search",
    placeholder = "search",
  } = props;

  const inputClass = cn({
    [classes.input]: true, // classes.input будет всегда
    [classes.filled]: value.length, // classes.filled будет если value не пустое
  });

  return (
    <label className={classes.label}>
      {children}
      <input
        className={inputClass}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Search;
