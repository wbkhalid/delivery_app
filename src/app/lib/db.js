const { NEXT_APP_USERNAME, NEXT_APP_PASSWORD } = process.env;
export const connectionStr = `mongodb+srv://${NEXT_APP_USERNAME}:${NEXT_APP_PASSWORD}@cluster0.fbari7l.mongodb.net/restoDB?retryWrites=false`;
