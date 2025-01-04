import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'

import {fetchChannelAPI, fetchListAPI} from "@/apis/home.ts";

fetchChannelAPI().then((res) => {
    console.log(res.data.data.channels)
})

type ReqParams = {
    channel_id: string
    timestamp: string
}

const param : ReqParams = {
    channel_id: "0",
    timestamp: "1654835148606"
}
fetchListAPI(param).then((res) => {
    console.log(res.data.data.results)
})

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
