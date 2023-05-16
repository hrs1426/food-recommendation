import background from "../assets/background.webp";

const InfoPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "200px",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          position: "relative",
        }}
      >
        <button
          style={{
            position: "absolute",
            right: 20,
            top: 15,
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{}}>Search</p>
          <div style={{ display: "flex", width: "50%", marginTop: "12px" }}>
            <input
              type="text"
              id="search"
              className="search"
              style={{
                width: "50%",
                flex: 1,
                marginRight: "12px",
              }}
              placeholder="Enter food name"
            />
            <button>Search</button>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <table
            style={{
              border: "1px solid",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr style={{ border: "1px solid" }}>
                <th>Data 1</th>
                <th>Data 2</th>
              </tr>
              <tr>
                <td>Calcutta</td>
                <td>Orange</td>
              </tr>
              <tr>
                <td>Robots</td>
                <td>Jazz</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
