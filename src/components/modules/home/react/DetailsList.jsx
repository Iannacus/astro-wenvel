export default function DetailsList({ data, selected, handleSelect }) {
  return (
    <div class="flex column">
      {data.map((item) => (
        <div className="item flex align-center gap-1">
          <h4
            className={selected === item.title ? "selected c-dark" : "c-grey"}
            onClick={() => handleSelect(item.title)}
          >
            <i
              className={`${item.icon} ${selected === item.title && "gradient"}`}
              style={{ fontSize: "3rem" }}
            />
            &nbsp;&nbsp;
            {item.title}
          </h4>
        </div>
      ))}
    </div>
  );
}
