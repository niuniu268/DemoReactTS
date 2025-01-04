import {Image, List, InfiniteScroll } from "antd-mobile";
import {useState, useEffect} from "react";
import {fetchListAPI, ListRes} from "@/apis/home.ts";

type Props = {
    channelId: string;
}

const HomeList = (props: Props) => {
    const { channelId } = props
    const [listRes, setListRes] = useState<ListRes>({
        results: [],
        pre_timestamp: ''+new Date().getDate(),
    })

    useEffect(() => {
        async function getList(){
            try {
                const response = await fetchListAPI({
                    channel_id: '0',
                    timestamp: ''+new Date().getTime(),
                });

                setListRes(response.data.data)
            } catch (e) {
                throw new Error('fetchListAPI error' + e)
            }
        }

        getList()
    },[channelId])

    const [hasMore, setHasMore] = useState(true)
    const loadMore = async () => {
        try {
            const response = await fetchListAPI({
                channel_id: channelId,
                timestamp: listRes.pre_timestamp,
            })

            if (response.data.data.results.length === 0 ){
                setHasMore(true)
            }
            setListRes({
                results: [ ... listRes.results, ...response.data.data.results],
                pre_timestamp: listRes.pre_timestamp,
            })
        } catch (e) {
            throw new Error('fetchListAPI error' + e)
        }
    }
    return (
        <>
            <List>

                {listRes.results.map((item)=> (
                    <List.Item
                    key={item.art_id}
                    prefix={
                            <Image
                            src={item.cover.images?.[0]}
                            style={{borderRadius: 20}}
                            fit = "cover"
                            width={40}
                            height={40}
                            />
                        }
                    description={item.pubdate}>
                    {item.title}
                    </List.Item>
                ))}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </>
    )
}

export default HomeList;