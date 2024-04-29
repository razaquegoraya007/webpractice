// props: way to receive data
export const User = ({
  // default props
  username = "Loki",
  email = "Email@gmail.com",
  address = { city: "Custom City", zipcode: "0011" },
  index,
}) => {
  return (
    <div class="user">
      <img
        src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${username}`}
        alt="user"
      />
      <div>{username}</div>
      <div>{email}</div>
      <div>
        Address :{" "}
        <span>
          {/* conditional rendering with or condition */}
          {address?.city || "Custom City"}, ({address?.zipcode || "0011"})
        </span>
      </div>
      {/* {index % 2 == 0 && JSON.stringify(address)} */}
    </div>
  );
};
