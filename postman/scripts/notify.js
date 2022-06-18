require("dotenv").config();
const axios = require("axios");

const { collectResults } = require("./collect-results");

(() => {
  const { total, pending, failed } = collectResults();
  const messageCard = buildMessageCard(total, pending, failed);
  axios
    .post(process.env.MS_TEAM_WEBHOOK_URL, messageCard)
    .then((_) => {
      console.log("Teams Channel has been notified");
    })
    .catch((error) => console.error("Failed to notify: ", error));
})();

function buildMessageCard(total, pending, failed) {
  return {
    type: "message",
    attachments: [
      {
        contentType: "application/vnd.microsoft.card.adaptive",
        contentUrl: null,
        content: {
          $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
          type: "AdaptiveCard",
          version: "1.2",
          body: [
            {
              type: "TextBlock",
              text: "Automated API Testing",
            },
            {
              type: "FactSet",
              facts: [
                {
                  title: "Total",
                  value: total,
                },
                {
                  title: "Pending",
                  value: pending,
                },
                {
                  title: "Failed",
                  value: failed,
                },
              ],
            },
          ],
        },
      },
    ],
  };
}
