import { comms } from "./dummy"


export function Home () {

      const handleSubmit = async () => {

            const response = document.getElementById("response")
            const query = document.getElementById("query")

            // ------ Start activityIcon display --------

            // save the query and response to the mongodb cluster

            // gemini action 
            // push to gemini_route
            // await query processing (internet speed :) )
            // retrieve response and render to frontend

            // ------- Stop AcitivityIcon display -----------
      }

      return (
        <div style={{ textAlign: "center " }}>
          <p style={{ backgroundColor: "skyblue", color: "white" }}>
            Gemini Chat Bot
          </p>

          {comms.map((item) => {
            return (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 60,
                    fontSize: 12,
                    backgroundColor: "pink",
                    borderRadius: 5,
                    paddingInline: 5,
                    marginBottom: 10
                  }}
                >
                  <p style={{ fontWeight: "bold", paddingRight: 5 }}>
                    Gemini:{" "}
                  </p>
                  <p id="response">{item.response}</p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: 12,
                    backgroundColor: "skyblue",
                    borderRadius: 5,
                    paddingInline: 5,
                    marginBottom: 70,
                  }}
                >
                  <p style={{ fontWeight: "bold", paddingRight: 5 }}>User: </p>
                  <p id="output">{item.query}</p>
                </div>
              </div>
            );
          })}

          <input
            style={{ height: 50, width: 300 }}
            id="query"
            placeholder="ask me anything"
          />
          <br style={{ display: "flex", marginTop: 50 }}></br>

          <button onClick={handleSubmit}>Submit</button>
        </div>
      );
}