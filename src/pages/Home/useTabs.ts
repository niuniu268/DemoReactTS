import { useEffect, useState} from "react";
import { ChannelItem, fetchChannelAPI} from "@/apis/home.ts";

function useFetchChannels() {
    const [channels, setChannels] = useState<ChannelItem[]>([])
    useEffect(() => {
        const getChannels = async () => {
            try {
                const response = await fetchChannelAPI()
                setChannels(response.data.data.channels)
            } catch (error) {
                throw new Error('Error fetching channels' + error)
            }
        }

        getChannels()

    }, [])
    return {
        channels,
    }




}

export {useFetchChannels}