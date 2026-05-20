import { Empty } from "../../assets/image";

interface EmptyStubProps {
  title?: string;
}

export const EmptyStub = ({ title = "Ничего не найдено" }: EmptyStubProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <>
        <img
          style={{ width: "100px", height: "100px" }}
          src={Empty}
          alt="empty list"
        />
        <h2>{title}</h2>
      </>
    </div>
  );
};
