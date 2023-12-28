import type { PlasmoMessaging } from "@plasmohq/messaging"
import { getRSS } from "~/background/rss"
 
const handler: PlasmoMessaging.MessageHandler = (req) => {
  getRSS(req.sender.tab.id, req.sender.tab.url)
}

export default handler