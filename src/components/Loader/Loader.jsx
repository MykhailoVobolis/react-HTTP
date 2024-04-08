import GridLoader from "react-spinners/GridLoader";
import css from "./Loader.module.css";

export default function Loader({ color, loading }) {
  return (
    <div className={css.loader}>
      <GridLoader color={color} loading={loading} size={15} />
    </div>
  );
}
