import { Tabs } from 'antd-mobile'
import {useFetchChannels} from './useTabs'

import './style.css'
import HomeList from "@/pages/Home/HomeList";

const Home = () => {
    const { channels } = useFetchChannels()
  return (
      <div className= "tabContainer">
        <Tabs defaultActiveKey="0">
            {channels.map((channel) => (
                <Tabs.Tab title={channel.name} key={channel.id}>
                    <div className="listContainer">
                        <HomeList channelId={'' + channel.id} />
                    </div>
                </Tabs.Tab>

            ))}

        </Tabs>

      </div>
  )
}

export default Home